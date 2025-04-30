
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    name: "New York City",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop",
    description: "Iconic city with endless activities for groups of all sizes",
    rating: 4.8,
    priceLevel: "$$$"
  },
  {
    id: 2,
    name: "Miami Beach",
    image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?q=80&w=1000&auto=format&fit=crop",
    description: "Beautiful beaches and vibrant nightlife for fun group getaways",
    rating: 4.6,
    priceLevel: "$$$"
  },
  {
    id: 3,
    name: "Las Vegas",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1000&auto=format&fit=crop",
    description: "Entertainment capital perfect for bachelor/bachelorette parties",
    rating: 4.7,
    priceLevel: "$$$"
  },
  {
    id: 4,
    name: "Vancouver",
    image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=1000&auto=format&fit=crop",
    description: "Stunning Canadian city with mountains and ocean",
    rating: 4.9,
    priceLevel: "$$$"
  }
];

const DestinationSection = () => {
  const [sortBy, setSortBy] = useState("recommended");
  
  // This would be more sophisticated in a real implementation
  const sortedDestinations = [...destinations].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    // Just return default order for now
    return 0;
  });

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-wanderlust-charcoal">Popular Destinations</h2>
            <p className="text-gray-600">Perfect locations for group gatherings</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button 
              variant={sortBy === "recommended" ? "default" : "outline"}
              className={sortBy === "recommended" ? "bg-wanderlust-blue text-white" : ""}
              onClick={() => setSortBy("recommended")}
              size="sm"
            >
              Recommended
            </Button>
            <Button 
              variant={sortBy === "rating" ? "default" : "outline"}
              className={sortBy === "rating" ? "bg-wanderlust-blue text-white" : ""}
              onClick={() => setSortBy("rating")}
              size="sm"
            >
              Top Rated
            </Button>
            <Button 
              variant={sortBy === "price" ? "default" : "outline"}
              className={sortBy === "price" ? "bg-wanderlust-blue text-white" : ""}
              onClick={() => setSortBy("price")}
              size="sm"
            >
              Price
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedDestinations.map((destination) => (
            <Card key={destination.id} className="travel-card border-none overflow-hidden h-full flex flex-col">
              <div className="relative h-48">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{destination.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm ml-1">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{destination.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-wanderlust-charcoal font-medium">{destination.priceLevel}</span>
                  <Button size="sm" className="bg-wanderlust-blue hover:bg-wanderlust-blue-dark text-white">
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="bg-wanderlust-blue hover:bg-wanderlust-blue-dark text-white">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
