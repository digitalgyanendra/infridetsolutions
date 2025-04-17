
import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <motion.section
      className="py-16 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold gradient-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Join 25 experts already on our platform
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Connect with the best minds in digital creation and business growth
        </motion.p>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
