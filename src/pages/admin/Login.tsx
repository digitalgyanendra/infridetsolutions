import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, DEMO_CREDENTIALS } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowUpRight, Lock, Mail, ShieldCheck, Sparkles, Copy, Check } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { adminDirectAccess, isAdmin, isLoading, user } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState<"u" | "p" | null>(null);
  const showDemo = DEMO_CREDENTIALS.enabled();

  useEffect(() => {
    if (user && isAdmin) navigate("/admin");
  }, [user, isAdmin, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const fillDemo = () => {
    setFormData({ username: DEMO_CREDENTIALS.username, password: DEMO_CREDENTIALS.password });
  };

  const copyText = async (text: string, key: "u" | "p") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      toast({
        title: "Missing fields",
        description: "Enter your username/email and password.",
        variant: "destructive",
      });
      return;
    }
    setBusy(true);
    try {
      const ok = await adminDirectAccess(formData.username, formData.password);
      if (ok) navigate("/admin");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative blooms */}
      <div className="pointer-events-none absolute -top-40 -right-32 w-[480px] h-[480px] rounded-full bg-coral/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 w-[440px] h-[440px] rounded-full bg-foreground/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-12">
        {/* === LEFT: editorial brand panel === */}
        <aside className="hidden lg:flex lg:col-span-5 xl:col-span-6 relative bg-foreground text-background flex-col justify-between p-12 xl:p-16">
          <Link to="/" className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.25em] text-background/60 hover:text-coral transition">
            <ArrowLeft size={14} /> Back to site
          </Link>

          <div>
            <span className="inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.25em] text-coral">
              <Sparkles size={12} /> § Admin console
            </span>
            <h1 className="display-serif text-5xl xl:text-6xl mt-6 leading-[0.95] tracking-tight">
              Welcome back
              <br />
              <em className="italic font-light text-coral">operator.</em>
            </h1>
            <p className="mt-6 text-background/70 max-w-sm font-serif italic text-lg leading-snug">
              Manage posts, courses, creators & receipts — the engine room of Infridet Solutions.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "43M+", l: "Subscribers" },
                { v: "6.5B+", l: "Views" },
                { v: "500+", l: "Creators" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="display-serif text-2xl xl:text-3xl text-coral">{s.v}</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-background/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mono text-[10px] uppercase tracking-[0.2em] text-background/40 flex items-center gap-2">
            <ShieldCheck size={12} className="text-coral" /> Encrypted · admin-only · session expires in 24h
          </div>
        </aside>

        {/* === RIGHT: form === */}
        <main className="lg:col-span-7 xl:col-span-6 flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md">
            <Link to="/" className="lg:hidden inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-coral transition mb-8">
              <ArrowLeft size={14} /> Back to site
            </Link>

            <span className="mono text-[11px] uppercase tracking-[0.25em] text-coral">§ 01 / Sign in</span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="display-serif text-4xl md:text-5xl text-foreground leading-[0.95] tracking-tight mt-3"
            >
              Admin login.
            </motion.h2>
            <p className="mt-3 text-muted-foreground">
              Use your admin credentials. Sessions are signed & expire in 24 hours.
            </p>

            {showDemo && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-6 rounded-2xl border border-coral/30 bg-coral/5 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-coral font-bold">
                    ✦ Demo mode (preview)
                  </div>
                  <button
                    type="button"
                    onClick={fillDemo}
                    className="mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-coral text-white hover:bg-coral/90 transition"
                  >
                    Fill auto →
                  </button>
                </div>

                <div className="mt-4 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between gap-2 bg-background border border-foreground/10 rounded-lg px-3 py-2">
                    <span className="text-foreground/90 truncate">{DEMO_CREDENTIALS.username}</span>
                    <button
                      type="button"
                      onClick={() => copyText(DEMO_CREDENTIALS.username, "u")}
                      className="text-muted-foreground hover:text-coral transition shrink-0"
                      aria-label="Copy username"
                    >
                      {copied === "u" ? <Check size={14} className="text-coral" /> : <Copy size={14} />}
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-2 bg-background border border-foreground/10 rounded-lg px-3 py-2">
                    <span className="text-foreground/90 truncate">{DEMO_CREDENTIALS.password}</span>
                    <button
                      type="button"
                      onClick={() => copyText(DEMO_CREDENTIALS.password, "p")}
                      className="text-muted-foreground hover:text-coral transition shrink-0"
                      aria-label="Copy password"
                    >
                      {copied === "p" ? <Check size={14} className="text-coral" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-muted-foreground leading-snug">
                  Demo creds work only on preview / localhost. Production uses the real PHP backend.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="username" className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Username or email
                </label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    autoComplete="username"
                    placeholder="admin@infridet.com"
                    className="pl-10 h-12 rounded-xl bg-background border-foreground/15 focus-visible:border-coral focus-visible:ring-coral/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Password
                </label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                    placeholder="••••••••••"
                    className="pl-10 h-12 rounded-xl bg-background border-foreground/15 focus-visible:border-coral focus-visible:ring-coral/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || busy || !formData.username || !formData.password}
                className="btn-coral w-full h-13 px-6 text-base disabled:opacity-50 disabled:cursor-not-allowed group"
                style={{ height: 52 }}
              >
                {busy ? "Signing in…" : "Access dashboard"}
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>

            <div className="mt-10 pt-6 border-t border-foreground/10 mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2">
              <ShieldCheck size={12} className="text-coral" />
              All actions are logged · 24-hour signed session
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLogin;
