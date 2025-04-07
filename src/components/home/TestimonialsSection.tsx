
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    position: "Founder",
    company: "TechStart India",
    content: "The YouTube growth strategy provided by Digital Nexus helped us grow from 5K to 100K subscribers in just 7 months. Their insights were invaluable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Marketing Director",
    company: "Bloom Digital",
    content: "Their SEO consulting completely transformed our online presence. We've seen a 200% increase in organic traffic and our conversion rates have doubled.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Vikram Mehta",
    position: "CEO",
    company: "GrowthBox",
    content: "The brand development strategy was exactly what we needed. Professional, efficient, and extremely knowledgeable team. Highly recommended!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 bg-gradient-to-b from-black/95 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hear from our clients about how our consulting services have transformed their digital presence.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative" 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial slider */}
          <div className="overflow-hidden relative rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="glass-card p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-orange-500/30 flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={i < testimonial.rating ? "text-orange-500 fill-orange-500" : "text-gray-600"}
                            />
                          ))}
                        </div>
                        <p className="text-lg italic mb-6">{testimonial.content}</p>
                        <div>
                          <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                          <p className="text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-background/50 transition-colors"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-background/50 transition-colors"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-orange-500" : "bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
