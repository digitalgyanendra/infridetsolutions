
import React from "react";
import { motion } from "framer-motion";
import { Youtube, LineChart, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass-card p-6 hover:glowing-border group transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center mb-6 group-hover:from-orange-500/30 group-hover:to-deepBlue-500/30 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link to="/services" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
        Learn more 
        <svg className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "YouTube Consulting",
      description: "Optimize your content strategy, improve engagement, and scale your channel with expert guidance.",
      icon: <Youtube size={32} className="text-orange-500" />,
    },
    {
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic with comprehensive SEO strategies.",
      icon: <LineChart size={32} className="text-deepBlue-500" />,
    },
    {
      title: "Brand Growth",
      description: "Develop a distinctive brand identity and maximize your market presence across all platforms.",
      icon: <Layers size={32} className="text-orange-500" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-black/95">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We offer specialized consulting services to help you achieve exceptional digital growth and maximize your online potential.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 mt-4">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
