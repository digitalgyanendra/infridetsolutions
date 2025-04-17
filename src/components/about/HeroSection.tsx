
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center justify-center text-center">
          <div className="mx-auto mb-8 w-48">
            <img 
              src="/lovable-uploads/e3ba2912-21c5-4220-9257-320f415b9352.png" 
              alt="Infridet Solutions Logo" 
              className="w-full h-auto"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              About Infridet Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Infridet Solutions Private Limited is a premier technology and digital marketing consultancy specializing in AI automation, YouTube growth strategies, and comprehensive digital presence optimization for creators and businesses.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded by AI automation expert Gyanendra Dwivedi, we combine cutting-edge technological solutions with strategic marketing expertise to help our clients achieve sustainable growth in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-md transition-all"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-orange-500/50 hover:bg-orange-500/10 text-white font-medium rounded-md transition-all"
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
