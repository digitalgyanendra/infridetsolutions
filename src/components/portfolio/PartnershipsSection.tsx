
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Channel {
  name: string;
  url: string;
}

interface PortfolioItem {
  client: string;
  category: string;
  description: string;
  channels: Channel[];
  logo: string;
}

const PartnershipsSection = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      client: "Josh Talks",
      category: "Channel Management",
      description: "Managed multiple sub-channels for Josh Talks, including Josh Talks Hindi, JEE, NEET, Aasha, UPSC-Hindi, and Bihar channels, leading to significant growth in subscribers and views.",
      channels: [
        { name: "Josh Talks Hindi", url: "https://www.youtube.com/@JoshTalksHindi" },
        { name: "Josh Talks JEE", url: "https://youtube.com/@joshtalksjee?si=DAW6OHfmye9o79qR" },
        { name: "Josh Talks NEET", url: "https://youtube.com/@joshtalksneet1?si=pFf526GKq7JSd43h" },
        { name: "Josh Talks Aasha", url: "https://youtube.com/@joshtalksaasha?si=-wWwQa-KO3Lm6AmM" },
        { name: "Josh Talks UPSC - Hindi", url: "https://youtube.com/@joshtalksupschindi?si=TO89eJ-b14MmI1DE" },
        { name: "Josh Talks Bihar", url: "https://youtube.com/@joshtalksbihar?si=fdexmbVnSjUoT5p_" }
      ],
      logo: "/lovable-uploads/325d2d7a-2a49-4220-8cc1-150319570c01.png"
    }
  ];

  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Major Partnerships</h2>
        
        {portfolioItems.map((item, index) => (
          <motion.div 
            key={index}
            className="mb-24 glass-card p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-gray-100/30 p-4 rounded-full flex items-center justify-center mb-6">
                  <img src={item.logo} alt={item.client} className="w-28 h-auto object-contain" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.client}</h3>
                <p className="text-orange-600 font-medium">{item.category}</p>
              </div>
              
              <div>
                <p className="text-lg text-gray-700 mb-6">{item.description}</p>
                
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Managed Channels:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {item.channels.map((channel, idx) => (
                    <Card key={idx} className="bg-white/60 border-gray-200/50">
                      <CardContent className="p-4">
                        <a href={channel.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-orange-600 transition-colors">
                          {channel.name}
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PartnershipsSection;
