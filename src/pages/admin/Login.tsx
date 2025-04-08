
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { adminDirectAccess, isAdmin, isLoading, user } = useAuth();
  const [email, setEmail] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  // Redirect to admin dashboard if already logged in as admin
  useEffect(() => {
    if (user && isAdmin) {
      navigate("/admin");
    }
  }, [user, isAdmin, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginInProgress(true);
    
    try {
      // Use direct admin access without magic links
      const success = await adminDirectAccess(email);
      
      if (success) {
        // If successful, navigate to the admin dashboard
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
            Enter your admin email to access the dashboard
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
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Admin Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 w-full"
                  placeholder="admin@example.com"
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Enter your admin email to get direct access to the dashboard
              </p>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              disabled={isLoading || loginInProgress || !email}
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
