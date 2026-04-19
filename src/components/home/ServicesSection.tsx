import React from "react";
import { motion } from "framer-motion";
import { Youtube, LineChart, Layers, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20need%20help%20with%20my%20YouTube%20channel.%20Can%20we%20talk%3F";

const services = [
  {
    num: "01",
    title: "YouTube Growth",
    short: "Channels that actually scale",
    description:
      "From 0 to 1M+ subscribers — we engineer your content strategy, thumbnails, retention, and algorithm-fit. Same system that built 43M+ subs.",
    icon: Youtube,
    outcome: "Avg 3.2x growth in 90 days",
  },
  {
    num: "02",
    title: "SEO & Discoverability",
    short: "Get found on Search & YouTube",
    description:
      "Rank for what your audience is actually searching. Keyword research, on-page SEO, and content briefs that bring qualified traffic on autopilot.",
    icon: LineChart,
    outcome: "Avg 5x organic reach",
  },
  {
    num: "03",
    title: "Brand & Monetization",
    short: "Turn views into revenue",
    description:
      "Brand deals, sponsorships, course launches, and product growth playbooks. We've helped creators cross ₹1Cr+ years.",
    icon: Layers,
    outcome: "Multiple 7-figure exits",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* Section header — editorial */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))]"
          >
            What we do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]"
          >
            Three things we do
            <br />
            <span className="italic font-serif text-muted-foreground">
              better than anyone.
            </span>
          </motion.h2>
        </div>

        {/* Services list — magazine columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white p-8 md:p-10 hover:bg-secondary/40 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-sm font-mono font-semibold text-muted-foreground">
                  {s.num}
                </span>
                <s.icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                {s.title}
              </h3>
              <p className="text-base font-medium text-[hsl(var(--primary))] mb-4">
                {s.short}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                {s.description}
              </p>

              <div className="pt-6 border-t border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Typical outcome
                </div>
                <div className="font-bold text-foreground">{s.outcome}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 md:p-8 bg-secondary rounded-2xl border border-border"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Not sure which one you need?
            </h3>
            <p className="text-muted-foreground mt-1">
              Tell Gyan your channel — he'll tell you exactly what to fix first.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white font-bold shadow-md hover:shadow-lg transition-all whitespace-nowrap"
          >
            WhatsApp Gyan Now
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>

        <div className="mt-6 text-center">
          <Link
            to="/services"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            See full service list →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
