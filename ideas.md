# Brainstorming: Jiwon Choi Portfolio Design Philosophy

Below are three distinct stylistic approaches for Jiwon Choi's personal portfolio, tailored to a recent University of Toronto Applied Statistics graduate transitioning into Product, Growth, and Business Analytics.

<response>
<text>
## Idea 1: Editorial Neo-Minimalist (The Swiss Analytics Grid)
- **Design Movement**: Swiss Modernism meets high-end digital editorial (Vercel/Linear aesthetic).
- **Core Principles**:
  * Absolute typographical hierarchy and extreme readability.
  * Asymmetric layouts with generous whitespace to denote confidence and premium positioning.
  * Structural lines and fine borders instead of shadows to divide data.
  * Bold, data-inspired but subtle editorial touches.
- **Color Philosophy**: 
  * Background: Clean alabaster/eggshell white (`oklch(0.99 0.003 90)`) for warmth without corporate sterile feeling.
  * Text: Deep graphite/charcoal (`oklch(0.20 0.01 250)`) for premium readability.
  * Accent: Muted sage green (`oklch(0.65 0.04 140)`) or deep ink blue (`oklch(0.35 0.08 240)`) to emphasize growth, metrics, and analytics precision.
- **Layout Paradigm**:
  * Off-center asymmetric layouts. Large left-aligned titles with multi-column side insights.
  * Project cards designed like high-end research briefs or financial analyst reports, featuring key metric highlights.
- **Signature Elements**:
  * Micro-metric callouts: Floating, clean pill tags highlighting specific metrics (e.g., "+24% Retention", "ROAS 4.2x").
  * Thin, elegant grid lines (0.5px) mimicking analytical notebooks or spreadsheets.
- **Interaction Philosophy**:
  * Smooth, snappy page transitions.
  * Metric numbers that count up elegantly on hover or entry.
  * Hovering over project cards reveals subtle data-viz micro-charts or outline highlights.
- **Animation**:
  * Staggered fade-ins with slight vertical translations using snappy cubic-bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Typography System**:
  * Headings: Playfair Display or elegant serif (loaded via Google Fonts) paired with custom tracking.
  * Body & Metrics: Geometrical Sans-serif (Geist or clean Inter-variant) for analytical precision.
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Idea 2: Interactive Data-Canvas (The Growth Lab)
- **Design Movement**: Interactive Lab / Dashboard-inspired interface.
- **Core Principles**:
  * Mimics the environment of an analyst (charts, funnels, segmentations) but styled like a premium consumer product.
  * High-fidelity interactive micro-widgets (e.g., a mini interactive conversion funnel slider).
  * Dark/Light hybrid elements with glowing subtle accents.
- **Color Philosophy**:
  * Background: Soft neutral grey/sand (`oklch(0.97 0.002 70)`).
  * Accents: Vibrant electric cobalt (`oklch(0.55 0.20 260)`) and bright emerald (`oklch(0.68 0.18 145)`) representing positive growth charts.
- **Layout Paradigm**:
  * Interactive "blocks" or "bento grid" that feels like an executive analytics dashboard.
  * Highly visual data-visualization components showing growth loops.
- **Signature Elements**:
  * Live interactive onboarding funnel simulator: users can slide a bar to see how "improving onboarding by 10%" affects "retention & revenue" (perfectly aligning with Jiwon's positioning!).
  * Subtle dotted grid background representing coordinates or scatter plots.
- **Interaction Philosophy**:
  * Draggable components, toggleable charts.
  * Tactile button clicks (`scale(0.97)` on active).
- **Animation**:
  * Spring-based animations for charts and interactive widgets.
- **Typography System**:
  * Headings: Space Grotesk or Syne for a tech-forward, modern product analyst vibe.
  * Body: JetBrains Mono or highly readable sans-serif.
</text>
<probability>0.06</probability>
</response>

<response>
<text>
## Idea 3: Warm Editorial Craft (The Storyteller's Ledger)
- **Design Movement**: Warm Minimalist Editorial / Book-like Ledger.
- **Core Principles**:
  * Positions data as a storytelling medium. "Data is the character; growth is the plot."
  * Soft textures, rounded corners, organic warmth.
  * Extremely relaxed reading pace with wide margins.
- **Color Philosophy**:
  * Background: Soft warm cream/parchment (`oklch(0.98 0.006 75)`).
  * Text: Warm dark espresso (`oklch(0.18 0.012 45)`).
  * Accent: Terracotta (`oklch(0.60 0.12 35)`) and olive (`oklch(0.55 0.08 110)`).
- **Layout Paradigm**:
  * Single column elegant narrative flow.
  * Project case studies read like high-end medium essays with beautiful margins and integrated quotes.
- **Signature Elements**:
  * "Growth Insights" journal cards with decorative serif drop-caps.
  * Elegant signature/monogram logo.
- **Interaction Philosophy**:
  * Slow, graceful fades.
  * Page curl/slide transitions.
- **Animation**:
  * Gentle, longer duration transitions (300-450ms) with soft ease-in-out curves.
- **Typography System**:
  * Headings: Lora or Garamond for an intellectual, academic-yet-modern storyteller feel.
  * Body: Merriweather or soft Sans-serif.
</text>
<probability>0.05</probability>
</response>

---

# Chosen Design Philosophy
I am choosing **Idea 1: Editorial Neo-Minimalist (The Swiss Analytics Grid)**. 
It perfectly fits a **U of T Applied Statistics graduate** transitioning to **Product, Growth, and Business Analytics** because:
1. It strikes the perfect balance between analytical precision (the "Grid" and "Data Callouts") and premium product thinking (the Vercel-like sleek editorial layout).
2. It completely avoids the "heavy software engineer" look (no fake terminal consoles, no dark hacker vibes) and the "boring corporate resume" look (no dry blue-and-white grids).
3. The combination of elegant Serif display headings (Playfair Display) with super clean Sans-serif (Plus Jakarta Sans or Geist-like typography) gives an immediate "premium startup / editorial" feel.
4. We will build custom interactive micro-charts and growth calculators directly in the projects/about section to showcase real product analytics thinking!
