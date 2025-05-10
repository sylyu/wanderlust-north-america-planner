
import DestinationCard from "./DestinationCard";
import { type Destination } from "./DestinationCard";

interface DestinationGridProps {
  destinations: Destination[];
  region: string;
}

const DestinationGrid = ({ destinations, region }: DestinationGridProps) => {
  // Filter destinations based on region
  let filteredDestinations = destinations;
  
  if (region !== "all") {
    filteredDestinations = destinations.filter(dest => 
      dest.region.toLowerCase() === region.replace("-", " ")
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
