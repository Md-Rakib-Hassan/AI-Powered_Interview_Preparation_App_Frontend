import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, BookOpen, PinIcon, MessageSquare } from 'lucide-react';
import { UserContext } from '../context/userContext';


const Hero: React.FC = () => {
  const features = [
    { icon: <Brain className="h-5 w-5" />, text: "AI-Generated Questions" },
    { icon: <BookOpen className="h-5 w-5" />, text: "Role-Based Learning" },
    { icon: <PinIcon className="h-5 w-5" />, text: "Pin Important Topics" },
    { icon: <MessageSquare className="h-5 w-5" />, text: "Dynamic Explanations" }
  ];

  const { user } = useContext(UserContext);

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-blue-900 mb-6">
              Master Your Interviews with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                AI-Powered
              </span>{' '}
              Learning
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Generate personalized interview questions, get AI-powered explanations, and track your progress with our intelligent interview preparation platform.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href={user?`/dashboard`:`/login`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-center transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center group"
              >
                Start Practicing Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-medium text-center transition-colors"
              >
                See How It Works
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Interview Platform" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm font-medium mb-2">Currently practicing:</p>
                  <h3 className="text-xl font-bold">Senior Software Engineer Interview</h3>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-300 rounded-full opacity-50 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;