
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Globe } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-6 glass-card transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-1 gradient-text">{value}</h3>
      <p className="text-gray-600 text-center">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp size={28} className="text-orange-500" />,
      value: "43M+",
      label: "Total Subscribers",
    },
    {
      icon: <Users size={28} className="text-deepBlue-500" />,
      value: "6.5B+",
      label: "Total Views",
    },
    {
      icon: <Award size={28} className="text-orange-500" />,
      value: "150+",
      label: "Expert Consultants",
    },
    {
      icon: <Globe size={28} className="text-deepBlue-500" />,
      value: "15+",
      label: "Countries Covered",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 network-bg opacity-10 z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real results that showcase our commitment to delivering exceptional value and growth for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
