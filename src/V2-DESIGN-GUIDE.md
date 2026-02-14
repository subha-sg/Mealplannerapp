# NaturaNest Version 2.0 - Design Guide 🎨

## Brand Identity

### Logo & Icon
- **Primary:** 🍃 Leaf (represents nature, growth, wellness)
- **Usage:** Hero section, footer, branding
- **Color:** White on colored backgrounds
- **Alternative:** Green on light backgrounds

### Tagline
**"Nourishing Indian Women & Children"**
- Concise, clear value proposition
- Emphasizes target audience
- Warm, caring tone

---

## Color Palette

### Primary Colors

#### Emerald (#10b981)
```
emerald-50:  #ecfdf5  (Lightest - backgrounds)
emerald-100: #d1fae5  (Very light)
emerald-200: #a7f3d0  (Light - borders)
emerald-300: #6ee7b7  (Medium light)
emerald-400: #34d399  (Medium)
emerald-500: #10b981  (PRIMARY - buttons, accents)
emerald-600: #059669  (Medium dark - hover)
emerald-700: #047857  (Dark - text)
emerald-800: #065f46  (Very dark)
emerald-900: #064e3b  (Darkest)
```

**Usage:**
- Primary buttons
- Active states
- Protein values
- Success indicators
- Links and CTAs
- Checkboxes

#### Teal (#14b8a6)
```
teal-50:  #f0fdfa  (Lightest)
teal-100: #ccfbf1  (Very light)
teal-200: #99f6e4  (Light)
teal-300: #5eead4  (Medium light)
teal-400: #2dd4bf  (Medium - gradients)
teal-500: #14b8a6  (SECONDARY - accents)
teal-600: #0d9488  (Medium dark)
teal-700: #0f766e  (Dark - text)
teal-800: #115e59  (Very dark)
teal-900: #134e4a  (Darkest)
```

**Usage:**
- Secondary elements
- Gradients
- Backgrounds
- Icons
- Dividers

#### Cyan (#06b6d4)
```
cyan-50:  #ecfeff  (Lightest)
cyan-100: #cffafe  (Very light)
cyan-200: #a5f3fc  (Light)
cyan-300: #67e8f9  (Medium light)
cyan-400: #22d3ee  (Medium - gradients)
cyan-500: #06b6d4  (TERTIARY - accents)
cyan-600: #0891b2  (Medium dark)
cyan-700: #0e7490  (Dark - iron values)
cyan-800: #155e75  (Very dark)
cyan-900: #164e63  (Darkest)
```

**Usage:**
- Iron nutrient boxes
- Gradient blends
- Tertiary accents
- Cool highlights

---

### Semantic Colors

#### Rose/Pink (Pregnancy, Calories, Highlights)
```
rose-50:  #fff1f2
rose-100: #ffe4e6
rose-200: #fecdd3
rose-300: #fda4af
rose-400: #fb7185
rose-500: #f43f5e
rose-600: #e11d48  (Calories, pregnancy)
rose-700: #be123c
rose-800: #9f1239
rose-900: #881337
```

**Usage:**
- Pregnancy life stage
- Calorie indicators
- Heart/wishlist icon
- Attention highlights
- Warm accents

#### Purple/Violet (Women 40+)
```
purple-50:  #faf5ff
purple-100: #f3e8ff
purple-200: #e9d5ff
purple-300: #d8b4fe
purple-400: #c084fc
purple-500: #a855f7  (Women 40+)
purple-600: #9333ea
purple-700: #7e22ce
purple-800: #6b21a8
purple-900: #581c87
```

**Usage:**
- Women 40+ life stage
- Mature wellness themes
- Midlife health
- Sophisticated accents

#### Amber/Orange (Fiber, Energy)
```
amber-50:  #fffbeb
amber-100: #fef3c7
amber-200: #fde68a
amber-300: #fcd34d
amber-400: #fbbf24
amber-500: #f59e0b
amber-600: #d97706  (Fiber values)
amber-700: #b45309
amber-800: #92400e
amber-900: #78350f
```

**Usage:**
- Fiber nutrient boxes
- Prep time icons
- Energy indicators
- Warm highlights

#### Blue (Calcium, Trust)
```
blue-50:  #eff6ff
blue-100: #dbeafe
blue-200: #bfdbfe
blue-300: #93c5fd
blue-400: #60a5fa
blue-500: #3b82f6
blue-600: #2563eb  (Calcium)
blue-700: #1d4ed8
blue-800: #1e40af
blue-900: #1e3a8a
```

**Usage:**
- Calcium indicators
- Trust signals
- Cool accents
- Secondary information

---

### Neutral Colors

#### Slate (Text, Borders)
```
slate-50:  #f8fafc  (Lightest backgrounds)
slate-100: #f1f5f9  (Light backgrounds)
slate-200: #e2e8f0  (Borders)
slate-300: #cbd5e1  (Subtle borders)
slate-400: #94a3b8  (Disabled)
slate-500: #64748b  (Secondary text)
slate-600: #475569  (Muted text)
slate-700: #334155  (Primary text)
slate-800: #1e293b  (Dark text)
slate-900: #0f172a  (Darkest)
```

**Usage:**
- Body text (700)
- Secondary text (600)
- Borders (200, 300)
- Backgrounds (50, 100)
- Disabled states (400)

---

## Gradients

### Primary Gradients

#### Hero Gradient
```css
background: linear-gradient(to bottom right, 
  #14b8a6,  /* teal-500 */
  #10b981,  /* emerald-500 */
  #06b6d4   /* cyan-500 */
);
```
**Usage:** Hero section, major CTAs

#### Recipe Card Header
```css
background: linear-gradient(to bottom right,
  #34d399,  /* emerald-400 */
  #2dd4bf,  /* teal-400 */
  #22d3ee   /* cyan-400 */
);
```
**Usage:** Recipe card headers, featured elements

#### Background Gradient
```css
background: linear-gradient(to bottom right,
  #f0fdfa,  /* teal-50 */
  #ecfeff,  /* cyan-50 */
  #ecfdf5   /* emerald-50 */
);
```
**Usage:** Page background

---

### Life Stage Gradients

#### Pregnancy (Rose/Pink)
```css
background: linear-gradient(to bottom right,
  #f43f5e,  /* rose-500 */
  #ec4899   /* pink-500 */
);
```

#### Women 40+ (Purple/Violet)
```css
background: linear-gradient(to bottom right,
  #a855f7,  /* purple-500 */
  #8b5cf6   /* violet-500 */
);
```

#### Children (Emerald/Teal)
```css
background: linear-gradient(to bottom right,
  #10b981,  /* emerald-500 */
  #14b8a6   /* teal-500 */
);
```

---

### Nutrient Box Gradients

#### Calories (Rose/Pink)
```css
background: linear-gradient(to bottom right,
  #fff1f2,  /* rose-50 */
  #fce7f3   /* pink-50 */
);
border-color: #fecdd3;  /* rose-200 */
```

#### Protein (Emerald/Teal)
```css
background: linear-gradient(to bottom right,
  #ecfdf5,  /* emerald-50 */
  #f0fdfa   /* teal-50 */
);
border-color: #a7f3d0;  /* emerald-200 */
```

#### Fiber (Amber/Orange)
```css
background: linear-gradient(to bottom right,
  #fffbeb,  /* amber-50 */
  #ffedd5   /* orange-50 */
);
border-color: #fde68a;  /* amber-200 */
```

#### Iron (Cyan/Blue)
```css
background: linear-gradient(to bottom right,
  #ecfeff,  /* cyan-50 */
  #eff6ff   /* blue-50 */
);
border-color: #a5f3fc;  /* cyan-200 */
```

---

## Typography

### Font Family
```css
/* Primary */
font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* Headings (if using custom) */
font-family: 'Inter', system-ui, sans-serif;
```

### Font Sizes

```css
/* Tailwind Scale */
text-xs:   12px / 0.75rem    /* Small labels, badges */
text-sm:   14px / 0.875rem   /* Body text, descriptions */
text-base: 16px / 1rem       /* Default body */
text-lg:   18px / 1.125rem   /* Large body, small headings */
text-xl:   20px / 1.25rem    /* Card titles */
text-2xl:  24px / 1.5rem     /* Section headings (mobile) */
text-3xl:  30px / 1.875rem   /* Section headings */
text-4xl:  36px / 2.25rem    /* Hero (tablet) */
text-5xl:  48px / 3rem       /* Hero (desktop) */
```

### Font Weights

```css
font-normal:    400  /* Body text */
font-medium:    500  /* Emphasized text */
font-semibold:  600  /* Headings, buttons */
font-bold:      700  /* Strong emphasis */
```

### Line Heights

```css
leading-tight:   1.25   /* Headings */
leading-snug:    1.375  /* Subheadings */
leading-normal:  1.5    /* Body text */
leading-relaxed: 1.625  /* Comfortable reading */
leading-loose:   2      /* Spaced content */
```

---

## Spacing

### Scale
```css
0:   0px      /* None */
px:  1px      /* Border */
0.5: 2px      /* 0.125rem */
1:   4px      /* 0.25rem */
1.5: 6px      /* 0.375rem */
2:   8px      /* 0.5rem */
2.5: 10px     /* 0.625rem */
3:   12px     /* 0.75rem - TIGHT */
4:   16px     /* 1rem - NORMAL */
5:   20px     /* 1.25rem */
6:   24px     /* 1.5rem - LOOSE */
8:   32px     /* 2rem */
10:  40px     /* 2.5rem - EXTRA */
12:  48px     /* 3rem */
16:  64px     /* 4rem */
20:  80px     /* 5rem */
24:  96px     /* 6rem */
```

### Usage Guidelines
- **Tight (3/12px):** Between related elements
- **Normal (4/16px):** Standard spacing
- **Loose (6/24px):** Between sections
- **Extra (10/40px):** Major separations

---

## Border Radius

### Scale
```css
rounded-none: 0px       /* Sharp corners */
rounded-sm:   2px       /* 0.125rem */
rounded:      4px       /* 0.25rem - Default */
rounded-md:   6px       /* 0.375rem */
rounded-lg:   8px       /* 0.5rem - SMALL CARDS */
rounded-xl:   12px      /* 0.75rem - BUTTONS/INPUTS */
rounded-2xl:  16px      /* 1rem - RECIPE CARDS */
rounded-3xl:  24px      /* 1.5rem - HERO SECTION */
rounded-full: 9999px    /* Circles, pills */
```

### Usage Guidelines
- **lg (8px):** Small cards, badges
- **xl (12px):** Buttons, inputs, search bar
- **2xl (16px):** Recipe cards, medium cards
- **3xl (24px):** Hero section, large cards
- **full:** Icons, avatars, pills

---

## Shadows

### Scale
```css
shadow-sm:   0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow:      0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
shadow-md:   0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
shadow-lg:   0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
shadow-xl:   0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
shadow-2xl:  0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Usage Guidelines
- **sm:** Subtle elevation (filter panel)
- **md:** Medium elevation (cards default)
- **lg:** Hover states
- **xl:** Active cards, prominent elements
- **2xl:** Hero section, major features

---

## Icons

### Icon Library
**Lucide React** - Consistent, modern, minimal

### Size Scale
```css
h-3 w-3:  12px  /* Tiny - inline badges */
h-4 w-4:  16px  /* Small - next to text */
h-5 w-5:  20px  /* Medium - buttons */
h-6 w-6:  24px  /* Large - standalone */
h-8 w-8:  32px  /* XL - feature icons */
h-16 w-16: 64px  /* Hero - placeholders */
```

### Icon Usage

#### Navigation & Actions
- **Search:** 🔍 Search functionality
- **Filter:** ⚙️ Filter panel toggle
- **Calendar:** 📅 Meal planning
- **Heart:** ❤️ Wishlist/favorites
- **Clock:** ⏰ Time/prep duration

#### Nutrients & Food
- **Flame:** 🔥 Calories
- **Beef:** 🥩 Protein
- **Wheat:** 🌾 Fiber
- **Droplet:** 💧 Iron
- **Milk:** 🥛 Calcium
- **Leaf:** 🍃 Vegetarian
- **ChefHat:** 👨‍🍳 Recipe placeholder
- **Utensils:** 🍽️ Meal type

#### Life Stages
- **Baby:** 👶 Pregnancy
- **Heart:** 💜 Women 40+
- **Users:** 👥 Children
- **Activity:** 📊 Nutrition/health

#### UI Elements
- **Grid3x3:** ⊞ Grid view
- **List:** ☰ List view
- **Award:** 🏆 INDB credit
- **Sparkles:** ✨ Features
- **TrendingUp:** 📈 Progress

---

## Component Patterns

### Buttons

#### Primary Button
```jsx
<Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
  Primary Action
</Button>
```

#### Secondary Button
```jsx
<Button variant="outline" className="border-emerald-200 hover:border-emerald-300">
  Secondary
</Button>
```

#### Ghost Button
```jsx
<Button variant="ghost" className="text-emerald-700 hover:bg-emerald-50">
  Ghost
</Button>
```

---

### Cards

#### Recipe Card (Grid)
```jsx
<Card className="bg-white border-2 border-slate-200 
                 hover:border-emerald-300 hover:shadow-xl 
                 transition-all rounded-2xl overflow-hidden">
  {/* Gradient header */}
  <div className="h-48 bg-gradient-to-br from-emerald-400 
                  via-teal-400 to-cyan-400">
    <ChefHat className="h-16 w-16 text-white" />
  </div>
  
  {/* Content */}
  <div className="p-4">
    <h3 className="font-semibold text-slate-800">Recipe Name</h3>
    {/* ... */}
  </div>
</Card>
```

#### Life Stage Card
```jsx
<button className="p-6 rounded-2xl border-2 
                   bg-gradient-to-br from-emerald-500 to-teal-500
                   text-white shadow-xl ring-4 ring-emerald-200">
  <div className="flex items-start gap-4">
    <div className="p-3 bg-white/20 rounded-xl">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div>
      <h4 className="font-semibold">Title</h4>
      <p className="text-sm text-white/90">Description</p>
    </div>
  </div>
</button>
```

---

### Nutrition Boxes

```jsx
<div className="flex items-center gap-2 p-2 
                bg-gradient-to-br from-emerald-50 to-teal-50 
                rounded-lg border border-emerald-200">
  <Beef className="h-4 w-4 text-emerald-600" />
  <div>
    <p className="text-xs text-slate-600">Protein</p>
    <p className="text-sm font-semibold text-emerald-700">25.0g</p>
  </div>
</div>
```

---

### Badges

```jsx
{/* Active/Primary */}
<Badge className="bg-emerald-500 text-white">Active</Badge>

{/* Outline */}
<Badge variant="outline" className="border-emerald-300 text-emerald-700">
  Cuisine
</Badge>

{/* Vegetarian */}
<Badge className="bg-green-100 text-green-700 border-green-300">
  <Leaf className="h-3 w-3 mr-1" />
  Veg
</Badge>
```

---

## Responsive Breakpoints

```css
sm:  640px   /* Tablet portrait */
md:  768px   /* Tablet landscape */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

### Usage Patterns

#### Mobile (<640px)
- 1 column cards
- Horizontal scroll life stages
- Sheet-based filters
- Compact hero
- Hidden view toggle

#### Tablet (640-1024px)
- 2 column cards
- 2 column life stages
- Sheet filters
- Medium hero

#### Desktop (>1024px)
- 2-3 column cards
- 3 column life stages
- Sidebar filters
- Full hero
- View toggle visible

---

## Animation & Transitions

### Duration
```css
transition-all         /* All properties */
transition-colors      /* Colors only */
transition-transform   /* Transform only */
transition-opacity     /* Opacity only */
```

### Timing
```css
duration-150  /* 150ms - Quick */
duration-300  /* 300ms - Normal */
duration-500  /* 500ms - Slow */
```

### Common Patterns

#### Hover Scale
```jsx
<div className="group-hover:scale-110 transition-transform duration-300">
```

#### Fade In/Out
```jsx
<div className="opacity-0 group-hover:opacity-100 transition-opacity">
```

#### Color Change
```jsx
<button className="bg-emerald-500 hover:bg-emerald-600 transition-colors">
```

---

## Accessibility

### Color Contrast
- **Minimum:** 4.5:1 for normal text
- **Large Text:** 3:1 for 18px+ or 14px+ bold
- **UI Components:** 3:1 for borders, icons

### Focus States
```jsx
<button className="focus:ring-2 focus:ring-emerald-400 
                   focus:ring-offset-2 focus:outline-none">
```

### ARIA Labels
```jsx
<button aria-label="Add to wishlist">
  <Heart className="h-5 w-5" />
</button>
```

---

## Design Principles

### 1. **Natural & Fresh**
- Use teal/emerald for organic, wellness feel
- Gradient backgrounds for depth
- Leaf iconography

### 2. **Clear Hierarchy**
- Large headings for importance
- Color coding for quick scanning
- Whitespace for breathing room

### 3. **Mobile-First**
- Design for small screens first
- Progressive enhancement
- Touch-friendly targets (min 44px)

### 4. **Delight**
- Smooth animations
- Hover effects
- Visual feedback
- Micro-interactions

### 5. **Trust**
- Prominent INDB credit
- Professional design
- Consistent styling
- Clear information

---

## Quick Reference

### Primary Actions
- **Color:** emerald-500
- **Hover:** emerald-600
- **Text:** white
- **Radius:** rounded-xl
- **Shadow:** shadow-md

### Recipe Cards
- **Background:** white
- **Border:** slate-200 → emerald-300 (hover)
- **Header:** emerald-400 → teal-400 → cyan-400
- **Radius:** rounded-2xl
- **Shadow:** shadow-md → shadow-xl (hover)

### Life Stages
- **Pregnancy:** rose-500 → pink-500
- **Women 40+:** purple-500 → violet-500
- **Children:** emerald-500 → teal-500
- **Radius:** rounded-2xl
- **Active:** ring-4 + ring-color-200

### Nutrition Values
- **Calories:** rose-600 🔥
- **Protein:** emerald-700 🥩
- **Fiber:** amber-600 🌾
- **Iron:** cyan-700 💧
- **Calcium:** blue-600 🥛

---

This design guide ensures consistency across all components and provides a reference for maintaining the Version 2.0 aesthetic! 🎨✨
