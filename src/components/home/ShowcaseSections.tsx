
import React from "react";
import SupportersGrid from "@/components/shared/SupportersGrid";
import VideoTestimonials from "@/components/shared/VideoTestimonials";
import WorkedWithSection from "@/components/portfolio/WorkedWithSection";

const ShowcaseSections = () => {
  return (
    <>
      {/* Video Testimonials */}
      <VideoTestimonials />
      
      {/* We worked and learned from them section */}
      <SupportersGrid columns={2} />
      
      {/* Worked With section */}
      <WorkedWithSection />
    </>
  );
};

export default ShowcaseSections;
