import React from "react";
import Layout from "@/components/ui/layout/Layout";
import SupportersGrid from "@/components/shared/SupportersGrid";
import VideoTestimonials from "@/components/shared/VideoTestimonials";
import WorkedWithSection from "@/components/portfolio/WorkedWithSection";
import HeroSection from "@/components/about/HeroSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import TeamSection from "@/components/about/TeamSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";

// This is a simplified version assuming About.tsx already exists and has other content
const About = () => {
  return (
    <Layout>
      <HeroSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <TeamSection />
      
      <SupportersGrid columns={2} />
      <WorkedWithSection />
      <VideoTestimonials />
      
    </Layout>
  );
};

export default About;
