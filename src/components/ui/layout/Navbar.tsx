import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Users } from "lucide-react";

// Import both logo images (Company logo + Secondary logo)
const primaryLogo = "/lovable-uploads/c456053e-22bc-4131-9ce5-44390b74a38a.png";
const secondaryLogo = "/lovable-uploads/caf97257-1ebc-4af4-8824-692b84108c22.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container px-4 md:px-6 mx-auto flex h-16 items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          {/* Secondary logo added to the left */}
          <img src={secondaryLogo} alt="Secondary Logo" className="h-7 w-7 object-contain mr-2" />
          
          <Link to="/" className="flex items-center gap-2">
            <img src={primaryLogo} alt="Infridet Solutions Logo" className="h-8 w-8 object-contain" />
            <span className="font-bold text-2xl gradient-text">
              INFRIDET SOLUTIONS
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/services" className="text-sm hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/portfolio" className="text-sm hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link to="/blog" className="text-sm hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/courses" className="text-sm hover:text-primary transition-colors">
            Courses
          </Link>
          <Link to="/contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm" className="border-orange-500/50 hover:bg-orange-500/10 text-white">
              <User size={16} className="mr-2" />
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <Users size={16} className="mr-2" />
              Register
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-black/90 border-b border-border/40 backdrop-blur-md">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/blog" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/courses" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/contact" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-border/40">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-orange-500/50 hover:bg-orange-500/10">
                  <User size={16} className="mr-2" />
                  Log In
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  <Users size={16} className="mr-2" />
                  Register
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
