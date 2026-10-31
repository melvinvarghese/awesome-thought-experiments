# Upload to GitHub

1. Extract `awesome-thought-experiments.zip` on your computer.
2. Create a new **public** GitHub repository named `awesome-thought-experiments`. Leave the automatic README/license options off because these files are included.
3. Upload the **contents inside** the extracted `awesome-thought-experiments` folder. `README.md`, `experiments`, `data`, and `.github` must be at the repository root, not inside another nested folder. Web uploads may need multiple batches; the command-line route below preserves all files, including `.github`.
4. Commit the files. Open the repository homepage and follow several README links.
5. Open **Actions** and look for the **Validate collection** workflow. If Actions is disabled for the repository, enable it in repository settings, then make a commit or run the workflow manually. Successful validation checks local structure, not the truth of every claim or the continued availability of external pages.
6. Optionally enable Discussions under repository settings. Set a private reporting route in the code of conduct before growing a community.

## Optional command-line upload

Run these commands **inside the extracted folder** after installing Git. Replace YOUR-USERNAME with your GitHub username. GitHub handles authentication; no connection to ChatGPT is needed.

```bash
git init
git add .
git commit -m "Add thought experiment collection"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/awesome-thought-experiments.git
git push -u origin main
```

No GitHub Pages, backend, database, API key, or paid service is required. Once downloaded, original articles and learning paths can also be read offline; external further-reading links need internet access.

## Local checks

```bash
python3 scripts/validate.py
python3 -m unittest discover -s tests
```

Both commands use Python 3.10+ and its standard library. See [QUALITY_REPORT.md](QUALITY_REPORT.md) for actual production checks and limitations.
