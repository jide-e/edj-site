# EDJ CONSULTING — MASTER BUILD DOCUMENT
# Everything Claude Code needs to build the complete site

---

## PROJECT OVERVIEW

Build a static, multi-page website for EDJ Consulting, a governance-first technology advisory firm serving regulated organizations. The site must look like it belongs to an established, senior consulting firm operating in the federal/government contractor ecosystem. Not a startup. Not a freelancer. Not an MSP.

**Tech stack:** Static HTML, CSS, JS. No frameworks. No CMS. Deployable to Netlify.
**Pages:** index.html, services.html, about.html, industries.html, contact.html, 404.html
**Supporting files:** sitemap.xml, robots.txt, structured data in each page

---

## BRAND SYSTEM

### Colors

```css
/* Navy System (from logo) */
--navy-900: #0A1628;    /* Deepest backgrounds */
--navy-800: #0F2240;    /* Hero, nav scrolled, dark sections */
--navy-700: #162F54;    /* Cards on dark backgrounds */
--navy-600: #1C3D6E;    /* Hover states on dark */

/* Blue Accent (from logo D) */
--blue-500: #2B7CD8;    /* Primary accent, links, accent lines */
--blue-400: #4A9AE8;    /* Hover states */
--blue-600: #1E5FA8;    /* Pressed states */

/* Orange (CTA buttons ONLY) */
--orange: #D4622B;      /* Primary CTA buttons */
--orange-light: #E07A45; /* CTA hover */
--orange-dark: #B85222;  /* CTA pressed */

/* Neutrals */
--slate-100: #F4F6F8;   /* Light section backgrounds */
--slate-200: #E2E7ED;   /* Borders, dividers */
--slate-300: #C5CEDB;   /* Secondary text on dark */
--slate-400: #8E9BB2;   /* Muted text */
--slate-500: #5E6D87;   /* Body text secondary */
--white: #FFFFFF;

/* Semantic */
--text-primary: #0D1B2E;   /* Headings on light */
--text-secondary: #3D4F68; /* Body on light */
--text-on-dark: #E2E7ED;   /* Body on dark */
--text-light: #C5CEDB;     /* Muted on dark */
```

### Typography

```
Display / Headings: 'Cormorant Garamond', Georgia, serif — weights 600, 700
Body / UI: 'Outfit', Helvetica Neue, sans-serif — weights 300, 400, 500, 600
Labels / Mono: 'IBM Plex Mono', monospace — weights 400, 500
```

Load via Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale
- H1: clamp(2.4rem, 5vw, 3.8rem), letter-spacing -0.02em
- H2: clamp(1.8rem, 3.5vw, 2.8rem), letter-spacing -0.01em
- H3: clamp(1.3rem, 2.5vw, 1.75rem)
- Body: 1.05rem, line-height 1.7
- Labels: 0.75rem, uppercase, letter-spacing 0.14em, IBM Plex Mono

### Visual Rules
- Blue accent lines (not gold) above section labels. Thin, ~60px wide, 2px height.
- Orange appears ONLY on primary CTA buttons. Nowhere else.
- No stock photos. No illustrations. Typography and layout only.
- No em-dashes anywhere in the copy. Use periods, commas, colons only.
- Generous whitespace. Sections padded at 6rem top/bottom on desktop.
- Dark backgrounds dominate. This is not a light, airy SaaS site.

### Logo
Placeholder until real SVG is provided. Use text "EDJ" with:
- E in navy-900
- D in blue-500
- J in navy-900
- Font: Outfit, weight 700, size ~1.5rem in nav

---

## SITE ARCHITECTURE

```
edj-site/
├── index.html
├── services.html
├── about.html
├── industries.html
├── contact.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
    └── (placeholder directory for logo, favicon, og-image)
```

---

## SHARED COMPONENTS

### Navigation (all pages)
- Fixed top bar
- Transparent background on page load, transitions to navy-900 with backdrop blur on scroll
- Left: Logo placeholder ("EDJ" styled as described above)
- Right: Services | About | Industries | Contact | [Start a Conversation] button
- CTA button: orange background, white text, small rounded corners (4px)
- Mobile (below 768px): hamburger menu, full-screen navy-900 overlay
- Height: ~72px desktop, ~64px mobile
- Include skip-to-content link as first element in body

### Footer (all pages)
- Full-width navy-900 background
- 4 columns: Logo + tagline | Quick Links | Services | Contact Info
- Tagline: "Governance-First Technology Leadership"
- Quick Links: Home, Services, About, Industries, Contact
- Services: Program Leadership, Compliance Translation, Vendor Orchestration, Executive Communication
- Contact: Email placeholder (info@edjconsulting.com), Phone placeholder ((202) 555-0100)
- Thin blue-500 divider line at top of footer
- Bottom bar: "© 2025 EDJ Consulting LLC. All rights reserved."
- Subtle, clean, not heavy

### CTA Section (appears above footer on every page except contact)
- Full-width navy-700 background
- Blue accent line (60px, 2px, blue-500) centered above headline
- H2: You already know something needs to change.
- Body: EDJ works with organizations that have recognized the gap between where they are and where they need to be. The next step is a conversation. No pitch. No proposal. Just clarity.
- Button: "Start a Conversation" (orange, links to contact.html)
- Centered text, generous padding

---

## PAGE 1: HOMEPAGE (index.html)

### Section 1: Hero
- Full viewport height, navy-900 background
- Centered content, vertically and horizontally
- Label (mono, blue-500): GOVERNANCE-FIRST TECHNOLOGY LEADERSHIP
- H1: Compliance That's Defensible. Technology That's Governed. Vendors That Are Accountable.
- Subhead (p, text-on-dark, max-width 680px): EDJ Consulting is the missing governance layer between leadership and vendors. We help regulated organizations navigate compliance, migration, and modernization.
- Primary CTA button (orange): Start a Conversation → contact.html
- Secondary CTA (blue-500 text link with arrow or underline): See How We Work → services.html
- Staggered fade-in animation on load: label → h1 → subhead → CTAs, 0.2s delays

### Section 2: The Challenge
- slate-100 background
- Label (mono, blue-600): THE CHALLENGE
- H2: Between your leadership team and your vendors, there's a gap. Most organizations feel it. Few know how to close it.
- 3-column grid of cards (stack to 1 column on mobile)

**Card 1:**
- Quote: "We have vendors. We don't have an owner."
- Body: Your MSP manages systems. Your compliance firm writes policies. Your security vendor runs scans. But no one owns the full picture. When something falls through the cracks, accountability dissolves and progress stalls.

**Card 2:**
- Quote: "Leadership wants confidence, not dashboards."
- Body: Executives don't need more dashboards. They need someone who can walk into a room and say: "Here's where we stand, here's what's at risk, and here's what we're doing about it." Most organizations don't have that voice.

**Card 3:**
- Quote: "We can't afford to get this wrong, or do it twice."
- Body: Compliance programs that stall or restart cost more than the original budget. Migrations that break mid-stream erode trust. The stakes are too high for informal coordination when defensibility and credibility are on the line.

Card styling: white background, subtle shadow, blue-500 top border (3px). Quote in Cormorant Garamond italic or semibold. Body in Outfit regular.

### Section 3: What We Do
- navy-800 background
- Label (mono, blue-400): WHAT WE DO
- H2 (white): Four Gaps. One Point of Accountability.
- 4-column grid of service cards (2-column on tablet, 1 on mobile)

**Card 1: Governance-Led Program Leadership**
- Gap line (italic or lighter weight): The gap: No one owns the full initiative.
- Body: EDJ provides fractional CIO-level leadership, defining scope, sequencing work, and serving as the single point of accountability across vendors, timelines, and executive expectations.
- Link: Learn more → services.html#pillar-1

**Card 2: Compliance Translation**
- Gap line: The gap: Frameworks exist on paper but not in practice.
- Body: EDJ translates NIST, ITAR, CUI, FISMA, and CMMC into executable task plans, practical controls, and audit-defensible documentation, so compliance exists in reality, not just in policy.
- Link: Learn more → services.html#pillar-2

**Card 3: Vendor Orchestration**
- Gap line: The gap: Vendors are engaged, but no one is coordinating them.
- Body: EDJ coordinates MSPs, security firms, compliance vendors, and contractors, enforcing handoffs, preventing scope gaps, and keeping every party aligned to a single plan without burning relationships.
- Link: Learn more → services.html#pillar-3

**Card 4: Executive Communication**
- Gap line: The gap: Leadership lacks clear, decision-ready visibility.
- Body: EDJ translates technical status into concise, executive-level clarity, surfacing real risk early, framing tradeoffs honestly, and preventing last-minute surprises.
- Link: Learn more → services.html#pillar-4

Card styling: navy-700 background, blue-500 top border (3px), white text. Subtle hover lift.

### Section 4: The EDJ Difference
- white background
- Label (mono, blue-600): THE EDJ DIFFERENCE
- H2: Built for Accountability, Not Billing Hours
- 2-column layout (stack on mobile)

**Left column (prose):**
Most firms in this space are structured around one of two models: selling tools or selling time. MSPs manage systems indefinitely. Compliance firms deliver binders and move on. Systems integrators scope large and bill larger. Large consulting shops send a partner to the pitch and junior staff to the work.

None of these models are designed to own the outcome. They're designed to own the engagement.

EDJ is structured differently. We enter with a defined scope, lead the work across every vendor and stakeholder, and exit when the organization can stand on its own. We don't sell software. We don't compete with your vendors. We make your vendors perform.

The goal isn't a long-term contract. The goal is a defensible result and a clean handoff.

**Right column (What EDJ Is Not):**
Each item: bold category name, then one sentence.

**An MSP.** We don't manage your systems. We manage the program your systems operate within.

**A compliance audit shop.** We don't hand you a gap assessment and leave. We turn findings into executable plans and see them through.

**A systems integrator.** We don't sell implementation labor. We lead the vendors who do.

**A staff augmentation firm.** We don't fill a seat. We fill a leadership vacuum.

**A reseller.** We have no product partnerships, no referral fees, no vendor loyalties. Our only incentive is your outcome.

Design: Left column has a blue-500 left border accent (3px). Right column items have subtle spacing between them.

### Section 5: Representative Engagement
- navy-900 background
- Label (mono, blue-400): REPRESENTATIVE ENGAGEMENT
- Horizontal stats bar, 4 stats in a row (2x2 on tablet, stacked on mobile)

**Stat 1:** 3–6 (large, blue-500, Cormorant Garamond) / Vendors Coordinated (small, mono, slate-300)
**Stat 2:** 2–5 / Frameworks in Scope
**Stat 3:** 8–16 Wks / Program Lifecycle
**Stat 4:** 80–95 Hrs/Mo / Senior Program Leadership

- Below stats: frameworks bar
- NIST 800-171 | ITAR | CUI | FISMA | CMMC
- Mono font, slate-300, separated by vertical bars or bullet dividers
- Centered, subtle

### Section 6: CTA
- (Uses shared CTA section component described above)

---

## PAGE 2: SERVICES (services.html)

### Page Header
- navy-800 background
- Label (mono, blue-400): HOW WE WORK
- H1 (white): Program Leadership, Not Deliverables
- Intro (text-on-dark, max-width 680px): EDJ does not sell hours. We sell accountability. Every engagement is scoped around a specific compliance or technology objective, led by senior program leadership, and designed to end when your organization can operate independently. The work is structured. The communication is clear. The exit is intentional.

### Pillar 1 (white background) — id="pillar-1"
- Label (mono, blue-600): SERVICE 01
- H2: Governance-Led Program Leadership
- Gap line (styled distinctly, perhaps italic or blue-500 text): The gap: No one owns the full initiative.

**Body copy:**
Most regulated organizations have vendors doing the work but no one running the program. The MSP is configuring systems. The compliance firm is writing policies. The security vendor is running assessments. But no one is sequencing the work, enforcing dependencies, or telling leadership the truth about where things stand.

EDJ serves as fractional CIO-level program leadership. We define scope, assign ownership, set milestones, and hold every party accountable to a single plan. We run the weekly check-ins. We maintain the centralized tracker. We make the calls when priorities conflict.

The result: one point of accountability across every vendor, every workstream, and every executive conversation.

**What this looks like in practice:**
(Styled as a distinct block, perhaps navy-700 background card or inset with left border)

A mid-size government contractor needed to achieve ITAR compliance and CMMC Level 2 alignment across a 45-user M365 environment. The initiative involved a dedicated cybersecurity firm, an infrastructure partner, and internal staff with no prior compliance experience. EDJ led the 12-week program from scoping through close-out: coordinating a 6-person technical team, managing a 4-phase implementation roadmap, maintaining milestone tracking with owners and due dates, and delivering weekly executive briefings to the CEO and senior leadership. The program completed on schedule with full audit-ready documentation.

### Pillar 2 (slate-100 background) — id="pillar-2"
- Label: SERVICE 02
- H2: Compliance Translation
- Gap line: The gap: Frameworks exist on paper but not in practice.

**Body copy:**
NIST 800-171, ITAR, CUI, FISMA, and CMMC are not implementation guides. They are control frameworks. The distance between "we need to comply with ITAR" and "here is exactly what we need to configure, document, and prove" is where most programs stall.

EDJ translates regulatory frameworks into three things: practical control requirements your team can act on, executable task plans with owners and deadlines, and audit-defensible documentation that holds up under scrutiny. We don't write a gap assessment and leave. We convert findings into work, and we see that work through.

**What this looks like in practice:**

A 90-person engineering firm with active DoD subcontracts had been told by a prime contractor that they needed to demonstrate NIST 800-171 compliance within 120 days or risk losing their subcontract. They had a security vendor running vulnerability scans and a compliance firm that had produced a gap assessment six months earlier. Neither had converted findings into an actionable plan. EDJ translated the gap assessment into a prioritized control implementation schedule, mapped each control to specific M365 and infrastructure configurations, and built the SSP and POA&M from scratch. The client submitted their SPRS score on deadline and retained the subcontract.

### Pillar 3 (white background) — id="pillar-3"
- Label: SERVICE 03
- H2: Vendor Orchestration
- Gap line: The gap: Vendors are engaged, but no one is coordinating them.

**Body copy:**
A typical EDJ engagement involves three to six vendors: an MSP, a compliance firm, a security vendor, a cloud or M365 specialist, and often one or two additional contractors. Each vendor has their own scope, their own timeline, and their own definition of "done." Without a single coordinator enforcing handoffs and resolving conflicts, gaps appear between workstreams. Deliverables slip. Finger-pointing starts.

EDJ sits above the vendor layer. We don't compete with your vendors. We make them perform. We enforce scope boundaries, manage dependencies, ensure that one vendor's output is another vendor's input, and prevent the accountability gaps that cause programs to stall or restart.

**What this looks like in practice:**

A policy research firm with 35 employees handling CUI was preparing for its first client-requested security audit. The firm had an MSP managing day-to-day infrastructure, a compliance consultant drafting policies, and a separate cloud migration vendor moving file shares to SharePoint. None of the three vendors had visibility into what the others were doing. EDJ stepped in eight weeks before the audit, established a single project tracker across all three workstreams, identified four critical gaps between vendor scopes that would have surfaced during the audit, and coordinated remediation. The firm passed the audit with no findings.

### Pillar 4 (slate-100 background) — id="pillar-4"
- Label: SERVICE 04
- H2: Executive Communication
- Gap line: The gap: Leadership lacks clear, decision-ready visibility.

**Body copy:**
Compliance and technology programs generate enormous amounts of technical detail. Most of it is irrelevant to the people making decisions. What leadership needs is not a status dashboard. They need someone who can walk into the room and say: here is where we stand, here is what is at risk, and here is what we are doing about it.

EDJ provides weekly executive reporting that translates technical progress into language leadership can act on. We surface real risk early. We frame tradeoffs honestly. We make sure that the CEO, COO, or executive sponsor is never surprised by a missed deadline, a vendor failure, or a compliance gap they should have known about three weeks ago.

**What this looks like in practice:**

A PE-backed engineering services firm had acquired a small government contractor and inherited a FISMA compliance obligation it was not prepared for. The board needed quarterly updates on compliance posture, but the internal IT director could not translate the technical program into language the board could act on. EDJ provided executive-level reporting throughout a 16-week remediation effort, translating control implementation progress, risk exposure, and vendor performance into concise briefings. The board approved two critical budget decisions on schedule because they understood exactly what they were funding and why. The IT director stayed focused on execution instead of spending 10 hours a week preparing slides.

### Engagement Profile Card
- navy-800 background
- Label (mono, blue-400): WHAT AN ENGAGEMENT LOOKS LIKE
- H2 (white): Representative Engagement Profile
- Intro: Every EDJ engagement is scoped to the client's specific compliance and technology objectives. While no two programs are identical, a representative engagement typically includes:
- 4 stats displayed prominently (same style as homepage stats but in card/block format):
  - 3 to 6 / Vendors coordinated under a single program lead
  - 2 to 5 / Regulatory frameworks in scope
  - 8 to 16 weeks / From scoping through handoff
  - 80 to 95 hours per month / Of senior program leadership
- Frameworks bar below: NIST 800-171 | ITAR | CUI | FISMA | CMMC

### CTA Section
- (shared component)

---

## PAGE 3: ABOUT (about.html)

### Page Header
- navy-800 background
- Label (mono, blue-400): THE FIRM
- H1 (white): Governance First. Outcomes Always.

### Section 1: What EDJ Is (white background)
- Narrow container (max-width ~840px), prose format

EDJ Consulting exists because most regulated organizations face the same structural problem: they have compliance obligations, technology investments, and vendor relationships, but no one connecting them into a governed, accountable program.

EDJ fills that gap. We provide senior program leadership that translates regulatory requirements into executable plans, coordinates vendors into a single workstream, and gives executive leadership the clarity they need to make confident decisions.

We are not an MSP. We are not an audit shop. We are not a systems integrator. We are the layer of accountability that sits between leadership and the vendors doing the work.

### Section 2: Our Approach (slate-100 background)
- Label (mono, blue-600): OUR APPROACH
- H2: Structured for Outcomes. Designed to Exit.
- Three principle blocks, each with a bold lead phrase and description

**Enter with clarity.** Before work begins, the scope is defined, ownership is assigned, and success criteria are documented. No ambiguity about what "done" means.

**Lead with accountability.** Throughout the engagement, EDJ serves as the single point of accountability across vendors, internal teams, and executive stakeholders. We run the program. We own the coordination. We surface risk early.

**Exit with confidence.** EDJ is designed to be temporary. We build the documentation, processes, and organizational knowledge so the client can operate independently after we leave. The goal is a clean handoff, not a long-term dependency.

### Section 3: Pull Quote (navy-900 background)
- Large centered text, Cormorant Garamond, white
- Generous vertical padding
- No label needed

"We don't sell software. We don't compete with your vendors. We don't stay longer than the work requires. Our only incentive is your outcome."

### Section 4: Credentials (white background)
- Label (mono, blue-600): CREDENTIALS
- H2: Experience That Operates at Scale
- Grid of 6 authority markers (3x2 on desktop, 2x3 on tablet, 1-column on mobile)

**Block 1:** 12+ Years — Federal Technology Program Leadership
**Block 2:** $150M+ — Total Program Scope Across Engagements
**Block 3:** DHS · GSA · USAID · OPM — Agency Experience
**Block 4:** NIST 800-171 · ITAR · CUI · FISMA · CMMC — Frameworks
**Block 5:** PMP Certified — Project Management Professional
**Block 6:** Active Public Trust — Personnel Security Clearance

Styling: large number/value in blue-500 (Cormorant Garamond), description below in Outfit regular. Clean cards or minimal borders.

### CTA Section
- (shared component)

---

## PAGE 4: INDUSTRIES (industries.html)

### Page Header
- navy-800 background
- Label (mono, blue-400): WHO WE SERVE
- H1 (white): Built for Organizations That Feel the Risk but Lack the Layer
- Intro (text-on-dark): EDJ works with regulated and compliance-driven organizations that have real exposure but no internal technology leadership to manage it. These are firms that know something needs to change but don't have the in-house capacity to define what, sequence how, or hold vendors accountable for delivery. If your organization operates in a regulated environment and relies on external vendors for technology and compliance, EDJ was designed for you.

### Primary Vertical 1 (white background)
- Label (mono, blue-600): GOVERNMENT CONTRACTORS & DEFENSE-ADJACENT FIRMS
- H3: The compliance pressure is real. The internal capacity isn't.

Government contractors and defense-adjacent firms operate under some of the most demanding regulatory frameworks in the private sector. ITAR, NIST 800-171, CMMC, and CUI requirements are not optional. They are conditions of doing business. But most firms in this space have 20 to 200 employees, no full-time CIO or CISO, and a growing stack of vendor relationships with no one coordinating them.

EDJ provides the governance layer these firms are missing. We lead compliance programs from scoping through audit readiness, coordinate the vendors doing the technical work, and give leadership the clarity they need to make decisions without becoming technical experts. Whether the trigger is a prime contractor demanding compliance documentation, a new contract requiring CMMC Level 2, or an internal recognition that the current approach is not defensible, EDJ enters with a defined scope and exits when the organization can stand on its own.

### Primary Vertical 2 (slate-100 background)
- Label: LOBBYING, PUBLIC AFFAIRS & POLICY FIRMS
- H3: Sensitive work demands governed technology. Most firms in this space don't have it.

Lobbying and public affairs firms handle some of the most politically sensitive information in Washington. Client strategies, legislative positions, government relationships, and proprietary research all live inside systems that were never designed with governance in mind. These firms are typically lean, fast-moving, and built around relationships rather than infrastructure.

That combination creates risk. When a firm handling sensitive client data relies on an MSP for day-to-day IT and has no one overseeing security posture, data governance, or vendor accountability, the exposure is real even if no formal compliance framework applies. EDJ works with lobbying and policy firms to bring structure to their technology environment, establish governance practices proportional to their risk, and ensure that the systems supporting sensitive work are defensible under scrutiny.

### Primary Vertical 3 (white background)
- Label: PROFESSIONAL SERVICES FIRMS IN REGULATED ENVIRONMENTS
- H3: Your clients are regulated. That means you are too.

Consulting firms, engineering firms, and advisory shops that serve government or regulated clients often inherit compliance obligations they didn't anticipate. A firm that wins a subcontract involving CUI suddenly needs to demonstrate NIST 800-171 controls. A consulting practice supporting a defense program needs to prove its data handling meets ITAR requirements. The work itself may be strategic or analytical, but the technology environment must be governed.

Most professional services firms in this position don't need a full-time CIO. They need someone who can assess their current posture, build a realistic compliance plan, coordinate the vendors required to execute it, and report progress to leadership in language that drives decisions. That is what EDJ provides: temporary, senior program leadership scoped to the specific compliance or technology challenge at hand.

### Primary Vertical 4 (slate-100 background)
- Label: NONPROFITS & MISSION-DRIVEN ORGANIZATIONS
- H3: Federal funding comes with federal expectations.

Nonprofits and mission-driven organizations that receive federal grants, manage government-funded research, or operate in advocacy spaces with regulatory exposure face a unique challenge. They have compliance obligations that rival those of government contractors, but they rarely have the budget or organizational structure to support dedicated technology leadership.

The result is a familiar pattern: an MSP handles the infrastructure, a grant manager handles reporting, and nobody is ensuring that the technology environment supporting the mission actually meets the security and compliance requirements attached to the funding. EDJ works with nonprofits and research organizations to close that gap. We bring governance-first program leadership that respects budget constraints while ensuring that compliance is real, not just aspirational.

### Primary Vertical 5 (white background)
- Label: PE-BACKED & SCALING SERVICES FIRMS
- H3: Growth without governance creates exposure that compounds.

Private equity-backed firms and rapidly scaling services companies often grow faster than their technology infrastructure can support. What worked at 30 employees does not work at 120. The informal IT arrangements, the single vendor handling everything, the compliance posture that was "good enough" before the acquisition. All of it becomes a liability under the scrutiny that comes with institutional investment, new contracts, or audit preparation.

EDJ works with PE-backed and scaling firms at the inflection point where governance becomes non-optional. We assess the current state, build a prioritized remediation or modernization plan, coordinate the vendors needed to execute, and provide executive-level reporting to the leadership team or board. The engagement is designed to stabilize the technology and compliance environment so growth can continue on a governed foundation.

### Primary Vertical 6 (slate-100 background)
- Label: FOUNDER-LED FIRMS TRANSITIONING FROM INFORMAL IT
- H3: You've outgrown the way things work. You know it.

Every growing firm reaches a point where the technology decisions that made sense early on stop working. The founder's nephew who set up the network is no longer the right answer. The MSP that was hired five years ago has never been evaluated. There is no documentation, no security policy, and no clear picture of what the firm actually has or whether it is protected.

This is not a failure. It is a natural stage of growth. EDJ works with founder-led firms at exactly this moment. We assess what exists, define what needs to change, and lead the transition from informal IT to a structured, governed technology environment. We bring in the right vendors, establish accountability, and build a foundation the firm can manage independently going forward. No long-term contract. No unnecessary complexity. Just the structure your firm needs to operate at the level your clients expect.

### Secondary Verticals Section (navy-800 background)
- Label (mono, blue-400): ADJACENT ENVIRONMENTS WE REGULARLY SUPPORT
- H2 (white): EDJ also works with organizations in related sectors where compliance, governance, and technology coordination are critical.

**Think Tanks & Research Institutions**
Organizations producing policy research, managing grant-funded programs, or handling sensitive analytical work. These environments require data governance and security practices that align with the sensitivity of the work, even when no formal regulatory framework mandates it.

**Trade Associations & Membership Organizations**
Associations managing member data, political engagement records, and operational technology across distributed teams. The compliance exposure is often underestimated until a breach or audit surfaces it.

**Specialty Technology & Data Services Firms**
Firms providing data analytics, technology consulting, or managed services to government or regulated clients. These organizations must demonstrate that their own environments meet the same standards they help their clients achieve.

### CTA Section
- (shared component)

---

## PAGE 5: CONTACT (contact.html)

### Layout
- Full viewport height split layout
- Left: 45% width, navy-800 background
- Right: 55% width, white background
- Stacks vertically on mobile (left on top, right below)

### Left Side
- Label (mono, blue-400): CONTACT
- H1 (white): Start a Conversation
- Body (text-on-dark): We work with organizations that have recognized the gap between where they are and where they need to be. Whether you have a specific compliance deadline, a vendor coordination problem, or a general sense that your technology governance needs senior leadership, this is the right starting point.
- Spacer
- **Direct Contact** heading (small, white, Outfit semibold)
- Email: info@edjconsulting.com (placeholder, mailto link, blue-400)
- Phone: (202) 555-0100 (placeholder, tel link, blue-400)
- Small note (slate-300): Response time: typically within one business day.

### Right Side
- Form with clean styling
- Fields:
  - Full Name (text input, required)
  - Organization (text input, required)
  - Email (email input, required)
  - Phone (tel input, optional, label should say "Phone (optional)")
  - How can we help? (textarea, required, 5 rows, placeholder: "Tell us about your situation. A few sentences is enough.")
- Hidden honeypot field for spam: `<input type="text" name="_gotcha" style="display:none">`
- Submit button: full-width, orange background, white text, "Send Message"
- Form action: "#" (placeholder, will be replaced with Formspree endpoint)
- Form method: POST

### Success State (JS-driven)
- On form submit: hide form, show success panel
- Success message: "Thank you. We've received your message and will be in touch within one business day."
- Styled cleanly, centered in the right panel

### No CTA section on this page (the page IS the CTA)
### Minimal footer on this page

---

## PAGE 6: 404 (404.html)

- Full viewport, navy-900 background
- Centered content
- H1: Page Not Found
- Body: The page you're looking for doesn't exist or has been moved.
- Link: Return to homepage → index.html
- On-brand, minimal

---

## SEO

### Meta Tags Per Page

**Homepage:**
```html
<title>EDJ Consulting | Governance-First Technology Leadership for Regulated Organizations</title>
<meta name="description" content="EDJ Consulting provides fractional CIO and governance-first program leadership for government contractors and regulated organizations. NIST, ITAR, CUI, FISMA compliance without the full-time overhead.">
```

**Services:**
```html
<title>Services | Fractional CIO, Compliance Translation & Vendor Orchestration | EDJ Consulting</title>
<meta name="description" content="EDJ delivers governance-led program leadership, compliance translation for NIST/ITAR/CUI/CMMC, vendor orchestration, and executive communication for regulated organizations.">
```

**About:**
```html
<title>About EDJ Consulting | Governance-First Technology Advisory Firm</title>
<meta name="description" content="EDJ Consulting is a vendor-agnostic technology advisory firm that sits between leadership and vendors, providing accountability, coordination, and compliance leadership for regulated organizations.">
```

**Industries:**
```html
<title>Industries We Serve | Government Contractors, Defense & Regulated Organizations | EDJ Consulting</title>
<meta name="description" content="EDJ Consulting serves government contractors, lobbying firms, policy organizations, defense consultancies, and professional services firms handling sensitive government data.">
```

**Contact:**
```html
<title>Contact EDJ Consulting | Start a Conversation About Your Compliance Needs</title>
<meta name="description" content="Contact EDJ Consulting to discuss governance-first technology leadership, compliance program management, or vendor orchestration for your regulated organization.">
```

### Open Graph Tags (all pages)
```html
<meta property="og:title" content="[SAME AS TITLE TAG]">
<meta property="og:description" content="[SAME AS META DESCRIPTION]">
<meta property="og:image" content="/img/og-image.jpg">
<meta property="og:type" content="website">
<meta property="og:url" content="https://edjconsulting.com/[page]">
<meta name="twitter:card" content="summary_large_image">
```

### Structured Data (JSON-LD)

**Homepage — Organization:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EDJ Consulting",
  "description": "Governance-first technology advisory and program leadership firm for regulated organizations",
  "url": "https://edjconsulting.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "info@edjconsulting.com",
    "telephone": "(202) 555-0100"
  },
  "areaServed": "US",
  "serviceType": ["Fractional CIO", "Technology Governance Consulting", "Compliance Program Management", "Vendor Orchestration", "NIST Compliance Consulting", "ITAR Compliance Consulting"]
}
```

**About — ProfessionalService:**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "EDJ Consulting",
  "description": "Governance-first technology advisory and program leadership for regulated organizations",
  "priceRange": "$$$$",
  "areaServed": { "@type": "Country", "name": "United States" },
  "knowsAbout": ["NIST 800-171", "ITAR Compliance", "CUI Protection", "FISMA", "CMMC", "Federal Technology Modernization"]
}
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://edjconsulting.com/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://edjconsulting.com/services.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://edjconsulting.com/about.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://edjconsulting.com/industries.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://edjconsulting.com/contact.html</loc><changefreq>yearly</changefreq><priority>0.9</priority></url>
</urlset>
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://edjconsulting.com/sitemap.xml
```

---

## ANIMATION GUIDELINES

- Page load hero: staggered fade-up (label → h1 → subhead → CTAs), 0.2s delay between each, 0.5s duration
- Scroll reveals: sections fade-up on viewport entry via IntersectionObserver, 0.5s duration, 20px translate
- Nav: background transition from transparent to navy-900 on scroll, 0.4s
- Buttons: background-color 0.2s, translateY(-1px) on hover
- Cards: translateY(-4px) + shadow increase on hover, 0.3s
- Blue accent lines: width from 0 to 60px on scroll enter
- NO: parallax, particle effects, bouncing, spinning, or anything that feels like a product landing page

---

## RESPONSIVE BREAKPOINTS

- Desktop: 1200px+
- Tablet: 768px to 1199px
- Mobile: below 768px

Key changes:
- Grid-4 → Grid-2 (tablet) → Grid-1 (mobile)
- Grid-3 → Grid-2 (tablet) → Grid-1 (mobile)
- Grid-2 → Grid-1 (mobile)
- Nav → hamburger at 768px
- Section padding: 6rem → 4rem (tablet) → 3rem (mobile)
- Hero: full viewport on all sizes, text scales via clamp()
- Contact split → stacked on mobile
- Stats bar → 2x2 (tablet) → stacked (mobile)

---

## ACCESSIBILITY

- WCAG AA contrast ratios met (navy/white, blue on navy, orange on white all pass)
- All form inputs have associated `<label>` elements
- Semantic HTML: nav, main, section, article, footer
- Skip-to-content link
- Visible focus states on all interactive elements
- Alt text on images when added
- Form error states with aria-describedby

---

## PLACEHOLDERS TO REPLACE LATER

| Item | Current Placeholder | Replace With |
|---|---|---|
| Logo | Styled text "EDJ" | SVG file from client |
| Email | info@edjconsulting.com | Real business email |
| Phone | (202) 555-0100 | Real business phone |
| Form action | "#" | Formspree endpoint URL |
| Domain in canonical/sitemap | edjconsulting.com | Final domain |
| OG image | /img/og-image.jpg | Generated OG image |
| Favicon | none | Generated from logo |

---

## QUALITY CHECKLIST

Before delivering:
- [ ] All pages validate (W3C)
- [ ] Zero console errors
- [ ] Lighthouse 90+ on all four metrics
- [ ] All internal links work
- [ ] Responsive at 320px, 768px, 1024px, 1440px
- [ ] Mobile nav works
- [ ] Contact form shows success state on submit
- [ ] No em-dashes in any copy
- [ ] All meta tags unique per page
- [ ] Structured data validates (Google Rich Results Test)
