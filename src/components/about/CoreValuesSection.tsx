
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CoreValuesSection = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations."
    },
    {
      title: "Innovation",
      description: "We embrace innovation and stay at the forefront of digital marketing trends to provide cutting-edge strategies."
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our business dealings."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with our clients to achieve shared goals."
    },
    {
      title: "Client Success",
      description: "We are committed to our clients' success, measuring our achievements by their growth and satisfaction."
    },
    {
      title: "Continuous Learning",
      description: "We are dedicated to continuous learning and improvement, staying updated with industry best practices."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Core Values</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These principles guide our work and define our culture as we strive to deliver exceptional digital marketing solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="text-orange-500 mr-3 h-6 w-6 shrink-0" />
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
