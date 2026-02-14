# 🚀 Switch Versions - Super Quick Guide

## ONE-COMMAND SETUP ⚡

### On Mac/Linux:
```bash
bash activate-version-switching.sh
```

### On Windows:
```bash
activate-version-switching.bat
```

**That's it!** Version switching is now active. 🎉

---

## AFTER RUNNING THE SCRIPT

### Test It:

1. **Start your app:**
   ```bash
   npm run dev
   ```

2. **Visit these URLs:**
   - `http://localhost:5173/` → **V2** (Teal/Emerald compact theme)
   - `http://localhost:5173/#v1` → **V1** (Pink/Purple or placeholder)

3. **Switch by changing the URL hash:**
   - Type `#v1` at the end of URL → Press Enter → V1 loads
   - Remove `#v1` or type `#v2` → Press Enter → V2 loads

---

## MANUAL SETUP (IF SCRIPT DOESN'T WORK)

### 3 Simple Steps:

#### Step 1: Backup V2
```bash
cp App.tsx App-v2.tsx
```

#### Step 2: Activate Router
```bash
cp SimpleRouter.tsx App.tsx
```

#### Step 3: Edit App.tsx

Open `App.tsx` and find these lines:

**Line ~5:**
```tsx
// BEFORE:
// import AppV1 from './App-v1';

// AFTER (uncomment):
import AppV1 from './App-v1';
```

**Line ~88:**
```tsx
// BEFORE:
return version === 'v1' ? <AppV1Placeholder /> : <AppV2 />;

// AFTER:
return version === 'v1' ? <AppV1 /> : <AppV2 />;
```

Save and done! ✅

---

## WHAT HAPPENS

### Before (Current):
```
Your app: http://localhost:5173/
Shows: V2 only (teal theme)
```

### After (With Router):
```
http://localhost:5173/      → V2 (teal theme)
http://localhost:5173/#v1   → V1 (pink theme)
http://localhost:5173/#v2   → V2 (teal theme)
```

---

## FILE STRUCTURE CHANGES

```
BEFORE:
├── App.tsx ..................... Your V2 code

AFTER:
├── App.tsx ..................... Router (auto-switches)
├── App-v2.tsx .................. Your V2 code (backed up)
├── App-v1.tsx .................. V1 code or placeholder
```

---

## ADD UI BUTTON (OPTIONAL)

Want a button to switch versions?

### Step 1: Add to your App
```tsx
// In App-v2.tsx, at the top
import { VersionSwitcher } from './components/VersionSwitcher';

// In your header/navbar
<VersionSwitcher />
```

### What You'll Get:
A dropdown button showing current version with one-click switching!

```
┌─────────────────────┐
│ 🔄 Version [2.0] ▼  │ ← Click
└─────────────────────┘
```

---

## QUICK VISUAL GUIDE

### Version 2.0 (Teal/Emerald)
```
URL: /  or  /#v2

┌─────────────────────────────────┐
│ 🌿 NaturaNest                   │
│ Compact List View               │
│ ┌─────────────────────────────┐ │
│ │ Recipe 1    [V] Cal Pro ♡ + │ │
│ │ Recipe 2        Cal Pro ♡ + │ │
│ │ Recipe 3    [V] Cal Pro ♡ + │ │
│ │ ... (20 recipes)            │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### Version 1.0 (Pink/Purple)
```
URL: /#v1

┌─────────────────────────────────┐
│ 💗 NaturaNest                   │
│ Table View                      │
│ ┌─────────────────────────────┐ │
│ │ Name      │ Protein │ Cal   │ │
│ │───────────┼─────────┼───────│ │
│ │ Recipe 1  │ 25g     │ 320   │ │
│ │ Recipe 2  │ 18g     │ 280   │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

---

## TROUBLESHOOTING

### Both URLs show same version?
→ Router not activated. Run the script or do manual setup.

### Errors after activation?
→ Check that `App-v2.tsx` exists and has your V2 code.

### V1 shows "placeholder" message?
→ Normal! You can paste your original V1 code into `App-v1.tsx`.

### Want to go back to V2 only?
```bash
cp App-v2.tsx App.tsx
```

---

## CHECKLIST

After setup, verify:

- [ ] Visit `/` → Shows V2 (teal)
- [ ] Visit `/#v1` → Shows V1 (pink or placeholder)
- [ ] Change hash in URL → Page switches
- [ ] No console errors
- [ ] App runs: `npm run dev`

---

## QUICK COMMANDS

```bash
# Activate version switching
bash activate-version-switching.sh   # Mac/Linux
activate-version-switching.bat       # Windows

# Start dev server
npm run dev

# Test URLs
open http://localhost:5173/      # V2
open http://localhost:5173/#v1   # V1
```

---

## THAT'S IT! 🎉

**You now have version switching!**

Change the URL hash to switch between old and new designs instantly.

---

## MORE INFO

- 📖 Full Guide: `/HOW-TO-SWITCH-VERSIONS.md`
- 🔧 Advanced: `/VERSION-ROUTING-GUIDE.md`
- 🎨 UI Button: `/components/VersionSwitcher.tsx`

---

**Current Status:** ✅ Ready to activate!
**Time to Setup:** ⏱️ 30 seconds
**Difficulty:** 🟢 Easy
