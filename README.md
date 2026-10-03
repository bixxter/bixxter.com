# bixxter.com

My personal site. Next.js, exported as static files to GitHub Pages.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

- The projects live in `app/tracklist.tsx` (the `SIDES` list). Add a track there.
- Previews are in `public/img/`. `public/og.png` is the link-preview card: a 1200×630 screenshot of the first screen, retake it when the headline changes.
- Pushing to `main` deploys (`.github/workflows/deploy.yml`). The custom domain is set in the repo's Settings → Pages, not in a CNAME file.
- `design/` has the brief and the round of directions the design was picked from.
