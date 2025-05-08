
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserPlus, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Static gradient background instead of animated for better performance */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/90 z-10"></div>
      
      {/* Content - Optimized for LCP */}
      <div className="container px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Empowering Digital Creators and Businesses
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect with expert consultants to accelerate your digital growth. 
            Specialized in YouTube growth, SEO, and brand development.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/register">
              <Button 
                size="lg" 
                className="text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-orange-500/25 transition-all px-8"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Become a Consultant
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-deepBlue-500 hover:bg-deepBlue-500/10 shadow-lg hover:shadow-deepBlue-500/25 transition-all px-8"
              >
                <Search className="mr-2 h-5 w-5" />
                Find a Consultant
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-background flex items-center justify-center">
                  <span className="text-xs font-medium">🧑‍💼</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Join <span className="text-primary font-medium">25 experts</span> already on our platform
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave - simplified SVG */}
      <div className="absolute bottom-0 w-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" width="1440" height="120" className="w-full" aria-hidden="true">
          <path 
            fill="currentColor" 
            className="text-background"
            d="M0,96L1440,32L1440,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
