
import React, { lazy, Suspense } from "react";

// Lazy load VideoTestimonials 
const VideoTestimonials = lazy(() => import("@/components/shared/VideoTestimonials"));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="py-16 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const TestimonialsSection = () => {
  // Passing showHeading false to avoid duplicate "SUCCESS STORIES" heading on homepage
  return (
    <Suspense fallback={<LoadingFallback />}>
      <VideoTestimonials showHeading={false} />
    </Suspense>
  );
};

export default TestimonialsSection;
