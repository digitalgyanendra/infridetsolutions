import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { Phone, Mail, Youtube, SendIcon, CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import SEOHead from "@/components/seo/SEOHead";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.";

const TalkToGyan = () => {
  const { toast } = useToast();
  const [formState, setFormState] = React.useState({
    name: "", email: "", phone: "", channelName: "", currentSubscribers: "", mainGoal: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({ title: "Request sent!", description: "Gyan will review and respond within 24 hours." });
      setTimeout(() => {
        setFormState({ name: "", email: "", phone: "", channelName: "", currentSubscribers: "", mainGoal: "", message: "" });
        setIsSubmitted(false);
      }, 2000);
    }, 1200);
  };

  const inputCls = "w-full bg-background border border-foreground/20 rounded-xl py-3.5 px-4 text-foreground focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all";

  return (
    <Layout>
      <SEOHead
        title="Talk to Gyan — Free YouTube Strategy Call"
        description="15-minute free strategy call with Gyan Dwivedi. Channel audit, growth roadmap, monetization advice."
        keywords={["Gyan Dwivedi consultation", "YouTube expert call", "free YouTube audit"]}
      />

      {/* Hero */}
      <section className="relative bg-background border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full bg-coral/15 blur-3xl pointer-events-none" />

        <div className="container relative z-10 px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="flex items-center justify-between mb-16 pb-6 border-b border-foreground/15">
            <span className="eyebrow flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
              Booking calls this week
            </span>
            <span className="eyebrow">15 min · Zero cost</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="headline-xl text-foreground text-balance"
              >
                15 minutes.
                <br />
                Your <em className="italic font-light text-coral">growth roadmap.</em>
              </motion.h1>
              <p className="mt-10 text-xl md:text-2xl text-foreground/80 font-serif italic max-w-2xl leading-snug">
                Tell Gyan about your channel. He'll audit it on the call and hand
                you a clear next step. Free — even if you decide not to work with us.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <button className="btn-coral h-14 px-7">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Gyan Now
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </a>
                <a href="https://www.youtube.com/@Core-Gyan" target="_blank" rel="noopener noreferrer">
                  <button className="btn-ghost-ink h-14 px-7">
                    <Youtube className="h-5 w-5" />
                    Visit Channel
                  </button>
                </a>
              </div>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-foreground/15 pt-10">
                {[
                  { v: "43M+", l: "Subscribers" },
                  { v: "6.5B+", l: "Views" },
                  { v: "500+", l: "Creators" },
                  { v: "24h", l: "Reply time" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="display-serif text-3xl md:text-4xl text-foreground leading-none">{s.v}</div>
                    <div className="text-xs text-muted-foreground mt-2">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-coral/20 blur-2xl rounded-full" />
                <img
                  src="/lovable-uploads/3a1238bf-43d7-4308-b873-3d789a424e88.png"
                  alt="Gyan Dwivedi"
                  className="relative w-full h-auto object-cover rounded-2xl border border-foreground/10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="py-24 bg-background border-t border-foreground/10">
        <div className="container px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-4"><span className="eyebrow">§ On the call</span></div>
            <div className="md:col-span-8">
              <h2 className="display-serif text-4xl md:text-5xl text-foreground leading-[0.95]">
                Six things you'll
                <br />
                <em className="italic font-light text-coral">walk away with.</em>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15 rounded-2xl overflow-hidden">
            {[
              "Live channel audit",
              "SEO optimization plan",
              "Thumbnail strategy",
              "Content roadmap",
              "Monetization path",
              "Growth tracking system",
            ].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-background p-6 flex items-center gap-4"
              >
                <CheckCircle2 className="h-5 w-5 text-coral shrink-0" />
                <span className="display-serif text-lg text-foreground">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-secondary/40 border-t border-foreground/10">
        <div className="container px-6 max-w-3xl">
          <div className="text-center mb-10">
            <span className="eyebrow">§ Or fill the form</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 text-foreground leading-[0.95]">
              Tell us about your <em className="italic font-light text-coral">channel.</em>
            </h2>
          </div>

          <div className="editorial-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Name *</label>
                  <input id="name" name="name" type="text" required value={formState.name} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="email" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Email *</label>
                  <input id="email" name="email" type="email" required value={formState.email} onChange={handleChange} className={inputCls} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Phone</label>
                  <input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="channelName" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Channel Name *</label>
                  <input id="channelName" name="channelName" type="text" required value={formState.channelName} onChange={handleChange} className={inputCls} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="currentSubscribers" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Current subscribers</label>
                  <select id="currentSubscribers" name="currentSubscribers" value={formState.currentSubscribers} onChange={handleChange} className={inputCls}>
                    <option value="">Select…</option>
                    <option value="0-100">0 – 100</option>
                    <option value="100-1k">100 – 1K</option>
                    <option value="1k-10k">1K – 10K</option>
                    <option value="10k-100k">10K – 100K</option>
                    <option value="100k+">100K+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mainGoal" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Main goal *</label>
                  <select id="mainGoal" name="mainGoal" required value={formState.mainGoal} onChange={handleChange} className={inputCls}>
                    <option value="">Select…</option>
                    <option value="grow-subs">Grow Subscribers</option>
                    <option value="views">Increase Views</option>
                    <option value="monetization">Monetization</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="strategy">Content Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Tell us more *</label>
                <textarea id="message" name="message" rows={5} required value={formState.message} onChange={handleChange} className={inputCls} placeholder="Niche, current challenges, what you want to achieve…" />
              </div>
              <button type="submit" disabled={isSubmitting || isSubmitted} className="btn-coral w-full h-14 text-base">
                {isSubmitting ? "Sending…" : isSubmitted ? (<><CheckCircle2 className="h-5 w-5" /> Request Sent</>) : (<><SendIcon className="h-5 w-5" /> Book Free Consultation <ArrowUpRight className="h-5 w-5" /></>)}
              </button>
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground text-center">
                Reply within 24 hours · Includes channel audit
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section className="py-20 bg-background border-t border-foreground/10">
        <div className="container px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15 rounded-2xl overflow-hidden">
            <a href="tel:+919517459072" className="bg-background p-8 flex items-center gap-5 hover:bg-secondary/40 transition-colors">
              <Phone className="h-7 w-7 text-coral" strokeWidth={1.5} />
              <div>
                <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Direct call</div>
                <div className="display-serif text-xl text-foreground mt-1">+91 95174 59072</div>
              </div>
            </a>
            <a href="mailto:Marketing@infridetsolutions.com" className="bg-background p-8 flex items-center gap-5 hover:bg-secondary/40 transition-colors">
              <Mail className="h-7 w-7 text-coral" strokeWidth={1.5} />
              <div>
                <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Email</div>
                <div className="display-serif text-base text-foreground mt-1">Marketing@infridetsolutions.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TalkToGyan;
