import React from "react";
import { motion } from "framer-motion";

const values = [
  { n: "01", t: "Excellence", d: "We ship only what we'd watch ourselves. No shortcuts, no fluff." },
  { n: "02", t: "Innovation", d: "We test the algorithm before it tests us. Always one cycle ahead." },
  { n: "03", t: "Integrity", d: "If a strategy won't work for you, we say so. Even if it costs the deal." },
  { n: "04", t: "Collaboration", d: "Your channel, your voice. We engineer — you stay the star." },
  { n: "05", t: "Client Success", d: "Our metric is your subscriber count. Not our retainer." },
  { n: "06", t: "Continuous Learning", d: "12+ years in. Still learning weekly — and teaching what we learn." },
];

const CoreValuesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-foreground/10">
      <div className="container px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <span className="eyebrow">§ Our values</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-serif text-4xl md:text-6xl text-foreground leading-[0.95] tracking-tight">
              Six things we <em className="italic font-light text-coral">never</em> compromise on.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15 rounded-2xl overflow-hidden">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-background p-8 flex flex-col"
            >
              <span className="mono text-xs text-muted-foreground mb-6">{v.n}</span>
              <h3 className="display-serif text-2xl text-foreground mb-3">{v.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
