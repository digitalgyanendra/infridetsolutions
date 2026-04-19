import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.";

const OwnerSection = () => {
  return (
    <section className="py-24 md:py-36 bg-background border-t border-foreground/10">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-coral/15 blur-2xl rounded-full" />
              <img
                src="/lovable-uploads/3a1238bf-43d7-4308-b873-3d789a424e88.png"
                alt="Gyan Dwivedi — Founder of Infridet Solutions"
                className="relative w-full h-auto object-cover rounded-2xl border border-foreground/10"
                loading="lazy"
              />
            </div>
            <div className="mt-6 flex items-baseline justify-between">
              <div>
                <div className="display-serif text-2xl text-foreground italic">Gyan Dwivedi</div>
                <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  Founder & CEO
                </div>
              </div>
              <div className="text-right">
                <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Plate</div>
                <div className="display-serif text-2xl text-coral italic">01</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">§ Founder's note</span>
            <h2 className="display-serif text-4xl md:text-6xl text-foreground leading-[0.95] tracking-tight mt-4">
              "I built channels before
              <br />
              I built a <em className="italic font-light text-coral">company.</em>"
            </h2>
            <div className="mt-10 space-y-6 text-lg text-foreground/80 font-serif leading-relaxed">
              <p>
                I've spent 12+ years inside YouTube — first as a creator, then as a
                strategist for some of India's biggest channels. Somewhere along
                the way, the math became impossible to ignore: 43 million
                subscribers, 6.5 billion views, 500+ creators trained.
              </p>
              <p>
                Infridet exists because most "growth agencies" sell theory. We sell
                what we've already shipped. Every framework we hand you was first
                tested on our own channels — at scale, in public, with money on
                the line.
              </p>
              <p>
                If you have a channel — or want to start one — I'd love to hear about
                it. The first 15 minutes are on me.
              </p>
            </div>
            <div className="mt-10">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <button className="btn-coral h-14 px-7 text-base">
                  Message Gyan directly
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
