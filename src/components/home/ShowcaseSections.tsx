
import React, { lazy, Suspense } from "react";

// Lazy loaded components
const VideoTestimonials = lazy(() => import("@/components/shared/VideoTestimonials"));
const WorkedWithSection = lazy(() => import("@/components/portfolio/WorkedWithSection"));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="py-16 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ShowcaseSections = () => {
  return (
    <>
      {/* Video Testimonials */}
      <Suspense fallback={<LoadingFallback />}>
        <VideoTestimonials />
      </Suspense>
      
      {/* Worked With section */}
      <Suspense fallback={<LoadingFallback />}>
        <WorkedWithSection />
      </Suspense>
    </>
  );
};

export default ShowcaseSections;
