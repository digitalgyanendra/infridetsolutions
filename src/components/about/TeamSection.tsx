
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Himanshu Yadav",
      role: "CEO & Founder",
      bio: "Digital marketing expert with extensive experience in helping creators grow their online presence.",
      image: "/lovable-uploads/c4d5ff9c-66c7-4157-a520-9149cacd2ec1.png"
    },
    {
      name: "Anjali Singh",
      role: "Head of Content Strategy",
      bio: "Content strategist specializing in creating engaging and conversion-focused content for digital platforms.",
      image: "/lovable-uploads/35311a15-9e05-4d4a-bf6e-6b9a7fc6b8b5.png"
    },
    {
      name: "Rahul Sharma",
      role: "Lead Performance Marketer",
      bio: "Expert in performance marketing with a focus on ROI-driven campaigns and audience growth.",
      image: "/lovable-uploads/3683885c-5b52-4464-87e1-25c19d49f75c.png"
    },
    {
      name: "Priya Patel",
      role: "Creative Director",
      bio: "Creative professional with a passion for visual storytelling and brand development.",
      image: "/lovable-uploads/325d2d7a-2a49-4220-8cc1-150319570c01.png"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our talented team of digital marketing experts is dedicated to helping your brand succeed in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg overflow-hidden"
            >
              <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-500 mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
