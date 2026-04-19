import React from "react";
import Layout from "@/components/ui/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import SchemaData from "@/components/seo/SchemaData";
import { motion } from "framer-motion";
import { Youtube, Linkedin, Instagram, Brain, Code, TrendingUp, Users, ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.";

const AboutGyan = () => {
  const personSchema = {
    name: "Gyan Dwivedi",
    alternateName: "Gyanendra Dwivedi",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "Infridet Solutions Private Limited" },
    description:
      "Indian digital entrepreneur and founder of Infridet Solutions. Expert in YouTube growth, SEO, and digital consulting.",
    url: "https://infridetsolutions.com/about-gyan",
    sameAs: [
      "https://in.linkedin.com/in/gyanendradwivedi",
      "https://www.youtube.com/@Core-Gyan",
      "https://www.instagram.com/thegyanendradwivedi/",
    ],
  };

  const services = [
    { icon: Youtube, t: "YouTube Growth", d: "Channels scaled to 1M+ subs with engineered strategy." },
    { icon: Brain, t: "AI Automations", d: "Intelligent systems that streamline creator workflows." },
    { icon: Code, t: "Web & Product", d: "Full-stack platforms — Next.js, Tailwind, modern tooling." },
    { icon: TrendingUp, t: "Brand Positioning", d: "Strategic narrative for creators and operators." },
    { icon: Users, t: "Portfolio Mgmt", d: "End-to-end creator and influencer portfolio management." },
  ];

  return (
    <Layout>
      <SEOHead
        title="Gyan Dwivedi — Founder, Infridet Solutions"
        description="Meet Gyan Dwivedi: 12+ years building YouTube empires, 43M+ subs scaled, 500+ creators coached. Founder of Infridet Solutions."
        keywords={["Gyan Dwivedi", "Gyanendra Dwivedi", "Infridet Founder", "YouTube growth expert India"]}
        ogType="article"
      />
      <SchemaData type="Person" data={personSchema} />

      {/* Hero — editorial portrait */}
      <section className="relative bg-background border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-32 right-0 w-[460px] h-[460px] rounded-full bg-coral/15 blur-3xl pointer-events-none" />

        <div className="container relative z-10 px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="flex items-center justify-between mb-16 pb-6 border-b border-foreground/15">
            <span className="eyebrow">Plate 01 — Founder Portrait</span>
            <span className="eyebrow">12+ years on YouTube</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="headline-xl text-foreground text-balance"
              >
                Hi, I'm
                <br />
                <em className="italic font-light text-coral">Gyan.</em>
              </motion.h1>
              <p className="mt-10 text-xl md:text-2xl text-foreground/80 font-serif italic leading-snug max-w-2xl">
                I build YouTube empires for a living. 43M+ subscribers grown,
                500+ creators trained, and one studio born from it all — Infridet Solutions.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <button className="btn-coral h-14 px-7">
                    <MessageCircle className="h-5 w-5" />
                    Talk to me directly
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </a>
                {[
                  { Icon: Linkedin, href: "https://in.linkedin.com/in/gyanendradwivedi" },
                  { Icon: Youtube, href: "https://www.youtube.com/@Core-Gyan" },
                  { Icon: Instagram, href: "https://www.instagram.com/thegyanendradwivedi/" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full border border-foreground/20 hover:border-coral hover:bg-coral hover:text-background flex items-center justify-center transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-coral/20 blur-2xl rounded-full" />
                <img
                  src="/lovable-uploads/3a1238bf-43d7-4308-b873-3d789a424e88.png"
                  alt="Gyan Dwivedi"
                  className="relative w-full h-auto object-cover rounded-2xl border border-foreground/10"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="py-24 md:py-32 bg-background border-t border-foreground/10">
        <div className="container px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-4"><span className="eyebrow">§ What I do</span></div>
            <div className="md:col-span-8">
              <h2 className="display-serif text-4xl md:text-6xl text-foreground leading-[0.95] tracking-tight">
                Five disciplines.
                <br />
                <em className="italic font-light text-coral">One outcome:</em> growth.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15 rounded-2xl overflow-hidden">
            {services.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-background p-8 flex flex-col"
              >
                <s.icon className="h-7 w-7 text-coral mb-6" strokeWidth={1.5} />
                <h3 className="display-serif text-2xl text-foreground mb-2">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision pull-quote */}
      <section className="py-24 md:py-36 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-[0.08]" />
        <div className="container relative z-10 px-6">
          <span className="mono text-[11px] uppercase tracking-[0.2em] text-background/50">
            § My vision
          </span>
          <h2 className="display-serif text-4xl md:text-7xl mt-6 leading-[0.95] tracking-tight max-w-5xl">
            Bring <em className="italic font-light text-coral">enterprise-grade</em> growth
            to every Indian creator —
            <br />
            no fluff, no gatekeeping.
          </h2>
          <p className="mt-12 text-lg md:text-xl text-background/70 max-w-2xl font-serif italic leading-relaxed">
            "Most agencies sell theory. We sell what we've already shipped.
            Every framework was tested on our own channels first."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-foreground/10">
        <div className="container px-6 max-w-4xl">
          <h2 className="display-serif text-4xl md:text-6xl text-foreground leading-[0.95] tracking-tight">
            Let's <em className="italic font-light text-coral">talk.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            15 minutes. Zero cost. Real strategy — even if you decide not to work with us.
          </p>
          <div className="mt-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-coral h-16 px-10 text-base">
                <MessageCircle className="h-5 w-5" />
                Free 15-Min Strategy Call
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutGyan;
