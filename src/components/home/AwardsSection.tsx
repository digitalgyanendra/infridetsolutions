import React from "react";
import { motion } from "framer-motion";
import { Award, Sparkles, Trophy } from "lucide-react";

import imgGlobalMsme from "@/assets/awards/global-msme-award.webp";
import imgYoutubeGrowth from "@/assets/awards/youtube-growth-award.webp";
import imgBestExperts from "@/assets/awards/best-youtube-experts.webp";
import imgTopCreators from "@/assets/awards/top-creators-conclave.webp";
import imgSilverAwards from "@/assets/awards/youtube-silver-awards.webp";
import imgPW from "@/assets/awards/working-with-pw.webp";
import imgJoshTalks from "@/assets/awards/josh-talks.webp";
import imgIscon from "@/assets/awards/iscon-samman.webp";

// Hero / featured award — gets the giant editorial treatment.
const featured = {
  img: imgGlobalMsme,
  title: "Global MSME Star Award 2025",
  body: "Honoured by Smt. Hema Malini ji at the Star Global MSME Summit for outstanding contribution to India's creator economy.",
  presenter: "Presented by Hema Malini · Member of Parliament",
  year: "2025",
  tag: "Star Achiever",
};

// Supporting awards — polaroid-style mosaic.
const awards = [
  {
    img: imgTopCreators,
    title: "Bharat Creators Award",
    body: "Mark of honour from Yuva Soch Army — strengthening youth leadership through content.",
    tag: "Creator of the Year",
    rotate: "-rotate-1",
  },
  {
    img: imgYoutubeGrowth,
    title: "India Growth Leaders Award",
    body: "Recognised for scaling YouTube channels at nation-level reach.",
    tag: "Growth Leader",
    rotate: "rotate-1",
  },
  {
    img: imgBestExperts,
    title: "Best YouTube Experts of India",
    body: "Awarded by Bharatiya Prachya Vidya Sansthan for excellence in creator education.",
    tag: "Industry Expert",
    rotate: "-rotate-[0.5deg]",
  },
  {
    img: imgIscon,
    title: "ISKCON Creators Summit",
    body: "Honoured at the ISKCON Devotee Creators Summit for purposeful content building.",
    tag: "Cultural Recognition",
    rotate: "rotate-[0.5deg]",
  },
  {
    img: imgSilverAwards,
    title: "10× YouTube Silver Play Buttons",
    body: "Personal & client channels crossing 100K — across niches & languages.",
    tag: "Silver Creator Wall",
    rotate: "-rotate-1",
  },
  {
    img: imgPW,
    title: "Powering Physics Wallah's Studio",
    body: "Behind-the-scenes work with India's largest EdTech creator wall — gold & diamond plays.",
    tag: "EdTech Partnership",
    rotate: "rotate-1",
  },
  {
    img: imgJoshTalks,
    title: "Featured at Josh Talks",
    body: "Invited speaker on building YouTube empires from Tier-2 India.",
    tag: "Keynote Speaker",
    rotate: "-rotate-[0.5deg]",
  },
];

const tickerItems = [
  "Global MSME Star Award 2025",
  "India Growth Leaders Award",
  "Bharat Creators Award",
  "Best YouTube Experts of India",
  "ISKCON Creators Summit",
  "10× Silver Play Buttons",
  "Featured at Josh Talks",
  "MSME Registered",
  "MCA Recognised",
  "Trustpilot 4.9 / 5",
];

const AwardsSection = () => {
  const ticker = [...tickerItems, ...tickerItems];

  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-secondary/30 border-t border-foreground/10">
      {/* Decorative blooms */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-coral/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-navy/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      <div className="container relative z-10 px-6">
        {/* Masthead */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.25em] text-coral"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>§ Wall of Honour</span>
            <Sparkles size={12} className="animate-pulse" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="display-serif text-5xl md:text-7xl lg:text-[88px] text-foreground leading-[0.92] tracking-tight mt-6"
          >
            Awarded across <em className="italic font-light text-coral">India.</em>
            <br />
            Honoured <em className="italic font-light">everywhere.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-serif italic leading-snug"
          >
            Trophies don't grow channels. But they prove we've done it —
            at scale, in public, with receipts you can verify.
          </motion.p>

          {/* Counter chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 inline-flex flex-wrap justify-center gap-3"
          >
            {[
              { v: "12+", l: "National awards" },
              { v: "10×", l: "Silver play buttons" },
              { v: "8", l: "Years of recognition" },
            ].map((c) => (
              <div
                key={c.l}
                className="flex items-baseline gap-2 px-5 py-2.5 rounded-full bg-background border border-foreground/15 shadow-sm"
              >
                <span className="display-serif text-xl text-coral">{c.v}</span>
                <span className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {c.l}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* === FEATURED AWARD — editorial split === */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-24 md:mb-32"
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
            {/* Image */}
            <div className="md:col-span-7 relative">
              {/* Coral frame echo */}
              <div className="absolute -inset-3 md:-inset-5 rounded-3xl bg-coral/15 -rotate-2" />
              <div className="absolute -inset-1 md:-inset-2 rounded-3xl bg-foreground/10 rotate-1" />
              <div className="relative overflow-hidden rounded-3xl bg-background border border-foreground/10 shadow-2xl">
                <img
                  src={featured.img}
                  alt={featured.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[420px] md:h-[560px] object-cover"
                />
                {/* Year corner stamp */}
                <div className="absolute top-5 right-5 w-20 h-20 rounded-full bg-coral text-white flex flex-col items-center justify-center shadow-xl rotate-[8deg]">
                  <Trophy size={16} className="mb-0.5" />
                  <span className="display-serif text-lg leading-none">{featured.year}</span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="md:col-span-5 md:pl-4">
              <span className="inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.25em] bg-coral text-white px-3.5 py-1.5 rounded-full">
                <Trophy size={10} />
                Featured · {featured.tag}
              </span>
              <h3 className="display-serif text-3xl md:text-5xl text-foreground leading-[1.02] tracking-tight mt-6">
                {featured.title}
              </h3>
              <p className="mt-6 text-lg text-foreground/75 leading-snug font-serif italic max-w-md">
                "{featured.body}"
              </p>
              <div className="mt-8 pt-6 border-t border-foreground/15">
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Presented by
                </div>
                <div className="display-serif text-xl text-foreground mt-1">
                  Smt. Hema Malini
                </div>
                <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                  Member of Parliament · Star Global MSME Summit
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === POLAROID MOSAIC === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {awards.map((a, i) => (
            <motion.figure
              key={a.title}
              initial={{ opacity: 0, y: 28, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative bg-background p-3 md:p-4 pb-6 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 ${a.rotate} hover:rotate-0 hover:-translate-y-2 hover:z-10`}
            >
              {/* Tape */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-coral/30 rotate-[-3deg] rounded-sm" />

              <div className="relative overflow-hidden bg-foreground/5 aspect-[4/5]">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
                {/* Tag pill */}
                <span className="absolute top-3 left-3 mono text-[9px] uppercase tracking-[0.2em] bg-background/95 backdrop-blur text-foreground px-2.5 py-1 rounded-full border border-foreground/10">
                  {a.tag}
                </span>
              </div>

              <figcaption className="mt-4 px-1">
                <div className="flex items-baseline gap-2">
                  <span className="mono text-[10px] text-coral tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-serif text-lg md:text-xl text-foreground leading-tight tracking-tight">
                    {a.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-snug">
                  {a.body}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* === HONOUR ROLL TICKER === */}
        <div className="mt-24 md:mt-32 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-background border border-foreground/15 rounded-full mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-2">
            <Award size={11} className="text-coral" />
            Honour Roll
          </div>
          <div className="border-y border-foreground/15 py-6 marquee">
            <div className="marquee-track items-center gap-x-12">
              {ticker.map((t, i) => (
                <span
                  key={i}
                  className="display-serif text-2xl md:text-3xl text-foreground/70 italic whitespace-nowrap flex items-center gap-12"
                >
                  {t}
                  <span className="text-coral text-xl">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span><span className="text-coral font-bold">MSME</span> Registered</span>
          <span className="opacity-30">·</span>
          <span><span className="text-coral font-bold">MCA</span> Recognised</span>
          <span className="opacity-30">·</span>
          <span><span className="text-coral font-bold">Trustpilot</span> 4.9 / 5</span>
          <span className="opacity-30">·</span>
          <span><span className="text-coral font-bold">India</span> Growth Leader 2025</span>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;