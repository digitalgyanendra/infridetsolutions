
import React, { lazy, Suspense } from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/portfolio/HeroSection";
import HydraAutomationForm from "@/components/shared/HydraAutomationForm";

// Lazy loaded components
const PartnershipsSection = lazy(() => import("@/components/portfolio/PartnershipsSection"));
const ManagedChannelsSection = lazy(() => import("@/components/portfolio/ManagedChannelsSection"));
const CommitmentsSection = lazy(() => import("@/components/portfolio/CommitmentsSection"));
const SupportersSection = lazy(() => import("@/components/portfolio/SupportersSection"));
const WorkedWithSection = lazy(() => import("@/components/portfolio/WorkedWithSection"));
const VideoTestimonials = lazy(() => import("@/components/shared/VideoTestimonials"));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="py-16 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Portfolio = () => {
  return (
    <Layout>
      <HeroSection />
      <Suspense fallback={<LoadingFallback />}>
        <PartnershipsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ManagedChannelsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CommitmentsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <SupportersSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <WorkedWithSection />
      </Suspense>
      <HydraAutomationForm />
      <Suspense fallback={<LoadingFallback />}>
        <VideoTestimonials />
      </Suspense>
    </Layout>
  );
};

export default Portfolio;
