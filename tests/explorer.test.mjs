import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterExperiments,
  getReviewLabel,
  loadExplorerData,
  parseExplorerState,
  serializeExplorerState,
} from '../assets/js/explorer.mjs';

const facets = {
  categories: ['identity', 'ethics'],
  kinds: ['thought experiment', 'argument'],
  difficulties: ['Beginner', 'Intermediate', 'Advanced'],
  sources: ['source_checked', 'partially_source_checked', 'needs_source_check'],
};

const entries = [
  {
    id: 'ship-of-theseus',
    title: 'Ship of Theseus',
    summary: 'What allows an object to remain the same while its parts change?',
    themes: ['identity', 'replacement'],
    associated_thinkers: ['Plutarch'],
    category: 'identity',
    kind: 'thought experiment',
    difficulty: 'Beginner',
    file_path: 'experiments/identity/ship-of-theseus.md',
  },
  {
    id: 'trolley',
    title: 'Trolley Problem',
    summary: 'When may saving several lives justify harm to one?',
    themes: ['intention', 'consequences'],
    associated_thinkers: ['Philippa Foot'],
    category: 'ethics',
    kind: 'thought experiment',
    difficulty: 'Beginner',
    file_path: 'experiments/ethics/trolley.md',
  },
  {
    id: 'integrity',
    title: 'Jim and the Captain',
    summary: 'Do personal commitments matter in moral choice?',
    themes: ['integrity', 'consequences'],
    associated_thinkers: ['Bernard Williams'],
    category: 'ethics',
    kind: 'argument',
    difficulty: 'Intermediate',
    file_path: 'experiments/ethics/jim-and-the-captain.md',
  },
];

const reviews = new Map([
  ['ship-of-theseus', { id: 'ship-of-theseus', status: 'source_checked' }],
  ['trolley', { id: 'trolley', status: 'partially_source_checked' }],
]);

function jsonResponse(payload, { ok = true, status = 200, jsonError = null } = {}) {
  return {
    ok,
    status,
    async json() {
      if (jsonError) throw jsonError;
      return payload;
    },
  };
}

function validPayloadFor(url) {
  if (String(url).endsWith('/experiments.json')) return [entries[0]];
  return {
    entries: [
      { id: 'ship-of-theseus', status: 'source_checked' },
    ],
  };
}

test('search matches title, summary, themes, thinkers, and category', () => {
  const cases = [
    ['theseus', 'ship-of-theseus'],
    ['parts change', 'ship-of-theseus'],
    ['replacement', 'ship-of-theseus'],
    ['plutarch', 'ship-of-theseus'],
    ['identity', 'ship-of-theseus'],
  ];
  for (const [q, expectedId] of cases) {
    const result = filterExperiments(entries, reviews, { q });
    assert.deepEqual(result.map((entry) => entry.id), [expectedId], `query: ${q}`);
  }
});

test('text search is case-insensitive and whitespace-trimmed', () => {
  const result = filterExperiments(entries, reviews, { q: '  PHILIPPA FOOT  ' });
  assert.deepEqual(result.map((entry) => entry.id), ['trolley']);
});

test('filters combine with AND and keep source order', () => {
  const result = filterExperiments(entries, reviews, {
    q: '',
    category: 'ethics',
    kind: 'thought experiment',
    difficulty: 'Beginner',
    source: '',
  });
  assert.deepEqual(result.map((entry) => entry.id), ['trolley']);
});

test('a source filter distinguishes checked, partial, and missing ledger records', () => {
  assert.deepEqual(
    filterExperiments(entries, reviews, { source: 'source_checked' }).map((entry) => entry.id),
    ['ship-of-theseus'],
  );
  assert.deepEqual(
    filterExperiments(entries, reviews, { source: 'partially_source_checked' }).map((entry) => entry.id),
    ['trolley'],
  );
  assert.deepEqual(
    filterExperiments(entries, reviews, { source: 'needs_source_check' }).map((entry) => entry.id),
    ['integrity'],
  );
});

test('review labels map the two ledger states and a missing entry accurately', () => {
  assert.equal(getReviewLabel('ship-of-theseus', reviews).label, 'Source checked');
  assert.equal(getReviewLabel('trolley', reviews).label, 'Partially source checked');
  assert.equal(getReviewLabel('integrity', reviews).label, 'Needs source check');
});

test('URL state ignores invalid filters and preserves valid search text', () => {
  const state = parseExplorerState(
    '?q=%20Identity%20&category=unknown&kind=thought%20experiment&difficulty=Impossible&source=unknown',
    facets,
  );
  assert.deepEqual(state, {
    q: 'Identity',
    category: '',
    kind: 'thought experiment',
    difficulty: '',
    source: '',
  });
});

test('URL state serialization round-trips supported parameters', () => {
  const state = {
    q: 'same object',
    category: 'identity',
    kind: 'thought experiment',
    difficulty: 'Beginner',
    source: 'source_checked',
  };
  const serialized = serializeExplorerState(state);
  assert.deepEqual(parseExplorerState(serialized, facets), state);
});

test('a failed request for either asset rejects the entire load', async () => {
  const fetchImpl = async (url) => {
    if (String(url).endsWith('/experiments.json')) return jsonResponse(validPayloadFor(url));
    return jsonResponse(null, { ok: false, status: 503 });
  };
  await assert.rejects(loadExplorerData(fetchImpl), /503|source|data/i);
});

test('non-JSON and malformed experiment payloads reject the entire load', async (t) => {
  const cases = [
    ['non-JSON', jsonResponse(null, { jsonError: new SyntaxError('bad JSON') })],
    ['wrong root shape', jsonResponse({ entries: [] })],
    ['missing required entry fields', jsonResponse([{ id: 'incomplete' }])],
  ];
  for (const [name, brokenResponse] of cases) {
    await t.test(name, async () => {
      const fetchImpl = async (url) =>
        String(url).endsWith('/experiments.json')
          ? brokenResponse
          : jsonResponse(validPayloadFor(url));
      await assert.rejects(loadExplorerData(fetchImpl));
    });
  }
});

test('malformed source-review payloads reject the entire load', async (t) => {
  const cases = [
    ['wrong root shape', jsonResponse([])],
    ['missing entries', jsonResponse({})],
    ['unknown status', jsonResponse({ entries: [{ id: 'x', status: 'verified' }] })],
    ['duplicate ids', jsonResponse({ entries: [
      { id: 'x', status: 'source_checked' },
      { id: 'x', status: 'partially_source_checked' },
    ] })],
  ];
  for (const [name, brokenResponse] of cases) {
    await t.test(name, async () => {
      const fetchImpl = async (url) =>
        String(url).endsWith('/experiments.json')
          ? jsonResponse(validPayloadFor(url))
          : brokenResponse;
      await assert.rejects(loadExplorerData(fetchImpl));
    });
  }
});

test('successful loading returns the collection and source ledger together', async () => {
  const requested = [];
  const fetchImpl = async (url) => {
    requested.push(new URL(String(url)).pathname);
    return jsonResponse(validPayloadFor(url));
  };
  const loaded = await loadExplorerData(fetchImpl);
  assert.deepEqual(loaded.experiments.map((entry) => entry.id), ['ship-of-theseus']);
  assert.equal(loaded.reviewsById.get('ship-of-theseus').status, 'source_checked');
  assert.equal(requested.length, 2);
  assert.ok(requested.some((path) => path.endsWith('/data/experiments.json')));
  assert.ok(requested.some((path) => path.endsWith('/research/source-review-consolidated-2026-11-01.json')));
});
