import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { Link } from "react-router-dom";
import {
  Youtube, LineChart, Layers, TrendingUp, Compass, MessageSquare,
  BarChart3, Users, HeartHandshake, ArrowUpRight, MessageCircle, Check,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.";

const mainServices = [
  {
    n: "01",
    icon: Youtube,
    title: "YouTube Consulting",
    blurb: "Channels engineered to scale.",
    description: "From 0 to 1M+. Strategy, retention, thumbnails, algorithm-fit — the full playbook that built 43M+ subs.",
    features: ["Content strategy", "Audience growth", "Video SEO", "Monetization", "Analytics & retention"],
    outcome: "Avg 3.2× growth in 90 days",
  },
  {
    n: "02",
    icon: LineChart,
    title: "SEO Optimization",
    blurb: "Get found before your competition does.",
    description: "Keyword research, on-page, technical, and link-building — engineered for compounding organic traffic.",
    features: ["Keyword research", "On-page SEO", "Technical audit", "Backlink strategy", "Monthly reports"],
    outcome: "Avg 5× organic reach",
  },
  {
    n: "03",
    icon: Layers,
    title: "Brand Growth",
    blurb: "Build a brand people remember.",
    description: "Identity, positioning, narrative, and the systems to make sure your brand shows up consistently — everywhere.",
    features: ["Identity system", "Positioning", "Customer journey", "Social presence", "Brand consistency"],
    outcome: "Premium pricing power",
  },
];

const additionalServices = [
  { icon: TrendingUp, t: "Digital Marketing", d: "Full-funnel campaigns engineered for conversion." },
  { icon: Compass, t: "Social Media", d: "Strategy + community for compounding presence." },
  { icon: MessageSquare, t: "Content Creation", d: "Video, blog, social — high-quality at scale." },
  { icon: BarChart3, t: "Analytics", d: "Insight loops that turn data into decisions." },
  { icon: Users, t: "Community", d: "Loyal audience building, not vanity metrics." },
  { icon: HeartHandshake, t: "Partnerships", d: "Brand deals & strategic collaborations." },
];

const process = [
  { n: "01", t: "Discovery", d: "We map your goals, audience, and current state. Honest audit. No fluff." },
  { n: "02", t: "Strategy", d: "Custom roadmap with measurable KPIs. You see the destination before we move." },
  { n: "03", t: "Implementation", d: "Hands-on execution. Every deliverable shipped on time." },
  { n: "04", t: "Optimization", d: "Continuous tuning based on real data. We chase the algorithm so you don't have to." },
  { n: "05", t: "Reporting", d: "Monthly reviews. Quarterly deep-dives. You always know what's working." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-background border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-coral/15 blur-3xl pointer-events-none" />

        <div className="container relative z-10 px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="flex items-center justify-between mb-16 pb-6 border-b border-foreground/15">
            <span className="eyebrow">Vol. 03 — The Service Catalogue</span>
            <span className="eyebrow">Booking April 2026</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="headline-xl text-foreground text-balance max-w-5xl"
          >
            Services that <em className="italic font-light text-coral">ship</em>
            <br />
            — not slideware.
          </motion.h1>
          <p className="mt-10 text-xl md:text-2xl text-foreground/80 font-serif italic max-w-2xl leading-snug">
            Three core disciplines. Six supporting practices. One outcome — a
            channel, brand, or product that compounds.
          </p>
        </div>
      </section>

      {/* Main services — editorial rows */}
      <section className="py-24 md:py-32 bg-background border-t border-foreground/10">
        <div className="container px-6">
          <div className="border-t border-foreground/15">
            {mainServices.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid md:grid-cols-12 gap-8 py-16 border-b border-foreground/15"
              >
                <div className="md:col-span-2">
                  <span className="mono text-sm text-muted-foreground">{s.n}</span>
                  <s.icon className="h-7 w-7 text-foreground mt-6" strokeWidth={1.5} />
                </div>
                <div className="md:col-span-6">
                  <h3 className="display-serif text-3xl md:text-5xl text-foreground tracking-tight leading-[1] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-lg text-foreground/70 italic font-serif mb-6">{s.blurb}</p>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
                <div className="md:col-span-4">
                  <ul className="space-y-3 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="h-4 w-4 text-coral mt-1 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-foreground/15 mb-6">
                    <div className="eyebrow mb-1">Typical outcome</div>
                    <div className="display-serif text-xl text-coral italic">{s.outcome}</div>
                  </div>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <button className="btn-coral h-12 px-5 text-sm w-full">
                      Discuss this service
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional */}
      <section className="py-24 md:py-32 bg-secondary/40 border-t border-foreground/10">
        <div className="container px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-4"><span className="eyebrow">§ Also available</span></div>
            <div className="md:col-span-8">
              <h2 className="display-serif text-4xl md:text-6xl text-foreground leading-[0.95] tracking-tight">
                Six more practices
                <br />
                <em className="italic font-light text-coral">in our toolkit.</em>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="editorial-card p-7"
              >
                <s.icon className="h-6 w-6 text-coral mb-5" strokeWidth={1.5} />
                <h3 className="display-serif text-xl text-foreground mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-[0.08]" />
        <div className="container relative z-10 px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-4">
              <span className="mono text-[11px] uppercase tracking-[0.2em] text-background/50">
                § How we work
              </span>
            </div>
            <div className="md:col-span-8">
              <h2 className="display-serif text-4xl md:text-6xl leading-[0.95] tracking-tight">
                Five stages.
                <br />
                <em className="italic font-light text-coral">Same playbook</em>, every time.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-background/10 border-t border-background/15">
            {process.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-foreground p-6 md:p-8 flex flex-col"
              >
                <span className="display-serif text-4xl text-coral italic mb-6">{p.n}</span>
                <h3 className="display-serif text-xl mb-3">{p.t}</h3>
                <p className="text-sm text-background/70 leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background border-t border-foreground/10">
        <div className="container px-6 max-w-5xl">
          <span className="eyebrow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            Limited slots — April 2026
          </span>
          <h2 className="display-serif text-4xl md:text-7xl mt-6 text-foreground leading-[0.95] tracking-tight">
            Pick a service.
            <br />
            Or let us <em className="italic font-light text-coral">pick for you.</em>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl font-serif italic">
            Tell Gyan what you're building. He'll prescribe the exact next step. Free.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-coral h-16 px-10 text-base">
                <MessageCircle className="h-5 w-5" />
                Free 15-Min Strategy Call
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </a>
            <Link to="/contact">
              <button className="btn-ghost-ink h-16 px-10 text-base">Send a message →</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
