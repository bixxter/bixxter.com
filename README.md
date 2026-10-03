# bixxter.com

My personal site. Next.js, exported as static files to GitHub Pages.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
npm run deploy  # build and push out/ to the gh-pages branch, which Pages serves
```

- The projects live in `app/tracklist.tsx` (the `SIDES` list). Add a track there.
- Previews are in `public/img/`. `public/og.png` is the link-preview card: a 1200×630 screenshot of the first screen, retake it when the headline changes.
- Deploying is `npm run deploy`: it force-pushes the built `out/` (with `.nojekyll` and `CNAME`) to `gh-pages`, and Pages serves that branch. There's no Actions workflow, so pushing `main` deploys nothing.
- `design/` has the brief and the round of directions the design was picked from.
