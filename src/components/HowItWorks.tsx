
import React from "react";
import { Button } from "@/components/ui/button";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Systems",
      description: "Integrate with your existing EHR/EMR and practice management software through our secure API or pre-built connectors.",
    },
    {
      number: "02",
      title: "Configure Your Workflows",
      description: "Set up your collection strategy, communication preferences, payment plans, and automation rules based on your practice needs.",
    },
    {
      number: "03",
      title: "Activate Smart Collections",
      description: "Launch automated collection sequences that use behavioral science to maximize response rates and payment completion.",
    },
    {
      number: "04",
      title: "Monitor & Optimize",
      description: "Track performance metrics, adjust strategies, and continuously improve your collection process for better results.",
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-medicollect-blue">How</span> It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Getting started with MediCollect Pro is simple. Our team guides you through every step of the implementation process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 h-full feature-card-shadow">
                <div className="text-4xl font-bold text-medicollect-blue/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#2A5DB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-medicollect-blue hover:bg-medicollect-blue/90 text-white px-8 py-6 text-lg">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
