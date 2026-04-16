
import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Linkedin, Youtube, Instagram, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80">
      {/* CTA Strip */}
      <div className="bg-primary">
        <div className="container px-4 md:px-6 py-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-primary-foreground">Ready to Grow Your Business?</h3>
            <p className="text-primary-foreground/80 text-sm">Get a free consultation with our experts today.</p>
          </div>
          <div className="flex gap-3">
            <a href="https://wa.me/919517459072" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white">
                <MessageCircle size={16} className="mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-14 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">INFRIDET SOLUTIONS</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Empowering digital creators and businesses with expert YouTube growth strategies, SEO, AI automation, and product growth solutions.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://www.linkedin.com/company/infridet-solutions-private-limited" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary/80 flex items-center justify-center transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://www.youtube.com/@Core-Gyan" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center transition-colors">
                <Youtube size={16} />
              </a>
              <a href="https://www.instagram.com/thegyanendradwivedi/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/about-gyan", label: "About Gyan Dwivedi" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/blog", label: "Blog" },
                { to: "/courses", label: "Courses" },
                { to: "/contact", label: "Contact" },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/policy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms & Conditions" },
                { to: "/refund-policy", label: "Refund Policy" },
                { to: "/disclaimer", label: "Disclaimer" },
                { to: "/faq", label: "FAQ" },
                { to: "/sitemap", label: "Sitemap" },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">Mahagun Mantra 1, Sector 10, Noida, UP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="https://wa.me/919517459072" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91 9517459072
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:Marketing@infridetsolutions.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  Marketing@infridetsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} INFRIDET SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { to: "/policy", label: "Privacy" },
              { to: "/terms", label: "Terms" },
              { to: "/refund-policy", label: "Refund Policy" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
