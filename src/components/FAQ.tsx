import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-blue-900">{question}</h3>
        {isOpen ? 
          <ChevronUp className="h-5 w-5 text-blue-700" /> : 
          <ChevronDown className="h-5 w-5 text-blue-700" />
        }
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How realistic are the AI interview simulations?",
      answer: "Our AI interviews are designed to closely mimic real interview experiences. The system uses advanced natural language processing to understand your responses and provide relevant follow-up questions, just like a human interviewer would. Many users report that the questions they encounter in our simulations are very similar to those they face in actual interviews."
    },
    {
      question: "What types of interviews can I practice?",
      answer: "InterviewAI supports multiple interview formats including behavioral interviews, technical interviews for various roles (software engineering, data science, etc.), case interviews for consulting positions, and industry-specific interviews for fields like healthcare, finance, marketing, and more."
    },
    {
      question: "How does the feedback system work?",
      answer: "After each practice interview, our AI analyzes your responses based on factors like content relevance, structure, clarity, and confidence. You'll receive detailed feedback on what you did well and specific areas for improvement. The system also provides suggestion alternatives for stronger responses."
    },
    {
      question: "Can I practice for specific companies?",
      answer: "Yes! With our Professional and Premium plans, you can select specific companies to tailor your practice sessions. Our system will include questions commonly asked by those companies and adjust the interview style to match their known interview processes."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We take data privacy very seriously. All your interview sessions and personal information are encrypted and securely stored. We do not share your data with third parties, and you can request deletion of your data at any time through your account settings."
    },
    {
      question: "Can I access InterviewAI on mobile devices?",
      answer: "Yes, InterviewAI is fully responsive and works on desktop, tablet, and mobile devices. We also offer dedicated apps for iOS and Android for an optimized mobile experience."
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "Yes, we offer a 7-day money-back guarantee for all paid plans. If you're not completely satisfied with the service, you can request a full refund within 7 days of your initial purchase."
    },
    {
      question: "How often is the question database updated?",
      answer: "We continuously update our question database based on industry trends, user feedback, and real interview reports. Our team of career experts reviews and adds new questions weekly to ensure our content remains current and relevant."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about InterviewAI.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="#" 
            className="text-blue-700 hover:text-blue-800 font-medium"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;