
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface VideoTestimonialsProps {
  showHeading?: boolean;
}

const testimonials = [
  {
    name: "Kartik Dhiman",
    title: "Growth Consultant",
    videoUrl: "https://youtube.com/shorts/WDyh-Vxx1xI",
    embedId: "WDyh-Vxx1xI",
    highlight: true,
    quote: "Working with Infridet transformed my consultancy reach and confidence.",
    company: "Infridet Solutions"
  },
  {
    name: "Shahbaz Saikh",
    title: "Meta Ads Expert",
    videoUrl: "https://youtube.com/shorts/5FALD_ok_GM",
    embedId: "5FALD_ok_GM",
    highlight: false,
    quote: "Results showed up within weeks. Highly recommended collaboration.",
    company: "Infridet Solutions"
  },
  {
    name: "Client #235",
    title: "Brand Owner",
    videoUrl: "https://youtu.be/NQ58we3UwTI",
    embedId: "NQ58we3UwTI",
    highlight: false,
    quote: "The team's digital growth expertise was a game-changer.",
    company: "Infridet Solutions"
  }
];

const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ showHeading = true }) => {
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({});
  
  const handleLoadVideo = (embedId: string) => {
    setLoadedVideos(prev => ({ ...prev, [embedId]: true }));
  };

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-black via-background/90 to-background/80 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-44 h-44 md:w-64 md:h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 blur-3xl"></div>
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
            <span className="px-3 py-1 text-xs font-medium text-orange-500 border border-orange-500/30 rounded-full inline-block mb-3">
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Stories from Our Clients
            </h2>
            <div className="mx-auto max-w-2xl">
              <p className="text-muted-foreground text-lg">
                Real voices from our successful brand partners and experts—delivered with impact.
              </p>
            </div>
          </motion.div>
        )}
        <div className="flex flex-col md:flex-row md:gap-8 gap-12 justify-center items-stretch">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className={`flex-1 flex flex-col glass-card rounded-xl overflow-hidden shadow-xl border-none bg-gradient-to-br ${t.highlight ? "from-orange-700/30 to-background/80" : "from-background/40 to-background/80"} transition-all duration-300 hover:shadow-xl`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
            >
              <div className="aspect-video w-full mb-3 relative">
                {loadedVideos[t.embedId] ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${t.embedId}`}
                    title={`${t.name} Testimonial`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover rounded-t-xl"
                  ></iframe>
                ) : (
                  <div 
                    className="w-full h-full bg-black/70 flex items-center justify-center cursor-pointer relative rounded-t-xl"
                    onClick={() => handleLoadVideo(t.embedId)}
                  >
                    <img 
                      src={`https://img.youtube.com/vi/${t.embedId}/hqdefault.jpg`}
                      alt={`${t.name} Testimonial thumbnail`}
                      className="w-full h-full object-cover opacity-60 rounded-t-xl"
                      loading="lazy"
                    />
                    <div className="absolute flex flex-col items-center justify-center">
                      <svg 
                        className="w-16 h-16 text-orange-500" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="text-white font-medium mt-2">Click to load video</span>
                    </div>
                  </div>
                )}
                <div className="absolute top-2 right-2 z-10">
                  <span className="bg-background px-2 py-1 rounded text-xs text-orange-500 font-bold shadow">
                    <Star size={12} className="inline-block mb-0.5 mr-0.5" />
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-2 gap-2">
                  <span className="text-lg font-semibold text-white">{t.name}</span>
                  <span className="text-xs text-deepBlue-500 font-medium">{t.title}</span>
                </div>
                <div className="text-sm text-muted-foreground italic mb-4">
                  "{t.quote}"
                </div>
                <div className="flex items-center mt-auto justify-between">
                  <span className="text-xs text-orange-400">{t.company}</span>
                  <a
                    href={t.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 text-sm font-bold hover:text-orange-400 underline"
                  >
                    Watch
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VideoTestimonials;
