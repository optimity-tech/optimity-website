# Optimity website

Operations-first AI consulting. Static marketing site — three pages, no build step, no dependencies.

- **Staging (review) URL:** https://deepakramesh-commits.github.io/optimity-website/
- **Pages:** `index.html` (Home), `how-we-work.html`, `contact.html`
- **Styles:** `styles.css` · **Theme toggle:** `theme.js` · **Design system:** `DESIGN.md`
- **Booking:** inline Calendly embed on the Contact page (`#book`).

This is staging only. It is **not** wired to the custom domain (optimitytechnologies.com), and no DNS is configured.

## Run locally

It's plain static files — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Review workflow (propose changes via pull request)

`main` is the live staging branch. Don't commit to it directly — make changes on a branch and open a PR so they're reviewed before merging.

```bash
# 1. Get the code
git clone https://github.com/deepakramesh-commits/optimity-website.git
cd optimity-website

# 2. Start a branch for your change
git checkout -b edit/hero-copy        # name it for what you're changing

# 3. Make edits, then commit
git add -A
git commit -m "Tighten hero subhead copy"

# 4. Push the branch and open a PR against main
git push -u origin edit/hero-copy
gh pr create --base main --title "Tighten hero subhead copy" --body "What changed and why"
# (or open the PR from the link gh prints / on github.com)
```

The PR is where review happens — comments, requested changes, approval. Nothing reaches the
live staging site until the PR is **merged into `main`**, which triggers a fresh GitHub Pages
build automatically. Merges are a deliberate step; review first.
