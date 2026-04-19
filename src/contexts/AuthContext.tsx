
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { API_CONFIG, apiCall } from "@/config/api";

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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing session on load.
  // SECURITY: Never grant admin from localStorage alone — always verify with the
  // server first, and fail closed (sign out) on any error or missing token.
  useEffect(() => {
    const storedUser = localStorage.getItem('admin_user');
    const storedToken = localStorage.getItem('admin_token');

    if (!storedUser || !storedToken) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    const clearSession = () => {
      localStorage.removeItem('admin_user');
      localStorage.removeItem('admin_token');
      if (!cancelled) {
        setUser(null);
        setIsAdmin(false);
      }
    };

    (async () => {
      try {
        const response = await fetch(
          `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.VERIFY_TOKEN}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        const data = await response.json().catch(() => null);

        if (!response.ok || !data?.success) {
          clearSession();
          return;
        }

        // Only now do we trust the stored user data.
        const userData = JSON.parse(storedUser);
        if (!cancelled) {
          setUser(userData);
          setIsAdmin(userData?.role === 'admin');
        }
      } catch (error) {
        // Fail closed on network/parse errors — do not silently keep admin access.
        clearSession();
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Direct admin access with username and password
  const adminDirectAccess = async (username: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      console.log("Attempting login to:", `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGIN}`);
      
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log("Response data:", data);
      
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
      
      let errorMessage = "Unable to connect to server. Please try again.";
      
      if (error.message.includes('Failed to fetch')) {
        errorMessage = "Network error: Unable to reach the server. Please check your internet connection.";
      } else if (error.message.includes('HTTP 404')) {
        errorMessage = "API endpoint not found. Please contact support.";
      } else if (error.message.includes('HTTP 500')) {
        errorMessage = "Server error. Please try again later.";
      }
      
      toast({
        title: "Login Failed",
        description: errorMessage,
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
