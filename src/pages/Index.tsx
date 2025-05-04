
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import DestinationSection from "../components/DestinationSection";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  // Create a ref for the bottom section
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom section
  const scrollToBottom = () => {
    bottomSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero onSeePopulationsClick={scrollToBottom} />
        <FeatureSection />
        <DestinationSection />
        <HowItWorks />
        <div ref={bottomSectionRef}>
          <CTASection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
