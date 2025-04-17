
import React from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/portfolio/HeroSection";
import PartnershipsSection from "@/components/portfolio/PartnershipsSection";
import ManagedChannelsSection from "@/components/portfolio/ManagedChannelsSection";
import CommitmentsSection from "@/components/portfolio/CommitmentsSection";
import SupportersSection from "@/components/portfolio/SupportersSection";
import WorkedWithSection from "@/components/portfolio/WorkedWithSection";

const Portfolio = () => {
  return (
    <Layout>
      <HeroSection />
      <PartnershipsSection />
      <ManagedChannelsSection />
      <CommitmentsSection />
      <SupportersSection />
      <WorkedWithSection />
    </Layout>
  );
};

export default Portfolio;
