# Getting started

This guide covers working on the collection from a local clone. Small corrections can also be made in GitHub’s web editor; see [CONTRIBUTING.md](CONTRIBUTING.md) for the research and writing standards.

## Set up

1. Clone the repository and open the folder in a terminal.
2. Install Python 3.10 or later. On Windows, install it from [python.org](https://www.python.org/downloads/) or the Microsoft Store and confirm that `python` runs in a new terminal window. No third-party packages are needed.

## Check your changes

Run these from the repository root. On Windows, use `python` or `py` in place of `python3` if that is the command your installation provides.

```bash
python3 scripts/validate.py
python3 -m unittest discover -s tests
```

The validator checks the dataset against its schema, the ten numbered article sections, article metadata, references, related-entry links, README entries and local links. It does not contact external websites and cannot judge whether an explanation is philosophically sound. Read a new article as a learner would before submitting it.

The same checks run on every push and pull request through the **Validate collection** workflow under the repository’s **Actions** tab. Successful validation checks local structure, not the truth of every claim or the continued availability of external pages.

## Add an entry

Follow [CONTRIBUTING.md](CONTRIBUTING.md): write the article with all ten sections, add its record to `data/experiments.json`, add it to the category list in the README, link any related entries both in the dataset and in the article, and add a note on what you inspected to a file in `research/`. See [QUALITY_REPORT.md](QUALITY_REPORT.md) for the checks performed on the current collection and its limitations.
