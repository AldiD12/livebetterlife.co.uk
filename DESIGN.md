# Live Better Life — Design System (Warm Luxury)

Direction: **cream + charcoal + brass**, editorial and premium — inspired by Luxury
Decorators. Goal: kill the "AI-minimal" feel (thin, letter-spaced, all-caps, monochrome,
flat) and replace it with warmth, weight, depth, and real photography.

---

## 1. What we're fixing (the "too AI / too boring" tells)

| Current (remove) | New (replace with) |
|---|---|
| Headings in `font-light` + `UPPERCASE` + `tracking-[0.2em/0.3em]` | Bold serif display, **sentence case**, tight tracking |
| Pure `gray-900` on white, no colour | Warm cream canvas + charcoal ink + **one brass accent** |
| Flat white, no depth, square corners | Rounded-2xl cards, soft warm shadows, layered surfaces |
| Great project photos underused | Full-bleed cinematic photography as the hero of each section |
| No motif, no personality | Circle-arrow CTA motif + brass eyebrow rules, repeated |

---

## 2. Colour palette

| Token | Hex | Role |
|---|---|---|
| `cream` | `#F7F3EC` | Page canvas (replaces white) |
| `sand` | `#EFE8DC` | Alt section tint |
| `ivory` | `#FDFBF7` | Card surface |
| `ink` | `#1B1A17` | Primary text + dark sections/footer |
| `ink-soft` | `#2A2823` | Dark section alt |
| `stone` | `#6E675C` | Muted / secondary text |
| `line` | `#E4DCCF` | Hairline borders |
| `brass` | `#B08D4C` | Accent (icons, rules, borders, hovers) |
| `brass-deep` | `#8A6A32` | Accent text on light (AA-safe for eyebrows/small) |
| `brass-tint` | `#EADFC8` | Soft accent background |

Rules: **body text is always `ink`/`stone`, never brass.** Brass is an accent only —
eyebrows, hairline rules, icon strokes, hover underlines, and the circle-arrow. Primary
buttons are `ink` (charcoal) with white text; brass sits on dark backgrounds beautifully.
One accent, used sparingly — that restraint is what makes it read as "designed."

---

## 3. Typography

Two families (via Google Fonts):
- **Display — Fraunces** (serif, characterful, weight 500–600): all H1/H2, big statements.
- **Body/UI — Inter** (400/500): paragraphs, labels, nav, buttons.

Scale (responsive `clamp`):
- Hero H1 — Fraunces 600, `clamp(2.75rem, 6vw, 5rem)`, line-height 1.05, tracking -0.01em
- Section H2 — Fraunces 600, `clamp(2rem, 4vw, 3rem)`, line-height 1.1
- Card H3 — Fraunces 500 or Inter 600, 1.25–1.5rem
- **Eyebrow** — Inter 500, 0.75rem, uppercase, tracking 0.18em, `brass-deep`, preceded by a
  24px brass rule. (This is the *only* place uppercase tracking survives — small and sparing.)
- Body — Inter 400, 17px, line-height 1.7

**Migration rule:** every heading currently using `font-light tracking-[0.2em] uppercase`
becomes Fraunces, sentence case, normal tracking. That single change removes ~80% of the
"AI" feeling.

---

## 4. Shape, depth, motion

- **Radius:** cards `rounded-[20px]`, buttons `rounded-full` (pill), inputs `rounded-xl`.
- **Shadow (soft, warm):** `--shadow-card: 0 24px 48px -24px rgba(27,26,23,0.22)`; cards
  lift on hover (`translateY(-4px)` + slightly stronger shadow).
- **Motion:** 300–500ms ease; images `scale(1.04)` on hover inside `overflow-hidden` cards.
- **Signature motif — circle-arrow:** a `↗` inside a bordered circle, on every primary CTA
  and "view project / read more" link. This is the repeated brand gesture.

---

## 5. Core components

- **Top contact bar** (charcoal, thin): phone · WhatsApp · email · hours + socials on the right.
- **Navbar** (floating white/ivory pill, sticky, soft shadow on scroll): logo left; sentence-case
  links (medium weight); brass-outlined **"Get a quote"** pill with circle-arrow right.
- **Buttons:** primary = `ink` pill + white text + circle-arrow; secondary = brass-outline pill;
  ghost = text + brass underline on hover.
- **Section heading block:** brass rule + eyebrow → big Fraunces H2 → short stone subhead.
- **Image cards** (services, projects): `ivory`, `rounded-[20px]`, soft shadow, photo top,
  content padded, circle-arrow link; hover lift + image zoom.
- **Category pills:** rounded-full, `line` border, small brass icon (Residential, Commercial,
  Period, Kitchens…).
- **Stat counters:** big Fraunces number + stone label (Years, Projects, Areas, 5★).
- **Testimonial cards:** rounded, brass quote mark, star row, name + area.
- **Accreditation strip:** the existing `/images/certs` logos on a `sand` band ("FMB" trust).

---

## 6. Homepage, section by section

1. **Top bar + floating navbar** (above).
2. **Hero** — full-bleed best project photo (e.g. Devonshire rear), warm dark overlay; eyebrow
   "London renovation & rebuild specialists"; bold Fraunces H1 (e.g. *"We rebuild London homes,
   beautifully."*); one-line subhead; two CTAs (brass circle-arrow "Get a free quote" + outline
   "View our work"); trust line ("127 families · since 2010"); scroll cue.
3. **Philosophy / intro** (`cream`) — eyebrow + big statement headline + short copy + credentials,
   paired with a rounded project image. (Mirrors Luxury Decorators' "Transforming dull spaces".)
4. **Services** — bold heading; consolidated GBP service cards with real photos + circle-arrow.
5. **Trust band** (`ink` or `sand`) — stat counters + accreditation logos + guarantee line.
6. **Portfolio** — editorial grid of the 8 real projects, rounded cards, "View project" arrow.
7. **Why renovate not move / process** — keep content, restyle to the system.
8. **Testimonials** — warm cards, stars, NW-London names.
9. **Contact / CTA** (`ink`) — restyled rounded form, phone/WhatsApp, map.
10. **Footer** (`ink`) — organized, cream-on-charcoal, brass accents.

---

## 7. Inner pages
Apply the same system to: Services index + the service pages, the 3 location pages,
Project Detail (hero photo + rounded gallery + Before/Progress/After pills), Blog list + post
(editorial typography — this is also the SEO win for the cost article).

---

## 8. Implementation (Tailwind + Vite, no new framework)

1. **`tailwind.config.js`** → extend `colors` (table above), `fontFamily`
   (`display: ['Fraunces', 'serif']`, `sans: ['Inter', ...]`), `borderRadius`, `boxShadow`.
2. **`index.html`** → swap the Marcellus font link for Fraunces + Inter; keep preconnect/preload.
3. **`src/index.css`** → set `body { background: cream; color: ink; font-family: Inter }`,
   define CSS vars + the shadow + a reusable `.eyebrow` and `.btn-arrow` helper.
4. Build small reusable components: `Button`, `SectionHeading`, `Card`, `CircleArrow` — refactor
   sections to use them so the whole site stays consistent.

---

## 9. Rollout (phased, each phase shippable)
- **Phase 1** — design tokens + top bar + navbar + hero. (The first impression; biggest impact.)
- **Phase 2** — services + portfolio + trust band.
- **Phase 3** — testimonials + contact + footer.
- **Phase 4** — inner pages (service/location/project/blog).

---

## 10. Guardrails (do not break during redesign)
- **SEO:** keep one semantic `<h1>` per page with the target keywords; keep H2/H3 text,
  image `alt`, structured data, meta, and canonical intact. This is a *visual* reskin, not a
  content rewrite.
- **Performance:** two font families max; images already optimized; lazy-load below the fold.
- **Accessibility:** charcoal text on cream passes AA; brass only for accents/large text; every
  icon-only control gets an `aria-label`; focus states visible.
