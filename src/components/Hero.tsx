
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-medicollect-blue">Turning unpaid balances</span> into steady cash flow
            </h1>
            <p className="text-xl text-gray-600">
              MediCollect Pro blends behavioral science, payment technology, and EHR integration to boost your practice revenue with empathy and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-medicollect-blue hover:bg-medicollect-blue/90 text-white px-8 py-6 text-lg">
                Request Demo
              </Button>
              <Button variant="outline" className="border-medicollect-blue text-medicollect-blue hover:bg-medicollect-blue/10 px-8 py-6 text-lg">
                How It Works
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">JS</div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">KP</div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">ML</div>
              </div>
              <p className="text-sm text-gray-600">Trusted by <span className="font-semibold">500+</span> medical practices nationwide</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-medicollect-gray-100 rounded-xl p-6 feature-card-shadow">
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Collection Overview</h3>
                  <span className="text-xs text-gray-500">Last 30 days</span>
                </div>
                <div className="h-40 chart-block rounded-lg mb-4 flex items-end">
                  <div className="w-1/6 h-1/4 bg-medicollect-blue/20 rounded-t mx-1"></div>
                  <div className="w-1/6 h-1/3 bg-medicollect-blue/40 rounded-t mx-1"></div>
                  <div className="w-1/6 h-1/2 bg-medicollect-blue/60 rounded-t mx-1"></div>
                  <div className="w-1/6 h-3/5 bg-medicollect-blue/70 rounded-t mx-1"></div>
                  <div className="w-1/6 h-3/4 bg-medicollect-blue/80 rounded-t mx-1"></div>
                  <div className="w-1/6 h-full bg-medicollect-blue rounded-t mx-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Collection Rate</p>
                    <p className="font-bold text-xl stat-value">86%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Avg. Days</p>
                    <p className="font-bold text-xl stat-value">14</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Recovered</p>
                    <p className="font-bold text-xl stat-value">$24k</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 relative mb-3 animate-float">
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-medicollect-amber flex items-center justify-center text-white text-xs">3</div>
                <p className="text-xs text-gray-500 mb-2">Payment Plan Reminder</p>
                <p className="text-sm">Hi Jessica, your next payment of <span className="font-semibold">$75.00</span> is scheduled for <span className="font-semibold">May 21</span>.</p>
                <div className="mt-3 flex gap-2">
                  <button className="text-xs bg-medicollect-blue text-white px-2 py-1 rounded">Pay Now</button>
                  <button className="text-xs border border-gray-200 px-2 py-1 rounded">Adjust Plan</button>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 animate-pulse-soft">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs text-gray-500">Today's Collection Stats</p>
                  <span className="text-xs text-medicollect-teal">↑ 12%</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Sent</p>
                    <p className="font-semibold">214</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Opened</p>
                    <p className="font-semibold">178</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Paid</p>
                    <p className="font-semibold">56</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full gradient-bg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-medicollect-amber opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
