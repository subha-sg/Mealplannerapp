# Quick Testing Guide for NaturaNest V2.2 Features

## 🧪 Feature Testing Checklist

### 1. Test Gluten-Free Filter
**Steps:**
1. Load the app
2. Open Filters panel (desktop sidebar or mobile "Filters" button)
3. Look for "Gluten Free" checkbox in Dietary Preference section (should have a wheat-off icon)
4. Check the "Gluten Free" option
5. ✅ **Expected**: Only recipes with `isGlutenFree: true` should appear

**Note**: Currently, you'll need to add `"isGlutenFree": true` to some recipes in `/data/mockRecipes.json` to see results.

---

### 2. Test Ingredient List in Meal Planning
**Steps:**
1. Click "Weekly Plan" button (top right, calendar icon)
2. Browse recipes and add a few to any day (click "+ Add to Plan")
3. In the Weekly Plan dialog, click on a day tab that has meals
4. Scroll down below the daily nutrition summary
5. ✅ **Expected**: See a cyan "Shopping List" card with all unique ingredients
6. ✅ **Expected**: If an ingredient appears in multiple recipes, it shows "Used 2x" badge

---

### 3. Test PDF Download with Ingredients
**Steps:**
1. Add several meals to different days of the week
2. In the Weekly Plan dialog, click "Download Plan" button (top right)
3. Open the downloaded .txt file
4. ✅ **Expected**: Each day section includes:
   - Meal names with nutrition
   - A "Shopping List (X ingredients)" section
   - Checkbox format (☐) for each ingredient
   - Daily and weekly summaries

---

### 4. Test Daily Meal Notification
**Steps:**
1. Note today's day of the week (e.g., Thursday)
2. Add at least one meal to today's plan
3. Look at the top of the page (below INDB banner)
4. ✅ **Expected**: Green success card saying "Thursday's Meal Plan Ready!"
5. ✅ **Expected**: Shows meal count and "View Today's Plan" button
6. Click the "View Today's Plan" button
7. ✅ **Expected**: Weekly Plan dialog opens

**Test without meals:**
1. Remove all meals from today
2. ✅ **Expected**: Amber reminder card saying "Plan Your Meals for Thursday"
3. ✅ **Expected**: "Start Planning" button appears

---

### 5. Test Subscription Banner
**Steps:**
1. Look for the subscription banner (below daily notification, above hero section)
2. ✅ **Expected**: Beautiful gradient banner (amber/yellow) with Crown icon
3. Click "View Plans" button
4. ✅ **Expected**: Dialog opens showing two plan cards:
   - **Weekly Plan (Free)**: Current plan details
   - **Monthly Plan (₹299/month)**: Premium features with "Upgrade Now" button
5. ✅ **Expected**: Special offer badge shows "20% off" with code NATURA20

---

### 6. Test Gluten-Free Info Tab
**Steps:**
1. Look at the top of the main content area
2. ✅ **Expected**: Two tabs: "Recipes" and "Gluten-Free Info"
3. Click "Gluten-Free Info" tab
4. ✅ **Expected**: Comprehensive information page appears with:
   - Header card explaining gluten-free diet
   - Who needs it section (with color-coded badges)
   - Foods to avoid (red theme) vs enjoy (green theme)
   - Indian gluten-free options (teal theme)
   - Tips card
   - Warning/disclaimer card
5. Click "Recipes" tab
6. ✅ **Expected**: Returns to recipe browsing view

---

### 7. Test Tab Navigation & Filters
**Steps:**
1. Apply some filters (e.g., Vegetarian, High Protein)
2. Switch to "Gluten-Free Info" tab
3. Switch back to "Recipes" tab
4. ✅ **Expected**: Filters are still active
5. ✅ **Expected**: Recipe results match the filters

---

## 🎨 Visual Checks

### Mobile Responsiveness
- [ ] Daily notification displays well on mobile
- [ ] Subscription banner stacks properly on small screens
- [ ] Tab switcher is centered and readable
- [ ] Ingredient list cards are scrollable on mobile
- [ ] Gluten-free info content is readable on mobile

### Desktop Layout
- [ ] All new components align with existing design
- [ ] Tabs are properly sized and positioned
- [ ] Filter sidebar shows gluten-free option
- [ ] Weekly plan dialog fits well with ingredient lists

---

## 🔧 Quick Fixes if Needed

### If Gluten-Free Filter Shows No Results:
Add this to a few recipes in `/data/mockRecipes.json`:
```json
{
  "id": 1,
  "name": "Example Recipe",
  "isGlutenFree": true,
  ...other fields
}
```

### If Daily Notification Doesn't Show:
Check that you have at least one meal added to any day of the week.

### If PDF Download Doesn't Include Ingredients:
Verify you're clicking the "Download Plan" button in the Weekly Plan dialog (not an old version).

### If Tabs Don't Appear:
Check browser console for errors. Ensure all imports are correct.

---

## 💻 Developer Testing

### Console Checks:
```javascript
// Check current day detection
console.log(getCurrentDayName()) // Should match today's day

// Check subscription state
console.log(isSubscribed) // Should be false by default

// Check active tab
console.log(activeTab) // Should be "recipes" or "glutenFree"
```

### State Inspection:
- `filters.dietary.glutenFree` - Should be boolean
- `currentDayMeals` - Should have dayName, mealIds, count, hasMeals
- `weeklyMeals[getCurrentDayName()]` - Should show today's meals

---

## ✅ Success Criteria

**All features working if:**
1. ✅ Gluten-free filter successfully filters recipes
2. ✅ Ingredient lists appear in daily meal plans
3. ✅ PDF includes shopping lists for each day
4. ✅ Daily notification changes based on today's meals
5. ✅ Subscription banner displays with working dialog
6. ✅ Gluten-Free Info tab shows educational content
7. ✅ Tab switching works smoothly
8. ✅ All components are mobile-responsive
9. ✅ No console errors
10. ✅ All UI elements follow the teal/emerald theme

---

## 📸 Screenshot Checklist

Capture these for documentation:
- [ ] Daily notification (with meals)
- [ ] Daily notification (without meals)
- [ ] Subscription banner
- [ ] Tab navigation
- [ ] Gluten-free filter in panel
- [ ] Ingredient list in meal plan
- [ ] PDF download content
- [ ] Gluten-Free Info tab content
- [ ] Subscription plan comparison dialog

---

**Happy Testing! 🎉**

All features are designed to work seamlessly together while maintaining the beautiful teal/emerald design system of NaturaNest v2.0.
