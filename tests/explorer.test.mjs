import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createResultRow,
  filterExperiments,
  getReviewLabel,
  installExplorer,
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

class FakeElement {
  constructor(tagName = 'div') {
    this.tagName = tagName;
    this.children = [];
    this.events = new Map();
    this.dataset = {};
    this.classList = { remove() {} };
    this.hidden = false;
    this.value = '';
    this._textContent = '';
  }

  set textContent(value) {
    this._textContent = String(value);
    this.children = [];
  }

  get textContent() {
    return this._textContent + this.children.map((child) => child.textContent).join('');
  }

  append(...nodes) {
    this.children.push(...nodes);
  }

  replaceChildren(...nodes) {
    this._textContent = '';
    this.children = [...nodes];
  }

  querySelector(selector) {
    if (selector === 'option[value=""]') {
      return this.children.find((child) => child.tagName === 'option' && child.value === '') ?? null;
    }
    return null;
  }

  addEventListener(type, listener) {
    this.events.set(type, listener);
  }

  dispatch(type, event = {}) {
    this.events.get(type)?.(event);
  }
}

function makeFakeBrowser() {
  const baseURI = 'https://example.test/awesome-thought-experiments/';
  const elements = new Map();
  const getElement = (id) => {
    if (!elements.has(id)) elements.set(id, new FakeElement());
    return elements.get(id);
  };
  const controls = Object.fromEntries(['q', 'category', 'kind', 'difficulty', 'source'].map((name) => [name, new FakeElement()]));
  const form = getElement('explorer-form');
  form.elements = { namedItem: (name) => controls[name] };
  const document = {
    baseURI,
    documentElement: new FakeElement('html'),
    createElement: (tagName) => new FakeElement(tagName),
    getElementById: getElement,
    querySelectorAll: () => [],
  };

  const listeners = new Map();
  const location = { pathname: '/awesome-thought-experiments/', search: '', hash: '' };
  const historyUrls = [`${location.pathname}`];
  let historyIndex = 0;
  const setLocation = (url) => {
    const parsed = new URL(url, baseURI);
    location.pathname = parsed.pathname;
    location.search = parsed.search;
    location.hash = parsed.hash;
  };
  const notifyPopState = () => listeners.get('popstate')?.({ type: 'popstate' });
  const window = {
    location,
    addEventListener: (type, listener) => listeners.set(type, listener),
    history: {
      pushState(_state, _title, url) {
        historyUrls.splice(historyIndex + 1);
        historyUrls.push(String(url));
        historyIndex += 1;
        setLocation(url);
      },
      go(delta) {
        historyIndex += delta;
        setLocation(historyUrls[historyIndex]);
        notifyPopState();
      },
    },
  };
  return { document, window, controls, elements };
}

function descendants(element) {
  return element.children.flatMap((child) => [child, ...descendants(child)]);
}

function installFakeGlobals(t, browser) {
  const previous = new Map(['document', 'window'].map((name) => [name, {
    existed: Object.hasOwn(globalThis, name),
    value: globalThis[name],
  }]));
  globalThis.document = browser.document;
  globalThis.window = browser.window;
  t.after(() => {
    for (const [name, state] of previous) {
      if (state.existed) globalThis[name] = state.value;
      else delete globalThis[name];
    }
  });
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

test('result rows render markup-like data as inert text', (t) => {
  const browser = makeFakeBrowser();
  installFakeGlobals(t, browser);
  const title = '<img src=x onerror="globalThis.compromised=true">';
  const summary = '<script>globalThis.compromised=true</script>';
  const row = createResultRow({ ...entries[0], title, summary }, reviews);
  const nodes = descendants(row);

  assert.ok(row.textContent.includes(title));
  assert.ok(row.textContent.includes(summary));
  assert.equal(nodes.some((node) => ['img', 'script'].includes(node.tagName)), false);
  assert.equal(globalThis.compromised, undefined);
});

test('Back and Forward restore form controls and rendered results', (t) => {
  const browser = makeFakeBrowser();
  installFakeGlobals(t, browser);
  installExplorer({ experiments: entries, reviewsById: reviews });
  const form = browser.elements.get('explorer-form');
  const results = browser.elements.get('results-list');
  const submit = () => form.dispatch('submit', { preventDefault() {} });

  browser.controls.category.value = 'ethics';
  browser.controls.kind.value = 'thought experiment';
  browser.controls.difficulty.value = 'Beginner';
  submit();
  assert.equal(browser.window.location.search, '?category=ethics&kind=thought+experiment&difficulty=Beginner');
  assert.equal(results.children.length, 1);
  assert.ok(results.children[0].textContent.includes('Trolley Problem'));

  browser.controls.category.value = 'identity';
  browser.controls.kind.value = '';
  browser.controls.difficulty.value = '';
  submit();
  assert.equal(browser.window.location.search, '?category=identity');
  assert.equal(results.children.length, 1);
  assert.ok(results.textContent.includes('Ship of Theseus'));

  browser.window.history.go(-1);
  assert.equal(browser.controls.category.value, 'ethics');
  assert.equal(browser.controls.kind.value, 'thought experiment');
  assert.equal(browser.controls.difficulty.value, 'Beginner');
  assert.equal(results.children.length, 1);
  assert.ok(results.textContent.includes('Trolley Problem'));

  browser.window.history.go(1);
  assert.equal(browser.controls.category.value, 'identity');
  assert.equal(browser.controls.kind.value, '');
  assert.equal(browser.controls.difficulty.value, '');
  assert.equal(results.children.length, 1);
  assert.ok(results.textContent.includes('Ship of Theseus'));
});
