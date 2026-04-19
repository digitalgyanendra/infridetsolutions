import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Gyan ne mere channel ko 6 mahine mein 50K se 1.2M le jaaya. Strategy itni clear thi — har video ka purpose tha. Ye admi YouTube ka science jaanta hai.",
    name: "Rohit Sharma",
    role: "Tech Creator · 1.2M subs",
  },
  {
    quote:
      "Bahut log strategy bechte hain. Gyan execute karwata hai. Pehle 30 din mein mera CTR 3% se 9% pe gaya. Ye bhai different hai.",
    name: "Priya Mehta",
    role: "Lifestyle · 480K subs",
  },
  {
    quote:
      "Hum brand ke liye creator content scale kar rahe the. Infridet ne 4 channels manage kiye, 18 mahine mein 12M+ aggregate subs. ROI mind-blowing tha.",
    name: "Vikram Anand",
    role: "Head of Growth, EdTech",
  },
  {
    quote:
      "Pehli call free thi, but jo roadmap mila wo ₹1L worth tha. Maine 3 weeks tak khud try kiya, fir realize hua — Gyan ke saath kaam karna hi smart move hai.",
    name: "Aman Verma",
    role: "Finance Creator · 220K subs",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-36 bg-secondary/40 border-t border-foreground/10">
      <div className="container px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="md:col-span-4">
            <span className="eyebrow">§ Said about us</span>
          </div>
          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="display-serif text-4xl md:text-6xl text-foreground leading-[0.95] tracking-tight"
            >
              Don't trust us.
              <br />
              <em className="italic font-light text-coral">Trust them.</em>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15 rounded-2xl overflow-hidden">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 md:p-12 flex flex-col justify-between"
            >
              <blockquote>
                <span className="display-serif text-5xl text-coral leading-none block mb-4">
                  "
                </span>
                <p className="text-lg md:text-xl text-foreground leading-snug font-serif">
                  {t.quote}
                </p>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-foreground/15">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
