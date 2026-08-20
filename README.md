# Accredian Enterprise Page

A responsive Next.js recreation of the Accredian Enterprise landing page, built as a hiring assignment.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Lucide React
- Next.js Route Handler for lead capture
- Vercel-ready

## Features

- Responsive desktop/tablet/mobile layouts
- Sticky responsive navigation
- Enterprise hero section
- Track-record metrics
- Animated client-logo marquee
- Reusable domain expertise cards
- Interactive course segmentation tabs
- CAT learning framework
- Three-step delivery timeline
- FAQ accordion
- Testimonial carousel
- Lead capture form
- Next.js API route at `/api/leads`
- Loading, success and error states
- Metadata and accessible interactive controls

## Getting started

Requirements:

- Node.js 18.18+ or newer
- npm

Install:

```bash
npm install
```

Run development:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## API

The lead form sends:

```http
POST /api/leads
Content-Type: application/json
```

Example payload:

```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "company": "Company",
  "phone": "9876543210",
  "companySize": "201–500",
  "message": "We need leadership training."
}
```

For this assignment the API validates the request and logs the lead server-side. In production I would connect this route to a persistent store/CRM such as PostgreSQL, Supabase, HubSpot or Salesforce.

## Approach

The page was broken into independent sections and reusable UI primitives rather than keeping everything inside `page.tsx`.

The data-heavy sections use arrays and `.map()` so cards, FAQs, testimonials and segmentation options can be changed without rewriting layout code.

Client-side state is used only where it adds real behavior:

- mobile navigation
- course segmentation
- FAQ accordion
- testimonial carousel
- lead form submission state

## AI usage

AI tools were used during development for:

- initial page decomposition and component architecture
- identifying reusable UI patterns
- generating a first implementation pass for repetitive React/Tailwind structures
- debugging TypeScript/Next.js issues
- reviewing responsive behavior and accessibility considerations
- improving copy organization and data-driven component patterns

Manual work and decisions included:

- choosing the visual direction and design system
- restructuring sections into reusable components
- refining spacing, typography, borders, radii and responsive layouts
- deciding where React state was actually necessary
- implementing the lead API and form states
- reviewing the page against the reference and manually polishing interactions
- testing the production build

AI was used as a development assistant, not as a substitute for implementation and review.

## Improvements with more time

1. Connect leads to a persistent database or CRM.
2. Add analytics and conversion tracking.
3. Replace placeholder client wordmarks with properly licensed brand assets.
4. Add CMS-backed content management.
5. Add more complete FAQ content from the live source.
6. Add automated visual regression testing.
7. Add unit/component tests for form and interactive components.
8. Optimize image assets with responsive AVIF/WebP variants.
9. Add richer motion using Framer Motion only where it improves comprehension.

## Deployment

This project is structured for Vercel.

```bash
npm install
npm run build
```

Then import the GitHub repository into Vercel and deploy with the default Next.js settings.

## Final QA checklist

Before submitting:

```bash
npm install
npm run typecheck
npm run build
npm start
```

Manually check 375px, 390px, 768px, 1024px and 1280px+ widths, keyboard focus states, mobile navigation, FAQ, testimonials, segmentation tabs and enquiry form states.

The implementation intentionally uses an original component system rather than copying the reference site's source code or unlicensed image assets.
