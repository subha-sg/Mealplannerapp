import { Recipe, RecipeApiResponse } from "../data/types";

/**
 * Recipe Service
 * Handles loading recipes from various sources: mock data, JSON files, or API
 */

class RecipeService {
  private apiBaseUrl: string;
  private mockData: Recipe[] | null = null;

  constructor(apiBaseUrl: string = "/api") {
    this.apiBaseUrl = apiBaseUrl;
  }

  /**
   * Load recipes from JSON file
   * Use this for local development or when recipes are stored in a JSON file
   */
  async loadFromJSON(filePath: string = "/data/mockRecipes.json"): Promise<Recipe[]> {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to load recipes from ${filePath}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error loading recipes from JSON:", error);
      throw error;
    }
  }

  /**
   * Load recipes from API endpoint
   * Use this in production with PHP/Node.js backend
   * 
   * PHP Endpoint Example: GET /api/recipes.php
   * Expected Response: { success: true, data: Recipe[], total: number }
   */
  async loadFromAPI(endpoint: string = "/recipes"): Promise<Recipe[]> {
    try {
      const response = await fetch(`${this.apiBaseUrl}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const result: RecipeApiResponse = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || "Failed to load recipes");
      }

      return result.data;
    } catch (error) {
      console.error("Error loading recipes from API:", error);
      throw error;
    }
  }

  /**
   * Search recipes from API
   * PHP Endpoint Example: GET /api/recipes.php?search=chicken&page=1&limit=10
   */
  async searchRecipes(
    searchTerm: string,
    page: number = 1,
    limit: number = 10
  ): Promise<RecipeApiResponse> {
    try {
      const params = new URLSearchParams({
        search: searchTerm,
        page: page.toString(),
        limit: limit.toString(),
      });

      const response = await fetch(`${this.apiBaseUrl}/recipes?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error searching recipes:", error);
      throw error;
    }
  }

  /**
   * Get recipe by ID from API
   * PHP Endpoint Example: GET /api/recipes.php?id=123
   */
  async getRecipeById(id: number | string): Promise<Recipe | null> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/recipes/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`API Error: ${response.status}`);
      }

      const result: RecipeApiResponse = await response.json();
      return result.data[0] || null;
    } catch (error) {
      console.error("Error getting recipe by ID:", error);
      return null;
    }
  }

  /**
   * Filter recipes from API
   * PHP Endpoint Example: POST /api/recipes.php with filter JSON in body
   */
  async filterRecipes(filters: any): Promise<Recipe[]> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/recipes/filter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const result: RecipeApiResponse = await response.json();
      return result.data;
    } catch (error) {
      console.error("Error filtering recipes:", error);
      throw error;
    }
  }

  /**
   * Use mock/embedded data (for development or offline mode)
   */
  loadMockData(): Recipe[] {
    // This would contain your full recipe dataset
    // For now, returning empty array - you can import your data here
    return [];
  }
}

// Export singleton instance
export const recipeService = new RecipeService();

// Export class for custom instances
export default RecipeService;
