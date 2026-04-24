import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Infridet%20Team%2C%20I%20want%20to%20schedule%20my%20FREE%2015-min%20YouTube%20strategy%20call.%20Please%20share%20a%20slot.";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Editorial grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Coral accent blob */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-coral/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[380px] h-[380px] rounded-full bg-navy/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Top bar — issue / date / status */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-16 md:mb-20 pb-6 border-b border-foreground/15"
        >
          <span className="eyebrow">Vol. 01 — The Growth Issue</span>
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            Booking April 2026
          </span>
        </motion.div>

        {/* THE MANIFESTO */}
        <div className="max-w-[1200px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="headline-xl text-foreground text-balance"
          >
            We don't <em className="italic font-light text-coral">grow</em> channels.
            <br />
            We build <em className="italic font-light">empires.</em>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-12 items-end"
          >
            <p className="md:col-span-7 text-xl md:text-2xl text-foreground/80 leading-snug font-medium text-pretty">
              43 million subscribers. 6.5 billion views. 500+ creators.
              <br className="hidden md:block" />
              Engineered by the{" "}
              <span className="ink-link font-serif italic">Infridet team</span>.
              <br />
              Now it's your turn.
            </p>

            <div className="md:col-span-5 flex flex-col gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <button className="btn-coral w-full h-16 px-8 text-base group">
                  <MessageCircle className="h-5 w-5" />
                  Free 15-Min Strategy Call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
              <a href="tel:+919517459072" className="text-center">
                <button className="btn-ghost-ink w-full h-14 px-8 text-sm">
                  Or call directly: +91 95174 59072
                </button>
              </a>
              <p className="text-center mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                No credit card · No commitment · 15 minutes
              </p>
            </div>
          </motion.div>
        </div>

        {/* Editorial stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 md:mt-32 border-t border-foreground/15 pt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "43M+", l: "Subscribers generated", k: "01" },
              { v: "6.5B+", l: "Views delivered", k: "02" },
              { v: "500+", l: "Creators coached", k: "03" },
              { v: "₹0", l: "Cost of first call", k: "04" },
            ].map((s) => (
              <div key={s.k} className="flex flex-col">
                <span className="mono text-[11px] text-muted-foreground tracking-widest mb-3">
                  {s.k}
                </span>
                <span className="display-serif text-5xl md:text-6xl text-foreground leading-none">
                  {s.v}
                </span>
                <span className="mt-3 text-sm text-muted-foreground">{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
