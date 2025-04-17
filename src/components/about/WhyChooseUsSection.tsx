
import React from "react";
import { motion } from "framer-motion";
import { LineChart, TrendingUp, Users, Award, Clock, HeartHandshake } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Data-Driven Approach",
      description: "We make decisions based on data and analytics to optimize performance and maximize results."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Expert Team",
      description: "Our team of specialists brings years of experience in digital marketing across various industries."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Proven Results",
      description: "We have a track record of driving growth and delivering outstanding outcomes for our clients."
    },
    {
      icon: <LineChart className="h-8 w-8 text-orange-500" />,
      title: "Customized Strategies",
      description: "We develop tailored strategies that align with your unique goals and target audience."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Timely Delivery",
      description: "We understand the importance of time and commit to delivering projects within agreed timelines."
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-orange-500" />,
      title: "Long-term Relationships",
      description: "We focus on building lasting partnerships with our clients through trust and exceptional service."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the advantages of partnering with Infridet Solutions for your digital marketing needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
