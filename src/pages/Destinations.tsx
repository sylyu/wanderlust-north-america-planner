
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegionTabs from "../components/destinations/RegionTabs";
import { destinations } from "../data/destinations";

const Destinations = () => {
  const [activeRegion, setActiveRegion] = useState<string>("all");
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  // If there's a search query, find its region and set it as active
  useEffect(() => {
    if (searchQuery) {
      const foundDestination = destinations.find(
        (dest) => dest.name.toLowerCase() === searchQuery.toLowerCase()
      );
      
      if (foundDestination) {
        setActiveRegion(foundDestination.region);
      }
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-wanderlust-blue py-20 px-4">
          <div className="container mx-auto max-w-screen-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {searchQuery ? `Discover ${searchQuery}` : "Favorite Destinations"}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {searchQuery
                ? `Explore vacation packages and group tours to ${searchQuery}`
                : "Explore our most popular destinations for unforgettable group trips and adventures."}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto max-w-screen-xl py-12 px-4">
          <RegionTabs 
            activeRegion={activeRegion} 
            onRegionChange={setActiveRegion}
            destinations={destinations}
            searchQuery={searchQuery} 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
