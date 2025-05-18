
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Essentials",
      price: "199",
      description: "Perfect for small practices with basic collection needs",
      features: [
        "Basic payment plan automation",
        "Email and SMS reminders",
        "Patient portal integration",
        "Credit card processing",
        "Basic reporting"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      price: "399",
      description: "Ideal for growing practices seeking automation and insights",
      features: [
        "Advanced payment plan options",
        "Behavioral messaging system",
        "Digital wallet integration",
        "Financial hardship tools",
        "EHR/EMR integration",
        "Advanced analytics",
        "Priority support"
      ],
      cta: "Start Free Trial",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large practices and healthcare networks",
      features: [
        "Custom collection workflows",
        "Multi-location support",
        "White-labeled solution",
        "API access",
        "Dedicated success manager",
        "Custom integrations",
        "24/7 premium support"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent <span className="text-medicollect-blue">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your practice's needs, with no long-term contracts or hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${plan.highlight ? 'border-medicollect-blue shadow-lg' : 'border-gray-200'} relative overflow-hidden`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0">
                  <div className="bg-medicollect-blue text-white text-xs px-3 py-1 transform rotate-45 translate-x-2 -translate-y-1">
                    Popular
                  </div>
                </div>
              )}
              <CardHeader className={`pb-8 ${plan.highlight ? 'bg-medicollect-blue/5' : ''}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end">
                  <span className="text-3xl md:text-4xl font-bold">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-500 ml-1">/month</span>}
                </div>
                <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-medicollect-teal shrink-0 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.highlight 
                      ? 'bg-medicollect-blue hover:bg-medicollect-blue/90 text-white' 
                      : 'bg-white border border-medicollect-blue text-medicollect-blue hover:bg-medicollect-blue/10'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution? We're here to help.</p>
          <Button variant="outline" className="border-medicollect-blue text-medicollect-blue hover:bg-medicollect-blue/10">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
