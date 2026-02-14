# Flask API Structure for Meal Planner

This document describes the API endpoints needed to integrate this React app with a Python Flask backend.

## API Endpoints

### 1. Get All Recipes
```
GET /api/recipes
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Grilled Chicken Salad",
    "protein": 35,
    "calories": 320,
    "fiber": 5,
    "iron": 3,
    "ingredients": ["chicken breast", "mixed greens", "cherry tomatoes", "cucumber", "olive oil", "lemon"],
    "prepTime": 20,
    "tags": ["high protein", "low carb", "healthy"],
    "isVegetarian": false,
    "cuisineType": "American",
    "isUnhealthy": false
  }
]
```

### 2. Search Recipes
```
GET /api/recipes/search?q=<search_term>
```

**Query Parameters:**
- `q` (string): Search term for recipe name, ingredients, or tags

**Response:** Same as Get All Recipes

### 3. Filter Recipes
```
POST /api/recipes/filter
```

**Request Body:**
```json
{
  "dietary": {
    "vegetarian": false,
    "nonVegetarian": false
  },
  "nutrients": {
    "highProtein": false,
    "highFiber": false,
    "highIron": false
  },
  "prepTime": {
    "quick": false,
    "moderate": false,
    "long": false
  },
  "ingredientCount": {
    "few": false,
    "moderate": false,
    "many": false
  }
}
```

**Response:** Array of filtered recipes

### 4. Get User Wishlist
```
GET /api/wishlist
```

**Headers:**
- `Authorization: Bearer <token>`

**Response:**
```json
{
  "recipeIds": [1, 3, 5, 7]
}
```

### 5. Add to Wishlist
```
POST /api/wishlist/<recipe_id>
```

**Headers:**
- `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "message": "Recipe added to wishlist"
}
```

### 6. Remove from Wishlist
```
DELETE /api/wishlist/<recipe_id>
```

**Headers:**
- `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "message": "Recipe removed from wishlist"
}
```

### 7. Get Weekly Meal Plan
```
GET /api/weekly-meals
```

**Headers:**
- `Authorization: Bearer <token>`

**Response:**
```json
{
  "Monday": [1, 3],
  "Tuesday": [2],
  "Wednesday": [5, 7],
  "Thursday": [],
  "Friday": [4],
  "Saturday": [8, 9],
  "Sunday": [6]
}
```

### 8. Add Recipe to Weekly Meal Plan
```
POST /api/weekly-meals
```

**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "recipeId": 1,
  "day": "Monday"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Recipe added to Monday"
}
```

### 9. Remove Recipe from Weekly Meal Plan
```
DELETE /api/weekly-meals
```

**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "recipeId": 1,
  "day": "Monday"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Recipe removed from Monday"
}
```

## Sample Flask Implementation

```python
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Mock data - replace with database
recipes = [
    {
        "id": 1,
        "name": "Grilled Chicken Salad",
        "protein": 35,
        "calories": 320,
        "fiber": 5,
        "iron": 3,
        "ingredients": ["chicken breast", "mixed greens", "cherry tomatoes", "cucumber", "olive oil", "lemon"],
        "prepTime": 20,
        "tags": ["high protein", "low carb", "healthy"],
        "isVegetarian": False,
        "cuisineType": "American",
        "isUnhealthy": False
    }
    # ... more recipes
]

@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    return jsonify(recipes)

@app.route('/api/recipes/search', methods=['GET'])
def search_recipes():
    query = request.args.get('q', '').lower()
    filtered = [r for r in recipes if 
        query in r['name'].lower() or 
        any(query in ing.lower() for ing in r['ingredients']) or
        any(query in tag.lower() for tag in r['tags'])
    ]
    return jsonify(filtered)

@app.route('/api/recipes/filter', methods=['POST'])
def filter_recipes():
    filters = request.json
    results = recipes
    
    # Apply dietary filters
    if filters['dietary']['vegetarian'] or filters['dietary']['nonVegetarian']:
        if not (filters['dietary']['vegetarian'] and filters['dietary']['nonVegetarian']):
            results = [r for r in results if 
                (filters['dietary']['vegetarian'] and r['isVegetarian']) or
                (filters['dietary']['nonVegetarian'] and not r['isVegetarian'])
            ]
    
    # Apply nutrient filters
    if filters['nutrients']['highProtein']:
        results = [r for r in results if r['protein'] >= 25]
    if filters['nutrients']['highFiber']:
        results = [r for r in results if r['fiber'] >= 8]
    if filters['nutrients']['highIron']:
        results = [r for r in results if r['iron'] >= 4]
    
    # Apply prep time filters
    if any(filters['prepTime'].values()):
        results = [r for r in results if 
            (filters['prepTime']['quick'] and r['prepTime'] <= 15) or
            (filters['prepTime']['moderate'] and 15 < r['prepTime'] <= 30) or
            (filters['prepTime']['long'] and r['prepTime'] > 30)
        ]
    
    # Apply ingredient count filters
    if any(filters['ingredientCount'].values()):
        results = [r for r in results if 
            (filters['ingredientCount']['few'] and len(r['ingredients']) <= 5) or
            (filters['ingredientCount']['moderate'] and 6 <= len(r['ingredients']) <= 8) or
            (filters['ingredientCount']['many'] and len(r['ingredients']) > 8)
        ]
    
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

## Integration with React

To connect the React app to Flask, update the API calls:

```typescript
// src/api/recipes.ts
const API_BASE_URL = 'http://localhost:5000/api';

export async function fetchRecipes() {
  const response = await fetch(`${API_BASE_URL}/recipes`);
  return response.json();
}

export async function searchRecipes(query: string) {
  const response = await fetch(`${API_BASE_URL}/recipes/search?q=${encodeURIComponent(query)}`);
  return response.json();
}

export async function filterRecipes(filters: FilterState) {
  const response = await fetch(`${API_BASE_URL}/recipes/filter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filters)
  });
  return response.json();
}
```

## Database Schema (SQLAlchemy)

```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    protein = db.Column(db.Integer, nullable=False)
    calories = db.Column(db.Integer, nullable=False)
    fiber = db.Column(db.Integer, nullable=False)
    iron = db.Column(db.Integer, nullable=False)
    ingredients = db.Column(db.JSON, nullable=False)
    prep_time = db.Column(db.Integer, nullable=False)
    tags = db.Column(db.JSON, nullable=False)
    is_vegetarian = db.Column(db.Boolean, default=False)
    cuisine_type = db.Column(db.String(50), nullable=False)
    is_unhealthy = db.Column(db.Boolean, default=False)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    wishlist = db.relationship('Wishlist', backref='user', lazy=True)
    weekly_meals = db.relationship('WeeklyMeal', backref='user', lazy=True)

class Wishlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'), nullable=False)

class WeeklyMeal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'), nullable=False)
    day = db.Column(db.String(20), nullable=False)
```
