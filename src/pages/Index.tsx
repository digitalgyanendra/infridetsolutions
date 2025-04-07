
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Trusted by section */}
      <motion.section 
        className="py-16 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
              Trusted by brands worldwide
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {/* Company logos in grayscale */}
            {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company, index) => (
              <div 
                key={index} 
                className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-orange-500 to-deepBlue-500 text-transparent bg-clip-text font-bold text-xl">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
