import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, LineChart, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: TrendingUp, t: "Data-driven", d: "Every decision backed by analytics. We measure what moves the needle." },
  { icon: Users, t: "Operator team", d: "Practitioners who run channels — not theorists with a slide deck." },
  { icon: Award, t: "Proven results", d: "43M+ subs, 6.5B+ views. Auditable receipts on every claim." },
  { icon: LineChart, t: "Custom strategy", d: "No templates. Your audience, your voice, your unique playbook." },
  { icon: Clock, t: "On-time, every time", d: "Deadlines are sacred. We ship when we say we'll ship." },
  { icon: HeartHandshake, t: "Long partnerships", d: "Average client tenure: 26 months. We're in it for the long game." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/40 border-t border-foreground/10">
      <div className="container px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <span className="eyebrow">§ Why us</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-serif text-4xl md:text-6xl text-foreground leading-[0.95] tracking-tight">
              Six reasons creators
              <br />
              keep <em className="italic font-light text-coral">coming back.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="editorial-card p-8 flex flex-col"
            >
              <r.icon className="h-7 w-7 text-coral mb-6" strokeWidth={1.5} />
              <h3 className="display-serif text-xl text-foreground mb-2">{r.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
