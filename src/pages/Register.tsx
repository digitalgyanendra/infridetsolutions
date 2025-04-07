
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  User, 
  UserCog, 
  Phone, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  FileText 
} from "lucide-react";

const Register = () => {
  const { toast } = useToast();
  const [userType, setUserType] = useState<"user" | "consultant">("user");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    // Common fields
    name: "",
    email: "",
    phone: "",
    password: "",
    
    // User specific fields
    serviceInterested: "",
    budget: "",
    
    // Consultant specific fields
    category: "",
    bio: "",
    experience: "",
    portfolio: "",
    city: "",
    state: "",
    rates: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserTypeChange = (type: "user" | "consultant") => {
    setUserType(type);
    setStep(1); // Reset to first step when changing user type
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Registration Successful",
        description: `Your ${userType} account has been created successfully.`,
      });
      
      // Redirect would happen here
    }, 1500);
  };

  // Render different form steps based on user type and current step
  const renderForm = () => {
    if (userType === "user") {
      if (step === 1) {
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Password must be at least 8 characters long
              </p>
            </div>
            
            <Button
              type="button"
              onClick={nextStep}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
            >
              Next Step
            </Button>
          </div>
        );
      } else {
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="serviceInterested" className="block text-sm font-medium mb-2">
                Service Interested In
              </label>
              <select
                id="serviceInterested"
                name="serviceInterested"
                required
                value={formData.serviceInterested}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              >
                <option value="" disabled>Select a service</option>
                <option value="youtube">YouTube Consulting</option>
                <option value="seo">SEO Optimization</option>
                <option value="brand">Brand Growth</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget Range
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                </div>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                >
                  <option value="" disabled>Select budget range</option>
                  <option value="0-1000">₹0 - ₹1,000</option>
                  <option value="1000-5000">₹1,000 - ₹5,000</option>
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000+">₹10,000+</option>
                </select>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="w-1/2 border-orange-500/50 hover:bg-orange-500/10"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </div>
          </div>
        );
      }
    } else { // Consultant registration
      if (step === 1) {
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Password must be at least 8 characters long
              </p>
            </div>
            
            <Button
              type="button"
              onClick={nextStep}
              className="w-full bg-gradient-to-r from-deepBlue-500 to-deepBlue-600 hover:from-deepBlue-600 hover:to-deepBlue-700"
            >
              Next Step
            </Button>
          </div>
        );
      } else if (step === 2) {
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-2">
                Expertise Category
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
              >
                <option value="" disabled>Select your expertise</option>
                <option value="youtube">YouTube Specialist</option>
                <option value="seo">SEO Expert</option>
                <option value="brand">Brand Strategist</option>
                <option value="content">Content Creator</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium mb-2">
                Years of Experience
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                </div>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
                >
                  <option value="" disabled>Select years of experience</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="bio" className="block text-sm font-medium mb-2">
                Professional Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                required
                value={formData.bio}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
                placeholder="Tell us about your professional background and expertise..."
              />
            </div>
            
            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="w-1/2 border-deepBlue-500/50 hover:bg-deepBlue-500/10"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                className="w-1/2 bg-gradient-to-r from-deepBlue-500 to-deepBlue-600 hover:from-deepBlue-600 hover:to-deepBlue-700"
              >
                Next Step
              </Button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                Portfolio URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
                  placeholder="https://your-portfolio.com"
                />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Optional: Link to your personal website or portfolio
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-2">
                  City
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
                    placeholder="Noida"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium mb-2">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-border rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
                  placeholder="UP"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="rates" className="block text-sm font-medium mb-2">
                Hourly Rate (₹)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="rates"
                  name="rates"
                  type="number"
                  required
                  value={formData.rates}
                  onChange={handleChange}
                  className="pl-10 w-full bg-background/50 border border-border rounded-md py-2.5 focus:outline-none focus:ring-2 focus:ring-deepBlue-500/50"
                  placeholder="1000"
                />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Enter your standard hourly consultation rate in Rupees
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="w-1/2 border-deepBlue-500/50 hover:bg-deepBlue-500/10"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-gradient-to-r from-deepBlue-500 to-deepBlue-600 hover:from-deepBlue-600 hover:to-deepBlue-700"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background with network pattern */}
      <div className="absolute inset-0 network-bg opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background z-0"></div>
      
      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-10">
          <Link to="/" className="inline-block">
            <span className="font-bold text-3xl gradient-text">
              DIGITAL NEXUS
            </span>
          </Link>
          <motion.h2 
            className="mt-6 text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Create Your Account
          </motion.h2>
          <motion.p 
            className="mt-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join our platform to accelerate your digital growth journey
          </motion.p>
        </div>
        
        <motion.div 
          className="glass-card p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* User Type Selection */}
          <div className="flex justify-center mb-6 gap-4">
            <button
              type="button"
              className={`flex flex-col items-center justify-center py-3 px-6 rounded-lg transition-all ${
                userType === "user"
                  ? "bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30"
                  : "bg-background/40 border border-border hover:bg-background/60"
              }`}
              onClick={() => handleUserTypeChange("user")}
            >
              <User className={`h-6 w-6 mb-2 ${userType === "user" ? "text-orange-500" : "text-muted-foreground"}`} />
              <span className={userType === "user" ? "text-white" : "text-muted-foreground"}>Client</span>
            </button>
            <button
              type="button"
              className={`flex flex-col items-center justify-center py-3 px-6 rounded-lg transition-all ${
                userType === "consultant"
                  ? "bg-gradient-to-r from-deepBlue-500/20 to-deepBlue-600/20 border border-deepBlue-500/30"
                  : "bg-background/40 border border-border hover:bg-background/60"
              }`}
              onClick={() => handleUserTypeChange("consultant")}
            >
              <UserCog className={`h-6 w-6 mb-2 ${userType === "consultant" ? "text-deepBlue-500" : "text-muted-foreground"}`} />
              <span className={userType === "consultant" ? "text-white" : "text-muted-foreground"}>Consultant</span>
            </button>
          </div>
          
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {userType === "user" ? (
                <>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 1 ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white" : "bg-gray-700 text-gray-400"
                    }`}>
                      1
                    </div>
                    <div className={`ml-2 text-sm ${step >= 1 ? "text-white" : "text-muted-foreground"}`}>Basic Info</div>
                  </div>
                  <div className={`h-0.5 w-16 ${step > 1 ? "bg-orange-500" : "bg-gray-700"}`}></div>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 2 ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white" : "bg-gray-700 text-gray-400"
                    }`}>
                      2
                    </div>
                    <div className={`ml-2 text-sm ${step >= 2 ? "text-white" : "text-muted-foreground"}`}>Preferences</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 1 ? "bg-gradient-to-r from-deepBlue-500 to-deepBlue-600 text-white" : "bg-gray-700 text-gray-400"
                    }`}>
                      1
                    </div>
                    <div className={`ml-2 text-sm ${step >= 1 ? "text-white" : "text-muted-foreground"}`}>Basic</div>
                  </div>
                  <div className={`h-0.5 w-10 ${step > 1 ? "bg-deepBlue-500" : "bg-gray-700"}`}></div>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 2 ? "bg-gradient-to-r from-deepBlue-500 to-deepBlue-600 text-white" : "bg-gray-700 text-gray-400"
                    }`}>
                      2
                    </div>
                    <div className={`ml-2 text-sm ${step >= 2 ? "text-white" : "text-muted-foreground"}`}>Expertise</div>
                  </div>
                  <div className={`h-0.5 w-10 ${step > 2 ? "bg-deepBlue-500" : "bg-gray-700"}`}></div>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 3 ? "bg-gradient-to-r from-deepBlue-500 to-deepBlue-600 text-white" : "bg-gray-700 text-gray-400"
                    }`}>
                      3
                    </div>
                    <div className={`ml-2 text-sm ${step >= 3 ? "text-white" : "text-muted-foreground"}`}>Details</div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {renderForm()}
          </form>
        </motion.div>
        
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-orange-500 hover:text-orange-400">
              Sign In
            </Link>
          </p>
        </motion.div>
        
        <motion.p 
          className="mt-8 text-center text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          By registering, you agree to our{" "}
          <Link to="/policy" className="underline hover:text-white">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/policy" className="underline hover:text-white">
            Privacy Policy
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default Register;
