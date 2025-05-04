
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  region: string;
  rating: number;
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full p-1.5">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-xs">{destination.rating}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl">{destination.name}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <Plane className="h-4 w-4 mr-1" />
            <span>{destination.region}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <Button className="w-full bg-wanderlust-blue hover:bg-wanderlust-orange">
          Explore Packages
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
