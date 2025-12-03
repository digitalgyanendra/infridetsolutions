import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const WEBHOOK_URL = "https://satyam3112.app.n8n.cloud/webhook/lead-capture";

const HydraAutomationForm: React.FC = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    industry: "",
    budgetRange: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.fullName.trim() || !formState.email.trim()) {
      setStatus({ type: "error", message: "Full Name and Email are required." });
      return;
    }

    const payload = {
      fullName: formState.fullName.trim(),
      email: formState.email.trim(),
      phone: formState.phone.trim(),
      industry: formState.industry,
      budgetRange: formState.budgetRange,
      requirements: formState.requirements.trim(),
      requirementType: "web-form",
    };

    try {
      setIsSubmitting(true);
      setStatus({ type: "success", message: "Sending your details…" });

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch {}

      if (res.ok && data.success !== false) {
        setStatus({
          type: "success",
          message: data.message || "Thanks! We've received your details and will reply within 24 hours.",
        });
        setFormState({
          fullName: "",
          email: "",
          phone: "",
          industry: "",
          budgetRange: "",
          requirements: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data?.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deepBlue-900/10 to-background pointer-events-none" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-border/50 backdrop-blur-xl relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-deepBlue-500/10 pointer-events-none" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-xs uppercase tracking-wider text-orange-400 mb-4">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 shadow-[0_0_10px_rgba(251,146,60,0.8)]" />
                Hydra • Automation
              </div>

              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                AI Employees That Work 24/7
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Share a few details and we'll get back within <strong className="text-foreground">24 hours</strong> with a tailored automation plan.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground flex justify-between">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formState.fullName}
                    onChange={handleChange}
                    placeholder="Satyam Pandey"
                    required
                    className="w-full rounded-xl border border-border/60 bg-background/60 text-foreground px-3 py-2.5 text-sm outline-none transition-all focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20 placeholder:text-muted-foreground/50"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground flex justify-between">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-border/60 bg-background/60 text-foreground px-3 py-2.5 text-sm outline-none transition-all focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20 placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-border/60 bg-background/60 text-foreground px-3 py-2.5 text-sm outline-none transition-all focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Industry & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Industry</label>
                    <select
                      name="industry"
                      value={formState.industry}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border/60 bg-background/60 text-foreground px-3 py-2.5 text-sm outline-none transition-all focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="">Select industry</option>
                      <option>E-commerce</option>
                      <option>Healthcare</option>
                      <option>Education</option>
                      <option>Real Estate</option>
                      <option>Finance</option>
                      <option>Manufacturing</option>
                      <option>Retail</option>
                      <option>Technology</option>
                      <option>Hospitality</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Budget Range</label>
                    <select
                      name="budgetRange"
                      value={formState.budgetRange}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border/60 bg-background/60 text-foreground px-3 py-2.5 text-sm outline-none transition-all focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="">Select range</option>
                      <option>₹25,000 - ₹50,000</option>
                      <option>₹50,000 - ₹1,00,000</option>
                      <option>₹1,00,000 - ₹2,50,000</option>
                      <option>₹2,50,000 - ₹5,00,000</option>
                      <option>₹5,00,000+</option>
                    </select>
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Requirements / Use Case</label>
                  <textarea
                    name="requirements"
                    value={formState.requirements}
                    onChange={handleChange}
                    placeholder="Tell us what you want to automate – workflows, integrations, chatbots, CRM, etc."
                    rows={3}
                    className="w-full rounded-xl border border-border/60 bg-background/60 text-foreground px-3 py-2.5 text-sm outline-none transition-all focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20 placeholder:text-muted-foreground/50 resize-y min-h-[80px]"
                  />
                  <p className="text-[10px] text-muted-foreground/70">
                    The more context you give, the better we can customise the solution.
                  </p>
                </div>

                {/* Submit */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Send Requirements
                      </>
                    )}
                  </Button>
                  <span className="text-[11px] text-muted-foreground">
                    We'll email you a response & next steps.
                  </span>
                </div>

                {/* Status */}
                {status && (
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs ${
                      status.type === "success"
                        ? "bg-green-500/10 border border-green-500/40 text-green-400"
                        : "bg-red-500/10 border border-red-500/40 text-red-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HydraAutomationForm;
