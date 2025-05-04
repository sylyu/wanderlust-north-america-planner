
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Plane } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Cancun",
    image: "https://images.unsplash.com/photo-1552074284-5e84be0adfbb?q=80&w=1000&auto=format&fit=crop",
    description: "Beautiful beaches and vibrant nightlife in Mexico",
    region: "North America",
    rating: 4.8,
  },
  {
    id: 2,
    name: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
    description: "Historic landmarks and cultural attractions in England",
    region: "Europe",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Vancouver",
    image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=1000&auto=format&fit=crop",
    description: "Stunning natural beauty and outdoor activities in Canada",
    region: "North America",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Maui",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=1000&auto=format&fit=crop",
    description: "Tropical paradise with beautiful beaches in Hawaii",
    region: "North America",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Italy",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop",
    description: "Rich history, art, and cuisine across beautiful cities",
    region: "Europe",
    rating: 4.8,
  },
  {
    id: 6,
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop",
    description: "Romantic destinations and world-class cuisine",
    region: "Europe",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Japan",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000&auto=format&fit=crop",
    description: "Unique blend of ancient traditions and modern technology",
    region: "Asia",
    rating: 4.9,
  },
  {
    id: 8,
    name: "South Korea",
    image: "https://images.unsplash.com/photo-1538485399081-7a66562fd2f5?q=80&w=1000&auto=format&fit=crop",
    description: "Vibrant cities and rich cultural heritage",
    region: "Asia",
    rating: 4.6,
  },
  {
    id: 9,
    name: "China",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1000&auto=format&fit=crop",
    description: "Ancient wonders and diverse landscapes",
    region: "Asia",
    rating: 4.7,
  }
];

const Destinations = () => {
  const [activeRegion, setActiveRegion] = useState<string>("all");
  
  const filteredDestinations = activeRegion === "all" 
    ? destinations 
    : destinations.filter(dest => dest.region === activeRegion);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-wanderlust-blue py-20 px-4">
          <div className="container mx-auto max-w-screen-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Favorite Destinations</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore our most popular destinations for unforgettable group trips and adventures.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto max-w-screen-xl py-12 px-4">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveRegion("all")}
                className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
              >
                <Globe className="mr-2 h-4 w-4" />
                All Regions
              </TabsTrigger>
              <TabsTrigger 
                value="North America" 
                onClick={() => setActiveRegion("North America")}
                className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
              >
                North America
              </TabsTrigger>
              <TabsTrigger 
                value="Europe" 
                onClick={() => setActiveRegion("Europe")}
                className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
              >
                Europe
              </TabsTrigger>
              <TabsTrigger 
                value="Asia" 
                onClick={() => setActiveRegion("Asia")}
                className="data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white"
              >
                Asia
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="North America" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="Europe" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="Asia" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const DestinationCard = ({ destination }: { destination: typeof destinations[0] }) => {
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

export default Destinations;
