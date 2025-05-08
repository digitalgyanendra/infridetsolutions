
import React from "react";
import { motion } from "framer-motion";

// Updated company logos with proper image paths and formats
const companyLogos = [
  { 
    name: "Josh Talks", 
    highlight: true,
    imgSrc: "/lovable-uploads/325d2d7a-2a49-4220-8cc1-150319570c01.webp" 
  },
  { 
    name: "PharmEasy", 
    highlight: false, 
    imgSrc: "/lovable-uploads/192a9d94-67c9-40ad-b0b4-e12aaac8ce93.webp"
  },
  { 
    name: "MPL", 
    highlight: false,
    imgSrc: "/lovable-uploads/7b907a0d-539e-432d-bef2-9f0b3c5e9149.webp" 
  },
  { 
    name: "Vmart", 
    highlight: true,
    imgSrc: "/lovable-uploads/b6fd9020-9cfe-4d9b-92a9-bc7fd9dc3f13.webp" 
  },
  { 
    name: "Meesho", 
    highlight: false,
    imgSrc: "/lovable-uploads/bd4ba683-8219-4087-9708-0ef157a6cb71.webp" 
  },
  { 
    name: "Confirmtkt", 
    highlight: true,
    imgSrc: "/lovable-uploads/3683885c-5b52-4464-87e1-25c19d49f75c.webp" 
  },
  { 
    name: "Dream11", 
    highlight: false,
    imgSrc: "/lovable-uploads/f0247702-91e6-4dd7-8ca6-550b78fab2e6.webp" 
  },
  { 
    name: "Airtel", 
    highlight: true,
    imgSrc: "/lovable-uploads/198368ec-73cb-47ce-892a-f0d7620fae08.webp" 
  },
  { 
    name: "OYO", 
    highlight: false,
    imgSrc: "/lovable-uploads/35311a15-9e05-4d4a-bf6e-6b9a7fc6b8b5.webp" 
  },
  { 
    name: "Physics Wallah", 
    highlight: true,
    imgSrc: "/lovable-uploads/1dcf30bc-6461-4556-b062-c28e54c66767.png"
  },
  { 
    name: "Big Bazaar", 
    highlight: true,
    imgSrc: "/lovable-uploads/c456053e-22bc-4131-9ce5-44390b74a38a.webp" 
  },
  { 
    name: "Kuku FM", 
    highlight: false,
    imgSrc: "/lovable-uploads/cd0319be-f058-4879-b419-92935b1d069c.webp" 
  }
];

const TrustedBrandsSection = () => {
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
        
        {/* Brand logos display grid instead of carousel for better reliability */}
        <div className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {companyLogos.map((company, index) => (
              <div 
                key={index} 
                className={`h-16 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  company.highlight ? 'opacity-90' : 'opacity-70'
                } hover:opacity-100`}
              >
                {company.imgSrc ? (
                  <img 
                    src={company.imgSrc} 
                    alt={company.name} 
                    className="h-12 w-auto object-contain"
                    loading={index > 6 ? "lazy" : "eager"}
                    width="100"
                    height="64"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = company.name;
                    }}
                  />
                ) : (
                  <div className={`font-bold text-lg whitespace-nowrap ${
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
