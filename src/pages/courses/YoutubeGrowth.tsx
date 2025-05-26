import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo/SEOHead";
import SchemaData from "@/components/seo/SchemaData";
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
  Clock
} from "lucide-react";

// Instructor photo (to be replaced with actual photos)
const instructorPhoto = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
const timelinePhotos = [
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
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

const YoutubeGrowth = () => {
  return (
    <Layout>
      <SEOHead 
        title="YouTube Growth Accelerator Course" 
        description="A comprehensive system to grow your YouTube channel from 0 to 100K subscribers. Learn from experts who've managed channels with 26M+ subscribers."
        keywords={["YouTube growth", "YouTube strategy", "channel growth", "monetization", "content creation", "algorithm", "Gyanendra Dwivedi"]}
      />
      <SchemaData type="Course" data={getCourseSchema()} />

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden hero-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-silver-800/90 to-transparent opacity-80 z-0"></div>
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
                <Link to="#enroll">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    Enroll Now - ₹7,999
                    <span className="text-sm ml-2 line-through text-orange-200/80">₹12,999</span>
                  </Button>
                </Link>
                
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
                <div className="absolute inset-0 flex items-center justify-center bg-silver-700/50">
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
              
              <div className="absolute -bottom-4 -right-4 bg-silver-800/80 backdrop-blur-sm p-4 rounded-lg border border-orange-500/20">
                <p className="font-bold text-lg">Limited Time Offer!</p>
                <p className="text-orange-400">38% OFF - Ends in 48hrs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Course Overview */}
      <section className="py-12 bg-gradient-to-b from-background to-silver-200/90">
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

      {/* Instructor Story */}
      <section id="instructor" className="py-20 bg-silver-100 relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Meet Your Instructor</h2>
            <p className="text-xl text-muted-foreground">
              Learn from Someone Who's Been Where You Are
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
                <div className="absolute bottom-4 left-4 right-4 bg-silver-800/80 backdrop-blur-sm p-4 rounded-lg">
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
                  <Link to="#enroll">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Learn From My Journey
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-silver-200/95 to-background">
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
                  <Link to="#enroll">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Enroll Now - ₹7,999
                      <span className="text-sm ml-2 line-through text-orange-200/80">₹12,999</span>
                    </Button>
                  </Link>
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
                    <div key={index} className="border border-border/40 rounded-lg p-4 bg-silver-100/40">
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

      {/* Why Choose This Course - With Priyanshu */}
      <section className="py-20 bg-gradient-to-b from-background to-silver-200/95">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Why Choose This Course</h2>
            <p className="text-xl text-muted-foreground">
              Learn with Gyanendra & Priyanshu - A Powerful Collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div 
              className="lg:col-span-7"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                      <Award className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Learn From Experienced Professionals</h3>
                      <p className="text-muted-foreground">
                        Gyanendra and Priyanshu have worked with channels that collectively have over 26M+ subscribers 
                        and billions of views. They bring real-world expertise, not just theories.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                      <Users className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Two Experts, Double the Knowledge</h3>
                      <p className="text-muted-foreground">
                        With both Gyanendra's channel management expertise and Priyanshu's unique insights,
                        you get a well-rounded education covering all aspects of YouTube success.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                      <TrendingUp className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Proven Results-Driven Approach</h3>
                      <p className="text-muted-foreground">
                        This isn't theory - our strategies have helped channels reach up to 22M views on single videos
                        and build sustainable growth across various niches.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                      <MessageSquare className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Direct Access & Community</h3>
                      <p className="text-muted-foreground">
                        Get exclusive access to our private community where you can ask questions directly and connect with other creators on the same journey.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="#enroll">
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Join Our YouTube Masterclass
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Priyanshu" 
                  className="rounded-xl w-full object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-silver-800/80 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-bold text-xl">Priyanshu</h3>
                  <p className="text-orange-400">YouTube Strategy Expert</p>
                </div>

                <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-lg transform rotate-3 shadow-lg">
                  <p className="font-bold text-sm">Co-Instructor</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Results Section */}
      <section className="py-20 bg-silver-100 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              See the real results our students have achieved with our strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul S.",
                image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
                channel: "Tech Simplified",
                results: "0 to 25K subscribers in 6 months",
                testimonial: "Before this course, I was stuck at 500 subscribers for a year. The thumbnail optimization techniques alone helped me 10x my click-through rate, and my channel exploded."
              },
              {
                name: "Priya M.",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                channel: "Cooking With Priya",
                results: "Monetized in 3 months",
                testimonial: "I was creating content but getting minimal views. After applying the content strategy framework, my videos started reaching new audiences. I hit the monetization requirements in just 3 months!"
              },
              {
                name: "Aditya K.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
                channel: "Finance Freedom",
                results: "Video hit 1M views",
                testimonial: "The algorithm section of this course is gold. I implemented the strategies and one of my videos hit 1M views, bringing in thousands of new subscribers. The return on investment has been incredible."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="glass-card overflow-hidden"
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                custom={index + 1}
                viewport={{ once: true }}
              >
                <div className="h-48 relative">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 text-sm font-medium rounded-md">
                      {story.results}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                      {story.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.channel}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground">
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

          <motion.div 
            className="mt-12 text-center"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={4}
            viewport={{ once: true }}
          >
            <Link to="#enroll">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Join Them & Transform Your Channel
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing & Bonuses Section */}
      <section id="enroll" className="py-20 bg-gradient-to-b from-silver-200/95 to-background">
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
              className="glass-card p-8 border-2 border-orange-500/20"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">YouTube Growth Accelerator</h3>
                <div className="flex items-baseline justify-center mb-1">
                  <span className="text-4xl font-bold">₹7,999</span>
                  <span className="text-xl text-muted-foreground line-through ml-2">₹12,999</span>
                </div>
                <p className="text-orange-400">38% Discount - Limited Time</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Complete 8-module course (50+ hours of content)</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Lifetime access to all course materials</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Private community access</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Downloadable resources & templates</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Access to future updates</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>30-day money-back guarantee</p>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-6 text-lg"
              >
                Enroll Now - ₹7,999
              </Button>
              
              <p className="text-center text-muted-foreground mt-4 text-sm">
                Secure payment via Razorpay / UPI / Cards
              </p>
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

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the YouTube Growth Accelerator course
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Who is this course for?",
                answer: "This course is designed for both beginners starting their YouTube journey and established creators looking to accelerate their growth. Whether you have 0 subscribers or 10,000+, the strategies taught will help you reach the next level."
              },
              {
                question: "How long do I have access to the course?",
                answer: "You get lifetime access to all course materials, including future updates and improvements we make to the curriculum. Once you enroll, it's yours forever."
              },
              {
                question: "Do I need expensive equipment to implement these strategies?",
                answer: "Not at all! We show you how to create high-quality content with whatever equipment you currently have. Gyanendra himself started with minimal equipment, and we teach you how to focus on content strategy first, then gradually upgrade your setup as your channel grows."
              },
              {
                question: "Will this work for my niche?",
                answer: "Yes! The strategies taught in this course have been successfully applied across various niches including education, tech, finance, cooking, lifestyle, gaming, and more. The principles of audience growth and engagement work universally on YouTube."
              },
              {
                question: "Is there a money-back guarantee?",
                answer: "Absolutely! We offer a 30-day money-back guarantee. If you go through the course, implement the strategies, and don't see improvement in your channel's performance, we'll refund your investment in full."
              },
              {
                question: "How is this different from free YouTube advice?",
                answer: "While there's plenty of free advice online, this course provides a structured, comprehensive system based on real experience managing channels with 26M+ subscribers. We share insider strategies, hands-on demonstrations, and provide personalized support you won't find in free content."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6"
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                custom={index + 1}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-silver-200/95 relative overflow-hidden">
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
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-6 text-lg"
              >
                Enroll Now - ₹7,999
                <span className="text-sm ml-2 line-through text-orange-200/80">₹12,999</span>
              </Button>
              
              <p className="text-center text-muted-foreground mt-4">
                Lifetime access • 30-day money-back guarantee • Instant access
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default YoutubeGrowth;
