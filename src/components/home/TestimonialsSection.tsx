import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Gyan ne mere channel ka pura framework badal diya. 6 mahine mein 50K se 480K subscribers — aur monthly revenue 7-figure cross kar gaya.",
    name: "Rohan M.",
    role: "Finance Creator, 480K subs",
  },
  {
    quote:
      "We worked with 4 'agencies' before Infridet. None delivered. Gyan's team gave us a system, not a sales pitch. Views jumped 5.4x in 90 days.",
    name: "Priya S.",
    role: "Marketing Head, EdTech Brand",
  },
  {
    quote:
      "Honest, sharp, no BS. Free 15-min call mein hi mujhe pata chal gaya ki main kya galat kar raha tha. Worth every rupee jab actual work shuru hua.",
    name: "Aman K.",
    role: "Tech Reviewer, 1.2M subs",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))]"
          >
            Real Creators. Real Results.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]"
          >
            They were stuck.
            <br />
            <span className="italic font-serif text-muted-foreground">
              Then they messaged Gyan.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary/50 border border-border rounded-2xl p-8 flex flex-col h-full hover:border-foreground/20 transition-colors"
            >
              <Quote className="h-8 w-8 text-[hsl(var(--primary))] mb-6" />
              <blockquote className="text-lg leading-relaxed text-foreground font-medium flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                    />
                  ))}
                </div>
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
