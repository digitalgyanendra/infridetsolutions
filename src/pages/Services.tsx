
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { 
  Youtube, 
  LineChart, 
  Layers, 
  TrendingUp, 
  Compass, 
  MessageSquare,
  BarChart3,
  Users,
  HeartHandshake
} from "lucide-react";

interface ServiceDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ icon, title, description, features, color }) => {
  return (
    <motion.div 
      className="glass-card relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`absolute top-0 left-0 w-1 h-full ${color}`}></div>
      <div className="p-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`w-5 h-5 ${color} rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact">
          <Button className={`w-full ${color === 'bg-orange-500' ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' : 'bg-gradient-to-r from-deepBlue-500 to-deepBlue-600 hover:from-deepBlue-600 hover:to-deepBlue-700'}`}>
            Get Started
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const mainServices = [
    {
      icon: <Youtube size={32} className="text-orange-500" />,
      title: "YouTube Consulting",
      description: "Comprehensive strategies to grow your YouTube channel, increase engagement, and maximize revenue.",
      features: [
        "Content strategy development",
        "Audience growth tactics",
        "SEO optimization for videos",
        "Monetization strategies",
        "Analytics and performance tracking"
      ],
      color: "bg-orange-500"
    },
    {
      icon: <LineChart size={32} className="text-deepBlue-500" />,
      title: "SEO Optimization",
      description: "Data-driven SEO strategies to improve your search rankings and drive organic traffic to your website.",
      features: [
        "Keyword research and analysis",
        "On-page SEO optimization",
        "Technical SEO implementation",
        "Backlink strategy development",
        "Regular performance reporting"
      ],
      color: "bg-deepBlue-500"
    },
    {
      icon: <Layers size={32} className="text-orange-500" />,
      title: "Brand Growth",
      description: "Comprehensive brand development strategies to establish a strong market presence and build customer loyalty.",
      features: [
        "Brand identity development",
        "Market positioning strategies",
        "Customer journey mapping",
        "Social media presence building",
        "Brand consistency across channels"
      ],
      color: "bg-orange-500"
    }
  ];

  const additionalServices = [
    {
      icon: <TrendingUp size={24} />,
      title: "Digital Marketing",
      description: "Full-service digital marketing solutions to drive traffic, leads, and sales."
    },
    {
      icon: <Compass size={24} />,
      title: "Social Media Strategy",
      description: "Strategic social media management to build community and boost engagement."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Content Creation",
      description: "High-quality content creation for blogs, videos, and social media."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize your marketing strategies."
    },
    {
      icon: <Users size={24} />,
      title: "Community Building",
      description: "Strategies to build and nurture a loyal community around your brand."
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "Partnership Development",
      description: "Identifying and securing beneficial partnerships to accelerate growth."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden hero-bg">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide specialized consulting services designed to accelerate your digital growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-b from-background to-silver-100">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Core Consulting Services</h2>
            <p className="text-muted-foreground">
              Our specialized services are designed to meet the unique needs of digital creators and businesses seeking accelerated growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceDetail
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-silver-100 relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Additional Services</h2>
            <p className="text-muted-foreground">
              We offer a wide range of complementary services to support your digital growth journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-silver-100 to-background">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Consulting Process</h2>
            <p className="text-muted-foreground">
              We follow a structured approach to ensure the best results for your digital growth.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-orange-500 to-deepBlue-500 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 relative">
              {[
                {
                  number: "01",
                  title: "Discovery & Analysis",
                  description: "We begin by understanding your goals, target audience, and current digital presence. Our team conducts a comprehensive analysis to identify opportunities and challenges."
                },
                {
                  number: "02",
                  title: "Strategy Development",
                  description: "Based on our findings, we develop a customized strategy tailored to your specific needs and goals, with clear KPIs and measurable objectives."
                },
                {
                  number: "03",
                  title: "Implementation",
                  description: "Our experts work closely with you to implement the strategy, providing guidance and support at every step of the process."
                },
                {
                  number: "04",
                  title: "Monitoring & Optimization",
                  description: "We continuously monitor performance and make data-driven adjustments to optimize results and ensure you achieve your goals."
                },
                {
                  number: "05",
                  title: "Reporting & Review",
                  description: "Regular reporting keeps you informed of progress, while periodic reviews help us refine strategies for continued growth."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row items-start gap-6 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/2 flex md:justify-end relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-deepBlue-500 flex items-center justify-center text-white font-bold absolute left-0 top-0 md:relative md:left-auto md:top-auto md:mr-4 z-10">
                      {/* Circle marker */}
                    </div>
                    <div className={`glass-card p-6 w-full md:max-w-md ${index % 2 === 1 ? 'md:text-right ml-10 md:ml-0' : 'ml-10 md:ml-0'}`}>
                      <div className="text-4xl font-bold gradient-text mb-4">{step.number}</div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block">
                    {/* Spacer for the right side */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-silver-100 relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-10 z-0"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center">
            <motion.h2 
              className="text-3xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Accelerate Your Digital Growth?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Connect with our expert consultants today and start your journey towards exceptional digital growth.
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
                  Contact Us
                </Button>
              </Link>
              <Link to="/register">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-deepBlue-500 hover:bg-deepBlue-500/10 px-8"
                >
                  Register as a Client
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
