# TabKey Digital — AI-First Transformation Homepage

Production-oriented Next.js implementation of the complete TabKey Digital homepage narrative.

## Homepage structure

1. **Arrival / Hero** — “Engineering Digital Advantage.”
2. **Integrated Digital Partner** — one connected ecosystem and the TabKey promise
3. **Who We Are** — AI-first Digital Transformation Consultancy positioning
4. **Integrated Capabilities** — five immersive control-room states
5. **Why TabKey Digital** — comparison, mission, vision and philosophy
6. **Transformation Systems** — three connected ecosystem models without invented case-study claims
7. **AI-First Transformation** — AI strategy, intelligent automation and adaptive experiences
8. **Industry Intelligence** — eight industry groups covering the supplied sector list
9. **Our Approach** — discover, identify, strategise, design, build and optimise
10. **Digital Impact** — qualitative business outcomes without fabricated statistics
11. **Client Experience** — partnership, communication and long-term support
12. **FAQ** — eight detailed buyer questions
13. **Final CTA** — business-modernisation invitation
14. **Grand Footer** — Brisbane positioning and Square Connect studio signature

The homepage has one semantic instance of every section. Decorative animation layers are marked appropriately and the scrolling transition before Transformation Systems is not treated as an additional content section.

## Experience features

- Timed narrative hero sequence
- Fixed transparent PNG logo
- Bottom frozen-glass navigation revealed after first scroll
- Section-aware navigation tone architecture
- Canvas particles, grid and cursor light field
- Continuously moving digital spheres and AI network
- Five-stage GSAP capability control room
- Sticky transformation narratives
- Process timeline drawing
- Portal CTA environment
- Fixed curtain-reveal footer
- Responsive desktop, tablet and mobile layouts
- Reduced-motion handling

## Stack

- Next.js 16.3 / React 19 / TypeScript
- GSAP + ScrollTrigger
- Canvas ambient particle system
- CSS/SVG interface visuals
- Self-hosted Space Grotesk

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` **on the same computer running the command**. `localhost` is not a public URL and will not open from the Arena file viewer.

For an immediate no-server preview in Arena, open the separate `tabkey-digital-preview.html` deliverable.

### Which file should be used?

- **Use `tabkey-digital-source.zip` for the real website.** Extract it, install the dependencies and deploy the Next.js project to Vercel, Netlify or another Node-compatible host.
- **Use `tabkey-digital-preview.html` only for review and approval.** It is a self-contained demonstration file, not the preferred production codebase.

Production verification:

```bash
npm run typecheck
npm run build
npm start
```

## Main files

- `components/TabKeyExperience.tsx` — page composition and GSAP timelines
- `components/Hero.tsx` — arrival sequence
- `components/TrustFoundation.tsx` — integrated-partner promise
- `components/Intelligence.tsx` — company positioning
- `components/ServicesControlRoom.tsx` — immersive capabilities
- `components/WhyTabKey.tsx` — difference, mission, vision and philosophy
- `components/FeaturedWork.tsx` — transformation ecosystem models
- `components/AITransformation.tsx` — AI pillars
- `components/Industries.tsx` — industry coverage
- `components/ProcessJourney.tsx` — transformation process
- `components/DigitalImpact.tsx` — outcome framework
- `components/ClientExperience.tsx` — partnership model
- `components/FAQ.tsx` — buyer questions
- `components/FinalCTA.tsx` — final invitation
- `components/GrandFooter.tsx` — curtain footer
- `app/globals.css` — complete visual and responsive system

## Replace placeholders

### Logo

Replace `public/tabkey-logo.png` with the approved transparent PNG while keeping the same filename.

### Conceptual imagery

The image-led version includes five original conceptual assets in `public/images`:

- `work-experience.jpg`
- `work-automation.jpg`
- `work-growth.jpg`
- `industries-panorama.jpg`
- `client-partnership.jpg`

They are intentionally labelled as conceptual imagery and are not presented as real clients, team members or completed case studies. Replace the three Work images with genuine project screenshots and the partnership image with approved team/client photography when those assets become available.

### Contact details

The placeholder email is `hello@tabkey.digital`. Update it in:

- `components/FinalCTA.tsx`
- `components/GrandFooter.tsx`

### Parent-brand language

The footer currently uses the supplied wording: **“The Creative Studio of Square Connect.”** It can be changed in `components/GrandFooter.tsx` if the preferred legal relationship is “A Square Connect Company,” “Part of Square Connect,” or another approved formulation.

## Validation

- Production TypeScript build passes.
- No duplicate HTML IDs or repeated semantic homepage sections.
- No fabricated client counts, percentages or performance claims.
- Desktop and mobile compositions are supported.
- Space Grotesk is bundled locally, so the visual system does not depend on a font CDN.
