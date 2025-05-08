
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <picture>
              <source 
                srcSet="/lovable-uploads/30adb30e-a545-42cd-a151-a01cd3659715.png" 
                type="image/png"
                media="(min-width: 1024px)"
              />
              <source 
                srcSet="/lovable-uploads/30adb30e-a545-42cd-a151-a01cd3659715.png" 
                type="image/png"
                media="(min-width: 640px)"
              />
              <img 
                src="/lovable-uploads/30adb30e-a545-42cd-a151-a01cd3659715.png"
                alt="Brands we've worked with" 
                className="w-full max-w-5xl mx-auto rounded-lg shadow-xl"
                loading="lazy"
                width="1024"
                height="576"
                decoding="async"
              />
            </picture>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkedWithSection;
