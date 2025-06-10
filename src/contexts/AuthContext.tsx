
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface User {
  id: string;
  username: string;
  email?: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  isLoading: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  adminDirectAccess: (username: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// API base URL - update this to your domain
const API_BASE_URL = "https://infridetsolutions.com/api";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing session on load
  useEffect(() => {
    const storedUser = localStorage.getItem('admin_user');
    const storedToken = localStorage.getItem('admin_token');
    
    if (storedUser && storedToken) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsAdmin(true);
        // Optionally verify token with backend
        verifyToken(storedToken);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem('admin_user');
        localStorage.removeItem('admin_token');
      }
    }
    
    setIsLoading(false);
  }, []);

  // Verify token with backend
  const verifyToken = async (token: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/verify-token.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (!data.success) {
        // Token is invalid, clear session
        signOut();
      }
    } catch (error) {
      console.error("Token verification failed:", error);
      signOut();
    }
  };

  // Direct admin access with username and password
  const adminDirectAccess = async (username: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/login.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      
      if (data.success && data.user) {
        const userData = {
          id: data.user.id.toString(),
          username: data.user.username,
          email: data.user.email,
          role: data.user.role
        };
        
        setUser(userData);
        setIsAdmin(true);
        
        // Store user data and token in localStorage
        localStorage.setItem('admin_user', JSON.stringify(userData));
        if (data.token) {
          localStorage.setItem('admin_token', data.token);
        }
        
        toast({
          title: "Admin Access Granted",
          description: `Welcome back, ${userData.username}!`,
        });
        
        return true;
      } else {
        toast({
          title: "Access Denied",
          description: data.message || "Invalid username or password.",
          variant: "destructive",
        });
        return false;
      }
    } catch (error: any) {
      console.error("Admin login error:", error);
      toast({
        title: "Login Failed",
        description: "Unable to connect to server. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Regular sign in (same as adminDirectAccess for now)
  const signIn = async (username: string, password: string) => {
    const success = await adminDirectAccess(username, password);
    if (success) {
      navigate("/admin");
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setUser(null);
      setIsAdmin(false);
      
      // Clear localStorage
      localStorage.removeItem('admin_user');
      localStorage.removeItem('admin_token');
      
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully.",
      });
      
      navigate("/admin/login");
    } catch (error: any) {
      toast({
        title: "Error",
        description: "An error occurred during logout.",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAdmin, 
      isLoading, 
      signIn,
      signOut, 
      adminDirectAccess
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
