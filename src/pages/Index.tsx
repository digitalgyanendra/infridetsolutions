
import React, { lazy, Suspense } from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustedBrandsSection from "@/components/home/TrustedBrandsSection";

// Lazy load non-critical components
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));
const StatsSection = lazy(() => import("@/components/home/StatsSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection"));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="py-16 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBrandsSection />
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CTASection />
      </Suspense>
    </Layout>
  );
};

export default Index;
