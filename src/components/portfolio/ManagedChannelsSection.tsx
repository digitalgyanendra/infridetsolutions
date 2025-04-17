
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Channel {
  name: string;
  url: string;
}

interface ChannelCategory {
  category: string;
  channels: Channel[];
}

const ManagedChannelsSection = () => {
  const managedChannels: ChannelCategory[] = [
    {
      category: "Teaching Channels",
      channels: [
        { name: "Beauty Jha", url: "https://youtube.com/@beauty_jha?si=7UMOG7Hwebk9Maen" },
        { name: "Umer Ahmad (MBBS)", url: "https://youtube.com/@umerahmad-mbbs?si=YjGwYI9ltHcorO3x" },
        { name: "Vinayak Gupta (IIT Delhi)", url: "https://youtube.com/@vinayakguptaiitdelhi?si=sQoCCONW9tzq8Asm" },
        { name: "Suresh Patel (MBBS)", url: "https://youtube.com/@sureshpatel-mbbs?si=TbHpxNR_fexo-u8n" }
      ]
    },
    {
      category: "Motivation",
      channels: [
        { name: "Sidimania Infotainment", url: "https://youtube.com/@sidimaniainfotainment?si=GeURQHH_YyD1sWbJ" },
        { name: "Deepak Dahiya (3.5 Million Subscribers)", url: "" },
        { name: "Karma Inspired", url: "https://youtube.com/@karmainspired?si=YBSluri-VopOQtdn" },
        { name: "The Global Thinking", url: "https://www.youtube.com/@TheGlobalThinking" }
      ]
    },
    {
      category: "Movie Review",
      channels: [
        { name: "Super India Hindi", url: "https://youtube.com/@superindiahindi?si=NeNIB6R4siDsAJdh" }
      ]
    },
    {
      category: "Other Managed Channels",
      channels: [
        { name: "Amit Mishra", url: "https://www.youtube.com/@amitmishra_" },
        { name: "Satish K Videos", url: "https://www.youtube.com/@SatishKVideos" },
        { name: "Business Kranti", url: "https://www.youtube.com/@business_kranti" },
        { name: "Kartik Dhiman - Business Coach", url: "https://www.youtube.com/@kartikdhiman-businesscoach5517" },
        { name: "Digital Shahbaz", url: "https://www.youtube.com/@DigitalShahbaz" },
        { name: "Punya hm", url: "https://www.instagram.com/punyahm22/" },
        { name: "Dr. Mukul Agrawal : Stock Market Coach", url: "https://www.youtube.com/@mukulagrawal" },
        { name: "Shivam Malik", url: "https://www.youtube.com/@ShivamMalik09" },
        { name: "Target Board", url: "https://www.youtube.com/@TARGETBOARD" }
      ]
    }
  ];

  return (
    <motion.section 
      className="py-20 bg-muted"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Channels We Manage</h2>
        
        <div className="space-y-16">
          {managedChannels.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-6">{category.category}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.channels.map((channel, idx) => (
                  <Card key={idx} className="bg-black/60 hover:bg-black/80 transition-colors">
                    <CardContent className="p-4">
                      {channel.url ? (
                        <a href={channel.url} target="_blank" rel="noopener noreferrer" className="text-deepBlue-400 hover:text-orange-500 transition-colors">
                          {channel.name}
                        </a>
                      ) : (
                        <span className="text-white">{channel.name}</span>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ManagedChannelsSection;
