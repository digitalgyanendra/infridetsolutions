
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    
    let scrollPos = 0;
    const scrollSpeed = 0.5;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPos += scrollSpeed;
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0;
      }
      
      scrollContainer.scrollLeft = scrollPos;
      requestAnimationFrame(scroll);
    };
    
    const animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const companyLogos = [
    { name: "Josh Talks", highlight: true },
    { name: "Physics Wallah", highlight: false },
    { name: "Seekho", highlight: false },
    { name: "Vmart", highlight: true },
    { name: "Big Bazar", highlight: false },
    { name: "Kuku FM", highlight: true },
    { name: "Pocket FM", highlight: false },
    { name: "SuperIndia", highlight: true },
    { name: "Karma Inspired", highlight: false },
    { name: "The Global Thinking", highlight: true }
  ];

  return (
    <Layout>
      <HeroSection />
      
      {/* Trusted by section */}
      <motion.section 
        className="py-12 bg-black overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
              Trusted by brands worldwide
            </p>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-4 scrollbar-hide" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex flex-nowrap gap-8 min-w-max">
              {companyLogos.map((company, index) => (
                <div 
                  key={index} 
                  className={`h-10 shrink-0 transition-all duration-300 hover:opacity-100 hover:scale-110 ${
                    company.highlight ? 'gradient-text opacity-90' : 'text-white/60 opacity-70'
                  }`}
                >
                  <div className={`font-bold text-xl whitespace-nowrap`}>
                    {company.name}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate the logos for continuous scrolling effect */}
            <div className="flex flex-nowrap gap-8 min-w-max ml-8">
              {companyLogos.map((company, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className={`h-10 shrink-0 transition-all duration-300 hover:opacity-100 hover:scale-110 ${
                    company.highlight ? 'gradient-text opacity-90' : 'text-white/60 opacity-70'
                  }`}
                >
                  <div className={`font-bold text-xl whitespace-nowrap`}>
                    {company.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              <span className="text-orange-500 font-bold">53+ Million</span> Subscribers | 
              <span className="text-deepBlue-500 font-bold"> 6.9+ Billion</span> Views | 
              <span className="text-orange-500 font-bold"> Billions</span> of Impressions
            </p>
          </div>
        </div>
      </motion.section>
      
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
