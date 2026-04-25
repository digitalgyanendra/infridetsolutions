import React from "react";
import { motion } from "framer-motion";
import { Users, Sparkles, PlayCircle } from "lucide-react";

import c1 from "@/assets/creators/creator-1.jpg";
import c2 from "@/assets/creators/creator-2.jpg";
import c3 from "@/assets/creators/creator-3.jpg";
import c4 from "@/assets/creators/creator-4.jpg";
import c5 from "@/assets/creators/creator-5.jpg";
import c6 from "@/assets/creators/creator-6.jpg";
import c7 from "@/assets/creators/creator-7.jpg";
import c8 from "@/assets/creators/creator-8.jpg";

// Placeholder data — replace names + handles when real photos arrive.
const creators = [
  { img: c1, name: "Creator 01", niche: "Tech & Reviews", subs: "2.4M", rotate: "-rotate-2" },
  { img: c2, name: "Creator 02", niche: "Lifestyle & Vlog", subs: "1.8M", rotate: "rotate-1" },
  { img: c3, name: "Creator 03", niche: "EdTech & Coding", subs: "3.1M", rotate: "-rotate-1" },
  { img: c4, name: "Creator 04", niche: "Fashion & Beauty", subs: "1.2M", rotate: "rotate-2" },
  { img: c5, name: "Creator 05", niche: "Spiritual & Culture", subs: "5.7M", rotate: "-rotate-1" },
  { img: c6, name: "Creator 06", niche: "Gaming & Streams", subs: "920K", rotate: "rotate-2" },
  { img: c7, name: "Creator 07", niche: "Finance & Markets", subs: "1.5M", rotate: "-rotate-2" },
  { img: c8, name: "Creator 08", niche: "Travel & Stories", subs: "780K", rotate: "rotate-1" },
];

const CreatorsSection = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-background border-t border-foreground/10">
      <div className="pointer-events-none absolute -top-40 right-0 w-[460px] h-[460px] rounded-full bg-coral/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[420px] h-[420px] rounded-full bg-navy/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />

      <div className="container relative z-10 px-6">
        {/* Masthead */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="md:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.25em] text-coral"
            >
              <Sparkles size={12} />
              <span>§ Creators we built</span>
            </motion.span>

            <p className="mt-6 mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground max-w-xs">
              500+ creators coached. 43M+ subs engineered. Below — a few faces from the family.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-foreground text-background mono text-[10px] uppercase tracking-[0.2em]">
              <Users size={12} className="text-coral" />
              500+ trained
            </div>
          </div>

          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="display-serif text-5xl md:text-7xl lg:text-[88px] text-foreground leading-[0.92] tracking-tight"
            >
              The faces behind
              <br />
              <em className="italic font-light text-coral">our receipts.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-serif italic leading-snug"
            >
              Real creators. Real channels. Real numbers.
              From first 1,000 subs to first million — built shoulder-to-shoulder with our team.
            </motion.p>
          </div>
        </div>

        {/* Polaroid wall */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {creators.map((c, i) => (
            <motion.figure
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative bg-background p-2.5 md:p-3 pb-5 rounded-sm shadow-md hover:shadow-2xl transition-all duration-500 ${c.rotate} hover:rotate-0 hover:-translate-y-2 hover:z-10 border border-foreground/5`}
            >
              {/* Tape */}
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-coral/30 rotate-[-3deg] rounded-sm" />

              <div className="relative overflow-hidden bg-foreground/5 aspect-[4/5]">
                <img
                  src={c.img}
                  alt={`${c.name} — ${c.niche} creator coached by Infridet Solutions`}
                  width={640}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
                {/* Subs chip */}
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 mono text-[10px] uppercase tracking-[0.2em] bg-background/95 backdrop-blur text-foreground px-2.5 py-1 rounded-full border border-foreground/10">
                  <PlayCircle size={10} className="text-coral" />
                  {c.subs}
                </span>
              </div>

              <figcaption className="mt-3 px-1">
                <div className="flex items-baseline gap-2">
                  <span className="mono text-[10px] text-coral tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-serif text-base md:text-lg text-foreground leading-tight tracking-tight">
                    {c.name}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-snug">
                  {c.niche}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center">
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-coral font-bold">+ 492 more</span> creators · across 14 niches · 9 languages
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;