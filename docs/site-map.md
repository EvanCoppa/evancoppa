# Reference site map

Structural and behavioural map of the reference portfolio (thomasbosc.com/en.html,
Webflow, published 2021) that this site's layout and motion are modelled on.
Measurements are at a 1440×900 viewport. Only layout, sizing and animation
parameters are reproduced; all copy, imagery and media in this repo are our own
placeholders.

## Global

| Token | Value |
| --- | --- |
| Background | `#0b0b0d` |
| Text | `#cec9c9` (display + UI), body copy 14px/20px |
| Display face | High-contrast serif, weight 500 (reference: Elgoc Alt → we use Fraunces, opsz 144) |
| UI face | Grotesk, 16px uppercase 500 for nav/CTA (reference: Beatrice → we use Albert Sans) |
| Accent | Blue gradient `#3e7fff → #50a8ff`, glow `0 0 50px rgba(103,154,204,.3)` |
| Grain | Fixed full-screen noise layer, opacity .3, 300%-size tile jumping in 4 × 120 ms steps (loop) |

### Scroll progress (Webflow IX2 "while scrolling in view")

```
w = startOffset/100;  w = startsEntering ? w : 1 - w
d = endOffset/100;    d = startsExiting  ? d : 1 - d
M = rect.top + min(rect.height * w, vh)
O = rect.top + rect.height * d - M
k = min(vh + O, scrollHeight)
progress = clamp(vh - M, 0, k) / k
```

Values are smoothed toward the target each frame (`smoothing` 50–97).
Implemented in `src/scripts/ix.ts`.

## Sections (desktop, top → bottom)

| # | Section | Height | Behaviour |
| --- | --- | --- | --- |
| 1 | Header | 100vh | Menu bar 75px (35px side padding). Portrait 45vh × 69vh, brightness 75%, alternate portrait fades in on hover (200ms). Three display lines at 9vw / lh .9, centred over the portrait. Load: menu + portrait drop from −75px and scale 1.1→1 (1250ms inOutQuart), lines fade in staggered 150ms. Scroll (start=top, end=bottom): lines fade out and rise −50px between 0–40%, staggered (all → left → right). Mobile: left/right lines slide ±300px. |
| 2 | Introduction | ~1650px | 35vw (max 500px) text column, 150px margins. Display question at 6vw with five blue chat pills behind it; pills translate/rotate outward over scroll (start offset 50% entering, end 50% exiting). |
| 3 | Skills | 11700px | Sticky overlay: stacked titles at 8vw in a 10vw-tall mask (left, top), counter "n — 5" with 150px progress bar (bottom-left), 20vh fades top/bottom. Titles step −100% at 27–31 / 37–42 / 49–54 / 72–77% of section progress (progress = distance scrolled ÷ section height). Five sub-sections, each = 35% sticky info column (text + `#tool` tags in display face 22px) and 65% sticky visual. |
| 3a | Photography | 3600px | Two columns of 300×420 photo cards (15px radius, 25px gaps). Columns counter-scroll: down −1880→705px, up 235→−1880px over the sub-section (enter → exit). Film-edge captions beside each card. |
| 3b | Video & Motion | 1350px | 320×400 player (15px radius, glow). Click toggles edited/raw clip and the eye icon. Timeline: 00:00 / 06:00 labels, progress bar fills over 6 s when in view, two 40px blue layer bars (eye toggle, locked layer). |
| 3c | Web Design | 1350px | Browser mockup (90% × 90%, max 900 × 600, radius 10/12). Tab bar 40px #eee, two 150px tabs, 40px address row, pop-up gag button. Clicking it greys the page and stages: notification (+300ms), cookie bar slides up (+1000ms), newsletter spins in (2000ms swing) with a close button that flees the cursor (±75px). Second click clears. |
| 3d | UI & UX Design | 2700px | 297×528 phone card, `rotateX(35) rotateY(−35) rotateZ(25)` → flat. Wireframe layers wipe away in sequence (menu 0–20%, hero 30–50%, article image 60–80%, label 90–100%). Progress ends halfway through the sub-section. |
| 3e | 3D Design | 2700px | Laptop opens 0–90% of progress (ends halfway through). Three hotspots fade in at 85–90%; pulse loop; hover grows the dot to a 300px detail lens that tilts ±20° with the cursor. |
| 4 | Break | ~830px | Centred display question (6vw) + text column. |
| 5 | Case study | 100vh | 12 cards (260/406 × 325, 15px margin) in a 60% × 550px masked window, greyscale + 70% brightness at 50% opacity. Grid drifts ±200px / ±260px with the cursor, images counter-drift ±25px (smoothing 97). Centred title (8vw) + CTA with underline sweep on hover. |
| 6 | Break | ~630px | Text column. |
| 7 | CV | 300vh | Sticky 800px tri-fold sheet. Fold-mid −120°→0 (15–25%), fold-bottom −90°→−179°→−100°→0 (15–45%), sheet lifts −200→−500px, then greyscale + 25% brightness (55–65%) and scales to .5 (70–75%) under a sticky "download" title + CTA (last 125vh). |
| 8 | Break | ~600px | Text column. |
| 9 | Footer | 100vh | "Contact me" label; four display links at 6vw (20px 100px padding). Hovering a link swaps the label and fades in a 200×250 photo that follows the cursor (±50vw/±50vh, ±10° tilt). Bottom bar: wink + "back to the top". |
