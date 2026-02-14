import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Heart,
  Calendar,
  Clock,
  Flame,
  Beef,
  Wheat,
  Droplet,
  Milk,
  Sparkles,
  ChefHat,
  Leaf,
} from "lucide-react";
import type { Recipe } from "../data/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./ui/dropdown-menu";

interface RecipeCardProps {
  recipe: Recipe;
  onToggleWishlist: (id: number) => void;
  onAddToMealPlan: (id: number, day: string, mealType: string) => void;
  isInWishlist: boolean;
  isInWeeklyMeal: boolean;
  viewMode?: "grid" | "list";
}

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snacks"];

export function RecipeCard({
  recipe,
  onToggleWishlist,
  onAddToMealPlan,
  isInWishlist,
  isInWeeklyMeal,
  viewMode = "grid",
}: RecipeCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="bg-white border-2 border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          {/* Left: Recipe Image Placeholder with Gradient */}
          <div className="sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
            </div>
            <ChefHat className="h-16 w-16 text-white relative z-10" />
          </div>

          {/* Right: Recipe Details */}
          <div className="flex-1 p-4 sm:p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
                  {recipe.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-teal-600" />
                    <span>{recipe.prepTime} min</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <Badge variant="outline" className="border-emerald-300 text-emerald-700 text-xs">
                    {recipe.cuisineType}
                  </Badge>
                  {recipe.isVegetarian && (
                    <Badge className="bg-green-100 text-green-700 border-green-300 text-xs">
                      <Leaf className="h-3 w-3 mr-1" />
                      Veg
                    </Badge>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onToggleWishlist(recipe.id)}
                  className={`h-10 w-10 rounded-full ${
                    isInWishlist
                      ? "text-rose-600 bg-rose-100 hover:bg-rose-200"
                      : "text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist ? "fill-current" : ""}`} />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="sm"
                      className={`${
                        isInWeeklyMeal
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "bg-emerald-500 hover:bg-emerald-600"
                      } text-white`}
                    >
                      <Calendar className="h-4 w-4 mr-1.5" />
                      {isInWeeklyMeal ? "In Plan" : "Add to Plan"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {DAYS_OF_WEEK.map((day) => (
                      <DropdownMenuSub key={day}>
                        <DropdownMenuSubTrigger>{day}</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          {MEAL_TYPES.map((mealType) => (
                            <DropdownMenuItem
                              key={mealType}
                              onClick={() => onAddToMealPlan(recipe.id, day, mealType)}
                            >
                              {mealType}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Nutritional Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              <div className="flex items-center gap-2 p-2 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                <div className="p-1.5 bg-rose-500 rounded-md">
                  <Flame className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-600">Calories</p>
                  <p className="font-semibold text-slate-800">{recipe.calories}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <div className="p-1.5 bg-emerald-500 rounded-md">
                  <Beef className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-600">Protein</p>
                  <p className="font-semibold text-emerald-700">{recipe.protein.toFixed(1)}g</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                <div className="p-1.5 bg-amber-500 rounded-md">
                  <Wheat className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-600">Fiber</p>
                  <p className="font-semibold text-slate-800">{recipe.fiber.toFixed(1)}g</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
                <div className="p-1.5 bg-cyan-500 rounded-md">
                  <Droplet className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-600">Iron</p>
                  <p className="font-semibold text-cyan-700">{recipe.iron.toFixed(1)}mg</p>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="border-t border-slate-200 pt-3">
              <p className="text-xs font-medium text-slate-600 mb-2">Ingredients:</p>
              <p className="text-sm text-slate-700">
                {recipe.ingredients.slice(0, 5).join(", ")}
                {recipe.ingredients.length > 5 && (
                  <span className="text-emerald-600 font-medium">
                    {" "}+{recipe.ingredients.length - 5} more
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Grid View (Default)
  return (
    <Card className="bg-white border-2 border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all overflow-hidden group">
      {/* Recipe Image Placeholder with Gradient */}
      <div className="h-48 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        </div>
        <ChefHat className="h-16 w-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
        
        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          onClick={() => onToggleWishlist(recipe.id)}
          className={`absolute top-3 right-3 h-9 w-9 rounded-full backdrop-blur-sm z-10 ${
            isInWishlist
              ? "bg-white text-rose-600 hover:bg-white/90"
              : "bg-white/20 text-white hover:bg-white hover:text-rose-600"
          }`}
        >
          <Heart className={`h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
        </Button>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Recipe Name and Tags */}
        <div className="mb-3">
          <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2">
            {recipe.name}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <Badge variant="outline" className="border-emerald-300 text-emerald-700">
              {recipe.cuisineType}
            </Badge>
            {recipe.isVegetarian && (
              <Badge className="bg-green-100 text-green-700 border-green-300">
                <Leaf className="h-3 w-3 mr-0.5" />
                Veg
              </Badge>
            )}
            <div className="flex items-center gap-1 text-slate-600">
              <Clock className="h-3 w-3 text-teal-600" />
              <span>{recipe.prepTime} min</span>
            </div>
          </div>
        </div>

        {/* Nutritional Highlights */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 p-2 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
            <Flame className="h-4 w-4 text-rose-600" />
            <div>
              <p className="text-xs text-slate-600">Calories</p>
              <p className="text-sm font-semibold text-slate-800">{recipe.calories}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
            <Beef className="h-4 w-4 text-emerald-600" />
            <div>
              <p className="text-xs text-slate-600">Protein</p>
              <p className="text-sm font-semibold text-emerald-700">{recipe.protein.toFixed(1)}g</p>
            </div>
          </div>
        </div>

        {/* Secondary Nutrition */}
        <div className="flex items-center justify-between text-xs text-slate-600 mb-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-1">
            <Wheat className="h-3 w-3 text-amber-600" />
            <span>{recipe.fiber.toFixed(1)}g fiber</span>
          </div>
          <div className="flex items-center gap-1">
            <Droplet className="h-3 w-3 text-cyan-600" />
            <span>{recipe.iron.toFixed(1)}mg iron</span>
          </div>
          <div className="flex items-center gap-1">
            <Milk className="h-3 w-3 text-blue-600" />
            <span>{recipe.calcium}mg Ca</span>
          </div>
        </div>

        {/* Add to Meal Plan Button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="sm"
              className={`w-full ${
                isInWeeklyMeal
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-emerald-500 hover:bg-emerald-600"
              } text-white shadow-md`}
            >
              <Calendar className="h-4 w-4 mr-2" />
              {isInWeeklyMeal ? "In Meal Plan" : "Add to Meal Plan"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-48">
            {DAYS_OF_WEEK.map((day) => (
              <DropdownMenuSub key={day}>
                <DropdownMenuSubTrigger className="text-sm">{day}</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {MEAL_TYPES.map((mealType) => (
                    <DropdownMenuItem
                      key={mealType}
                      onClick={() => onAddToMealPlan(recipe.id, day, mealType)}
                      className="text-sm"
                    >
                      {mealType}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
}
