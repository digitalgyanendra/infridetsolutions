
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./components/blog/BlogPost";
import Courses from "./pages/Courses";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Disclaimer from "./pages/Disclaimer";

// Course Pages
import YoutubeGrowth from "./pages/courses/YoutubeGrowth";

// Admin Routes
import AdminDashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/Login";
import AdminCourses from "./pages/admin/Courses";
import AdminBlogs from "./pages/admin/Blogs";
import AdminUsers from "./pages/admin/Users";
import AdminSettings from "./pages/admin/Settings";

// Initialize QueryClient
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              
              {/* Course Detail Routes */}
              <Route path="/courses/youtube-growth" element={<YoutubeGrowth />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/courses" element={<AdminCourses />} />
              <Route path="/admin/blogs" element={<AdminBlogs />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
              
              {/* Additional routes would be added here */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
