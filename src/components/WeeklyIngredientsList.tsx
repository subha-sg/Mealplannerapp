import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart, CheckCircle2 } from "lucide-react";
import type { Recipe } from "../data/types";

interface WeeklyIngredientsListProps {
  recipes: Recipe[];
  dayName?: string;
}

export function WeeklyIngredientsList({ recipes, dayName }: WeeklyIngredientsListProps) {
  // Collect all unique ingredients with count
  const ingredientsMap = recipes.reduce((acc, recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      const ingredientLower = ingredient.toLowerCase();
      if (acc[ingredientLower]) {
        acc[ingredientLower].count += 1;
        acc[ingredientLower].recipes.push(recipe.name);
      } else {
        acc[ingredientLower] = {
          name: ingredient,
          count: 1,
          recipes: [recipe.name]
        };
      }
    });
    return acc;
  }, {} as Record<string, { name: string; count: number; recipes: string[] }>);

  const ingredients = Object.values(ingredientsMap).sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  if (ingredients.length === 0) {
    return null;
  }

  return (
    <Card className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 border-2 border-cyan-200">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-cyan-100 rounded-lg">
          <ShoppingCart className="h-4 w-4 text-cyan-600" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">
            {dayName ? `${dayName}'s ` : ''}Shopping List
          </h4>
          <p className="text-xs text-slate-600">
            {ingredients.length} unique ingredients
          </p>
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto">
        {ingredients.map((ingredient, index) => (
          <div 
            key={index}
            className="flex items-start gap-2 p-2 bg-white rounded-lg border border-cyan-100 hover:border-cyan-200 transition-colors"
          >
            <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-900 capitalize">
                {ingredient.name}
              </p>
              {ingredient.count > 1 && (
                <Badge variant="outline" className="text-xs h-4 bg-cyan-50 text-cyan-700 border-cyan-200 mt-1">
                  Used {ingredient.count}x
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
