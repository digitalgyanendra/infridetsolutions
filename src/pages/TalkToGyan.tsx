
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Youtube, SendIcon, CheckCircle2, Users, TrendingUp, Award, Calendar } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import SEOHead from "@/components/seo/SEOHead";


const TalkToGyan = () => {
  const { toast } = useToast();
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
    channelName: "",
    currentSubscribers: "",
    mainGoal: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Consultation Request Sent!",
        description: "Gyan will review your channel and get back to you within 24 hours.",
        duration: 5000,
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          channelName: "",
          currentSubscribers: "",
          mainGoal: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 2000);
    }, 1500);
  };

  const achievements = [
    { icon: Users, number: "500K+", label: "Subscribers Grown" },
    { icon: TrendingUp, number: "200%", label: "Average Growth Rate" },
    { icon: Award, number: "50+", label: "Channels Optimized" },
    { icon: Calendar, number: "5+", label: "Years Experience" },
  ];

  const services = [
    "Channel Audit & Strategy",
    "SEO Optimization",
    "Thumbnail Design Strategy",
    "Content Planning",
    "Monetization Strategies",
    "Analytics & Growth Tracking"
  ];

  return (
    <Layout>
      <SEOHead 
        title="Talk to YouTube Expert Gyan Dwivedi - Free Channel Consultation"
        description="Get expert YouTube growth advice from Gyan Dwivedi. Free consultation for channel optimization, SEO, and monetization strategies. Book your session today!"
        keywords={["YouTube expert consultation", "Gyan Dwivedi YouTube", "channel growth expert", "YouTube SEO consultation", "YouTube strategy session"]}
        ogType="website"
      />

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden hero-bg">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                  Talk to YouTube Expert Gyan
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Get personalized YouTube growth strategies from Gyan Dwivedi. Transform your channel with proven techniques that have helped 50+ creators achieve exponential growth.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <achievement.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.youtube.com/@Core-Gyan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Visit My Channel
                </a>
                <a 
                  href="tel:+918853354829"
                  className="inline-flex items-center px-6 py-3 border border-border hover:bg-muted text-foreground rounded-md transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="/lovable-uploads/3a1238bf-43d7-4308-b873-3d789a424e88.png"
                  alt="Gyan Dwivedi - YouTube Growth Expert"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <Youtube className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">What You'll Get</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive YouTube growth consultation tailored to your channel's specific needs and goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold gradient-text mb-4">
                Book Your Free Consultation
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and Gyan will personally review your channel and provide customized growth strategies.
              </p>
            </motion.div>

            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="channelName" className="text-sm font-medium">
                        YouTube Channel Name *
                      </label>
                      <input
                        type="text"
                        id="channelName"
                        name="channelName"
                        value={formState.channelName}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="currentSubscribers" className="text-sm font-medium">
                        Current Subscribers
                      </label>
                      <select
                        id="currentSubscribers"
                        name="currentSubscribers"
                        value={formState.currentSubscribers}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      >
                        <option value="">Select range</option>
                        <option value="0-100">0 - 100</option>
                        <option value="100-1k">100 - 1K</option>
                        <option value="1k-10k">1K - 10K</option>
                        <option value="10k-100k">10K - 100K</option>
                        <option value="100k+">100K+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mainGoal" className="text-sm font-medium">
                        Main Goal *
                      </label>
                      <select
                        id="mainGoal"
                        name="mainGoal"
                        value={formState.mainGoal}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      >
                        <option value="">Select your goal</option>
                        <option value="grow-subscribers">Grow Subscribers</option>
                        <option value="increase-views">Increase Views</option>
                        <option value="monetization">Monetization</option>
                        <option value="seo-optimization">SEO Optimization</option>
                        <option value="content-strategy">Content Strategy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Tell me about your channel and specific challenges *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe your channel niche, current challenges, and what you'd like to achieve..."
                      className="w-full bg-background/50 border border-border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <>Sending Request...</>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Request Sent Successfully!
                      </>
                    ) : (
                      <>
                        <SendIcon className="mr-2 h-5 w-5" />
                        Book Free Consultation
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Response time: Within 24 hours | Free consultation includes channel audit and growth roadmap
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Contact Information */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Phone size={24} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Direct Call</h3>
                <p className="text-muted-foreground">+91 8853354829</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Mail size={24} className="text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">Marketing@infridetsolutions.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TalkToGyan;
