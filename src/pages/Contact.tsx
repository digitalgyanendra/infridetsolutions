
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, SendIcon, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
        title: "Message Sent Successfully",
        description: "We'll get back to you as soon as possible!",
        duration: 5000,
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 2000);
    }, 1500);
  };

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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have a question or need assistance? Our team is here to help you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-background to-black/95">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Location</h3>
                    <p className="text-muted-foreground">Mahagun Mantra 1, Sector 10, Noida, UP</p>
                  </div>
                </div>

                <div className="glass-card p-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={24} className="text-deepBlue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 8853354829</p>
                  </div>
                </div>

                <div className="glass-card p-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-deepBlue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@digitalnexus.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-deepBlue-900/30 to-black rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-muted-foreground mb-4">Google Maps integration would appear here</p>
                    <div className="flex justify-center">
                      <MapPin size={32} className="text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-background/50 border border-border rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-background/50 border border-border rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                          className="w-full bg-background/50 border border-border rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-background/50 border border-border rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        >
                          <option value="" disabled>Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="consultation">Consultation</option>
                          <option value="support">Technical Support</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-border rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Message Sent
                        </>
                      ) : (
                        <>
                          <SendIcon className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Hours Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.h2 
              className="text-3xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Working Hours
            </motion.h2>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our team is available during the following hours to assist you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
              { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
              { day: "Sunday", hours: "Closed" },
              { day: "Holidays", hours: "By Appointment" },
            ].map((schedule, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">{schedule.day}</h3>
                <p className="text-muted-foreground">{schedule.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
