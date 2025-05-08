
import DestinationCard from "./DestinationCard";
import { type Destination } from "./DestinationCard";

interface DestinationGridProps {
  destinations: Destination[];
  region: string;
}

const DestinationGrid = ({ destinations, region }: DestinationGridProps) => {
  // Define sun destinations (places with beaches, warm climate)
  const sunDestinations = ["Cancun", "Maui", "Jamaica"];
  
  // Define snow destinations (places with winter activities, cold climate)
  const snowDestinations = ["Vancouver"];
  
  // Filter destinations based on region
  let filteredDestinations = destinations;
  
  if (region === "sun") {
    filteredDestinations = destinations.filter(dest => 
      sunDestinations.includes(dest.name)
    );
  } else if (region === "snow") {
    filteredDestinations = destinations.filter(dest => 
      snowDestinations.includes(dest.name)
    );
  } else if (region !== "all") {
    filteredDestinations = destinations.filter(dest => 
      dest.region === region
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredDestinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationGrid;
