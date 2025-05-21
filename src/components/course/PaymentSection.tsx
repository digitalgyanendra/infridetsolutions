
import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, CreditCard, Lock } from "lucide-react";

interface PaymentSectionProps {
  price: string;
  originalPrice: string;
  discount: string;
  paymentLink: string;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
  price,
  originalPrice,
  discount,
  paymentLink,
}) => {
  return (
    <div className="glass-card p-8 border-2 border-orange-500/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-4">YouTube Growth Accelerator</h3>
        <div className="flex items-baseline justify-center mb-1">
          <span className="text-4xl font-bold">₹{price}</span>
          <span className="text-xl text-muted-foreground line-through ml-2">₹{originalPrice}</span>
        </div>
        <p className="text-orange-400">{discount} Discount - Limited Time</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-start">
          <div className="bg-orange-500/20 p-2 rounded-full mr-3 flex-shrink-0">
            <Shield size={16} className="text-orange-500" />
          </div>
          <p>Complete 8-module course (50+ hours of content)</p>
        </div>
        <div className="flex items-start">
          <div className="bg-orange-500/20 p-2 rounded-full mr-3 flex-shrink-0">
            <Shield size={16} className="text-orange-500" />
          </div>
          <p>Lifetime access to all course materials</p>
        </div>
        <div className="flex items-start">
          <div className="bg-orange-500/20 p-2 rounded-full mr-3 flex-shrink-0">
            <Shield size={16} className="text-orange-500" />
          </div>
          <p>Private community access</p>
        </div>
        <div className="flex items-start">
          <div className="bg-orange-500/20 p-2 rounded-full mr-3 flex-shrink-0">
            <Shield size={16} className="text-orange-500" />
          </div>
          <p>Downloadable resources & templates</p>
        </div>
        <div className="flex items-start">
          <div className="bg-orange-500/20 p-2 rounded-full mr-3 flex-shrink-0">
            <Shield size={16} className="text-orange-500" />
          </div>
          <p>Access to future updates</p>
        </div>
        <div className="flex items-start">
          <div className="bg-orange-500/20 p-2 rounded-full mr-3 flex-shrink-0">
            <Shield size={16} className="text-orange-500" />
          </div>
          <p>30-day money-back guarantee</p>
        </div>
      </div>

      <a href={paymentLink} target="_blank" rel="noopener noreferrer" className="block">
        <Button 
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-6 text-lg"
        >
          Enroll Now - ₹{price}
        </Button>
      </a>
      
      <div className="mt-6 space-y-4">
        <div className="text-center text-muted-foreground text-sm flex items-center justify-center">
          <Lock size={14} className="mr-1" />
          Secure Payment via Cashfree
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
        
        <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Lock size={14} className="mr-1" />
            <span>256-bit SSL Secured</span>
          </div>
          <div className="flex items-center">
            <CreditCard size={14} className="mr-1" />
            <span>100% Safe & Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
