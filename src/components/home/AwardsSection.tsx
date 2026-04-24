import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

import imgGlobalMsme from "@/assets/awards/global-msme-award.webp";
import imgYoutubeGrowth from "@/assets/awards/youtube-growth-award.webp";
import imgBestExperts from "@/assets/awards/best-youtube-experts.webp";
import imgTopCreators from "@/assets/awards/top-creators-conclave.webp";
import imgSilverAwards from "@/assets/awards/youtube-silver-awards.webp";
import imgPW from "@/assets/awards/working-with-pw.webp";
import imgJoshTalks from "@/assets/awards/josh-talks.webp";
import imgIscon from "@/assets/awards/iscon-samman.webp";

const awards = [
  {
    img: imgGlobalMsme,
    title: "Global MSME Star Award 2025",
    body: "Honored by Smt. Hema Malini ji for outstanding contribution to the Indian creator economy.",
    tag: "Star Achiever · 2025",
    span: "md:col-span-7",
  },
  {
    img: imgYoutubeGrowth,
    title: "India Growth Leaders Award 2025",
    body: "Recognised for scaling YouTube channels at nation-level reach.",
    tag: "Growth Leader",
    span: "md:col-span-5",
  },
  {
    img: imgBestExperts,
    title: "Best YouTube Experts of India 2025",
    body: "Awarded by Bharatiya Prachya Vidya Sansthan for excellence in creator education.",
    tag: "Industry Expert",
    span: "md:col-span-5",
  },
  {
    img: imgTopCreators,
    title: "Bharat Creators Award",
    body: "Mark of honour from Yuva Soch Army — strengthening youth leadership through content.",
    tag: "Creator of the Year",
    span: "md:col-span-7",
  },
  {
    img: imgSilverAwards,
    title: "10× YouTube Silver Play Buttons",
    body: "Personal & client channels crossing 100K subscribers — across niches & languages.",
    tag: "Silver Creator Wall",
    span: "md:col-span-6",
  },
  {
    img: imgPW,
    title: "Powering Physics Wallah's Studio",
    body: "Behind-the-scenes work with India's largest EdTech creator wall — gold & diamond plays.",
    tag: "EdTech Partnership",
    span: "md:col-span-6",
  },
  {
    img: imgJoshTalks,
    title: "Featured at Josh Talks",
    body: "Invited speaker on building YouTube empires from Tier-2 India.",
    tag: "Keynote Speaker",
    span: "md:col-span-6",
  },
  {
    img: imgIscon,
    title: "ISKCON Creators Summit",
    body: "Honoured at the ISKCON Devotee Creators Summit for purposeful content building.",
    tag: "Cultural Recognition",
    span: "md:col-span-6",
  },
];

const AwardsSection = () => {
  return (
    <section className="py-24 md:py-36 bg-secondary/30 border-t border-foreground/10">
      <div className="container px-6">
        {/* Masthead */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <span className="eyebrow flex items-center gap-2">
              <Award size={12} className="text-coral" />
              § Recognition
            </span>
          </div>
          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="display-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] tracking-tight"
            >
              Awarded across India.
              <br />
              <em className="italic font-light text-coral">Honoured everywhere.</em>
            </motion.h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl font-serif italic">
              Trophies don't grow channels. But they prove we've done it — at scale, in public, with receipts.
            </p>
          </div>
        </div>

        {/* Editorial mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {awards.map((a, i) => (
            <motion.figure
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl bg-background border border-foreground/10 ${a.span}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                <span className="absolute top-4 left-4 mono text-[10px] uppercase tracking-[0.2em] bg-coral text-white px-3 py-1.5 rounded-full">
                  {a.tag}
                </span>
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-background">
                <h3 className="display-serif text-xl md:text-2xl leading-tight tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-background/85 leading-snug max-w-md">
                  {a.body}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground border-t border-foreground/10 pt-8">
          <span>MSME Registered</span>
          <span className="opacity-30">·</span>
          <span>MCA Recognised</span>
          <span className="opacity-30">·</span>
          <span>Trustpilot 4.9 / 5</span>
          <span className="opacity-30">·</span>
          <span>India Growth Leader 2025</span>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;