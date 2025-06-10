
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plane, Check } from "lucide-react";
import { type Destination } from "./DestinationCard";
import { toast } from "@/components/ui/use-toast";
import DateSelection from "./DateSelection";
import FlightSelection from "./FlightSelection";
import PassengerSelection from "./PassengerSelection";

interface PackageDialogProps {
  destination: Destination;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FlightOption {
  id: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  childPrice: number;
}

// Mock data - in a real app, this would come from an API
const mockFlights: FlightOption[] = [
  {
    id: "f1",
    airline: "WanderAir",
    departureTime: "08:00 AM",
    arrivalTime: "10:30 AM",
    price: 299,
    childPrice: 199,
  },
  {
    id: "f2",
    airline: "SkyJourney",
    departureTime: "12:15 PM",
    arrivalTime: "02:45 PM",
    price: 349,
    childPrice: 239,
  },
  {
    id: "f3",
    airline: "GlobalWings",
    departureTime: "05:30 PM",
    arrivalTime: "08:00 PM",
    price: 279,
    childPrice: 189,
  },
];

const PackageDialog = ({ destination, open, onOpenChange }: PackageDialogProps) => {
  // State for form fields
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Default to 7 days from now
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // Default to 14 days from now
  );
  
  // Updated passenger state to separate adults and children
  const [adultPassengers, setAdultPassengers] = useState(1);
  const [childPassengers, setChildPassengers] = useState(0);
  
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);
  
  // Add-ons state
  const [includeHotel, setIncludeHotel] = useState(false);
  const [includeCar, setIncludeCar] = useState(false);

  // Calculate total price based on selected flight and passenger counts
  const calculateTotalPrice = () => {
    if (!selectedFlight) return 0;
    
    const flight = mockFlights.find(f => f.id === selectedFlight);
    if (!flight) return 0;
    
    const adultTotal = flight.price * adultPassengers;
    const childTotal = flight.childPrice * childPassengers;
    
    return adultTotal + childTotal;
  };

  const handleBookPackage = () => {
    if (!selectedFlight) {
      toast({
        title: "Please select a flight",
        description: "You must select a flight to continue",
        variant: "destructive",
      });
      return;
    }

    if (adultPassengers === 0 && childPassengers === 0) {
      toast({
        title: "No passengers selected",
        description: "Please add at least one passenger",
        variant: "destructive",
      });
      return;
    }

    const packageDetails = {
      destination: destination.name,
      flight: selectedFlight,
      departureDate,
      returnDate,
      adultPassengers,
      childPassengers,
      includeHotel,
      includeCar,
      totalPrice: calculateTotalPrice(),
    };

    console.log("Booking package:", packageDetails);
    
    toast({
      title: "Package Booked!",
      description: `Your trip to ${destination.name} has been booked for ${adultPassengers} adult(s) and ${childPassengers} child(ren).`,
      action: (
        <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="h-5 w-5 text-white" />
        </div>
      ),
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Plane className="h-6 w-6" />
            Explore Package: {destination.name}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="px-6 max-h-[calc(80vh-130px)] overflow-y-auto">
          <div className="grid gap-6 py-4">
            {/* Flight Selection */}
            <div>
              <h3 className="font-medium text-lg mb-3 flex items-center gap-2">
                <Plane className="h-5 w-5" />
                Select Flight
              </h3>
              
              <DateSelection
                departureDate={departureDate}
                returnDate={returnDate}
                onDepartureDateChange={setDepartureDate}
                onReturnDateChange={setReturnDate}
              />

              <FlightSelection
                flights={mockFlights}
                selectedFlight={selectedFlight}
                onFlightSelect={setSelectedFlight}
                adultPassengers={adultPassengers}
                childPassengers={childPassengers}
              />
            </div>
            
            {/* Passengers Section */}
            <PassengerSelection
              adultPassengers={adultPassengers}
              childPassengers={childPassengers}
              onAdultPassengersChange={setAdultPassengers}
              onChildPassengersChange={setChildPassengers}
            />
          </div>
        </ScrollArea>
        
        <DialogFooter className="px-6 pb-6 pt-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleBookPackage}
            className="bg-wanderlust-blue hover:bg-wanderlust-orange"
          >
            Book Package
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PackageDialog;
