# Tailwind CSS v4 Color Palette Guide

This guide shows you how to use the custom color palette configured in `src/index.css` with Tailwind v4.

## 🎨 Available Colors

### Warm Neutrals

- `warm-white` - #FAF7F5 (Background)
- `chocolate` - #2C1810 (Text)
- `cream` - #F5F0ED (Accents)
- `lavender-tint` - #E8E4F3 (Subtle backgrounds)

### Primary Accent (Lavender)

- `lavender` - #8B7FC8
- `lavender-light` - #A89FD8
- `lavender-dark` - #6B5FA8

### Secondary Accent (Green)

- `green` - #5CB894
- `green-light` - #7CC8A8
- `green-dark` - #4A9874

### CTA Colors (Tangerine/Orange)

- `tangerine` - #E67E22
- `golden` - #F39C12
- `tangerine-dark` - #C66A1A

### Dark Mode Colors

- `navy-black` - #0F0E13
- `surface-dark` - #1A1825
- `card-dark` - #252235

### Semantic Colors

- `success` - #5CB894
- `warning` - #F39C12
- `error` - #E74C3C
- `info` - #8B7FC8

---

## 📖 Usage Examples

### Background Colors

```tsx
<div className="bg-warm-white">Warm white background</div>
<div className="bg-lavender">Lavender background</div>
<div className="bg-green">Green background</div>
<div className="bg-tangerine">Tangerine background</div>
```

### Text Colors

```tsx
<h1 className="text-chocolate">Dark chocolate text</h1>
<p className="text-lavender">Lavender text</p>
<span className="text-green">Green text</span>
<button className="text-tangerine">Tangerine CTA text</button>
```

### Border Colors

```tsx
<div className="border border-lavender">Lavender border</div>
<div className="border-2 border-green">Green border</div>
<input className="border border-lavender-light focus:border-lavender" />
```

### Hover States

```tsx
<button className="bg-tangerine hover:bg-tangerine-dark text-white">
  Hover me
</button>
<a className="text-lavender hover:text-lavender-dark">
  Hover link
</a>
```

### Gradients

```tsx
{
  /* Hero gradient: lavender to green */
}
<div className='bg-gradient-to-br from-lavender to-green'>Hero section</div>;

{
  /* CTA gradient: tangerine to golden */
}
<button className='bg-gradient-to-r from-tangerine to-golden'>
  Download CV
</button>;

{
  /* Card gradient: warm white to lavender tint */
}
<div className='bg-gradient-to-br from-warm-white to-lavender-tint'>
  Card content
</div>;
```

---

## 🎯 Common UI Patterns

### Primary Button (CTA)

```tsx
<button className='bg-gradient-to-r from-tangerine to-golden text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 hover:-translate-y-1 transition-all'>
  Download CV
</button>
```

### Secondary Button

```tsx
<button className='bg-lavender text-white font-semibold px-6 py-3 rounded-lg hover:bg-lavender-dark transition-colors'>
  Learn More
</button>
```

### Card with Glassmorphism

```tsx
<div className='bg-warm-white/70 backdrop-blur-xl border border-lavender/20 rounded-2xl p-6 shadow-xl'>
  Card content
</div>
```

### Navigation Bar (Glassmorphic)

```tsx
<nav className='fixed top-0 w-full bg-warm-white/70 backdrop-blur-md border-b border-lavender/20 shadow-lg'>
  <div className='container mx-auto px-6 py-4'>{/* Nav content */}</div>
</nav>
```

### Skill Badge (Neomorphic)

```tsx
<div className='bg-cream rounded-2xl p-6 shadow-[8px_8px_16px_rgba(44,24,16,0.08),-8px_-8px_16px_rgba(255,255,255,0.9)] hover:-translate-y-2 transition-transform'>
  <span className='text-chocolate font-medium'>React</span>
</div>
```

### Hero Section

```tsx
<section className='min-h-screen bg-gradient-to-br from-lavender to-green flex items-center justify-center'>
  <div className='text-center'>
    <h1 className='font-display text-6xl font-extrabold text-white'>
      Daniel Villamizar
    </h1>
    <p className='font-sans text-2xl text-white/90 mt-4'>
      Software Developer & Creative Problem Solver
    </p>
  </div>
</section>
```

### Project Card

```tsx
<div className='bg-warm-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all group'>
  <div className='relative overflow-hidden'>
    <img
      src='project.jpg'
      className='w-full h-64 object-cover group-hover:scale-110 transition-transform'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-chocolate/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'>
      <div className='absolute bottom-4 left-4 right-4'>
        <h3 className='text-white font-bold text-xl'>Project Name</h3>
        <p className='text-white/90 text-sm'>Description</p>
      </div>
    </div>
  </div>
  <div className='p-6'>
    <div className='flex gap-2 flex-wrap'>
      <span className='bg-lavender-tint text-lavender px-3 py-1 rounded-full text-sm'>
        React
      </span>
      <span className='bg-lavender-tint text-lavender px-3 py-1 rounded-full text-sm'>
        TypeScript
      </span>
    </div>
  </div>
</div>
```

### Download CV Section

```tsx
<section className='py-20 bg-gradient-to-br from-warm-white to-lavender-tint'>
  <div className='container mx-auto px-6'>
    <div className='max-w-3xl mx-auto bg-warm-white/80 backdrop-blur-3xl rounded-3xl border border-lavender/20 shadow-2xl p-12 text-center'>
      <div className='text-tangerine text-6xl mb-6 animate-pulse'>📥</div>
      <h2 className='font-display text-4xl font-bold text-chocolate mb-4'>
        Download Full CV
      </h2>
      <p className='text-chocolate/70 text-lg mb-8'>
        Get detailed information about my experience, education, and
        achievements
      </p>
      <button className='bg-gradient-to-r from-tangerine to-golden text-white font-bold text-lg px-10 py-5 rounded-xl shadow-lg hover:scale-105 hover:-translate-y-1 transition-all'>
        Download PDF
      </button>
    </div>
  </div>
</section>
```

---

## 🌙 Dark Mode Support

To implement dark mode, you can use Tailwind's `dark:` variant:

```tsx
<div className="bg-warm-white dark:bg-navy-black text-chocolate dark:text-cream">
  Content that adapts to dark mode
</div>

<div className="bg-white dark:bg-surface-dark border border-lavender/20 dark:border-lavender/10">
  Card with dark mode
</div>
```

---

## 💡 Tips

1. **Use opacity modifiers** for subtle effects:

   ```tsx
   <div className="bg-lavender/10">Light lavender tint</div>
   <div className="text-chocolate/70">Muted text</div>
   ```

2. **Combine with Tailwind utilities** for rich effects:

   ```tsx
   <button className='bg-tangerine hover:bg-tangerine-dark text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
     Interactive Button
   </button>
   ```

3. **Use arbitrary values** when needed:
   ```tsx
   <div className='shadow-[0_20px_60px_rgba(44,24,16,0.1)]'>Custom shadow</div>
   ```

---

## 📚 Font Families

Your custom fonts are also configured:

```tsx
<h1 className="font-display">Outfit font for headings</h1>
<p className="font-sans">Inter font for body text</p>
<code className="font-mono">JetBrains Mono for code</code>
```

---

**Last Updated:** January 26, 2026  
**Tailwind Version:** 4.1.18
