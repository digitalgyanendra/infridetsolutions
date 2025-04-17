
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
      className="py-16 bg-gradient-to-b from-black to-background/90 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background glow effect */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-3">
              <span className="px-3 py-1 text-xs font-medium text-orange-500 border border-orange-500/30 rounded-full">
                SUCCESS STORIES
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Client Testimonials</span>
            </h2>
            <div className="mx-auto max-w-2xl">
              <p className="text-muted-foreground text-lg">
                Hear what our clients have to say about their experience working with us
              </p>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 border border-border/20 hover:border-orange-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="aspect-video w-full mb-4 overflow-hidden relative">
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
                <h3 className="text-xl font-semibold text-white mb-1">{testimonial.name}</h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-4 h-4 text-orange-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <a 
                  href={testimonial.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-400"
                >
                  Watch on YouTube
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VideoTestimonials;
