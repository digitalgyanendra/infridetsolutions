
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              About Infridet Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of digital marketing specialists dedicated to helping creators and businesses thrive in the digital space through innovative strategies and personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="max-w-[300px] w-full">
              <img
                src="/lovable-uploads/3a1238bf-43d7-4308-b873-3d789a424e88.png"
                alt="Infridet Solutions Logo"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
