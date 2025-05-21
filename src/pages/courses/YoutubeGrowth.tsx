
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo/SEOHead";
import SchemaData from "@/components/seo/SchemaData";
import CountdownTimer from "@/components/ui/countdown-timer";
import PaymentSection from "@/components/course/PaymentSection";
import {
  CheckCircle,
  Play,
  Star,
  BookOpen,
  Youtube,
  Users,
  BarChart2,
  Award,
  TrendingUp,
  CheckCheck,
  MessageSquare,
  Clock,
  Shield,
  CreditCard,
  Lock
} from "lucide-react";

// Instructor photos
const instructorPhoto = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
const priyanshuPhoto = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";
const timelinePhotos = [
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
];

// Achievement images for Priyanshu's section
const achievementImages = {
  playButton: "https://images.unsplash.com/photo-1585773690161-7b1cd0e31cea",
  macbook: "https://images.unsplash.com/photo-1519720842496-3c1c8a542afd",
  iphone: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
};

// Brand logos and influencer photos for Priyanshu's section
const brandLogos = [
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9", // Physics Wallah placeholder
  "https://images.unsplash.com/photo-1614332287897-cdc485fa562d", // MPL placeholder
  "https://images.unsplash.com/photo-1614332287897-cdc485fa562d", // Meesho placeholder
  "https://images.unsplash.com/photo-1614332287897-cdc485fa562d", // Dream11 placeholder
];

// Fade in animation for sections
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 }
  })
};

// Schema for course
const getCourseSchema = () => {
  return {
    "@type": "Course",
    name: "YouTube Growth Accelerator",
    description: "Comprehensive system to grow your YouTube channel from 0 to 100K subscribers.",
    provider: {
      "@type": "Organization",
      name: "Infridet Solutions Private Limited",
      sameAs: "https://infridetsolutions.com"
    },
    offers: {
      "@type": "Offer",
      price: "7999",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock"
    }
  };
};

// Payment link
const PAYMENT_LINK = "https://payments.cashfree.com/forms/youtube-growth";

const YoutubeGrowth = () => {
  return (
    <Layout>
      <SEOHead 
        title="YouTube Growth Accelerator Course" 
        description="A comprehensive system to grow your YouTube channel from 0 to 100K subscribers. Learn from experts who've managed channels with 26M+ subscribers."
        keywords={["YouTube growth", "YouTube strategy", "channel growth", "monetization", "content creation", "algorithm", "Gyanendra Dwivedi", "Priyanshu Gupta"]}
      />
      <SchemaData type="Course" data={getCourseSchema()} />
      
      {/* Background elements - pattern overlays */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* Abstract gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDI0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9IiM5ZjcyM2MiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

        {/* Radial circles */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-3/4 left-3/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full filter blur-[80px]"></div>
      </div>
      
      {/* Countdown Banner */}
      <div className="sticky top-16 z-50 bg-gradient-to-r from-orange-600 to-orange-700 py-3">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center">
              <Clock className="text-white mr-2" size={20} />
              <p className="text-white font-medium">Limited Time Offer Ends In:</p>
            </div>
            <CountdownTimer className="bg-white/10 border-white/20" />
            <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-white text-orange-600 hover:bg-white/90">
                Enroll Now
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden hero-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent opacity-80 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.span 
                className="inline-block bg-orange-500 text-white px-3 py-1 text-sm font-medium rounded-md mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Most Popular Course
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold gradient-text mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                YouTube Growth Accelerator
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Comprehensive system to grow your YouTube channel from 0 to 100K subscribers. Master the strategies used by channels with millions of subscribers.
              </motion.p>
              
              <motion.div 
                className="flex items-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <span className="ml-2 text-muted-foreground">
                  <strong className="text-white">4.9</strong> (120+ reviews)
                </span>
              </motion.div>
              
              <motion.div 
                className="flex gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="glass-card p-4 rounded-lg flex items-center">
                  <BookOpen className="text-orange-500 mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Modules</p>
                    <p className="font-semibold">8</p>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg flex items-center">
                  <Clock className="text-orange-500 mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">50+ Hours</p>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg flex items-center">
                  <Users className="text-orange-500 mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Students</p>
                    <p className="font-semibold">1,500+</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    Enroll Now - ₹7,999
                    <span className="text-sm ml-2 line-through text-orange-200/80">₹12,999</span>
                  </Button>
                </a>
                
                <Link to="#curriculum">
                  <Button variant="outline" size="lg">
                    <Play size={16} className="mr-2" />
                    Preview Course
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="aspect-video rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                    <Play size={36} className="text-white ml-1" />
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Course Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg border border-orange-500/20">
                <p className="font-bold text-lg">Limited Time Offer!</p>
                <p className="text-orange-400">38% OFF - Ends Soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Course Overview */}
      <section className="py-12 bg-gradient-to-b from-background to-black/90">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Youtube className="text-orange-500" size={24} />,
                title: "Channel Growth",
                description: "From 0 to 100k subscribers with proven strategies"
              },
              {
                icon: <BarChart2 className="text-orange-500" size={24} />,
                title: "Monetization",
                description: "Multiple revenue streams beyond AdSense"
              },
              {
                icon: <TrendingUp className="text-orange-500" size={24} />,
                title: "Algorithm Mastery",
                description: "Learn what makes videos go viral"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6"
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-orange-500/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Instructors Section */}
      <section id="instructors" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Meet Your Instructors</h2>
            <p className="text-xl text-muted-foreground">
              Learn from experienced professionals who've been where you are
            </p>
          </motion.div>
          
          {/* Instructor 1: Gyanendra */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <motion.div 
              className="lg:col-span-5"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={instructorPhoto} 
                  alt="Gyanendra Dwivedi" 
                  className="rounded-xl w-full object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-lg">
                  <h3 className="font-bold text-xl">Gyanendra Dwivedi</h3>
                  <p className="text-orange-400">YouTube Growth Expert</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-7"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6">Started With - No Setup, No Equipment, No Money But... Hope & Belief</h3>
                
                <div className="space-y-4 text-lg">
                  <p>
                    <span className="text-orange-400 font-semibold">Back in 2016</span>, when I found a purpose.
                    When everyone was busy finding girlfriends and enjoying college life,
                    I was denying everything just to work on something that would truly shape my future and, more than that, my ambition.
                  </p>
                  
                  <blockquote className="border-l-4 border-orange-500 pl-4 italic my-6">
                    "I faced constant rejection, zero views, and countless moments of doubt. But I kept pushing because I knew 
                    there was something bigger waiting for me."
                  </blockquote>
                  
                  <p>
                    My channel grew to <span className="text-orange-400 font-semibold">35K subscribers in just one year</span>,
                    before getting deleted on October 2nd. That didn't stop me – it pushed me to start freelance editing work
                    and eventually build a video editing agency.
                  </p>
                  
                  <p>
                    I then worked with <span className="text-orange-400 font-semibold">Josh Talks Hindi</span> (earning them a Diamond Play Button)
                    and later <span className="text-orange-400 font-semibold">PhysicsWallah</span>, 
                    helping grow channels to millions of subscribers and billions of views.
                  </p>
                  
                  <p>
                    Today, I've helped manage a channel portfolio with <span className="text-orange-400 font-semibold">26M+ subscribers</span>, 
                    with videos reaching up to 22M views. This is just the beginning of what's possible.
                  </p>
                </div>
                
                <div className="mt-8">
                  <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Learn From My Journey
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Instructor 2: Priyanshu */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            <motion.div 
              className="lg:col-span-7 lg:order-1 order-2"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6">Hi, I'm Priyanshu. And I promise you one thing - you can also make lots of money online.</h3>
                
                <div className="space-y-4">
                  <p className="text-lg">
                    I started at 15 with nothing. Now at 19, I've:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Made over ₹59 Lakhs as a freelancer in just 3 years</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Built multiple income streams (YouTube, Freelancing, Agency, Online Business)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Successfully coached 291+ students to start earning online</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Became financially independent at age 16</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Now charge ₹50K-₹90K per client</span>
                    </li>
                  </ul>
                  
                  <p className="text-lg font-medium text-orange-400">
                    If I could do it starting with zero knowledge, imagine what YOU can do with my guidance!
                  </p>
                </div>
                
                <div className="mt-8">
                  <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      BOOK YOUR CALL NOW →
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-5 lg:order-2 order-1"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={priyanshuPhoto} 
                  alt="Priyanshu Gupta" 
                  className="rounded-xl w-full object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-lg">
                  <h3 className="font-bold text-xl">Priyanshu Gupta</h3>
                  <p className="text-orange-400">YouTube Strategy Expert</p>
                </div>
                
                {/* Stats */}
                <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-orange-500/20">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                      <p className="text-orange-400 font-bold">Since</p>
                      <p className="font-bold">2019</p>
                    </div>
                    <div>
                      <p className="text-orange-400 font-bold">Students</p>
                      <p className="font-bold">291+</p>
                    </div>
                    <div>
                      <p className="text-orange-400 font-bold">Earned</p>
                      <p className="font-bold">₹59L+</p>
                    </div>
                    <div>
                      <p className="text-orange-400 font-bold">Awards</p>
                      <p className="font-bold">Multiple</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Priyanshu's YouTube Journey */}
      <section className="py-20 bg-gradient-to-b from-black to-black/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Priyanshu's YouTube Success</h2>
            <p className="text-xl text-muted-foreground">
              How I Achieved 300K+ Subscribers On YouTube
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <p>
                  My YouTube journey began with a simple dream - to create content that helps others while building my own brand.
                </p>
                <p>
                  Starting with zero subscribers and no fancy equipment, I focused on providing valuable content around online earning, YouTube growth, and personal development.
                </p>
                <p>
                  Through consistent uploads, audience engagement, and content optimization, I grew my channel to over 300,000 subscribers - all while being a teenager!
                </p>
                <p>
                  This journey taught me exactly what works and what doesn't when it comes to growing on YouTube and monetizing your audience.
                </p>
                <blockquote className="border-l-4 border-orange-500 pl-4 italic my-6">
                  "I can teach you the exact strategies that helped me achieve this milestone, so you can skip the years of trial and error!"
                </blockquote>
              </div>
              
              <div className="mt-8 p-6 glass-card">
                <h4 className="text-xl font-bold mb-4">MY JOURNEY FROM ZERO TO LAKHS PER MONTH</h4>
                <p>
                  At 15, I had no money and no idea how to earn. I just knew I wanted something bigger for myself and my family.
                </p>
                <p className="mt-4">
                  I started making YouTube videos, then tried freelance video editing and graphic design without any knowledge or skills. After some time in freelancing, I launched my own agency that grew quickly. Then I started another online business.
                </p>
                <p className="mt-4">
                  I faced many ups and downs, but today I can proudly say:
                </p>
                <p className="mt-4 text-orange-400 font-medium">
                  I learned everything from zero, and now I earn lakhs every month while teaching others to do the same.
                </p>
                <p className="mt-4">
                  I had no guide and took 5 years to learn and implement everything. But you have me now. I'll share my 5 years of knowledge with you in just a 1-hour call!
                </p>
                
                <div className="mt-6">
                  <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      START EARNING TODAY - BOOK YOUR CALL →
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7" 
                  alt="YouTube Analytics" 
                  className="w-full h-96 object-cover"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {[
                  { 
                    title: "Multiple YouTube Play Buttons",
                    image: achievementImages.playButton,
                    description: "Proudly own multiple YouTube awards!"
                  },
                  { 
                    title: "From a ₹28K Dell to a ₹2 Lakh MacBook",
                    image: achievementImages.macbook,
                    description: "Upgraded from a simple Dell to MacBook M3 Pro"
                  },
                  { 
                    title: "Dream Phone: iPhone",
                    image: achievementImages.iphone,
                    description: "From iPhone 13 to iPhone 16 Pro Max"
                  }
                ].map((achievement, index) => (
                  <div key={index} className="glass-card overflow-hidden">
                    <div className="h-36">
                      <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold mb-1 text-sm">{achievement.title}</h5>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 glass-card rounded-lg text-center">
                <h4 className="font-bold mb-2">YOU CAN DO THIS TOO - STARTING TODAY!</h4>
                <p className="text-muted-foreground">
                  If I could do it, you definitely can. Don't wait for the "perfect time" - it's now!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What Priyanshu Can Teach - Skills Section */}
      <section className="py-20 bg-gradient-to-b from-black/95 to-background/90 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">WHAT I CAN TEACH YOU IN JUST ONE HOUR</h2>
            <p className="text-xl text-muted-foreground">
              Practical skills to help you start earning online
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Build a Video Editing Agency",
                description: "Learn to create and scale a high earning video editing agency from scratch",
                icon: <Youtube className="text-orange-500" size={24} />
              },
              {
                title: "Create Any Online Business",
                description: "Start profitable online businesses without any upfront investment",
                icon: <Award className="text-orange-500" size={24} />
              },
              {
                title: "Grow Your YouTube Channel Fast",
                description: "Master short and long-form content strategies for rapid growth",
                icon: <TrendingUp className="text-orange-500" size={24} />
              },
              {
                title: "Master Cinematography & Filming",
                description: "Learn professional filming techniques to create stunning content",
                icon: <Youtube className="text-orange-500" size={24} />
              },
              {
                title: "Make Money with AI",
                description: "Leverage the newest AI technologies to generate income online",
                icon: <BarChart2 className="text-orange-500" size={24} />
              },
              {
                title: "Learn Sales Process",
                description: "Develop confidence and skills to sell anything effectively",
                icon: <Users className="text-orange-500" size={24} />
              }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6"
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                custom={index + 1}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-orange-500/10">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Make Money Online Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">MAKE ₹50,000-₹1,00,000 ONLINE EVERY MONTH</h2>
            <p className="text-xl text-muted-foreground">
              I did it at the age of 19, and I can show you exactly how. No fluff, no theory - just practical strategies that work in the real world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Content Creation",
                description: "Learn how to create viral content that attracts brands and sponsors. I'll show you exactly how I built multiple successful YouTube channels at just 19 years old.",
                icon: <Youtube className="text-orange-500" size={24} />
              },
              {
                title: "Video Editing Agency",
                description: "Start your own video editing agency where you can earn ₹2 lakh per month like I scaled. I'll teach you the exact strategies I used to grow my agency rapidly.",
                icon: <Award className="text-orange-500" size={24} />
              },
              {
                title: "Personal Branding",
                description: "Develop a personal brand that stands out in the crowded digital space. This is how I've attracted top influencers and brands to work with me.",
                icon: <Users className="text-orange-500" size={24} />
              },
              {
                title: "Freelancing",
                description: "Start earning immediately by offering your skills as a freelancer. I'll guide you through finding high-paying clients and delivering exceptional work.",
                icon: <BarChart2 className="text-orange-500" size={24} />
              }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6"
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                custom={index + 1}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-orange-500/10">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                BOOK YOUR ONE-HOUR CALL WITH ME NOW →
              </Button>
            </a>
            <p className="mt-3 text-muted-foreground">
              Want to start making ₹50,000–₹1,00,000 every month? Let's make it happen—book your session now and I'll guide you through it!
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-black/95 to-background">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">My YouTube Journey</h2>
            <p className="text-xl text-muted-foreground">
              From Zero Subscribers to Managing 26M+ Subscriber Channels
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500/20"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {[
                {
                  year: "2016",
                  title: "The Beginning",
                  description: "Started YouTube channel with no equipment, views, or knowledge. Faced inconsistency and stagnant growth.",
                  image: timelinePhotos[0],
                  achievements: [
                    "Created first YouTube channel",
                    "Learned basic video editing",
                    "Struggled with consistency"
                  ]
                },
                {
                  year: "2017-2018",
                  title: "First Major Growth",
                  description: "Built channel to 35K subscribers. After channel deletion, pivoted to freelance editing work. Started building video editing agency.",
                  image: timelinePhotos[1],
                  achievements: [
                    "Grew to 35K subscribers in 1 year",
                    "Created 107 videos",
                    "Started freelance editing career"
                  ]
                },
                {
                  year: "2019-2021",
                  title: "Professional Success",
                  description: "Worked with Josh Talks Hindi, helping them earn a Diamond Play Button. Started collaboration with PhysicsWallah.",
                  image: timelinePhotos[2],
                  achievements: [
                    "Managed Josh Talks Hindi channel",
                    "Earned Diamond Play Button (10M+ subscribers)",
                    "Joined PhysicsWallah team"
                  ]
                },
                {
                  year: "2022-2024",
                  title: "Scaling Success",
                  description: "Built channel portfolio with 26M+ subscribers. Managed channels with views up to 22M. Started teaching others the YouTube growth formula.",
                  image: instructorPhoto,
                  achievements: [
                    "26M+ subscribers across channels",
                    "Videos reaching 22M views",
                    "Two owned monetized channels",
                    "Working with major brands & creators"
                  ]
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  variants={fadeInUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  custom={index + 1}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500 border-4 border-background z-10"></div>
                  
                  {/* Timeline content */}
                  <div className={`glass-card w-full md:w-5/12 overflow-hidden ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full">
                      <div className="md:col-span-2 h-48 md:h-full">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:col-span-3 flex flex-col">
                        <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-md mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        
                        <div className="mt-auto">
                          <h4 className="font-semibold mb-2 text-sm text-orange-400">KEY ACHIEVEMENTS:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle size={16} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section id="curriculum" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-500/5 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Course Curriculum</h2>
            <p className="text-xl text-muted-foreground">
              A structured path to YouTube success with proven strategies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">What You'll Learn</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Channel optimization blueprint",
                    "Content strategy framework",
                    "Thumbnail design masterclass",
                    "Monetization strategies",
                    "Algorithm secrets revealed",
                    "Batch content creation",
                    "Growth through collaboration",
                    "Building loyal community",
                    "Effective storytelling",
                    "Analytics & optimization",
                    "Equipment essentials",
                    "Brand partnership guide"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCheck size={20} className="text-orange-500 mt-0.5 mr-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Enroll Now - ₹7,999
                      <span className="text-sm ml-2 line-through text-orange-200/80">₹12,999</span>
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Course Modules</h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Module 1: Foundation & Channel Setup",
                      lessons: 8,
                      duration: "5 hrs"
                    },
                    {
                      title: "Module 2: Content Strategy & Planning",
                      lessons: 10,
                      duration: "7 hrs"
                    },
                    {
                      title: "Module 3: Video Production Essentials",
                      lessons: 12,
                      duration: "8 hrs"
                    },
                    {
                      title: "Module 4: Thumbnail & Title Mastery",
                      lessons: 6,
                      duration: "4 hrs"
                    },
                    {
                      title: "Module 5: Algorithm & Analytics",
                      lessons: 9,
                      duration: "6 hrs"
                    },
                    {
                      title: "Module 6: Audience Growth Tactics",
                      lessons: 7,
                      duration: "5 hrs"
                    },
                    {
                      title: "Module 7: Monetization Blueprint",
                      lessons: 8,
                      duration: "6 hrs"
                    },
                    {
                      title: "Module 8: Scaling Your Channel",
                      lessons: 10,
                      duration: "7 hrs"
                    }
                  ].map((module, index) => (
                    <div key={index} className="border border-border/40 rounded-lg p-4 bg-black/40">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">{module.title}</h4>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <BookOpen size={14} className="mr-1" />
                            {module.lessons} lessons
                          </span>
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <div className="flex items-start">
                    <Play size={20} className="text-orange-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold mb-1">Preview Available</h4>
                      <p className="text-sm text-muted-foreground">Get free access to select lessons from the first module when you sign up.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              See the real results our students have achieved with our strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Rahul Singh",
                role: "Video Editor",
                testimonial: "Priyanshu's guidance helped me land my first ₹30,000 client within just 2 weeks! His practical approach and direct feedback made all the difference."
              },
              {
                name: "Neha Gupta",
                role: "Content Creator",
                testimonial: "I was struggling to grow my YouTube channel for 2 years. After just one session with Priyanshu, I implemented his strategies and gained 10K subscribers in 3 months!"
              },
              {
                name: "Amit Sharma",
                role: "Freelancer",
                testimonial: "The agency model Priyanshu taught me has completely transformed my income. From making ₹15K per month to now consistently earning over ₹70K monthly."
              },
              {
                name: "Priya Patel",
                role: "Agency Owner",
                testimonial: "His sales techniques are pure gold! I was always afraid of selling, but now I close deals with confidence. Already made back 10x what I paid for the coaching."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="glass-card p-6"
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                custom={index + 1}
                viewport={{ once: true }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">
                      {story.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground flex-grow">
                    "{story.testimonial}"
                  </blockquote>
                  
                  <div className="mt-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12">
            <div className="glass-card p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold mb-4">I'VE WORKED WITH TOP BRANDS & INFLUENCERS</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-8 gap-6">
                {["Physics Wallah", "MPL", "Meesho", "Dream11", "PharmEasy", "Confirmtkt", "Airtel", "Jar"].map((brand, index) => (
                  <div key={index} className="bg-white/10 p-3 rounded-md flex items-center justify-center h-16">
                    <p className="text-sm font-semibold text-center">{brand}</p>
                  </div>
                ))}
              </div>
              
              <h4 className="text-lg font-bold mt-8 mb-4">Worked With</h4>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                {[
                  "Gaurav Malhotra", 
                  "Praduman Kaushik", 
                  "Counting Unique", 
                  "Bhooka Saand", 
                  "Anmol Jaiswal", 
                  "Ankit TV", 
                  "Vijay aka FWS"
                ].map((influencer, index) => (
                  <div key={index} className="bg-white/5 p-2 rounded-md text-center">
                    <p className="text-sm">{influencer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Payment Section */}
      <section id="enroll" className="py-20 bg-gradient-to-b from-background to-black/95">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-orange-500 text-white px-3 py-1 text-sm font-medium rounded-md mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Enroll Today & Save</h2>
            <p className="text-xl text-muted-foreground">
              Get lifetime access to the complete YouTube Growth Accelerator
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <PaymentSection 
                price="7,999" 
                originalPrice="12,999" 
                discount="38%" 
                paymentLink={PAYMENT_LINK} 
              />
            </motion.div>

            <motion.div 
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Exclusive Bonuses</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                      <Award className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Thumbnail Template Pack</h4>
                      <p className="text-muted-foreground text-sm">
                        10+ proven high-CTR thumbnail templates in Photoshop & Canva formats.
                      </p>
                      <p className="text-sm text-orange-400 mt-1">Value: ₹2,999</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                      <Users className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Private Community Access</h4>
                      <p className="text-muted-foreground text-sm">
                        Connect with fellow creators and get direct feedback from Gyanendra and Priyanshu.
                      </p>
                      <p className="text-sm text-orange-400 mt-1">Value: ₹5,999</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                      <MessageSquare className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">2 Group Coaching Calls</h4>
                      <p className="text-muted-foreground text-sm">
                        Live Q&A sessions to get personalized feedback on your channel growth strategy.
                      </p>
                      <p className="text-sm text-orange-400 mt-1">Value: ₹3,999</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                      <Youtube className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Channel Audit Template</h4>
                      <p className="text-muted-foreground text-sm">
                        Professional template to audit your channel and identify growth opportunities.
                      </p>
                      <p className="text-sm text-orange-400 mt-1">Value: ₹1,999</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-orange-500/10 to-orange-500/20 rounded-lg border border-orange-500/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Total Bonus Value:</h4>
                      <p className="text-muted-foreground">Included with your purchase</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-orange-400">₹14,996</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black/95 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center border-2 border-orange-500/20"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold gradient-text mb-6"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              Ready to Transform Your YouTube Channel?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              Join 1,500+ creators who have already accelerated their growth with our proven strategies. The 38% discount ends soon!
            </motion.p>
            
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
            >
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-6 text-lg"
                >
                  Enroll Now - ₹7,999
                  <span className="text-sm ml-2 line-through text-orange-200/80">₹12,999</span>
                </Button>
              </a>
              
              <div className="mt-8">
                <div className="text-center mb-4">
                  <p className="font-semibold">Secure Payment Options:</p>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="bg-white p-1 rounded-md">
                    <img src="https://cdn.razorpay.com/static/assets/payment_methods/visa.svg" alt="Visa" className="h-6" />
                  </div>
                  <div className="bg-white p-1 rounded-md">
                    <img src="https://cdn.razorpay.com/static/assets/payment_methods/mastercard.svg" alt="Mastercard" className="h-6" />
                  </div>
                  <div className="bg-white p-1 rounded-md">
                    <img src="https://cdn.razorpay.com/static/assets/payment_methods/rupay.svg" alt="RuPay" className="h-6" />
                  </div>
                  <div className="bg-white p-1 rounded-md">
                    <img src="https://cdn.razorpay.com/static/assets/payment_methods/upi.svg" alt="UPI" className="h-6" />
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Lock size={14} className="mr-1" />
                    <span>256-bit SSL Secured</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard size={14} className="mr-1" />
                    <span>100% Safe & Secure</span>
                  </div>
                  <div className="flex items-center">
                    <Shield size={14} className="mr-1" />
                    <span>30-Day Money Back Guarantee</span>
                  </div>
                </div>
                
                <p className="text-center text-muted-foreground mt-4">
                  Lifetime access • Instant access • Money-back guarantee
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default YoutubeGrowth;
