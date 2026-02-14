import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, CheckCircle2, AlertCircle, ChefHat, Utensils } from "lucide-react";

interface DailyMealNotificationProps {
  currentDay: string;
  hasMealsPlanned: boolean;
  mealCount: number;
  onOpenMealPlan: () => void;
}

export function DailyMealNotification({ 
  currentDay, 
  hasMealsPlanned, 
  mealCount,
  onOpenMealPlan 
}: DailyMealNotificationProps) {
  if (hasMealsPlanned) {
    // Show success notification when meals are planned
    return (
      <Card className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-md">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-emerald-100 rounded-lg shrink-0">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-slate-900">
                {currentDay}'s Meal Plan Ready!
              </h4>
              <Badge className="bg-emerald-500 text-white">
                {mealCount} meals
              </Badge>
            </div>
            <p className="text-sm text-slate-700 mb-3">
              You have {mealCount} meal{mealCount !== 1 ? 's' : ''} planned for today. 
              Click below to view your complete plan and ingredients list.
            </p>
            <Button 
              size="sm" 
              onClick={onOpenMealPlan}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <Utensils className="h-4 w-4 mr-2" />
              View Today's Plan
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  // Show reminder notification when no meals are planned
  return (
    <Card className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 shadow-md">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-amber-100 rounded-lg shrink-0">
          <AlertCircle className="h-5 w-5 text-amber-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-slate-900">
              Plan Your Meals for {currentDay}
            </h4>
            <Badge className="bg-amber-100 text-amber-700">
              <Calendar className="h-3 w-3 mr-1" />
              Not Planned
            </Badge>
          </div>
          <p className="text-sm text-slate-700 mb-3">
            You haven't planned any meals for today yet. Start planning to stay on track with your nutrition goals!
          </p>
          <Button 
            size="sm" 
            onClick={onOpenMealPlan}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            <ChefHat className="h-4 w-4 mr-2" />
            Start Planning
          </Button>
        </div>
      </div>
    </Card>
  );
}
