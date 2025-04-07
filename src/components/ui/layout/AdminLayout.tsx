
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAdmin, signOut } = useAuth();
  
  // Redirect non-admin users to login
  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
    } else if (!isAdmin) {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges.",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [user, isAdmin, navigate, toast]);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const handleLogout = () => {
    signOut();
  };
  
  const navigationItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Courses", path: "/admin/courses", icon: BookOpen },
    { name: "Blogs", path: "/admin/blogs", icon: FileText },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ];

  // If user is not authenticated or not an admin, don't render the layout
  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Navigation Bar */}
      <div className="bg-black border-b border-border/40 h-16 flex items-center px-4 justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="mr-4 block md:hidden text-white hover:text-primary"
          >
            <Menu size={24} />
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-4 hidden md:block text-white hover:text-primary"
          >
            <Menu size={24} />
          </button>
          <Link to="/admin" className="font-bold text-xl gradient-text">
            INFRIDET SOLUTIONS ADMIN
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="dropdown relative">
            <button className="flex items-center text-white hover:text-primary">
              <span className="mr-2">{user.email}</span>
              <ChevronDown size={16} />
            </button>
            <div className="dropdown-menu hidden absolute right-0 mt-2 w-48 bg-black border border-border rounded-md shadow-lg z-50">
              <Link to="/admin/profile" className="block px-4 py-2 text-white hover:bg-muted">
                Profile
              </Link>
              <button 
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-white hover:bg-muted"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for Mobile */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileSidebarOpen(false)}>
            <div 
              className="absolute left-0 top-0 bottom-0 w-64 bg-black border-r border-border/40 p-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-white">Admin Menu</h3>
                <button onClick={() => setIsMobileSidebarOpen(false)}>
                  <X size={20} className="text-white" />
                </button>
              </div>
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-md ${
                      isActive(item.path)
                        ? "bg-primary/20 text-primary"
                        : "text-white hover:bg-muted/10"
                    }`}
                    onClick={() => setIsMobileSidebarOpen(false)}
                  >
                    <item.icon size={18} className="mr-3" />
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="absolute bottom-4 left-4 right-4">
                <Button
                  variant="outline"
                  className="w-full border-destructive/40 hover:bg-destructive/10 text-destructive"
                  onClick={handleLogout}
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Sidebar for Desktop */}
        <div
          className={`hidden md:block border-r border-border/40 bg-black ${
            isSidebarOpen ? "w-64" : "w-20"
          } transition-all duration-300 flex-shrink-0`}
        >
          <div className="p-4">
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-md ${
                    isActive(item.path)
                      ? "bg-primary/20 text-primary"
                      : "text-white hover:bg-muted/10"
                  }`}
                >
                  <item.icon size={18} className={isSidebarOpen ? "mr-3" : "mx-auto"} />
                  {isSidebarOpen && item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className={`absolute bottom-4 ${isSidebarOpen ? "left-4 right-4" : "left-2 right-2"}`}>
            <Button
              variant="outline"
              className={`${isSidebarOpen ? "w-full" : "p-2 w-full flex justify-center"} border-destructive/40 hover:bg-destructive/10 text-destructive`}
              onClick={handleLogout}
            >
              <LogOut size={18} className={isSidebarOpen ? "mr-2" : ""} />
              {isSidebarOpen && "Logout"}
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
