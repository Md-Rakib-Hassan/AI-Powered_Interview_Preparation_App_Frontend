import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";


function LandingPage() {
  return (
      <div className="font-sans bg-white text-gray-900">

         
              
                <Hero />
                <Features />
                <HowItWorks />
                <Testimonials />
                <Pricing />
                <FAQ />
                <CTA />
             
            
      </div>
  );
}

export default LandingPage;