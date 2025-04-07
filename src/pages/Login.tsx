
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail, UserIcon, UserCog } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, signUp, user, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "user", // 'user' or 'consultant'
  });
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [actionInProgress, setActionInProgress] = useState(false);

  // Redirect to home if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionInProgress(true);
    
    try {
      if (mode === "login") {
        await signIn(formData.email, formData.password);
      } else {
        await signUp(formData.email, formData.password);
      }
    } finally {
      setActionInProgress(false);
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
              INFRIDET SOLUTIONS
            </span>
          </Link>
          <motion.h2 
            className="mt-6 text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </motion.h2>
          <motion.p 
            className="mt-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {mode === "login" 
              ? "Access your account to manage your digital growth journey" 
              : "Join us to start your digital growth journey"}
          </motion.p>
        </div>
        
        <motion.div 
          className="glass-card p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* User Type Selection */}
          {mode === "login" && (
            <div className="flex justify-center mb-6 gap-4">
              <button
                type="button"
                className={`flex flex-col items-center justify-center py-3 px-6 rounded-lg transition-all ${
                  formData.userType === "user"
                    ? "bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30"
                    : "bg-background/40 border border-border hover:bg-background/60"
                }`}
                onClick={() => setFormData((prev) => ({ ...prev, userType: "user" }))}
              >
                <UserIcon className={`h-6 w-6 mb-2 ${formData.userType === "user" ? "text-orange-500" : "text-muted-foreground"}`} />
                <span className={formData.userType === "user" ? "text-white" : "text-muted-foreground"}>Client</span>
              </button>
              <button
                type="button"
                className={`flex flex-col items-center justify-center py-3 px-6 rounded-lg transition-all ${
                  formData.userType === "consultant"
                    ? "bg-gradient-to-r from-deepBlue-500/20 to-deepBlue-600/20 border border-deepBlue-500/30"
                    : "bg-background/40 border border-border hover:bg-background/60"
                }`}
                onClick={() => setFormData((prev) => ({ ...prev, userType: "consultant" }))}
              >
                <UserCog className={`h-6 w-6 mb-2 ${formData.userType === "consultant" ? "text-deepBlue-500" : "text-muted-foreground"}`} />
                <span className={formData.userType === "consultant" ? "text-white" : "text-muted-foreground"}>Consultant</span>
              </button>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
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
            </div>
            
            {mode === "login" && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 bg-background/50 border border-border focus:ring-orange-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm text-orange-500 hover:text-orange-400">
                  Forgot password?
                </a>
              </div>
            )}
            
            <Button
              type="submit"
              className={`w-full ${
                formData.userType === "user" || mode === "register"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  : "bg-gradient-to-r from-deepBlue-500 to-deepBlue-600 hover:from-deepBlue-600 hover:to-deepBlue-700"
              }`}
              disabled={isLoading || actionInProgress}
            >
              {actionInProgress 
                ? (mode === "login" ? "Signing in..." : "Creating account...") 
                : (mode === "login" ? "Sign In" : "Create Account")}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {mode === "login" ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setMode(mode === "login" ? "register" : "login")}
                className="font-medium text-orange-500 hover:text-orange-400"
              >
                {mode === "login" ? "Register now" : "Sign in"}
              </button>
            </p>
          </div>
        </motion.div>
        
        <motion.p 
          className="mt-8 text-center text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          By signing in, you agree to our{" "}
          <Link to="/terms" className="underline hover:text-white">
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

export default Login;
