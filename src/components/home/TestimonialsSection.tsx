
import React from "react";
import VideoTestimonials from "@/components/shared/VideoTestimonials";

const TestimonialsSection = () => {
  // Passing showHeading false to avoid duplicate "SUCCESS STORIES" heading on homepage
  return <VideoTestimonials showHeading={false} />;
};

export default TestimonialsSection;
