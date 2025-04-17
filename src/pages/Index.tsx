
import React from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TrustedBrandsSection from "@/components/home/TrustedBrandsSection";
import ShowcaseSections from "@/components/home/ShowcaseSections";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBrandsSection />
      <ServicesSection />
      {/* Removed TestimonialsSection */}
      <StatsSection />
      <ShowcaseSections />
      <CTASection />
    </Layout>
  );
};

export default Index;
