
import React from "react";
import { motion } from "framer-motion";

const WorkedWithSection = () => {
  return (
    <motion.section 
      className="py-16 bg-black relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold gradient-text mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            WORKED WITH
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img 
              src="/lovable-uploads/76a3608c-1808-48fa-ab73-c5a87ac198da.png"
              alt="Creators we've worked with" 
              className="w-full max-w-6xl mx-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkedWithSection;
