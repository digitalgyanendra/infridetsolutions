
import React, { Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
}

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
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
