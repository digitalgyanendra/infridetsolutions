import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star, TrendingUp, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.%20Please%20share%20a%20slot.";

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden border-b border-border">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative z-10 px-4 md:px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-semibold uppercase tracking-wider text-foreground">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] animate-pulse" />
              Trusted by 500+ Creators & Brands
            </span>
          </motion.div>

          {/* Headline — magazine style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.95] text-foreground mb-8"
          >
            Your YouTube
            <br />
            channel deserves
            <br />
            <span className="italic font-serif text-[hsl(var(--primary))]">
              real growth.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            We've grown channels to{" "}
            <span className="font-bold text-foreground">43M+ subscribers</span>{" "}
            and <span className="font-bold text-foreground">6.5B+ views</span>.
            Now it's your turn. Get a{" "}
            <span className="font-bold text-foreground">
              free 15-minute strategy call
            </span>{" "}
            with Gyan — no fluff, just a clear next step.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="h-14 px-8 text-base font-bold bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get My Free 15-Min Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="tel:+919517459072">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base font-semibold border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all w-full sm:w-auto"
              >
                Call Gyan: +91 95174 59072
              </Button>
            </a>
          </motion.div>

          {/* Trust signals row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                  />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.9/5</span>
              <span>from 200+ creators</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[hsl(var(--accent))]" />
              <span>
                <span className="font-semibold text-foreground">Avg 3.2x</span>{" "}
                channel growth in 90 days
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <span>
              <span className="font-semibold text-foreground">No credit card</span>{" "}
              — strategy call is free
            </span>
          </motion.div>
        </div>

        {/* Big stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
        >
          {[
            { v: "43M+", l: "Subscribers Generated" },
            { v: "6.5B+", l: "Views Delivered" },
            { v: "500+", l: "Creators Coached" },
            { v: "₹0", l: "Cost of First Call" },
          ].map((s) => (
            <div key={s.l} className="bg-white p-6 md:p-8 text-center">
              <div className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
                {s.v}
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-muted-foreground font-medium">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
