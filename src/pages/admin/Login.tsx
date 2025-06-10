
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { adminDirectAccess, isAdmin, isLoading, user } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [loginInProgress, setLoginInProgress] = useState(false);

  // Redirect to admin dashboard if already logged in as admin
  useEffect(() => {
    if (user && isAdmin) {
      navigate("/admin");
    }
  }, [user, isAdmin, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please enter both username and password.",
        variant: "destructive",
      });
      return;
    }
    
    setLoginInProgress(true);
    
    try {
      const success = await adminDirectAccess(formData.username, formData.password);
      
      if (success) {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoginInProgress(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background with network pattern */}
      <div className="absolute inset-0 network-bg opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background z-0"></div>
      
      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-10">
          <span className="font-bold text-3xl gradient-text">
            INFRIDET SOLUTIONS
          </span>
          <motion.h2 
            className="mt-6 text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Admin Login
          </motion.h2>
          <motion.p 
            className="mt-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Enter your admin credentials to access the dashboard
          </motion.p>
        </div>
        
        <motion.div 
          className="glass-card p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full"
                  placeholder="Enter your username"
                  autoComplete="username"
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
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              disabled={isLoading || loginInProgress || !formData.username || !formData.password}
            >
              {loginInProgress ? "Signing in..." : "Access Admin Dashboard"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
