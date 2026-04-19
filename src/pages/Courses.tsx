import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/ui/layout/Layout";
import { Youtube, LineChart, Compass, BrainCircuit, Search, BarChart3, Check, ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20to%20enroll%20in%20a%20course.%20Help%20me%20pick%20the%20right%20one.";

const courses = [
  {
    n: "01",
    title: "AI Money Mastery",
    blurb: "Compound wealth with AI tools.",
    description: "Leverage AI for investment analysis, automated workflows, and risk management.",
    price: "₹9,999",
    originalPrice: "₹14,999",
    features: ["AI investment frameworks", "Automated analysis tools", "Risk management", "50+ hours content", "Lifetime updates"],
    icon: BrainCircuit,
    bestSeller: true,
    href: "/courses/ai-money-mastery",
  },
  {
    n: "02",
    title: "YouTube Growth Accelerator",
    blurb: "0 to 100K subscribers, engineered.",
    description: "The exact system that's grown 43M+ subs across managed channels.",
    price: "₹7,999",
    originalPrice: "₹12,999",
    features: ["Channel optimization blueprint", "Content strategy framework", "Thumbnail masterclass", "Monetization", "Algorithm secrets"],
    icon: Youtube,
    bestSeller: false,
    href: "/courses/youtube-growth",
  },
  {
    n: "03",
    title: "SEO Domination",
    blurb: "Rank, traffic, conversion.",
    description: "Master SEO end-to-end. Drive massive organic traffic on autopilot.",
    price: "₹8,999",
    originalPrice: "₹13,999",
    features: ["Keyword research mastery", "On-page optimization", "Link building", "Technical SEO", "Local SEO"],
    icon: Search,
    href: "/courses/seo-domination",
  },
  {
    n: "04",
    title: "Digital Marketing Blueprint",
    blurb: "End-to-end campaign mastery.",
    description: "Multi-channel campaigns that convert. Paid + organic, fully integrated.",
    price: "₹9,999",
    originalPrice: "₹15,999",
    features: ["Multi-channel strategy", "Paid ads optimization", "Email automation", "Analytics & tracking", "Customer journey"],
    icon: LineChart,
    href: "/courses/digital-marketing",
  },
  {
    n: "05",
    title: "Brand Growth System",
    blurb: "Build the brand. Charge the premium.",
    description: "Identity, narrative, and presence — the system to build brands people remember.",
    price: "₹6,999",
    originalPrice: "₹10,999",
    features: ["Identity development", "Visual storytelling", "Persona creation", "Messaging framework", "Social brand strategy"],
    icon: Compass,
    href: "/courses/brand-growth",
  },
  {
    n: "06",
    title: "Content Creator Pro",
    blurb: "Multi-platform creator playbook.",
    description: "Repurpose, distribute, monetize. Master content as a creator-operator.",
    price: "₹8,499",
    originalPrice: "₹12,499",
    features: ["Multi-platform strategy", "Repurposing system", "Audience growth", "Monetization blueprints", "Creator tools"],
    icon: BarChart3,
    href: "/courses/content-creator",
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-background border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-32 left-1/2 w-[460px] h-[460px] rounded-full bg-coral/15 blur-3xl pointer-events-none" />

        <div className="container relative z-10 px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="flex items-center justify-between mb-16 pb-6 border-b border-foreground/15">
            <span className="eyebrow">Vol. 04 — The Curriculum</span>
            <span className="eyebrow">Lifetime access · Updates included</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="headline-xl text-foreground text-balance max-w-5xl"
          >
            Skills that <em className="italic font-light text-coral">compound.</em>
          </motion.h1>
          <p className="mt-10 text-xl md:text-2xl text-foreground/80 font-serif italic max-w-2xl leading-snug">
            Six self-paced programs built from real operator experience —
            not theory. Lifetime updates. Honest 14-day refund.
          </p>
        </div>
      </section>

      {/* Courses grid */}
      <section className="py-24 bg-background border-t border-foreground/10">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15 rounded-2xl overflow-hidden">
            {courses.map((c, i) => (
              <motion.article
                key={c.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-background p-8 flex flex-col relative"
              >
                {c.bestSeller && (
                  <span className="absolute top-6 right-6 mono text-[10px] uppercase tracking-[0.18em] text-coral border border-coral rounded-full px-2.5 py-1">
                    Best seller
                  </span>
                )}
                <div className="flex items-center gap-3 mb-6">
                  <span className="mono text-xs text-muted-foreground">{c.n}</span>
                  <c.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="display-serif text-2xl text-foreground tracking-tight leading-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-foreground/70 italic font-serif mb-4">{c.blurb}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.description}</p>

                <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-foreground/15">
                  <span className="display-serif text-3xl text-foreground">{c.price}</span>
                  {c.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{c.originalPrice}</span>
                  )}
                </div>

                <ul className="space-y-2 mb-8 flex-1">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-coral mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to={c.href}>
                  <button className="btn-ink w-full h-12 text-sm">
                    Enroll · {c.price}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-secondary/40 border-t border-foreground/10">
        <div className="container px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-4"><span className="eyebrow">§ Frequently asked</span></div>
            <div className="md:col-span-8">
              <h2 className="display-serif text-4xl md:text-6xl text-foreground leading-[0.95] tracking-tight">
                Things you're about to ask.
              </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-foreground/15 border-y border-foreground/15">
            {[
              { q: "How do I access the course after purchase?", a: "Login credentials hit your inbox the moment payment clears. Lifetime access. Mobile + desktop." },
              { q: "Do I need prior experience?", a: "Most courses welcome beginners. Each course page lists prerequisites if any." },
              { q: "What's your refund policy?", a: "14-day no-questions-asked refund. Watch, decide, opt out — full money back." },
              { q: "How long do I keep access?", a: "Lifetime. Including all future updates and revisions." },
              { q: "Is there support?", a: "Yes — community forum for all, plus email + group calls for premium tiers." },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="py-7"
              >
                <h3 className="display-serif text-xl md:text-2xl text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-foreground/10">
        <div className="container px-6 max-w-4xl">
          <h2 className="display-serif text-4xl md:text-6xl text-foreground leading-[0.95] tracking-tight">
            Not sure which one?
            <br />
            <em className="italic font-light text-coral">Ask Gyan.</em>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl">
            Free 15-minute call. Personalised recommendation based on where you are
            and where you want to be.
          </p>
          <div className="mt-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-coral h-16 px-10 text-base">
                <MessageCircle className="h-5 w-5" />
                Get Personalised Recommendation
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
