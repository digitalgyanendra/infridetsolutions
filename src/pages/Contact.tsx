import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { Phone, Mail, MapPin, SendIcon, CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const WHATSAPP_URL =
  "https://wa.me/919517459072?text=Hi%20Gyan%2C%20I%20want%20my%20FREE%2015-min%20YouTube%20strategy%20call.";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = React.useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, email, phone, subject, message } = formState;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ASubject: ${subject}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:Marketing@infridetsolutions.com?subject=${encodeURIComponent(subject || "Contact Form Inquiry")}&body=${body}`;
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({ title: "Email client opened", description: "Send the email from your mail app to complete." });
      setTimeout(() => {
        setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
        setIsSubmitted(false);
      }, 2000);
    }, 800);
  };

  const inputCls =
    "w-full bg-background border border-foreground/20 rounded-xl py-3.5 px-4 text-foreground focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-background border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-32 left-1/3 w-[420px] h-[420px] rounded-full bg-coral/15 blur-3xl pointer-events-none" />

        <div className="container relative z-10 px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="flex items-center justify-between mb-16 pb-6 border-b border-foreground/15">
            <span className="eyebrow">Vol. 06 — The Direct Line</span>
            <span className="eyebrow">Reply within 24 hours</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="headline-xl text-foreground text-balance max-w-5xl"
          >
            Talk to <em className="italic font-light text-coral">us.</em>
          </motion.h1>
          <p className="mt-10 text-xl md:text-2xl text-foreground/80 font-serif italic max-w-2xl leading-snug">
            WhatsApp is fastest. Email works. Phone if you're old-school.
            We answer all three — usually within hours.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-coral h-14 px-7">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now (Fastest)
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </a>
            <a href="tel:+919517459072">
              <button className="btn-ghost-ink h-14 px-7">+91 95174 59072</button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="py-24 bg-background border-t border-foreground/10">
        <div className="container px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky lg:top-24 self-start"
            >
              <span className="eyebrow">§ Reach us</span>
              <h2 className="display-serif text-4xl md:text-5xl mt-4 text-foreground leading-[0.95]">
                Three ways
                <br />
                <em className="italic font-light text-coral">to reach.</em>
              </h2>

              <div className="mt-10 space-y-6">
                {[
                  { Icon: MapPin, t: "Studio", v: "Mahagun Mantra 1, Sector 10, Noida, UP" },
                  { Icon: Phone, t: "Phone / WhatsApp", v: "+91 95174 59072", href: "tel:+919517459072" },
                  { Icon: Mail, t: "Email", v: "Marketing@infridetsolutions.com", href: "mailto:Marketing@infridetsolutions.com" },
                ].map(({ Icon, t, v, href }) => (
                  <div key={t} className="flex items-start gap-5 pb-6 border-b border-foreground/15">
                    <Icon className="h-6 w-6 text-coral mt-1 shrink-0" strokeWidth={1.5} />
                    <div>
                      <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">{t}</div>
                      {href ? (
                        <a href={href} className="text-lg text-foreground hover:text-coral">{v}</a>
                      ) : (
                        <div className="text-lg text-foreground">{v}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="editorial-card p-8 md:p-10">
                <h3 className="display-serif text-2xl text-foreground mb-2">Send us a message</h3>
                <p className="text-sm text-muted-foreground mb-8">Opens your default mail app pre-filled.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Name</label>
                      <input id="name" name="name" type="text" required value={formState.name} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Email</label>
                      <input id="email" name="email" type="email" required value={formState.email} onChange={handleChange} className={inputCls} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Phone</label>
                      <input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="subject" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Subject</label>
                      <select id="subject" name="subject" required value={formState.subject} onChange={handleChange} className={inputCls}>
                        <option value="">Select…</option>
                        <option value="general">General Inquiry</option>
                        <option value="youtube">YouTube Consultation</option>
                        <option value="seo">SEO Services</option>
                        <option value="brand">Brand Growth</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} required value={formState.message} onChange={handleChange} className={inputCls} />
                  </div>
                  <button type="submit" disabled={isSubmitting || isSubmitted} className="btn-coral w-full h-14 text-base">
                    {isSubmitting ? "Opening mail…" : isSubmitted ? (<><CheckCircle2 className="h-5 w-5" /> Sent</>) : (<><SendIcon className="h-5 w-5" /> Send Message <ArrowUpRight className="h-5 w-5" /></>)}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-20 bg-secondary/40 border-t border-foreground/10">
        <div className="container px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-10">
            <div className="md:col-span-4"><span className="eyebrow">§ Working hours</span></div>
            <div className="md:col-span-8">
              <h2 className="display-serif text-3xl md:text-5xl text-foreground leading-[0.95]">
                When we're <em className="italic font-light text-coral">live.</em>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15 rounded-2xl overflow-hidden">
            {[
              { d: "Mon – Fri", h: "9:00 — 18:00" },
              { d: "Saturday", h: "10:00 — 16:00" },
              { d: "Sunday", h: "Closed" },
              { d: "Holidays", h: "By appointment" },
            ].map((s) => (
              <div key={s.d} className="bg-background p-6">
                <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.d}</div>
                <div className="display-serif text-xl text-foreground mt-2">{s.h}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
