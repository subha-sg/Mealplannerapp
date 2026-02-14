# 🔄 How to Switch Between V1 and V2

## Quick Answer

There are **3 ways** to switch versions:

---

## ✨ Method 1: URL Hash (Simplest - No Code Changes)

### How it Works:
Just change the URL in your browser!

### URLs:
- **Version 2.0 (Current):** `http://localhost:5173/` or `http://localhost:5173/#v2`
- **Version 1.0 (Original):** `http://localhost:5173/#v1`

### Steps:
1. **To see V2 (current):**
   - Just visit: `http://localhost:5173/`
   - Or add: `#v2` to the URL

2. **To see V1 (original):**
   - Add `#v1` to your URL: `http://localhost:5173/#v1`
   - Press Enter

**BUT WAIT:** This only works if you activate the router first! See "Activating the Router" below.

---

## 🚀 Method 2: Version Switcher UI (User-Friendly)

### Add a Visual Button

I've created a `VersionSwitcher` component for you!

### Location:
`/components/VersionSwitcher.tsx` ✅ (just created)

### To Use:

#### Step 1: First, activate the router (see below)

#### Step 2: Add to your app header
```tsx
// In App.tsx (or App-v2.tsx after router setup)
import { VersionSwitcher } from './components/VersionSwitcher';

// Add to your header/navbar
<div className="flex items-center gap-3">
  {/* Your other buttons */}
  <VersionSwitcher />
</div>
```

### What You'll See:
```
┌─────────────────────┐
│ 🔄 Version [2.0]    │ ← Click this
└─────────────────────┘
        ↓
┌─────────────────────────────┐
│ Version 2.0       [Current] │
│ Compact teal theme          │
├─────────────────────────────┤
│ Version 1.0                 │
│ Original pink theme         │
└─────────────────────────────┘
```

---

## ⚙️ Method 3: Manual File Swapping (Old School)

### Rename files to switch:

**To use V1:**
```bash
mv App.tsx App-temp.tsx
mv App-v1.tsx App.tsx
mv App-temp.tsx App-v2.tsx
```

**To use V2:**
```bash
mv App.tsx App-temp.tsx
mv App-v2.tsx App.tsx
mv App-temp.tsx App-v1.tsx
```

**Not recommended** - Use router instead!

---

## 🎯 ACTIVATING THE ROUTER (REQUIRED FOR METHODS 1 & 2)

You have `SimpleRouter.tsx` ready to use. Here's how to activate it:

### Step-by-Step:

#### 1. Backup Current V2 Code
```bash
# Rename your current App.tsx to App-v2.tsx
mv App.tsx App-v2.tsx
```

#### 2. If You Have V1 Code Saved Somewhere:
```bash
# Copy your original V1 code into App-v1.tsx
# (Replace the placeholder)
```

**OR** if you don't have V1 anymore, `App-v1.tsx` will show a nice "V1 not available" message.

#### 3. Activate the Router
```bash
# Make SimpleRouter.tsx your new App.tsx
mv SimpleRouter.tsx App.tsx
```

#### 4. Update the Router File

Open `App.tsx` (the newly renamed SimpleRouter) and uncomment this line:

```tsx
// Find this line (around line 5):
// import AppV1 from './App-v1'; // Your V1 backup code

// Uncomment it:
import AppV1 from './App-v1'; // Your V1 backup code
```

Then change this line (around line 88):

```tsx
// Find:
return version === 'v1' ? <AppV1Placeholder /> : <AppV2 />;

// Change to:
return version === 'v1' ? <AppV1 /> : <AppV2 />;
```

#### 5. Test It!
```bash
npm run dev
```

Then visit:
- `http://localhost:5173/` → Should show V2 (teal theme)
- `http://localhost:5173/#v1` → Should show V1 (pink theme or placeholder)

---

## 📁 File Structure After Setup

```
Before:
├── App.tsx              ← V2 code
├── App-v1.tsx           ← Placeholder
└── SimpleRouter.tsx     ← Router (unused)

After:
├── App.tsx              ← Router (was SimpleRouter.tsx)
├── App-v1.tsx           ← Your V1 code (or placeholder)
└── App-v2.tsx           ← V2 code (was App.tsx)
```

---

## 🎨 Visual Guide

### Current State (No Router):
```
Your URL: http://localhost:5173/
Shows: Version 2.0 only
```

### After Activating Router:
```
http://localhost:5173/      → Version 2.0 (Teal/Emerald)
http://localhost:5173/#v1   → Version 1.0 (Pink/Purple)
http://localhost:5173/#v2   → Version 2.0 (Teal/Emerald)
```

---

## 🔧 Quick Setup Commands

### Full Setup (Copy-Paste):

```bash
# Step 1: Backup V2
cp App.tsx App-v2.tsx

# Step 2: Activate Router
cp SimpleRouter.tsx App.tsx

# Step 3: Done! Now edit App.tsx to enable V1 (see above)
```

---

## 💡 Do I Need Version Switching?

### You NEED it if:
- ❓ You want users to access both old and new designs
- ❓ You want to compare versions side-by-side
- ❓ You need to support users who prefer the old design

### You DON'T need it if:
- ✅ V2 is your only version going forward
- ✅ Everyone will use the new design
- ✅ You're deprecating V1 completely

**Current Setup:** V2 only (no router active)

---

## 🆘 Troubleshooting

### Problem: Both URLs show the same version

**Solution:**
- Router not activated yet
- Follow "Activating the Router" steps above

### Problem: V1 shows "placeholder" message

**Solution:**
- Normal! You haven't copied your V1 code into `App-v1.tsx` yet
- If you don't have V1 code, you can keep just V2

### Problem: Errors after activating router

**Solution:**
```bash
# Make sure imports are correct in App.tsx
import AppV2 from './App-v2';
import AppV1 from './App-v1';

# Not:
import AppV2 from './App';  # ❌ Wrong
```

---

## ✅ Testing Checklist

After setup:

- [ ] Visit `/` - shows V2 (teal theme)
- [ ] Visit `/#v1` - shows V1 (or placeholder)
- [ ] Visit `/#v2` - shows V2 (teal theme)
- [ ] Change hash in URL - page switches versions
- [ ] No console errors
- [ ] Both versions work independently

---

## 🎯 Recommended Approach

### For Most Users:

**Option 1: Keep V2 Only (Current State)**
- ✅ No setup needed
- ✅ Simpler
- ✅ One version to maintain

**Option 2: Enable Router for Both Versions**
- ✅ User choice
- ✅ Easy switching
- ✅ 5 minutes to set up

### My Recommendation:

If you still have V1 code → **Enable router**
If you only want V2 → **Keep current setup**

---

## 📞 Quick Reference

| What | URL | Code File |
|------|-----|-----------|
| Current V2 | `/` | `App.tsx` |
| V1 (after router) | `/#v1` | `App-v1.tsx` |
| V2 (after router) | `/` or `/#v2` | `App-v2.tsx` |
| Router | N/A | `SimpleRouter.tsx` |

---

## 🎉 Summary

### To Switch Versions Right Now:

1. **Activate Router:**
   ```bash
   cp App.tsx App-v2.tsx
   cp SimpleRouter.tsx App.tsx
   ```

2. **Edit App.tsx** (uncomment V1 import and use)

3. **Use URLs:**
   - V2: `http://localhost:5173/`
   - V1: `http://localhost:5173/#v1`

4. **Optional: Add UI button**
   ```tsx
   import { VersionSwitcher } from './components/VersionSwitcher';
   <VersionSwitcher />
   ```

**That's it!** 🚀

---

## 📚 More Info

See: `/VERSION-ROUTING-GUIDE.md` for advanced routing options
