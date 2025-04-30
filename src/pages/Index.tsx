
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import DestinationSection from "../components/DestinationSection";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <FeatureSection />
        <DestinationSection />
        <HowItWorks />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
