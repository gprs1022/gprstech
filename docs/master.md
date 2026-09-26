# MASTER BUILD PROMPT — GPRS TECH PROFESSIONAL WEBSITE

Act as a senior product designer, UX strategist, brand designer, copywriter, React and TypeScript engineer, accessibility specialist, and technical SEO specialist.

Build a complete, responsive, production-ready website for **GPRS Tech**. Implement it in ordered phases, but finish every phase and every required page. At the end of each phase, run the app, inspect desktop and mobile output, fix errors, and briefly report what was completed before continuing.

This is a website for a real emerging business. Every visible claim, client attribution, project result, contact route, and form behavior must be accurate.

---

## A. BUSINESS AND BRAND

**Name:** GPRS Tech  
**Positioning:** Technology & Creative Studio  
**Founder:** Pradeep Singh, also known as gprspradeep  
**Brand line:** Technology × Creativity × Growth  
**Supporting line:** From Idea to Impact

GPRS Tech helps businesses and creators develop digital products and communicate their value through design, animation, video, and content.

The core story is:

**Idea → Product → Story → Growth**

The website must establish two connected divisions:

### Technology Studio

- Mobile apps
- Websites and web applications
- Custom software and business tools
- UI/UX and product design
- API integrations
- Practical AI integrations and automation
- Maintenance and improvements

### Creative Studio

- 2D and 3D animation
- Motion graphics
- Explainer videos
- Product demos
- YouTube video editing
- Shorts, Reels, and ad editing
- Branding and graphic design
- Thumbnails and social creatives
- Digital content production

The website should communicate these services clearly without implying that GPRS Tech already has a large permanent team or a proven track record in every listed discipline.

### Verified public links supplied by the owner

- LinkedIn: https://www.linkedin.com/company/gprstech
- X: https://x.com/gprstech
- YouTube: https://www.youtube.com/channel/UC5hKj1j7CC6n9o6O9BVeGZw
- Founder portfolio: https://gprspradeep.netlify.app
- creative studio refrence : https://www.youtube.com/@ToonAcharya

Store social links in one configuration file. Do not invent Instagram, WhatsApp, a business email, phone number, address, or domain.

---

## B. REFERENCE AUDIT TO APPLY

Review these sites as references for **information architecture and content patterns**, not for copying their design:

- https://www.technorizen.com/ — understandable services and visible recent work
- https://webkul.com/ — service depth, customer-story placement, FAQs, and enquiry paths
- https://www.fluper.com/ — service and case-study structure
- https://www.netguru.com/ — strong project storytelling and capability-to-work connections

Create an original GPRS Tech interface, copy, component system, and visual language. Do not borrow their logos, layouts, images, testimonials, metrics, or text.

For GPRS Tech, the essential journey is:

**Understand the offer → Choose Technology or Creative → See relevant portfolio → Understand the process → Send an enquiry**

---

## C. AUDIENCES AND WEBSITE GOALS

### Primary visitors

1. A founder who needs an app MVP.
2. A business that needs a website or custom software.
3. A company that needs UI/UX or an existing app improved.
4. A brand that needs animation, video editing, or product content.
5. A visitor assessing the founder’s actual work and credibility.

### Primary conversion

A qualified project enquiry through a functional contact route.

### Secondary conversions

- View a relevant portfolio category
- Read a case study
- Watch approved animation or video work
- Visit verified social profiles
- Contact the founder through a verified channel

Every important page must answer:

- What can GPRS Tech do for me?
- What deliverables will I receive?
- What relevant work can I inspect?
- How would the project proceed?
- How do I start?

---

## D. VISUAL DESIGN SYSTEM

Use the supplied **circular GPRS Tech logo** as the authoritative logo. Preserve its abstract blue, cyan, and green shape. Do not substitute the older “GP” symbol.

### Palette

- Deep navy: primary background
- Slightly lighter navy: cards and section surfaces
- Electric blue: technology emphasis
- Cyan: links and supporting highlights
- Vivid green: creative emphasis and select calls to action
- Warm white: main text
- Cool gray: secondary text

Create accessible design tokens rather than scattering color values throughout components.

### Design character

Professional, modern, clear, and distinctive. Show the intersection of software products and visual storytelling. Use large readable typography, restrained gradients, strong spacing, subtle borders, and high-quality project imagery.

Avoid:
- Generic handshake or meeting-room stock photography
- A homepage dominated by an enormous service list
- Overuse of glassmorphism and neon
- Autoplaying audio
- Distracting scroll effects
- Fake app screenshots presented as completed projects
- Unverified badges, statistics, client logos, or reviews

### Motion

Use small, purposeful interactions: navigation, card hover, section entry, and gallery transitions. Respect `prefers-reduced-motion`. Make content understandable when motion is disabled.

### Responsive targets

Test at approximately 360, 390, 430, 768, 1024, 1280, and 1440 pixels. Avoid horizontal overflow. Pay particular attention to the header, hero, portfolio filters, project media, and forms.

---

## E. TECHNICAL FOUNDATION

First inspect the existing repository. Preserve its framework and conventions if sensible. If starting fresh, use React + TypeScript with Vite and React Router.

Build a maintainable structure such as:

- `src/app` — app setup, router, providers
- `src/components` — shared UI
- `src/layouts` — site layout and page structure
- `src/pages` — route-level pages
- `src/content` — typed services, projects, FAQs, and social links
- `src/styles` — global styles and design tokens
- `src/assets` — supplied brand and approved project media

Keep project and service content data separate from rendering components. A new portfolio project should be addable by editing content data and placing assets, without rewriting page layouts.

Implement:
- Functional routing
- SEO metadata per route
- Accessible header and mobile menu
- Reusable CTA and form components
- Custom 404 page
- Loading and error states where needed
- Image optimization and lazy loading
- Sensible code splitting
- Production build with no runtime errors

If dependencies, framework, or styling tools already exist, use them instead of rebuilding the project unnecessarily.

---

# PHASE 0 — ASSET AND CLAIM AUDIT

Before creating the UI:

1. Inspect the project structure and existing code.
2. Identify the correct circular GPRS Tech logo.
3. Identify approved app screenshots, website images, animation clips, and videos.
4. Review public project links and the supplied YouTube channel.
5. Record whether each potential portfolio item is a GPRS Tech engagement, founder project, employer project, internal project, or concept.
6. Record which contact methods actually exist.

Create `content-status.md` with:
- Publishable facts and media
- Details needing owner confirmation
- Assets requiring permission
- Missing business contact information
- Excluded or draft-only projects

Do not silently turn uncertain details into public claims.

---

# PHASE 1 — ROUTES, NAVIGATION, AND DESIGN SYSTEM

Build the global shell and all routes.

### Main navigation

**Home | Services | Portfolio | About | Insights | Contact**

Services submenu:
- Technology Studio
- Creative Studio

Portfolio submenu:
- App Portfolio
- Website Portfolio
- Animation Portfolio

### Required routes

- `/`
- `/services`
- `/services/technology`
- `/services/creative`
- `/portfolio`
- `/portfolio/apps`
- `/portfolio/websites`
- `/portfolio/animation`
- `/portfolio/:slug`
- `/about`
- `/insights`
- `/insights/:slug`
- `/contact`
- `/privacy`
- `*` for 404

Build the header, responsive menu, footer, breadcrumbs where useful, buttons, section headings, card patterns, media frames, tags, filters, form fields, and CTAs.

### Phase acceptance

All routes render. All navigation works by mouse, touch, and keyboard. The mobile menu has visible open/closed states and accessible behavior.

---

# PHASE 2 — HOME PAGE

## Objective

A visitor should understand the business within five seconds and know which path to take.

### Section 1: Hero

Eyebrow: **Technology & Creative Studio**

Headline:
**“We Build Digital Products & Create Content That Moves Brands.”**

Supporting text:
**“From mobile apps and websites to animation, video, and digital experiences, GPRS Tech brings technology and creativity together.”**

Buttons:
- **Start a Project** → `/contact`
- **Explore Portfolio** → `/portfolio`

Use an original visual composition involving product interfaces and creative motion. Keep the heading, description, and CTA as selectable HTML text.

### Section 2: Two clear paths

Large side-by-side or stacked feature panels:

**Technology Studio**  
“Design and build apps, websites, and software shaped around real business needs.”  
CTA → `/services/technology`

**Creative Studio**  
“Explain ideas and connect with audiences through animation, video, and design.”  
CTA → `/services/creative`

### Section 3: Selected portfolio

Show one strong project from each category when approved work exists:
- App
- Website
- Animation

If a category has no publishable example, show fewer projects. Do not fill gaps with fictional client work.

CTA: **View All Projects** → `/portfolio`

### Section 4: Capabilities at a glance

Show a compact set of high-level capabilities, grouped by studio. Link to relevant service sections.

### Section 5: Process

Use a process that works for software and creative engagements:

1. Discover the goal
2. Define the scope
3. Design the solution
4. Build or produce
5. Review and refine
6. Launch and improve

Write one practical sentence for each.

### Section 6: Founder credibility

Introduce Pradeep Singh and link to `/about` and the verified founder portfolio. Present his background accurately as a developer and creator. Avoid representing personal employment projects as GPRS Tech client work.

### Section 7: Content and insight

Show approved articles or YouTube videos. Use a clean media layout with descriptive titles.

### Section 8: Final CTA

Headline: **“Have an idea worth building or a story worth telling?”**  
CTA: **Tell Us About Your Project** → `/contact`

---

# PHASE 3 — SERVICES OVERVIEW

Route: `/services`

## Objective

Let a visitor identify the right service path quickly.

### Sections

1. Intro and decision prompt: “What are you looking to create?”
2. Technology Studio overview
3. Creative Studio overview
4. Combined-engagement examples
5. How engagements work
6. Relevant portfolio examples
7. Short FAQ
8. Contact CTA

### Combined-engagement examples

- Brand identity + website
- Mobile app + product demo video
- Website + explainer animation
- Product launch + social content

Present these as possible combinations, not past client engagements.

---

# PHASE 4 — TECHNOLOGY STUDIO PAGE

Route: `/services/technology`

## Objective

Explain technical capabilities in terms of customer problems and deliverables.

### Hero

Headline: **“Digital Products Built Around Your Goals.”**  
Explain that the studio can work from discovery and design through development and iteration.

### Service sections

1. **Mobile App Development**
   - Flutter and cross-platform development
   - Android app work
   - Authentication, API integrations, local storage, and offline flows
   - Store publishing support where relevant

2. **Websites and Web Applications**
   - Business websites
   - Landing pages
   - Dashboards and web applications
   - E-commerce experiences where scoped

3. **Custom Software**
   - Internal tools
   - Admin interfaces
   - Business workflows
   - Backend and database integrations

4. **UI/UX and Product Design**
   - User flows
   - Wireframes
   - Prototypes
   - Interface design and design systems

5. **Practical AI and Automation**
   - AI integration into appropriate workflows
   - Chat or API integrations
   - Process automation

6. **Maintenance and Improvement**
   - Fixes
   - Feature extensions
   - Performance work
   - Ongoing support when agreed

For each section, include:
- Who it is for
- Typical problem
- Deliverables
- Relevant project link, if available
- Service-specific enquiry CTA

### Additional sections

- Technology approach
- Relevant App Portfolio and Website Portfolio cards
- Selected technologies, only when backed by actual work
- Process
- FAQ
- Final CTA

Potential founder technologies include Flutter, Dart, Android/Kotlin, Firebase, REST APIs, SQLite, Node.js, MongoDB, and Git. Show only relevant items; do not build an indiscriminate tech-logo wall.

---

# PHASE 5 — CREATIVE STUDIO PAGE

Route: `/services/creative`

## Objective

Demonstrate creative services through actual media and clear deliverables.

### Hero

Headline: **“Make Your Product and Story Impossible to Ignore.”**

Include a showreel or video feature only if approved footage exists. Otherwise use original visual design and leave a clear media slot for later.

### Service sections

1. 2D animation
2. 3D animation
3. Motion graphics
4. Explainer and product videos
5. YouTube editing
6. Shorts, Reels, and ad editing
7. Branding and graphic design
8. Thumbnails and social content

For each service, include:
- Use case
- Possible deliverables
- What the client provides
- Relevant portfolio work
- CTA

### Production process

Brief → Concept/script → Style frames → Production → Feedback → Final delivery

Use video thumbnails before playback. Do not autoplay sound. Ensure embeds work on mobile and videos have accessible titles and captions when available.

Link prominently to `/portfolio/animation`.

---

# PHASE 6 — PORTFOLIO HUB

Route: `/portfolio`

## Objective

Let visitors see genuine work and immediately choose the type of project relevant to them.

### Hero

Headline: **“Work That Turns Ideas Into Experiences.”**

Intro:
“Explore selected apps, websites, and animation projects, including the work and contributions of GPRS Tech founder Pradeep Singh.”

Adjust wording if the final portfolio contains only founder work or only studio work.

### Three primary category panels

1. **App Portfolio** → `/portfolio/apps`
2. **Website Portfolio** → `/portfolio/websites`
3. **Animation Portfolio** → `/portfolio/animation`

Do not bury these categories inside a filter alone. They should each have their own landing page.

### Below the panels

- Selected projects
- Brief explanation of how work is attributed
- CTA to discuss a similar project

---

# PHASE 7 — APP PORTFOLIO

Route: `/portfolio/apps`

## Objective

Show mobile and app product experience with real interface visuals and clear roles.

### Page structure

- Category hero
- Featured app project
- Project grid
- Optional filtering: Flutter, Android, product UI/UX, concepts
- Short process section
- App enquiry CTA

### Candidate projects to investigate

- THE SPRS
- Mobimist
- Career Charm
- Coffee Buz
- SEGV Tours
- BIPF attendance/location work

These are candidates only. Verify each project’s ownership, Pradeep’s contribution, publication status, assets, and permission before placing it on the live site.

Cards should show:
- App name
- Purpose
- Platform
- Founder/studio contribution
- Project type label
- Screenshot
- Link to project story

If a candidate is an internal or employer project without permission to publish visuals, omit it or describe only the approved contribution.

---

# PHASE 8 — WEBSITE PORTFOLIO

Route: `/portfolio/websites`

## Objective

Show websites, web apps, dashboards, and digital interfaces with a strong visual presentation.

### Page structure

- Category hero
- Featured website or web app
- Responsive project gallery
- Desktop and mobile screenshots
- Scope and role for each project
- Website enquiry CTA

For every project, specify whether GPRS Tech or Pradeep handled:
- Strategy
- Design
- Frontend
- Backend
- Integrations
- Deployment

Only list tasks actually completed. Do not infer a completed client website from a concept image or design exercise.

If there is currently no approved website project, build a polished, honest category page with service information and a project enquiry CTA. Leave the project collection empty until real work is available.

---

# PHASE 9 — ANIMATION PORTFOLIO

Route: `/portfolio/animation`

## Objective

Make creative production easy to watch and assess.

### Page structure

- Category hero
- Featured showreel or strongest approved work
- Video grid with real thumbnails
- Optional filters: 2D, 3D, motion graphics, explainers, short-form editing
- Short description of production approach
- Animation enquiry CTA

Use approved work from the supplied YouTube channel where appropriate. Verify the creator, contribution, rights, and intended use before describing a video as GPRS Tech client work.

Each item should include:
- Title
- Format
- Duration
- Purpose
- Exact production contribution
- Embedded video or verified external link
- Tools used only when known

Do not autoplay multiple videos. Lazy-load embeds.

---

# PHASE 10 — PROJECT DETAIL TEMPLATE

Route: `/portfolio/:slug`

Make one reusable case-study layout that handles apps, websites, and animation while allowing category-specific media.

### Sections

1. Project title and category
2. Accurate ownership/contribution label
3. Hero screenshot or video
4. Project overview
5. Problem or creative brief
6. Goals and scope
7. Exact role of Pradeep or GPRS Tech
8. Process and major decisions
9. Features or deliverables
10. Media gallery with captions
11. Technology or production tools
12. Challenges and solutions
13. Outcome, only if verified
14. Public links, if available
15. Related projects
16. Relevant project enquiry CTA

### Attribution labels

Use clear labels such as:
- GPRS Tech client project
- Founder project
- Work completed while employed
- Internal project
- Concept or experiment

Never imply GPRS Tech was contracted by a client when work was performed in another capacity.

Use typed project data with a `publishable` flag. Draft projects must never appear in public lists or routes.

---

# PHASE 11 — ABOUT PAGE

Route: `/about`

## Objective

Build confidence in the people, principles, and capabilities behind the business.

### Sections

1. GPRS Tech introduction
2. Founder profile: Pradeep Singh
3. Relevant development and creative experience
4. Why technology and storytelling belong together
5. Working approach
6. Link to selected portfolio projects
7. Contact CTA

A brief founder story about the meaning of GPRS may be included after confirming the preferred wording: Gandraj, Pradeep, Ramniwas, Singh.

Do not fabricate employees, offices, founding dates, awards, or international operations. Present the company accurately as founder-led.

---

# PHASE 12 — INSIGHTS

Routes: `/insights` and `/insights/:slug`

## Objective

Build an ongoing knowledge and content channel.

Support:
- App development articles
- Website/product design articles
- Animation production notes
- Project breakdowns
- Selected YouTube videos

Article pages should have:
- Title
- Author
- Date
- Reading time if calculated
- Proper headings
- Descriptive images
- Related projects or services
- Relevant CTA

Launch only with approved original content. If none exists, use a restrained page featuring verified videos and a clear future content structure. Do not auto-generate dozens of generic SEO posts.

---

# PHASE 13 — CONTACT AND ENQUIRY FLOW

Route: `/contact`

## Objective

Help visitors provide enough information for a useful first conversation.

### Contact form

Fields:
- Name — required
- Email — required
- Company or brand — optional
- Service — App / Website / Animation / Multiple / Unsure
- Project description — required
- Approximate budget — optional
- Timeline — optional
- Preferred contact channel — optional

Implement:
- Accessible labels
- Useful validation
- Pending state
- Success state
- Failure state
- Spam protection
- Actual submission delivery when credentials are supplied
- Server-side validation when an API exists

Do not show “Message sent” unless a real submission succeeded. If delivery is not configured, document the remaining setup clearly and offer a verified contact link as a fallback.

### Supporting content

- “What happens after you enquire?”
- Relevant portfolio category links
- Verified social profiles
- Business email or WhatsApp only once provided and confirmed

---

# PHASE 14 — PRIVACY, SEO, ACCESSIBILITY, AND PERFORMANCE

### Privacy

Create `/privacy` based on the data the site actually collects and the services actually used. Mark business details for owner review. Do not assert nonexistent analytics or security practices.

### SEO

Implement:
- Unique titles and meta descriptions
- Open Graph and X metadata
- Sitemap
- Robots directives
- Canonicals after domain confirmation
- Semantic headings
- Descriptive URLs
- Image alternative text
- Structured data containing only verified organization facts

### Accessibility

Check:
- Keyboard access
- Visible focus
- Contrast
- Heading hierarchy
- Form error announcements
- Reduced motion
- Menu behavior
- Video controls and captions where available

### Performance

Optimize images, lazy-load media, prevent layout shifts, limit unnecessary animation libraries, and test mobile loading.

---

# PHASE 15 — FINAL REVIEW AND HANDOFF

Run the production build and inspect every page.

Check:
1. All routes
2. Header and mobile menu
3. Every CTA
4. Portfolio category pages
5. Published project detail pages
6. Draft project exclusion
7. Video playback
8. Contact form behavior
9. External social links
10. Mobile, tablet, and desktop layouts
11. Keyboard and basic screen-reader behavior
12. SEO metadata
13. Console and build errors

Provide:
- Working React code
- README with installation, run, build, and content-update instructions
- `content-status.md`
- A list of remaining owner-supplied facts and assets
- A brief final QA report

Do not finish after a visual mockup. Complete the working site and its pages. If an external integration cannot be completed without credentials, complete everything possible around it and document the exact configuration needed.

## Final standard

The site should feel professional because it is clear, visually polished, functional, and grounded in real work. A visitor looking for an app, a website, or animation should reach a relevant service page, inspect a matching portfolio category, and know how to start a project.