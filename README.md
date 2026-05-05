# Portfolio UI Kit

High-fidelity recreation of the *Poforlial* portfolio site as factored React (JSX) components.

## Files

- `index.html` — the interactive kit: mounts React, loads all components, stitches them into a clickable single-page recreation.
- `Nav.jsx` — top navigation + mobile drawer
- `Hero.jsx` — name, tagline, CTAs, stats, orbs, noise
- `Showreel.jsx` — 16/9 frame with glass play button
- `Ticker.jsx` — infinite horizontal skill marquee
- `Work.jsx` — filter row + 3-column card grid
- `Card.jsx` — single work card with tilt + arrow bubble
- `About.jsx` — avatar frame + story + tool tags
- `Contact.jsx` — mega headline + contact pills
- `Footer.jsx` — copyright + credit
- `Modal.jsx` — video modal (opens on card click)
- `tokens.css` — imported tokens + the ported subset of `Poforlial/style.css`

## What's faithful

Colors, type, radii, shadows, spacing, hover states, ghost-glitch on the hero title, drifting orbs, noise overlay, filter row, status badge, contact pill shape, giant card numerals, accent→purple underline on section titles — all ported 1:1 from the source CSS.

## What's simplified

- Custom cursor is **off** (turned out of the way for the preview so the iframe feels normal).
- Magnetic buttons & 3D card tilt are **off** (distracting in a static grid preview).
- Page loader is **off** (unnecessary for a UI kit demo).
- Video embeds link out (no autoplay iframes in the kit).
- Scramble text on hover is off.

## Sources

All components derived from `Poforlial/index.html` + `Poforlial/style.css` + `Poforlial/main.js`. No assets were available in the source mount; every image slot falls back to the built-in SVG placeholder.
