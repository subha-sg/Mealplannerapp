# Recipe Import Guide for NaturaNest

## 📝 How to Add Your 160+ Recipes

### Recipe Format Required

Each recipe needs these fields:

```json
{
  "id": 1,
  "name": "Recipe Name",
  "protein": 20,              // grams
  "calories": 350,            // kcal
  "fiber": 6,                 // grams
  "iron": 5,                  // mg
  "calcium": 500,             // mg
  "fat": 10,                  // grams (optional)
  "ingredients": [
    "ingredient 1",
    "ingredient 2",
    "ingredient 3"
  ],
  "prepTime": 25,             // minutes (or null)
  "tags": [
    "vegetarian",
    "indian",
    "calcium rich"
  ],
  "isVegetarian": true,       // true/false
  "isGlutenFree": false,      // true/false (optional)
  "cuisineType": "Indian",    // Indian, Chinese, Continental, etc.
  "isUnhealthy": false,       // true/false
  "isPregnancyFriendly": true,
  "isDiabeticFriendly": true,
  "isWomenOver50Friendly": true,
  "isPerimenopauseFriendly": true,
  "isMenopauseFriendly": true,
  "mealType": ["Lunch", "Dinner"]  // Breakfast, Lunch, Dinner, Snacks
}
```

---

## 📊 Option 1: Provide Excel/CSV File

If you have your recipes in Excel or CSV, provide them with these columns:

| Column Name | Type | Example |
|-------------|------|---------|
| name | Text | Palak Paneer |
| protein | Number | 20 |
| calories | Number | 350 |
| fiber | Number | 6 |
| iron | Number | 5 |
| calcium | Number | 500 |
| fat | Number | 10 |
| ingredients | Text (comma-separated) | paneer, spinach, onion, tomatoes |
| prepTime | Number | 25 |
| tags | Text (comma-separated) | vegetarian, indian, calcium rich |
| isVegetarian | Boolean | TRUE/FALSE or 1/0 |
| isGlutenFree | Boolean | TRUE/FALSE or 1/0 |
| cuisineType | Text | Indian |
| isUnhealthy | Boolean | TRUE/FALSE or 1/0 |
| isPregnancyFriendly | Boolean | TRUE/FALSE or 1/0 |
| isDiabeticFriendly | Boolean | TRUE/FALSE or 1/0 |
| isWomenOver50Friendly | Boolean | TRUE/FALSE or 1/0 |
| isPerimenopauseFriendly | Boolean | TRUE/FALSE or 1/0 |
| isMenopauseFriendly | Boolean | TRUE/FALSE or 1/0 |
| mealType | Text (pipe-separated) | Lunch\|Dinner |

**I can convert this to JSON for you!**

---

## 📋 Option 2: Provide JSON Directly

If you already have JSON, just provide the array:

```json
[
  { recipe 1 },
  { recipe 2 },
  ...
  { recipe 160 }
]
```

---

## 🔧 Option 3: Provide Text Format

You can provide recipes in a simple text format like:

```
Recipe: Palak Paneer with Roti
Protein: 20g
Calories: 350
Fiber: 6g
Iron: 5mg
Calcium: 500mg
Ingredients: paneer, spinach, onion, tomatoes, whole wheat roti, ghee, cumin, garam masala
Prep Time: 25 minutes
Vegetarian: Yes
Gluten Free: No
Cuisine: Indian
Pregnancy Friendly: Yes
Diabetic Friendly: Yes
Women Over 50: Yes
Meal Type: Lunch, Dinner
---
Recipe: Next Recipe Name
...
```

**I can convert this to the proper format!**

---

## 🎯 Quick Import Template (Copy & Fill)

Save this as `recipes-template.csv` and fill it in Excel:

```csv
name,protein,calories,fiber,iron,calcium,fat,ingredients,prepTime,tags,isVegetarian,isGlutenFree,cuisineType,isUnhealthy,isPregnancyFriendly,isDiabeticFriendly,isWomenOver50Friendly,isPerimenopauseFriendly,isMenopauseFriendly,mealType
"Palak Paneer",20,350,6,5,500,10,"paneer,spinach,onion,tomatoes,roti,ghee",25,"vegetarian,indian,calcium rich",TRUE,FALSE,"Indian",FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,"Lunch|Dinner"
```

---

## 🚀 After You Provide Recipes

I will:
1. ✅ Convert them to proper JSON format
2. ✅ Validate all required fields
3. ✅ Auto-assign IDs (1-160+)
4. ✅ Update `/data/mockRecipes.json`
5. ✅ Verify the app loads all recipes correctly
6. ✅ Test filters work with new data
7. ✅ Ready for deployment!

---

## 💡 Tips for Your Recipe Data

### Nutrition Values (Reference Ranges)
- **Protein:** 5-40g per serving
- **Calories:** 100-600 kcal per serving
- **Fiber:** 2-15g per serving
- **Iron:** 1-10mg per serving
- **Calcium:** 50-1000mg per serving
- **Fat:** 2-30g per serving

### Health Flags Guide
- **isPregnancyFriendly:** Avoid raw foods, high mercury fish, unpasteurized items
- **isDiabeticFriendly:** Low sugar, low glycemic index
- **isWomenOver50Friendly:** Focus on bone health, heart health
- **isPerimenopauseFriendly:** Soy, whole grains, low saturated fat
- **isMenopauseFriendly:** Similar to perimenopause + phytoestrogens

### Meal Type Guidelines
- **Breakfast:** 200-400 calories
- **Lunch:** 400-600 calories
- **Dinner:** 400-600 calories
- **Snacks:** 100-250 calories

### Indian Cuisine Types
- North Indian
- South Indian
- Bengali
- Gujarati
- Maharashtrian
- Punjabi
- Kerala
- Tamil
- Hyderabadi
- Fusion

---

## 📤 How to Send Your Recipes

**Just reply with:**
1. Your recipe file (CSV, Excel, JSON, or text)
2. Or paste the data directly in your message
3. Or provide a link to a Google Sheet/Excel file

I'll handle the rest! 🚀

---

## ✅ Sample Recipe (Well-Formatted)

Here's a perfect example for reference:

```json
{
  "id": 1,
  "name": "Moong Dal Khichdi with Ghee",
  "protein": 12,
  "calories": 280,
  "fiber": 8,
  "iron": 4,
  "calcium": 120,
  "fat": 8,
  "ingredients": [
    "moong dal",
    "rice",
    "ghee",
    "cumin seeds",
    "turmeric",
    "ginger",
    "green chilies",
    "salt"
  ],
  "prepTime": 30,
  "tags": [
    "comfort food",
    "easy to digest",
    "protein rich",
    "fiber rich",
    "traditional"
  ],
  "isVegetarian": true,
  "isGlutenFree": true,
  "cuisineType": "North Indian",
  "isUnhealthy": false,
  "isPregnancyFriendly": true,
  "isDiabeticFriendly": true,
  "isWomenOver50Friendly": true,
  "isPerimenopauseFriendly": true,
  "isMenopauseFriendly": true,
  "mealType": ["Lunch", "Dinner"]
}
```

---

**Ready when you are!** Just provide your 160+ recipes in any format and I'll integrate them immediately. 🌿
