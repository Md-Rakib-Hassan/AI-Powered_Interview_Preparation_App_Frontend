import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  period, 
  description, 
  features,
  isPopular = false
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden border ${isPopular ? 'border-blue-500 transform scale-105' : 'border-gray-200'}`}>
      {isPopular && (
        <div className="bg-blue-700 text-white py-2 text-center text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-blue-900">{price}</span>
          <span className="text-gray-600 ml-2">{period}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>{feature.text}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#" 
          className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
            isPopular 
              ? 'bg-blue-700 hover:bg-blue-800 text-white' 
              : 'bg-white hover:bg-gray-100 text-blue-700 border border-blue-700'
          }`}
        >
          {isPopular ? 'Get Started' : 'Choose Plan'}
        </a>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for beginners to try out interview preparation.",
      features: [
        { text: "3 AI mock interviews per month", included: true },
        { text: "Basic performance analytics", included: true },
        { text: "Access to common interview questions", included: true },
        { text: "Text-based feedback", included: true },
        { text: "Interview recording", included: false },
        { text: "Personalized coaching", included: false },
        { text: "Industry-specific questions", included: false },
        { text: "Unlimited interview sessions", included: false }
      ]
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For job seekers who want comprehensive preparation.",
      features: [
        { text: "15 AI mock interviews per month", included: true },
        { text: "Advanced performance analytics", included: true },
        { text: "Full question library access", included: true },
        { text: "Detailed feedback & improvement tips", included: true },
        { text: "Interview recording & review", included: true },
        { text: "Basic personalized coaching", included: true },
        { text: "Industry-specific questions", included: true },
        { text: "Unlimited interview sessions", included: false }
      ],
      isPopular: true
    },
    {
      name: "Premium",
      price: "$59",
      period: "/month",
      description: "For professionals targeting competitive positions.",
      features: [
        { text: "Unlimited AI mock interviews", included: true },
        { text: "Comprehensive analytics dashboard", included: true },
        { text: "Full question library access", included: true },
        { text: "Expert-level feedback & coaching", included: true },
        { text: "Interview recording & analysis", included: true },
        { text: "Advanced personalized coaching", included: true },
        { text: "Custom industry & company questions", included: true },
        { text: "Priority support", included: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that works best for your interview preparation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom plan for your team or organization?
          </p>
          <a 
            href="#" 
            className="text-blue-700 hover:text-blue-800 font-medium"
          >
            Contact us for enterprise pricing →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;