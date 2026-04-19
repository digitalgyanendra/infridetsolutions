import React from "react";
import { motion } from "framer-motion";

const rows = [
  {
    metric: "43M+",
    label: "Subscribers grown across managed channels",
    detail: "Across 50+ active partnerships",
  },
  {
    metric: "6.5B+",
    label: "Total views generated on YouTube",
    detail: "Across long-form, shorts & live",
  },
  {
    metric: "500+",
    label: "Creators & brands trained or coached",
    detail: "From 0-sub beginners to 10M+ creators",
  },
  {
    metric: "12+",
    label: "Years building YouTube growth systems",
    detail: "Since the early days of the platform",
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: title */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))]"
            >
              Track Record
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]"
            >
              Numbers
              <br />
              <span className="italic font-serif text-muted-foreground">
                don't lie.
              </span>
            </motion.h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              We don't sell theory. We sell what's already worked — for some of
              India's biggest creators and brands.
            </p>
          </div>

          {/* Right: list of stats */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-border border-y border-border">
              {rows.map((r, i) => (
                <motion.div
                  key={r.metric}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="py-8 md:py-10 grid grid-cols-12 gap-4 items-baseline"
                >
                  <div className="col-span-12 sm:col-span-4 text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
                    {r.metric}
                  </div>
                  <div className="col-span-12 sm:col-span-8">
                    <div className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                      {r.label}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {r.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
