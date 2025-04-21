import React from "react";
import Layout from "@/components/ui/layout/Layout";
import SupportersGrid from "@/components/shared/SupportersGrid";
import VideoTestimonials from "@/components/shared/VideoTestimonials";
import HeroSection from "@/components/about/HeroSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import OwnerSection from "@/components/about/OwnerSection";

const About = () => {
  return (
    <Layout>
      <HeroSection />
      <OwnerSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <SupportersGrid columns={2} />
      <VideoTestimonials />
    </Layout>
  );
};

export default About;
