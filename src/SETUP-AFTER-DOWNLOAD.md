# 🚀 NaturaNest - Setup After Download

## What to do after downloading files manually

### ✅ Step 1: Verify Folder Structure

Your folder should look like this:

```
naturanest/
├── App.tsx                          ✅ Must have
├── package.json                     ✅ Must have
├── vercel.json                      ✅ Must have
├── components/
│   ├── FilterPanel.tsx             ✅ Must have
│   ├── RecipeTable.tsx             ✅ Must have
│   ├── RecipeCard.tsx              ✅ Must have
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/
│       ├── button.tsx              ✅ Must have
│       ├── card.tsx                ✅ Must have
│       ├── badge.tsx               ✅ Must have
│       ├── select.tsx              ✅ Must have
│       ├── checkbox.tsx            ✅ Must have
│       └── ... (other UI components)
├── data/
│   ├── mockRecipes.json            ✅ Must have
│   └── types.ts                    ✅ Must have
├── services/
│   └── recipeService.ts            ✅ Must have
└── styles/
    └── globals.css                 ✅ Must have
```

### ✅ Step 2: Install Dependencies

Open terminal in the `naturanest` folder and run:

```bash
npm install
```

**Expected time:** 2-5 minutes

**If you get errors:**
- Ensure you have Node.js 18+ installed: `node --version`
- Delete `node_modules` and `package-lock.json` if they exist, then try again
- Make sure package.json is valid JSON (no syntax errors)

### ✅ Step 3: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### ✅ Step 4: Open in Browser

Navigate to: `http://localhost:5173`

**You should see:**
- 🌿 NaturaNest header with tagline
- Filter panel on the left
- Recipe table with sample recipes
- Health awareness cards
- Meal planner tab

---

## 🐛 Common Issues & Fixes

### Issue 1: "Cannot find module" errors

**Error:**
```
Error: Cannot find module './components/ui/table'
```

**Fix:**
- Download the missing component from Figma Make
- Place it in the correct folder (components/ui/)
- Ensure exact filename matches (case-sensitive)

### Issue 2: Blank page / White screen

**Fix:**
1. Open browser console (F12)
2. Check for errors
3. Most common: missing UI component - download it
4. Check that App.tsx was downloaded completely

### Issue 3: Styling looks broken

**Fix:**
- Ensure `styles/globals.css` is downloaded
- Check that Tailwind classes are working
- Verify vercel.json is present (contains Tailwind config reference)

### Issue 4: TypeScript errors

**Fix:**
- These are often warnings, app may still run
- Ensure data/types.ts is downloaded
- Check that all .tsx files have proper imports

### Issue 5: Data not showing

**Fix:**
- Verify data/mockRecipes.json is downloaded and valid JSON
- Check services/recipeService.ts exists
- Open browser console to see if there are errors loading data

---

## 🎨 Customization Quick Start

### Change App Name/Branding
Edit `App.tsx` line ~150:
```tsx
<h1>Your App Name</h1>
```

### Modify Recipe Data
Edit `data/mockRecipes.json`:
- Add new recipes
- Modify existing ones
- Follow the exact structure

### Adjust Filters
Edit `components/FilterPanel.tsx`:
- Add new filter categories
- Modify existing filter options

### Change Colors/Theme
Edit `styles/globals.css`:
- Modify CSS variables for colors
- Adjust Tailwind theme tokens

---

## 📱 Testing Responsive Design

### Desktop View
- Resize browser window to > 1024px
- Filters should be on left sidebar

### Tablet View  
- Resize browser window to 768px - 1024px
- Filters should be collapsible

### Mobile View
- Resize browser window to < 768px
- Filters should be in a drawer/sheet
- Table should be scrollable horizontally

---

## 🚀 Deployment Options

### Option 1: Deploy to Vercel (Recommended)

**Quick Deploy:**
1. Create account at vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel`
4. Follow prompts

**GitHub Integration:**
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Auto-deploys on every push

See `VERCEL-DEPLOYMENT-GUIDE.md` for detailed steps.

### Option 2: Deploy to Netlify

```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Option 3: Deploy to GitHub Pages

Edit vercel.json to add base path, then:
```bash
npm run build
# Deploy 'dist' folder to gh-pages branch
```

---

## 🧪 Running Tests

Currently no tests are configured. To add tests:

```bash
npm install --save-dev vitest @testing-library/react
```

Then create test files.

---

## 📊 Build for Production

```bash
npm run build
```

**Output:** Creates `dist/` folder with optimized production files

**Preview production build:**
```bash
npm run preview
```

---

## 🔄 Making Changes

### Hot Reload
- Save any .tsx file
- Browser auto-refreshes
- See changes instantly

### Adding New Components
1. Create file in `components/`
2. Export as named export
3. Import in App.tsx or other components

### Modifying Data
- Edit `data/mockRecipes.json`
- Changes reflect on save (hot reload)

---

## 📚 Next Steps

After everything is working:

1. ✅ **Customize recipe data** - Add your own recipes
2. ✅ **Adjust branding** - Change colors, logo, name
3. ✅ **Add features** - Refer to component files for examples
4. ✅ **Deploy** - Use Vercel for easy hosting
5. ✅ **Share** - Get feedback from users

---

## 💾 Backup Your Work

### Using Git (Recommended)

```bash
git init
git add .
git commit -m "Initial NaturaNest setup"
git remote add origin https://github.com/yourusername/naturanest
git push -u origin main
```

### Manual Backup
- Copy entire `naturanest` folder
- Store in cloud (Google Drive, Dropbox, etc.)
- Keep multiple versions

---

## 🆘 Need Help?

### Check Documentation Files
- `README.md` - Overview
- `DEPLOY-NOW.md` - Quick deploy guide  
- `VERCEL-DEPLOYMENT-GUIDE.md` - Detailed deployment
- `WOMENS-HEALTH-GUIDE.md` - Feature explanations

### Debug Checklist
- [ ] All essential files downloaded?
- [ ] Folder structure matches exactly?
- [ ] `npm install` ran successfully?
- [ ] Browser console shows errors?
- [ ] All imports have correct paths?

---

## ✨ Success Checklist

Before considering setup complete:

- [ ] App runs without errors: `npm run dev`
- [ ] Recipes display in table
- [ ] Filters work (try selecting one)
- [ ] Health cards are clickable
- [ ] Meal planner tab switches
- [ ] Page is responsive (resize browser)
- [ ] Can build for production: `npm run build`

---

## 🎉 You're Done!

If all checklist items are complete, congratulations! 

Your NaturaNest app is now:
- ✅ Running locally
- ✅ Ready for development  
- ✅ Ready for deployment
- ✅ Ready for customization

**Happy coding! 🌿**
