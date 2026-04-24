import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Infridet%20Team%2C%20I%20need%20help%20with%20my%20YouTube%20channel.%20Can%20we%20schedule%20a%20call%3F";

const services = [
  {
    num: "01",
    title: "YouTube Growth",
    short: "Channels that actually scale.",
    description:
      "From 0 to 1M+ subscribers. We engineer your content strategy, thumbnails, retention curves, and algorithm-fit — the same system that built 43M+ subs.",
    outcome: "Avg 3.2× growth in 90 days",
  },
  {
    num: "02",
    title: "SEO & Discoverability",
    short: "Get found on Search & YouTube.",
    description:
      "Rank for what your audience is actually searching. Keyword research, on-page SEO, and content briefs that bring qualified traffic on autopilot.",
    outcome: "Avg 5× organic reach",
  },
  {
    num: "03",
    title: "Brand & Monetization",
    short: "Turn views into revenue.",
    description:
      "Brand deals, sponsorships, course launches, product growth playbooks. We've helped creators cross ₹1Cr+ years.",
    outcome: "Multiple 7-figure exits",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-36 bg-background border-t border-foreground/10">
      <div className="container px-6">
        {/* Section masthead */}
        <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="md:col-span-4">
            <span className="eyebrow">§ What we do</span>
          </div>
          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="display-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] tracking-tight"
            >
              Three things.
              <br />
              <em className="italic font-light text-coral">Done</em> better than anyone.
            </motion.h2>
          </div>
        </div>

        {/* Services — full-width editorial rows */}
        <div className="border-t border-foreground/15">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid md:grid-cols-12 gap-8 py-12 md:py-16 border-b border-foreground/15 hover:bg-secondary/30 transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg"
            >
              <div className="md:col-span-2">
                <span className="mono text-sm text-muted-foreground">{s.num}</span>
              </div>
              <div className="md:col-span-6">
                <h3 className="display-serif text-3xl md:text-5xl text-foreground leading-[1] tracking-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-base md:text-lg text-foreground/70 italic font-serif mb-6">
                  {s.short}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-prose">
                  {s.description}
                </p>
              </div>
              <div className="md:col-span-4 flex md:flex-col md:items-end justify-between md:justify-start gap-4">
                <div className="md:text-right">
                  <div className="eyebrow mb-1">Typical outcome</div>
                  <div className="display-serif text-xl md:text-2xl text-coral italic">
                    {s.outcome}
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-foreground/40 group-hover:text-coral group-hover:rotate-12 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="max-w-xl">
            <h3 className="display-serif text-2xl md:text-3xl text-foreground italic">
              Not sure which one you need?
            </h3>
            <p className="text-muted-foreground mt-2">
              Tell our team about your channel — we'll tell you exactly what to fix first. Free.
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <button className="btn-coral h-14 px-7 text-base whitespace-nowrap">
              WhatsApp Our Team
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </a>
        </motion.div>

        <div className="mt-8">
          <Link to="/services" className="ink-link mono text-xs uppercase tracking-[0.2em]">
            See full service catalogue →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
