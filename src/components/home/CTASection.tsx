
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-deepBlue-500/10 z-0"></div>
      <div className="absolute inset-0 network-bg opacity-20 z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join our network of successful clients and take your digital journey to the next level. 
            Our consultants are ready to help you achieve extraordinary growth.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-gray-800 border-gray-300 hover:bg-gray-100 px-8"
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
