
import React from "react";
import { motion } from "framer-motion";

const OwnerSection = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About the Founder</h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                Gyanendra Dwivedi, the founder and CEO of Infridet Solutions, is a passionate AI automation expert and YouTube specialist with years of experience helping creators and businesses build their online presence.
              </p>
              <p>
                With a background in AI-driven marketing strategies and content optimization, Gyanendra has worked with numerous content creators, helping them grow their audience and monetize their platforms effectively.
              </p>
              <p>
                His vision for Infridet Solutions is to provide accessible, cutting-edge digital marketing services that empower creators to focus on their craft while our team handles the growth strategy.
              </p>
            </div>
            <div className="pt-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-md transition-all"
              >
                Work With Us
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/lovable-uploads/3a1238bf-43d7-4308-b873-3d789a424e88.png"
              alt="Gyanendra Dwivedi - Founder of Infridet Solutions"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
