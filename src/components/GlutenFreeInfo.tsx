import { Card } from "./ui/card";
import { Wheat, Check, X, AlertCircle, Info, Utensils, Apple } from "lucide-react";
import { Badge } from "./ui/badge";

export function GlutenFreeInfo() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {/* Header Card */}
      <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <Wheat className="h-8 w-8 text-amber-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              Gluten-Free Diet
            </h2>
            <p className="text-slate-700 leading-relaxed">
              A gluten-free diet excludes the protein gluten, found in grains such as wheat, barley, rye, and triticale. 
              It's essential for managing celiac disease, wheat allergy, and non-celiac gluten sensitivity.
            </p>
          </div>
        </div>
      </Card>

      {/* Why Go Gluten-Free */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="h-5 w-5 text-emerald-600" />
          <h3 className="text-lg font-semibold text-slate-900">
            Who Needs a Gluten-Free Diet?
          </h3>
        </div>
        <div className="space-y-3 text-slate-700">
          <div className="flex gap-3">
            <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100 shrink-0 mt-0.5">
              <AlertCircle className="h-3 w-3 mr-1" />
              Medical
            </Badge>
            <p className="leading-relaxed">
              <strong>Celiac Disease:</strong> An autoimmune disorder where gluten damages the small intestine. 
              Affects about 1% of the population and requires strict gluten avoidance.
            </p>
          </div>
          <div className="flex gap-3">
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 shrink-0 mt-0.5">
              <AlertCircle className="h-3 w-3 mr-1" />
              Allergy
            </Badge>
            <p className="leading-relaxed">
              <strong>Wheat Allergy:</strong> An allergic reaction to proteins found in wheat, including but not limited to gluten.
            </p>
          </div>
          <div className="flex gap-3">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 shrink-0 mt-0.5">
              <AlertCircle className="h-3 w-3 mr-1" />
              Sensitivity
            </Badge>
            <p className="leading-relaxed">
              <strong>Non-Celiac Gluten Sensitivity:</strong> Experiencing symptoms similar to celiac disease but without the intestinal damage.
            </p>
          </div>
        </div>
      </Card>

      {/* Foods to Avoid & Enjoy - Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Avoid */}
        <Card className="p-6 border-2 border-rose-200 bg-rose-50/50">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-rose-100 rounded-lg">
              <X className="h-5 w-5 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Avoid These Foods
            </h3>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-2">
              <X className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Grains</p>
                <p className="text-sm text-slate-600">Wheat, barley, rye, triticale, spelt</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <X className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Products</p>
                <p className="text-sm text-slate-600">Bread, pasta, cookies, cakes, beer</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <X className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Hidden Sources</p>
                <p className="text-sm text-slate-600">Soy sauce, malt vinegar, some sauces</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <X className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Processed Foods</p>
                <p className="text-sm text-slate-600">Some seasonings, soups, and dressings</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Enjoy */}
        <Card className="p-6 border-2 border-emerald-200 bg-emerald-50/50">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Check className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Enjoy These Foods
            </h3>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Grains</p>
                <p className="text-sm text-slate-600">Rice, quinoa, buckwheat, millet, corn</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Proteins</p>
                <p className="text-sm text-slate-600">Fresh meat, fish, eggs, beans, lentils</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Dairy</p>
                <p className="text-sm text-slate-600">Milk, cheese, yogurt, butter</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-slate-900">Produce</p>
                <p className="text-sm text-slate-600">All fruits and vegetables</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Indian Gluten-Free Options */}
      <Card className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-200">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-white rounded-lg">
            <Utensils className="h-5 w-5 text-teal-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            Naturally Gluten-Free Indian Foods
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-700">Rice & rice-based dishes</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-700">Idli, dosa (rice & lentil)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-700">Dal & lentil curries</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-700">Vegetable sabzis</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-700">Paneer dishes</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-700">Rajma, chole, kadhi</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-700">Raita & yogurt-based dishes</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-700">Papad, pakora (chickpea flour)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-700">Fresh fruits & nuts</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-700">Chicken & fish curries</span>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white rounded-lg">
          <p className="text-sm text-slate-600">
            <strong className="text-slate-900">Note:</strong> Avoid roti, chapati, naan, paratha (made from wheat). 
            Use gluten-free alternatives like bajra (pearl millet) roti, jowar (sorghum) roti, or rice-based flatbreads.
          </p>
        </div>
      </Card>

      {/* Tips Card */}
      <Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Apple className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            Tips for Gluten-Free Living
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <p className="font-medium text-slate-900 mb-1">📖 Read Labels Carefully</p>
              <p className="text-sm text-slate-600">Look for "gluten-free" certification or check ingredient lists</p>
            </div>
            <div>
              <p className="font-medium text-slate-900 mb-1">🏠 Prevent Cross-Contamination</p>
              <p className="text-sm text-slate-600">Use separate cookware and toasters for gluten-free foods</p>
            </div>
            <div>
              <p className="font-medium text-slate-900 mb-1">🥗 Focus on Whole Foods</p>
              <p className="text-sm text-slate-600">Naturally gluten-free foods are healthiest and safest</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-slate-900 mb-1">💊 Check Supplements</p>
              <p className="text-sm text-slate-600">Some vitamins and medications may contain gluten</p>
            </div>
            <div>
              <p className="font-medium text-slate-900 mb-1">🍽️ Dining Out Awareness</p>
              <p className="text-sm text-slate-600">Communicate clearly with restaurant staff about your needs</p>
            </div>
            <div>
              <p className="font-medium text-slate-900 mb-1">⚖️ Balanced Nutrition</p>
              <p className="text-sm text-slate-600">Ensure adequate fiber, iron, and B vitamins from GF sources</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Warning Card */}
      <Card className="p-4 bg-amber-50 border-2 border-amber-300">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Important:</strong> If you suspect celiac disease or gluten sensitivity, 
              consult a healthcare professional before starting a gluten-free diet. Proper diagnosis requires gluten in your diet.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
