# GPRS TECH — WEBSITE EXPANSION AND CONTENT IMPLEMENTATION PROMPT

Act as a senior product designer, UX architect, copywriter, React and TypeScript engineer, and accessibility specialist.

Extend the existing GPRS Tech website with complete About, Careers, Services, Technologies, Blogs, Documentation, and contact experiences. Incorporate the animation and creative project assets I have added.

This prompt extends the previous GPRS Tech master build brief. Preserve its branding, truthful attribution rules, portfolio structure, accessibility requirements, and responsive design. Where navigation or routes change, follow this prompt and preserve existing URLs through appropriate redirects.

Inspect the current implementation first. Reuse working components and conventions. Implement the changes fully; do not stop at a proposal or visual mockup.

## 1. Reference and design direction

Review:

https://webkul.com/about-us/our-team/

Apply these structural ideas:

- Separate Company, Team, and Life pages.
- Identify real people and their actual roles.
- Separate services from technologies.
- Organize editorial content into clear types.
- Make Careers discoverable.
- Keep project enquiry actions accessible across the site.

Create an original GPRS Tech design. Do not copy Webkul’s layouts, text, employee profiles, photographs, statistics, or enterprise-scale navigation.

Maintain:

- The authoritative circular GPRS Tech logo
- Deep navy surfaces
- Blue and cyan technology accents
- Green creative accents
- Readable typography
- Restrained motion
- Clear mobile navigation

## 2. Updated navigation

Use this desktop navigation:

**Home | Services | Technologies | Portfolio | About |Blogs | Careers | contact **

Include a prominent **Contact / Start a Project** action linking to `/contact`.

### About submenu

- Company
- Team
- Life at GPRS Tech

### Services submenu

- All Services
- Technology Studio
- Creative Studio

Show a concise selection of service links where useful. Keep the complete catalogue on the Services page.

### Technologies submenu

- All Technologies
- Mobile Development
- Web and Backend
- Databases and Cloud
- AI and Automation
- Creative and Production Tools

Category links may point to sections on the Technologies page. Hide categories without verified entries.

### Portfolio submenu

- All Projects
- App Portfolio
- Website Portfolio
- Animation & Creative Portfolio

### Blogs submenu

- Latest Posts
- Articles
- Documentation
- Tutorials & Guides
- Project Breakdowns

### Mobile behavior

Use accessible expandable navigation groups.

- Parent overview pages must remain reachable.
- Use separate link and expand controls where necessary.
- Support keyboard navigation and visible focus.
- Close the menu after navigation.
- Return focus correctly when closing an overlay.
- Prevent horizontal overflow.
- Avoid hover-only access.

Keep Careers and Contact visible in the footer as well.

## 3. Route structure

Add or complete:

```text
/about/company
/about/team
/about/life
/careers
/careers/:slug

/services
/services/technology
/services/creative
/services/:slug

/technologies

/blog
/blog/articles
/blog/tutorials
/blog/project-breakdowns
/blog/:slug

/docs
/docs/:slug

/contact
```

Retain all existing portfolio routes, including:

```text
/portfolio
/portfolio/apps
/portfolio/websites
/portfolio/animation
/portfolio/:slug
```

Route rules:

- Redirect `/about` to `/about/company` if it is being replaced.
- Map `/insights` to `/blog` if consolidating the previous Insights section.
- Redirect existing article URLs individually to their correct new destinations.
- Preserve URL fragments where practical.
- Do not redirect unknown article or project slugs to unrelated content.
- Unknown, draft, and unpublished detail pages must show the not-found experience.
- Generate service and career detail pages only from publishable entries.

## 4. Company page

Route: `/about/company`

Suggested headline:

**Technology and Creativity, Built Around Your Goals.**

Include:

1. What GPRS Tech does
2. Technology Studio and Creative Studio
3. Founder introduction
4. Idea → Product → Story → Growth
5. Working principles
6. Delivery approach
7. Relevant portfolio links
8. Project enquiry CTA

Describe GPRS Tech accurately as founder-led.

Explain how product development and creative production can work together, such as:

- An app with a product demonstration
- A website with explainer content
- Brand identity with a digital launch
- A product experience supported by social creatives

Present these as possible engagements unless actual examples are approved.

Do not invent company history, headcount, offices, awards, clients, or founding dates.

## 5. Team page

Route: `/about/team`

Suggested headline:

**The People Behind GPRS Tech.**

Build a reusable profile layout with:

- Approved photograph, when available [src/assets/profiles/Pradeep.jpg]
- Name
- Actual role
- Short biography
- Relevant capabilities
- Approved professional links
- Relevant project contributions

Start with:

**Pradeep Singh — Founder, Developer & Creator**

Use only supported biography details.

If Pradeep is the only confirmed team member, create a polished founder-focused page. Do not fill a grid with fictional employees, stock portraits, or generated people.

Add collaborators only when their participation and publication permission are confirmed. Clearly distinguish employees, independent collaborators, and project contributors.

Do not create department filters for a one-person team.

Include links to Company, Life at GPRS Tech, Careers, and relevant work.

## 6. Life at GPRS Tech

Route: `/about/life`

Suggested headline:

**Inside the Work: Building, Learning, and Creating.**

Present authentic studio activity through available material:

- Development experiments
- Animation work in progress
- Design exploration
- Learning notes
- Behind-the-scenes production
- Real collaboration
- Actual events or milestones

Use owner-supplied images and video where available.

Each entry may include:

- Title
- Short explanation
- Actual date, if known
- Media
- Caption
- Related project or article

If there is little approved material, focus on current working practices and creative process. Do not fabricate office culture, outings, benefits, celebrations, or team events.

Avoid implying that a small founder-led operation has a large office or permanent production team.

End with links to Careers and Contact.

## 7. Careers

Route: `/careers`

Create a complete Careers page even if no vacancies are currently approved.

Include:

- Introduction to working with GPRS Tech
- Confirmed working principles
- Current openings
- Application process, when established
- Relevant contact action

### When openings exist

Each job card should include confirmed:

- Title
- Engagement type
- Location or remote arrangement
- Short description
- Application destination

Detail pages at `/careers/:slug` should include:

- Responsibilities
- Required skills
- Optional skills
- Engagement type
- Location
- Compensation only when supplied
- Application instructions
- Actual publication or closing dates, if applicable

Do not invent salaries, benefits, hiring timelines, internships, or remote-work promises.

### When no openings are approved

Use:

**There are no published openings at the moment.**

Offer an expression-of-interest route only if the owner confirms that applications or collaboration enquiries are being accepted.

Do not imply that submitting an enquiry guarantees consideration or a reply.

Do not add résumé uploads unless secure file handling, delivery, and retention are configured. A portfolio link and brief introduction may be sufficient.

Only output JobPosting structured data for genuine active vacancies.

## 8. Complete Services catalogue

Route: `/services`

Show all services grouped into the two studios.

### Technology Studio

- Mobile app development
- Websites and web applications
- Custom software and internal tools
- UI/UX and product design
- API integrations
- Practical AI integrations
- Workflow automation
- Maintenance and improvements

### Creative Studio

- 2D animation
- 3D animation
- Motion graphics
- Explainer videos
- Product demonstration videos
- YouTube editing
- Shorts, Reels, and advertising edits
- Branding and graphic design
- Thumbnails and social creatives  use from here [/src/assets//thumbnails/]
- Digital content production

Each entry should explain:

- Who it helps
- The problem it addresses
- Possible deliverables
- Materials or decisions needed from the client
- Relevant approved work
- A contextual enquiry action

Build detailed service pages where there is enough distinct, accurate content. Avoid dozens of repetitive pages created only for SEO.

Service CTAs should preselect the appropriate contact category.

## 9. Technologies and tools

Route: `/technologies`

Suggested headline:

**The Technologies and Tools Behind the Work.**

Create a useful catalogue of the technologies GPRS Tech and its founder actually work with.

“All technologies” means the complete verified stack, not every popular tool.

### Suggested categories

- Mobile development
- Frontend and web
- Backend and APIs
- Databases and storage
- Cloud and deployment
- AI and automation
- Design and prototyping
- Animation and video production
- Version control and collaboration

Potential technologies from the earlier brief include Flutter, Dart, Android/Kotlin, Firebase, REST APIs, SQLite, Node.js, MongoDB, and Git. Verify before publishing.

Do not automatically add React, Blender, After Effects, Premiere Pro, Figma, AWS, or other tools merely because they are common or used to build this website.

### Technology entry content

- Name
- Category
- Short explanation
- What it is used for
- Related service
- Related approved project, where available

Use official marks only where their usage is permitted. Every logo needs a visible text label.

Avoid skill percentages, star ratings, “expert” badges, or unsupported certification claims.

Distinguish established project experience from experiments if experiments are included.

Use filters only when the collection benefits from them. Do not show empty categories.

## 10. Blogs, articles, and documentation

Create a complete publishing structure with distinct editorial and reference experiences.

### Blog hub

Route: `/blog`

Include:

- Introduction
- Featured approved content
- Latest posts
- Content-type navigation
- Useful categories or tags
- Search when enough content exists
- Pagination or a usable load-more pattern when needed

Support:

- Articles
- Tutorials and guides
- Project breakdowns
- Production notes
- Approved video features

Do not display nonfunctional search, filters, or pagination.

### Article template

Route: `/blog/:slug`

Include:

- Title
- Summary
- Actual author
- Publication date
- Meaningful update date, when applicable
- Calculated reading time
- Category and tags
- Approved cover media
- Logical headings
- Table of contents for long posts
- Accessible code blocks where needed
- Related services or projects
- Related articles
- Relevant CTA

Do not invent authorship or backdate content.

Draft generated articles may be prepared for review, but must not be publicly attributed to Pradeep without approval.

### Documentation hub

Route: `/docs`

Keep documentation accessible from the Blogs submenu while giving it a dedicated layout.

Organize genuine documentation by subject, product, project, or workflow.

### Documentation detail

Route: `/docs/:slug`

Support:

- Sidebar navigation
- Breadcrumbs
- Title and overview
- Prerequisites
- Step-by-step instructions
- Relevant code or configuration examples
- Troubleshooting
- Applicable version, when known
- Last reviewed date, when actually reviewed
- Previous and next links
- Related guides

Only publish documentation that describes a real tool, workflow, or approved project. Do not imply GPRS Tech sells products that do not exist.

### Empty content behavior

Keep hub pages polished when collections are empty. Do not publish generic filler, fake article cards, fabricated dates, or broken “Read more” links.

If the old Insights area contains approved content, migrate it and preserve its URLs through redirects.

## 11. Use the added animation and creative assets

Inspect the project assets, uploaded attachments, and existing media configuration before creating new visuals.

Identify the animation and creative materials I added.

Create an inventory recording:

- Actual filename or asset identifier
- Media type
- Dimensions
- Duration for playable media
- Likely project grouping
- Known title
- Known contribution
- Missing contextual information

Use these assets in:

- Creative Studio
- Animation & Creative Portfolio
- Relevant project details
- Selected homepage work
- Life at GPRS Tech, where the material actually shows process

### Presentation rules

- Group related images and clips into coherent projects.
- Preserve aspect ratios.
- Use real thumbnails or suitable frames.
- Label still images as stills, style frames, posters, or creatives as appropriate.
- Do not place a play button on a non-playable image.
- Do not infer 2D/3D technique, software, client, or commercial result from appearance alone.
- Do not treat every uploaded file as a separate engagement.
- Keep source files intact and create optimized derivatives.
- Avoid autoplaying sound.
- Provide keyboard-accessible galleries.
- Load video players on demand.
- Add captions or transcripts where appropriate and available.

My instruction authorizes use of the supplied creatives in the website. It does not establish an unknown client identity, production role, or project outcome.

If assets cannot be located, report the exact missing files or access needed. Continue independent work without replacing them with fictional portfolio projects.

## 12. Contact through email and WhatsApp

Route: `/contact`

Add clear ways to enquire through email and WhatsApp using owner-confirmed destinations.

Store contact configuration centrally:

```ts
interface ContactConfig {
  businessEmail?: string;
  whatsappNumberInternational?: string;
  enquiryEndpoint?: string;
}
```

Do not invent an email address or telephone number. If the existing project contains one, establish that it is current and intended for public business use.

### Email option

Support either or both:

**Send enquiry**

- Use a configured server-side delivery service.
- Validate on the server.
- Protect credentials.
- Handle spam, pending, success, and failure.
- Show success only after actual submission acceptance.
- Verify receipt before claiming delivery was tested.

**Open email app**

- Use the confirmed business email.
- Prefill a useful subject and enquiry summary.
- Label the action accurately.
- Explain that the visitor must send the message in their email app.
- Do not show “Email sent” after opening a mail link.
- Display a copyable address as a fallback.

### WhatsApp option

Use the confirmed international-format business number.

- Open a chat with a properly encoded message.
- Let the visitor review the enquiry summary before opening WhatsApp.
- State that they must press Send in WhatsApp.
- Do not report delivery or success merely because WhatsApp opened.
- Do not automatically include optional personal information without making that clear.
- Keep the action usable on desktop and mobile.

### Enquiry fields

Retain:

- Name
- Email
- Company or brand
- Service
- Project description
- Optional budget
- Optional timeline
- Preferred contact channel

Validate fields according to the selected action. Keep the original required fields for the email form; a simple standalone WhatsApp link should not require a completed email form.

### Missing configuration

If email or WhatsApp details are absent:

- Do not show a broken action.
- Keep implementation ready for configuration.
- Use only existing verified alternatives.
- Record the missing values clearly.
- Never substitute an unrelated personal contact.

Update the privacy page to reflect actual form delivery and third-party contact behavior.

## 13. Content structure

Keep content editable independently of page layouts.

Create typed collections for:

```text
company
team
lifeEntries
careers
services
technologies
projects
articles
documentation
contact
socialLinks
```

Include publication status where needed.

Use one consistent publication rule across:

- Listing pages
- Detail routes
- Related content
- Search
- Sitemap
- Structured data

Do not bundle confidential drafts or unapproved assets into the public site.

Do not build an unnecessary CMS or admin panel unless one already exists or is separately requested.

## 14. Implementation order

Complete the work in this order:

1. Audit existing routes, content, contact configuration, and added assets.
2. Update navigation and URL mappings.
3. Build Company, Team, and Life pages.
4. Build Careers and its honest empty state.
5. Complete Services and Technologies.
6. Build Blog and Documentation layouts.
7. Integrate the supplied animation and creative work.
8. Add email and WhatsApp contact behavior.
9. Update metadata, sitemap, privacy, and redirects.
10. Run final responsive and functional checks.

After each phase, inspect the affected mobile and desktop pages, fix issues, and continue.

## 15. Acceptance checks

Verify:

- All new pages load directly and after refresh.
- Old URLs resolve correctly.
- Menus work with keyboard, touch, and pointer.
- Team profiles contain only confirmed people.
- Careers does not invent openings.
- Technologies reflect actual work.
- Every service CTA reaches the correct enquiry context.
- Blog and documentation navigation works.
- Draft content is excluded.
- Supplied creative assets appear correctly.
- Still images are not presented as playable videos.
- Media controls and galleries are accessible.
- Email actions have accurate behavior.
- WhatsApp opens the correct confirmed destination.
- No action falsely claims that a message was sent.
- Missing credentials or contacts are documented.
- There is no horizontal overflow at 360, 390, 430, 768, 1024, 1280, and 1440 pixels.
- Production build passes.
- No runtime errors or broken internal links remain.

## 16. Final handoff

Provide:

- Working updated website
- Summary of added pages and routes
- List of incorporated animation and creative assets
- Contact configuration instructions
- Updated content-status document
- Remaining owner-supplied details
- Brief QA report
- Clear statement of whether email delivery and WhatsApp behavior were actually tested

Finish the implementation around missing external details. Do not describe contact delivery, hiring, team membership, or portfolio attribution as verified unless it is.