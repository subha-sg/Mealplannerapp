# Builder.io Integration Guide for Shakti Aahaar

## Overview
This guide explains how to integrate the Shakti Aahaar meal planner with Builder.io for content management and visual page building.

---

## Why Builder.io?

Builder.io allows:
- **Non-technical content updates** without code changes
- **A/B testing** of different layouts and content
- **Visual page building** with drag-and-drop
- **Personalization** based on user demographics
- **SEO-friendly** content management

---

## 1. Installation

```bash
npm install @builder.io/react
npm install @builder.io/sdk
```

---

## 2. Environment Setup

Add to your `.env` file:

```env
VITE_BUILDER_API_KEY=your_builder_io_api_key_here
```

---

## 3. Builder.io Configuration

### Create Builder.io Custom Components

#### `/components/builder/RecipeListBuilder.tsx`

```typescript
import { Builder } from '@builder.io/react';
import { RecipeTable } from '../RecipeTable';
import { useState, useEffect } from 'react';
import { recipeService } from '../../services/recipeService';
import { Recipe } from '../../data/types';

interface RecipeListBuilderProps {
  lifeStage?: string;
  limit?: number;
  showFilters?: boolean;
}

export function RecipeListBuilder({ 
  lifeStage = 'all',
  limit = 10,
  showFilters = true 
}: RecipeListBuilderProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecipes();
  }, [lifeStage, limit]);

  const loadRecipes = async () => {
    try {
      setLoading(true);
      const data = await recipeService.loadFromAPI();
      
      // Filter by life stage if specified
      let filtered = data;
      if (lifeStage !== 'all') {
        filtered = data.filter(r => {
          switch(lifeStage) {
            case 'pregnancy': return r.isPregnancyFriendly;
            case 'perimenopause': return r.isPerimenopauseFriendly;
            case 'menopause': return r.isMenopauseFriendly;
            default: return true;
          }
        });
      }
      
      setRecipes(filtered.slice(0, limit));
    } catch (error) {
      console.error('Error loading recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading recipes...</div>;

  return (
    <div>
      <RecipeTable 
        recipes={recipes}
        wishlist={new Set()}
        onToggleWishlist={() => {}}
        selectedRecipeId={null}
        onRecipeSelect={() => {}}
        onAddToWeeklyMeal={() => {}}
        isInWeeklyMeal={() => false}
      />
    </div>
  );
}

// Register with Builder.io
Builder.registerComponent(RecipeListBuilder, {
  name: 'Recipe List',
  inputs: [
    {
      name: 'lifeStage',
      type: 'string',
      enum: ['all', 'pregnancy', 'perimenopause', 'menopause'],
      defaultValue: 'all',
      helperText: 'Filter recipes by life stage'
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 10,
      helperText: 'Number of recipes to show'
    },
    {
      name: 'showFilters',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Show filter panel'
    }
  ]
});
```

#### `/components/builder/HealthAwarenessCard.tsx`

```typescript
import { Builder } from '@builder.io/react';
import { Baby, Heart, Activity } from 'lucide-react';

interface HealthAwarenessCardProps {
  title: string;
  description: string;
  iconType: 'pregnancy' | 'perimenopause' | 'menopause';
  backgroundColor: string;
  linkUrl?: string;
}

export function HealthAwarenessCard({
  title,
  description,
  iconType,
  backgroundColor,
  linkUrl
}: HealthAwarenessCardProps) {
  const icons = {
    pregnancy: Baby,
    perimenopause: Heart,
    menopause: Activity
  };
  
  const Icon = icons[iconType];

  return (
    <a 
      href={linkUrl || '#'}
      className={`block p-6 rounded-xl ${backgroundColor} hover:shadow-lg transition-all`}
    >
      <div className="flex items-start gap-4">
        <div className="bg-white/20 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-white mb-2">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}

Builder.registerComponent(HealthAwarenessCard, {
  name: 'Health Awareness Card',
  inputs: [
    {
      name: 'title',
      type: 'string',
      required: true,
      defaultValue: 'Health Title'
    },
    {
      name: 'description',
      type: 'longText',
      required: true,
      defaultValue: 'Health description here'
    },
    {
      name: 'iconType',
      type: 'string',
      enum: ['pregnancy', 'perimenopause', 'menopause'],
      defaultValue: 'pregnancy'
    },
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: 'bg-pink-500'
    },
    {
      name: 'linkUrl',
      type: 'string',
      helperText: 'URL to link to'
    }
  ]
});
```

---

## 4. Main Builder Integration

### `/components/BuilderPage.tsx`

```typescript
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from 'react';

// Initialize Builder
builder.init(import.meta.env.VITE_BUILDER_API_KEY);

interface BuilderPageProps {
  model?: string;
}

export function BuilderPage({ model = 'page' }: BuilderPageProps) {
  const isPreviewingInBuilder = useIsPreviewing();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const content = await builder
        .get(model, {
          url: window.location.pathname,
        })
        .promise();

      setContent(content);
    } catch (error) {
      console.error('Error loading Builder content:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  // Show content from Builder.io
  return (
    <BuilderComponent 
      model={model} 
      content={content}
    />
  );
}
```

---

## 5. Register All Custom Components

### `/builder-registry.ts`

```typescript
import { Builder } from '@builder.io/react';

// Import all custom components
import { RecipeListBuilder } from './components/builder/RecipeListBuilder';
import { HealthAwarenessCard } from './components/builder/HealthAwarenessCard';
import { FilterPanel } from './components/FilterPanel';

// Initialize Builder
builder.init(import.meta.env.VITE_BUILDER_API_KEY);

// Components are already registered in their individual files
// This file just ensures they're all imported

export { RecipeListBuilder, HealthAwarenessCard, FilterPanel };
```

---

## 6. Update App.tsx for Builder Integration

```typescript
import { builder } from '@builder.io/react';
import { BuilderPage } from './components/BuilderPage';
import './builder-registry'; // Import to register components

// Initialize
builder.init(import.meta.env.VITE_BUILDER_API_KEY);

function App() {
  const useBui lderIO = import.meta.env.VITE_USE_BUILDER === 'true';

  if (useBuilderIO) {
    return <BuilderPage />;
  }

  // Regular app code...
  return (
    // Your existing App component
  );
}
```

---

## 7. Builder.io Models Setup

### In Builder.io Dashboard, create these models:

#### 1. **Page Model** (Default)
Used for: Landing pages, about pages, health guides

#### 2. **Recipe Collection Model**
Fields:
- Title (text)
- Description (long text)
- Life Stage (select: all, pregnancy, perimenopause, menopause)
- Recipes (list of recipe IDs)
- Featured (boolean)

#### 3. **Health Article Model**
Fields:
- Title (text)
- Author (text)
- Content (rich text)
- Life Stage Tags (list)
- Published Date (date)
- Featured Image (image)

---

## 8. Data Binding with Builder.io

### Example: Dynamic Recipe Content

```typescript
// In your Builder.io page, bind data:
{
  "data": {
    "pregnancyRecipes": {
      "@type": "@builder.io/core:Reference",
      "model": "recipe-collection",
      "id": "..."
    }
  }
}
```

### Access in component:

```typescript
export function DynamicRecipeSection({ data }: any) {
  const recipes = data?.pregnancyRecipes;
  
  return (
    <div>
      <h2>{recipes.title}</h2>
      <RecipeListBuilder 
        lifeStage={recipes.lifeStage}
        limit={recipes.recipes.length}
      />
    </div>
  );
}
```

---

## 9. SEO with Builder.io

Builder.io automatically handles:
- Meta tags
- Open Graph tags
- Structured data
- Server-side rendering (SSR) compatible

### Example SEO settings in Builder.io:

```json
{
  "title": "Pregnancy Nutrition Guide | Shakti Aahaar",
  "description": "Complete nutrition guide for Indian women during pregnancy and postpartum",
  "image": "https://yourdomain.com/pregnancy-guide.jpg",
  "keywords": ["pregnancy nutrition", "Indian diet", "postpartum recovery"]
}
```

---

## 10. A/B Testing with Builder.io

### Example: Test different hero sections

```typescript
// Builder.io automatically creates variants
// Track in your analytics:

builder.track('heroVariantView', {
  variant: 'A',
  page: 'home'
});
```

---

## 11. Personalization

### Target content by user attributes:

In Builder.io dashboard:
- Target by: Device (mobile/desktop)
- Target by: URL parameters
- Target by: Custom attributes (life stage, dietary preference)

```typescript
// Set user attributes
builder.setUserAttributes({
  lifeStage: 'pregnancy',
  dietaryPreference: 'vegetarian',
  language: 'en'
});
```

---

## 12. Preview Mode for Editors

```typescript
import { useIsPreviewing } from '@builder.io/react';

export function RecipePreview() {
  const isPreviewing = useIsPreviewing();
  
  if (isPreviewing) {
    return <div>📝 Preview Mode Active</div>;
  }
  
  // Regular component
}
```

---

## 13. Deployment Best Practices

### Production Checklist:

- [ ] Set up Builder.io production workspace
- [ ] Configure CDN for Builder.io assets
- [ ] Enable caching for Builder.io content
- [ ] Set up webhooks for content updates
- [ ] Configure staging/production environments
- [ ] Train content team on Builder.io editor
- [ ] Create content templates
- [ ] Set up analytics tracking
- [ ] Configure SEO defaults
- [ ] Test mobile responsiveness

---

## 14. Content Management Workflow

### For Content Editors:

1. **Log into Builder.io**
2. **Select Model** (Page, Recipe Collection, etc.)
3. **Create/Edit Content**
4. **Drag Custom Components** onto page
5. **Configure Component Props**
6. **Preview** on different devices
7. **Publish** when ready

### Custom Components Available:
- Recipe List
- Health Awareness Card
- Filter Panel
- Weekly Meal Planner
- Nutrition Calculator

---

## 15. API Integration with Builder.io

### Fetch dynamic data in Builder components:

```typescript
Builder.registerComponent(DynamicRecipes, {
  name: 'Dynamic Recipes',
  inputs: [
    {
      name: 'apiEndpoint',
      type: 'string',
      defaultValue: '/api/recipes'
    }
  ],
  async resolveData(props) {
    const response = await fetch(props.apiEndpoint);
    const data = await response.json();
    return { recipes: data };
  }
});
```

---

## 16. Performance Optimization

### Builder.io Performance Tips:

```typescript
// Lazy load Builder content
import { lazy } from 'react';

const BuilderPage = lazy(() => import('./components/BuilderPage'));

// Use static rendering where possible
builder.get('page', {
  url: window.location.pathname,
  cacheSeconds: 60, // Cache for 1 minute
});
```

---

## 17. Analytics Integration

```typescript
import { builder } from '@builder.io/react';

// Track page views
builder.track('pageView', {
  url: window.location.pathname,
  userAgent: navigator.userAgent
});

// Track interactions
builder.track('recipeViewed', {
  recipeId: 123,
  recipeName: 'Palak Paneer'
});
```

---

## 18. Multi-language Support

```typescript
// Set locale
builder.setUserAttributes({
  locale: 'hi-IN' // Hindi - India
});

// In Builder.io, create field variants:
{
  "title": {
    "en": "Pregnancy Nutrition",
    "hi": "गर्भावस्था पोषण"
  }
}
```

---

## Cost Estimate

### Builder.io Pricing (Approximate):

- **Free Tier**: 1,000 content requests/month
- **Starter**: $29/month - 10,000 requests
- **Growth**: $99/month - 100,000 requests
- **Enterprise**: Custom pricing

---

## Support Resources

- Builder.io Docs: https://www.builder.io/c/docs
- React SDK: https://github.com/BuilderIO/builder/tree/main/packages/react
- Examples: https://github.com/BuilderIO/builder/tree/main/examples
- Community: https://forum.builder.io/

---

*Builder.io empowers your content team to manage Shakti Aahaar's content without developer intervention, while maintaining full control over custom functionality.*
