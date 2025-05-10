
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Globe, MapPin, Building, Navigation, Plane } from "lucide-react";
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
    ? destinations.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : destinations;

  return (
    <Tabs defaultValue={activeRegion} value={activeRegion} className="mb-8" onValueChange={onRegionChange}>
      <TabsList className="mb-6 w-full flex flex-wrap justify-between">
        <TabsTrigger 
          value="all"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Globe className="mr-2 h-4 w-4" />
          All Airports
        </TabsTrigger>
        <TabsTrigger 
          value="north-america"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Plane className="mr-2 h-4 w-4" />
          North America
        </TabsTrigger>
        <TabsTrigger 
          value="europe"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <MapPin className="mr-2 h-4 w-4" />
          Europe
        </TabsTrigger>
        <TabsTrigger 
          value="asia"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Building className="mr-2 h-4 w-4" />
          Asia
        </TabsTrigger>
        <TabsTrigger 
          value="middle-east"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Navigation className="mr-2 h-4 w-4" />
          Middle East
        </TabsTrigger>
        <TabsTrigger 
          value="oceania"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <MapPin className="mr-2 h-4 w-4" />
          Oceania
        </TabsTrigger>
        <TabsTrigger 
          value="south-america"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <MapPin className="mr-2 h-4 w-4" />
          South America
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="all">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="all" />
      </TabsContent>
      
      <TabsContent value="north-america">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="north-america" />
      </TabsContent>
      
      <TabsContent value="europe">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="europe" />
      </TabsContent>
      
      <TabsContent value="asia">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="asia" />
      </TabsContent>

      <TabsContent value="middle-east">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="middle-east" />
      </TabsContent>

      <TabsContent value="oceania">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="oceania" />
      </TabsContent>

      <TabsContent value="south-america">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="south-america" />
      </TabsContent>
    </Tabs>
  );
};

export default RegionTabs;
