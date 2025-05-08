
import DestinationCard from "./DestinationCard";
import { type Destination } from "./DestinationCard";

interface DestinationGridProps {
  destinations: Destination[];
  region: string;
}

const DestinationGrid = ({ destinations, region }: DestinationGridProps) => {
  // Define regional categories with specific destinations
  const eastAsiaDestinations = ["Japan", "South Korea", "China"];
  const westernEuropeDestinations = ["London", "France", "Italy"];
  const caribbeanDestinations = ["Jamaica", "Cancun"];
  const pacificDestinations = ["Maui"];
  const northAmericaDestinations = ["Vancouver"];
  
  // Filter destinations based on region
  let filteredDestinations = destinations;
  
  if (region === "east-asia") {
    filteredDestinations = destinations.filter(dest => 
      eastAsiaDestinations.includes(dest.name)
    );
  } else if (region === "western-europe") {
    filteredDestinations = destinations.filter(dest => 
      westernEuropeDestinations.includes(dest.name)
    );
  } else if (region === "caribbean") {
    filteredDestinations = destinations.filter(dest => 
      caribbeanDestinations.includes(dest.name)
    );
  } else if (region === "pacific") {
    filteredDestinations = destinations.filter(dest => 
      pacificDestinations.includes(dest.name)
    );
  } else if (region === "north-america") {
    filteredDestinations = destinations.filter(dest => 
      northAmericaDestinations.includes(dest.name)
    );
  } else if (region !== "all") {
    // Fallback for any regions that might still use the original region property
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
