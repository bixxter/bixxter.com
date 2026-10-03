# Design brief — bixxter.com

**Who comes and why.** People from X, GitHub or a product page who want to see what Asatulla makes, then click through to one thing. The page is content-first: the projects are the first screen, not a pitch.

**Direction: Tracklist** (picked from round 01, `design/round-01/style-explorer.html`). The back of an album sleeve: one big sentence, then the work as a ruled tracklist. Side A is apps, Side B is Claude Code, plus a bonus track for videos.

**Owner's notes on the pick.**
- Lead with *software*, not *Mac*: a software engineer who, after hours, builds things that add fun to everyday life.
- Instagram goes in as "besides all this, I love filming videos".

**Type.** Helvetica Neue 500 throughout (the owner's pick on Adlib, after rejecting Instrument Serif and Melodrama). Headline clamp(40px, 6vw, 84px), -0.04em, second sentence in grey. Track names 30px, -0.03em. Body 17px. SF Mono 13px for track numbers only.

**Colour.** Black and white only: #fff / #0b0b0b, greys #8b8b8b and #b9b9b9, hairlines #e8e8e8. Colour comes from the product screenshots. Dark scheme inverts the same tokens.

**Motion** (springs as CSS `linear()`):
1. Entrance, first load only: the black words of the headline focus in one by one (blur → sharp, Adlib's own effect), the grey sentence comes in as one, then the sections follow in reading order. Everything starts within 480 ms.
2. Main action: hover or focus a row and it stays sharp while the others blur and dim (Adlib's focus). The arrow nudges up and right on a small overshooting spring; press dims the row.
3. State change with an origin: one shared preview slides up out of the hovered row and then glides to whichever row you move to (spring, ~360 ms). Its content crossfades because the content really changes. Exit is faster than enter.
- Touch devices get no hover preview and no blur. Reduced motion means everything is just in place.

**Memorable moment.** The hover focus plus the gliding preview. B2's preview is the live dancing mascot.

**Left out on purpose.** Photos, cards, a blog, scroll effects, icons (characters ↗ ★ instead).

## Review round 1 (2026-10-03, independent reviewer, 6.5/10 before fixes)
Accepted:
- Deleted the sub paragraph under the headline (it repeated the list). The h1 went down to 64px max, so all four tracks now sit above the fold at 1280×900.
- Previews: Dyno Chess is cropped tight to the notch panel. Adlib is now a live lyric card with its word focus, instead of a screenshot of its landing page. The card lines up with the description column, has no tilt and a flatter shadow, and slides out of the row's top edge (clip-path). The headline and section labels dim while a row is in focus.
- Entrance: 70 ms per black word, blur + opacity only. The grey sentence comes in as one unit and the sections follow at 60 ms. Everything starts within 480 ms.
- Contrast: ink-2 #6e6e73 and the h1 grey #86868b, plus darker tokens for dark mode.
- Column 4 means "terms" only and is right-aligned. "Skill" and "Mod" are gone.
- Fixed curly apostrophes and `text-wrap: pretty` on descriptions. No doubled rules: the last row has no hairline. 1px rules. The footer sits on the row grid. ★ is set in sans.
Not taken: thumbnails or scroll-focus on phones (the brief says no photos, and this is the owner's call), and dropping the footer links (the footer is the only place Instagram and LinkedIn appear).
Not re-reviewed after the fixes.
