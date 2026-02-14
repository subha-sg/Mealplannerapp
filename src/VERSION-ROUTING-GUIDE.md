# NaturaNest Version Routing Guide 🔄

## Overview

This guide explains how to differentiate between Version 1.0 and Version 2.0 URLs and how to implement version routing.

---

## 📍 URL Structure

### Version 2.0 (Current/Default)
- **URL:** `/` or `/v2` or `/v2.0`
- **File:** `App.tsx` (current file)
- **Theme:** Teal/Emerald compact view
- **Features:** Compact list, 20 recipes/page, PDF download

### Version 1.0 (Original)
- **URL:** `/v1` or `/v1.0`  
- **File:** `App-v1.tsx` (backup file)
- **Theme:** Pink/Purple table view
- **Features:** Original table layout, 10 recipes/page

---

## 🚀 Implementation Options

### Option 1: React Router (Recommended)

Create a router file that loads different versions:

```tsx
// router.tsx
import { createBrowserRouter } from 'react-router-dom';
import AppV2 from './App';
import AppV1 from './App-v1';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppV2 />,
  },
  {
    path: '/v2',
    element: <AppV2 />,
  },
  {
    path: '/v1',
    element: <AppV1 />,
  },
]);

export default router;
```

Then in your `main.tsx` or `index.tsx`:

```tsx
import { RouterProvider } from 'react-router-dom';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

---

### Option 2: Hash Router (Simple)

Use hash routing without server configuration:

```tsx
// App-Router.tsx
import { useEffect, useState } from 'react';
import AppV2 from './App';
import AppV1 from './App-v1';

export default function AppRouter() {
  const [version, setVersion] = useState('v2');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#v1' || hash === '#/v1') {
      setVersion('v1');
    } else {
      setVersion('v2');
    }

    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash === '#v1' || newHash === '#/v1') {
        setVersion('v1');
      } else {
        setVersion('v2');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return version === 'v1' ? <AppV1 /> : <AppV2 />;
}
```

**URLs:**
- V2: `https://yoursite.com/` or `https://yoursite.com/#v2`
- V1: `https://yoursite.com/#v1`

---

### Option 3: Query Parameter

Use URL query parameters:

```tsx
// App-Router.tsx
import { useEffect, useState } from 'react';
import AppV2 from './App';
import AppV1 from './App-v1';

export default function AppRouter() {
  const [version, setVersion] = useState('v2');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const versionParam = params.get('version');
    if (versionParam === 'v1' || versionParam === '1.0') {
      setVersion('v1');
    } else {
      setVersion('v2');
    }
  }, []);

  return version === 'v1' ? <AppV1 /> : <AppV2 />;
}
```

**URLs:**
- V2: `https://yoursite.com/` or `https://yoursite.com/?version=v2`
- V1: `https://yoursite.com/?version=v1`

---

### Option 4: Subdomain

Use subdomains for different versions:

```
v1.naturanest.com  → Points to V1 deployment
v2.naturanest.com  → Points to V2 deployment
naturanest.com     → Points to V2 (latest)
```

**Implementation:**
- Deploy V1 separately to v1 subdomain
- Deploy V2 to main domain and v2 subdomain
- Configure DNS records for each

---

### Option 5: Path Prefix (Server Config)

Use path prefixes with server routing:

```nginx
# nginx.conf
location /v1 {
    alias /var/www/naturanest/v1;
    try_files $uri /v1/index.html;
}

location /v2 {
    alias /var/www/naturanest/v2;
    try_files $uri /v2/index.html;
}

location / {
    root /var/www/naturanest/v2;
    try_files $uri /index.html;
}
```

---

## 🎨 Version Switcher Component

Add a version switcher UI to let users toggle between versions:

```tsx
// VersionSwitcher.tsx
import { Button } from './components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu';
import { Badge } from './components/ui/badge';

export function VersionSwitcher() {
  const currentVersion = window.location.hash.includes('v1') ? 'v1' : 'v2';

  const switchToV1 = () => {
    window.location.hash = '#v1';
    window.location.reload();
  };

  const switchToV2 = () => {
    window.location.hash = '#v2';
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          Version {currentVersion === 'v1' ? '1.0' : '2.0'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={switchToV2}>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span>Version 2.0</span>
              {currentVersion === 'v2' && (
                <Badge className="bg-emerald-500">Current</Badge>
              )}
            </div>
            <span className="text-xs text-slate-500">Compact teal theme</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={switchToV1}>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span>Version 1.0</span>
              {currentVersion === 'v1' && (
                <Badge className="bg-pink-500">Current</Badge>
              )}
            </div>
            <span className="text-xs text-slate-500">Original pink theme</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

---

## 📦 File Structure

```
/
├── App.tsx              ← Version 2.0 (default)
├── App-v1.tsx           ← Version 1.0 (backup)
├── router.tsx           ← Version router (if using Option 1)
├── VersionSwitcher.tsx  ← UI component
└── ...
```

---

## 🚢 Deployment Configurations

### Vercel

```json
// vercel.json
{
  "routes": [
    { "src": "/v1", "dest": "/v1.html" },
    { "src": "/v2", "dest": "/index.html" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### Netlify

```toml
# netlify.toml
[[redirects]]
  from = "/v1"
  to = "/v1.html"
  status = 200

[[redirects]]
  from = "/v2"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

```
# Not ideal for client-side routing
# Use hash routing (Option 2) instead
```

---

## 🎯 Recommended Approach

### For Most Users: **Option 2 (Hash Router)**

**Pros:**
- ✅ No server configuration needed
- ✅ Works with any hosting (including GitHub Pages)
- ✅ Simple to implement
- ✅ No additional dependencies

**Cons:**
- ❌ URLs have `#` in them
- ❌ Less SEO-friendly

**Implementation:**
1. Rename current `App.tsx` to `App-v2.tsx`
2. Copy your original V1 code to `App-v1.tsx`
3. Create `App.tsx` as the router (use Option 2 code above)
4. Add VersionSwitcher component to header

---

### For Production: **Option 1 (React Router)**

**Pros:**
- ✅ Clean URLs
- ✅ Better SEO
- ✅ Standard routing
- ✅ More features (nested routes, etc.)

**Cons:**
- ❌ Requires server configuration
- ❌ Additional dependency

**Installation:**
```bash
npm install react-router-dom
```

---

## 📝 URL Examples

| Method | V1 URL | V2 URL |
|--------|--------|--------|
| Hash Router | `/#v1` | `/` or `/#v2` |
| React Router | `/v1` | `/` or `/v2` |
| Query Param | `/?version=v1` | `/` or `/?version=v2` |
| Subdomain | `v1.site.com` | `site.com` or `v2.site.com` |

---

## 🔄 Migration Path

### Step 1: Backup V1
```bash
cp App.tsx App-v1.tsx
```

### Step 2: Implement Router
Choose one of the 5 options above

### Step 3: Test Both Versions
- Test V1 URL loads old design
- Test V2 URL loads new design
- Test all features work in both

### Step 4: Update Links
Update any internal links to use the new routing

### Step 5: Communicate to Users
- Add version switcher to UI
- Announce new version
- Provide feedback mechanism

---

## 🎨 Visual Comparison

### Version 1.0
```
https://yoursite.com/#v1

┌─────────────────────────────────┐
│ 💗 NaturaNest v1.0             │
│ Pink/Purple Theme               │
│                                 │
│ ┌─────────────────────────────┐│
│ │ Recipe Name │ Prot │ Cal    ││
│ │─────────────┼──────┼────────││
│ │ Recipe 1    │ 25g  │ 320    ││
│ └─────────────────────────────┘│
└─────────────────────────────────┘
```

### Version 2.0
```
https://yoursite.com/

┌─────────────────────────────────┐
│ 🍃 NaturaNest v2.0             │
│ Teal/Emerald Theme              │
│                                 │
│ Recipe Name [V] Cal Prot ♡ +   │
│ Recipe Name [V] Cal Prot ♡ +   │
│ Recipe Name     Cal Prot ♡ +   │
│ ... (20 recipes visible)        │
└─────────────────────────────────┘
```

---

## 🔍 SEO Considerations

### Canonical Tags

Add canonical tags to each version:

```html
<!-- In V1 -->
<link rel="canonical" href="https://yoursite.com/v1" />

<!-- In V2 -->
<link rel="canonical" href="https://yoursite.com/" />
```

### Meta Tags

```html
<!-- V1 -->
<meta name="robots" content="noindex, follow" />
<meta name="description" content="NaturaNest Version 1.0 - Original design" />

<!-- V2 -->
<meta name="robots" content="index, follow" />
<meta name="description" content="NaturaNest - Smart Nutrition for Indian Families" />
```

---

## 📊 Analytics Tracking

Track which version users are using:

```tsx
// Track version views
useEffect(() => {
  const version = window.location.hash.includes('v1') ? 'v1' : 'v2';
  
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'version_view', {
      version: version,
    });
  }

  // Custom analytics
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({ event: 'version_view', version }),
  });
}, []);
```

---

## ✅ Checklist

Before deploying version routing:

- [ ] Backup original V1 code to `App-v1.tsx`
- [ ] Test V1 loads correctly with old URL
- [ ] Test V2 loads correctly with new URL
- [ ] Add version switcher UI component
- [ ] Configure server routing (if using Option 1)
- [ ] Update documentation with new URLs
- [ ] Add analytics tracking
- [ ] Test all features in both versions
- [ ] Update any hardcoded links
- [ ] Announce version changes to users

---

## 🎯 Quick Start (Hash Router)

1. **Install:** No dependencies needed

2. **Create Router:**
```tsx
// In App.tsx, wrap with hash router logic
const hash = window.location.hash;
const showV1 = hash === '#v1';
```

3. **Usage:**
- V1: `https://yoursite.com/#v1`
- V2: `https://yoursite.com/` (default)

4. **Done!** No server config needed.

---

## 💡 Pro Tips

1. **Default to Latest:** Always make V2 the default (`/`)
2. **Keep V1 Accessible:** Some users may prefer the original
3. **Add Version Badge:** Show which version is active
4. **Collect Feedback:** Let users report issues per version
5. **Sunset Plan:** Eventually deprecate V1 with notice period

---

**Version routing is now ready!** 🎉 Users can access both versions of NaturaNest.
