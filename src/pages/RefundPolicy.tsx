
import React from "react";
import Layout from "@/components/ui/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Shield, Clock, FileText, AlertCircle, CheckCircle, CreditCard } from "lucide-react";

const RefundPolicy = () => {
  return (
    <Layout>
      <SEOHead 
        title="Refund Policy" 
        description="Infridet Solutions refund policy and terms. Learn about our refund process, conditions, and how we handle service cancellations."
        keywords={["refund policy", "cancellation", "terms", "Infridet Solutions", "service terms"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-600">
              At Infridet Solutions, we are committed to delivering high-quality digital services with clarity and professionalism.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileText className="w-6 h-6 text-orange-500 mr-3" />
              Refund Policy Highlights
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">No Refunds After Project Initiation</h3>
                  <p className="text-red-700">
                    Once the project or service has been initiated, no refunds will be issued. This ensures we can maintain our commitment to delivering quality work while protecting our investment in your project.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Full Refund for Our Delays</h3>
                  <p className="text-green-700">
                    If the work has not yet started and the delay is on our side, we will initiate a full refund. We value your time and understand the importance of meeting our commitments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <Clock className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">7-Day Request Window</h3>
                  <p className="text-blue-700">
                    All refund requests must be made in writing within 7 days of the transaction. Please contact us through our official channels with your request and transaction details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <CreditCard className="w-6 h-6 text-orange-500 mr-3" />
              Refund Processing and Credit Timeframes
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">Refund Initiation Timeframe</h3>
                  <p className="text-orange-700">
                    Once your refund is approved, we will initiate the refund within 24–48 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <CreditCard className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Refund Credit Timeframe</h3>
                  <p className="text-blue-700">
                    After initiation, the refunded amount will be credited to your original payment method within 3–5 business days, depending on your bank or payment provider.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-8 border border-orange-200">
            <h3 className="text-xl font-bold text-orange-800 mb-4">Agreement and Acceptance</h3>
            <p className="text-orange-700 mb-4">
              By purchasing any service on our platform, you agree to this refund policy. We recommend reviewing these terms carefully before making any purchase.
            </p>
            <p className="text-orange-700">
              For any questions about our refund policy or to submit a refund request, please contact us at{" "}
              <a href="mailto:Marketing@infridetsolutions.com" className="font-semibold underline hover:text-orange-600">
                Marketing@infridetsolutions.com
              </a>
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPolicy;
