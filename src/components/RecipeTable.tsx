import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Heart, CalendarPlus, AlertTriangle, Baby, Activity } from "lucide-react";

interface Recipe {
  id: number;
  name: string;
  protein: number;
  calories: number;
  fiber: number;
  iron: number;
  calcium: number;
  fat?: number;
  ingredients: string[];
  prepTime: number;
  isVegetarian: boolean;
  cuisineType: string;
  isUnhealthy: boolean;
  isPregnancyFriendly: boolean;
  isDiabeticFriendly: boolean;
  isWomenOver50Friendly: boolean;
  isPerimenopauseFriendly: boolean;
  isMenopauseFriendly: boolean;
  mealType: string[];
}

interface RecipeTableProps {
  recipes: Recipe[];
  wishlist: Set<number>;
  onToggleWishlist: (recipeId: number) => void;
  selectedRecipeId: number | null;
  onRecipeSelect: (recipeId: number) => void;
  onAddToWeeklyMeal: (recipeId: number, day: string, mealType: string) => void;
  isInWeeklyMeal: (recipeId: number) => boolean;
}

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snacks"];

const cuisineColors: { [key: string]: string } = {
  American: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  Mediterranean: "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800",
  Greek: "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800",
  Indian: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
  Chinese: "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
  Hawaiian: "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800",
  Mexican: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800",
  Asian: "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800",
  Fusion: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
};

export function RecipeTable({ 
  recipes, 
  wishlist, 
  onToggleWishlist,
  selectedRecipeId,
  onRecipeSelect,
  onAddToWeeklyMeal,
  isInWeeklyMeal
}: RecipeTableProps) {
  return (
    <TooltipProvider>
      <div className="border-2 border-primary/20 rounded-xl overflow-hidden shadow-lg bg-card">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 hover:from-primary/10 hover:via-secondary/10 hover:to-accent/10">
                <TableHead className="w-[50px] hidden sm:table-cell"></TableHead>
                <TableHead className="w-[200px] sm:w-[280px]">
                  Recipe Name
                  <span className="block text-xs font-normal text-muted-foreground mt-0.5">
                    (per 100g)
                  </span>
                </TableHead>
                {/* Hide Cuisine & Type on mobile */}
                <TableHead className="text-center hidden md:table-cell">Cuisine</TableHead>
                <TableHead className="text-center hidden md:table-cell">Type</TableHead>
                {/* Mobile: Only Protein & Calories */}
                <TableHead className="text-center">Protein<span className="hidden sm:inline"> (g)</span></TableHead>
                <TableHead className="text-center">Calories<span className="hidden sm:inline"> (kcal)</span></TableHead>
                {/* Hide on mobile, show on tablet+ */}
                <TableHead className="text-center hidden sm:table-cell">Fiber</TableHead>
                <TableHead className="text-center hidden sm:table-cell">Iron</TableHead>
                <TableHead className="text-center hidden sm:table-cell">Fat</TableHead>
                {/* Hide Calcium & Prep Time on mobile */}
                <TableHead className="text-center hidden md:table-cell">Calcium</TableHead>
                <TableHead className="text-center hidden md:table-cell">Prep Time</TableHead>
                <TableHead className="text-center w-[80px] sm:w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recipes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={12} className="text-center py-8 text-muted-foreground">
                    No recipes found. Try adjusting your filters or search term.
                  </TableCell>
                </TableRow>
              ) : (
                recipes.map((recipe) => {
                  const isWishlisted = wishlist.has(recipe.id);
                  const isSelected = selectedRecipeId === recipe.id;
                  const inWeeklyMeal = isInWeeklyMeal(recipe.id);
                  
                  return (
                    <TableRow 
                      key={recipe.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        isSelected 
                          ? "bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 shadow-sm" 
                          : "hover:bg-gradient-to-r hover:from-primary/5 hover:via-secondary/5 hover:to-accent/5"
                      } ${recipe.isUnhealthy ? "border-l-4 border-l-destructive" : ""}`}
                      onClick={() => onRecipeSelect(recipe.id)}
                    >
                      <TableCell className="text-center hidden sm:table-cell" onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:scale-110 transition-transform"
                          onClick={() => onToggleWishlist(recipe.id)}
                        >
                          <Heart
                            className={`h-4 w-4 transition-all ${
                              isWishlisted
                                ? "fill-red-500 text-red-500 scale-110"
                                : "text-muted-foreground hover:text-red-500"
                            }`}
                          />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-start gap-2">
                          {/* Mobile wishlist heart - visible only on mobile */}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 sm:hidden hover:scale-110 transition-transform flex-shrink-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleWishlist(recipe.id);
                            }}
                          >
                            <Heart
                              className={`h-3.5 w-3.5 transition-all ${
                                isWishlisted
                                  ? "fill-red-500 text-red-500"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </Button>
                          
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="cursor-help flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <div className="line-clamp-1 text-sm sm:text-base">{recipe.name}</div>
                                  {recipe.isUnhealthy && (
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p className="text-xs">⚠️ High calorie or low nutrient content</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  )}
                                </div>
                                <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5 hidden sm:block">
                                  {recipe.ingredients.slice(0, 2).join(", ")}
                                  {recipe.ingredients.length > 2 && "..."}
                                </div>
                                <div className="flex flex-wrap gap-1 mt-1 hidden sm:flex">
                                  {recipe.mealType.map((type) => (
                                    <Badge key={type} variant="secondary" className="text-xs">
                                      {type}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </TooltipTrigger>
                          <TooltipContent 
                            side="right" 
                            className="max-w-xs"
                            align="start"
                          >
                            <div className="space-y-2">
                              <p className="font-medium">{recipe.name}</p>
                              <div className="flex flex-wrap gap-1 mb-2">
                                {recipe.isPregnancyFriendly && (
                                  <Badge variant="outline" className="text-xs bg-pink-50 text-pink-700 border-pink-200">
                                    Pregnancy Safe
                                  </Badge>
                                )}
                                {recipe.isDiabeticFriendly && (
                                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                    Diabetic Friendly
                                  </Badge>
                                )}
                                {recipe.isWomenOver50Friendly && (
                                  <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                                    Women 50+
                                  </Badge>
                                )}
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">All Ingredients:</p>
                                <ul className="text-xs space-y-0.5">
                                  {recipe.ingredients.map((ingredient, idx) => (
                                    <li key={idx}>• {ingredient}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                        </div>
                      </TableCell>
                      {/* Hide Cuisine & Type on mobile */}
                      <TableCell className="text-center hidden md:table-cell">
                        <Badge
                          variant="outline"
                          className={cuisineColors[recipe.cuisineType] || "bg-gray-100 text-gray-700"}
                        >
                          {recipe.cuisineType}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center hidden md:table-cell">
                        <Badge
                          variant="outline"
                          className={
                            recipe.isVegetarian
                              ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                              : "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800"
                          }
                        >
                          {recipe.isVegetarian ? "Veg" : "Non-Veg"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="inline-flex items-center justify-center px-2 py-1 rounded-full bg-primary/10 text-primary text-sm sm:text-base">
                          {Number(recipe.protein).toFixed(1)}<span className="hidden sm:inline">g</span>
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-sm sm:text-base ${
                          recipe.calories > 500 
                            ? "bg-destructive/10 text-destructive" 
                            : "bg-accent/20 text-accent-foreground"
                        }`}>
                          {Number(recipe.calories).toFixed(0)}
                        </span>
                      </TableCell>
                      {/* Hide Fiber, Iron, Fat on mobile - show on tablet+ */}
                      <TableCell className="text-center hidden sm:table-cell">
                        <span className={`${recipe.fiber >= 8 ? "text-secondary font-medium" : ""}`}>
                          {Number(recipe.fiber).toFixed(2)}g
                        </span>
                      </TableCell>
                      <TableCell className="text-center hidden sm:table-cell">
                        <span className={`${recipe.iron >= 4 ? "text-primary font-medium" : ""}`}>
                          {Number(recipe.iron).toFixed(2)}mg
                        </span>
                      </TableCell>
                      <TableCell className="text-center hidden sm:table-cell">
                        <span>
                          {recipe.fat ? `${Number(recipe.fat).toFixed(2)}g` : 'N/A'}
                        </span>
                      </TableCell>
                      {/* Hide Calcium on mobile */}
                      <TableCell className="text-center hidden md:table-cell">
                        <span className={`${recipe.calcium >= 300 ? "text-accent font-medium" : ""}`}>
                          {Number(recipe.calcium).toFixed(2)}mg
                        </span>
                      </TableCell>
                      <TableCell className="text-center hidden md:table-cell">
                        <Badge variant="secondary">{recipe.prepTime ? `${recipe.prepTime} min` : 'N/A'}</Badge>
                      </TableCell>
                      <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant={inWeeklyMeal ? "default" : "outline"} 
                              size="sm"
                              className="h-8 transition-all text-xs sm:text-sm px-2 sm:px-3"
                            >
                              <CalendarPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-1" />
                              <span className="hidden sm:inline">{inWeeklyMeal ? "Added" : "Add"}</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>Add to Weekly Plan</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {DAYS_OF_WEEK.map((day) => (
                              <DropdownMenuSub key={day}>
                                <DropdownMenuSubTrigger>{day}</DropdownMenuSubTrigger>
                                <DropdownMenuSubContent>
                                  {MEAL_TYPES.map((mealType) => (
                                    <DropdownMenuItem
                                      key={mealType}
                                      onClick={() => onAddToWeeklyMeal(recipe.id, day, mealType)}
                                    >
                                      {mealType}
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenuSubContent>
                              </DropdownMenuSub>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </TooltipProvider>
  );
}
