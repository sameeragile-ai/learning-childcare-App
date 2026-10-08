# Willow & Sage Early Learning — Sydney

A production-quality web application for **Willow & Sage Early Learning**, a nature-inspired, architectural early learning and childcare centre located in Woollahra, Sydney, Australia.

Built with **React 19**, **Vite**, **Tailwind CSS**, and **React Router**, designed with an editorial, warm Australian aesthetic that reflects modern education and lifestyle architecture.

---

## 1. Design & Architectural Philosophy

* **Warmth & Natural Tones**: Soft olive greens (`#4E5E46`), muted sage (`#8A9D84`), warm linen/beige (`#F3EFEA`), and off-white cream (`#FAF8F5`).
* **Zero-Pill Discipline**: No static pill enclosures for metadata; dates, age brackets, and room ratios are styled as clean, unboxed typography with typographic separators (`·`).
* **Editorial Layouts**: Asymmetrical image and content pairings, spacious typography hierarchies using `Fraunces` (Editorial Display Serif) and `Plus Jakarta Sans` (Readable Body Sans).
* **Anti-AI Restraint**: Avoided generic SaaS templates, floating gradients, hollow badges, and synthetic filler copy. All copy is authentic Australian early childhood English aligned with the Early Years Learning Framework (EYLF V2.0) and Reggio Emilia pedagogy.

---

## 2. Page & Route Architecture

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial hero, trust markers, philosophy spotlight, rooms preview, community testimonials, and campus tour CTA. |
| `/about` | **Our Story** | Founding vision, architectural restoration, pedagogical values, Woollahra campus timeline, and family covenant. |
| `/learning` | **Learning Approach** | Reggio Emilia inquiry, 6 development pillars, "Hundred Languages of Children", and wholefoods culinary curriculum. |
| `/programs` | **Rooms & Programs** | Deep dive into The Nest (Nursery), The Meadow (Toddlers), and The Atelier (Preschool/Kindy), ratios, and 3-step settling orientation. |
| `/team` | **Our Educators** | Profiles of Director Sarah Mitchell, Educational Leader Liam Campbell, room leads, qualifications, and child care philosophies. |
| `/faqs` | **FAQs** | Interactive searchable accordion answering questions on age groups, fees, hours, meals, CCS subsidy, and what to bring. |
| `/contact` | **Contact** | Campus address, hours, telephone, simulated map coordinates, and responsive parent enquiry form. |
| `/request-a-tour` | **Request a Tour** | Dedicated booking form with date, time slot, child details, and instant CRM service dispatch. |

---

## 3. CRM Integration Architecture (`src/services/crm.ts`)

The application decouples UI components from CRM business logic through a clean service layer ready for GoHighLevel, HubSpot, or Salesforce:

### Service Functions:
* `crmService.createLead(payload)`: Captures enquiry details, validates inputs, stores lead status, and triggers automated welcome workflows.
* `crmService.createTourRequest(payload)`: Links the prospective parent lead with tour appointment details (date, time, number of children) and dispatches booking confirmation.
* `crmService.updateLeadStatus(leadId, status)`: Transitions leads through `'new' | 'contacted' | 'tour_scheduled' | 'waitlisted' | 'enrolled'`.
* `crmService.addNote(leadId, note)`: Appends internal educator/admissions notes.

### Production Connection (e.g. GoHighLevel):
To connect to GoHighLevel or HubSpot in production:
1. Set up an API route or serverless proxy (e.g., `/api/crm/lead`).
2. Replace local persistence with a `fetch` request using `GOHIGHLEVEL_API_KEY` or a webhook endpoint URL.
3. Map custom fields:
   * `child_name`
   * `child_age_group`
   * `preferred_tour_datetime`
   * `lead_source` (e.g. "Website Tour Booking")

---

## 4. Email Automation Architecture (`src/services/emailAutomation.ts`)

The service layer contains mock-safe async dispatchers prepared for transactional email providers (SendGrid, Postmark, AWS SES, or GoHighLevel Campaigns):

* `emailAutomation.sendEnquiryConfirmation()`: Sends immediate receipt to parents with response timeframe.
* `emailAutomation.sendTourConfirmation()`: Sends tour details, parking guide, and reminder.
* `emailAutomation.sendInternalAdmissionsAlert()`: Notifies the admissions team at `enrolments@willowandsage.com.au`.

---

## 5. Technical SEO & AI Search Optimisation (AEO)

* **Schema.org Structured Data**: Included JSON-LD for `ChildCare` and `EducationalOrganization` matching Sydney Australian geographic coordinates and operating schedule.
* **OpenGraph & Twitter Cards**: High-resolution social share tags with title, description, and preview image.
* **Semantic HTML**: Proper `h1` through `h4` hierarchy, accessible ARIA attributes on accordions and modals.
* **Local Australian Search Target**: Optimised for Sydney Eastern Suburbs childcare, Woollahra early learning, Australian Child Care Subsidy (CCS) queries.

---

## 6. Production Integration Guide (Google & Tracking)

When migrating from this prototype to live production:

### 1. Google Business Profile (GBP)
* Claim and verify the location listing for **Willow & Sage Early Learning, 42 Parkland Avenue, Woollahra NSW 2025**.
* Ensure primary category is set to **Child care agency** or **Preschool**.
* Link the canonical website URL: `https://willowandsage.com.au`.
* Upload the architectural photography from `/src/assets/images/`.

### 2. Google Search Console (GSC)
* Verify domain ownership via DNS TXT record or HTML meta tag in `index.html`.
* Submit `sitemap.xml` listing all 8 routes (`/`, `/about`, `/learning`, `/programs`, `/team`, `/faqs`, `/contact`, `/request-a-tour`).

### 3. Google Analytics 4 (GA4) & Tag Manager
* Place the GA4 tag snippet in `index.html` (e.g. `G-XXXXXXXXXX`).
* Set up custom conversion events for:
  * `generate_lead` (Enquiry form submission)
  * `schedule_appointment` (Tour booking submission)

---

## 7. Deployment Instructions (Vercel)

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Local Development**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

4. **Deploying to Vercel**:
   * Connect your GitHub repository to Vercel.
   * Framework Preset: **Vite**.
   * Build Command: `npm run build`.
   * Output Directory: `dist`.
   * For single-page app (SPA) routing on Vercel, ensure `vercel.json` contains:
     ```json
     {
       "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
     }
     ```

---

## License & Attribution

Designed and developed for Willow & Sage Early Learning Sydney. Prototype build © 2026.
