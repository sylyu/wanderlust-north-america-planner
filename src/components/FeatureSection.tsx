
import { Airplane, Car, Hotel, Map, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Airplane className="h-10 w-10 text-wanderlust-blue" />,
    title: "Flight Coordination",
    description: "Find and book flights from multiple departure cities to one destination"
  },
  {
    icon: <Hotel className="h-10 w-10 text-wanderlust-blue" />,
    title: "Hotel Booking",
    description: "Compare hotel options and reserve rooms for your entire group"
  },
  {
    icon: <Car className="h-10 w-10 text-wanderlust-blue" />,
    title: "Car Rentals",
    description: "Book rental cars for easy transportation during your trip"
  },
  {
    icon: <Map className="h-10 w-10 text-wanderlust-blue" />,
    title: "Activities & Attractions",
    description: "Discover and book activities within 15 miles of your destination"
  },
  {
    icon: <Calendar className="h-10 w-10 text-wanderlust-blue" />,
    title: "Trip Planning",
    description: "Create detailed itineraries everyone in your group can access"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-wanderlust-charcoal">Plan Every Aspect of Your Group Trip</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wanderlust makes it easy to coordinate travel plans for friends and family coming from different cities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="travel-card border-none">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
