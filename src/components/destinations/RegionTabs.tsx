
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Globe, Sun, Snowflake } from "lucide-react";
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
          All Regions
        </TabsTrigger>
        <TabsTrigger 
          value="North America"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          North America
        </TabsTrigger>
        <TabsTrigger 
          value="Europe"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          Europe
        </TabsTrigger>
        <TabsTrigger 
          value="Asia"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          Asia
        </TabsTrigger>
        <TabsTrigger 
          value="sun"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Sun className="mr-2 h-4 w-4" />
          Sun
        </TabsTrigger>
        <TabsTrigger 
          value="snow"
          className="flex-1 data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Snowflake className="mr-2 h-4 w-4" />
          Snow
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="all">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="all" />
      </TabsContent>
      
      <TabsContent value="North America">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="North America" />
      </TabsContent>
      
      <TabsContent value="Europe">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="Europe" />
      </TabsContent>
      
      <TabsContent value="Asia">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="Asia" />
      </TabsContent>

      <TabsContent value="sun">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="sun" />
      </TabsContent>

      <TabsContent value="snow">
        <DestinationGrid destinations={searchQuery ? filteredDestinations : destinations} region="snow" />
      </TabsContent>
    </Tabs>
  );
};

export default RegionTabs;
