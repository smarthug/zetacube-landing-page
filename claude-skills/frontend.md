<frontend_fluence_skill>

## Why this skill exists
- The *Improving frontend design through Skills* article highlights that LLMs default to distributional-safe UI (Inter + white + purple). Use this skill whenever Claude is asked to craft a landing page so we inject high-signal, context-specific guidance only when needed.
- Goal: recreate the structure and mood of https://www.fluence.network/gpu – a deep-space energy SaaS landing page filled with layered cards, neon accents, and confident spacing.

## How to load & scope
1. Load this skill only for frontend/visual work. Do **not** bring it into unrelated problem-solving.
2. Ask Claude to state when the skill is active so collaborators know that Fluence-style heuristics are in play.
3. Output must stay implementable (React/Vite, Tailwind, or vanilla CSS). Every flourish must map to code.

## Aesthetic DNA (per article axes)
### Typography
- Avoid Inter/Roboto/Open Sans/Lato/system fonts entirely. Prefer one expressive grotesk (e.g., *Bricolage Grotesque*, *Clash Display*, or *General Sans*) paired with a mono accent (*IBM Plex Mono* or *Space Mono*) for numbers.
- Contrast heavily: hero headline 56–64px, sections 28–32px, body 16–18px. Use 200-weight for supporting copy, 700–800 for anchors.

### Color + Theme
- Palette anchored in Fluence GPU page: midnight navy `#010616` to `#020F2B` vertical gradient, graphite card surfaces `#0C162A`, accent cyan `#41F5C7`, warm amber secondary `#F5A623`, and muted text `rgba(255,255,255,0.82)`.
- Define CSS variables: `--bg`, `--panel`, `--stroke`, `--accent`, `--muted`. Use accent sparingly for CTAs, price pills, and progress indicators.

### Backgrounds & Atmosphere
- Never leave solid flats. Layer at least two gradients (radial glow + linear sweep) plus subtle dot grid or angled line pattern reminiscent of Fluence hero.
- Use blur filters or `backdrop-filter` to hint at glass overlays; keep contrast WCAG AA by double-checking text vs. background tokens.

### Motion
- Prefer purposeful reveals: hero cards slide/fade with 120% translateY -> 0, 220ms/80ms staggering; metrics pulse border on hover, CTA button glows via box-shadow breathing (3s ease-in-out).
- Keep animations CSS-based (`@keyframes pulseGlow`). Disable or limit motion for users with `prefers-reduced-motion`.

## Layout blueprint (mirror Fluence GPU)
1. **Navigation bar** – Transparent with blur, left logo wordmark, centered nav links (Products, Providers, Pricing, Docs), right duo buttons (`Join Providers`, `Launch Console`).
2. **Hero split** – Left text stack (eyebrow, H1, supporting copy, CTA pair). Right stack of wireframe cards (GPU queue, savings card, availability panel).
3. **Trust marquee** – Row of grayscale partner logos; add dotted dividing line.
4. **KPIs** – Three highlights (Avg Savings, Launch time, Providers online). Use monospace numbers with neon underline.
5. **GPU catalog** – Responsive cards (H100, A100, L40S) listing VRAM, CUDA cores, hourly cost, status chips. Buttons `Add to Fleet`.
6. **Workflow timeline** – Horizontal stepping cards (Select GPU → Configure Container → Launch Workload → Monitor utilization).
7. **Feature grid** – 2x2 or 3x2 cards covering deterministic pricing, transparent scheduling, multi-region orchestration, SLA coverage.
8. **Pricing comparison** – Table comparing Fluence Network vs. Traditional Cloud vs. Brokers, include pill badges “-80%”.
9. **Use cases + Testimonials** – alternating dark/light panels, gradient quote block with avatar initials.
10. **FAQ accordion** – Minimal, but retains tinted backgrounds.
11. **Final CTA** – Full-width card with gradient halo, email capture + button.
12. **Footer** – Columns (Product, Network, Legal) plus social/discord pill.

## Implementation heuristics
- Use CSS Grid/Flex with generous 80–120px vertical rhythm between major sections.
- Outline every card with `1px solid rgba(255,255,255,0.08)` plus inside shadow `inset 0 1px 0 rgba(255,255,255,0.05)` to mimic Fluence depth.
- Buttons: pill silhouette, accent glow (`box-shadow: 0 0 30px rgba(65,245,199,0.45)`).
- Data elements (prices, speeds) should read from JS arrays/objects for easy swapping; include placeholder data for GPU SKUs and FAQ entries.
- Keep assets abstract unless provided (use SVG scribbles, gradient blobs, or CSS shapes; no stock imagery).

## Content prompts for Claude
- Eyebrow copy seeds: “Decentralized GPU fabric”, “Deterministic pricing”, “Launch in seconds”.
- Subcopy tone: confident, battery-charging, minimal marketing fluff.
- If instructions ambiguous, default to Fluence-style split sections before inventing new structures.

## QA checklist before handing off
- ✅ Did you use the non-generic font pairing and register in the head (Google Fonts link or @import)?
- ✅ Are gradient + pattern backgrounds active on hero + CTA sections?
- ✅ Do accent colors appear only on CTAs, metrics, or highlights (max 20% of surface)?
- ✅ Are motion effects scoped to on-load/hover with reduced-motion guard?
- ✅ Do sections follow the blueprint order unless user explicitly opts out?
- ✅ Is the page accessible (semantic landmarks, alt text, 16px minimum body text, focus rings visible against dark theme)?

Keep this skill lean (~400–500 tokens) so it can be loaded alongside other context without degrading Claude’s reasoning, as recommended in the blog.

</frontend_fluence_skill>
