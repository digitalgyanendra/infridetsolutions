import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Linkedin, Youtube, Instagram, ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* CTA mega-block */}
      <div className="border-b border-background/15">
        <div className="container px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="mono text-[11px] uppercase tracking-[0.2em] text-background/50">
                § One last thing
              </span>
              <h3 className="display-serif text-4xl md:text-6xl mt-4 leading-[0.95] tracking-tight">
                Your channel won't grow itself.
                <br />
                <em className="italic font-light text-coral">Talk to Gyan.</em>
              </h3>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <button className="btn-coral w-full h-14 px-6 text-base">
                  <MessageCircle className="h-5 w-5" />
                  Free Strategy Call
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </a>
              <Link to="/contact">
                <button className="w-full h-14 px-6 rounded-full border border-background/30 text-background hover:bg-background hover:text-foreground transition-all font-semibold text-base">
                  Or send a message →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="display-serif text-3xl tracking-tight mb-4">Infridet Solutions</div>
            <p className="text-background/60 leading-relaxed max-w-md">
              A creator-first growth studio. We engineer YouTube empires from
              strategy to monetization — with receipts to prove it.
            </p>
            <div className="flex gap-2 mt-6">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/infridet-solutions-private-limited" },
                { Icon: Youtube, href: "https://www.youtube.com/@Core-Gyan" },
                { Icon: Instagram, href: "https://www.instagram.com/thegyanendradwivedi/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-background/20 hover:border-coral hover:bg-coral hover:text-foreground flex items-center justify-center transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="mono text-[11px] uppercase tracking-[0.2em] text-background/50 mb-5">
              Navigate
            </div>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/about-gyan", label: "About Gyan" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Work" },
                { to: "/courses", label: "Courses" },
                { to: "/blog", label: "Journal" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-background/70 hover:text-coral transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="mono text-[11px] uppercase tracking-[0.2em] text-background/50 mb-5">
              Reach us
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-coral shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Mahagun Mantra 1, Sector 10, Noida, UP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-coral shrink-0" />
                <a href="tel:+919517459072" className="text-sm text-background/70 hover:text-background">
                  +91 95174 59072
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-coral shrink-0" />
                <a href="mailto:Marketing@infridetsolutions.com" className="text-sm text-background/70 hover:text-background">
                  Marketing@infridetsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/15 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-background/40">
            © {new Date().getFullYear()} Infridet Solutions Pvt. Ltd.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { to: "/policy", label: "Privacy" },
              { to: "/terms", label: "Terms" },
              { to: "/refund-policy", label: "Refund" },
              { to: "/disclaimer", label: "Disclaimer" },
              { to: "/sitemap", label: "Sitemap" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="mono text-[11px] uppercase tracking-[0.18em] text-background/40 hover:text-background">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
