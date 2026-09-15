# Brand Refresh — Design Brief

**Date:** September 2026
**Reference:** `SweetBooth_BrandStyleGuide_2025.pdf`

## TL;DR

The site was a placeholder — put up fast to get *something* live — built with the right brand colors and fonts already wired in, but styled like a generic modern SaaS template rather than the vintage-editorial, flat-color brand the style guide actually describes. This pass closes that gap: same palette and typefaces as before, but the layout language now matches the guide — flat color blocking instead of gradients, hairline rules instead of drop shadows, and a "contact sheet" / film-print motif that's specific to a photobooth business instead of generic card-and-shadow UI.

## Where we started

The original build (`git log` shows it went up incrementally — favicon, images, marquee, pricing, scatter photos) got the *substance* right: `App.css` already had the correct hex values (`#F7EBDB` cream, `#176246` mint, `#6A927C` pistachio, `#FCDFD6` blush) and all four real brand fonts (Delio, Great Vibes, Perfectly Nineties, Lora) loaded via `@font-face`. What it didn't have was the brand's actual visual *language*:

- Gradient buttons and drop-shadowed cards everywhere — reads as a stock SaaS template, not a boutique vintage brand
- A frosted-glass `backdrop-filter` header — a modern-web-app pattern with no basis in the guide
- A scattered, rotated-polaroid gallery of generic-feeling shots, with no connection to the "contact sheet" idea a photobooth business is built on
- Every section title set in the Great Vibes script — the guide only ever uses that font for a short accent phrase, never a full heading
- No grain, no hairline dividers, no sense of the printed-material texture the guide leans on throughout

None of this was wrong, exactly — it just wasn't *this* brand yet.

## What the style guide actually says

The guide itself is a single tall Canva-style page (no page breaks, 35MB, mostly embedded photography) rather than a conventional spec sheet, so the first step was actually extracting it — text content and rendered imagery — to read it at all. A few things stood out as load-bearing for the redesign:

- **Voice:** "A photo experience that takes the cake" — playful dessert language sitting on top of a genuinely upscale, minimalist frame. Est. 2023, Vancouver.
- **Palette:** Sweet Cream, Velvet Mint, Parlour Pistachio, Cotton Candy Blush — used as flat, confident blocks, not as gradient stops.
- **Type system, each font with one job:**
  - *Perfectly Nineties* carries every headline, almost always mixing ROMAN CAPS with an *italic* word for contrast
  - *Great Vibes* is rationed to one accent moment per section — a trailing phrase, a signature line — never a whole heading
  - *Delio* is exclusively the tracked-out uppercase label/eyebrow/button voice
  - *Lora* is body copy
- **Imagery direction:** "Retro Dining Joint meets Vintage Editorial" — close crops, film grain, high contrast, real prints over stock photography
- **Structure:** thin double-rule dividers between sections, bordered frames instead of shadows, generous whitespace, a visible paper-grain texture across every panel regardless of color

## The process

Rather than editing the live site blind, the redesign went through a review loop first:

1. **Prototype as an artifact** — built the new visual direction as a standalone HTML mockup (real fonts, real photos, real copy) so it could be reviewed and commented on without touching production code.
2. **Iterated on feedback** — corrected gallery photo selections against the actual source photobooth strips, fixed a couple of CSS bugs that only showed up under review (default white fills bleeding through "transparent" auto-layout frames when this was prototyped in Figma; a `justify-self` grid quirk that later reappeared in the real hamburger menu), reworked the contact section layout, restyled the "You dessert the best!" line, and added the film-strip framing motif.
3. **Ported into the real codebase** once the direction was approved — `App.css` and `App.tsx` rewritten, `ContactForm.tsx` restyled without touching its working Formspree submission logic.
4. **Follow-up refinements** driven by using the live site: cropping the gallery thumbnails to hide the physical print's white borders while keeping the *original* bordered print one click away, add-on pricing tucked behind a drawer instead of cluttering the card, a "was/now" sale price on the Sweet Package, a branded confirmation modal replacing the browser's native `alert()`, and a proper hamburger menu for mobile instead of the nav links just shrinking to illegibility.

## What actually changed, section by section

| Section | Before | Now |
|---|---|---|
| Header | Frosted-glass blur, gradient "Book Now" button | Flat cream, 1px mint hairline border, tracked-caps nav links with an underline-grow hover |
| Hero | Plain headline, shadowed photo | Roman/italic headline with a Great Vibes accent on "takes the cake," photo in a bordered frame with corner registration ticks and a caption row |
| Gallery | Scattered, rotated polaroids of assorted photos | A 4-up "contact sheet" of curated real client photos (cropped to hide the print border), each opening the *actual* original bordered print in a lightbox on click; a "+ More Samples" modal surfaces the rest of the real photobooth library |
| Pricing | Gradient cards, drop shadows | Flat bordered cards, a collapsible "+ Add Ons" drawer per package, and a crossed-out original price beside the Sweet Package's sale price |
| Contact | Single-column form, native browser `alert()` on submit | Two-column layout (form + full-bleed photo split by a hairline rule), same Formspree logic under the hood, success/error shown in a branded modal instead of the OS-styled alert |
| Footer | Gradient-adjacent flat mint, script tagline | Flat mint, "YOU DESSERT THE BEST!" in tracked Delio caps, trimmed fine print |
| Nav (mobile) | Links just shrank down, cramped | Proper animated hamburger → full-width dropdown menu |
| Global | No texture | A subtle film-grain overlay across every section, cream or mint alike |

The "Our Satisfied Clients" marquee was removed outright at the client's request rather than restyled.

## Notes for next time

- `public/images/stock01.png` and `ref/logos/` are currently unused leftovers from earlier iterations — safe to remove once confirmed nobody needs them.
- If this gets deployed to a new domain, double check the Formspree dashboard's allowed-domains setting still covers it — the submission logic itself doesn't care where it's hosted, but Formspree's own referrer check might.
- The brand's actual display and label fonts (Perfectly Nineties, Delio) aren't in Figma's font library — if this design ever needs to go back into Figma, expect to substitute (Fraunces and Archivo Bold stood in acceptably) unless those fonts get added to the team's Figma fonts.
