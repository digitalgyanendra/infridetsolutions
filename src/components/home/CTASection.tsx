import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Clock, Shield, Zap, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.%20Please%20share%20a%20slot.";

const CTASection = () => {
  return (
    <section className="py-24 md:py-36 bg-background relative overflow-hidden border-t border-foreground/10">
      {/* Coral wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-transparent to-navy/5" />
      <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-coral/15 blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            Limited slots — April 2026
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="headline-xl mt-8 text-foreground text-balance"
          >
            Stop guessing.
            <br />
            Start growing —{" "}
            <em className="italic font-light text-coral">today.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-xl md:text-2xl text-foreground/75 max-w-2xl leading-snug font-serif italic"
          >
            Book a free 15-minute call with Gyan. Walk away with a clear
            roadmap — even if you decide not to work with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-coral h-16 px-10 text-base group">
                <MessageCircle className="h-5 w-5" />
                Free 15-Min Strategy Call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
            <a href="tel:+919517459072">
              <button className="btn-ghost-ink h-16 px-10 text-base">
                +91 95174 59072
              </button>
            </a>
          </motion.div>

          {/* Guarantees row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-foreground/15 border-y border-foreground/15"
          >
            {[
              { icon: Clock, t: "15 minutes", s: "Quick & focused" },
              { icon: Shield, t: "100% Free", s: "Zero obligation" },
              { icon: Zap, t: "Real strategy", s: "Not a sales pitch" },
            ].map((item) => (
              <div key={item.t} className="bg-background p-8 flex items-center gap-5">
                <item.icon className="h-7 w-7 text-coral shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="display-serif text-xl text-foreground">{item.t}</div>
                  <div className="text-sm text-muted-foreground">{item.s}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
