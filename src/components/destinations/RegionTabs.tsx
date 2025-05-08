import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Globe, MapPin, Building, Landmark } from "lucide-react";
import DestinationGrid from "./DestinationGrid";
import { type Destination } from "./DestinationCard";

interface RegionTabsProps {
  activeRegion: string;
  onRegionChange: (region: string) => void;
  destinations: Destination[];
  searchQuery?: string | null;
}

const RegionTabs = ({ activeRegion, onRegionChange, destinations, searchQuery }: RegionTabsProps) => {
  // Filter destinations based on search query if one exists
  const filteredDestinations = searchQuery
    ? destinations.filter(d => d.name.toLowerCase() === searchQuery.toLowerCase())
    : destinations;

  return (
    <Tabs defaultValue={activeRegion} value={activeRegion} className="mb-8" onValueChange={onRegionChange}>
      <TabsList className="mb-6 w-full flex justify-between">
        <TabsTrigger 
          value="all"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Globe className="mr-2 h-4 w-4" />
          All Destinations
        </TabsTrigger>
        <TabsTrigger 
          value="east-asia"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Building className="mr-2 h-4 w-4" />
          East Asia
        </TabsTrigger>
        <TabsTrigger 
          value="western-europe"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Landmark className="mr-2 h-4 w-4" />
          Western Europe
        </TabsTrigger>
        <TabsTrigger 
          value="caribbean"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <MapPin className="mr-2 h-4 w-4" />
          Caribbean
        </TabsTrigger>
        <TabsTrigger 
          value="pacific"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Building className="mr-2 h-4 w-4" />
          Pacific Islands
        </TabsTrigger>
        <TabsTrigger 
          value="north-america"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <MapPin className="mr-2 h-4 w-4" />
          North America
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="all">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="all" />
      </TabsContent>
      
      <TabsContent value="east-asia">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="east-asia" />
      </TabsContent>
      
      <TabsContent value="western-europe">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="western-europe" />
      </TabsContent>
      
      <TabsContent value="caribbean">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="caribbean" />
      </TabsContent>

      <TabsContent value="pacific">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="pacific" />
      </TabsContent>

      <TabsContent value="north-america">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="north-america" />
      </TabsContent>
    </Tabs>
  );
};

export default RegionTabs;
