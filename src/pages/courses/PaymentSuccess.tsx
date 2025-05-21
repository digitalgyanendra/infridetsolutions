
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo/SEOHead";
import { CheckCircle, Mail, Video, Users, BookOpen } from "lucide-react";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 }
  })
};

const PaymentSuccess = () => {
  return (
    <Layout>
      <SEOHead 
        title="Payment Successful | YouTube Growth Accelerator" 
        description="Thank you for enrolling in the YouTube Growth Accelerator course. Your journey to YouTube success starts now!"
        keywords={["payment success", "YouTube course", "enrollment confirmation"]}
      />

      {/* Background Design */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDI0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9IiM5ZjcyM2MiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full filter blur-[100px]"></div>
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            custom={0}
          >
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle size={48} className="text-green-500" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Payment Successful!</h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for enrolling in the YouTube Growth Accelerator course. Your journey to YouTube success starts now!
            </p>
            
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">What's Next?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-4">
                  <Mail size={32} className="text-orange-500 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Check Your Email</h3>
                  <p className="text-muted-foreground text-center">
                    We've sent you a confirmation email with login details and next steps.
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <Video size={32} className="text-orange-500 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Access Your Course</h3>
                  <p className="text-muted-foreground text-center">
                    You'll receive access to the course portal within the next 24 hours.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Purchase Includes:</h2>
              
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Complete 8-module YouTube Growth Accelerator Course</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Lifetime Access to All Future Updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Private Community Access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Exclusive Bonuses Worth ₹14,996</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>30-Day Money Back Guarantee</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" size="lg">
                  Return to Homepage
                </Button>
              </Link>
              
              <Link to="/courses">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                >
                  Explore More Courses
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 p-4 border border-orange-500/20 rounded-lg bg-black/40">
              <div className="flex items-center gap-2 mb-2">
                <Users size={18} className="text-orange-500" />
                <h3 className="font-bold">Need Help?</h3>
              </div>
              <p className="text-muted-foreground">
                If you have any questions or need assistance, please contact our support team at 
                <a href="mailto:support@example.com" className="text-orange-400 ml-1">support@example.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentSuccess;
