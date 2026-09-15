# SweetBooth

Marketing site for SweetBooth — a vintage-inspired open-air photobooth rental company based in Vancouver, BC. Built with React, TypeScript, and Vite.

## Brand

The visual design follows `SweetBooth_BrandStyleGuide_2025.pdf`: flat color blocking, hairline rule dividers, and a "contact sheet" / film-print motif in place of gradients and drop shadows. See [`BRAND_REFRESH.md`](./BRAND_REFRESH.md) for the full brief on how the site was brought in line with the guide — what it looked like before, what the guide actually specifies, and what changed.

**Palette:** Sweet Cream `#F7EBDB` · Velvet Mint `#176246` · Parlour Pistachio `#6A927C` · Cotton Candy Blush `#FCDFD6`

**Type:** Perfectly Nineties (headlines), Great Vibes (script accents), Delio (labels/buttons), Lora (body) — all loaded from `public/fonts/`.

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # type-check and build for production (outputs to dist/)
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Project structure

```
src/
  App.tsx                        # page layout: header, hero, gallery, pricing, contact, footer
  App.css                        # all site styling — brand tokens, layout, components
  components/
    ContactForm.tsx              # booking inquiry form (active — submits via Formspree)
    ContactFormFormspree.tsx     # alternate Formspree implementation, not currently used
public/
  images/                        # gallery photos, hero/contact photography, cropped assets
  fonts/                         # brand font files (Delio, Great Vibes, Perfectly Nineties, Lora)
  logo.svg
```

## Contact form

The booking form in `ContactForm.tsx` submits to Formspree. See [`EMAIL_SETUP.md`](./EMAIL_SETUP.md) if you need to reconfigure where submissions go or switch providers. If you deploy this to a new domain, confirm that domain is allowed in the Formspree dashboard.

## Deployment

`npm run build` produces a static `dist/` folder that can be served from any static host (Vercel, Netlify, S3, etc.) — nothing in this project requires a backend.
