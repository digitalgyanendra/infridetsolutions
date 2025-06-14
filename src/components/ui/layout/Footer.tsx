
import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200/40">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">INFRIDET SOLUTIONS PRIVATE LIMITED</h3>
            <p className="text-gray-600">
              Empowering digital creators and businesses with expert consultation and growth strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/infridet-solutions-private-limited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about-gyan" className="text-gray-600 hover:text-primary transition-colors">
                  About Gyan Dwivedi
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/policy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-600 hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-600 hover:text-primary transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Mahagun Mantra 1, Sector 10, Noida, UP
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-orange-500 shrink-0" />
                <a 
                  href="https://wa.me/918853354829" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  +91 8853354829
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-orange-500 shrink-0" />
                <span className="text-gray-600">Marketing@infridetsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} INFRIDET SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/policy" className="text-gray-600 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-primary text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="text-gray-600 hover:text-primary text-sm transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
