import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "MSME Certified",
    imgSrc:
      "https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/msme1--1-.jpeg",
    description: "Government registered enterprise",
  },
  {
    name: "Trustpilot Verified",
    imgSrc:
      "https://www.vhv.rs/dpng/d/588-5885660_adding-trustpilot-image-next-to-logo-on-supply.png",
    description: "Verified customer reviews",
  },
  {
    name: "Best Place to Work 2025",
    imgSrc:
      "https://www.greatplacetowork.in/wp-content/uploads/elementor/thumbs/gptw_CERTIFIED_badge_year-2025-1-qzesy32z162u8mzwhycg2rdjcxgecnvxa4m68r6366.png",
    description: "Great Place to Work Certified",
  },
  {
    name: "BNI Member",
    imgSrc: "https://www.adroitinfoactive.net/images/bni-logo-new.jpg",
    description: "Business Network International",
  },
  {
    name: "MCA Registered",
    imgSrc:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjUpYrFQQebYOWsL5euNhjVqAo6pHIbaOvTNZDaYjENQ1tKp7oGbUheL9JJTNKsuPWHoR-Dy9qJITTxWFmnSjMjygTYmYPZWQmGE6SPI5vqoLvb68zsIHEQp6yXqjZGQb25GcDLknamSbvLiNTHlDb_h7f--wY76qvfIhxSFnhhEDRxEbP6Wd1FwR7T6d4=s16000",
    description: "Ministry of Corporate Affairs",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-border">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Certified · Trusted · Registered
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground"
          >
            You're in safe hands.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white border border-border rounded-xl p-5 text-center hover:border-foreground/20 hover:shadow-sm transition-all"
            >
              <div className="h-16 flex items-center justify-center mb-3">
                <img
                  src={cert.imgSrc}
                  alt={cert.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm">
                {cert.name}
              </h3>
              <p className="text-muted-foreground text-xs mt-1">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
