import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Shield, Zap } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.%20Please%20share%20a%20slot.";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--background)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-background/10 border border-background/20 text-xs font-semibold uppercase tracking-wider mb-8"
          >
            Limited Slots This Week
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8"
          >
            Stop guessing.
            <br />
            Start growing —{" "}
            <span className="italic font-serif text-[hsl(var(--accent))]">
              today.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-10"
          >
            Book a free 15-minute call with Gyan. Walk away with a clear
            roadmap — even if you decide not to work with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="h-16 px-10 text-lg font-bold bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white shadow-2xl hover:scale-105 transition-all"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Message Gyan on WhatsApp
              </Button>
            </a>
          </motion.div>

          {/* Guarantees row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-background/10"
          >
            {[
              { icon: Clock, t: "15 minutes", s: "Quick & focused" },
              { icon: Shield, t: "100% Free", s: "Zero obligation" },
              { icon: Zap, t: "Real strategy", s: "Not a sales pitch" },
            ].map((item) => (
              <div key={item.t} className="flex flex-col items-center gap-2">
                <item.icon className="h-6 w-6 text-[hsl(var(--accent))]" />
                <div className="font-bold text-base">{item.t}</div>
                <div className="text-sm text-background/60">{item.s}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
