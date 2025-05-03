
import React, { Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

// Simple fallback for lazy-loaded components
const Fallback = () => <div className="p-8 flex justify-center">Loading...</div>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<Fallback />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
