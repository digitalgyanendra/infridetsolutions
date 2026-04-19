import React from "react";
import { motion } from "framer-motion";

const principles = [
  {
    n: "I.",
    title: "Strategy before tactics.",
    body: "We don't sell thumbnails. We design entire growth systems — niche, format, retention, monetization. Tactics without strategy is noise.",
  },
  {
    n: "II.",
    title: "Receipts, not promises.",
    body: "43M subscribers. 6.5B views. Every claim auditable. If we can't prove it on a call, we won't say it on a website.",
  },
  {
    n: "III.",
    title: "Operator, not consultant.",
    body: "Gyan still ships videos every week. We don't theorize from a slide deck — we build in public, then teach what worked yesterday.",
  },
];

const ManifestoSection = () => {
  return (
    <section className="py-24 md:py-36 bg-background border-t border-foreground/10">
      <div className="container px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <span className="eyebrow">§ Our manifesto</span>
          </div>
          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="display-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] tracking-tight"
            >
              Three rules
              <br />
              we <em className="italic font-light text-coral">never break.</em>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15 rounded-2xl overflow-hidden">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 flex flex-col"
            >
              <span className="display-serif text-5xl text-coral italic mb-8">
                {p.n}
              </span>
              <h3 className="display-serif text-2xl md:text-3xl text-foreground leading-tight mb-4">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
