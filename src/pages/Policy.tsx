
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { Shield, Lock, FileText } from "lucide-react";

const Policy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Last Updated: April 7, 2025
            </motion.p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <Shield size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
            </div>
            <p className="text-gray-700 mb-4">
              INFRIDET SOLUTIONS PRIVATE LIMITED ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or make purchases.
            </p>
            <p className="text-gray-700">
              By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>

          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <FileText size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
            </div>
            
            <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personally identifiable information, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Name, email address, phone number, and contact information</li>
              <li>Billing information and payment details</li>
              <li>User account credentials</li>
              <li>Professional information if you register as a consultant</li>
              <li>Information provided in communications with us</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">Non-Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may also collect non-personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address and device information</li>
              <li>Referring website URLs</li>
              <li>Time spent on pages and interaction data</li>
            </ul>
          </div>

          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <Lock size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending administrative information, updates, and marketing communications</li>
              <li>Responding to inquiries, comments, and customer service requests</li>
              <li>Personalizing user experience and content</li>
              <li>Monitoring usage patterns and website analytics</li>
              <li>Protecting our services and users from fraudulent activities</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Disclosure of Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Service providers who perform services on our behalf (payment processors, hosting providers, etc.)</li>
                <li>Professional advisors, such as lawyers, auditors, and insurers</li>
                <li>Government bodies when required by law</li>
                <li>In connection with corporate transactions (merger, acquisition, or sale of assets)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Security of Your Information</h2>
              <p className="text-gray-700">
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Rights Under Indian Law</h2>
              <p className="text-gray-700 mb-4">
                Under the Information Technology Act, 2000, and its associated rules, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal information we hold</li>
                <li>Correct inaccuracies in your information</li>
                <li>Withdraw consent for ongoing processing</li>
                <li>Request deletion of your personal data, subject to legal requirements</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-medium text-gray-800">INFRIDET SOLUTIONS PRIVATE LIMITED</p>
                <p className="text-gray-700">Mahagun Mantra 1, Sector 10, Noida, UP</p>
                <p className="text-gray-700">Email: Marketing@infridetsolutions.com</p>
                <p className="text-gray-700">Phone: +91 8853354829</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policy;
