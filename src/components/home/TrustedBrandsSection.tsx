
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const TrustedBrandsSection = () => {
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
    
    // Use requestAnimationFrame for smoother animation
    let animationId: number;
    
    // Only start animation when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animationId = requestAnimationFrame(scroll);
        } else {
          cancelAnimationFrame(animationId);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(scrollContainer);
    
    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  // Add new logo URLs
  const companyLogos = [
    { 
      name: "Josh Talks", 
      highlight: true,
      imgSrc: "/lovable-uploads/325d2d7a-2a49-4220-8cc1-150319570c01.png",
      width: 100,
      height: 64
    },
    { 
      name: "PharmEasy", 
      highlight: false, 
      imgSrc: "/lovable-uploads/192a9d94-67c9-40ad-b0b4-e12aaac8ce93.png",
      width: 100,
      height: 64
    },
    { 
      name: "MPL", 
      highlight: false,
      imgSrc: "/lovable-uploads/7b907a0d-539e-432d-bef2-9f0b3c5e9149.png",
      width: 100,
      height: 64
    },
    { 
      name: "Vmart", 
      highlight: true,
      imgSrc: "/lovable-uploads/b6fd9020-9cfe-4d9b-92a9-bc7fd9dc3f13.png",
      width: 100,
      height: 64
    },
    { 
      name: "Meesho", 
      highlight: false,
      imgSrc: "/lovable-uploads/bd4ba683-8219-4087-9708-0ef157a6cb71.png",
      width: 100,
      height: 64
    },
    { 
      name: "Confirmtkt", 
      highlight: true,
      imgSrc: "/lovable-uploads/3683885c-5b52-4464-87e1-25c19d49f75c.png",
      width: 100,
      height: 64
    },
    { 
      name: "Dream11", 
      highlight: false,
      imgSrc: "/lovable-uploads/f0247702-91e6-4dd7-8ca6-550b78fab2e6.png",
      width: 100,
      height: 64
    },
    { 
      name: "Airtel", 
      highlight: true,
      imgSrc: "/lovable-uploads/198368ec-73cb-47ce-892a-f0d7620fae08.png",
      width: 100,
      height: 64
    },
    { 
      name: "OYO", 
      highlight: false,
      imgSrc: "/lovable-uploads/35311a15-9e05-4d4a-bf6e-6b9a7fc6b8b5.png",
      width: 100,
      height: 64
    },
    // Previously provided logos with optimized loading
    { 
      name: "Physics Wallah", 
      highlight: true,
      imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYXrdQffKHm97oCHSFyLupNJPe0wE9Nm_sHp5NLuCUK7GD_UxZnuoFt5PRRv0r27V9kjjsKh8K3u87DAKJRTatfJwK4D9PcHksspdkfK79cFXN6QbEBNMTXw4PPorKRhtiyxi4GmqMvNe5vrvH_cSbElVyKYHJfnX0_ErM0raAbZ2T-XhvGlNNLL6uM4Lb/w319-h320/physics-wallah-seeklogo.png",
      width: 100,
      height: 64
    },
    { 
      name: "Seekho", 
      highlight: true,
      style: {
        background: "#d8d8d8 url('https://fonts.gstatic.com/s/i/materialiconsextended/insert_photo/v6/grey600-24dp/1x/baseline_insert_photo_grey600_24dp.png') 50% 50% no-repeat",
        opacity: 0.6
      }
    },
    { 
      name: "Big Bazaar", 
      highlight: true
    },
    { 
      name: "Kuku FM", 
      highlight: false
    },
    { 
      name: "Pocket FM", 
      highlight: true
    },
    { 
      name: "SuperIndia", 
      highlight: false
    }
  ];

  return (
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
                    style={company.style || {}}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                    width={company.width || 100}
                    height={company.height || 64}
                    decoding="async"
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
                    style={company.style || {}}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                    width={company.width || 100}
                    height={company.height || 64}
                    decoding="async"
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
  );
};

export default TrustedBrandsSection;
