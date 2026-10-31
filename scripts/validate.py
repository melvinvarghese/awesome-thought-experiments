#!/usr/bin/env python3
"""Validate collection using Python's standard library; no network requests.

The schema evaluator deliberately supports the keywords used in data/schema.json.
It fails closed if that schema introduces an unsupported validation keyword.
"""
from pathlib import Path
from urllib.parse import urlsplit, unquote
from datetime import date
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
CATEGORIES = ('ethics', 'identity', 'consciousness', 'epistemology', 'logic',
              'time-and-causality', 'physics', 'mathematics', 'economics',
              'artificial-intelligence', 'society-and-justice', 'science-and-biology')
SECTIONS = ('The Scenario', 'The Central Question', 'Why It Matters',
            'Major Interpretations', 'Common Misunderstandings', 'Think for Yourself',
            'Variations and Extensions', 'Related Thought Experiments',
            'Further Reading', 'Sources and Attribution')
LINK = re.compile(r'!?\[[^\]]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)')


def url_valid(url):
    try:
        u = urlsplit(url)
        return u.scheme in ('https', 'http') and bool(u.hostname) and not re.search(r'\s', url) and u.port != 0
    except ValueError:
        return False


def schema_check(value, schema, path='$'):
    errors = []
    supported = {'$schema', '$id', 'title', 'description', 'type', 'items',
                 'properties', 'required', 'additionalProperties', 'enum', 'minItems',
                 'minLength', 'pattern', 'format', 'uniqueItems'}
    for k in schema.keys() - supported:
        errors.append(f'{path}: unsupported schema keyword {k}')
    kinds = {'array': list, 'object': dict, 'string': str, 'null': type(None)}
    expected = schema.get('type')
    allowed = expected if isinstance(expected, list) else [expected] if expected else []
    if allowed and not any(isinstance(value, kinds[k]) for k in allowed):
        return errors + [f'{path}: expected {expected}']
    if 'enum' in schema and value not in schema['enum']:
        errors.append(f'{path}: unrecognized value {value!r}')
    if isinstance(value, dict):
        for k in schema.get('required', []):
            if k not in value:
                errors.append(f'{path}: missing {k}')
        props = schema.get('properties', {})
        for k, v in value.items():
            if k in props:
                errors += schema_check(v, props[k], f'{path}.{k}')
            elif schema.get('additionalProperties') is False:
                errors.append(f'{path}: unexpected field {k}')
    elif isinstance(value, list):
        if len(value) < schema.get('minItems', 0):
            errors.append(f'{path}: too few items')
        if schema.get('uniqueItems') and len({json.dumps(v, sort_keys=True) for v in value}) != len(value):
            errors.append(f'{path}: duplicate items')
        for i, v in enumerate(value):
            if 'items' in schema:
                errors += schema_check(v, schema['items'], f'{path}[{i}]')
    elif isinstance(value, str):
        if len(value) < schema.get('minLength', 0):
            errors.append(f'{path}: empty/short string')
        if 'pattern' in schema and not re.search(schema['pattern'], value):
            errors.append(f'{path}: pattern mismatch')
        if schema.get('format') == 'uri' and not url_valid(value):
            errors.append(f'{path}: invalid HTTP(S) URL')
        if schema.get('format') == 'date':
            try:
                if date.fromisoformat(value).isoformat() != value:
                    raise ValueError()
            except ValueError:
                errors.append(f'{path}: invalid ISO date')
    return errors


def anchors(text):
    """GitHub-style anchors for simple Markdown headings used by this project."""
    result = set()
    counts = {}
    for line in text.splitlines():
        m = re.match(r'^#{1,6}\s+(.+?)\s*#*$', line)
        if m:
            h = re.sub(r'[^\w\- ]', '', m[1].lower()).replace(' ', '-')
            n = counts.get(h, 0)
            counts[h] = n + 1
            result.add(h + (f'-{n}' if n else ''))
    return result


def validate(root=ROOT):
    root = Path(root).resolve()
    errors = []
    try:
        data = json.loads((root / 'data/experiments.json').read_text())
        schema = json.loads((root / 'data/schema.json').read_text())
    except (OSError, ValueError) as exc:
        return [f'JSON read error: {exc}']
    errors += schema_check(data, schema)
    if errors:
        return errors
    ids = [e['id'] for e in data]
    paths = [e['file_path'] for e in data]
    for field in ('id', 'slug', 'file_path'):
        values = [e[field] for e in data]
        if len(set(values)) != len(values):
            errors.append(f'duplicate {field}')
    readme = (root / 'README.md').read_text() if (root / 'README.md').exists() else ''
    readme_links = [unquote(x.split('#')[0]) for x in LINK.findall(readme)]
    for e in data:
        name = e['id']
        p = root / e['file_path']
        if not p.resolve().is_relative_to(root):
            errors.append(f'{name}: path escapes repository')
            continue
        expected = f"experiments/{e['category']}/{e['slug']}.md"
        if e['file_path'] != expected:
            errors.append(f'{name}: path/category/slug mismatch')
        if e['id'] != e['slug']:
            errors.append(f'{name}: id must equal slug')
        if not p.is_file():
            errors.append(f'{name}: missing article')
            continue
        body = p.read_text()
        if body.splitlines()[0].strip() != '# ' + e['title']:
            errors.append(f'{name}: title mismatch')
        for label, field in (('Category', 'category'), ('Difficulty', 'difficulty')):
            if not re.search(rf'^\*\*{label}:\*\*\s*{re.escape(e[field])}\s*$', body, re.M):
                errors.append(f'{name}: article {field} metadata mismatch')
        if e['file_path'] not in readme_links:
            errors.append(f'{name}: README category link missing')
        for n, section in enumerate(SECTIONS, 1):
            # Accept typographic title capitalization, require all ten numbered sections.
            match = re.search(rf'^## {n}\. {re.escape(section)}\s*$', body, re.M | re.I)
            if not match:
                errors.append(f'{name}: missing section {n}: {section}')
            else:
                section_body = re.split(r'^## ', body[match.end():], maxsplit=1, flags=re.M)[0].strip()
                if not section_body:
                    errors.append(f'{name}: empty section {n}')
        for related in e['related_experiments']:
            if related not in ids or related == name:
                errors.append(f'{name}: invalid related ID {related}')
            else:
                target = data[ids.index(related)]['file_path']
                linked_paths = [(p.parent / unquote(x.split('#')[0])).resolve() for x in LINK.findall(body) if not urlsplit(x).scheme]
                if (root / target).resolve() not in linked_paths:
                    errors.append(f'{name}: related ID {related} is not linked in article')
        if not any(ref['kind'] == 'academic' for ref in e['references']):
            errors.append(f'{name}: missing academic reference')
        for ref in e['references']:
            if ref['url'] not in body:
                errors.append(f'{name}: dataset reference absent from article: {ref["url"]}')
    actual = {p.relative_to(root).as_posix() for p in (root / 'experiments').rglob('*.md')}
    if actual != set(paths):
        errors.append(f'article/dataset mismatch: {sorted(actual ^ set(paths))}')
    listed = {x for x in readme_links if x.startswith('experiments/')}
    if listed != set(paths):
        errors.append('README/dataset article set mismatch')
    for p in root.rglob('*.md'):
        content = p.read_text()
        for dest in LINK.findall(content):
            try:
                u = urlsplit(dest)
            except ValueError:
                errors.append(f'{p.relative_to(root)}: invalid URL {dest}')
                continue
            if u.scheme:
                if not url_valid(dest):
                    errors.append(f'{p.relative_to(root)}: invalid external URL {dest}')
                continue
            target = (p.parent / unquote(u.path)).resolve() if u.path else p
            if not target.is_relative_to(root) or not target.exists():
                errors.append(f'{p.relative_to(root)}: broken local link {dest}')
            elif u.fragment and target.suffix == '.md' and unquote(u.fragment) not in anchors(target.read_text()):
                errors.append(f'{p.relative_to(root)}: broken heading link {dest}')
    return errors


if __name__ == '__main__':
    problems = validate()
    if problems:
        print('\n'.join('ERROR: ' + e for e in problems))
        sys.exit(1)
    entries = json.loads((ROOT / 'data/experiments.json').read_text())
    print(f'PASS: {len(entries)} entries; JSON schema, article sections, metadata, references, README, and local links checked. External URLs checked for syntax only.')
