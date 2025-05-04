
import DestinationCard from "./DestinationCard";
import { TabsContent } from "@/components/ui/tabs";
import { type Destination } from "./DestinationCard";

interface DestinationGridProps {
  destinations: Destination[];
}

const DestinationGrid = ({ destinations }: DestinationGridProps) => {
  return (
    <>
      <TabsContent value="all" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="North America" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="Europe" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="Asia" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </TabsContent>
    </>
  );
};

export default DestinationGrid;
