import React, { lazy, Suspense } from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustedBrandsSection from "@/components/home/TrustedBrandsSection";
import SEOHead from "@/components/seo/SEOHead";
import SchemaData, { getOrganizationSchema, getWebsiteSchema } from "@/components/seo/SchemaData";

const ManifestoSection = lazy(() => import("@/components/home/ManifestoSection"));
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));
const StatsSection = lazy(() => import("@/components/home/StatsSection"));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection"));
const CertificationsSection = lazy(() => import("@/components/home/CertificationsSection"));
const AwardsSection = lazy(() => import("@/components/home/AwardsSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const LoadingFallback = () => (
  <div className="py-20 flex justify-center">
    <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Infridet Solutions — We don't grow channels. We build empires."
        description="43M+ subscribers. 6.5B+ views. 500+ creators coached. Book your free 15-min YouTube strategy call with Gyan Dwivedi."
        keywords={["YouTube growth", "creator agency", "Gyan Dwivedi", "channel management", "Infridet Solutions", "YouTube SEO"]}
      />
      <SchemaData type="Organization" data={getOrganizationSchema()} />
      <SchemaData type="WebSite" data={getWebsiteSchema()} />

      <HeroSection />
      <TrustedBrandsSection />
      <Suspense fallback={<LoadingFallback />}>
        <ManifestoSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AwardsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CertificationsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CTASection />
      </Suspense>
    </Layout>
  );
};

export default Index;
