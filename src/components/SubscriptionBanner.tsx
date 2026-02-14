import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Crown, Calendar, Check, Sparkles, TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export function SubscriptionBanner() {
  return (
    <Card className="p-4 sm:p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-200 shadow-lg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="p-2.5 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl shadow-md">
              <Crown className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-slate-900">
                  Premium Monthly Subscription
                </h3>
                <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0">
                  New
                </Badge>
              </div>
              <p className="text-sm text-slate-700 mb-3">
                Get access to monthly meal plans with fresh, up-to-date recipes tailored for Indian families
              </p>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-slate-600">Monthly meal plans</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-slate-600">Updated recipes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-slate-600">Priority support</span>
                </div>
              </div>
            </div>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-md font-semibold w-full sm:w-auto">
                <Sparkles className="h-4 w-4 mr-2" />
                View Plans
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-xl">
                  <Crown className="h-6 w-6 text-amber-500" />
                  Premium Subscription Plans
                </DialogTitle>
                <DialogDescription>
                  Unlock full monthly meal planning and premium features
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {/* Weekly Plan - Free */}
                <Card className="p-5 border-2 border-slate-200 bg-slate-50">
                  <div className="text-center mb-4">
                    <Badge className="bg-slate-500 text-white mb-3">Current Plan</Badge>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Weekly Plan</h4>
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      Free
                    </div>
                    <p className="text-sm text-slate-600">7 days meal planning</p>
                  </div>
                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700">1 week meal planning</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700">Access to all 1,014 recipes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700">Download weekly plans</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700">Basic nutrition tracking</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" disabled>
                    Current Plan
                  </Button>
                </Card>

                {/* Monthly Plan - Premium */}
                <Card className="p-5 border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-amber-200 rounded-full blur-2xl opacity-40"></div>
                  <div className="relative z-10">
                    <div className="text-center mb-4">
                      <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white mb-3">
                        <Crown className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">Monthly Plan</h4>
                      <div className="flex items-baseline justify-center gap-1 mb-1">
                        <span className="text-3xl font-bold text-slate-900">₹299</span>
                        <span className="text-sm text-slate-600">/month</span>
                      </div>
                      <p className="text-sm text-slate-600">Full month meal planning</p>
                    </div>
                    <div className="space-y-2.5 mb-5">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700"><strong>30-day meal plans</strong></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700"><strong>Updated menus monthly</strong></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700">Seasonal recipe updates</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700">Advanced nutrition analytics</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700">Shopping list generation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700">Priority customer support</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Upgrade Now
                    </Button>
                  </div>
                </Card>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-slate-700 text-center">
                  <strong className="text-slate-900">Special Launch Offer:</strong> Get 20% off your first 3 months! 
                  Use code <Badge className="bg-blue-500 text-white">NATURA20</Badge> at checkout.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  );
}
