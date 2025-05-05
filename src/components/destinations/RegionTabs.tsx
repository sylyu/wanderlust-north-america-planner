
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Globe } from "lucide-react";
import DestinationGrid from "./DestinationGrid";
import { type Destination } from "./DestinationCard";

interface RegionTabsProps {
  activeRegion: string;
  onRegionChange: (region: string) => void;
  destinations: Destination[];
}

const RegionTabs = ({ activeRegion, onRegionChange, destinations }: RegionTabsProps) => {
  return (
    <Tabs defaultValue={activeRegion} className="mb-8" onValueChange={onRegionChange}>
      <TabsList className="mb-6">
        <TabsTrigger 
          value="all"
          className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Globe className="mr-2 h-4 w-4" />
          All Regions
        </TabsTrigger>
        <TabsTrigger 
          value="North America"
          className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          North America
        </TabsTrigger>
        <TabsTrigger 
          value="Europe"
          className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          Europe
        </TabsTrigger>
        <TabsTrigger 
          value="Asia"
          className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          Asia
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="all">
        <DestinationGrid destinations={destinations} region="all" />
      </TabsContent>
      
      <TabsContent value="North America">
        <DestinationGrid destinations={destinations} region="North America" />
      </TabsContent>
      
      <TabsContent value="Europe">
        <DestinationGrid destinations={destinations} region="Europe" />
      </TabsContent>
      
      <TabsContent value="Asia">
        <DestinationGrid destinations={destinations} region="Asia" />
      </TabsContent>
    </Tabs>
  );
};

export default RegionTabs;
