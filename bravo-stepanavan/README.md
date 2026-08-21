# ԲՐԱՎՈ · BRAVO — gas station website (Stepanavan, Armenia)

A single-file, bilingual (Armenian / English) static website for the Bravo gas station in
Stepanavan, Lori Province. No build step — `index.html` is the whole site.

**This folder is self-contained** and is meant to move into its own repository (or host)
whenever one is available. To preview locally, just open `index.html` in a browser.

## Fill in the real details

The station has no public web presence, so a few facts are placeholders — search the file
for these and replace them:

- **Phone**: `+374 XX XX XX XX` (also update the `tel:` link next to it)
- **Hours**: currently "Daily, 08:00 – 24:00" — set the real schedule
- **Address**: currently just "Stepanavan, Lori Province" — add the street
- **Map marker**: the OpenStreetMap embed is centered on Stepanavan town
  (41.0106 N, 44.3853 E). Adjust the `marker=` and `bbox=` params in the iframe `src`
  to the station's exact spot.
- **Fuel types / services**: listed types (AI-92, AI-95, diesel, LPG) are the common
  Armenian lineup — trim or extend to match what the station actually sells.

## Language toggle

Armenian is the default. The EN/ՀԱՅ button in the header switches languages; the choice
is remembered in `localStorage`. Every string exists twice in the markup as
`<span class="hy">…</span><span class="en">…</span>` — edit both when changing copy.

## Hosting

Any static host works (GitHub Pages, Netlify, Vercel, plain nginx). For GitHub Pages in a
dedicated repo: put `index.html` at the repo root and enable Pages from the default branch.
