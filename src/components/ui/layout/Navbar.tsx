import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", n: "01" },
  { to: "/about", label: "About", n: "02" },
  { to: "/services", label: "Services", n: "03" },
  { to: "/portfolio", label: "Work", n: "04" },
  { to: "/courses", label: "Courses", n: "05" },
  { to: "/blog", label: "Journal", n: "06" },
  { to: "/contact", label: "Contact", n: "07" },
];

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => setIsMenuOpen((p) => !p), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    if (isMenuOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-foreground/10"
            : "bg-background border-b border-transparent"
        }`}
      >
        <div className="container px-6 mx-auto flex h-16 md:h-20 items-center justify-between">
          {/* Wordmark */}
          <Link to="/" className="flex items-baseline gap-2 group" onClick={closeMenu}>
            <span className="display-serif text-xl md:text-2xl text-foreground tracking-tight">
              Infridet
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">
              / Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm px-4 py-2 transition-colors ${
                  isActive(link.to)
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute left-4 right-4 -bottom-px h-px bg-coral" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-coral h-10 px-5 text-sm">
                Free Strategy Call
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center text-foreground"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu — Apple style */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background overflow-y-auto animate-fade-up">
          <nav className="container px-6 py-10 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="flex items-baseline justify-between py-5 border-b border-foreground/15 group"
              >
                <span className={`display-serif text-4xl tracking-tight ${
                  isActive(link.to) ? "text-coral italic" : "text-foreground"
                }`}>
                  {link.label}
                </span>
                <span className="mono text-xs text-muted-foreground">{link.n}</span>
              </Link>
            ))}

            <div className="mt-10 flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <button className="btn-coral w-full h-14 text-base">
                  Free 15-Min Strategy Call
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </a>
              <a href="tel:+919517459072" onClick={closeMenu}>
                <button className="btn-ghost-ink w-full h-14 text-base">
                  Call +91 95174 59072
                </button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default React.memo(Navbar);
