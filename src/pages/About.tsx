
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { Shield, Target, Award, Clock, User, Users } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="glass-card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const values = [
    {
      icon: <Shield size={24} className="text-orange-500" />,
      title: "Trust & Security",
      description: "We prioritize the security of our platform and the trust of our clients above all else.",
    },
    {
      icon: <Target size={24} className="text-deepBlue-500" />,
      title: "Growth-Focused",
      description: "Every strategy and recommendation is designed with measurable growth outcomes in mind.",
    },
    {
      icon: <Award size={24} className="text-orange-500" />,
      title: "Expert Curation",
      description: "We handpick consultants with proven track records and verified expertise in their fields.",
    },
    {
      icon: <Clock size={24} className="text-deepBlue-500" />,
      title: "Timely Delivery",
      description: "We understand the value of time and always deliver results within the promised timeframes.",
    },
    {
      icon: <User size={24} className="text-orange-500" />,
      title: "Personalized Approach",
      description: "Every client receives strategies tailored specifically to their unique goals and challenges.",
    },
    {
      icon: <Users size={24} className="text-deepBlue-500" />,
      title: "Collaborative Spirit",
      description: "We believe in working closely with our clients to achieve the best possible outcomes.",
    },
  ];

  const timelineEvents = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Infridet Solutions Pvt. Ltd. was established with a vision to bridge the gap between creators and digital growth.",
    },
    {
      year: "2021",
      title: "Service Expansion",
      description: "Expanded our service offerings to include comprehensive SEO and brand development strategies.",
    },
    {
      year: "2022",
      title: "Platform Launch",
      description: "Launched our digital marketplace platform connecting expert consultants with businesses.",
    },
    {
      year: "2023",
      title: "International Growth",
      description: "Expanded operations to serve clients across 15+ countries with specialized regional strategies.",
    },
    {
      year: "2024",
      title: "Award Recognition",
      description: "Recognized as one of the top digital consulting platforms in India by TechIndia Awards.",
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to innovate and expand our services to meet the evolving needs of digital creators and businesses.",
    },
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
              About Digital Nexus
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empowering digital creators and businesses with expert consultancy and growth strategies since 2020.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Infridet Solutions Pvt. Ltd. was born from a simple observation: the digital landscape is complex, and creators and businesses often struggle to navigate it effectively.
                </p>
                <p>
                  Founded in 2020 by a team of digital marketing experts and content creators, we set out to create a platform that would simplify digital growth for everyone.
                </p>
                <p>
                  Our marketplace connects businesses with vetted consultants who specialize in YouTube growth, SEO optimization, and brand development, ensuring that everyone has access to the expertise they need.
                </p>
                <p>
                  Today, we're proud to serve clients across 15+ countries, helping them achieve extraordinary growth and success in the digital world.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 glass-card p-6 overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-orange-900/30 to-deepBlue-900/30 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Infridet Solutions Pvt. Ltd.</h3>
                  <p className="text-muted-foreground mb-4">Mahagun Mantra 1, Sector 10, Noida, UP</p>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-deepBlue-500 flex items-center justify-center text-2xl font-bold text-white">
                    DN
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              These core principles guide our operations and relationships with clients and consultants.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The evolution of Digital Nexus from its founding to the present day.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-deepBlue-500 md:transform md:-translate-x-0.5 z-0"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row gap-4 relative z-10 ${
                    index % 2 === 0 ? 'md:text-right md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center md:w-1/2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-deepBlue-500 flex items-center justify-center text-white font-bold md:ml-auto md:mr-auto">
                      {/* Circle indicator */}
                    </div>
                    <div className="ml-4 md:ml-0">
                      <span className="text-2xl font-bold gradient-text">{event.year}</span>
                    </div>
                  </div>
                  <div className="glass-card p-6 ml-8 md:ml-0 md:w-1/2">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
