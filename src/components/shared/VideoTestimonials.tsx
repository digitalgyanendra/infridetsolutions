
import React from "react";
import { motion } from "framer-motion";

interface VideoTestimonialsProps {
  showHeading?: boolean;
}

const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ showHeading = true }) => {
  const testimonials = [
    {
      name: "Kartik Dhiman Sir",
      videoUrl: "https://youtube.com/shorts/WDyh-Vxx1xI",
      embedId: "WDyh-Vxx1xI"
    },
    {
      name: "Shahbaz Saikh - Meta Ads Expert",
      videoUrl: "https://youtube.com/shorts/5FALD_ok_GM",
      embedId: "5FALD_ok_GM"
    },
    {
      name: "Client #235",
      videoUrl: "https://youtu.be/NQ58we3UwTI",
      embedId: "NQ58we3UwTI"
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6 mx-auto">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with us
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-4 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="aspect-video w-full mb-3 overflow-hidden rounded-md">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${testimonial.embedId}`}
                  title={`${testimonial.name} Testimonial`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <h3 className="text-xl font-medium text-white">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VideoTestimonials;
