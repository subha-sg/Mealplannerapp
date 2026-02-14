import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Leaf, Beef, Wheat, Droplet, Milk, Baby, Activity, Heart, Clock, Utensils, WheatOff } from "lucide-react";

export interface FilterState {
  dietary: {
    vegetarian: boolean;
    nonVegetarian: boolean;
    glutenFree: boolean;
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
    women40Plus: boolean;
  };
  prepTime: {
    under15: boolean;
    under30: boolean;
    under60: boolean;
  };
  mealType: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    snacks: boolean;
  };
}

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  const updateFilter = (
    category: keyof FilterState,
    key: string,
    value: boolean
  ) => {
    onFilterChange({
      ...filters,
      [category]: {
        ...filters[category],
        [key]: value,
      },
    });
  };

  return (
    <Card className="p-4 sm:p-5 h-fit lg:sticky lg:top-4 bg-white border-2 border-slate-200 shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg">
          <Utensils className="h-4 w-4 text-white" />
        </div>
        <h4 className="font-semibold text-slate-800">Filters</h4>
      </div>

      {/* Dietary Preferences */}
      <div className="space-y-3 mb-4">
        <p className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Leaf className="h-4 w-4 text-emerald-600" />
          Dietary Preference
        </p>
        <div className="space-y-2 pl-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="vegetarian"
              checked={filters.dietary.vegetarian}
              onCheckedChange={(checked) =>
                updateFilter("dietary", "vegetarian", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="vegetarian" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Vegetarian
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="nonVegetarian"
              checked={filters.dietary.nonVegetarian}
              onCheckedChange={(checked) =>
                updateFilter("dietary", "nonVegetarian", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="nonVegetarian" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Non-Vegetarian
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="glutenFree"
              checked={filters.dietary.glutenFree}
              onCheckedChange={(checked) =>
                updateFilter("dietary", "glutenFree", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="glutenFree" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900 flex items-center gap-1.5">
              <WheatOff className="h-3.5 w-3.5 text-amber-600" />
              Gluten Free
            </Label>
          </div>
        </div>
      </div>

      <Separator className="my-4 bg-emerald-100" />

      {/* Nutrients */}
      <div className="space-y-3 mb-4">
        <p className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Beef className="h-4 w-4 text-teal-600" />
          Nutrition Focus
        </p>
        <div className="space-y-2 pl-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="highProtein"
              checked={filters.nutrients.highProtein}
              onCheckedChange={(checked) =>
                updateFilter("nutrients", "highProtein", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="highProtein" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              High Protein (25g+)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="highFiber"
              checked={filters.nutrients.highFiber}
              onCheckedChange={(checked) =>
                updateFilter("nutrients", "highFiber", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="highFiber" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              High Fiber (8g+)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="highIron"
              checked={filters.nutrients.highIron}
              onCheckedChange={(checked) =>
                updateFilter("nutrients", "highIron", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="highIron" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              High Iron (4mg+)
            </Label>
          </div>
        </div>
      </div>

      <Separator className="my-4 bg-emerald-100" />

      {/* Health Focus */}
      <div className="space-y-3 mb-4">
        <p className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Heart className="h-4 w-4 text-rose-600" />
          Health Focus
        </p>
        <div className="space-y-2 pl-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="ironRich"
              checked={filters.healthFocus.ironRich}
              onCheckedChange={(checked) =>
                updateFilter("healthFocus", "ironRich", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="ironRich" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Iron Rich
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="calciumRich"
              checked={filters.healthFocus.calciumRich}
              onCheckedChange={(checked) =>
                updateFilter("healthFocus", "calciumRich", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="calciumRich" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Calcium Rich
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="pregnancyDiet"
              checked={filters.healthFocus.pregnancyDiet}
              onCheckedChange={(checked) =>
                updateFilter("healthFocus", "pregnancyDiet", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="pregnancyDiet" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Pregnancy Diet
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="diabeticFriendly"
              checked={filters.healthFocus.diabeticFriendly}
              onCheckedChange={(checked) =>
                updateFilter("healthFocus", "diabeticFriendly", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="diabeticFriendly" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Diabetic Friendly
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="women40Plus"
              checked={filters.healthFocus.women40Plus}
              onCheckedChange={(checked) =>
                updateFilter("healthFocus", "women40Plus", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="women40Plus" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Women 40+
            </Label>
          </div>
        </div>
      </div>

      <Separator className="my-4 bg-emerald-100" />

      {/* Prep Time */}
      <div className="space-y-3 mb-4">
        <p className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Clock className="h-4 w-4 text-amber-600" />
          Prep Time
        </p>
        <div className="space-y-2 pl-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="under15"
              checked={filters.prepTime.under15}
              onCheckedChange={(checked) =>
                updateFilter("prepTime", "under15", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="under15" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Under 15 min
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="under30"
              checked={filters.prepTime.under30}
              onCheckedChange={(checked) =>
                updateFilter("prepTime", "under30", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="under30" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Under 30 min
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="under60"
              checked={filters.prepTime.under60}
              onCheckedChange={(checked) =>
                updateFilter("prepTime", "under60", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="under60" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Under 60 min
            </Label>
          </div>
        </div>
      </div>

      <Separator className="my-4 bg-emerald-100" />

      {/* Meal Type */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Utensils className="h-4 w-4 text-cyan-600" />
          Meal Type
        </p>
        <div className="space-y-2 pl-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="breakfast"
              checked={filters.mealType.breakfast}
              onCheckedChange={(checked) =>
                updateFilter("mealType", "breakfast", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="breakfast" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Breakfast
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="lunch"
              checked={filters.mealType.lunch}
              onCheckedChange={(checked) =>
                updateFilter("mealType", "lunch", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="lunch" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Lunch
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="dinner"
              checked={filters.mealType.dinner}
              onCheckedChange={(checked) =>
                updateFilter("mealType", "dinner", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="dinner" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Dinner
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="snacks"
              checked={filters.mealType.snacks}
              onCheckedChange={(checked) =>
                updateFilter("mealType", "snacks", checked as boolean)
              }
              className="border-emerald-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
            />
            <Label htmlFor="snacks" className="cursor-pointer text-sm text-slate-700 hover:text-slate-900">
              Snacks
            </Label>
          </div>
        </div>
      </div>
    </Card>
  );
}
