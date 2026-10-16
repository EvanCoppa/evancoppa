# evancoppa

Personal portfolio site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build
npm run check    # type-check .astro files
```

## Structure

- `src/data/site.ts` — all copy, links and placeholder content in one place
- `src/components/` — one component per page section
- `src/layouts/Layout.astro` — `<head>`, fonts, global styles
- `src/styles/global.css` — Tailwind import and theme tokens (colors, fonts, animations)
