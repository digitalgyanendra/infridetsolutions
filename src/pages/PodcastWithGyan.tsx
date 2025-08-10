
import React from "react";
import Layout from "@/components/ui/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import SchemaData from "@/components/seo/SchemaData";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TrustedBrandsSection from "@/components/home/TrustedBrandsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { Link } from "react-router-dom";
import { Mic2, Sparkles, Brain, Users, Trophy } from "lucide-react";

const PodcastWithGyan: React.FC = () => {
  const canonical = "https://infridetsolutions.com/podcast-with-gyan";

  const articleSchema = {
    headline: "Why Podcast with Gyan – Strategic Conversations that Grow Brands",
    description:
      "Partner with Gyan Dwivedi for high-impact podcasts that blend storytelling, AI insights, and proven growth strategies trusted by top brands and creators.",
    author: {
      "@type": "Person",
      name: "Gyan Dwivedi",
      url: "https://infridetsolutions.com/about-gyan",
    },
    mainEntityOfPage: canonical,
    image: "https://infridetsolutions.com/lovable-uploads/3a1238bf-43d7-4308-b873-3d789a424e88.png",
    publisher: {
      "@type": "Organization",
      name: "Infridet Solutions Private Limited",
      logo: {
        "@type": "ImageObject",
        url: "https://infridetsolutions.com/lovable-uploads/caf97257-1ebc-4af4-8824-692b84108c22.png",
      },
    },
  };

  const highlights = [
    {
      icon: Brain,
      title: "AI-Led Format",
      desc: "Unique prompts, narrative structure, and insights powered by AI automations and data-driven research.",
    },
    {
      icon: Users,
      title: "Audience Fit",
      desc: "Positioning and hooks crafted for your niche so every episode converts viewers into loyal followers.",
    },
    {
      icon: Trophy,
      title: "Proven Playbooks",
      desc: "Backed by 6.5B+ views and 43M+ subs impact across creators, brands, and educators in India.",
    },
    {
      icon: Sparkles,
      title: "Brand Uplift",
      desc: "Strategic storytelling that elevates authority and opens doors to partnerships and monetization.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Why Podcast with Gyan – Strategic Brand Growth"
        description="Launch a high-impact podcast with Gyan Dwivedi. Blend AI strategy, storytelling, and growth systems trusted by top creators and brands."
        canonicalUrl={canonical}
        ogType="article"
        keywords={[
          "Podcast with Gyan",
          "Gyan Dwivedi podcast",
          "Infridet Solutions podcast",
          "AI podcast strategy",
          "YouTube podcast growth",
        ]}
      />

      <SchemaData type="Article" data={articleSchema} />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto grid gap-10 md:gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-5">
                Why You Should Podcast with Gyan
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Create a podcast that people can’t say no to. We merge <strong>AI expertise</strong>,
                <strong> YouTube growth systems</strong>, and <strong>brand storytelling</strong> to
                deliver episodes that resonate and drive real outcomes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/talk-to-gyan">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    <Mic2 className="w-4 h-4 mr-2" /> Book a Discovery Call
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" className="border-orange-500/50 hover:bg-orange-500/10">
                    See Impact Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className="justify-self-center">
              <div className="relative">
                <img
                  src="/lovable-uploads/3a1238bf-43d7-4308-b873-3d789a424e88.png"
                  alt="Gyan Dwivedi – Podcast host and growth strategist"
                  className="w-[480px] max-w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                  width={480}
                  height={480}
                  decoding="async"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <Mic2 className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Embed */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto glass-card p-4 md:p-6 rounded-xl border border-gray-200/40">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Sample Podcast Episode</h2>
              <p className="text-gray-600 mb-4">
                Get a feel for the tone, pacing, and depth of conversations you can expect on
                the show.
              </p>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/5aIvndFaFmE"
                  title="Podcast with Gyan – Sample Episode"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-10">
              What Makes This Podcast Different
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-gray-200/40">
                  <h.icon className="w-10 h-10 text-orange-500 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{h.title}</h3>
                  <p className="text-gray-600">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
              Trusted by Brands Worldwide
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              We’ve partnered with industry leaders to build authority and accelerate growth
              across platforms.
            </p>
            <TrustedBrandsSection />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 mx-auto">
            <TestimonialsSection />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Ready to Create a Podcast People Can’t Ignore?
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Let’s craft a show format that amplifies your expertise, brand, and audience
              growth—powered by AI and proven YouTube systems.
            </p>
            <Link to="/talk-to-gyan">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Start the Conversation
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PodcastWithGyan;
