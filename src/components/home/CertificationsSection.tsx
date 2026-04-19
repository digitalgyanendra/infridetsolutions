import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, t: "MSME Registered", s: "Govt. of India" },
  { icon: Award, t: "Trustpilot Verified", s: "4.9 / 5 rating" },
  { icon: BadgeCheck, t: "MCA Recognised", s: "Ministry of Corp. Affairs" },
];

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-background border-t border-foreground/10">
      <div className="container px-6">
        <div className="flex items-center justify-between mb-8">
          <span className="eyebrow">§ Verified credentials</span>
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hidden md:block">
            Audit-ready · 2026
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15 rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <motion.div
              key={item.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background p-6 flex items-center gap-4"
            >
              <item.icon className="h-7 w-7 text-coral" strokeWidth={1.5} />
              <div>
                <div className="font-semibold text-foreground">{item.t}</div>
                <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">
                  {item.s}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
