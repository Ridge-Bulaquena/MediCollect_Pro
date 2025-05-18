
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      title: "Smart Payment Plans",
      description: "Automatically suggest personalized payment plans based on balance size, patient history, and financial profile.",
      iconBg: "bg-blue-100",
      benefits: ["Customizable terms and amounts", "Automated scheduling", "Patient-friendly interface"],
    },
    {
      title: "Digital Wallet Integration",
      description: "Seamlessly accept payments through Apple Pay, Google Pay, and other digital wallets for faster collections.",
      iconBg: "bg-green-100",
      benefits: ["One-click payments", "Secure transactions", "Multiple payment options"],
    },
    {
      title: "Behavioral Communication",
      description: "Science-backed reminders and notifications that drive patient action through proven psychological principles.",
      iconBg: "bg-amber-100",
      benefits: ["Smart timing algorithms", "Personalized messaging", "Multi-channel delivery"],
    },
    {
      title: "Financial Hardship Tools",
      description: "Built-in screening and qualification for assistance programs, charity care, and flexible arrangements.",
      iconBg: "bg-purple-100",
      benefits: ["Program eligibility checks", "Documentation management", "Compliance tracking"],
    },
    {
      title: "EHR/EMR Integration",
      description: "Bi-directional data flow with major electronic health record systems for streamlined operations.",
      iconBg: "bg-rose-100",
      benefits: ["Real-time synchronization", "Automated reconciliation", "Reduced manual entry"],
    },
    {
      title: "HIPAA-First Design",
      description: "End-to-end security and compliance built into every aspect of the platform, from communications to storage.",
      iconBg: "bg-indigo-100",
      benefits: ["Encrypted messaging", "Audit trail documentation", "Role-based permissions"],
    },
  ];

  return (
    <section id="features" className="py-16 bg-medicollect-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="text-medicollect-blue">Modern Practices</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MediCollect Pro combines cutting-edge technology with empathetic design to transform your patient collection process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none feature-card-shadow hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${feature.iconBg} rounded-lg mb-4 flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-medicollect-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d={index === 0 ? "M12 8V16M8 12H16" : 
                          index === 1 ? "M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" :
                          index === 2 ? "M8 11L11 14L16 9" :
                          index === 3 ? "M12 16V12M12 8H12.01" :
                          index === 4 ? "M9 12H15M15 12L12 9M15 12L12 15" :
                          "M12 15V9M9 12H15"} 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-medicollect-teal mr-2" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
