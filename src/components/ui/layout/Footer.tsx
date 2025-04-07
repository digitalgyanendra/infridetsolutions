
import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border/40">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">DIGITAL NEXUS</h3>
            <p className="text-muted-foreground">
              Empowering digital creators and businesses with expert consultation and growth strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  YouTube Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Brand Growth
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Content Strategy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Mahagun Mantra 1, Sector 10, Noida, UP
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-orange-500 shrink-0" />
                <span className="text-muted-foreground">+91 8853354829</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-orange-500 shrink-0" />
                <span className="text-muted-foreground">contact@digitalnexus.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Infridet Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/policy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
