
import React from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import TrustedBrandsSection from "@/components/home/TrustedBrandsSection";
import ShowcaseSections from "@/components/home/ShowcaseSections";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBrandsSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <ShowcaseSections />
      <CTASection />
    </Layout>
  );
};

export default Index;
