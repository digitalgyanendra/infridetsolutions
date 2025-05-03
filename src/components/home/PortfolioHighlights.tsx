
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioHighlights = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Our Impact & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We've helped creators and brands achieve extraordinary growth through 
            strategic digital solutions and data-driven consultancy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-4 flex justify-center">
              <Users size={36} className="text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Client Success</h3>
            <p className="text-muted-foreground text-center mb-4">
              We've helped creators grow from zero to millions of subscribers through 
              strategic content optimization and channel growth techniques.
            </p>
            <div className="bg-background/20 p-3 rounded-lg">
              <p className="text-sm italic text-center">
                "Our client's YouTube channel grew by 250% in just 6 months with our 
                tailored growth strategy, resulting in over 2M new subscribers."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 flex justify-center">
              <TrendingUp size={36} className="text-deepBlue-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Revenue Impact</h3>
            <p className="text-muted-foreground text-center mb-4">
              Our optimization strategies have generated over ₹100 crore in additional 
              revenue for our clients through enhanced monetization.
            </p>
            <div className="bg-background/20 p-3 rounded-lg">
              <p className="text-sm italic text-center">
                "By optimizing our client's content strategy and ad placement, we increased 
                their monthly revenue by 175% within the first quarter."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-4 flex justify-center">
              <Award size={36} className="text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Industry Recognition</h3>
            <p className="text-muted-foreground text-center mb-4">
              Our work with top creators and brands has been recognized for excellence 
              in digital growth and innovative content strategies.
            </p>
            <div className="bg-background/20 p-3 rounded-lg">
              <p className="text-sm italic text-center">
                "Partner of choice for 15+ major brands including PharmEasy, Meesho, 
                Josh Talks, and numerous growing startups."
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/portfolio">
            <Button variant="outline" className="px-8 border-orange-500/30 hover:bg-orange-500/10">
              View Our Full Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
