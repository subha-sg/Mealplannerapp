import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Heart,
  Calendar,
  Clock,
  Leaf,
  Plus,
  Check,
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

interface RecipeListCompactProps {
  recipe: Recipe;
  onToggleWishlist: (id: number) => void;
  onAddToMealPlan: (id: number, day: string, mealType: string) => void;
  isInWishlist: boolean;
  isInWeeklyMeal: boolean;
}

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snacks"];

export function RecipeListCompact({
  recipe,
  onToggleWishlist,
  onAddToMealPlan,
  isInWishlist,
  isInWeeklyMeal,
}: RecipeListCompactProps) {
  return (
    <div className="group flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white hover:bg-emerald-50/50 border-b border-slate-200 hover:border-emerald-200 transition-all">
      {/* Left: Recipe Name & Tags */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-sm font-semibold text-slate-800 truncate">
            {recipe.name}
          </h3>
          {recipe.isVegetarian && (
            <Badge className="bg-green-100 text-green-700 border-green-300 text-xs px-1.5 py-0 h-4 flex-shrink-0">
              <Leaf className="h-2.5 w-2.5 mr-0.5" />
              V
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs text-slate-600">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-teal-600" />
            {recipe.prepTime}m
          </span>
          <span className="hidden sm:inline text-slate-400">•</span>
          <span className="hidden sm:inline">{recipe.cuisineType}</span>
        </div>
      </div>

      {/* Middle: Nutrition Info - Compact Pills */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
        {/* Calories */}
        <div className="flex flex-col items-center px-2 py-1 bg-rose-50 rounded-md border border-rose-200">
          <span className="text-[10px] text-rose-600 font-medium leading-none">Cal</span>
          <span className="text-xs font-bold text-slate-800 leading-tight">{recipe.calories}</span>
        </div>
        
        {/* Protein */}
        <div className="flex flex-col items-center px-2 py-1 bg-emerald-50 rounded-md border border-emerald-200">
          <span className="text-[10px] text-emerald-600 font-medium leading-none">Prot</span>
          <span className="text-xs font-bold text-emerald-700 leading-tight">{recipe.protein.toFixed(0)}g</span>
        </div>
        
        {/* Fiber - Hidden on mobile */}
        <div className="hidden sm:flex flex-col items-center px-2 py-1 bg-amber-50 rounded-md border border-amber-200">
          <span className="text-[10px] text-amber-600 font-medium leading-none">Fiber</span>
          <span className="text-xs font-bold text-slate-800 leading-tight">{recipe.fiber.toFixed(0)}g</span>
        </div>
        
        {/* Iron - Hidden on mobile */}
        <div className="hidden md:flex flex-col items-center px-2 py-1 bg-cyan-50 rounded-md border border-cyan-200">
          <span className="text-[10px] text-cyan-600 font-medium leading-none">Iron</span>
          <span className="text-xs font-bold text-cyan-700 leading-tight">{recipe.iron.toFixed(1)}mg</span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1 flex-shrink-0">
        {/* Wishlist */}
        <Button
          size="icon"
          variant="ghost"
          onClick={() => onToggleWishlist(recipe.id)}
          className={`h-7 w-7 sm:h-8 sm:w-8 ${
            isInWishlist
              ? "text-rose-600 hover:text-rose-700 hover:bg-rose-100"
              : "text-slate-400 hover:text-rose-600 hover:bg-rose-50"
          }`}
        >
          <Heart className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isInWishlist ? "fill-current" : ""}`} />
        </Button>

        {/* Add to Plan */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="sm"
              className={`h-7 sm:h-8 text-xs px-2 sm:px-3 ${
                isInWeeklyMeal
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-emerald-500 hover:bg-emerald-600"
              } text-white`}
            >
              {isInWeeklyMeal ? (
                <Check className="h-3 w-3 sm:mr-1" />
              ) : (
                <Plus className="h-3 w-3 sm:mr-1" />
              )}
              <span className="hidden sm:inline">
                {isInWeeklyMeal ? "Added" : "Add"}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {DAYS_OF_WEEK.map((day) => (
              <DropdownMenuSub key={day}>
                <DropdownMenuSubTrigger className="text-xs">{day.slice(0, 3)}</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {MEAL_TYPES.map((mealType) => (
                    <DropdownMenuItem
                      key={mealType}
                      onClick={() => onAddToMealPlan(recipe.id, day, mealType)}
                      className="text-xs"
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
  );
}
