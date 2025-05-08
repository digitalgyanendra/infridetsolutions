
import React from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TrustedBrandsSection from "@/components/home/TrustedBrandsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBrandsSection />
      <ServicesSection />
      <StatsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
