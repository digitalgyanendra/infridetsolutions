import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CountdownTimer from "@/components/ui/countdown-timer";
import PaymentSection from "@/components/course/PaymentSection";
import SEOHead from "@/components/seo/SEOHead";
import { Check, Video, FileText, Users, MessageCircle, Award } from "lucide-react";
import PurchaseNotification from "@/components/course/PurchaseNotification";
import { Card, CardContent } from "@/components/ui/card";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 }
  })
};

const YoutubeGrowth = () => {
  // Calculate discounted price
  const originalPrice = "20,000";
  const discountPercentage = 10;
  const discountedPrice = (20000 * (100 - discountPercentage) / 100).toLocaleString();
  
  return (
    <Layout>
      <SEOHead
        title="YouTube Growth Accelerator Program | Learn YouTube Success"
        description="Master YouTube growth strategies with our comprehensive program. Learn how to grow your channel, increase views, and monetize your content effectively."
        keywords={["YouTube growth", "YouTube success", "YouTube monetization", "YouTube course"]}
      />
      
      {/* Add the PurchaseNotification component */}
      <PurchaseNotification />

      {/* Background Design */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDI0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9IiM5ZjcyM2MiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pb-20 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={0}
            >
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium border border-orange-500/30 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-500">
                #1 YouTube Growth Program in India
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 leading-tight">
                YouTube Growth Accelerator Program
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Learn How To Start, Grow, and Monetize Your YouTube Channel To Build a Sustainable Online Income
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 gap-2 text-lg py-6 px-8"
                  asChild
                >
                  <a href="#pricing">
                    Enroll Now
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-orange-500/50 hover:bg-orange-500/10 text-lg py-6 px-8"
                  asChild
                >
                  <a href="#course-details">
                    Learn More
                  </a>
                </Button>
              </div>
              
              {/* Countdown Timer */}
              <div className="max-w-lg mx-auto">
                <p className="text-sm md:text-base text-orange-400 mb-2">Limited Time Offer - 10% Off Ends In:</p>
                <CountdownTimer 
                  initialHours={24} 
                  initialMinutes={0} 
                  initialSeconds={0}
                  className="shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Instructor Section - NEW */}
      <section className="py-16 md:py-20 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={1}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Instructors</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn from industry professionals with proven track records in YouTube growth and content creation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Main Instructor Card */}
              <motion.div 
                className="glass-card p-6"
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
                custom={1.5}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-500/30">
                    <img src="/lovable-uploads/325d2d7a-2a49-4220-8cc1-150319570c01.png" alt="Gyanendra Dwivedi" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Gyanendra Dwivedi</h3>
                    <p className="text-orange-500 font-medium mb-3">Lead Instructor & YouTube Strategist</p>
                    <p className="text-muted-foreground mb-4">
                      Gyanendra has helped over 300+ content creators scale their YouTube channels and build sustainable online businesses through proven growth strategies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">10+ Years Experience</span>
                      <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">YouTube Certified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Co-Instructor Card */}
              <motion.div 
                className="glass-card p-6"
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
                custom={1.7}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-500/30">
                    <img src="/placeholders/user2.jpg" alt="Priyanshu Gupta" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Priyanshu Gupta</h3>
                    <p className="text-orange-500 font-medium mb-3">Co-Instructor & Content Specialist</p>
                    <p className="text-muted-foreground mb-4">
                      Priyanshu specializes in content optimization and audience growth strategies, helping creators maximize engagement and build loyal communities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">Content Strategy</span>
                      <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">Audience Building</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Details Section */}
      <section id="course-details" className="py-16 md:py-24 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={2}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need To Master YouTube</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                This comprehensive program gives you all the tools, strategies, and techniques to grow your YouTube channel from zero to hero.
              </p>
            </motion.div>
            
            {/* Course Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <motion.div 
                className="glass-card p-6"
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
                custom={2.2}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                    <Video size={24} className="text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">Module 1: Channel Foundation</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Setting up your channel for maximum visibility</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Niche selection and validation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Creating a compelling channel identity</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6"
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
                custom={2.4}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                    <FileText size={24} className="text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">Module 2: Content Strategy</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Topic research and trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Creating high-retention videos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Content calendar planning</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6"
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
                custom={2.6}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                    <Users size={24} className="text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">Module 3: Audience Growth</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>YouTube SEO mastery</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Thumbnail optimization tactics</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Building community engagement</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6"
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
                custom={2.8}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                    <MessageCircle size={24} className="text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">Module 4: Monetization</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Ad revenue optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Brand deals and sponsorships</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Creating and selling digital products</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            {/* Special Call-to-Action */}
            <motion.div 
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={3}
            >
              <div className="inline-block glass-card p-8 border-2 border-orange-500/20">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your YouTube Journey?</h3>
                <p className="text-lg mb-6">
                  Join thousands of creators who have successfully grown their channels using this proven system.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 gap-2 text-lg"
                  asChild
                >
                  <a href="#pricing">
                    Enroll Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Brands Worked With Section - NEW */}
      <section className="py-16 md:py-20 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={3.5}
            >
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium border border-orange-500/30 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-500">
                Industry Recognition
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Brands We've Worked With</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our instructors have collaborated with leading brands and creators to deliver exceptional growth results.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-8 mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={3.7}
            >
              <img 
                src="/lovable-uploads/30adb30e-a545-42cd-a151-a01cd3659715.png" 
                alt="Brands we've worked with" 
                className="w-full max-w-4xl mx-auto rounded"
              />
            </motion.div>
            
            <motion.div
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={3.8}
            >
              <Card className="border-orange-500/20 bg-black/40">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Gyanendra's Industry Experience</h3>
                  <p className="text-muted-foreground mb-6">
                    With over a decade of experience in digital marketing and content creation, Gyanendra has worked with top brands and creators across industries.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-orange-500">300+</div>
                      <p className="text-sm text-muted-foreground">Channels Grown</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-500">20M+</div>
                      <p className="text-sm text-muted-foreground">Views Generated</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-500">50+</div>
                      <p className="text-sm text-muted-foreground">Brand Collaborations</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-500">₹100M+</div>
                      <p className="text-sm text-muted-foreground">Revenue Generated</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={4}
            >
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium border border-orange-500/30 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-500">
                Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Thousands of Successful Students</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how creators just like you have transformed their YouTube channels and built sustainable incomes online.
              </p>
            </motion.div>
            
            {/* Testimonial Tabs */}
            <Tabs defaultValue="testimonial-1" className="w-full">
              <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
                <TabsTrigger value="testimonial-1">Sarah</TabsTrigger>
                <TabsTrigger value="testimonial-2">Rahul</TabsTrigger>
                <TabsTrigger value="testimonial-3">Priya</TabsTrigger>
              </TabsList>
              
              <TabsContent value="testimonial-1" className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img src="/placeholders/user1.jpg" alt="Sarah" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-orange-500">★</span>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-lg mb-4">
                      "This program helped me grow my YouTube channel from 500 to over 100,000 subscribers in just 8 months. The strategies work amazingly well if you put in the effort!"
                    </blockquote>
                    <div className="font-semibold">Sarah P.</div>
                    <div className="text-sm text-muted-foreground">Fitness & Lifestyle Creator</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="testimonial-2" className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img src="/placeholders/user2.jpg" alt="Rahul" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-orange-500">★</span>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-lg mb-4">
                      "I was struggling to get views on my tech channel for years. Within 3 months of applying these strategies, my channel hit monetization requirements and I'm now making ₹50,000+ per month!"
                    </blockquote>
                    <div className="font-semibold">Rahul S.</div>
                    <div className="text-sm text-muted-foreground">Tech Review Creator</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="testimonial-3" className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img src="/placeholders/user3.jpg" alt="Priya" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-orange-500">★</span>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-lg mb-4">
                      "The advanced SEO techniques and thumbnail strategies completely transformed my cooking channel. I went from 2,000 views per video to over 50,000 views consistently!"
                    </blockquote>
                    <div className="font-semibold">Priya M.</div>
                    <div className="text-sm text-muted-foreground">Cooking Channel Creator</div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={5}
            >
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium border border-orange-500/30 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-500">
                Special 10% OFF - Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Invest In Your YouTube Future Today</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get complete access to the YouTube Growth Accelerator program at our special limited-time price.
              </p>
            </motion.div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-2/3">
                <motion.div 
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariant}
                  custom={5.5}
                >
                  <div className="glass-card p-6 border-2 border-orange-500/20">
                    <h3 className="text-xl font-bold mb-4">What You'll Get:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check size={20} className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Complete 8-Module Course</span>
                          <p className="text-muted-foreground text-sm">50+ hours of in-depth video lessons</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Practical Templates & Resources</span>
                          <p className="text-muted-foreground text-sm">Channel audit worksheet, content calendar, thumbnail templates, and more</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Private Community Access</span>
                          <p className="text-muted-foreground text-sm">Connect with fellow creators and get feedback</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Lifetime Access</span>
                          <p className="text-muted-foreground text-sm">Including all future updates and additions</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="font-bold mb-3">Special Bonuses:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Viral Thumbnail Formula</span>
                            <p className="text-muted-foreground text-sm">Worth ₹4,999</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Brand Deal Negotiation Guide</span>
                            <p className="text-muted-foreground text-sm">Worth ₹3,999</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <span className="font-medium">YouTube Algorithm Masterclass</span>
                            <p className="text-muted-foreground text-sm">Worth ₹5,999</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="lg:w-1/3 w-full"
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
                custom={6}
              >
                <PaymentSection 
                  price={discountedPrice} 
                  originalPrice={originalPrice} 
                  discount="10%" 
                  paymentLink="https://example.com/checkout"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={7}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Here are answers to common questions about the YouTube Growth Accelerator program.
              </p>
            </motion.div>
            
            <div className="space-y-4">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-2">How long do I have access to the course?</h3>
                <p>You get lifetime access to all course materials, including any future updates and additions we make to the program.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-2">Is this course suitable for complete beginners?</h3>
                <p>Absolutely! The course is designed to help you start from scratch and build a successful YouTube channel. We cover everything from basic setup to advanced growth strategies.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-2">How quickly will I see results?</h3>
                <p>Results vary depending on your niche, consistency, and how you implement the strategies. Many students see significant improvements within 60-90 days of applying our methods.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer a money-back guarantee?</h3>
                <p>Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the program, simply email us within 30 days of purchase for a full refund.</p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-2">How is the course content delivered?</h3>
                <p>All course materials are delivered through our online learning platform. You'll get immediate access to all modules, bonuses, and resources after enrollment.</p>
              </div>
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={8}
            >
              <p className="text-lg mb-6">Still have questions? We're here to help!</p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-500/50 hover:bg-orange-500/10"
                asChild
              >
                <Link to="/contact">
                  Contact Support
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="glass-card p-8 border-2 border-orange-500/20 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={9}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-orange-500/20 p-3 rounded-full">
                  <Award size={32} className="text-orange-500" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your YouTube Success Journey Today</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Join thousands of creators who have transformed their YouTube channels and built sustainable online incomes with our proven strategies.
              </p>
              
              <div className="mb-6">
                <CountdownTimer 
                  initialHours={24} 
                  initialMinutes={0} 
                  initialSeconds={0}
                  className="max-w-md mx-auto shadow-lg"
                />
                <p className="text-orange-400 mt-2">Limited-Time 10% Discount Ends Soon!</p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 gap-2 text-lg py-6 px-8"
                asChild
              >
                <a href="#pricing">
                  Enroll Now - ₹{discountedPrice} Only
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                30-Day Money-Back Guarantee. No Questions Asked.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default YoutubeGrowth;
