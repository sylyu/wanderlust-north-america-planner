
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import DestinationSection from "../components/DestinationSection";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  // Create a ref for the destinations section
  const destinationSectionRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the destinations section
  const scrollToDestinations = () => {
    destinationSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero onSeePopulationsClick={scrollToDestinations} />
        <FeatureSection />
        <div ref={destinationSectionRef}>
          <DestinationSection />
        </div>
        <HowItWorks />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
