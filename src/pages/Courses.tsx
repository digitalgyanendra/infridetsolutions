import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Youtube,
  LineChart,
  Compass,
  BrainCircuit,
  Search,
  BarChart3
} from "lucide-react";


interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  delay: number;
  bestSeller?: boolean;
  href: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  description, 
  price, 
  originalPrice, 
  features, 
  icon, 
  color, 
  delay, 
  bestSeller = false,
  href 
}) => {
  return (
    <motion.div 
      className="glass-card glowing-border overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {bestSeller && (
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 text-sm font-medium text-center">
          Best Seller
        </div>
      )}
      
      <div className="p-6">
        <div className={`w-14 h-14 rounded-lg bg-${color}-500/20 flex items-center justify-center mb-4`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold text-gray-800">{price}</span>
          {originalPrice && (
            <span className="text-lg text-gray-500 line-through ml-2">{originalPrice}</span>
          )}
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto p-6 pt-0">
        <Link to={href}>
          <Button 
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
          >
            Enroll Now
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const courses = [
    {
      title: "AI Money Mastery",
      description: "Learn how to leverage AI tools to maximize your financial growth and investment strategies.",
      price: "₹9,999",
      originalPrice: "₹14,999",
      features: [
        "AI-powered investment strategies",
        "Automated financial analysis tools",
        "Risk management frameworks",
        "50+ hours of video content",
        "Lifetime updates & support"
      ],
      icon: <BrainCircuit size={28} className="text-purple-500" />,
      color: "purple",
      bestSeller: true,
      href: "/courses/ai-money-mastery"
    },
    {
      title: "YouTube Growth Accelerator",
      description: "Comprehensive system to grow your YouTube channel from 0 to 100K subscribers.",
      price: "₹7,999",
      originalPrice: "₹12,999",
      features: [
        "Channel optimization blueprint",
        "Content strategy framework",
        "Thumbnail design masterclass",
        "Monetization strategies",
        "Algorithm secrets revealed"
      ],
      icon: <Youtube size={28} className="text-red-500" />,
      color: "red",
      bestSeller: false,
      href: "/courses/youtube-growth"
    },
    {
      title: "SEO Domination Strategy",
      description: "Master search engine optimization to drive massive organic traffic to your website.",
      price: "₹8,999",
      originalPrice: "₹13,999",
      features: [
        "Keyword research mastery",
        "On-page optimization techniques",
        "Link building strategies",
        "Technical SEO audit tools",
        "Local SEO dominance"
      ],
      icon: <Search size={28} className="text-blue-500" />,
      color: "blue",
      bestSeller: false,
      href: "/courses/seo-domination"
    },
    {
      title: "Digital Marketing Blueprint",
      description: "End-to-end system for creating successful digital marketing campaigns.",
      price: "₹9,999",
      originalPrice: "₹15,999",
      features: [
        "Multi-channel marketing strategy",
        "Paid advertising optimization",
        "Email marketing automation",
        "Analytics & conversion tracking",
        "Customer journey mapping"
      ],
      icon: <LineChart size={28} className="text-green-500" />,
      color: "green",
      bestSeller: false,
      href: "/courses/digital-marketing"
    },
    {
      title: "Brand Growth System",
      description: "Build a powerful brand that stands out and connects with your target audience.",
      price: "₹6,999",
      originalPrice: "₹10,999",
      features: [
        "Brand identity development",
        "Visual storytelling techniques",
        "Customer persona creation",
        "Brand messaging framework",
        "Social media brand strategy"
      ],
      icon: <Compass size={28} className="text-yellow-500" />,
      color: "yellow",
      bestSeller: false,
      href: "/courses/brand-growth"
    },
    {
      title: "Content Creator Pro",
      description: "Master content creation across platforms to build audience and generate revenue.",
      price: "₹8,499",
      originalPrice: "₹12,499",
      features: [
        "Multi-platform content strategy",
        "Content repurposing system",
        "Audience growth tactics",
        "Monetization blueprints",
        "Creator tools masterclass"
      ],
      icon: <BarChart3 size={28} className="text-pink-500" />,
      color: "pink",
      bestSeller: false,
      href: "/courses/content-creator"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Skills with Our Courses
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Industry-leading courses designed to help you master digital growth strategies and build successful online businesses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                price={course.price}
                originalPrice={course.originalPrice}
                features={course.features}
                icon={course.icon}
                color={course.color}
                delay={0.1 * index}
                bestSeller={course.bestSeller}
                href={course.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Everything you need to know about our courses and learning experience.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do I access the course after purchase?",
                answer: "Once your payment is processed, you'll receive login credentials to our learning platform where you can access all course materials, including videos, worksheets, and resources. All courses include lifetime access."
              },
              {
                question: "Are there any prerequisites for these courses?",
                answer: "Most of our courses are designed for all skill levels, from beginners to advanced practitioners. Each course page specifies if any prior knowledge is required. Our AI Money Mastery course assumes basic understanding of investment concepts."
              },
              {
                question: "Do you offer refunds if I'm not satisfied?",
                answer: "Yes, we offer a 14-day money-back guarantee for all our courses. If you're not completely satisfied with your purchase, contact our support team within 14 days of purchase for a full refund."
              },
              {
                question: "How long do I have access to the course materials?",
                answer: "You receive lifetime access to all course materials, including future updates. We regularly refresh content to ensure it remains relevant and up-to-date with industry changes."
              },
              {
                question: "Is there support available if I have questions?",
                answer: "Absolutely! All courses include access to our community forum where you can ask questions and get support from both our team and fellow students. Premium courses also include email support and group coaching calls."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hydra Automation Form */}
      <HydraAutomationForm />

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center">
            <motion.h2 
              className="text-3xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Not Sure Which Course Is Right For You?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Book a free 15-minute consultation with our experts to get personalized course recommendations based on your goals.
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
                  Book Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
