from html.parser import HTMLParser
from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "index.html"
README = ROOT / "README.md"


class PageProbe(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tags = []
        self.ids = set()
        self.links = []
        self.labels = set()
        self.controls = {}
        self.live_regions = set()
        self.noscript_links = []
        self._noscript_depth = 0
        self._noscript_text = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append(tag)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "a" and attrs.get("href"):
            self.links.append((attrs["href"], attrs.get("aria-label", "")))
            if self._noscript_depth and attrs["href"]:
                self.noscript_links.append(attrs["href"])
        if tag == "label" and attrs.get("for"):
            self.labels.add(attrs["for"])
        if tag in {"input", "select", "textarea", "button"} and attrs.get("id"):
            self.controls[attrs["id"]] = (tag, attrs)
        if attrs.get("aria-live"):
            self.live_regions.add((attrs.get("id"), attrs["aria-live"]))
        if tag == "noscript":
            self._noscript_depth += 1
        if tag == "a" and self._noscript_depth and attrs.get("href"):
            self.noscript_links.append(attrs["href"])

    def handle_endtag(self, tag):
        if tag == "noscript" and self._noscript_depth:
            self._noscript_depth -= 1

    def handle_data(self, data):
        if self._noscript_depth:
            self._noscript_text.append(data)


class HomepageShellTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.readme = README.read_text(encoding="utf-8")
        cls.source = PAGE.read_text(encoding="utf-8") if PAGE.exists() else ""
        cls.probe = PageProbe()
        cls.probe.feed(cls.source)

    def test_homepage_has_semantic_landmarks_and_skip_link(self):
        for landmark in ("header", "nav", "main", "footer"):
            with self.subTest(landmark=landmark):
                self.assertIn(landmark, self.probe.tags)
        self.assertEqual(self.probe.tags.count("h1"), 1)
        self.assertIn(("#results", ""), self.probe.links)

    def test_homepage_has_labeled_controls_and_live_result_count(self):
        required = {"search", "category", "kind", "difficulty", "source"}
        self.assertTrue(required.issubset(self.probe.controls))
        self.assertTrue(required.issubset(self.probe.labels))
        self.assertIn("explorer-form", self.probe.ids)
        self.assertIn("apply-filters", self.probe.ids)
        self.assertIn("clear-all", self.probe.ids)
        self.assertIn(("results-count", "polite"), self.probe.live_regions)

    def test_homepage_has_noscript_readme_fallback(self):
        self.assertIn("noscript", self.probe.tags)
        self.assertIn("README.md", self.probe.noscript_links)
        fallback_text = " ".join(self.probe._noscript_text).lower()
        self.assertIn("javascript", fallback_text)
        self.assertTrue(self.probe.noscript_links)

    def test_homepage_links_every_readme_learning_path_and_footer_document(self):
        readme_paths = re.findall(r"\[[^\]]+\]\((learning-paths/[^)]+)\)", self.readme)
        self.assertEqual(len(readme_paths), 11)
        expected_paths = {path[:-3] + ".html" if path.endswith(".md") else path for path in readme_paths}
        actual_paths = {href for href, _ in self.probe.links if href.startswith("learning-paths/")}
        self.assertEqual(actual_paths, expected_paths)
        footer_paths = {
            "README.md",
            "CONNECTIONS.html",
            "SOURCES_AND_ATTRIBUTION.html",
            "QUALITY_REPORT.html",
        }
        actual_paths = {href for href, _ in self.probe.links}
        self.assertTrue(footer_paths.issubset(actual_paths))

    def test_homepage_assets_are_local(self):
        self.assertIn('assets/css/explorer.css', self.source)
        self.assertIn('assets/js/explorer.mjs', self.source)
        for href, _ in self.probe.links:
            if href.lower().endswith((".css", ".mjs", ".js")):
                self.assertFalse(href.startswith(("http://", "https://", "//")), href)

    def test_desktop_filter_rail_has_room_for_long_selected_labels(self):
        css = (ROOT / "assets/css/explorer.css").read_text(encoding="utf-8")
        self.assertRegex(css, r"grid-template-columns:\s*minmax\(18rem,\s*0\.35fr\)")

    def test_source_review_note_explains_traceability_and_its_limits(self):
        copy = self.source.lower()
        for phrase in ("traced to sources", "philosophical truth", "scholarly consensus", "exhaustive coverage", "human expert review"):
            with self.subTest(phrase=phrase):
                self.assertIn(phrase, copy)


if __name__ == "__main__":
    unittest.main()
