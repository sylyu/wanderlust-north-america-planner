
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Plane, Hotel, Car, Check } from "lucide-react";
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
}

// Mock data - in a real app, this would come from an API
const mockFlights: FlightOption[] = [
  {
    id: "f1",
    airline: "WanderAir",
    departureTime: "08:00 AM",
    arrivalTime: "10:30 AM",
    price: 299,
  },
  {
    id: "f2",
    airline: "SkyJourney",
    departureTime: "12:15 PM",
    arrivalTime: "02:45 PM",
    price: 349,
  },
  {
    id: "f3",
    airline: "GlobalWings",
    departureTime: "05:30 PM",
    arrivalTime: "08:00 PM",
    price: 279,
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
  const [passengers, setPassengers] = useState(1);
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);
  
  // Add-ons state
  const [includeHotel, setIncludeHotel] = useState(false);
  const [includeCar, setIncludeCar] = useState(false);
  
  // Calendar popover states
  const [departureDateOpen, setDepartureDateOpen] = useState(false);
  const [returnDateOpen, setReturnDateOpen] = useState(false);

  const handleBookPackage = () => {
    if (!selectedFlight) {
      toast({
        title: "Please select a flight",
        description: "You must select a flight to continue",
        variant: "destructive",
      });
      return;
    }

    const packageDetails = {
      destination: destination.name,
      flight: selectedFlight,
      departureDate,
      returnDate,
      passengers,
      includeHotel,
      includeCar,
    };

    console.log("Booking package:", packageDetails);
    
    toast({
      title: "Package Booked!",
      description: `Your trip to ${destination.name} has been booked.`,
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
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Plane className="h-6 w-6" />
            Explore Package: {destination.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          {/* Flight Selection */}
          <div>
            <h3 className="font-medium text-lg mb-3 flex items-center gap-2">
              <Plane className="h-5 w-5" />
              Select Flight
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
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

            {/* Passengers */}
            <div className="mb-4">
              <Label htmlFor="passengers">Passengers</Label>
              <Input 
                id="passengers"
                type="number" 
                min="1"
                max="10"
                value={passengers}
                onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full mt-1"
              />
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
                    <div className="font-medium">${flight.price}</div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Additional Options */}
          <div>
            <h3 className="font-medium text-lg mb-3">Additional Options</h3>
            
            {/* Hotel Option */}
            <div className="flex items-start space-x-3 mb-4 p-4 rounded-lg border border-gray-200">
              <Checkbox 
                id="hotel" 
                checked={includeHotel} 
                onCheckedChange={(checked) => setIncludeHotel(checked === true)}
              />
              <div className="grid gap-1.5">
                <Label htmlFor="hotel" className="flex items-center gap-2 text-base font-medium">
                  <Hotel className="h-5 w-5" /> Include Hotel
                </Label>
                <p className="text-sm text-muted-foreground">
                  Add hotel accommodations to your travel package
                </p>
              </div>
            </div>
            
            {/* Car Rental Option */}
            <div className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200">
              <Checkbox 
                id="car" 
                checked={includeCar} 
                onCheckedChange={(checked) => setIncludeCar(checked === true)} 
              />
              <div className="grid gap-1.5">
                <Label htmlFor="car" className="flex items-center gap-2 text-base font-medium">
                  <Car className="h-5 w-5" /> Include Car Rental
                </Label>
                <p className="text-sm text-muted-foreground">
                  Add a rental car to your travel package for local transportation
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter>
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
