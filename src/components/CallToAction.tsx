
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-medicollect-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-xl p-8 md:p-12 feature-card-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your <span className="text-medicollect-blue">patient collections</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join hundreds of medical practices already using MediCollect Pro to increase cash flow and improve the patient financial experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-medicollect-blue hover:bg-medicollect-blue/90 text-white px-8 py-6 text-lg">
                  Schedule a Demo
                </Button>
                <Button variant="outline" className="border-medicollect-blue text-medicollect-blue hover:bg-medicollect-blue/10 px-8 py-6 text-lg">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="bg-medicollect-gray-100 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-medicollect-blue/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-medicollect-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Faster Collections</h4>
                    <p className="text-sm text-gray-600">Reduce A/R days by an average of 17 days</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-medicollect-teal/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-medicollect-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Increased Revenue</h4>
                    <p className="text-sm text-gray-600">Boost collection rates by 25-40%</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-medicollect-amber/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-medicollect-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Improved Patient Satisfaction</h4>
                    <p className="text-sm text-gray-600">92% of patients prefer our flexible approach</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-medicollect-blue/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-medicollect-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Staff Time Savings</h4>
                    <p className="text-sm text-gray-600">Reduce collection workload by 75%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
