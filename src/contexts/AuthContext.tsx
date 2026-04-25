import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { API_CONFIG } from "@/config/api";

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

// Dev-only mock credentials. Real auth always runs against the PHP backend
// in production (when VITE_USE_MOCK_AUTH is not enabled).
const DEMO_USERNAME = "admin@infridet.com";
const DEMO_PASSWORD = "Admin@2026";

// Use the mock auth only when explicitly enabled (preview / local dev).
// In production builds this is always false unless the env flag is set.
const isMockAuthEnabled = (): boolean => {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  // Auto-enable on Lovable preview & localhost so demo always works.
  const onPreview =
    host.includes("lovable.app") ||
    host.includes("lovableproject.com") ||
    host === "localhost" ||
    host === "127.0.0.1";
  return onPreview;
};

const mockToken = () => `mock.${btoa(JSON.stringify({ uid: 1, role: "admin", exp: Date.now() + 86400000 }))}.demo`;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Restore session on load. SECURITY: always verify server-side; fail closed.
  useEffect(() => {
    const storedUser = localStorage.getItem("admin_user");
    const storedToken = localStorage.getItem("admin_token");

    if (!storedUser || !storedToken) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    const clearSession = () => {
      localStorage.removeItem("admin_user");
      localStorage.removeItem("admin_token");
      if (!cancelled) {
        setUser(null);
        setIsAdmin(false);
      }
    };

    const restoreFromStorage = () => {
      try {
        const userData = JSON.parse(storedUser);
        if (!cancelled) {
          setUser(userData);
          setIsAdmin(userData?.role === "admin");
        }
      } catch {
        clearSession();
      }
    };

    // Mock mode → trust the local token (it's a demo).
    if (isMockAuthEnabled() && storedToken.startsWith("mock.")) {
      restoreFromStorage();
      setIsLoading(false);
      return;
    }

    (async () => {
      try {
        const response = await fetch(
          `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.VERIFY_TOKEN}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        const data = await response.json().catch(() => null);

        if (!response.ok || !data?.success) {
          clearSession();
          return;
        }

        restoreFromStorage();
      } catch {
        clearSession();
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const adminDirectAccess = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    try {
      // === DEV MOCK PATH ===
      if (isMockAuthEnabled()) {
        const ok =
          (username === DEMO_USERNAME || username === "admin") &&
          password === DEMO_PASSWORD;

        if (!ok) {
          toast({
            title: "Access Denied",
            description: `Demo credentials only. Use ${DEMO_USERNAME} / ${DEMO_PASSWORD}`,
            variant: "destructive",
          });
          return false;
        }

        const userData: User = {
          id: "1",
          username: "admin",
          email: DEMO_USERNAME,
          role: "admin",
        };

        setUser(userData);
        setIsAdmin(true);
        localStorage.setItem("admin_user", JSON.stringify(userData));
        localStorage.setItem("admin_token", mockToken());

        toast({
          title: "Demo Admin Access",
          description: `Welcome back, ${userData.username}! (preview/dev mode)`,
        });
        return true;
      }

      // === REAL PHP BACKEND PATH ===
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGIN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success || !data.user) {
        toast({
          title: "Access Denied",
          description: data?.message || "Invalid username or password.",
          variant: "destructive",
        });
        return false;
      }

      const userData: User = {
        id: String(data.user.id),
        username: data.user.username,
        email: data.user.email,
        role: data.user.role,
      };

      setUser(userData);
      setIsAdmin(userData.role === "admin");
      localStorage.setItem("admin_user", JSON.stringify(userData));
      if (data.token) localStorage.setItem("admin_token", data.token);

      toast({
        title: "Admin Access Granted",
        description: `Welcome back, ${userData.username}!`,
      });
      return true;
    } catch (error: any) {
      const msg =
        error?.message?.includes("Failed to fetch")
          ? "Cannot reach the server. Check your internet or backend deployment."
          : "Unexpected error. Please try again.";
      toast({
        title: "Login Failed",
        description: msg,
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (username: string, password: string) => {
    const success = await adminDirectAccess(username, password);
    if (success) navigate("/admin");
  };

  const signOut = async () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_token");
    toast({ title: "Logged Out", description: "You have been logged out successfully." });
    navigate("/admin/login");
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, isLoading, signIn, signOut, adminDirectAccess }}>
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

// Exported for the login page to render demo creds in dev mode only.
export const DEMO_CREDENTIALS = {
  enabled: isMockAuthEnabled,
  username: DEMO_USERNAME,
  password: DEMO_PASSWORD,
};
