
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
        <div className="container mx-auto max-w-screen-xl py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-wanderlust-charcoal mb-4">
            {searchQuery ? `Discover ${searchQuery}` : "Favorite Destinations"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            {searchQuery
              ? `Explore vacation packages and group tours to ${searchQuery}`
              : "Explore our most popular destinations for unforgettable group trips and adventures."}
          </p>
          
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
