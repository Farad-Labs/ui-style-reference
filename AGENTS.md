# AGENTS.md - UI Style Guide

This repo is the visual showcase for the [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) agent skill. It displays interactive demos of all 67 UI styles with live examples, color palettes, and implementation tips.

**Live site:** https://www.uistyleguide.com

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router

## Project Structure

```
src/
├── data/
│   └── styles.ts          # Style definitions (names, colors, keywords, etc.)
├── components/
│   └── StyleDemo.tsx      # All 67 demo components + mapping
├── pages/
│   ├── HomePage.tsx       # Landing page with category grid
│   └── StylePage.tsx      # Individual style view
public/
└── previews/              # 1280x800 PNG thumbnails for each style
```

## Adding a New Style

### 1. Reference the UI UX Pro Max Skill

First, understand what the style is about. Check the skill's data:

```bash
# Clone or reference the skill repo
git clone https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git /tmp/skill-ref

# Check the style definitions
cat /tmp/skill-ref/src/ui-ux-pro-max/data/styles.csv
```

Or use the skill's search to get style details:

```bash
python3 /path/to/skill/scripts/search.py "glassmorphism" --domain style
```

### 2. Add Style Data to `src/data/styles.ts`

Add a new entry to the `styles` array:

```typescript
{
  id: 68,  // Next available ID
  name: 'Your Style Name',
  slug: 'your-style-slug',  // URL-friendly, used for routing
  category: 'modern-saas',  // Must match a category id
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  primaryColors: ['#HEXCODE1', '#HEXCODE2'],
  secondaryColors: ['#HEXCODE3', '#HEXCODE4'],
  effects: 'Description of CSS effects and animations',
  bestFor: ['Use case 1', 'Use case 2', 'Use case 3'],
  doNotUse: ['Anti-pattern 1', 'Anti-pattern 2'],
  description: 'A paragraph describing the style, its history, and characteristics.',
  cssKeywords: 'key CSS properties: backdrop-filter, box-shadow, etc.',
  era: '2020s Modern'  // When the style emerged
}
```

**Categories available:**
- `modern-saas` - Clean, professional styles
- `retro-nostalgia` - Vintage aesthetics
- `gaming-entertainment` - Bold, immersive
- `accessibility-ethical` - Inclusive design
- `experimental-artistic` - Creative, boundary-pushing
- `nature-organic` - Nature-inspired
- `motion-interactive` - Animation-driven
- `futuristic-tech` - Technology-forward
- `landing-page` - Conversion-focused patterns
- `bi-analytics` - Dashboard styles

### 3. Create the Demo Component in `src/components/StyleDemo.tsx`

Add a new demo component. Follow the existing patterns:

```typescript
const YourStyleDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 overflow-x-hidden bg-[appropriate-bg]">
    {/* Optional: Custom CSS animations */}
    <style>{`
      @keyframes yourAnimation { ... }
    `}</style>

    {/* Header with MobileNav component */}
    <header className="max-w-6xl mx-auto px-8 py-8">
      <MobileNav
        logo={<span className="text-2xl font-bold">Brand</span>}
        items={[
          { label: 'Features' },
          { label: 'Pricing' },
          { label: 'About' },
        ]}
        hamburgerColor="white"  // or "black"
        menuBg="bg-gray-900"
        menuText="text-white"
        desktopItemClass="text-white/70 hover:text-white"
      />
    </header>

    {/* Hero Section */}
    <section className="...">
      {/* Create a realistic fake product that fits the style's "bestFor" use cases */}
    </section>

    {/* Additional sections showcasing the style's characteristics */}
  </div>
);
```

**Guidelines for demo content:**
- Create a realistic fake product/app that matches the style's `bestFor` use cases
- If it's a SaaS style → make a fake SaaS product demo
- If it's a dashboard style → create a realistic dashboard with mock data
- If it's a landing page style → design a conversion-focused landing page
- Include the style's `primaryColors` and `secondaryColors`
- Demonstrate the `effects` mentioned in the style data
- Make it mobile-responsive (test at 375px width)

### 4. Register the Demo Component

Add to the `styleDemos` mapping at the bottom of `StyleDemo.tsx`:

```typescript
const styleDemos: Record<string, React.ComponentType<StyleDemoProps>> = {
  // ... existing entries
  'your-style-slug': YourStyleDemo,
};
```

**Important:** The key must match the `slug` in `styles.ts` exactly.

### 5. Create the Preview Thumbnail

Thumbnails are 1280x800 PNG images showing the style demo.

**Manual method:**
1. Run the dev server: `npm run dev -- --host`
2. Open the style page in a browser at 1280px width
3. Take a screenshot of the demo area (crop out site navigation)
4. Save to `public/previews/{slug}.png`

**Scripted method (using browser automation):**
```bash
# Resize browser to 1280x900
# Navigate to http://localhost:5173/style/{slug}
# Screenshot and crop to 1280x800
# Save to public/previews/{slug}.png

# Example using ffmpeg to crop:
ffmpeg -y -i screenshot.jpg \
  -vf "crop=1280:550:0:40,scale=1280:800" \
  public/previews/{slug}.png
```

### 6. Verify and Test

```bash
# Build to check for errors
npm run build

# Test locally
npm run dev

# Check:
# - Style appears in correct category on homepage
# - Style page loads without errors
# - Demo looks good on desktop (1280px+) and mobile (375px)
# - Preview thumbnail displays on homepage
# - Navigation dropdown includes the new style
```

### 7. Commit and Push

```bash
git add -A
git commit -m "feat: add {Style Name} style demo"
git push
```

Amplify auto-deploys from the `main` branch.

---

## Updating an Existing Style

1. Find the style in `src/data/styles.ts` and update its properties
2. Find the demo component in `src/components/StyleDemo.tsx` and modify
3. If visual changes are significant, regenerate the thumbnail
4. Build, test, commit, push

---

## Common Issues

### "Style Not Found" page
- The slug in `styles.ts` doesn't match the key in `styleDemos`
- Check for typos in both files

### Preview image not showing
- File must be named `{slug}.png` exactly (not `.jpg`)
- File must be in `public/previews/`
- Check the slug matches

### Mobile layout broken
- Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
- Stack elements vertically on mobile: `flex-col sm:flex-row`
- Make tables scrollable: `overflow-x-auto`
- Test at 375px viewport width

### Build fails
- Check for TypeScript errors in the demo component
- Ensure all imports are correct
- Run `npm run build` locally before pushing

---

## Style Categories Reference

When adding styles, use the appropriate category:

| Category ID | Name | Use For |
|-------------|------|---------|
| `modern-saas` | Modern SaaS | Clean software products |
| `retro-nostalgia` | Retro & Nostalgia | Vintage aesthetics |
| `gaming-entertainment` | Gaming & Entertainment | Bold, immersive |
| `accessibility-ethical` | Accessibility & Ethical | Inclusive design |
| `experimental-artistic` | Experimental & Artistic | Creative styles |
| `nature-organic` | Nature & Organic | Nature-inspired |
| `motion-interactive` | Motion & Interactive | Animation-driven |
| `futuristic-tech` | Futuristic & Tech | Tech-forward |
| `landing-page` | Landing Page Styles | Conversion patterns |
| `bi-analytics` | BI & Analytics | Dashboards |

To add a new category, update the `categories` array in `src/data/styles.ts`.
