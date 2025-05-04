
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe } from "lucide-react";

interface RegionTabsProps {
  activeRegion: string;
  onRegionChange: (region: string) => void;
}

const RegionTabs = ({ activeRegion, onRegionChange }: RegionTabsProps) => {
  return (
    <Tabs defaultValue={activeRegion} className="mb-8">
      <TabsList className="mb-6">
        <TabsTrigger 
          value="all" 
          onClick={() => onRegionChange("all")}
          className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          <Globe className="mr-2 h-4 w-4" />
          All Regions
        </TabsTrigger>
        <TabsTrigger 
          value="North America" 
          onClick={() => onRegionChange("North America")}
          className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          North America
        </TabsTrigger>
        <TabsTrigger 
          value="Europe" 
          onClick={() => onRegionChange("Europe")}
          className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          Europe
        </TabsTrigger>
        <TabsTrigger 
          value="Asia" 
          onClick={() => onRegionChange("Asia")}
          className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
        >
          Asia
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default RegionTabs;
