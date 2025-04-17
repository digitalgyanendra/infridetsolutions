
import React from "react";
import { motion } from "framer-motion";

const WorkedWithSection = () => {
  return (
    <motion.section 
      className="py-16 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/d6495f81-8718-40ab-bd70-34785247f04b.png"
            alt="Creators we've worked with" 
            className="w-full max-w-6xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default WorkedWithSection;
