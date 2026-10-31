"""Mutation tests ensure checks reject realistic repository mistakes."""
from pathlib import Path
import importlib.util
import json
import shutil
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('validator', ROOT / 'scripts/validate.py')
v = importlib.util.module_from_spec(spec)
spec.loader.exec_module(v)


class ValidatorTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name) / 'repo'
        shutil.copytree(ROOT, self.root, ignore=shutil.ignore_patterns('__pycache__', '.git'))
        self.data = json.loads((self.root / 'data/experiments.json').read_text(encoding='utf-8'))

    def tearDown(self):
        self.tmp.cleanup()

    def write_data(self):
        (self.root / 'data/experiments.json').write_text(json.dumps(self.data), encoding='utf-8')

    def rejected(self, fragment):
        self.assertTrue(any(fragment in error for error in v.validate(self.root)), fragment)

    def test_baseline(self):
        self.assertEqual(v.validate(self.root), [])

    def test_missing_metadata(self):
        del self.data[0]['title']
        self.write_data()
        self.rejected('missing title')

    def test_duplicate_id(self):
        self.data[1]['id'] = self.data[0]['id']
        self.write_data()
        self.rejected('duplicate id')

    def test_duplicate_slug(self):
        self.data[1]['slug'] = self.data[0]['slug']
        self.write_data()
        self.rejected('duplicate slug')

    def test_bad_category(self):
        self.data[0]['category'] = 'made-up'
        self.write_data()
        self.rejected('unrecognized value')

    def test_bad_difficulty(self):
        self.data[0]['difficulty'] = 'Easy'
        self.write_data()
        self.rejected('unrecognized value')

    def test_missing_article(self):
        (self.root / self.data[0]['file_path']).unlink()
        self.rejected('missing article')

    def test_bad_related_id(self):
        self.data[0]['related_experiments'] = ['unknown-id']
        self.write_data()
        self.rejected('invalid related ID')

    def test_missing_reference(self):
        self.data[0]['references'] = []
        self.write_data()
        self.rejected('too few items')

    def test_url_syntax(self):
        self.data[0]['references'][0]['url'] = 'https:///missing-host'
        self.write_data()
        self.rejected('invalid HTTP(S) URL')

    def test_missing_readme_entry(self):
        p = self.root / 'README.md'
        p.write_text(p.read_text(encoding='utf-8').replace(self.data[0]['file_path'], 'absent.md'), encoding='utf-8')
        self.rejected('README category link')

    def test_missing_section(self):
        p = self.root / self.data[0]['file_path']
        p.write_text(p.read_text(encoding='utf-8').replace('## 1. The Scenario', '## Removed'), encoding='utf-8')
        self.rejected('missing section 1')

    def test_broken_local_link(self):
        p = self.root / 'README.md'
        p.write_text(p.read_text(encoding='utf-8') + '\n[Broken](no-such-file.md)\n', encoding='utf-8')
        self.rejected('broken local link')

    def test_broken_anchor(self):
        p = self.root / 'README.md'
        p.write_text(p.read_text(encoding='utf-8') + '\n[Broken](README.md#absent-heading)\n', encoding='utf-8')
        self.rejected('broken heading link')

    def test_invalid_json(self):
        (self.root / 'data/experiments.json').write_text('{', encoding='utf-8')
        self.rejected('JSON read error')

    def test_article_metadata_mismatch(self):
        p = self.root / self.data[0]['file_path']
        p.write_text(p.read_text(encoding='utf-8').replace('**Difficulty:** ' + self.data[0]['difficulty'], '**Difficulty:** Unknown'), encoding='utf-8')
        self.rejected('article difficulty metadata mismatch')

    def test_empty_section(self):
        p = self.root / self.data[0]['file_path']
        text = p.read_text(encoding='utf-8')
        start = text.index('## 2. The Central Question')
        end = text.index('## 3. Why It Matters')
        p.write_text(text[:start] + '## 2. The Central Question\n\n' + text[end:], encoding='utf-8')
        self.rejected('empty section 2')

    def test_unlisted_article(self):
        p = self.root / 'experiments/ethics/unlisted.md'
        p.write_text('# Unlisted', encoding='utf-8')
        self.rejected('article/dataset mismatch')


if __name__ == '__main__':
    unittest.main()
