/**
 * NaturaNest Version 2.0 - Modern Nutrition Discovery Platform
 * Fresh redesign with teal/emerald theme and compact list view
 * 
 * URL Routing:
 * - / or /v2 - Version 2.0 (Compact Teal/Emerald theme)
 * - /v1 - Version 1.0 (Original Pink/Purple theme)
 */

import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  Calendar,
  Utensils,
  ChefHat,
  Heart,
  Sparkles,
  Baby,
  Activity,
  Flame,
  Leaf,
  BookOpen,
  TrendingUp,
  Award,
  Clock,
  Users,
  Star,
  Grid3x3,
  List,
  Download,
} from "lucide-react";
import { Input } from "./components/ui/input";
import { RecipeCard } from "./components/RecipeCard";
import { RecipeListCompact } from "./components/RecipeListCompact";
import {
  FilterPanel,
  FilterState,
} from "./components/FilterPanel";
import type { Recipe } from "./data/types";
import recipeData from "./data/mockRecipes.json";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/ui/pagination";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./components/ui/sheet";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import { GlutenFreeInfo } from "./components/GlutenFreeInfo";
import { SubscriptionBanner } from "./components/SubscriptionBanner";
import { DailyMealNotification } from "./components/DailyMealNotification";
import { WeeklyIngredientsList } from "./components/WeeklyIngredientsList";

// Load recipes from JSON file
const allRecipes: Recipe[] = recipeData as Recipe[];

// Backup inline recipes (in case JSON doesn't load)
const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Grilled Chicken Breast",
    protein: 31,
    calories: 165,
    fiber: 0,
    iron: 0.9,
    calcium: 15,
    fat: 3.6,
    ingredients: ["chicken breast", "olive oil", "garlic", "lemon", "herbs"],
    prepTime: 20,
    tags: ["high protein", "low carb", "keto"],
    isVegetarian: false,
    cuisineType: "Continental",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: true,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Lunch", "Dinner"],
  },
  {
    id: 2,
    name: "Quinoa Salad Bowl",
    protein: 14,
    calories: 320,
    fiber: 8,
    iron: 4.2,
    calcium: 60,
    fat: 12.5,
    ingredients: ["quinoa", "chickpeas", "cucumber", "tomatoes", "feta cheese", "olive oil"],
    prepTime: 25,
    tags: ["vegetarian", "high fiber", "protein", "iron rich"],
    isVegetarian: true,
    cuisineType: "Mediterranean",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: true,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Lunch", "Dinner"],
  },
  {
    id: 3,
    name: "Greek Yogurt with Berries",
    protein: 20,
    calories: 250,
    fiber: 4,
    iron: 0.5,
    calcium: 350,
    fat: 8.2,
    ingredients: ["greek yogurt", "blueberries", "strawberries", "honey", "almonds"],
    prepTime: 5,
    tags: ["high protein", "calcium rich", "breakfast", "quick"],
    isVegetarian: true,
    cuisineType: "Greek",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: false,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Breakfast", "Snacks"],
  },
  {
    id: 4,
    name: "Turkey & Avocado Wrap",
    protein: 28,
    calories: 380,
    fiber: 7,
    iron: 3,
    calcium: 100,
    fat: 14.3,
    ingredients: ["turkey breast", "avocado", "whole wheat tortilla", "lettuce", "tomato", "mustard"],
    prepTime: 10,
    tags: ["high protein", "lunch", "quick"],
    isVegetarian: false,
    cuisineType: "American",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: true,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Lunch"],
  },
  {
    id: 5,
    name: "Lentil Curry",
    protein: 18,
    calories: 340,
    fiber: 12,
    iron: 6,
    calcium: 70,
    fat: 10.2,
    ingredients: ["lentils", "coconut milk", "curry powder", "onion", "tomatoes", "spinach"],
    prepTime: 35,
    tags: ["vegetarian", "high fiber", "protein", "iron rich"],
    isVegetarian: true,
    cuisineType: "Indian",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: true,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Lunch", "Dinner"],
  },
  {
    id: 6,
    name: "Oatmeal with Nuts",
    protein: 15,
    calories: 280,
    fiber: 8,
    iron: 3.5,
    calcium: 120,
    fat: 9.8,
    ingredients: ["oats", "almonds", "walnuts", "cinnamon", "banana", "milk"],
    prepTime: 10,
    tags: ["high fiber", "breakfast", "heart healthy"],
    isVegetarian: true,
    cuisineType: "Continental",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: true,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Breakfast"],
  },
  {
    id: 7,
    name: "Salmon with Vegetables",
    protein: 34,
    calories: 420,
    fiber: 5,
    iron: 1.8,
    calcium: 90,
    fat: 18.5,
    ingredients: ["salmon fillet", "broccoli", "carrots", "olive oil", "lemon", "garlic"],
    prepTime: 30,
    tags: ["high protein", "omega-3", "dinner"],
    isVegetarian: false,
    cuisineType: "Continental",
    isUnhealthy: false,
    isPregnancyFriendly: false,
    isDiabeticFriendly: false,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Dinner"],
  },
  {
    id: 8,
    name: "Poke Bowl",
    protein: 26,
    calories: 400,
    fat: 15.7,
    fiber: 5,
    iron: 3,
    calcium: 50,
    ingredients: ["tuna", "rice", "cucumber", "avocado", "edamame", "seaweed", "soy sauce"],
    prepTime: 15,
    tags: ["high protein", "healthy", "seafood"],
    isVegetarian: false,
    cuisineType: "Hawaiian",
    isUnhealthy: false,
    isPregnancyFriendly: false,
    isDiabeticFriendly: false,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Lunch", "Dinner"],
  },
  {
    id: 9,
    name: "Chickpea Salad",
    protein: 15,
    calories: 290,
    fiber: 10,
    iron: 5,
    calcium: 80,
    ingredients: ["chickpeas", "cucumber", "tomatoes", "red onion", "parsley", "lemon", "olive oil"],
    prepTime: 10,
    tags: ["vegetarian", "vegan", "protein", "iron rich"],
    isVegetarian: true,
    cuisineType: "Mediterranean",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: true,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Lunch", "Snacks"],
  },
  {
    id: 10,
    name: "Protein Smoothie Bowl",
    protein: 30,
    calories: 350,
    fiber: 8,
    iron: 3,
    calcium: 300,
    ingredients: ["protein powder", "banana", "berries", "almond milk", "peanut butter", "chia seeds"],
    prepTime: 5,
    tags: ["high protein", "breakfast", "quick", "calcium rich"],
    isVegetarian: true,
    cuisineType: "American",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: false,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Breakfast", "Snacks"],
  },
  {
    id: 11,
    name: "Egg White Omelet",
    protein: 25,
    calories: 180,
    fiber: 2,
    iron: 1.5,
    calcium: 80,
    ingredients: ["egg whites", "spinach", "mushrooms", "tomatoes", "cheese"],
    prepTime: 10,
    tags: ["high protein", "low calorie", "breakfast"],
    isVegetarian: true,
    cuisineType: "Continental",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: true,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Breakfast"],
  },
  {
    id: 12,
    name: "Tofu Stir-Fry",
    protein: 22,
    calories: 320,
    fiber: 6,
    iron: 4.5,
    calcium: 200,
    ingredients: ["tofu", "bell peppers", "broccoli", "soy sauce", "ginger", "garlic"],
    prepTime: 20,
    tags: ["vegetarian", "vegan", "protein", "calcium rich"],
    isVegetarian: true,
    cuisineType: "Asian",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: true,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Lunch", "Dinner"],
  },
  {
    id: 13,
    name: "Cottage Cheese Parfait",
    protein: 28,
    calories: 260,
    fiber: 4,
    iron: 0.8,
    calcium: 350,
    ingredients: ["cottage cheese", "granola", "berries", "honey"],
    prepTime: 5,
    tags: ["high protein", "calcium rich", "breakfast"],
    isVegetarian: true,
    cuisineType: "American",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: true,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Breakfast"],
  },
  {
    id: 14,
    name: "Black Bean Burger",
    protein: 20,
    calories: 350,
    fiber: 12,
    iron: 4,
    calcium: 90,
    ingredients: ["black beans", "quinoa", "oats", "spices", "whole wheat bun"],
    prepTime: 25,
    tags: ["vegetarian", "high fiber", "protein"],
    isVegetarian: true,
    cuisineType: "American",
    isUnhealthy: false,
    isPregnancyFriendly: true,
    isDiabeticFriendly: true,
    isWomenOver50Friendly: true,
    isPerimenopauseFriendly: true,
    isMenopauseFriendly: true,
    mealType: ["Lunch", "Dinner"],
  },
  {
    id: 15,
    name: "Beef Tacos",
    protein: 24,
    calories: 450,
    fiber: 6,
    iron: 3.5,
    calcium: 120,
    fat: 20.1,
    ingredients: ["ground beef", "taco shells", "lettuce", "cheese", "salsa", "sour cream"],
    prepTime: 20,
    tags: ["high protein", "dinner"],
    isVegetarian: false,
    cuisineType: "Mexican",
    isUnhealthy: false,
    isPregnancyFriendly: false,
    isDiabeticFriendly: false,
    isWomenOver50Friendly: false,
    isPerimenopauseFriendly: false,
    isMenopauseFriendly: false,
    mealType: ["Lunch", "Dinner"],
  },
];

// Use JSON recipes if available, otherwise fall back to inline mockRecipes  
const recipes: Recipe[] = allRecipes.length > 0 ? allRecipes : mockRecipes;

// PDF Download functionality
const downloadWeeklyPlanPDF = () => {
  // Calculate total weekly nutrition
  const weeklyTotals = {
    calories: 0,
    protein: 0,
    fat: 0,
    fiber: 0,
    iron: 0,
    calcium: 0,
    mealCount: 0,
  };

  // Build meal plan content
  let pdfContent = `NATURANEST - WEEKLY MEAL PLAN\n`;
  pdfContent += `Generated on: ${new Date().toLocaleDateString()}\n`;
  pdfContent += `\n${'='.repeat(80)}\n\n`;

  DAYS_OF_WEEK.forEach((day) => {
    const dayMeals = weeklyMeals[day];
    const allDayRecipeIds = [
      ...dayMeals.breakfast,
      ...dayMeals.lunch,
      ...dayMeals.dinner,
      ...dayMeals.snacks,
    ];

    if (allDayRecipeIds.length > 0) {
      pdfContent += `${day.toUpperCase()}\n${'-'.repeat(80)}\n`;

      MEAL_TYPES.forEach((mealType) => {
        const mealKey = mealType.toLowerCase() as keyof MealTypeSlot;
        const mealRecipeIds = dayMeals[mealKey];
        
        if (mealRecipeIds.length > 0) {
          pdfContent += `\n  ${mealType}:\n`;
          mealRecipeIds.forEach((recipeId) => {
            const recipe = recipes.find((r) => r.id === recipeId);
            if (recipe) {
              pdfContent += `    • ${recipe.name}\n`;
              pdfContent += `      Calories: ${recipe.calories} | Protein: ${recipe.protein.toFixed(1)}g | `;
              pdfContent += `Fiber: ${recipe.fiber.toFixed(1)}g | Iron: ${recipe.iron.toFixed(1)}mg\n`;
              
              // Add to weekly totals
              weeklyTotals.calories += recipe.calories;
              weeklyTotals.protein += recipe.protein;
              weeklyTotals.fat += recipe.fat || 0;
              weeklyTotals.fiber += recipe.fiber;
              weeklyTotals.iron += recipe.iron;
              weeklyTotals.calcium += recipe.calcium;
              weeklyTotals.mealCount += 1;
            }
          });
        }
      });

      // Daily summary
      const dailyTotals = allDayRecipeIds.reduce((totals, recipeId) => {
        const recipe = recipes.find((r) => r.id === recipeId);
        if (recipe) {
          return {
            calories: totals.calories + recipe.calories,
            protein: totals.protein + recipe.protein,
            fiber: totals.fiber + recipe.fiber,
          };
        }
        return totals;
      }, { calories: 0, protein: 0, fiber: 0 });

      pdfContent += `\n  Daily Total: ${dailyTotals.calories.toFixed(0)} cal | `;
      pdfContent += `${dailyTotals.protein.toFixed(1)}g protein | `;
      pdfContent += `${dailyTotals.fiber.toFixed(1)}g fiber\n`;
      pdfContent += `\n`;
    }
  });

  // Weekly summary
  pdfContent += `\n${'='.repeat(80)}\n`;
  pdfContent += `WEEKLY SUMMARY\n`;
  pdfContent += `${'='.repeat(80)}\n\n`;
  pdfContent += `Total Meals Planned: ${weeklyTotals.mealCount}\n`;
  pdfContent += `Total Calories: ${weeklyTotals.calories.toFixed(0)}\n`;
  pdfContent += `Total Protein: ${weeklyTotals.protein.toFixed(1)}g\n`;
  pdfContent += `Total Fat: ${weeklyTotals.fat.toFixed(1)}g\n`;
  pdfContent += `Total Fiber: ${weeklyTotals.fiber.toFixed(1)}g\n`;
  pdfContent += `Total Iron: ${weeklyTotals.iron.toFixed(1)}mg\n`;
  pdfContent += `Total Calcium: ${weeklyTotals.calcium.toFixed(0)}mg\n\n`;
  
  if (weeklyTotals.mealCount > 0) {
    pdfContent += `Daily Averages (${weeklyTotals.mealCount} meals across 7 days):\n`;
    pdfContent += `  Calories: ${(weeklyTotals.calories / 7).toFixed(0)} per day\n`;
    pdfContent += `  Protein: ${(weeklyTotals.protein / 7).toFixed(1)}g per day\n`;
    pdfContent += `  Fiber: ${(weeklyTotals.fiber / 7).toFixed(1)}g per day\n`;
  }

  pdfContent += `\n${'='.repeat(80)}\n`;
  pdfContent += `\nData Source: Indian Nutrient Databank (INDB)\n`;
  pdfContent += `Visit: https://www.ifct2017.com/\n\n`;
  pdfContent += `Generated by NaturaNest v2.0 - Smart Nutrition for Indian Families\n`;

  // Create and download the file
  const blob = new Blob([pdfContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `NaturaNest-Meal-Plan-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Recipes to use in the application
const finalRecipes = recipes;

type MealTypeSlot = {
  breakfast: number[];
  lunch: number[];
  dinner: number[];
  snacks: number[];
};

type WeeklyMeals = {
  [key: string]: MealTypeSlot;
};

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snacks"];

const emptyMealSlot = (): MealTypeSlot => ({
  breakfast: [],
  lunch: [],
  dinner: [],
  snacks: [],
});

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    dietary: { vegetarian: false, nonVegetarian: false, glutenFree: false },
    nutrients: { highProtein: false, highFiber: false, highIron: false },
    healthFocus: {
      ironRich: false,
      calciumRich: false,
      pregnancyDiet: false,
      diabeticFriendly: false,
      women40Plus: false,
    },
    prepTime: { under15: false, under30: false, under60: false },
    mealType: { breakfast: false, lunch: false, dinner: false, snacks: false },
  });
  const [lifeStageFilter, setLifeStageFilter] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [weeklyMeals, setWeeklyMeals] = useState<WeeklyMeals>(
    DAYS_OF_WEEK.reduce((acc, day) => {
      acc[day] = emptyMealSlot();
      return acc;
    }, {} as WeeklyMeals)
  );
  const [viewMode, setViewMode] = useState<"compact" | "grid" | "cards">("compact");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeTab, setActiveTab] = useState<"recipes" | "glutenFree">("recipes");

  const recipesPerPage = viewMode === "compact" ? 20 : 12;
  
  // Get current day name
  const getCurrentDayName = () => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayIndex = new Date().getDay();
    return dayNames[currentDayIndex];
  };
  
  // Check if current day has meals planned
  const currentDayMeals = useMemo(() => {
    const currentDay = getCurrentDayName();
    const dayMeals = weeklyMeals[currentDay] || emptyMealSlot();
    const allMealIds = [
      ...dayMeals.breakfast,
      ...dayMeals.lunch,
      ...dayMeals.dinner,
      ...dayMeals.snacks
    ];
    return {
      dayName: currentDay,
      mealIds: allMealIds,
      count: allMealIds.length,
      hasMeals: allMealIds.length > 0
    };
  }, [weeklyMeals]);

  const toggleWishlist = (recipeId: number) => {
    setWishlist((prev) =>
      prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const addToWeeklyMeal = (recipeId: number, day: string, mealType: string) => {
    setWeeklyMeals((prev) => {
      const mealKey = mealType.toLowerCase() as keyof MealTypeSlot;
      const dayMeals = prev[day] || emptyMealSlot();
      const meals = dayMeals[mealKey] || [];

      const updatedMeals = meals.includes(recipeId)
        ? meals.filter((id) => id !== recipeId)
        : [...meals, recipeId];

      return {
        ...prev,
        [day]: {
          ...dayMeals,
          [mealKey]: updatedMeals,
        },
      };
    });
  };

  const totalMealsPlanned = useMemo(() => {
    return Object.values(weeklyMeals).reduce((total, dayMeals) => {
      return (
        total +
        Object.values(dayMeals).reduce((dayTotal, meals) => dayTotal + meals.length, 0)
      );
    }, 0);
  }, [weeklyMeals]);

  const isInWeeklyMeal = (recipeId: number): boolean => {
    return Object.values(weeklyMeals).some((dayMeals) => 
      Object.values(dayMeals).some((meals) => meals.includes(recipeId))
    );
  };

  const getRecipeById = (id: number) => finalRecipes.find((r) => r.id === id);
  
  // PDF Download with ingredients - inside component to access weeklyMeals
  const downloadWeeklyPlanWithIngredients = () => {
    const weeklyTotals = {
      calories: 0,
      protein: 0,
      fat: 0,
      fiber: 0,
      iron: 0,
      calcium: 0,
      mealCount: 0,
    };

    let pdfContent = `NATURANEST - WEEKLY MEAL PLAN\\n`;
    pdfContent += `Generated on: ${new Date().toLocaleDateString()}\\n`;
    pdfContent += `\\n${'='.repeat(80)}\\n\\n`;

    DAYS_OF_WEEK.forEach((day) => {
      const dayMeals = weeklyMeals[day];
      const allDayRecipeIds = [
        ...dayMeals.breakfast,
        ...dayMeals.lunch,
        ...dayMeals.dinner,
        ...dayMeals.snacks,
      ];

      if (allDayRecipeIds.length > 0) {
        pdfContent += `${day.toUpperCase()}\\n${'-'.repeat(80)}\\n`;

        MEAL_TYPES.forEach((mealType) => {
          const mealKey = mealType.toLowerCase() as keyof MealTypeSlot;
          const mealRecipeIds = dayMeals[mealKey];
          
          if (mealRecipeIds.length > 0) {
            pdfContent += `\\n  ${mealType}:\\n`;
            mealRecipeIds.forEach((recipeId) => {
              const recipe = finalRecipes.find((r) => r.id === recipeId);
              if (recipe) {
                pdfContent += `    • ${recipe.name}\\n`;
                pdfContent += `      Calories: ${recipe.calories} | Protein: ${recipe.protein.toFixed(1)}g | `;
                pdfContent += `Fiber: ${recipe.fiber.toFixed(1)}g | Iron: ${recipe.iron.toFixed(1)}mg\\n`;
                
                weeklyTotals.calories += recipe.calories;
                weeklyTotals.protein += recipe.protein;
                weeklyTotals.fat += recipe.fat || 0;
                weeklyTotals.fiber += recipe.fiber;
                weeklyTotals.iron += recipe.iron;
                weeklyTotals.calcium += recipe.calcium;
                weeklyTotals.mealCount += 1;
              }
            });
          }
        });

        // Collect ingredients for the day
        const dayIngredients = new Set<string>();
        allDayRecipeIds.forEach((recipeId) => {
          const recipe = finalRecipes.find((r) => r.id === recipeId);
          if (recipe) {
            recipe.ingredients.forEach((ing) => dayIngredients.add(ing));
          }
        });

        if (dayIngredients.size > 0) {
          pdfContent += `\\n  Shopping List (${dayIngredients.size} ingredients):\\n`;
          const sortedIngredients = Array.from(dayIngredients).sort();
          sortedIngredients.forEach((ing) => {
            pdfContent += `    ☐ ${ing}\\n`;
          });
        }

        // Daily summary
        const dailyTotals = allDayRecipeIds.reduce((totals, recipeId) => {
          const recipe = finalRecipes.find((r) => r.id === recipeId);
          if (recipe) {
            return {
              calories: totals.calories + recipe.calories,
              protein: totals.protein + recipe.protein,
              fiber: totals.fiber + recipe.fiber,
            };
          }
          return totals;
        }, { calories: 0, protein: 0, fiber: 0 });

        pdfContent += `\\n  Daily Total: ${dailyTotals.calories.toFixed(0)} cal | `;
        pdfContent += `${dailyTotals.protein.toFixed(1)}g protein | `;
        pdfContent += `${dailyTotals.fiber.toFixed(1)}g fiber\\n`;
        pdfContent += `\\n`;
      }
    });

    // Weekly summary
    pdfContent += `\\n${'='.repeat(80)}\\n`;
    pdfContent += `WEEKLY SUMMARY\\n`;
    pdfContent += `${'='.repeat(80)}\\n\\n`;
    pdfContent += `Total Meals Planned: ${weeklyTotals.mealCount}\\n`;
    pdfContent += `Total Calories: ${weeklyTotals.calories.toFixed(0)}\\n`;
    pdfContent += `Total Protein: ${weeklyTotals.protein.toFixed(1)}g\\n`;
    pdfContent += `Total Fat: ${weeklyTotals.fat.toFixed(1)}g\\n`;
    pdfContent += `Total Fiber: ${weeklyTotals.fiber.toFixed(1)}g\\n`;
    pdfContent += `Total Iron: ${weeklyTotals.iron.toFixed(1)}mg\\n`;
    pdfContent += `Total Calcium: ${weeklyTotals.calcium.toFixed(0)}mg\\n\\n`;
    
    if (weeklyTotals.mealCount > 0) {
      pdfContent += `Daily Averages (${weeklyTotals.mealCount} meals across 7 days):\\n`;
      pdfContent += `  Calories: ${(weeklyTotals.calories / 7).toFixed(0)} per day\\n`;
      pdfContent += `  Protein: ${(weeklyTotals.protein / 7).toFixed(1)}g per day\\n`;
      pdfContent += `  Fiber: ${(weeklyTotals.fiber / 7).toFixed(1)}g per day\\n`;
    }

    pdfContent += `\\n${'='.repeat(80)}\\n`;
    pdfContent += `\\nData Source: Indian Nutrient Databank (INDB)\\n`;
    pdfContent += `Visit: https://www.ifct2017.com/\\n\\n`;
    pdfContent += `Generated by NaturaNest v2.1 - Smart Nutrition for Indian Families\\n`;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `NaturaNest-Meal-Plan-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleLifeStageClick = (stage: string) => {
    if (lifeStageFilter === stage) {
      setLifeStageFilter(null);
    } else {
      setLifeStageFilter(stage);
    }
  };

  // Filter recipes based on search term and filters
  const filteredRecipes = useMemo(() => {
    let results = finalRecipes;

    // Apply life stage filter from awareness cards
    if (lifeStageFilter) {
      results = results.filter((recipe) => {
        switch (lifeStageFilter) {
          case "pregnancy":
            return recipe.isPregnancyFriendly;
          case "women40plus":
            return recipe.isPerimenopauseFriendly || recipe.isMenopauseFriendly || recipe.isWomenOver50Friendly;
          case "children":
            return recipe.isPregnancyFriendly;
          default:
            return true;
        }
      });
    }

    // Apply search term filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter((recipe) => {
        if (recipe.name.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        if (recipe.ingredients.some((ing) => ing.toLowerCase().includes(searchLower))) {
          return true;
        }
        
        if (recipe.tags.some((tag) => tag.toLowerCase().includes(searchLower))) {
          return true;
        }
        
        return false;
      });
    }

    // Apply dietary filters
    if (filters.dietary.vegetarian || filters.dietary.nonVegetarian) {
      results = results.filter((recipe) => {
        if (filters.dietary.vegetarian && filters.dietary.nonVegetarian) {
          return true;
        }
        if (filters.dietary.vegetarian && recipe.isVegetarian) {
          return true;
        }
        if (filters.dietary.nonVegetarian && !recipe.isVegetarian) {
          return true;
        }
        return false;
      });
    }
    
    // Apply gluten-free filter
    if (filters.dietary.glutenFree) {
      results = results.filter((recipe) => recipe.isGlutenFree === true);
    }

    // Apply nutrient filters
    if (filters.nutrients.highProtein) {
      results = results.filter((recipe) => recipe.protein >= 25);
    }
    if (filters.nutrients.highFiber) {
      results = results.filter((recipe) => recipe.fiber >= 8);
    }
    if (filters.nutrients.highIron) {
      results = results.filter((recipe) => recipe.iron >= 4);
    }

    // Apply health focus filters
    if (filters.healthFocus.ironRich) {
      results = results.filter((recipe) => recipe.iron >= 4);
    }
    if (filters.healthFocus.calciumRich) {
      results = results.filter((recipe) => recipe.calcium >= 300);
    }
    if (filters.healthFocus.pregnancyDiet) {
      results = results.filter((recipe) => recipe.isPregnancyFriendly);
    }
    if (filters.healthFocus.diabeticFriendly) {
      results = results.filter((recipe) => recipe.isDiabeticFriendly);
    }
    if (filters.healthFocus.women40Plus) {
      results = results.filter((recipe) => recipe.isWomenOver50Friendly);
    }

    // Apply prep time filters
    if (filters.prepTime.under15) {
      results = results.filter((recipe) => recipe.prepTime <= 15);
    } else if (filters.prepTime.under30) {
      results = results.filter((recipe) => recipe.prepTime <= 30);
    } else if (filters.prepTime.under60) {
      results = results.filter((recipe) => recipe.prepTime <= 60);
    }

    // Apply meal type filters
    const activeMealTypes = Object.keys(filters.mealType).filter(
      (key) => filters.mealType[key as keyof typeof filters.mealType]
    );
    
    if (activeMealTypes.length > 0) {
      results = results.filter((recipe) => {
        return activeMealTypes.some((mealType) =>
          recipe.mealType.some((type) => type.toLowerCase() === mealType.toLowerCase())
        );
      });
    }

    return results;
  }, [finalRecipes, searchTerm, filters, lifeStageFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const currentRecipes = filteredRecipes.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters, lifeStageFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-7xl">
        {/* Version Badge */}
        <div className="flex justify-end mb-2">
          <Badge className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white border-0 text-xs">
            v2.0 Compact
          </Badge>
        </div>

        {/* INDB Attribution Banner - Moved to Top */}
        <div className="mb-4 sm:mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl p-3 sm:p-4 shadow-lg">
          <div className="flex items-center gap-2 sm:gap-3">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm leading-tight">
                <strong className="block sm:inline">Data Source:</strong>{" "}
                <span className="block sm:inline mt-0.5 sm:mt-0">
                  Indian Nutrient Databank (INDB) - 1,014 common recipes{" "}
                  <span className="opacity-90">(values per 100g)</span>
                </span>
              </p>
              <a
                href="https://www.ifct2017.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline opacity-90 hover:opacity-100 transition-opacity inline-block mt-1"
              >
                Learn more about INDB →
              </a>
            </div>
          </div>
        </div>

        {/* Daily Meal Notification */}
        {totalMealsPlanned > 0 && (
          <div className="mb-4">
            <DailyMealNotification
              currentDay={currentDayMeals.dayName}
              hasMealsPlanned={currentDayMeals.hasMeals}
              mealCount={currentDayMeals.count}
              onOpenMealPlan={() => {
                const weeklyPlanButton = document.querySelector('[aria-label="Open Weekly Plan"]') as HTMLButtonElement;
                weeklyPlanButton?.click();
              }}
            />
          </div>
        )}

        {/* Subscription Banner */}
        <div className="mb-4">
          <SubscriptionBanner />
        </div>

        {/* Hero Section - Compact */}
        <div className="mb-4 sm:mb-6">
          <div className="bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                    <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-white text-xl sm:text-3xl">
                      NaturaNest
                    </h1>
                    <p className="text-white/90 text-xs sm:text-sm">
                      Smart Nutrition for Indian Families
                    </p>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="bg-white text-emerald-600 hover:bg-white/90 shadow-lg font-semibold h-10 sm:h-11"
                      aria-label="Open Weekly Plan"
                    >
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 sm:mr-2" />
                      <span className="hidden sm:inline">Weekly Plan</span>
                      {totalMealsPlanned > 0 && (
                        <Badge className="ml-1 sm:ml-2 bg-emerald-600 text-white text-xs">{totalMealsPlanned}</Badge>
                      )}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <DialogTitle className="flex items-center gap-2 text-xl">
                            <Calendar className="h-6 w-6 text-emerald-600" />
                            Weekly Meal Plan
                          </DialogTitle>
                          <DialogDescription className="text-sm">
                            Plan your meals and track daily nutrition
                          </DialogDescription>
                        </div>
                        {totalMealsPlanned > 0 && (
                          <Button
                            onClick={downloadWeeklyPlanWithIngredients}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white"
                            size="sm"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Plan
                          </Button>
                        )}
                      </div>
                    </DialogHeader>
                    <Tabs defaultValue="Monday" className="mt-2">
                      <TabsList className="grid grid-cols-7 w-full">
                        {DAYS_OF_WEEK.map((day) => (
                          <TabsTrigger key={day} value={day} className="text-xs">
                            {day.slice(0, 3)}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {DAYS_OF_WEEK.map((day) => {
                        const dayMeals = weeklyMeals[day] || emptyMealSlot();
                        const allDayRecipeIds = [
                          ...dayMeals.breakfast,
                          ...dayMeals.lunch,
                          ...dayMeals.dinner,
                          ...dayMeals.snacks
                        ];
                        
                        const dailyTotals = allDayRecipeIds.reduce((totals, recipeId) => {
                          const recipe = getRecipeById(recipeId);
                          if (recipe) {
                            return {
                              calories: totals.calories + (recipe.calories || 0),
                              protein: totals.protein + (recipe.protein || 0),
                              fat: totals.fat + (recipe.fat || 0),
                              fiber: totals.fiber + (recipe.fiber || 0),
                              iron: totals.iron + (recipe.iron || 0),
                              calcium: totals.calcium + (recipe.calcium || 0),
                            };
                          }
                          return totals;
                        }, { calories: 0, protein: 0, fat: 0, fiber: 0, iron: 0, calcium: 0 });
                        
                        return (
                          <TabsContent key={day} value={day} className="mt-3">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
                                <h4 className="text-lg font-semibold text-emerald-700">{day}</h4>
                                {allDayRecipeIds.length > 0 && (
                                  <Badge variant="outline" className="text-xs border-emerald-300 text-emerald-700">
                                    {allDayRecipeIds.length} meal{allDayRecipeIds.length !== 1 ? 's' : ''}
                                  </Badge>
                                )}
                              </div>

                              {/* Daily Summary - Compact */}
                              {allDayRecipeIds.length > 0 && (
                                <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-lg p-3">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-medium text-slate-600 flex items-center gap-1">
                                      <Activity className="h-3.5 w-3.5" />
                                      Daily Total
                                    </span>
                                    <Badge variant="outline" className="text-xs bg-white border-emerald-300 text-emerald-700">
                                      {dailyTotals.calories.toFixed(0)} kcal
                                    </Badge>
                                  </div>
                                  <div className="flex flex-wrap gap-2 text-xs">
                                    <div className="flex items-center gap-1">
                                      <span className="text-slate-600">Protein:</span>
                                      <span className="font-medium text-emerald-700">{dailyTotals.protein.toFixed(1)}g</span>
                                    </div>
                                    <span className="text-slate-400">•</span>
                                    <div className="flex items-center gap-1">
                                      <span className="text-slate-600">Fat:</span>
                                      <span className="font-medium">{dailyTotals.fat.toFixed(1)}g</span>
                                    </div>
                                    <span className="text-slate-400">•</span>
                                    <div className="flex items-center gap-1">
                                      <span className="text-slate-600">Fiber:</span>
                                      <span className="font-medium text-teal-700">{dailyTotals.fiber.toFixed(1)}g</span>
                                    </div>
                                    <span className="text-slate-400 hidden sm:inline">•</span>
                                    <div className="flex items-center gap-1 hidden sm:flex">
                                      <span className="text-slate-600">Iron:</span>
                                      <span className="font-medium text-cyan-700">{dailyTotals.iron.toFixed(1)}mg</span>
                                    </div>
                                    <span className="text-slate-400 hidden sm:inline">•</span>
                                    <div className="flex items-center gap-1 hidden sm:flex">
                                      <span className="text-slate-600">Calcium:</span>
                                      <span className="font-medium">{dailyTotals.calcium.toFixed(0)}mg</span>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Ingredients List for the Day */}
                              {allDayRecipeIds.length > 0 && (
                                <WeeklyIngredientsList 
                                  recipes={allDayRecipeIds.map(id => getRecipeById(id)).filter(r => r !== undefined) as Recipe[]}
                                  dayName={day}
                                />
                              )}

                              <div className="grid sm:grid-cols-2 gap-3">
                                {MEAL_TYPES.map((mealType) => {
                                  const mealKey = mealType.toLowerCase() as keyof MealTypeSlot;
                                  const meals = dayMeals[mealKey] || [];
                                  
                                  const getMealIcon = (type: string) => {
                                    switch(type) {
                                      case 'Breakfast': return '🌅';
                                      case 'Lunch': return '🌞';
                                      case 'Dinner': return '🌙';
                                      case 'Snacks': return '🍎';
                                      default: return '🍽️';
                                    }
                                  };
                                  
                                  return (
                                    <div key={mealType} className="border border-emerald-200 rounded-lg p-3 bg-white hover:shadow-sm transition-shadow">
                                      <div className="flex items-center justify-between mb-2">
                                        <h5 className="text-sm font-medium flex items-center gap-1.5 text-slate-700">
                                          <span>{getMealIcon(mealType)}</span>
                                          {mealType}
                                        </h5>
                                        {meals.length > 0 && (
                                          <Badge variant="secondary" className="text-xs h-5 bg-emerald-100 text-emerald-700">
                                            {meals.length}
                                          </Badge>
                                        )}
                                      </div>
                                      {meals.length > 0 ? (
                                        <div className="space-y-1.5">
                                          {meals.map((recipeId) => {
                                            const recipe = getRecipeById(recipeId);
                                            return recipe ? (
                                              <div
                                                key={recipeId}
                                                className="group flex items-start justify-between gap-2 p-2 bg-slate-50 rounded hover:bg-slate-100 transition-colors"
                                              >
                                                <div className="flex-1 min-w-0">
                                                  <p className="text-sm truncate mb-0.5 text-slate-800">{recipe.name}</p>
                                                  <div className="flex items-center gap-2 text-xs text-slate-600">
                                                    <span>{recipe.calories.toFixed(0)} cal</span>
                                                    <span>•</span>
                                                    <span className="text-emerald-700">{recipe.protein.toFixed(1)}g protein</span>
                                                  </div>
                                                </div>
                                                <Button
                                                  size="sm"
                                                  variant="ghost"
                                                  onClick={() => addToWeeklyMeal(recipeId, day, mealType)}
                                                  className="flex-shrink-0 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100 hover:text-red-600"
                                                  title="Remove"
                                                >
                                                  <span className="text-lg leading-none">×</span>
                                                </Button>
                                              </div>
                                            ) : null;
                                          })}
                                        </div>
                                      ) : (
                                        <p className="text-xs text-slate-500 italic py-2">
                                          No {mealType.toLowerCase()} planned
                                        </p>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </TabsContent>
                        );
                      })}
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>

        {/* Life Stage Cards - Compact */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-xs mb-2 px-1 sm:hidden text-slate-600 font-medium">Filter by Life Stage:</h3>
          
          {/* Mobile - Horizontal Scroll */}
          <div className="flex gap-3 overflow-x-auto pb-2 sm:hidden scrollbar-hide">
            <button
              onClick={() => handleLifeStageClick("pregnancy")}
              className={`flex-shrink-0 min-w-[140px] p-3 rounded-lg border-2 transition-all ${
                lifeStageFilter === "pregnancy"
                  ? "bg-gradient-to-br from-rose-500 to-pink-500 border-rose-600 shadow-lg text-white"
                  : "bg-white border-rose-200 hover:border-rose-300 hover:shadow-md"
              }`}
            >
              <div className={`p-1.5 rounded-lg mb-1.5 w-fit ${
                lifeStageFilter === "pregnancy" ? "bg-white/20" : "bg-rose-100"
              }`}>
                <Baby className={`h-4 w-4 ${lifeStageFilter === "pregnancy" ? "text-white" : "text-rose-600"}`} />
              </div>
              <h4 className={`text-xs font-semibold mb-0.5 ${
                lifeStageFilter === "pregnancy" ? "text-white" : "text-rose-900"
              }`}>
                Pregnancy
              </h4>
              <p className={`text-[10px] leading-tight ${
                lifeStageFilter === "pregnancy" ? "text-white/90" : "text-rose-700"
              }`}>
                Mother & baby
              </p>
            </button>

            <button
              onClick={() => handleLifeStageClick("women40plus")}
              className={`flex-shrink-0 min-w-[140px] p-3 rounded-lg border-2 transition-all ${
                lifeStageFilter === "women40plus"
                  ? "bg-gradient-to-br from-purple-500 to-violet-500 border-purple-600 shadow-lg text-white"
                  : "bg-white border-purple-200 hover:border-purple-300 hover:shadow-md"
              }`}
            >
              <div className={`p-1.5 rounded-lg mb-1.5 w-fit ${
                lifeStageFilter === "women40plus" ? "bg-white/20" : "bg-purple-100"
              }`}>
                <Heart className={`h-4 w-4 ${lifeStageFilter === "women40plus" ? "text-white" : "text-purple-600"}`} />
              </div>
              <h4 className={`text-xs font-semibold mb-0.5 ${
                lifeStageFilter === "women40plus" ? "text-white" : "text-purple-900"
              }`}>
                Women 40+
              </h4>
              <p className={`text-[10px] leading-tight ${
                lifeStageFilter === "women40plus" ? "text-white/90" : "text-purple-700"
              }`}>
                Midlife wellness
              </p>
            </button>

            <button
              onClick={() => handleLifeStageClick("children")}
              className={`flex-shrink-0 min-w-[140px] p-3 rounded-lg border-2 transition-all ${
                lifeStageFilter === "children"
                  ? "bg-gradient-to-br from-emerald-500 to-teal-500 border-emerald-600 shadow-lg text-white"
                  : "bg-white border-emerald-200 hover:border-emerald-300 hover:shadow-md"
              }`}
            >
              <div className={`p-1.5 rounded-lg mb-1.5 w-fit ${
                lifeStageFilter === "children" ? "bg-white/20" : "bg-emerald-100"
              }`}>
                <Users className={`h-4 w-4 ${lifeStageFilter === "children" ? "text-white" : "text-emerald-600"}`} />
              </div>
              <h4 className={`text-xs font-semibold mb-0.5 ${
                lifeStageFilter === "children" ? "text-white" : "text-emerald-900"
              }`}>
                Children
              </h4>
              <p className={`text-[10px] leading-tight ${
                lifeStageFilter === "children" ? "text-white/90" : "text-emerald-700"
              }`}>
                Growth & dev
              </p>
            </button>
          </div>

          {/* Desktop - 3 Column Grid */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-3">
            <button
              onClick={() => handleLifeStageClick("pregnancy")}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                lifeStageFilter === "pregnancy"
                  ? "bg-gradient-to-br from-rose-500 to-pink-500 border-rose-600 shadow-lg ring-2 ring-rose-200 text-white"
                  : "bg-white border-rose-200 hover:border-rose-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  lifeStageFilter === "pregnancy" ? "bg-white/20" : "bg-rose-100"
                }`}>
                  <Baby className={`h-5 w-5 ${lifeStageFilter === "pregnancy" ? "text-white" : "text-rose-600"}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`text-sm font-semibold mb-1 ${
                    lifeStageFilter === "pregnancy" ? "text-white" : "text-rose-900"
                  }`}>
                    Pregnancy
                  </h4>
                  <p className={`text-xs ${
                    lifeStageFilter === "pregnancy" ? "text-white/90" : "text-rose-700"
                  }`}>
                    Iron, folate & calcium
                  </p>
                  {lifeStageFilter === "pregnancy" && (
                    <Badge className="mt-2 bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                      Active
                    </Badge>
                  )}
                </div>
              </div>
            </button>

            <button
              onClick={() => handleLifeStageClick("women40plus")}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                lifeStageFilter === "women40plus"
                  ? "bg-gradient-to-br from-purple-500 to-violet-500 border-purple-600 shadow-lg ring-2 ring-purple-200 text-white"
                  : "bg-white border-purple-200 hover:border-purple-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  lifeStageFilter === "women40plus" ? "bg-white/20" : "bg-purple-100"
                }`}>
                  <Heart className={`h-5 w-5 ${lifeStageFilter === "women40plus" ? "text-white" : "text-purple-600"}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`text-sm font-semibold mb-1 ${
                    lifeStageFilter === "women40plus" ? "text-white" : "text-purple-900"
                  }`}>
                    Women 40+
                  </h4>
                  <p className={`text-xs ${
                    lifeStageFilter === "women40plus" ? "text-white/90" : "text-purple-700"
                  }`}>
                    Hormones & bone health
                  </p>
                  {lifeStageFilter === "women40plus" && (
                    <Badge className="mt-2 bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                      Active
                    </Badge>
                  )}
                </div>
              </div>
            </button>

            <button
              onClick={() => handleLifeStageClick("children")}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                lifeStageFilter === "children"
                  ? "bg-gradient-to-br from-emerald-500 to-teal-500 border-emerald-600 shadow-lg ring-2 ring-emerald-200 text-white"
                  : "bg-white border-emerald-200 hover:border-emerald-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  lifeStageFilter === "children" ? "bg-white/20" : "bg-emerald-100"
                }`}>
                  <Users className={`h-5 w-5 ${lifeStageFilter === "children" ? "text-white" : "text-emerald-600"}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`text-sm font-semibold mb-1 ${
                    lifeStageFilter === "children" ? "text-white" : "text-emerald-900"
                  }`}>
                    Children
                  </h4>
                  <p className={`text-xs ${
                    lifeStageFilter === "children" ? "text-white/90" : "text-emerald-700"
                  }`}>
                    Growth & development
                  </p>
                  {lifeStageFilter === "children" && (
                    <Badge className="mt-2 bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                      Active
                    </Badge>
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Active Filter Indicator */}
        {lifeStageFilter && (
          <div className="mb-4 flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl p-3 sm:p-4">
            <p className="text-sm text-slate-700">
              Showing recipes for: <strong className="text-emerald-700 capitalize">
                {lifeStageFilter === "women40plus" ? "Women 40+" : lifeStageFilter}
              </strong>
            </p>
            <Button size="sm" variant="ghost" onClick={() => setLifeStageFilter(null)} className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-100">
              Clear Filter
            </Button>
          </div>
        )}

        {/* Search Bar */}
        <div className="mb-4 sm:mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search by ingredients, nutrients, or health needs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 sm:h-14 text-base border-2 border-slate-200 focus:border-emerald-400 rounded-xl bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "recipes" | "glutenFree")} className="space-y-4">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white border-2 border-emerald-200">
            <TabsTrigger value="recipes" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Utensils className="h-4 w-4 mr-2" />
              Recipes
            </TabsTrigger>
            <TabsTrigger value="glutenFree" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <BookOpen className="h-4 w-4 mr-2" />
              Gluten-Free Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recipes" className="space-y-0">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              {/* Filter Panel - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-4">
              <FilterPanel filters={filters} onFilterChange={setFilters} />
            </div>
          </aside>

          {/* Recipe Results */}
          <div className="flex-1 min-w-0">
            {/* Header with Results Count and View Toggle */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-3">
                <p className="text-slate-700 font-medium text-sm sm:text-base">
                  {filteredRecipes.length} {filteredRecipes.length === 1 ? "recipe" : "recipes"}
                  {filteredRecipes.length > 0 && (
                    <span className="ml-1 text-slate-500">
                      (page {currentPage} of {totalPages})
                    </span>
                  )}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 bg-white border-2 border-slate-200 rounded-lg p-1">
                  <Button
                    size="sm"
                    variant={viewMode === "compact" ? "default" : "ghost"}
                    onClick={() => setViewMode("compact")}
                    className={`h-8 px-2 sm:px-3 ${viewMode === "compact" ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "hover:bg-slate-100"}`}
                    title="Compact List"
                  >
                    <List className="h-4 w-4" />
                    <span className="hidden sm:inline ml-1 text-xs">List</span>
                  </Button>
                  <Button
                    size="sm"
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    onClick={() => setViewMode("grid")}
                    className={`h-8 px-2 sm:px-3 ${viewMode === "grid" ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "hover:bg-slate-100"}`}
                    title="Grid View"
                  >
                    <Grid3x3 className="h-4 w-4" />
                    <span className="hidden sm:inline ml-1 text-xs">Grid</span>
                  </Button>
                  <Button
                    size="sm"
                    variant={viewMode === "cards" ? "default" : "ghost"}
                    onClick={() => setViewMode("cards")}
                    className={`h-8 px-2 sm:px-3 ${viewMode === "cards" ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "hover:bg-slate-100"}`}
                    title="Card View"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span className="hidden lg:inline ml-1 text-xs">Cards</span>
                  </Button>
                </div>

                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 text-emerald-700">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[280px] sm:w-[320px] overflow-y-auto">
                    <FilterPanel filters={filters} onFilterChange={setFilters} />
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Recipe Grid/List */}
            {currentRecipes.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-slate-300">
                <ChefHat className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No recipes found</h3>
                <p className="text-slate-500 mb-4">Try adjusting your filters or search terms</p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setFilters({
                      dietary: { vegetarian: false, nonVegetarian: false, glutenFree: false },
                      nutrients: { highProtein: false, highFiber: false, highIron: false },
                      healthFocus: {
                        ironRich: false,
                        calciumRich: false,
                        pregnancyDiet: false,
                        diabeticFriendly: false,
                        women40Plus: false,
                      },
                      prepTime: { under15: false, under30: false, under60: false },
                      mealType: { breakfast: false, lunch: false, dinner: false, snacks: false },
                    });
                    setLifeStageFilter(null);
                  }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <>
                {viewMode === "compact" ? (
                  <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden shadow-sm">
                    {currentRecipes.map((recipe) => (
                      <RecipeListCompact
                        key={recipe.id}
                        recipe={recipe}
                        onToggleWishlist={toggleWishlist}
                        onAddToMealPlan={addToWeeklyMeal}
                        isInWishlist={wishlist.includes(recipe.id)}
                        isInWeeklyMeal={isInWeeklyMeal(recipe.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
                      : "space-y-4"
                  }>
                    {currentRecipes.map((recipe) => (
                      <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        onToggleWishlist={toggleWishlist}
                        onAddToMealPlan={addToWeeklyMeal}
                        isInWishlist={wishlist.includes(recipe.id)}
                        isInWeeklyMeal={isInWeeklyMeal(recipe.id)}
                        viewMode={viewMode === "grid" ? "grid" : "list"}
                      />
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-emerald-50"}
                          />
                        </PaginationItem>
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          return (
                            <PaginationItem key={i}>
                              <PaginationLink
                                onClick={() => setCurrentPage(pageNum)}
                                isActive={currentPage === pageNum}
                                className={currentPage === pageNum ? "bg-emerald-500 text-white hover:bg-emerald-600" : "hover:bg-emerald-50 cursor-pointer"}
                              >
                                {pageNum}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        })}
                        <PaginationItem>
                          <PaginationNext
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-emerald-50"}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="glutenFree" className="space-y-4">
            <div className="max-w-4xl mx-auto">
              <GlutenFreeInfo />
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t-2 border-emerald-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Leaf className="h-5 w-5 text-emerald-600" />
              <p className="text-sm font-semibold text-slate-700">NaturaNest Version 2.0</p>
            </div>
            <p className="text-xs text-slate-500 mb-2">
              Empowering healthy choices for Indian families
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
              <a href="#" className="hover:text-emerald-600 transition-colors">About</a>
              <span className="text-slate-300">•</span>
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a>
              <span className="text-slate-300">•</span>
              <a href="#" className="hover:text-emerald-600 transition-colors">Terms</a>
              <span className="text-slate-300">•</span>
              <a href="https://www.ifct2017.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                Data Source: INDB
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
