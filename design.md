# Design System - Daniel Villamizar Digital CV

## Design Philosophy

This digital CV embraces **modern minimalism with purposeful interactivity**. The design aims to create a memorable first impression through sophisticated aesthetics, smooth animations, and a premium feel while maintaining excellent readability and accessibility.

### Core Principles

1. **Human-Centric**: Warm, approachable, yet professional
2. **Performance-First**: Beautiful but blazingly fast
3. **Interactive**: Engaging micro-interactions without distraction
4. **Accessible**: WCAG 2.1 AA compliant minimum
5. **Memorable**: Stand out through thoughtful design details

---

## Color Palette

### Primary Color Scheme

Based on 2026 trends emphasizing warm neutrals, calming tones, and strategic vibrant accents:

#### Base Colors

```css
/* Warm Neutrals - Primary Background & Text */
--color-mocha-900: #2c1810; /* Deep chocolate - primary text */
--color-mocha-800: #3d2418; /* Rich brown - headings */
--color-mocha-700: #4e3020; /* Warm brown - secondary text */
--color-mocha-100: #f5f0ed; /* Soft cream - light background */
--color-mocha-50: #faf7f5; /* Warm white - main background */

/* Accent - Digital Lavender (Calming, Modern) */
--color-lavender-600: #8b7fc8; /* Primary accent */
--color-lavender-500: #a599d9; /* Hover states */
--color-lavender-400: #bfb3e6; /* Light accent */
--color-lavender-100: #e8e4f3; /* Subtle backgrounds */

/* Secondary Accent - Verdant Green (Growth, Tech) */
--color-verdant-600: #2d7a5f; /* Secondary accent */
--color-verdant-500: #3a9b7a; /* Interactive elements */
--color-verdant-400: #5cb894; /* Highlights */
--color-verdant-100: #e1f5ed; /* Success states */

/* Vibrant Accent - Tangerine (Energy, CTA) */
--color-tangerine-600: #e67e22; /* Primary CTA */
--color-tangerine-500: #f39c12; /* Hover CTA */
--color-tangerine-400: #f8b739; /* Active states */
--color-tangerine-100: #fef3e6; /* Subtle highlights */
```

#### Gradient Palette

```css
/* Sophisticated Gradients - 2026 Trend */
--gradient-hero: linear-gradient(135deg, #8b7fc8 0%, #5cb894 100%);
--gradient-card: linear-gradient(145deg, #faf7f5 0%, #e8e4f3 100%);
--gradient-accent: linear-gradient(90deg, #e67e22 0%, #f39c12 100%);
--gradient-mermaid: linear-gradient(
  180deg,
  #a599d9 0%,
  #5cb894 50%,
  #3a9b7a 100%
);
--gradient-subtle: linear-gradient(135deg, #faf7f5 0%, #f5f0ed 100%);
```

#### Semantic Colors

```css
/* Functional Colors */
--color-success: #3a9b7a;
--color-warning: #f39c12;
--color-error: #e74c3c;
--color-info: #8b7fc8;
```

### Dark Mode Palette

```css
/* Dark Mode - Premium Feel */
--dark-bg-primary: #0f0e13; /* Deep navy-black */
--dark-bg-secondary: #1a1825; /* Elevated surfaces */
--dark-bg-tertiary: #252235; /* Cards & components */

--dark-text-primary: #f5f0ed; /* Main text */
--dark-text-secondary: #bfb3e6; /* Secondary text */
--dark-text-muted: #8b7fc8; /* Muted text */

--dark-accent-primary: #a599d9; /* Lavender in dark */
--dark-accent-secondary: #5cb894; /* Green in dark */
--dark-accent-cta: #f39c12; /* Tangerine in dark */
```

---

## Typography

### Font Families

```css
/* Primary Font - Inter (Modern, Professional) */
--font-primary:
  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Display Font - Outfit (Bold, Impactful) */
--font-display: 'Outfit', 'Inter', sans-serif;

/* Monospace - JetBrains Mono (Code snippets) */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

```css
/* Fluid Typography - Responsive scaling */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem); /* 12-14px */
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem); /* 14-16px */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem); /* 16-18px */
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.5rem); /* 18-24px */
--text-xl: clamp(1.5rem, 1.3rem + 1vw, 2rem); /* 24-32px */
--text-2xl: clamp(2rem, 1.6rem + 2vw, 3rem); /* 32-48px */
--text-3xl: clamp(2.5rem, 2rem + 2.5vw, 4rem); /* 40-64px */
--text-4xl: clamp(3rem, 2.5rem + 2.5vw, 5rem); /* 48-80px */
```

### Font Weights

```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights

```css
--leading-tight: 1.2;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

---

## Spacing System

```css
/* 8px base unit - Consistent spacing */
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
--space-32: 8rem; /* 128px */
```

---

## Layout & Grid

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

--container-max: 1400px; /* Main content max-width */
--container-reading: 65ch; /* Optimal reading width */
```

### Grid System

```css
/* Responsive Grid */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.grid-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-8);
}

/* Bento Grid - Modern 2026 Trend */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-4);
  grid-auto-rows: 200px;
}
```

---

## Design Patterns & Components

### 1. Glassmorphism (Strategic Use)

**When to Use**: Navigation bars, modal overlays, floating cards

```css
.glass-card {
  background: rgba(250, 247, 245, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(139, 127, 200, 0.2);
  box-shadow: 0 8px 32px rgba(44, 24, 16, 0.08);
}

.glass-card-dark {
  background: rgba(26, 24, 37, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(165, 153, 217, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
```

### 2. Neomorphism (Subtle Accents)

**When to Use**: Skill badges, interactive buttons, card elements

```css
.neo-card {
  background: var(--color-mocha-50);
  border-radius: 20px;
  box-shadow:
    12px 12px 24px rgba(44, 24, 16, 0.1),
    -12px -12px 24px rgba(255, 255, 255, 0.8);
}

.neo-button {
  background: linear-gradient(145deg, #faf7f5, #f5f0ed);
  box-shadow:
    6px 6px 12px rgba(44, 24, 16, 0.08),
    -6px -6px 12px rgba(255, 255, 255, 0.9);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.neo-button:hover {
  box-shadow:
    8px 8px 16px rgba(44, 24, 16, 0.12),
    -8px -8px 16px rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
}
```

### 3. Card Designs

```css
/* Elevated Card - Primary */
.card-elevated {
  background: var(--color-mocha-50);
  border-radius: 16px;
  padding: var(--space-8);
  box-shadow:
    0 4px 6px rgba(44, 24, 16, 0.05),
    0 10px 20px rgba(44, 24, 16, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-elevated:hover {
  transform: translateY(-8px);
  box-shadow:
    0 12px 24px rgba(44, 24, 16, 0.1),
    0 24px 48px rgba(44, 24, 16, 0.12);
}

/* Gradient Card - Featured Projects */
.card-gradient {
  background: var(--gradient-card);
  border-radius: 20px;
  padding: var(--space-8);
  border: 1px solid rgba(139, 127, 200, 0.15);
  position: relative;
  overflow: hidden;
}

.card-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-hero);
}
```

### 4. Buttons

```css
/* Primary CTA Button */
.btn-primary {
  background: var(--gradient-accent);
  color: white;
  padding: var(--space-4) var(--space-8);
  border-radius: 12px;
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(230, 126, 34, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(230, 126, 34, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--color-lavender-600);
  padding: var(--space-4) var(--space-8);
  border-radius: 12px;
  border: 2px solid var(--color-lavender-600);
  font-weight: var(--font-semibold);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--color-lavender-600);
  color: white;
  transform: translateY(-2px);
}

/* Download CV Button - Special Treatment */
.btn-download {
  background: var(--gradient-hero);
  color: white;
  padding: var(--space-5) var(--space-10);
  border-radius: 16px;
  font-weight: var(--font-bold);
  font-size: var(--text-lg);
  border: none;
  cursor: pointer;
  box-shadow:
    0 8px 24px rgba(139, 127, 200, 0.3),
    0 4px 8px rgba(92, 184, 148, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.btn-download:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 16px 40px rgba(139, 127, 200, 0.4),
    0 8px 16px rgba(92, 184, 148, 0.3);
}
```

---

## Micro-Interactions & Animations

### Animation Timing Functions

```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Key Animations

```css
/* Fade In Up - Entry Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient Shift - Background Animation */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Pulse - Attention Grabber */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

/* Float - Subtle Movement */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Shimmer - Loading State */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
```

### Hover Effects

```css
/* Link Hover - Underline Animation */
.link-animated {
  position: relative;
  text-decoration: none;
  color: var(--color-lavender-600);
}

.link-animated::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-hero);
  transition: width 0.3s var(--ease-smooth);
}

.link-animated:hover::after {
  width: 100%;
}

/* Card Tilt Effect */
.card-tilt {
  transition: transform 0.3s var(--ease-smooth);
}

.card-tilt:hover {
  transform: perspective(1000px) rotateX(2deg) rotateY(-2deg);
}
```

---

## Section-Specific Designs

### Hero Section

**Design**: Full viewport height with gradient background, large typography, animated elements

```css
.hero {
  min-height: 100vh;
  background: var(--gradient-hero);
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-title {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--font-extrabold);
  color: white;
  line-height: var(--leading-tight);
  animation: fadeInUp 1s var(--ease-smooth);
}

.hero-subtitle {
  font-size: var(--text-xl);
  color: rgba(255, 255, 255, 0.9);
  margin-top: var(--space-4);
  animation: fadeInUp 1s var(--ease-smooth) 0.2s both;
}
```

### Projects Showcase

**Design**: Bento grid layout with hover effects, gradient overlays

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-8);
  padding: var(--space-16) 0;
}

.project-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  cursor: pointer;
}

.project-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease-smooth);
}

.project-card:hover .project-card-image {
  transform: scale(1.1);
}

.project-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(44, 24, 16, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-6);
  opacity: 0;
  transition: opacity 0.4s var(--ease-smooth);
}

.project-card:hover .project-card-overlay {
  opacity: 1;
}
```

### Skills Section

**Design**: Interactive skill cards with proficiency indicators, neomorphic style

```css
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--space-6);
}

.skill-card {
  background: var(--color-mocha-50);
  border-radius: 16px;
  padding: var(--space-6);
  text-align: center;
  box-shadow:
    8px 8px 16px rgba(44, 24, 16, 0.08),
    -8px -8px 16px rgba(255, 255, 255, 0.9);
  transition: all 0.3s var(--ease-smooth);
  cursor: pointer;
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow:
    12px 12px 24px rgba(44, 24, 16, 0.12),
    -12px -12px 24px rgba(255, 255, 255, 0.95);
}

.skill-icon {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-3);
  animation: float 3s ease-in-out infinite;
}

.skill-proficiency {
  height: 4px;
  background: var(--color-mocha-100);
  border-radius: 2px;
  margin-top: var(--space-3);
  overflow: hidden;
}

.skill-proficiency-fill {
  height: 100%;
  background: var(--gradient-hero);
  border-radius: 2px;
  transition: width 1s var(--ease-smooth);
}
```

### Download CV Section

**Design**: Prominent, eye-catching section with glassmorphic card

```css
.download-section {
  padding: var(--space-20) 0;
  background: var(--gradient-subtle);
  position: relative;
}

.download-card {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(250, 247, 245, 0.8);
  backdrop-filter: blur(30px);
  border-radius: 24px;
  padding: var(--space-12);
  border: 1px solid rgba(139, 127, 200, 0.2);
  box-shadow:
    0 20px 60px rgba(44, 24, 16, 0.1),
    0 8px 24px rgba(139, 127, 200, 0.15);
  text-align: center;
}

.download-icon {
  font-size: 4rem;
  color: var(--color-tangerine-600);
  animation: pulse 2s ease-in-out infinite;
}
```

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px; /* Small devices */
--breakpoint-md: 768px; /* Tablets */
--breakpoint-lg: 1024px; /* Laptops */
--breakpoint-xl: 1280px; /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Media Query Patterns

```css
/* Mobile (default) */
.container {
  padding: var(--space-4);
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: var(--space-8);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: var(--space-12);
  }
}
```

---

## Accessibility

### Focus States

```css
/* Custom Focus Ring */
*:focus-visible {
  outline: 3px solid var(--color-lavender-600);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip to Content Link */
.skip-to-content {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--color-lavender-600);
  color: white;
  padding: var(--space-4);
  z-index: 100;
  transition: top 0.3s;
}

.skip-to-content:focus {
  top: 0;
}
```

### Color Contrast

- **Text on Light Background**: Minimum 4.5:1 ratio
- **Text on Dark Background**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Minimum 3:1 ratio

---

## Performance Optimizations

### CSS Best Practices

```css
/* Use CSS containment for performance */
.card {
  contain: layout style paint;
}

/* Optimize animations with will-change */
.animated-element {
  will-change: transform, opacity;
}

/* Remove will-change after animation */
.animated-element.animation-complete {
  will-change: auto;
}

/* Use transform for animations (GPU accelerated) */
.smooth-move {
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

---

## Design Inspiration & References

### Visual Style

- **Mood**: Sophisticated, warm, approachable, modern
- **Inspiration**: Apple's design language, Stripe's clarity, Linear's minimalism
- **Aesthetic**: Professional yet creative, technical yet human

### Color Psychology

- **Mocha/Brown**: Stability, reliability, warmth
- **Lavender**: Creativity, innovation, calmness
- **Verdant Green**: Growth, success, technology
- **Tangerine**: Energy, enthusiasm, action

---

## Implementation Checklist

### Phase 1: Foundation

- [ ] Set up CSS custom properties (variables)
- [ ] Import Google Fonts (Inter, Outfit, JetBrains Mono)
- [ ] Create base reset and global styles
- [ ] Implement dark mode toggle functionality

### Phase 2: Components

- [ ] Build button components with all variants
- [ ] Create card components (elevated, glass, gradient)
- [ ] Develop navigation bar with glassmorphism
- [ ] Design skill cards with neomorphism

### Phase 3: Sections

- [ ] Hero section with gradient animation
- [ ] Projects showcase with bento grid
- [ ] Skills section with interactive cards
- [ ] Experience timeline
- [ ] Download CV section with prominent CTA

### Phase 4: Interactions

- [ ] Implement scroll animations
- [ ] Add hover effects to all interactive elements
- [ ] Create smooth page transitions
- [ ] Add loading states and micro-interactions

### Phase 5: Polish

- [ ] Optimize for performance
- [ ] Test accessibility (keyboard navigation, screen readers)
- [ ] Ensure responsive design across all breakpoints
- [ ] Cross-browser testing

---

**Last Updated**: January 26, 2026  
**Design Version**: 1.0.0  
**Status**: Ready for Implementation
