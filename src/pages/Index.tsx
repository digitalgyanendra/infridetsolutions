
import React, { Suspense, lazy } from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";

// Simple loading fallback
const LoadingFallback = () => <div className="py-12 text-center">Loading...</div>;

// Lazy load non-critical sections
const TrustedBrandsSection = lazy(() => import("@/components/home/TrustedBrandsSection"));
const PortfolioHighlights = lazy(() => import("@/components/home/PortfolioHighlights"));
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));
const StatsSection = lazy(() => import("@/components/home/StatsSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <Suspense fallback={<LoadingFallback />}>
        <TrustedBrandsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <PortfolioHighlights />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
        <StatsSection />
        <CTASection />
      </Suspense>
    </Layout>
  );
};

export default Index;
