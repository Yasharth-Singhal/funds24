import React from "react";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Services        from "./components/Services";
import FinancialTools  from "./components/FinancialTools";
import HowItWorks  from "./components/HowItWorks";
import SocialProof from "./components/SocialProof";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FinancialTools />
        <HowItWorks />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
