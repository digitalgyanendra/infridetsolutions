
import React from "react";
import { motion } from "framer-motion";

const TrustedBrandsSection = () => {
  // Add new logo URLs
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
      imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYXrdQffKHm97oCHSFyLupNJPe0wE9Nm_sHp5NLuCUK7GD_UxZnuoFt5PRRv0r27V9kjjsKh8K3u87DAKJRTatfJwK4D9PcHksspdkfK79cFXN6QbEBNMTXw4PPorKRhtiyxi4GmqMvNe5vrvH_cSbElVyKYHJfnX0_ErM0raAbZ2T-XhvGlNNLL6uM4Lb/w319-h320/physics-wallah-seeklogo.png"
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
        
        {/* CSS-based scrolling animation */}
        <div className="overflow-hidden relative">
          <div className="flex logo-carousel">
            {companyLogos.map((company, index) => (
              <div 
                key={index} 
                className={`h-16 shrink-0 mx-4 transition-all duration-300 hover:opacity-100 hover:scale-110 ${
                  company.highlight ? 'opacity-90' : 'opacity-70'
                }`}
                style={{ minWidth: '100px' }}
              >
                {company.imgSrc ? (
                  <img 
                    src={company.imgSrc} 
                    alt={company.name} 
                    className="h-full w-auto object-contain"
                    loading="lazy"
                    width="100"
                    height="64"
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
            
            {/* Duplicate for seamless scrolling */}
            {companyLogos.map((company, index) => (
              <div 
                key={`duplicate-${index}`} 
                className={`h-16 shrink-0 mx-4 transition-all duration-300 hover:opacity-100 hover:scale-110 ${
                  company.highlight ? 'opacity-90' : 'opacity-70'
                }`}
                style={{ minWidth: '100px' }}
              >
                {company.imgSrc ? (
                  <img 
                    src={company.imgSrc} 
                    alt={company.name} 
                    className="h-full w-auto object-contain"
                    loading="lazy"
                    width="100"
                    height="64"
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
