
import React from "react";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

interface VideoTestimonialsProps {
  showHeading?: boolean;
}

const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ showHeading = true }) => {
  const testimonials = [
    {
      name: "Kartik Dhiman Sir",
      videoUrl: "https://youtube.com/shorts/WDyh-Vxx1xI",
      embedId: "WDyh-Vxx1xI",
      rating: 5
    },
    {
      name: "Shahbaz Saikh - Meta Ads Expert",
      videoUrl: "https://youtube.com/shorts/5FALD_ok_GM",
      embedId: "5FALD_ok_GM",
      rating: 5
    },
    {
      name: "Client #235",
      videoUrl: "https://youtu.be/NQ58we3UwTI",
      embedId: "NQ58we3UwTI",
      rating: 5
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Client Success Stories</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-deepBlue-500 mx-auto mb-6"></div>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with us
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card border border-white/5 hover:border-orange-500/20 transition-all duration-300 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -5px rgba(249, 115, 22, 0.1)" }}
            >
              <div className="aspect-video w-full relative group">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer"
                  >
                    <Play size={24} fill="white" />
                  </motion.div>
                </div>
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
              <div className="p-6">
                <div className="flex mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{testimonial.name}</h3>
                <p className="text-muted-foreground text-sm">Video Testimonial</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VideoTestimonials;
