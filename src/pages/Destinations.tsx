
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegionTabs from "../components/destinations/RegionTabs";
import DestinationGrid from "../components/destinations/DestinationGrid";
import { destinations } from "../data/destinations";

const Destinations = () => {
  const [activeRegion, setActiveRegion] = useState<string>("all");
  
  const filteredDestinations = activeRegion === "all" 
    ? destinations 
    : destinations.filter(dest => dest.region === activeRegion);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-wanderlust-blue py-20 px-4">
          <div className="container mx-auto max-w-screen-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Favorite Destinations</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore our most popular destinations for unforgettable group trips and adventures.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto max-w-screen-xl py-12 px-4">
          <RegionTabs 
            activeRegion={activeRegion} 
            onRegionChange={setActiveRegion}
          />
          <DestinationGrid destinations={filteredDestinations} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
