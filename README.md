# evancoppa

Personal portfolio site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
Layout, typography scale and scroll/hover choreography are modelled on a reference Webflow
portfolio — see [`docs/site-map.md`](docs/site-map.md) for the full section-by-section map.
All copy and imagery here are our own placeholders.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build
npm run check    # type-check .astro files
```

## Structure

- `src/data/site.ts` — every piece of copy, link and placeholder visual
- `src/data/scenes.ts` — gradient "photo" placeholders (swap for real images via `image` props)
- `src/components/` — one component per page section; `skills/` holds the five pinned sub-sections
- `src/scripts/ix.ts` — tiny scroll/mouse interaction engine reproducing Webflow IX2 progress maths,
  keyframe interpolation and smoothing
- `src/styles/global.css` — Tailwind import, theme tokens and shared utilities
- `docs/site-map.md` — measurements and interaction timings of the reference layout
