/**
 * Recipe Type Definition
 * Used throughout the application for type safety
 */
export interface Recipe {
  id: number | string;
  name: string;
  protein: number;
  calories: number;
  fiber: number;
  iron: number;
  calcium: number;
  fat?: number; // Optional fat content in grams
  ingredients: string[];
  prepTime: number | null;
  tags: string[];
  isVegetarian: boolean;
  isGlutenFree?: boolean; // Gluten-free indicator
  cuisineType: string;
  isUnhealthy: boolean;
  isPregnancyFriendly: boolean;
  isDiabeticFriendly: boolean;
  isWomenOver50Friendly: boolean;
  isPerimenopauseFriendly: boolean;
  isMenopauseFriendly: boolean;
  mealType: string[]; // "Breakfast", "Lunch", "Dinner", "Snacks"
}

/**
 * API Response wrapper for recipes
 */
export interface RecipeApiResponse {
  success: boolean;
  data: Recipe[];
  total: number;
  page?: number;
  perPage?: number;
  message?: string;
}

/**
 * Filter state for recipe filtering
 */
export interface FilterState {
  dietary: {
    vegetarian: boolean;
    nonVegetarian: boolean;
  };
  nutrients: {
    highProtein: boolean;
    highFiber: boolean;
    highIron: boolean;
  };
  healthFocus: {
    ironRich: boolean;
    calciumRich: boolean;
    pregnancyDiet: boolean;
    diabeticFriendly: boolean;
    womenOver50: boolean;
  };
  prepTime: {
    quick: boolean;
    moderate: boolean;
    long: boolean;
  };
  ingredientCount: {
    few: boolean;
    moderate: boolean;
    many: boolean;
  };
}
