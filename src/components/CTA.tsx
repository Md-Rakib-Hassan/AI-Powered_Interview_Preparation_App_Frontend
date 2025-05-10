import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-800 rounded-full opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-800 rounded-full opacity-60" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Interview Performance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have landed their dream jobs after practicing with InterviewAI. Start your journey today with a free interview session.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-4 rounded-lg font-medium text-center transition-colors shadow-md flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            {/* <a 
              href="#" 
              className="bg-transparent border border-white text-white hover:bg-blue-800 px-8 py-4 rounded-lg font-medium text-center transition-colors"
            >
              Schedule Demo
            </a> */}
          </div>
          
          <p className="mt-6 text-blue-200">
            No credit card required. Start with free interviews Preparation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;