import React from "react";

const logos = [
  { name: "Josh Talks", imgSrc: "/lovable-uploads/325d2d7a-2a49-4220-8cc1-150319570c01.png" },
  { name: "PharmEasy", imgSrc: "/lovable-uploads/192a9d94-67c9-40ad-b0b4-e12aaac8ce93.png" },
  { name: "MPL", imgSrc: "/lovable-uploads/7b907a0d-539e-432d-bef2-9f0b3c5e9149.png" },
  { name: "Vmart", imgSrc: "/lovable-uploads/b6fd9020-9cfe-4d9b-92a9-bc7fd9dc3f13.png" },
  { name: "Meesho", imgSrc: "/lovable-uploads/bd4ba683-8219-4087-9708-0ef157a6cb71.png" },
  { name: "Confirmtkt", imgSrc: "/lovable-uploads/3683885c-5b52-4464-87e1-25c19d49f75c.png" },
  { name: "Dream11", imgSrc: "/lovable-uploads/f0247702-91e6-4dd7-8ca6-550b78fab2e6.png" },
  { name: "Airtel", imgSrc: "/lovable-uploads/198368ec-73cb-47ce-892a-f0d7620fae08.png" },
  { name: "OYO", imgSrc: "/lovable-uploads/35311a15-9e05-4d4a-bf6e-6b9a7fc6b8b5.png" },
  { name: "Physics Wallah", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYXrdQffKHm97oCHSFyLupNJPe0wE9Nm_sHp5NLuCUK7GD_UxZnuoFt5PRRv0r27V9kjjsKh8K3u87DAKJRTatfJwK4D9PcHksspdkfK79cFXN6QbEBNMTXw4PPorKRhtiyxi4GmqMvNe5vrvH_cSbElVyKYHJfnX0_ErM0raAbZ2T-XhvGlNNLL6uM4Lb/w319-h320/physics-wallah-seeklogo.png" },
  { name: "Kuku FM", imgSrc: "https://d1l07mcd18xic4.cloudfront.net/static/KukuFM-logos/KukuFM144-144.png" },
];

const TrustedBrandsSection = () => {
  const loop = [...logos, ...logos];

  return (
    <section className="py-20 bg-background border-y border-foreground/10">
      <div className="container px-6 mb-10">
        <div className="grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-5">
            <span className="eyebrow">§ Trusted across India</span>
            <h2 className="display-serif text-3xl md:text-5xl mt-3 text-foreground leading-[0.95] tracking-tight">
              Built with{" "}
              <em className="italic font-light text-coral">brands you know.</em>
            </h2>
          </div>
          <div className="md:col-span-7 md:text-right">
            <p className="text-base md:text-lg text-muted-foreground font-serif italic">
              From unicorn startups to legacy retail — same playbook, same results.
            </p>
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track items-center">
          {loop.map((c, i) => (
            <img
              key={i}
              src={c.imgSrc}
              alt={c.name}
              className="h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>

      <div className="container px-6 mt-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span><span className="text-coral font-bold">43M+</span> subscribers</span>
          <span className="opacity-30">·</span>
          <span><span className="text-coral font-bold">6.5B+</span> views</span>
          <span className="opacity-30">·</span>
          <span><span className="text-coral font-bold">500+</span> creators</span>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;
