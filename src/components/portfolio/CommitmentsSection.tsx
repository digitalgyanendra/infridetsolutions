
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const CommitmentsSection = () => {
  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 gradient-text">Our Commitments</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          In 2024, we've launched two key offerings to help you succeed:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="glass-card-primary border-orange-300/30 glowing-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Channel Growth</h3>
              <p className="text-gray-600">
                We'll help you set up your YouTube channel for long-term growth with a solid foundation and strategy.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card-secondary border-blue-300/30 glowing-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Content Strategy</h3>
              <p className="text-gray-600">
                We'll help you create a content strategy that drives engagement and revenue for sustainable growth.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-xl font-semibold text-orange-600">
          All this while increasing your Views by 3x-5x on average within 3-6 Months.
        </div>
      </div>
    </motion.section>
  );
};

export default CommitmentsSection;
