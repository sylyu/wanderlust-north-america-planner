import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Plane, Hotel, Car, Check, UserRound, UserRoundMinus } from "lucide-react";
import { format } from "date-fns";
import { type Destination } from "./DestinationCard";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

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
  childPrice: number; // Added child price
}

// Mock data - in a real app, this would come from an API
const mockFlights: FlightOption[] = [
  {
    id: "f1",
    airline: "WanderAir",
    departureTime: "08:00 AM",
    arrivalTime: "10:30 AM",
    price: 299,
    childPrice: 199, // Child price (approximately 33% discount)
  },
  {
    id: "f2",
    airline: "SkyJourney",
    departureTime: "12:15 PM",
    arrivalTime: "02:45 PM",
    price: 349,
    childPrice: 239, // Child price (approximately 32% discount)
  },
  {
    id: "f3",
    airline: "GlobalWings",
    departureTime: "05:30 PM",
    arrivalTime: "08:00 PM",
    price: 279,
    childPrice: 189, // Child price (approximately 32% discount)
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
  
  // Calendar popover states
  const [departureDateOpen, setDepartureDateOpen] = useState(false);
  const [returnDateOpen, setReturnDateOpen] = useState(false);

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
              
              {/* Departure Date */}
              <div>
                <Label>Departure Date</Label>
                <Popover open={departureDateOpen} onOpenChange={setDepartureDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal mt-1"
                    >
                      {departureDate ? (
                        format(departureDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={(date) => {
                        setDepartureDate(date);
                        setDepartureDateOpen(false);
                      }}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Return Date */}
              <div>
                <Label>Return Date</Label>
                <Popover open={returnDateOpen} onOpenChange={setReturnDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal mt-1"
                    >
                      {returnDate ? (
                        format(returnDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={(date) => {
                        setReturnDate(date);
                        setReturnDateOpen(false);
                      }}
                      initialFocus
                      disabled={(date) => date < (departureDate || new Date())}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            {/* Updated Passengers Section with Age Separation */}
            <div className="mb-6 border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-3">Passengers</h4>
              
              {/* Adult Passengers */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <UserRound className="h-5 w-5 text-gray-700" />
                  <div>
                    <p className="font-medium">Adults</p>
                    <p className="text-sm text-gray-500">Ages 14+</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button 
                    size="icon" 
                    variant="outline"
                    onClick={() => adultPassengers > 0 && setAdultPassengers(adultPassengers - 1)}
                    disabled={adultPassengers === 0}
                    className="h-8 w-8"
                  >
                    <UserRoundMinus className="h-4 w-4" />
                  </Button>
                  <span className="mx-3 min-w-8 text-center">{adultPassengers}</span>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    onClick={() => setAdultPassengers(adultPassengers + 1)}
                    className="h-8 w-8"
                  >
                    <UserRound className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Child Passengers */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <UserRound className="h-5 w-5 text-gray-700" />
                  <div>
                    <p className="font-medium">Children</p>
                    <p className="text-sm text-gray-500">Ages 0-13</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button 
                    size="icon" 
                    variant="outline"
                    onClick={() => childPassengers > 0 && setChildPassengers(childPassengers - 1)}
                    disabled={childPassengers === 0}
                    className="h-8 w-8"
                  >
                    <UserRoundMinus className="h-4 w-4" />
                  </Button>
                  <span className="mx-3 min-w-8 text-center">{childPassengers}</span>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    onClick={() => setChildPassengers(childPassengers + 1)}
                    className="h-8 w-8"
                  >
                    <UserRound className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Available Flights */}
            <div>
              <Label className="mb-2 block">Available Flights</Label>
              <RadioGroup 
                value={selectedFlight || ""} 
                onValueChange={setSelectedFlight}
                className="space-y-3"
              >
                {mockFlights.map((flight) => (
                  <div 
                    key={flight.id} 
                    className={cn(
                      "flex items-center justify-between p-4 rounded-lg border",
                      selectedFlight === flight.id ? "border-wanderlust-blue bg-blue-50" : "border-gray-200"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value={flight.id} id={flight.id} />
                      <div>
                        <Label htmlFor={flight.id} className="text-base">{flight.airline}</Label>
                        <p className="text-sm text-gray-500">
                          {flight.departureTime} - {flight.arrivalTime}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-right">${flight.price} <span className="text-xs text-gray-500">/ adult</span></div>
                      <div className="text-sm text-gray-600">${flight.childPrice} <span className="text-xs text-gray-500">/ child</span></div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
              
              {selectedFlight && (adultPassengers > 0 || childPassengers > 0) && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Flight Cost:</span>
                    <span className="font-bold text-lg">${calculateTotalPrice()}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {adultPassengers > 0 && (
                      <div className="flex justify-between">
                        <span>{adultPassengers} × Adult{adultPassengers !== 1 ? "s" : ""}</span>
                        <span>${mockFlights.find(f => f.id === selectedFlight)?.price || 0} × {adultPassengers}</span>
                      </div>
                    )}
                    {childPassengers > 0 && (
                      <div className="flex justify-between">
                        <span>{childPassengers} × Child{childPassengers !== 1 ? "ren" : ""}</span>
                        <span>${mockFlights.find(f => f.id === selectedFlight)?.childPrice || 0} × {childPassengers}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
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
