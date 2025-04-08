
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Session, User } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string, isAdminLogin?: boolean) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  checkAdminAccess: (email: string) => Promise<boolean>;
  adminSignIn: (email: string) => Promise<boolean>;
  adminDirectAccess: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Function to check if a user is an admin
  const checkAdminAccess = async (email: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.rpc('is_admin', {
        user_email: email
      });
      
      if (error) throw error;
      return !!data;
    } catch (error) {
      console.error("Error checking admin status:", error);
      return false;
    }
  };

  // Direct admin access without email verification
  const adminDirectAccess = async (email: string): Promise<boolean> => {
    try {
      // First check if the email is in admin table
      const isUserAdmin = await checkAdminAccess(email);
      
      if (!isUserAdmin) {
        toast({
          title: "Access Denied",
          description: "This email does not have admin privileges.",
          variant: "destructive",
        });
        return false;
      }
      
      // Create a temporary mock user for direct admin access
      const mockUser = {
        id: 'admin-' + Date.now(),
        email: email,
        app_metadata: { provider: 'email' },
        user_metadata: { is_admin: true }
      };
      
      const mockSession = {
        access_token: 'mock-token',
        refresh_token: 'mock-refresh-token',
        user: mockUser
      } as any;
      
      // Set user and session states
      setUser(mockUser as any);
      setSession(mockSession);
      setIsAdmin(true);
      
      toast({
        title: "Admin Access Granted",
        description: "You now have temporary admin access to the dashboard.",
      });
      
      // Return success
      return true;
    } catch (error: any) {
      console.error("Admin login error:", error);
      toast({
        title: "Login Failed",
        description: error.message || "An error occurred during login.",
        variant: "destructive",
      });
      return false;
    }
  };

  // Special function for admin login that doesn't require a password
  const adminSignIn = async (email: string): Promise<boolean> => {
    try {
      // First check if the email is in admin table
      const isUserAdmin = await checkAdminAccess(email);
      
      if (!isUserAdmin) {
        toast({
          title: "Access Denied",
          description: "This email does not have admin privileges.",
          variant: "destructive",
        });
        return false;
      }
      
      // For local development, create a session for this admin without password
      // In a real production app, you would use a more secure approach
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          shouldCreateUser: true
        }
      });
      
      if (error) {
        throw error;
      }
      
      // Set admin flag directly since we already verified admin status
      setIsAdmin(true);
      
      toast({
        title: "Admin Access Granted",
        description: "You are now logged in as admin. Check your email for the OTP link.",
      });
      
      // Return success
      return true;
    } catch (error: any) {
      console.error("Admin login error:", error);
      toast({
        title: "Login Failed",
        description: error.message || "An error occurred during login.",
        variant: "destructive",
      });
      return false;
    }
  };

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Check if user is admin
          setTimeout(async () => {
            const isUserAdmin = await checkAdminAccess(session.user.email || '');
            setIsAdmin(isUserAdmin);
          }, 0);
        } else {
          setIsAdmin(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        const isUserAdmin = await checkAdminAccess(session.user.email || '');
        setIsAdmin(isUserAdmin);
      }
      
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string, isAdminLogin = false) => {
    try {
      setIsLoading(true);
      
      // For admin login, first check if the user has admin access
      if (isAdminLogin) {
        const isUserAdmin = await checkAdminAccess(email);
        
        if (!isUserAdmin) {
          toast({
            title: "Access Denied",
            description: "You don't have admin privileges.",
            variant: "destructive",
          });
          return;
        }
      }
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // For admin login, check if the user has admin access
      if (isAdminLogin) {
        toast({
          title: "Admin Login Successful",
          description: "Welcome to the admin dashboard.",
        });
        
        navigate("/admin");
      } else {
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        
        navigate("/");
      }
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "An error occurred during login.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Registration Successful",
        description: "Your account has been created successfully.",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "An error occurred during registration.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully.",
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during logout.",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      session, 
      isAdmin, 
      isLoading, 
      signIn, 
      signUp, 
      signOut, 
      checkAdminAccess,
      adminSignIn,
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
