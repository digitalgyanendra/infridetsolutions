
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import SupportersGrid from "@/components/shared/SupportersGrid";
import VideoTestimonials from "@/components/shared/VideoTestimonials";
import WorkedWithSection from "@/components/portfolio/WorkedWithSection";

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
    { 
      name: "Josh Talks", 
      highlight: true,
      imgSrc: "/lovable-uploads/325d2d7a-2a49-4220-8cc1-150319570c01.png" 
    },
    { 
      name: "PharmEasy", 
      highlight: false, 
      imgSrc: "/lovable-uploads/192a9d94-67c9-40ad-b0b4-e12aaac8ce93.png"
    },
    { 
      name: "MPL", 
      highlight: false,
      imgSrc: "/lovable-uploads/7b907a0d-539e-432d-bef2-9f0b3c5e9149.png" 
    },
    { 
      name: "Vmart", 
      highlight: true,
      imgSrc: "/lovable-uploads/b6fd9020-9cfe-4d9b-92a9-bc7fd9dc3f13.png" 
    },
    { 
      name: "Meesho", 
      highlight: false,
      imgSrc: "/lovable-uploads/bd4ba683-8219-4087-9708-0ef157a6cb71.png" 
    },
    { 
      name: "Confirmtkt", 
      highlight: true,
      imgSrc: "/lovable-uploads/3683885c-5b52-4464-87e1-25c19d49f75c.png" 
    },
    { 
      name: "Dream11", 
      highlight: false,
      imgSrc: "/lovable-uploads/f0247702-91e6-4dd7-8ca6-550b78fab2e6.png" 
    },
    { 
      name: "Airtel", 
      highlight: true,
      imgSrc: "/lovable-uploads/198368ec-73cb-47ce-892a-f0d7620fae08.png" 
    },
    { 
      name: "OYO", 
      highlight: false,
      imgSrc: "/lovable-uploads/35311a15-9e05-4d4a-bf6e-6b9a7fc6b8b5.png" 
    },
    { 
      name: "Physics Wallah", 
      highlight: true,
      imgSrc: "" 
    },
    { 
      name: "Seekho", 
      highlight: false,
      imgSrc: "" 
    },
    { 
      name: "Big Bazaar", 
      highlight: true,
      imgSrc: "" 
    },
    { 
      name: "Kuku FM", 
      highlight: false,
      imgSrc: "" 
    },
    { 
      name: "Pocket FM", 
      highlight: true,
      imgSrc: "" 
    },
    { 
      name: "SuperIndia", 
      highlight: false,
      imgSrc: "" 
    }
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
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">Trusted by Brands Worldwide</h2>
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
              Partnering with industry leaders to drive growth
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
                  className={`h-16 shrink-0 transition-all duration-300 hover:opacity-100 hover:scale-110 ${
                    company.highlight ? 'opacity-90' : 'opacity-70'
                  }`}
                >
                  {company.imgSrc ? (
                    <img 
                      src={company.imgSrc} 
                      alt={company.name} 
                      className="h-full w-auto object-contain"
                    />
                  ) : (
                    <div className={`font-bold text-xl whitespace-nowrap ${
                      company.highlight ? 'gradient-text' : 'text-white/60'
                    }`}>
                      {company.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Duplicate the logos for continuous scrolling effect */}
            <div className="flex flex-nowrap gap-8 min-w-max ml-8">
              {companyLogos.map((company, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className={`h-16 shrink-0 transition-all duration-300 hover:opacity-100 hover:scale-110 ${
                    company.highlight ? 'opacity-90' : 'opacity-70'
                  }`}
                >
                  {company.imgSrc ? (
                    <img 
                      src={company.imgSrc} 
                      alt={company.name} 
                      className="h-full w-auto object-contain"
                    />
                  ) : (
                    <div className={`font-bold text-xl whitespace-nowrap ${
                      company.highlight ? 'gradient-text' : 'text-white/60'
                    }`}>
                      {company.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              <span className="text-orange-500 font-bold">35+ Million</span> Subscribers | 
              <span className="text-deepBlue-500 font-bold"> 2.5+ Billion</span> Views | 
              <span className="text-orange-500 font-bold"> Billions</span> of Impressions
            </p>
          </div>
        </div>
      </motion.section>
      
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      
      {/* We worked and learned from them section */}
      <SupportersGrid columns={2} />
      
      {/* Worked With section */}
      <WorkedWithSection />
      
      {/* Video Testimonials */}
      <VideoTestimonials />
      
      <CTASection />
    </Layout>
  );
};

export default Index;
