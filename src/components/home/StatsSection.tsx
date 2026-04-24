import React from "react";
import { motion } from "framer-motion";

const stats = [
  { v: "43M+", l: "Subscribers across managed channels", note: "Verified across 50+ channels" },
  { v: "6.5B+", l: "Lifetime views delivered", note: "And counting — daily" },
  { v: "500+", l: "Creators & brands coached", note: "From 1K to 10M+ subs" },
  { v: "12+", l: "Years building on YouTube", note: "Since the algorithm was kind" },
];

const StatsSection = () => {
  return (
    <section className="py-24 md:py-36 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-[0.08]" />

      <div className="container relative z-10 px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-background/50">
              § The Receipts
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="display-serif text-5xl md:text-7xl mt-4 leading-[0.95] tracking-tight"
            >
              Numbers don't{" "}
              <em className="italic font-light text-coral">lie.</em>
            </motion.h2>
          </div>
          <div className="md:col-span-7 md:pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-background/70 leading-relaxed font-serif italic"
            >
              Anyone can talk strategy. We've shipped it — at the scale of
              nation-sized audiences. Every metric here is auditable.
            </motion.p>
            <p className="mt-4 mono text-xs uppercase tracking-[0.2em] text-background/50">
              — Infridet Solutions · Growth Team
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-background/10 border-t border-background/15">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-foreground p-6 md:p-10 flex flex-col"
            >
              <span className="display-serif text-5xl md:text-7xl text-background leading-none">
                {s.v}
              </span>
              <span className="mt-4 text-sm md:text-base text-background/80 font-medium">
                {s.l}
              </span>
              <span className="mt-2 mono text-[10px] uppercase tracking-wider text-background/40">
                {s.note}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
