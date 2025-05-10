import React, { useState, useEffect } from 'react';
import { MenuIcon, X, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Laptop className="h-8 w-8 text-blue-700" />
            <span className="ml-2 text-xl font-bold text-blue-900">InterviewAI</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-700 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-700 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-700 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-700 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-700 transition-colors">FAQ</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to={'/login'} className="text-blue-700 hover:text-blue-800 transition-colors">Login</Link>
            <Link
              to={'/signup'}
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>
          
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <a 
                href="#" 
                className="text-blue-700 hover:text-blue-800 transition-colors py-2"
              >
                Login
              </a>
              <a 
                href="#" 
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;