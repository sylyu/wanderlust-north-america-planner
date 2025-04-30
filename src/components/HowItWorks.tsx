
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Plane, Car, Hotel, Calendar } from "lucide-react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-wanderlust-charcoal">How Wanderlust Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bringing people together from different locations has never been easier
          </p>
        </div>

        <Tabs defaultValue="create" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-1 sm:grid-cols-4 gap-2 bg-transparent">
            <TabsTrigger 
              value="create"
              className={`data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white`}
            >
              1. Create Trip
            </TabsTrigger>
            <TabsTrigger 
              value="invite"
              className={`data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white`}
            >
              2. Invite Travelers
            </TabsTrigger>
            <TabsTrigger 
              value="book"
              className={`data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white`}
            >
              3. Book Travel
            </TabsTrigger>
            <TabsTrigger 
              value="enjoy"
              className={`data-[state=active]:bg-wanderlust-blue data-[state=active]:text-white`}
            >
              4. Enjoy Together
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="create" className="animate-fade-in">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-wanderlust-blue" /> 
                    Create Your Group Trip
                  </CardTitle>
                  <CardDescription>
                    Choose a destination and set your trip dates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>Select your destination city or region</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>Set the dates for your group adventure</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>Create a custom trip name for your group</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="invite" className="animate-fade-in">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-wanderlust-blue" /> 
                    Invite Your Travel Companions
                  </CardTitle>
                  <CardDescription>
                    Add travelers from different cities to your trip
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>Send email or text invitations to join your trip</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>Travelers can enter their departure locations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>Everyone can see who's joining and where they're coming from</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="book" className="animate-fade-in">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-wanderlust-blue" /> 
                    Book Your Travel Components
                  </CardTitle>
                  <CardDescription>
                    Coordinate flights, accommodations, and transportation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Plane className="h-5 w-5 text-wanderlust-blue mt-0.5" />
                    <p>Book flights from multiple origins to one destination</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Hotel className="h-5 w-5 text-wanderlust-blue mt-0.5" />
                    <p>Reserve hotel rooms or vacation rentals for your group</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Car className="h-5 w-5 text-wanderlust-blue mt-0.5" />
                    <p>Arrange car rentals and local transportation</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="enjoy" className="animate-fade-in">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-wanderlust-blue" /> 
                    Enjoy Your Trip Together
                  </CardTitle>
                  <CardDescription>
                    Experience the destination with all your travel companions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>Everyone arrives at the destination from their respective locations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>Follow your shared itinerary for activities</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>Create lasting memories with friends and family</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;
