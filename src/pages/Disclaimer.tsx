import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { FileText, AlertTriangle, Info } from "lucide-react";

const Disclaimer = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 relative overflow-hidden hero-bg">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Disclaimer
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Last Updated: April 7, 2025
            </motion.p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-12 bg-gradient-to-b from-background to-black/95">
        <div className="container px-4 md:px-6">
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">General Disclaimer</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The information provided by INFRIDET SOLUTIONS PRIVATE LIMITED ("we," "us," or "our") on our website and through our services is for general informational and educational purposes only. All information on our site and services is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
            </p>
            <p className="text-muted-foreground">
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of our site or services or reliance on any information provided. Your use of our site and services and your reliance on any information is solely at your own risk.
            </p>
          </div>

          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <Info size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">Professional Disclaimer</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The services we offer are designed to provide guidance and information related to digital marketing, online business growth, content creation, and related fields. Our content is based on our professional experience and knowledge in these areas.
            </p>
            <p className="text-muted-foreground mb-4">
              By using our services, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>We cannot guarantee specific results from following our advice or using our services</li>
              <li>Success depends on various factors including your implementation, market conditions, and individual circumstances</li>
              <li>Digital platforms and algorithms frequently change, which may impact the effectiveness of strategies</li>
              <li>Our suggestions and strategies may not be suitable for all businesses or individuals</li>
            </ul>
            <p className="text-muted-foreground">
              You should use your own judgment and consider your specific situation when applying any strategies or advice provided through our services.
            </p>
          </div>

          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <FileText size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">Testimonials and Case Studies</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Testimonials and case studies featured on our website represent actual experiences of our clients. However, they are individual experiences, reflecting real results that they have achieved. These testimonials and case studies are not intended to guarantee or promise that any other client will achieve the same or similar results.
            </p>
            <p className="text-muted-foreground">
              The results described in our testimonials and case studies are specific to the individuals represented. Your results will vary depending on numerous factors including your specific situation, market conditions, the quality of your implementation, and other circumstances beyond our control.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <FileText size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">Financial Disclaimer</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Any references to business opportunities, income potential, or financial results are for illustrative purposes only. The information we provide is not intended as financial advice. We are not financial advisors, and our services do not constitute financial advice.
            </p>
            <p className="text-muted-foreground mb-4">
              You acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Any examples of income or earnings are not to be interpreted as a promise or guarantee of earnings</li>
              <li>Business success depends on many factors including your efforts, business experience, knowledge, and market conditions</li>
              <li>There is no guarantee that you will achieve any particular financial result by using our services</li>
              <li>We are not responsible for any financial decisions you make based on the information we provide</li>
            </ul>
            <p className="text-muted-foreground">
              For specific financial advice, you should consult with a qualified financial professional.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">External Links Disclaimer</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Our website and services may contain links to external websites that are not provided or maintained by us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
            <p className="text-muted-foreground">
              These links are provided for your convenience, and the inclusion of any link does not imply endorsement by us of the site or any association with its operators. We have no control over the availability of any of these resources, and we are not responsible for the content of any of these external sites.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <FileText size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">Payment Processing Disclaimer</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              For processing payments, we use third-party payment processors including Cashfree Payments. These payment processors have their own terms of service and privacy policies that may apply to you. We are not responsible for the actions or policies of these third-party payment processors.
            </p>
            <p className="text-muted-foreground mb-4">
              By making a purchase through our website, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Your payment information is being collected and processed by these third-party payment processors</li>
              <li>We do not store your complete payment information on our servers</li>
              <li>Any issues related to payment processing should be directed to the appropriate payment processor</li>
              <li>You agree to the terms of service and privacy policy of the payment processor handling your transaction</li>
            </ul>
          </div>
          
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center mb-4">
              <Info size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">Contact Information</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Disclaimer, please contact us at:
            </p>
            <div className="mt-4">
              <p className="font-medium">INFRIDET SOLUTIONS PRIVATE LIMITED</p>
              <p className="text-muted-foreground">Mahagun Mantra 1, Sector 10, Noida, UP</p>
              <p className="text-muted-foreground">Email: Marketing@infridetsolutions.com</p>
              <p className="text-muted-foreground">Phone: +91 8853354829</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
