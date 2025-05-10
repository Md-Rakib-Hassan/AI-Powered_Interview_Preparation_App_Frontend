import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
}

const Step: React.FC<StepProps> = ({ number, title, description, imageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-16 last:mb-0">
      <div className={`md:w-1/2 ${number % 2 === 0 ? 'md:order-1' : 'md:order-2'} px-4`}>
        <div className="relative">
          <img 
            src={imageSrc} 
            alt={title} 
            className="rounded-xl shadow-lg w-full"
          />
          <div className={`absolute ${number % 2 === 0 ? '-left-4' : '-right-4'} -bottom-4 bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold`}>
            {number}
          </div>
        </div>
      </div>
      
      <div className={`md:w-1/2 ${number % 2 === 0 ? 'md:order-2' : 'md:order-1'} px-4 mt-8 md:mt-0`}>
        <h3 className="text-2xl font-bold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Sign up and tell us about your target roles, industries, and experience level so we can customize your interview practice.",
      imageSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      number: 2,
      title: "Schedule Practice Sessions",
      description: "Book mock interviews that fit your schedule. Choose from different types of interviews including behavioral, technical, or role-specific sessions.",
      imageSrc: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      number: 3,
      title: "Practice with AI Interviewers",
      description: "Participate in realistic interview simulations with our AI that asks industry-relevant questions and adapts based on your responses.",
      imageSrc: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      number: 4,
      title: "Review & Improve",
      description: "Receive detailed feedback and insights after each session. Track your progress over time and focus on areas that need improvement.",
      imageSrc: "https://images.unsplash.com/photo-1544819679-57b273c027a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            How InterviewAI Works
          </h2>
          <p className="text-xl text-gray-600">
            Our simple process helps you prepare efficiently and effectively for your interviews.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;