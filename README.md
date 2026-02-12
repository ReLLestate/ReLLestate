# Jarrell James Real Estate Website

Static site built with vanilla HTML/CSS/JS.

## Structure
- `index.html` – markup with sections for hero, services, featured listings, market stats, about, newsletter, and contact.
- `styles.css` – Space Grotesk typography, JJ green palette, skyline + sports flourishes, responsive grid layout.
- `script.js` – lightweight enhancements (mobile nav toggle, dynamic year, Bright MLS link helper).
- `assets/` – logo PNG, skyline SVG, and headshots referenced in the layout.

## Local preview
```bash
cd website
python3 -m http.server 8080
```
Visit http://localhost:8080 in your browser.

## Deploying to GitHub Pages
1. Create a new repo (e.g. `rellestate-site`).
2. Copy the contents of `website/` into the repo root and commit.
3. In GitHub, enable Settings → Pages → Deploy from branch → `main` / `/ (root)`.
4. Your site will be available at `https://<username>.github.io/rellestate-site/`.

## Listing links to Bright
Buttons only render when a listing `<article>` has `data-bright-url="https://..."`. Add or update that attribute with the public BrightMLS Homes share link for each property and the script will inject the "Open on Bright MLS" pill.

If a listing doesn’t have a Bright share URL yet, simply omit `data-bright-url` and no button will display.

## Future enhancements
- Swap the mailto form for Netlify Forms or Formspree when ready.
- Embed an IDX/Remine/Bright search widget once credentials are available.
- Add blog cards that auto-sync from Substack via RSS.
