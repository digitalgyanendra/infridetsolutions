
import React, { lazy, Suspense } from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import TrustedBrandsSection from "@/components/home/TrustedBrandsSection";
import SEOHead from "@/components/seo/SEOHead";
import SchemaData, { getOrganizationSchema, getWebsiteSchema } from "@/components/seo/SchemaData";
import HydraAutomationForm from "@/components/shared/HydraAutomationForm";

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
      <SEOHead 
        title="Home" 
        description="Infridet Solutions - Empowering digital creators and businesses with expert YouTube growth strategies, SEO, and product growth solutions."
        keywords={["YouTube growth", "digital marketing", "SEO", "content strategy", "channel management", "digital solutions", "Infridet Solutions"]}
      />
      
      {/* Add structured data for rich results */}
      <SchemaData type="Organization" data={getOrganizationSchema()} />
      <SchemaData type="WebSite" data={getWebsiteSchema()} />
      
      <HeroSection />
      <CertificationsSection />
      <TrustedBrandsSection />
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <StatsSection />
      </Suspense>
      <HydraAutomationForm />
      <Suspense fallback={<LoadingFallback />}>
        <CTASection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection />
      </Suspense>
    </Layout>
  );
};

export default Index;
