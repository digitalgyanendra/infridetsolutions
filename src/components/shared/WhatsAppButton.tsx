import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919517459072?text=Hi%20Infridet%20Solutions%2C%20I%20want%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="shrink-0" />
      <span className="text-sm font-semibold hidden sm:inline">Chat with Us</span>
    </a>
  );
};

export default WhatsAppButton;
