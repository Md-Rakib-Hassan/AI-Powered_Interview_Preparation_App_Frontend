import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  company: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, name, position, company, imageSrc }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex flex-col h-full">
      <div className="flex mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 flex-grow">{content}</p>
      
      <div className="flex items-center">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold text-blue-900">{name}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      content: "InterviewAI completely transformed my interview preparation. The AI interviewer asked questions I later encountered in my actual interviews, and the feedback was incredibly helpful. I landed my dream job at Google!",
      name: "Sarah Johnson",
      position: "Software Engineer",
      company: "Google",
      imageSrc: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "As someone who gets nervous during interviews, this platform was a game-changer. Practicing with the AI interviewer helped me feel more confident and prepared. The personalized feedback helped me improve my responses.",
      name: "Michael Chen",
      position: "Product Manager",
      company: "Salesforce",
      imageSrc: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "The industry-specific questions were spot on. I had been struggling with finance interviews, but after a week with InterviewAI, I felt much more prepared and ended up receiving multiple job offers.",
      name: "Emily Rodriguez",
      position: "Financial Analyst",
      company: "JPMorgan Chase",
      imageSrc: "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "I was skeptical about an AI helping with interviews, but I'm now a believer. The platform identified patterns in my responses that I wasn't aware of, and helped me articulate my experiences much more effectively.",
      name: "David Kim",
      position: "Marketing Director",
      company: "Adobe",
      imageSrc: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "After using InterviewAI, I aced my nursing interview. The healthcare-specific scenarios and questions prepared me perfectly, and the feedback on my communication style was invaluable.",
      name: "Jessica Martinez",
      position: "Registered Nurse",
      company: "Mayo Clinic",
      imageSrc: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "The analytics and progress tracking kept me motivated throughout my job search. I could see my improvement over time, which gave me the confidence I needed for my interviews.",
      name: "Robert Wilson",
      position: "Data Scientist",
      company: "Microsoft",
      imageSrc: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const displayTestimonials = () => {
    const itemsPerPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const start = activeIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };
  
  const totalPages = Math.ceil(testimonials.length / (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3));
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Success Stories from Our Users
          </h2>
          <p className="text-xl text-gray-600">
            See how InterviewAI has helped professionals across industries land their dream jobs.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTestimonials().map((testimonial, index) => (
              <Testimonial
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6 text-blue-700" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6 text-blue-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;