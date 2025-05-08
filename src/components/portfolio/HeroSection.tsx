
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section 
      className="py-20 md:py-28 bg-black hero-bg relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
        <motion.h1 
          className="text-6xl sm:text-7xl font-bold mb-8 gradient-text drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Our Portfolio
        </motion.h1>
        <motion.div 
          className="bg-black/60 p-6 rounded-xl max-w-3xl mx-auto backdrop-blur-sm border border-white/10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-2xl text-white font-medium">
            We've generated over <span className="text-orange-500 font-bold">35+ Million Subscribers</span>, 
            over <span className="text-deepBlue-500 font-bold">2.5+ Billion Views</span>, and billions of impressions 
            on YouTube working with top brands and creators.
          </p>
        </motion.div>
        
        {/* Background logo effect */}
        <div className="absolute right-0 bottom-0 opacity-10 z-0 pointer-events-none">
          <img 
            src="/lovable-uploads/35311a15-9e05-4d4a-bf6e-6b9a7fc6b8b5.png" 
            alt="Infridet Logo" 
            className="w-64 md:w-80"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
