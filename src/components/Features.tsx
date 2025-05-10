import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  PinIcon, 
  MessageSquare, 
  Database,
  Shield,
  Sparkles,
  BarChart3
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 inline-flex mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Authentication",
      description: "Register and log in securely with JWT-based authentication to keep your practice sessions private."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Role-Based Sessions",
      description: "Get interview questions tailored to your specific job role and experience level."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Q&A",
      description: "Experience dynamic question generation and detailed answers using advanced AI technology."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Interactive Learning",
      description: "Study with an expandable accordion UI that makes learning flow natural and efficient."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Explanations",
      description: "Get in-depth concept breakdowns and clarifications powered by AI when you need them."
    },
    {
      icon: <PinIcon className="h-6 w-6" />,
      title: "Question Pinning",
      description: "Save and pin important questions for quick access during your review sessions."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Cloud Storage",
      description: "All your practice sessions and pinned questions are securely stored for future reference."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and performance insights."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Powerful Features for Interview Success
          </h2>
          <p className="text-xl text-gray-600">
            Our AI-powered platform provides everything you need to prepare effectively and ace your interviews.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;