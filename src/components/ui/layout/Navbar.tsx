
import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ArrowRight } from "lucide-react";

const secondaryLogo = "/lovable-uploads/caf97257-1ebc-4af4-8824-692b84108c22.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleNavigation = useCallback(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    if (isMenuOpen) document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur-lg">
      <div className="container px-4 md:px-6 mx-auto flex h-16 items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <img
            src={secondaryLogo}
            alt="Infridet Solutions Logo"
            className="h-8 w-8 object-contain"
            fetchPriority="high"
            width="32"
            height="32"
            decoding="async"
          />
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight gradient-text">
              INFRIDET SOLUTIONS
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm px-3 py-2 rounded-md font-medium transition-colors ${
                isActive(link.to)
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <User size={16} className="mr-1.5" />
              Log In
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
              <ArrowRight size={14} className="ml-1.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden py-3 px-4 bg-white border-b border-border">
          <nav className="flex flex-col space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm px-4 py-2.5 rounded-md font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={handleNavigation}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-3 mt-2 border-t border-border">
              <Link to="/login" onClick={handleNavigation}>
                <Button variant="outline" className="w-full">
                  <User size={16} className="mr-2" />
                  Log In
                </Button>
              </Link>
              <Link to="/contact" onClick={handleNavigation}>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Get Started
                  <ArrowRight size={14} className="ml-2" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default React.memo(Navbar);
