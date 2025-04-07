
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { FileText, Scale, AlertTriangle } from "lucide-react";

const Terms = () => {
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
              Terms & Conditions
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

      {/* Terms Content */}
      <section className="py-12 bg-gradient-to-b from-background to-black/95">
        <div className="container px-4 md:px-6">
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <FileText size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">Introduction</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Welcome to INFRIDET SOLUTIONS PRIVATE LIMITED's website and services. These Terms and Conditions govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
            </p>
          </div>

          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <Scale size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">Use of Services</h2>
            </div>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Account Registration</h3>
            <p className="text-muted-foreground mb-4">
              To access certain features of our services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">User Responsibilities</h3>
            <p className="text-muted-foreground mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Ensuring that your use of our services complies with all applicable laws and regulations</li>
              <li>Promptly notifying us of any unauthorized use of your account</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">Acceptable Use</h3>
            <p className="text-muted-foreground mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use our services for any illegal purpose or in violation of any laws</li>
              <li>Infringe upon or violate the intellectual property rights or any other rights of anyone else</li>
              <li>Transmit any viruses, malware, or other harmful code</li>
              <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running our service</li>
              <li>Impersonate another person or entity</li>
              <li>Collect or track the personal information of others</li>
            </ul>
          </div>

          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <FileText size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">Products and Services</h2>
            </div>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Courses and Digital Products</h3>
            <p className="text-muted-foreground mb-4">
              All courses and digital products purchased from us are subject to the following conditions:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Digital content is for personal, non-commercial use only</li>
              <li>You may not reproduce, distribute, modify, or create derivative works from our content</li>
              <li>Access to course content is granted for the duration specified at the time of purchase</li>
              <li>We reserve the right to update or modify course content to ensure accuracy and relevance</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">Consulting Services</h3>
            <p className="text-muted-foreground mb-4">
              For consulting services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All consulting appointments must be scheduled in advance</li>
              <li>Cancellation policy: 48-hour notice required for full refund</li>
              <li>We reserve the right to reschedule sessions if necessary</li>
              <li>Results from consulting services may vary and are not guaranteed</li>
            </ul>
          </div>
          
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold">Disclaimer</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              YOUR USE OF OUR SERVICES IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.
            </p>
            <p className="text-muted-foreground mb-4">
              INFRIDET SOLUTIONS PRIVATE LIMITED MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE OPERATION OR AVAILABILITY OF THE SERVICE, OR THAT YOUR USE WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>
            <p className="text-muted-foreground mb-4">
              We do not guarantee that the results obtained from using our products or services will be effective in all situations or meet your expectations. Success depends on various factors, including but not limited to individual effort, market conditions, and appropriate implementation of strategies.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Payment and Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>All prices are in Indian Rupees (INR) unless otherwise stated</li>
                <li>Payment is required in full before access to products/services is granted</li>
                <li>We use secure third-party payment processors (Cashfree, Razorpay, etc.)</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Refund policy:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Digital products: 14-day satisfaction guarantee</li>
                <li>Consulting services: Full refund with 48-hour cancellation notice</li>
                <li>No refunds for services already delivered or access to content already granted</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of INFRIDET SOLUTIONS PRIVATE LIMITED and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
              </p>
              <p className="text-muted-foreground">
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of INFRIDET SOLUTIONS PRIVATE LIMITED.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-medium">INFRIDET SOLUTIONS PRIVATE LIMITED</p>
                <p className="text-muted-foreground">Mahagun Mantra 1, Sector 10, Noida, UP</p>
                <p className="text-muted-foreground">Email: contact@digitalnexus.com</p>
                <p className="text-muted-foreground">Phone: +91 8853354829</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
