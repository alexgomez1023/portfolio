<<<<<<< HEAD
# Handoff: Portfolio home page refresh + project detail pages

## Overview
Alex Gomez's portfolio (static HTML/CSS/JS: `index.html`, `styles.css`, `notes.css`, `svgs.js`, `theme.js`, `scrib.js`) is getting:
1. A **new Projects section on the home page**. The long write-ups move off the home page. Skim is featured under "what I'm building now", and the two Collins Aerospace internships sit under "before that".
2. **A detail page for each project** (3 pages), all built from one template. Each section heading is a question a recruiter would ask.
3. **One image treatment everywhere:** every project image sits on the project's paper color with tape and a caption area. The only exception is the profile photo in the home hero, which stays as it is today.
4. **New sketches** for the two internship projects.

## About the design files
The `.dc.html` files in this folder are **design references made in HTML**: wireframes plus a few hi-fi details. They are not production code. Don't copy their markup; it uses inline styles and a preview runtime. Rebuild the designs inside the existing static site with its current classes, CSS variables and patterns. No framework: plain HTML, CSS and a little JS, like the rest of the site.

- `Home Page.dc.html`: use **4a** (the full home page), **3a** (photo frame, unchanged) and **5b / 5d** (the internship sketches). Ignore the other options in that file.
- `Project Detail Pages.dc.html`: **5a** (internship template, sketches only, no screenshots) and **5b** (personal project template, with phone screenshots).

## Fidelity
**Mixed.** Layout and structure are low-fi wireframes: grey bars stand in for body text, and striped boxes stand in for screenshots. Fill them with the real copy, which mostly already exists in `index.html`. Visual style is final and must match the existing site: paper colors, tape, shadows, rotations, fonts, the squiggle divider and the hand-drawn tag borders all come from `styles.css` and `notes.css`. Don't add new colors or fonts.

---

## 1. Shared image treatment: the paper frame
Every project image (sketch, diagram, screenshot) uses the existing `.sketch` figure pattern from `styles.css`:
- `background: var(--paper)`, using the project's paper color:
  - Software Certification Tracker → `--paper-straw` `#d9d0a0`
  - Embedded Reprogramming Tool → `--paper-sage` `#bccdc8`
  - Skim → `--paper-peach` `#e3c2a4`
- Padding `22px 18px 12px` (smaller images ~8–14px), `transform: rotate(var(--r))`, typically between -2deg and 2deg
- Shadow `0 8px 15px rgba(0,0,0,.15)`
- Tape: the existing `::before` (80×24px, `rgba(255,255,255,.6)`, positioned by `--tape-x` and rotated by `--tape-r`)
- The paper texture `::after` overlay (`filter: url(#paper)`) stays on
- **Caption area:** `<figcaption>` (Caveat, 1.2rem, centered, opacity .75). The existing `.sketch figcaption` style works.
- **Exception:** the **hero sketch at the top of each detail page has no caption**. Teammate feedback: it read as generic, so leave it out.
- **Phone screenshots** (Skim) also go on peach paper, not white. Each phone is its own small paper frame: padding ~8px 8px 4px, the screenshot inside at `aspect-ratio: 9/19; object-fit: cover`, and a caption below. This replaces `.snapshot.phone`'s white frame for project images only.
- **Profile photo (home hero):** no change. Keep `.snapshot.square` (white `--photo-frame`, one piece of tape, -4deg). It's the only white-framed image on the site, and it appears only in the home hero, never on detail pages.
- The **red pen** (`--pen-red`, `.mark`) is used sparingly or not at all. The new tracker sketch uses none. There are no red-pen notes on screenshots.

## 2. Home page (`index.html`): option 4a
Header, hero and footer **stay as they are today**:
- Header: brand, nav (Projects, Résumé), LinkedIn/GitHub icons, theme button
- Hero: photo (3a, unchanged), H1, intro, and the board of three sticky notes
- The **sticky notes now link to the detail pages** (`cert-tracker.html`, `reprogramming-tool.html`, `skim.html`, or `/projects/<slug>/`, whichever you prefer) instead of `#anchors`
- Footer unchanged

**Projects section** (replaces the three long `<article class="project">` blocks):
- Keep `<section class="projects" id="projects">` with its `<h2>Projects</h2>` and accent squiggle
- **Group 1: "what I'm building now"**. A Caveat label (1.35rem, `--muted`), then:
  - A centered row of **3 Skim phone screenshots** in peach paper frames (each ~180–200px wide at desktop), rotated about -3deg / 1.5deg / -1deg, with the middle one dropped ~24px. Each has a caption.
  - Below: `h3` "Skim" (Instrument Serif 2rem), meta "My own app" (Caveat, `--accent`), a 1–2 sentence summary, and "read the full story →" (Caveat, `--accent`) linking to the detail page
- **Group 2: "before that"**. A Caveat label, then a 2-column grid (`minmax(0,1fr)` × 2, gap ~44px):
  - Each column: the project's sketch in its paper frame with a caption, then `h3` title (Instrument Serif ~1.5rem), meta "Collins Aerospace, Summer 2026" / "Summer 2025" (Caveat, `--accent`), then "read more →"
  - Left: Software Certification Tracker (straw, sketch `sketch-cert`). Right: Embedded Reprogramming Tool (sage, sketch `sketch-flash`).
- Divider between the groups: reuse the existing squiggle divider (`.project + .project::before` pattern: centered, ~260px, opacity .45)
- **Responsive (≤800px):** the "before that" grid stacks to one column. The phone row stays in one row but shrinks (`flex: 0 1 30%`).
- Remove the feature lists and tag lists from the home page. They move to the detail pages.

## 3. Detail page template (new files, one per project)
Same header and footer as the home page. Content column max-width ~720px, centered, with the same `--gutter` padding. Vertical gap between sections ~40px.

Top to bottom:
1. **"← all projects"**: Caveat 1.35rem, `--accent`, links to `index.html#projects`
2. **Title block**: `h1` project name (Instrument Serif, `clamp(2.4rem, 5vw, 3.4rem)`, weight 400), then the meta line in Caveat `--accent`, e.g. "Collins Aerospace - Software Engineering Intern - Summer 2026" or "Personal project"
3. **Hero sketch**: full-width paper frame (project color), rotated about ±1deg, tape centered. **No caption.** Use the same sketch as the home page (larger).
4. **Facts row**: a 3-column grid. Each cell has a small Caveat label (`--muted`, ~1.1rem) above a short value (body font, ~0.95rem).
   - Internship: role / stack / result (e.g. "SWE intern" / "React, FastAPI, MySQL" / "lookups 20 min → 2")
   - Skim: platforms / stack / links ("iOS + Android" / "React Native, FastAPI, MySQL" / "GitHub →")
   - **Borders:** the site's **squiggle line** above and below the row, not dashed or solid lines. Use the existing `--squiggle` mask, colored `var(--ink)` at ~0.45 opacity, as two `::before`/`::after` pseudo-elements (height 10px, `mask: var(--squiggle) repeat-x`). Padding ~16px top and bottom.
5. **Question sections.** Each heading is written in **Caveat** (~1.9rem, `--ink`, line-height 1) as a recruiter's question, followed by body paragraphs (Hanken Grotesk 17px, max 60ch):
   - **Internship (5a):** What problem did it solve? → What did I build? → How does it work? → What was hard? → What would I do differently?
   - **Skim (5b):** What problem does it solve? → What did I build? → How does it work? → What was hard? → What's next?
   - **"What did I build?"**
     - Internship: one row per feature (grid `110–200px` + `1fr`, gap 14px). Left: a small paper-framed sketch with a caption. Right: the feature name in bold, then a paragraph. Features come from the existing `index.html` lists (Dependency graph, Document sync, AI document parsing).
     - Skim: a paragraph, then a centered row of 3 phone screenshots in peach paper frames, each captioned (Recipe import, Meal planning, Shopping list).
   - **"How does it work?"**: a paragraph, then an architecture diagram drawn in the same pen style **on graph paper** (`#fbfaf3` with 14px grid lines in `rgba(60,110,140,.14)`), and that graph-paper sheet sits **inside the project's paper frame** with a caption.
     - Tracker: React → FastAPI → MySQL, with the Teamcenter sync pipeline and the LangChain parser
     - Skim: link → FastAPI + AI parser → MySQL library → meal plan → shopping list
6. **Next project note**: bottom right, a taped sticky note in the next project's paper color (the `.note` style from `notes.css`, ~220px, rotated ±2deg): small line "next project →" plus the project title. Order: Tracker → Reprogramming Tool → Skim → Tracker.

**Internship pages use no screenshots.** The real apps are internal. Every image is a drawing.

## 4. New sketches
`sketches-for-svgs.js.txt` contains ready-to-paste replacements for the `"sketch-cert"` and `"sketch-flash"` entries in `svgs.js`. They use the existing `#rough` filter and the `.sketch svg` styles.
- **sketch-cert** (option 5b): a hand-drawn browser window with a search box ("ASM-1042") and a **DAG with no arrows**: three "program" nodes on the left, "software" in the middle (slightly heavier stroke), three "document" nodes on the right, joined by plain curved lines. **No red ink.**
- **sketch-flash** (option 5d): a hand-drawn desktop window titled "reprogramming tool" with a module list (module A/B/C, with B selected in red), a "new firmware" field showing "update.hex", a progress bar at 60% (red fill) and a "flash" button. Module names and the file name are placeholders.
- `sketch-recipe` stays as it is, for the Skim detail page hero.

## Interactions & behavior
- Sticky notes in the hero and "read more" links → detail pages
- Existing behavior stays: note placement animation, tape-stick animation, hover lift on notes, `scrib.js` hand-drawn link underlines, dark mode via `theme.js`, `prefers-reduced-motion` handling
- Dark mode: paper frames keep their light paper colors and dark ink (as `.sketch` does today). Check that the squiggle borders and Caveat headings use `var(--ink)` so they flip.

## Design tokens (all already in styles.css / notes.css)
- Background `--bg` #f4f1e6 (dark #1b1915) · Ink `--ink` #1f1d18 (dark #efeadb) · Muted `--muted` #625d50 (dark #aaa392)
- Accent `--accent` #a2440a (dark #e08a4f) · Pen red `--pen-red` #8a2f00
- Papers: straw #d9d0a0 · sage #bccdc8 · peach #e3c2a4 · Photo frame #ffffff (dark #efeadb)
- Shadow `0 8px 15px rgba(0,0,0,.15)` · Tape `rgba(255,255,255,.6)`, 80×24px
- Fonts: Instrument Serif (headings), Hanken Grotesk 400/500/700 (body), Caveat 500 (meta, captions, question headings, notes)
- Max width `--max` 1080px · gutter `--gutter` · header height `--header-h`

## Assets
- `me.jpg`: already in the repo, used only in the home hero
- Skim screenshots: 3 needed for the home page and 3 for the detail page (import, meal plan, shopping list). Export at 2x, 9:19. Put them in a new `images/` folder.
- Feature sketches and architecture diagrams for the detail pages still need to be drawn, in the same SVG style as `svgs.js`.

## Files in this folder
- `README.md`: this file
- `Home Page.dc.html`: home page reference (use 4a, 3a, 5b, 5d)
- `Project Detail Pages.dc.html`: detail page reference (5a internship, 5b Skim)
- `sketches-for-svgs.js.txt`: new SVG sketches to paste into `svgs.js`

## Suggested prompt for Claude Code
> Read design_handoff_portfolio/README.md and implement it in this site: rebuild the home page Projects section (option 4a), create the three project detail pages from the template, apply the paper-frame image treatment, and replace the two sketches in svgs.js. Keep everything in plain HTML/CSS/JS using the existing classes and CSS variables.
=======
# Alex Gomez Portfolio Website
>>>>>>> 3acf4a769c3b0404e093c4397d6aab1251e3ac49
