import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919517459072?text=Hi%20Infridet%20Team%2C%20I%20want%20to%20schedule%20my%20FREE%2015-min%20YouTube%20strategy%20call."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="WhatsApp Infridet team for free strategy call"
    >
      <span className="absolute inset-0 rounded-full bg-coral/40 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
      <span className="relative flex items-center gap-3 bg-coral hover:bg-coral-deep text-white pl-4 pr-5 py-3.5 rounded-full shadow-xl transition-all duration-300 group-hover:scale-105">
        <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/15">
          <MessageCircle size={18} className="shrink-0" />
        </span>
        <span className="text-sm font-bold leading-tight hidden sm:flex flex-col">
          <span>Free Strategy Call</span>
          <span className="mono text-[9px] uppercase tracking-[0.18em] opacity-80 font-normal">
            15 min · Zero cost
          </span>
        </span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
