
import React, { Suspense, lazy } from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustedBrandsSection from "@/components/home/TrustedBrandsSection";
import PortfolioHighlights from "@/components/home/PortfolioHighlights";

// Lazy load non-critical sections
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));
const StatsSection = lazy(() => import("@/components/home/StatsSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBrandsSection />
      <PortfolioHighlights />
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <ServicesSection />
        <StatsSection />
        <CTASection />
      </Suspense>
    </Layout>
  );
};

export default Index;
