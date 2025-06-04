
import React from "react";
import { motion } from "framer-motion";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "MSME Certified",
      imgSrc: "https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/msme1--1-.jpeg",
      description: "Micro, Small & Medium Enterprises"
    },
    {
      name: "Trustpilot Verified",
      imgSrc: "https://www.vhv.rs/dpng/d/588-5885660_adding-trustpilot-image-next-to-logo-on-supply.png",
      description: "Customer Trust & Reviews"
    },
    {
      name: "Best Places to Work 2025",
      imgSrc: "https://www.greatplacetowork.in/wp-content/uploads/elementor/thumbs/gptw_CERTIFIED_badge_year-2025-1-qzesy32z162u8mzwhycg2rdjcxgecnvxa4m68r6366.png",
      description: "Great Place to Work Certified"
    },
    {
      name: "BNI Proud Member",
      imgSrc: "https://www.adroitinfoactive.net/images/bni-logo-new.jpg",
      description: "Business Networking International"
    },
    {
      name: "Ministry of Corporate Affairs",
      imgSrc: "https://blogger.googleusercontent.com/img/a/AVvXsEjUpYrFQQebYOWsL5euNhjVqAo6pHIbaOvTNZDaYjENQ1tKp7oGbUheL9JJTNKsuPWHoR-Dy9qJITTxWFmnSjMjygTYmYPZWQmGE6SPI5vqoLvb68zsIHEQp6yXqjZGQb25GcDLknamSbvLiNTHlDb_h7f--wY76qvfIhxSFnhhEDRxEbP6Wd1FwR7T6d4=s16000",
      description: "Government Registered"
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Certifications
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Recognized by leading organizations for our commitment to excellence and quality
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src={cert.imgSrc} 
                  alt={cert.name}
                  className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-xs">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 font-medium">
            Committed to <span className="text-orange-500 font-bold">Quality</span>, 
            <span className="text-deepBlue-500 font-bold"> Trust</span>, and 
            <span className="text-orange-500 font-bold"> Excellence</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CertificationsSection;
