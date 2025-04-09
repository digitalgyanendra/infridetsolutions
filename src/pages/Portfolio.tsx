
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  X, 
  TrendingUp, 
  Trophy, 
  BarChart3,
  Youtube,
  Search,
  Users,
  LineChart,
  Layers,
  Play,
  Star,
  ExternalLink
} from "lucide-react";

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  before: string;
  after: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
  delay: number;
  url?: string;
  subChannels?: Array<{name: string, url: string}>;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
  title, 
  category, 
  image, 
  before, 
  after, 
  description, 
  achievements, 
  icon, 
  delay,
  url,
  subChannels
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="glass-card overflow-hidden group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="mb-3 w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center">
                {icon}
              </div>
              <span className="block text-lg font-bold">{title}</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <div className="flex justify-between items-center">
              <span className="text-xs text-orange-500 font-medium">{category}</span>
              <div className="text-xs text-white">
                <span className="line-through opacity-60 mr-2">{before}</span>
                <span className="text-deepBlue-400">{after}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-orange-500/50 hover:bg-orange-500/10 transition-all group-hover:border-orange-500"
          >
            View Case Study
          </Button>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-background rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="sticky top-0 z-10 bg-background p-4 border-b border-border flex justify-between items-center">
              <h3 className="text-xl font-bold">{title}</h3>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full" 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
              >
                <X size={18} />
              </Button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-500 mb-4">
                  {category}
                </span>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center mr-4">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{title}</h4>
                      <p className="text-sm text-muted-foreground">Case Study</p>
                    </div>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Growth</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="line-through text-muted-foreground">{before}</span>
                      <span className="font-bold text-lg gradient-text">{after}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Challenge & Solution</h4>
                <p className="text-muted-foreground mb-4">{description}</p>
                {url && (
                  <div className="mb-4">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-deepBlue-500 flex items-center hover:underline">
                      <Youtube size={18} className="mr-2" />
                      Main Channel
                    </a>
                  </div>
                )}
                
                {subChannels && subChannels.length > 0 && (
                  <div className="mb-6">
                    <h5 className="text-md font-semibold mb-2">Related Channels:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {subChannels.map((channel, idx) => (
                        <a 
                          key={idx}
                          href={channel.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-deepBlue-400 flex items-center hover:underline"
                        >
                          <ExternalLink size={14} className="mr-2" />
                          {channel.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="h-48 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <p className="text-muted-foreground">Growth Chart Visualization</p>
                    <LineChart size={64} className="mx-auto my-4 text-deepBlue-500/60" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(false);
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const portfolioItems = [
    {
      title: "Josh Talks",
      category: "Strategic Channel Management",
      image: "josh-talks.jpg",
      before: "1M Subs",
      after: "15M+ Subs",
      description: "Managed and grew the entire Josh Talks network to become one of India's most influential digital media platforms. Implemented comprehensive content strategies across multiple channels targeting different audiences and niches.",
      achievements: [
        "Grew main channel to 15M+ subscribers with billions of views",
        "Successfully launched and scaled 5+ niche channels (JEE, NEET, Aasha, UPSC, Bihar)",
        "Optimized content strategy increasing viewer retention by 40%",
        "Developed cross-promotion strategy between channels maximizing audience growth"
      ],
      icon: <Youtube size={24} className="text-orange-500" />,
      filter: "youtube",
      url: "https://www.youtube.com/@JoshTalksHindi",
      subChannels: [
        { name: "Josh Talks JEE", url: "https://youtube.com/@joshtalksjee" },
        { name: "Josh Talks NEET", url: "https://youtube.com/@joshtalksneet1" },
        { name: "Josh Talks Aasha", url: "https://youtube.com/@joshtalksaasha" },
        { name: "Josh Talks UPSC", url: "https://youtube.com/@joshtalksupschindi" },
        { name: "Josh Talks Bihar", url: "https://youtube.com/@joshtalksbihar" }
      ]
    },
    {
      title: "Beauty Jha - Teaching Channel",
      category: "Educational Content",
      image: "teaching-channel.jpg",
      before: "New Channel",
      after: "Thriving Community",
      description: "Developed and executed content strategy for Beauty Jha's educational channel, focusing on high-quality instructional content that resonates with students seeking academic excellence.",
      achievements: [
        "Created content calendar optimized for student engagement cycles",
        "Implemented thumbnail and title strategy increasing CTR by 120%",
        "Established community engagement protocols boosting comments by 85%",
        "Optimized video structure to maximize watch time and retention"
      ],
      icon: <Star size={24} className="text-deepBlue-500" />,
      filter: "education",
      url: "https://youtube.com/@beauty_jha"
    },
    {
      title: "Umer Ahmad MBBS",
      category: "Medical Education",
      image: "medical-education.jpg",
      before: "Limited Reach",
      after: "Industry Authority",
      description: "Transformed Umer Ahmad's medical education channel into a trusted resource for MBBS students and aspiring medical professionals, with strategic content planning and optimization.",
      achievements: [
        "Positioned channel as a premier resource for medical education",
        "Created specialized content series targeting high-demand topics",
        "Developed SEO strategy increasing discoverability by 65%",
        "Implemented engagement tactics boosting community interaction"
      ],
      icon: <Layers size={24} className="text-orange-500" />,
      filter: "education",
      url: "https://youtube.com/@umerahmad-mbbs"
    },
    {
      title: "Vinayak Gupta IIT Delhi",
      category: "Educational Content",
      image: "education-channel.jpg",
      before: "Low Engagement",
      after: "Strong Following",
      description: "Optimized Vinayak Gupta's educational channel focusing on IIT preparation, implementing strategies to increase visibility and student engagement across platforms.",
      achievements: [
        "Developed targeted content strategy for engineering aspirants",
        "Created comprehensive study series that increased subscribers by 85%",
        "Optimized videos for search and recommendation algorithms",
        "Established consistent posting schedule increasing audience retention"
      ],
      icon: <Star size={24} className="text-deepBlue-500" />,
      filter: "education",
      url: "https://youtube.com/@vinayakguptaiitdelhi"
    },
    {
      title: "Suresh Patel MBBS",
      category: "Medical Education",
      image: "medical-education-2.jpg",
      before: "Niche Following",
      after: "Sector Authority",
      description: "Created content strategy for Suresh Patel's medical education channel, focusing on MBBS curriculum and specialized medical topics to establish authority in the field.",
      achievements: [
        "Developed topic clusters increasing search visibility by 120%",
        "Created exam-focused content series with high engagement rates",
        "Implemented community-building strategies through Q&A sessions",
        "Optimized thumbnails and titles increasing click-through rates"
      ],
      icon: <Layers size={24} className="text-orange-500" />,
      filter: "education",
      url: "https://youtube.com/@sureshpatel-mbbs"
    },
    {
      title: "Deepak Dahiya",
      category: "Channel Growth",
      image: "motivation-channel.jpg",
      before: "150K Subs",
      after: "3.5M+ Subs",
      description: "Scaled Deepak Dahiya's channel from 150K to over 3.5 million subscribers through strategic content planning, audience analysis, and optimization techniques that dramatically increased reach and engagement.",
      achievements: [
        "Achieved 2300% subscriber growth in less than 2 years",
        "Implemented viral content strategy generating millions of views per video",
        "Created distinctive brand identity increasing recognition",
        "Optimized posting schedule increasing algorithm favorability"
      ],
      icon: <TrendingUp size={24} className="text-deepBlue-500" />,
      filter: "motivation",
      url: "https://youtube.com/@DeepakDahiya"
    },
    {
      title: "Sidimania Infotainment",
      category: "Infotainment Content",
      image: "sidimania.jpg",
      before: "Inconsistent Growth",
      after: "Steady Expansion",
      description: "Revitalized Sidimania Infotainment's channel through strategic content planning, topic research, and optimization to capture a wider audience while maintaining the channel's unique voice.",
      achievements: [
        "Developed content strategy balancing information and entertainment",
        "Created topic clusters increasing discoverability across YouTube",
        "Optimized content for both search and recommendation algorithms",
        "Implemented audience retention strategies increasing watch time"
      ],
      icon: <TrendingUp size={24} className="text-deepBlue-500" />,
      filter: "entertainment",
      url: "https://youtube.com/@sidimaniainfotainment"
    },
    {
      title: "Karma Inspired",
      category: "Motivational Content",
      image: "karma-inspired.jpg",
      before: "Small Audience",
      after: "Viral Growth",
      description: "Developed and executed a comprehensive content strategy for Karma Inspired, focusing on inspirational storytelling and motivational content that resonates with viewers seeking personal growth.",
      achievements: [
        "Created viral storytelling formula resulting in multiple 1M+ view videos",
        "Designed thumbnail system with 300% higher CTR than industry average",
        "Implemented audience retention strategies increasing watch time by 45%",
        "Developed community building tactics increasing subscriber loyalty"
      ],
      icon: <BarChart3 size={24} className="text-orange-500" />,
      filter: "motivation",
      url: "https://youtube.com/@karmainspired"
    },
    {
      title: "The Global Thinking",
      category: "Educational Content",
      image: "global-thinking.jpg",
      before: "Minimal Reach",
      after: "Growing Authority",
      description: "Developed content strategy for The Global Thinking, focusing on educational and thought-provoking content that appeals to intellectually curious audiences seeking deeper insights.",
      achievements: [
        "Created education-focused content format with strong retention metrics",
        "Developed topic research methodology identifying high-potential subjects",
        "Optimized video structure for maximum retention and engagement",
        "Implemented community-building strategies to foster loyal audience"
      ],
      icon: <BarChart3 size={24} className="text-deepBlue-500" />,
      filter: "education",
      url: "https://www.youtube.com/@TheGlobalThinking"
    },
    {
      title: "SuperIndia Hindi",
      category: "Movie Reviews",
      image: "movie-reviews.jpg",
      before: "Niche Channel",
      after: "Entertainment Hub",
      description: "Transformed SuperIndia Hindi into a premier destination for movie reviews and entertainment content, implementing strategies that expanded audience reach while maintaining high engagement.",
      achievements: [
        "Created trending-topic framework capturing search traffic",
        "Developed rapid-response system for new movie releases",
        "Implemented influencer collaboration strategy expanding reach",
        "Created binge-worthy series formats increasing session time"
      ],
      icon: <Users size={24} className="text-deepBlue-500" />,
      filter: "entertainment",
      url: "https://youtube.com/@superindiahindi"
    },
    {
      title: "Business Channels Portfolio",
      category: "Business Content",
      image: "business-channels.jpg",
      before: "Scattered Strategy",
      after: "Unified Growth",
      description: "Managed multiple business-focused channels including Business Kranti, Kartik Dhiman, Digital Shahbaz, and Dr. Mukul Agrawal, implementing cohesive strategies tailored to each channel's audience.",
      achievements: [
        "Developed specialized content strategies for each business niche",
        "Created content formats optimized for business education",
        "Implemented cross-promotion strategies where appropriate",
        "Established each channel as an authority in their specific domain"
      ],
      icon: <TrendingUp size={24} className="text-orange-500" />,
      filter: "business",
      url: "#",
      subChannels: [
        { name: "Business Kranti", url: "https://www.youtube.com/@business_kranti" },
        { name: "Kartik Dhiman - Business Coach", url: "https://www.youtube.com/@kartikdhiman-businesscoach5517" },
        { name: "Digital Shahbaz", url: "https://www.youtube.com/@DigitalShahbaz" },
        { name: "Dr. Mukul Agrawal - Stock Market", url: "https://www.youtube.com/@mukulagrawal" },
        { name: "Amit Mishra", url: "https://www.youtube.com/@amitmishra_" },
        { name: "Satish K Videos", url: "https://www.youtube.com/@SatishKVideos" }
      ]
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.filter === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden hero-bg">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Success Stories
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Real results achieved through strategic YouTube consulting and channel management.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-b from-background to-black/95">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { id: "all", label: "All Projects" },
              { id: "youtube", label: "YouTube Networks" },
              { id: "education", label: "Educational" },
              { id: "motivation", label: "Motivational" },
              { id: "entertainment", label: "Entertainment" },
              { id: "business", label: "Business" }
            ].map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`
                  ${activeFilter === filter.id 
                    ? "bg-gradient-to-r from-orange-500 to-orange-600" 
                    : "border-muted hover:bg-muted/20"}
                `}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                category={item.category}
                image={item.image}
                before={item.before}
                after={item.after}
                description={item.description}
                achievements={item.achievements}
                icon={item.icon}
                delay={0.1 * index}
                url={item.url}
                subChannels={item.subChannels}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Impact in Numbers</h2>
            <p className="text-muted-foreground">
              The collective results we've achieved for our clients over the years.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Youtube size={28} className="text-orange-500" />,
                value: "35M+",
                label: "Subscribers Generated",
              },
              {
                icon: <Play size={28} className="text-deepBlue-500" />,
                value: "2.5B+",
                label: "Views Delivered",
              },
              {
                icon: <LineChart size={28} className="text-orange-500" />,
                value: "3-5x",
                label: "Average Growth Rate",
              },
              {
                icon: <BarChart3 size={28} className="text-deepBlue-500" />,
                value: "100+",
                label: "Channels Optimized",
              },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gradient-to-b from-black/95 to-background">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="glass-card max-w-4xl mx-auto p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6 text-center">Our Commitments</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                We've generated over <span className="text-orange-500 font-bold">35 Million Subscribers</span>, over <span className="text-deepBlue-500 font-bold">2.5+ Billion Views</span>, and billions of impressions on YouTube while working with brands like Josh Talks, Physics Wallah, Seekho, Vmart, Big Bazar, Kuku FM, Pocket FM, and SuperIndia.
              </p>
              
              <div className="pl-4 border-l-2 border-orange-500/50">
                <h3 className="text-xl font-bold text-white mb-2">In 2024, we've launched two main offers:</h3>
                
                <ol className="list-decimal pl-6 space-y-4 mt-4">
                  <li>
                    We'll help you set up your YouTube channel for long-term growth.
                  </li>
                  <li>
                    We'll help you create a content strategy that drives engagement and revenue.
                  </li>
                </ol>
              </div>
              
              <p className="font-bold text-center text-lg">
                All this while increasing your Views by <span className="gradient-text">3x-5x</span> on average within 3-6 Months.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-deepBlue-500 hover:bg-deepBlue-500/10 px-8"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
