
import React, { useState } from "react";
import { motion } from "framer-motion";
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
  Layers
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
  delay 
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
      title: "Tech Launch YouTube Growth",
      category: "YouTube Consulting",
      image: "youtube-growth.jpg",
      before: "1K Subs",
      after: "100K Subs",
      description: "Helped a tech startup increase their YouTube presence from 1,000 subscribers to over 100,000 in just 6 months through strategic content planning, SEO optimization, and community engagement tactics.",
      achievements: [
        "Increased video views by 800% through improved thumbnails and titles",
        "Reduced viewer drop-off by 40% with optimized content structure",
        "Improved click-through rate from 2% to 8.5% with better CTAs",
        "Developed content calendar that tripled monthly output without sacrificing quality"
      ],
      icon: <Youtube size={24} className="text-orange-500" />,
      filter: "youtube"
    },
    {
      title: "E-Commerce SEO Overhaul",
      category: "SEO Optimization",
      image: "seo-case-study.jpg",
      before: "Page 5",
      after: "Page 1",
      description: "Transformed an e-commerce store's search rankings, moving their main product pages from the fifth page to the first page of search results, resulting in a 200% increase in organic traffic and 150% boost in sales.",
      achievements: [
        "Improved site loading speed by 65% through technical optimizations",
        "Created a comprehensive keyword strategy targeting high-intent terms",
        "Implemented structured data markup resulting in rich snippets",
        "Built a quality backlink profile with 120+ relevant sites"
      ],
      icon: <Search size={24} className="text-deepBlue-500" />,
      filter: "seo"
    },
    {
      title: "Fashion Brand Identity",
      category: "Brand Growth",
      image: "brand-case-study.jpg",
      before: "2K Followers",
      after: "250K Followers",
      description: "Developed a comprehensive brand strategy for a fashion startup, resulting in explosive social media growth, increased brand recognition, and a 300% increase in sales within the first year.",
      achievements: [
        "Created distinctive visual identity that resonated with target audience",
        "Developed influencer partnership strategy resulting in 120+ collaborations",
        "Implemented omni-channel approach increasing customer retention by 45%",
        "Launched viral hashtag campaign generating 2M+ impressions"
      ],
      icon: <Layers size={24} className="text-orange-500" />,
      filter: "brand"
    },
    {
      title: "SaaS Marketing Acceleration",
      category: "Digital Marketing",
      image: "saas-case-study.jpg",
      before: "50 Leads/mo",
      after: "500 Leads/mo",
      description: "Implemented a multi-channel digital marketing strategy for a SaaS company, resulting in a 10x increase in qualified leads and 3x improvement in conversion rates within 3 months.",
      achievements: [
        "Redesigned landing pages increasing conversion by 120%",
        "Created targeted ad campaigns with 8.2% CTR (industry avg: 3.1%)",
        "Developed automated email nurture sequence with 65% open rate",
        "Optimized customer journey reducing CAC by 35%"
      ],
      icon: <TrendingUp size={24} className="text-deepBlue-500" />,
      filter: "marketing"
    },
    {
      title: "Podcast Launch & Growth",
      category: "Content Strategy",
      image: "podcast-case-study.jpg",
      before: "0 Downloads",
      after: "10K/Episode",
      description: "Launched and scaled a business podcast from zero to over 10,000 downloads per episode in less than 6 months, establishing the client as a thought leader in their industry.",
      achievements: [
        "Secured top 20 ranking in Apple Podcasts business category",
        "Developed guest outreach strategy resulting in high-profile interviews",
        "Created cross-promotion strategy with complementary podcasts",
        "Implemented repurposing workflow to maximize content value across platforms"
      ],
      icon: <BarChart3 size={24} className="text-orange-500" />,
      filter: "content"
    },
    {
      title: "Community Building Success",
      category: "Community Strategy",
      image: "community-case-study.jpg",
      before: "Inactive",
      after: "10K Members",
      description: "Transformed a dormant online community into a thriving ecosystem with over 10,000 active members, creating a valuable asset for the business and driving customer loyalty and retention.",
      achievements: [
        "Developed engagement framework increasing daily active users by 400%",
        "Created ambassador program with 50+ community leaders",
        "Implemented content calendar driving consistent engagement",
        "Launched member spotlight series increasing retention by 35%"
      ],
      icon: <Users size={24} className="text-deepBlue-500" />,
      filter: "community"
    },
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
              Real results achieved for our clients through strategic digital consulting.
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
              { id: "youtube", label: "YouTube" },
              { id: "seo", label: "SEO" },
              { id: "brand", label: "Brand Growth" },
              { id: "marketing", label: "Marketing" },
              { id: "content", label: "Content" },
              { id: "community", label: "Community" },
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
                icon: <TrendingUp size={28} className="text-orange-500" />,
                value: "500+",
                label: "Projects Completed",
              },
              {
                icon: <Trophy size={28} className="text-deepBlue-500" />,
                value: "97%",
                label: "Client Satisfaction",
              },
              {
                icon: <LineChart size={28} className="text-orange-500" />,
                value: "250%",
                label: "Average Growth Rate",
              },
              {
                icon: <BarChart3 size={28} className="text-deepBlue-500" />,
                value: "₹15M+",
                label: "Revenue Generated",
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black/95 to-background">
        <div className="container px-4 md:px-6">
          <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center">
            <motion.h2 
              className="text-3xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Be Our Next Success Story?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the ranks of our successful clients and transform your digital presence with expert consulting.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
