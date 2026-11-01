const DEFAULT_STATE = Object.freeze({
  q: '',
  category: '',
  kind: '',
  difficulty: '',
  source: '',
});

const REVIEW_LABELS = Object.freeze({
  source_checked: 'Source checked',
  partially_source_checked: 'Partially source checked',
  needs_source_check: 'Needs source check',
});

const VALID_SOURCE_STATES = new Set(Object.keys(REVIEW_LABELS));
const VALID_REVIEW_STATUSES = new Set([
  'source_checked',
  'partially_source_checked',
]);

const CATEGORY_LABELS = Object.freeze({
  ethics: 'Ethics and Moral Philosophy',
  identity: 'Identity and Personal Existence',
  consciousness: 'Consciousness and Philosophy of Mind',
  epistemology: 'Reality, Knowledge, and Skepticism',
  logic: 'Logic, Language, and Paradoxes',
  'time-and-causality': 'Time, Causality, and Free Will',
  physics: 'Physics and the Universe',
  mathematics: 'Mathematics and Probability',
  economics: 'Economics and Decision Theory',
  'artificial-intelligence': 'Artificial Intelligence and Machine Ethics',
  'society-and-justice': 'Society, Justice, and Political Philosophy',
  'science-and-biology': 'Science, Biology, and Evolution',
});

function normalizeText(value) {
  return String(value ?? '').trim().toLocaleLowerCase('en');
}

function hasOnlyStrings(value) {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isValidExperiment(entry) {
  return Boolean(
    entry &&
      typeof entry === 'object' &&
      !Array.isArray(entry) &&
      typeof entry.id === 'string' &&
      typeof entry.title === 'string' &&
      typeof entry.summary === 'string' &&
      typeof entry.category === 'string' &&
      typeof entry.kind === 'string' &&
      typeof entry.difficulty === 'string' &&
      hasOnlyStrings(entry.themes) &&
      hasOnlyStrings(entry.associated_thinkers) &&
      typeof entry.file_path === 'string' &&
      /^experiments\/[a-z-]+\/[a-z0-9-]+\.md$/.test(entry.file_path),
  );
}

function validateExperiments(value) {
  if (!Array.isArray(value)) {
    throw new Error('The collection data is not a list of entries.');
  }
  if (!value.every(isValidExperiment)) {
    throw new Error('The collection data contains an incomplete or invalid entry.');
  }
  const ids = new Set();
  for (const entry of value) {
    if (ids.has(entry.id)) {
      throw new Error(`The collection contains a duplicate entry id: ${entry.id}.`);
    }
    ids.add(entry.id);
  }
  return value;
}

function validateLedger(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value) || !Array.isArray(value.entries)) {
    throw new Error('The source-review file does not contain an entries list.');
  }
  const reviewsById = new Map();
  for (const record of value.entries) {
    if (
      !record ||
      typeof record !== 'object' ||
      Array.isArray(record) ||
      typeof record.id !== 'string' ||
      !VALID_REVIEW_STATUSES.has(record.status)
    ) {
      throw new Error('The source-review file contains an invalid review record.');
    }
    if (reviewsById.has(record.id)) {
      throw new Error(`The source-review file contains a duplicate entry id: ${record.id}.`);
    }
    reviewsById.set(record.id, record);
  }
  return reviewsById;
}

function collectionBaseUrl() {
  if (typeof document !== 'undefined' && document.baseURI) {
    return document.baseURI;
  }
  return new URL('../../', import.meta.url);
}

function requireSuccessfulResponse(response, label) {
  if (!response || response.ok !== true) {
    const status = response && Number.isFinite(response.status) ? ` (HTTP ${response.status})` : '';
    throw new Error(`Could not load ${label}${status}.`);
  }
}

export function getReviewLabel(entryId, reviewsById) {
  const record = reviewsById instanceof Map
    ? reviewsById.get(entryId)
    : reviewsById?.[entryId];
  if (!record) {
    return {
      value: 'needs_source_check',
      label: REVIEW_LABELS.needs_source_check,
    };
  }
  const value = record.status;
  const label = REVIEW_LABELS[value];
  if (!label) {
    throw new Error(`Unknown source-review status for ${entryId}.`);
  }
  return { value, label };
}

export function filterExperiments(entries, reviewsById, state = DEFAULT_STATE) {
  const q = normalizeText(state.q);
  return entries.filter((entry) => {
    if (q) {
      const searchable = [
        entry.title,
        entry.summary,
        ...entry.themes,
        ...entry.associated_thinkers,
        entry.category,
      ].map(normalizeText);
      if (!searchable.some((field) => field.includes(q))) return false;
    }
    if (state.category && entry.category !== state.category) return false;
    if (state.kind && entry.kind !== state.kind) return false;
    if (state.difficulty && entry.difficulty !== state.difficulty) return false;
    if (state.source && getReviewLabel(entry.id, reviewsById).value !== state.source) return false;
    return true;
  });
}

function valuesFromFacets(facets, key) {
  return Array.isArray(facets?.[key]) ? facets[key] : [];
}

function validFacet(value, values) {
  return value !== '' && values.includes(value) ? value : '';
}

export function parseExplorerState(search, facets = {}) {
  const params = new URLSearchParams(String(search ?? '').replace(/^\?/, ''));
  const categories = valuesFromFacets(facets, 'categories');
  const kinds = valuesFromFacets(facets, 'kinds');
  const difficulties = valuesFromFacets(facets, 'difficulties');
  const sources = valuesFromFacets(facets, 'sources');
  return {
    q: (params.get('q') ?? '').trim(),
    category: validFacet(params.get('category') ?? '', categories),
    kind: validFacet(params.get('kind') ?? '', kinds),
    difficulty: validFacet(params.get('difficulty') ?? '', difficulties),
    source: validFacet(params.get('source') ?? '', sources),
  };
}

export function serializeExplorerState(state = DEFAULT_STATE) {
  const params = new URLSearchParams();
  const ordered = [
    ['q', String(state.q ?? '').trim()],
    ['category', String(state.category ?? '')],
    ['kind', String(state.kind ?? '')],
    ['difficulty', String(state.difficulty ?? '')],
    ['source', String(state.source ?? '')],
  ];
  for (const [key, value] of ordered) {
    if (value) params.set(key, value);
  }
  const serialized = params.toString();
  return serialized ? `?${serialized}` : '';
}

export async function loadExplorerData(fetchImpl = globalThis.fetch) {
  if (typeof fetchImpl !== 'function') {
    throw new Error('This browser does not support loading the collection data.');
  }
  const base = collectionBaseUrl();
  const experimentsUrl = new URL('data/experiments.json', base);
  const ledgerUrl = new URL('research/source-review-consolidated-2026-11-01.json', base);
  const [experimentsResponse, ledgerResponse] = await Promise.all([
    fetchImpl(experimentsUrl),
    fetchImpl(ledgerUrl),
  ]);
  requireSuccessfulResponse(experimentsResponse, 'the collection data');
  requireSuccessfulResponse(ledgerResponse, 'the source-review notes');

  let experimentsValue;
  let ledgerValue;
  try {
    [experimentsValue, ledgerValue] = await Promise.all([
      experimentsResponse.json(),
      ledgerResponse.json(),
    ]);
  } catch {
    throw new Error('A collection file could not be read as JSON.');
  }

  return {
    experiments: validateExperiments(experimentsValue),
    reviewsById: validateLedger(ledgerValue),
  };
}

function categoryLabel(value) {
  return CATEGORY_LABELS[value] ?? value.replaceAll('-', ' ').replace(/\b\p{L}/gu, (letter) => letter.toLocaleUpperCase('en'));
}

function kindLabel(value) {
  return value.replace(/\b\p{L}/gu, (letter) => letter.toLocaleUpperCase('en'));
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, 'en'));
}

function addOptions(select, values, labelFor, placeholder) {
  const existing = select.querySelector('option[value=""]');
  select.replaceChildren();
  const allOption = document.createElement('option');
  allOption.value = '';
  allOption.textContent = placeholder;
  select.append(allOption);
  for (const value of values) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = labelFor(value);
    select.append(option);
  }
  if (existing && !existing.value) allOption.value = existing.value;
}

function toPageHref(markdownPath) {
  const pagePath = markdownPath.replace(/\.md$/i, '.html');
  return new URL(pagePath, document.baseURI).href;
}

function makeMetaSpan(text, className = '') {
  const span = document.createElement('span');
  if (className) span.className = className;
  span.textContent = text;
  return span;
}

export function createResultRow(entry, reviewsById) {
  const item = document.createElement('li');
  item.className = 'result-row';

  const heading = document.createElement('div');
  heading.className = 'result-row__heading';
  const title = document.createElement('h4');
  title.className = 'result-row__title';
  const link = document.createElement('a');
  link.href = toPageHref(entry.file_path);
  link.textContent = entry.title;
  title.append(link);
  heading.append(title);

  const summary = document.createElement('p');
  summary.className = 'result-row__summary';
  summary.textContent = entry.summary;

  const meta = document.createElement('p');
  meta.className = 'result-row__meta';
  meta.append(
    makeMetaSpan(categoryLabel(entry.category)),
    makeMetaSpan(kindLabel(entry.kind)),
    makeMetaSpan(entry.difficulty),
  );
  const review = getReviewLabel(entry.id, reviewsById);
  const reviewSpan = makeMetaSpan(review.label, 'result-row__review');
  reviewSpan.dataset.state = review.value;
  meta.append(reviewSpan);

  item.append(heading, summary, meta);
  return item;
}

function countText(count) {
  return `${count.toLocaleString('en')} ${count === 1 ? 'entry' : 'entries'}`;
}

function makeFacets(experiments) {
  return {
    categories: uniqueSorted(experiments.map((entry) => entry.category)),
    kinds: uniqueSorted(experiments.map((entry) => entry.kind)),
    difficulties: ['Beginner', 'Intermediate', 'Advanced'],
    sources: [...VALID_SOURCE_STATES],
  };
}

function writeControls(form, state) {
  form.elements.namedItem('q').value = state.q;
  form.elements.namedItem('category').value = state.category;
  form.elements.namedItem('kind').value = state.kind;
  form.elements.namedItem('difficulty').value = state.difficulty;
  form.elements.namedItem('source').value = state.source;
}

function stateFromControls(form) {
  return {
    q: form.elements.namedItem('q').value.trim(),
    category: form.elements.namedItem('category').value,
    kind: form.elements.namedItem('kind').value,
    difficulty: form.elements.namedItem('difficulty').value,
    source: form.elements.namedItem('source').value,
  };
}

function renderResults(entries, reviewsById, state) {
  const list = document.getElementById('results-list');
  const count = document.getElementById('results-count');
  const empty = document.getElementById('empty-state');
  const results = filterExperiments(entries, reviewsById, state);
  list.replaceChildren(...results.map((entry) => createResultRow(entry, reviewsById)));
  count.textContent = countText(results.length);
  empty.hidden = results.length !== 0;
}

export function installExplorer(data) {
  const { experiments, reviewsById } = data;
  const form = document.getElementById('explorer-form');
  const facets = makeFacets(experiments);
  const categorySelect = document.getElementById('category');
  const kindSelect = document.getElementById('kind');
  addOptions(categorySelect, facets.categories, categoryLabel, 'All subjects');
  addOptions(kindSelect, facets.kinds, kindLabel, 'All types');

  const pathCount = document.querySelectorAll('.path-list a').length;
  document.getElementById('entry-total').textContent = String(experiments.length);
  document.getElementById('category-total').textContent = String(facets.categories.length);
  document.getElementById('path-total').textContent = String(pathCount);

  const applyState = (state, { push = false } = {}) => {
    const nextSearch = serializeExplorerState(state);
    if (push) {
      const currentState = parseExplorerState(window.location.search, facets);
      const currentNormalized = serializeExplorerState(currentState);
      if (nextSearch !== currentNormalized) {
        const nextUrl = `${window.location.pathname}${nextSearch}${window.location.hash}`;
        window.history.pushState({ explorer: state }, '', nextUrl);
      }
    }
    writeControls(form, state);
    renderResults(experiments, reviewsById, state);
  };

  const initialState = parseExplorerState(window.location.search, facets);
  applyState(initialState);
  document.documentElement.classList.remove('no-js');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    applyState(stateFromControls(form), { push: true });
  });

  document.getElementById('clear-all').addEventListener('click', () => {
    form.reset();
    applyState({ ...DEFAULT_STATE }, { push: true });
  });

  document.querySelectorAll('[data-clear]').forEach((button) => {
    button.addEventListener('click', () => {
      form.reset();
      applyState({ ...DEFAULT_STATE }, { push: true });
    });
  });

  window.addEventListener('popstate', () => {
    const restoredState = parseExplorerState(window.location.search, facets);
    applyState(restoredState);
  });

  return { applyState, facets };
}

async function start() {
  const errorPanel = document.getElementById('load-error');
  const errorDetail = document.getElementById('load-error-detail');
  const retryButton = document.getElementById('retry-load');
  const statusMessage = document.getElementById('status-message');
  const app = document.querySelector('.explorer-app');

  const load = async ({ retry = false } = {}) => {
    retryButton.disabled = true;
    if (retry) {
      statusMessage.textContent = 'Trying to load the collection again.';
      retryButton.textContent = 'Loading…';
    }
    try {
      const data = await loadExplorerData();
      installExplorer(data);
      errorPanel.hidden = true;
      app.hidden = false;
      statusMessage.textContent = '';
    } catch (error) {
      app.hidden = true;
      errorPanel.hidden = false;
      errorDetail.textContent = `${error instanceof Error ? error.message : 'The collection data is unavailable.'} Try again, or open the complete README.`;
      statusMessage.textContent = 'The collection did not load.';
    } finally {
      retryButton.disabled = false;
      retryButton.textContent = 'Try again';
    }
  };

  retryButton.addEventListener('click', () => load({ retry: true }));
  await load();
}

if (typeof document !== 'undefined') {
  start();
}
