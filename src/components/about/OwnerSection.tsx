
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
                Gyanendra Dwivedi, the founder and CEO of Infridet Solutions Private Limited, is a visionary AI automation expert and YouTube specialist with extensive experience in digital transformation and content optimization.
              </p>
              <p>
                With profound expertise in leveraging artificial intelligence for business growth and content strategy, Gyanendra has helped numerous creators and businesses amplify their digital presence and achieve remarkable growth metrics across platforms.
              </p>
              <p>
                Under his leadership, Infridet Solutions has evolved into a comprehensive digital consultancy offering specialized services in YouTube channel optimization, AI-driven marketing automation, content strategy development, and holistic brand growth solutions.
              </p>
              <p>
                His innovative approach combines data-driven insights with creative content strategies, enabling clients to stay ahead in the rapidly evolving digital ecosystem while maximizing their audience engagement and revenue potential.
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
              width="600" 
              height="450"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
