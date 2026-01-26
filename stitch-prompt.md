# Google Stitch Design Prompt - Daniel Villamizar Digital CV

## Project Overview

A modern, interactive digital CV/portfolio website for a software developer. The site showcases professional projects with repository links, technical skills, work experience, and features a prominent download CV button for a detailed PDF resume.

---

## Initial High-Level Prompt

**Context:**  
Design a professional digital CV/portfolio website for Daniel Villamizar, a software developer. The website should create a memorable first impression through sophisticated aesthetics while maintaining excellent readability and accessibility.

**Target Audience:**  
Potential employers, recruiters, and professional collaborators in the tech industry who value both technical skills and design sensibility.

**Overall Vibe:**  
Sophisticated, warm, approachable, and modern. Professional yet creative. Technical yet human. The design should feel premium and state-of-the-art, not a simple MVP.

**Design Philosophy:**  
Modern minimalism with purposeful interactivity. Warm and inviting with smooth animations and micro-interactions that enhance user experience without distraction.

---

## Color Palette & Visual Style

### Primary Colors

- **Warm Neutrals Base:** Mocha/chocolate tones (#FAF7F5 warm white background, #2C1810 deep chocolate text, #F5F0ED soft cream accents)
- **Primary Accent:** Digital Lavender (#8B7FC8) - calming, modern, creative
- **Secondary Accent:** Verdant Green (#5CB894) - growth, technology, success
- **CTA Color:** Tangerine (#E67E22) - energy, enthusiasm, action

### Gradients

- **Hero Gradient:** Linear gradient from digital lavender (#8B7FC8) to verdant green (#5CB894) at 135deg
- **Card Gradient:** Subtle gradient from warm white (#FAF7F5) to lavender tint (#E8E4F3) at 145deg
- **Accent Gradient:** Vibrant tangerine to golden (#E67E22 to #F39C12) for CTAs

### Visual Effects

- **Glassmorphism:** Frosted glass effect with backdrop blur (20px) for navigation bar and modal overlays. Use rgba(250, 247, 245, 0.7) background with 1px border in lavender tint
- **Neomorphism:** Soft, tactile shadows for skill badges and interactive buttons. Dual shadows: 12px 12px 24px rgba(44, 24, 16, 0.1) and -12px -12px 24px rgba(255, 255, 255, 0.8)
- **Elevated Cards:** Soft shadows with hover lift effect (translateY -8px on hover)

---

## Typography

**Primary Font:** Inter - clean, modern, professional sans-serif for body text and UI elements  
**Display Font:** Outfit - bold, impactful for large headings and hero section  
**Monospace Font:** JetBrains Mono - for code snippets or technical details

**Type Scale (Fluid/Responsive):**

- Hero Title: 48-80px (clamp 3rem to 5rem), extrabold weight
- Section Headings: 32-48px (clamp 2rem to 3rem), bold weight
- Subheadings: 24-32px (clamp 1.5rem to 2rem), semibold weight
- Body Text: 16-18px (clamp 1rem to 1.125rem), regular weight
- Small Text: 14-16px (clamp 0.875rem to 1rem), regular weight

---

## Layout Structure & Sections

### 1. Hero Section (Full Viewport)

**Purpose:** Create immediate impact and introduce Daniel

**Layout:**

- Full viewport height (100vh)
- Animated gradient background (hero gradient with slow shift animation)
- Centered content with large typography
- Floating/animated decorative elements

**Content:**

- Large hero title: "Daniel Villamizar" (Outfit font, 48-80px, white)
- Subtitle: "Software Developer & Creative Problem Solver" (Inter, 24-32px, white with 90% opacity)
- Brief tagline or value proposition
- Scroll indicator at bottom (subtle animation)

**Interactions:**

- Gradient background slowly shifts (15s animation loop)
- Text fades in from bottom with stagger effect
- Smooth scroll to next section on indicator click

---

### 2. About Section

**Purpose:** Professional introduction and personal brand

**Layout:**

- Two-column layout on desktop (60/40 split), stacked on mobile
- Left: Professional photo or avatar (rounded, subtle shadow)
- Right: Bio text and key highlights

**Content:**

- Professional headshot (circular or rounded rectangle)
- 2-3 paragraph professional summary
- Key highlights in bullet points or icon list
- Social links (GitHub, LinkedIn) with icon buttons

**Style:**

- Clean white/cream background (#FAF7F5)
- Elevated card for photo with neomorphic effect
- Icons in lavender accent color

---

### 3. Projects Showcase (Bento Grid)

**Purpose:** Display featured projects with visual hierarchy

**Layout:**

- Bento grid (CSS Grid with varied sizes)
- 2-3 columns on desktop, 1 column on mobile
- Featured projects span 2 columns
- Each project card has image, title, description, tech tags, and links

**Project Card Design:**

- Aspect ratio 16:10 for images
- Rounded corners (20px border-radius)
- Image with gradient overlay on hover
- Project info appears on hover (fade in from bottom)
- Tech stack tags as small pills below title
- GitHub icon and Live Demo link buttons

**Hover Effects:**

- Image scales to 110% (transform: scale(1.1))
- Gradient overlay fades in (0 to 1 opacity)
- Card lifts with shadow increase (translateY -8px)
- Smooth transitions (0.4s cubic-bezier)

**Content per Card:**

- Project thumbnail/screenshot
- Project title (text-xl, semibold)
- Brief description (2-3 lines)
- Technology tags (React, TypeScript, etc.)
- Repository link icon
- Live demo link (if available)

---

### 4. Skills Section

**Purpose:** Showcase technical proficiencies with visual indicators

**Layout:**

- Grid layout with auto-fill (minmax 140px, 1fr)
- Skills grouped by category (Frontend, Backend, Tools)
- Each skill as an interactive card

**Skill Card Design:**

- Neomorphic style with soft shadows
- Icon or logo at top (48px size)
- Skill name below (text-base, medium weight)
- Proficiency bar at bottom (4px height, gradient fill)
- Hover effect: lift and shadow increase

**Interactions:**

- Cards float subtly (3s infinite animation)
- On hover: translateY -8px with enhanced shadow
- Proficiency bar animates width on scroll into view

**Categories:**

- Frontend: React, TypeScript, CSS, etc.
- Backend: Node.js, databases, APIs
- Tools: Git, Docker, testing frameworks

---

### 5. Experience Timeline

**Purpose:** Display professional work history

**Layout:**

- Vertical timeline on desktop, card stack on mobile
- Timeline line in lavender accent color
- Cards alternate left/right on desktop

**Card Content:**

- Company name and logo
- Job title (text-lg, semibold)
- Date range (text-sm, muted color)
- Key responsibilities (bullet points)
- Technologies used (small tags)

**Style:**

- Elevated cards with white background
- Timeline dots in verdant green
- Connecting line in lavender (2px)

---

### 6. Download CV Section (Prominent CTA)

**Purpose:** Encourage visitors to download detailed PDF resume

**Layout:**

- Full-width section with gradient background (subtle gradient)
- Centered glassmorphic card (max-width 800px)
- Large download icon with pulse animation
- Prominent download button

**Card Design:**

- Glassmorphism: rgba(250, 247, 245, 0.8) with 30px backdrop blur
- Rounded corners (24px)
- Border: 1px solid rgba(139, 127, 200, 0.2)
- Large shadow: 0 20px 60px rgba(44, 24, 16, 0.1)

**Content:**

- Download icon (4rem size, tangerine color, pulse animation)
- Heading: "Download Full CV" (text-2xl, bold)
- Subtext: "Get detailed information about my experience, education, and achievements"
- Large download button with gradient background (tangerine gradient)

**Button Style:**

- Gradient background (tangerine to golden)
- Large padding (20px 40px)
- Bold text (text-lg)
- Shadow: 0 8px 24px rgba(139, 127, 200, 0.3)
- Hover: lift 4px, scale 1.02, enhanced shadow

---

### 7. Contact/Footer Section

**Purpose:** Provide contact information and social links

**Layout:**

- Two-column on desktop (contact info left, social links right)
- Centered on mobile

**Content:**

- Email address with icon
- Location (city/country)
- Social media links (GitHub, LinkedIn, Twitter)
- Copyright notice
- "Back to top" button

**Style:**

- Dark background (#2C1810) with light text
- Social icons in lavender accent
- Hover effects on all links

---

## Navigation Bar

**Design:** Glassmorphic sticky header

**Style:**

- Fixed position at top
- Glassmorphism: rgba(250, 247, 245, 0.7) with 20px backdrop blur
- Border bottom: 1px solid rgba(139, 127, 200, 0.2)
- Shadow: 0 8px 32px rgba(44, 24, 16, 0.08)

**Content:**

- Logo/Name on left (Outfit font, semibold)
- Navigation links on right (About, Projects, Skills, Experience, Contact)
- Download CV button (small version of main CTA)

**Interactions:**

- Smooth scroll to sections on click
- Active section highlighted in lavender
- Hover underline animation (gradient line grows from left)

---

## Animations & Micro-Interactions

### Entry Animations

- Fade in from bottom (translateY 30px to 0) with stagger
- Duration: 1s with smooth easing

### Scroll Animations

- Elements fade in as they enter viewport
- Skill proficiency bars animate width on scroll into view
- Timeline cards slide in from sides

### Hover Effects

- All interactive elements: translateY -2px to -8px
- Shadow enhancement on hover
- Color transitions (0.3s ease)
- Link underline grows from left to right

### Background Animations

- Hero gradient shifts slowly (15s loop)
- Skill icons float subtly (3s infinite)
- Download icon pulses (2s infinite)

---

## Responsive Breakpoints

- **Mobile:** < 768px (single column, stacked layout)
- **Tablet:** 768px - 1024px (2 columns where applicable)
- **Desktop:** > 1024px (full multi-column layouts)

**Mobile Adjustments:**

- Reduce font sizes (use clamp minimum values)
- Stack all multi-column layouts
- Simplify animations (reduce or remove on mobile)
- Larger touch targets (48px minimum)
- Simplified navigation (hamburger menu)

---

## Accessibility Requirements

- **Color Contrast:** Minimum 4.5:1 for text, 3:1 for large text
- **Focus States:** 3px lavender outline with 2px offset on all interactive elements
- **Keyboard Navigation:** All sections and links accessible via keyboard
- **Skip to Content:** Hidden link at top, visible on focus
- **Alt Text:** All images have descriptive alt text
- **Semantic HTML:** Proper heading hierarchy (single h1, logical h2-h6)

---

## Performance Optimizations

- **Lazy Loading:** Images load as they enter viewport
- **Optimized Images:** WebP format with fallbacks, responsive sizes
- **CSS Containment:** Use contain: layout style paint on cards
- **GPU Acceleration:** Use transform and opacity for animations
- **Minimal JavaScript:** Prefer CSS animations where possible

---

## Dark Mode (Optional Enhancement)

**Toggle:** Moon/sun icon in navigation bar

**Dark Palette:**

- Background: #0F0E13 (deep navy-black)
- Surfaces: #1A1825 (elevated surfaces)
- Cards: #252235
- Text: #F5F0ED (light cream)
- Accents remain similar (lavender, green, tangerine)

---

## Key Design Principles for Stitch

1. **Start High-Level:** Begin with overall layout and structure
2. **Iterate Gradually:** Refine one section at a time
3. **Be Specific:** Use exact colors, sizes, and component names
4. **Reference Style:** Mention glassmorphism, neomorphism, bento grid
5. **Define Interactions:** Describe hover states, animations, transitions
6. **Set the Mood:** Emphasize warm, sophisticated, modern, professional

---

## Example Stitch Prompts (Iterative Approach)

### Prompt 1 - Hero Section

```
Design a full viewport hero section for a developer portfolio website.
Background: animated gradient from digital lavender (#8B7FC8) to verdant green (#5CB894) at 135deg with slow shift animation.
Center-aligned content with large hero title "Daniel Villamizar" in Outfit font (48-80px, extrabold, white).
Below: subtitle "Software Developer & Creative Problem Solver" in Inter font (24-32px, white 90% opacity).
Add subtle scroll indicator at bottom with bounce animation.
Overall vibe: sophisticated, modern, warm, and inviting.
```

### Prompt 2 - Projects Bento Grid

```
Create a projects showcase section using a bento grid layout.
Grid: 3 columns on desktop, 1 on mobile, with varied card sizes (some span 2 columns).
Each project card: rounded corners (20px), aspect ratio 16:10, project image with gradient overlay on hover.
Overlay: dark gradient from transparent to rgba(44, 24, 16, 0.8) bottom.
Card content (visible on hover): project title (semibold), description, tech tags as pills, GitHub and demo link icons.
Hover effect: image scales 110%, card lifts 8px, shadow increases.
Colors: warm white background (#FAF7F5), lavender accents (#8B7FC8), tangerine for links (#E67E22).
```

### Prompt 3 - Skills Section

```
Design an interactive skills section with neomorphic style cards.
Layout: auto-fill grid (minmax 140px, 1fr) with 24px gap.
Each skill card: soft cream background (#FAF7F5), rounded 16px, padding 24px, centered content.
Neomorphic shadows: 8px 8px 16px rgba(44, 24, 16, 0.08) and -8px -8px 16px rgba(255, 255, 255, 0.9).
Content: skill icon/logo (48px) at top, skill name below (medium weight), proficiency bar at bottom (4px height, gradient from lavender to green).
Hover: lift 8px, enhanced shadow.
Icons should float subtly (3s infinite animation).
```

### Prompt 4 - Download CV Section

```
Create a prominent download CV section with glassmorphic card.
Background: subtle gradient from warm white to lavender tint.
Center card (max-width 800px): glassmorphism with rgba(250, 247, 245, 0.8) background, 30px backdrop blur, 24px border-radius.
Border: 1px solid rgba(139, 127, 200, 0.2).
Shadow: 0 20px 60px rgba(44, 24, 16, 0.1).
Content: large download icon (4rem, tangerine #E67E22, pulse animation), heading "Download Full CV" (32-48px, bold), descriptive subtext, large download button.
Button: gradient background (tangerine #E67E22 to golden #F39C12), large padding (20px 40px), bold text, shadow.
Hover: lift 4px, scale 1.02.
```

### Prompt 5 - Navigation Bar

```
Design a glassmorphic sticky navigation bar.
Fixed at top, full width.
Background: rgba(250, 247, 245, 0.7) with 20px backdrop blur.
Border bottom: 1px solid rgba(139, 127, 200, 0.2).
Shadow: 0 8px 32px rgba(44, 24, 16, 0.08).
Left: logo/name "Daniel Villamizar" (Outfit font, semibold).
Right: navigation links (About, Projects, Skills, Experience, Contact) and small download CV button.
Active link highlighted in lavender (#8B7FC8).
Hover: underline animation with gradient line growing from left.
```

---

## Final Notes

- **Consistency:** Maintain 8px spacing system throughout
- **Hierarchy:** Clear visual hierarchy with size, weight, and color
- **Whitespace:** Generous spacing for breathing room
- **Performance:** Optimize all assets, use modern formats
- **Testing:** Ensure cross-browser compatibility and responsive design

**Design Version:** 1.0.0  
**Last Updated:** January 26, 2026  
**Status:** Ready for Stitch Implementation
