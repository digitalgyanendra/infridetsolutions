
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section 
      className="py-20 bg-black hero-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.h1 
          className="text-6xl sm:text-7xl font-bold mb-8 gradient-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Our Portfolio
        </motion.h1>
        <motion.p 
          className="text-2xl text-white max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We've generated over 35+ Million Subscribers, over 2.5+ Billion Views, and billions of impressions on YouTube
          working with top brands and creators.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
