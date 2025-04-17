import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import SupportersSection from "@/components/portfolio/SupportersSection";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const portfolioItems = [
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

  const managedChannels = [
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
    <Layout>
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-black hero-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-6 mx-auto text-center">
          <motion.h1 
            className="text-6xl sm:text-7xl font-bold mb-8 gradient-text"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            className="text-2xl text-white max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We've generated over 35+ Million Subscribers, over 2.5+ Billion Views, and billions of impressions on YouTube
            working with top brands and creators.
          </motion.p>
        </div>
      </motion.section>

      {/* Worked With Section */}
      <motion.section 
        className="py-16 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/d6495f81-8718-40ab-bd70-34785247f04b.png" 
              alt="Creators we've worked with" 
              className="w-full max-w-5xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* Major Partnerships Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-black to-muted"
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
                  <div className="w-40 h-40 bg-black/30 p-4 rounded-full flex items-center justify-center mb-6">
                    <img src={item.logo} alt={item.client} className="w-28 h-auto object-contain" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.client}</h3>
                  <p className="text-orange-500 font-medium">{item.category}</p>
                </div>
                
                <div>
                  <p className="text-lg text-foreground mb-6">{item.description}</p>
                  
                  <h4 className="text-xl font-semibold mb-4 text-white">Managed Channels:</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {item.channels.map((channel, idx) => (
                      <Card key={idx} className="bg-black/40 border-border/50">
                        <CardContent className="p-4">
                          <a href={channel.url} target="_blank" rel="noopener noreferrer" className="text-deepBlue-400 hover:text-orange-500 transition-colors">
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

      {/* Channels We Manage Section */}
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

      {/* Our Commitments Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-muted to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Our Commitments</h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-10">
            In 2024, we've launched two key offerings to help you succeed:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-black/60 border-orange-500/30 glowing-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Channel Growth</h3>
                <p className="text-muted-foreground">
                  We'll help you set up your YouTube channel for long-term growth with a solid foundation and strategy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/60 border-deepBlue-500/30 glowing-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Strategy</h3>
                <p className="text-muted-foreground">
                  We'll help you create a content strategy that drives engagement and revenue for sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-xl font-semibold text-orange-500">
            All this while increasing your Views by 3x-5x on average within 3-6 Months.
          </div>
        </div>
      </motion.section>

      {/* I worked and learned from them Section */}
      <SupportersSection />
    </Layout>
  );
};

export default Portfolio;
