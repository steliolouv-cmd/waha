# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Wahaweb** is a modern web agency website built with Next.js 16 (App Router), TypeScript, and Tailwind CSS 4. The site showcases the agency's services with smooth animations, an interactive contact form, and a clean, responsive design.

**Pages**:
- `/` - Main homepage (one-page layout with sections)
- `/a-propos` - About page with company information

**Navigation**: The About page is linked from the Footer (`footerLinks.company` in `components/Footer.tsx`).

## Development Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Run production build

# Quality
npm run lint         # Run ESLint
```

## Architecture

### One-Page Layout Structure

The site is organized as a single-page application (`app/page.tsx`) with these sections rendered in sequence:
1. **Header** - Fixed navigation with scroll effects
2. **HeroSection** - Landing area with CTAs
3. **ServicesSection** - Interactive service cards with modals
4. **ContactSection** - Full-width CTA banner + contact form modal
5. **Footer** - Links and branding

All sections are client-side components (`'use client'`) to leverage Framer Motion animations.

### About Page Structure

The About page (`app/a-propos/page.tsx`) is a standalone page with these sections:
1. **Hero Section** - Orange gradient banner with page title
2. **Mission** - Company mission statement
3. **Expertise** - Grid of 5 expertise areas (Sites Vitrine, E-commerce, SEO, Applications Mobiles, Maintenance Web)
4. **Values** - 4 core values (Excellence, Transparence, Innovation, Accompagnement)
5. **Methodology** - 7-phase development process
6. **Why Choose Us** - List of advantages (8 items)
7. **CTA Section** - Call-to-action with link back to homepage contact section

The page is fully self-contained and includes its own Header and Footer components.

### Component Patterns

**Modal Pattern**: Both `ServicesSection` and `ContactSection` use the same modal implementation:
- `AnimatePresence` wrapper for enter/exit animations
- Dark backdrop with blur (`bg-black/80 backdrop-blur-sm`)
- Click outside to close
- Spring animations (`type: 'spring'`)
- 2px orange border (`border-2 border-[#ff6b35]`)

**Animation Pattern**: Consistent scroll-triggered animations using Framer Motion:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
```

### Form Handling

Contact form in `ContactSection.tsx` uses:
- **React Hook Form** for state management
- **Zod** for validation schema
- **Simulated submission** (2-second delay) - needs real API implementation

To implement real form submission:
1. Create `app/api/contact/route.ts`
2. Configure email service (Resend, SendGrid, etc.)
3. Replace simulated API call in `ContactSection.tsx:61-80`

### Styling System

**Custom CSS Variables** (`app/globals.css`):
- Light gray theme: `--gray-*` variables
- Orange accent: `--orange-primary: #ff6b35`
- Custom utilities: `.orange-glow`, `.orange-text-glow`, `.orange-shine`

**Color Scheme**:
- Primary: Light grays (`#f8f9fa`, `#e9ecef`)
- Accent: Vibrant orange (`#ff6b35`, `#e55a2b`, `#ff8c5a`)
- Text: Dark gray (`#212529`, `#6c757d`)

**Typography**:
- Font: Nunito (weights: 300, 400, 600, 700, 800)
- Loaded via Google Fonts in `app/layout.tsx`

### Path Aliases

TypeScript configured with `@/*` alias pointing to root:
```typescript
import Header from '@/components/Header';
```

## Key Technical Details

### Services Data Structure

Services are defined as an array in `components/ServicesSection.tsx:15-64` with this shape:
```typescript
{
  icon: LucideIcon,
  title: string,
  description: string,
  color: string,        // Unused in current implementation
  image: string         // Unsplash URLs
}
```

### Contact Information

Contact details in `contactInfo` array (`ContactSection.tsx:20-45`):
- Email: contact@wahaweb.yt
- Phone: +262 639 01 31 00
- Location: Mayotte - Paris
- Hours: Lun - Ven : 9h - 18h

### Responsive Breakpoints

Using Tailwind defaults:
- Mobile: `< 768px`
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

## Dependencies

**Core**:
- Next.js 16 (App Router)
- React 19.2
- TypeScript 5

**UI & Styling**:
- Tailwind CSS 4
- Framer Motion 12 (animations)
- Lucide React (icons)

**Forms**:
- React Hook Form 7
- Zod 4 (validation)
- @hookform/resolvers

## Common Modifications

**Update Services**: Edit `services` array in `components/ServicesSection.tsx`

**Update Contact Info**: Edit `contactInfo` array in `components/ContactSection.tsx`

**Update About Page Content**: Edit data arrays in `app/a-propos/page.tsx`:
- `expertises` - List of expertise areas (line 8)
- `values` - Core values with icons (line 17)
- `methodology` - 7-phase development process (line 40)
- `advantages` - List of competitive advantages (line 50)

**Change Colors**: Modify CSS variables in `app/globals.css` or Tailwind classes (look for `#ff6b35`, `#e55a2b`, `#ff8c5a`)

**Add New Section**: Create component in `components/`, import and render in `app/page.tsx` between existing sections
