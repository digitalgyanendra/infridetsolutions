import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden border-b border-foreground/10">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-32 right-1/3 w-[420px] h-[420px] rounded-full bg-coral/15 blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-foreground/15">
          <span className="eyebrow">Vol. 02 — About the Studio</span>
          <span className="eyebrow">Est. 2014 · Noida, India</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="headline-xl text-foreground text-balance max-w-5xl"
        >
          A studio of <em className="italic font-light text-coral">operators</em>
          <br />
          — not consultants.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-7 text-xl md:text-2xl text-foreground/80 font-serif italic leading-snug">
            Infridet Solutions is a creator-first growth studio led by Gyan Dwivedi.
            We build YouTube channels, brands, and product audiences from zero — and
            scale them past every plateau.
          </p>
          <div className="md:col-span-5 flex flex-col gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-coral w-full h-14 text-base">
                <MessageCircle className="h-5 w-5" />
                Talk to Gyan
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </a>
            <a href="/services">
              <button className="btn-ghost-ink w-full h-14 text-base">
                See what we do →
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
