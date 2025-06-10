
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface FlightOption {
  id: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  childPrice: number;
}

interface FlightSelectionProps {
  flights: FlightOption[];
  selectedFlight: string | null;
  onFlightSelect: (flightId: string) => void;
  adultPassengers: number;
  childPassengers: number;
}

const FlightSelection = ({
  flights,
  selectedFlight,
  onFlightSelect,
  adultPassengers,
  childPassengers,
}: FlightSelectionProps) => {
  const calculateTotalPrice = () => {
    if (!selectedFlight) return 0;
    
    const flight = flights.find(f => f.id === selectedFlight);
    if (!flight) return 0;
    
    const adultTotal = flight.price * adultPassengers;
    const childTotal = flight.childPrice * childPassengers;
    
    return adultTotal + childTotal;
  };

  return (
    <div className="mb-4">
      <Label className="mb-3 block font-medium">Available Flights</Label>
      <RadioGroup 
        value={selectedFlight || ""} 
        onValueChange={onFlightSelect}
        className="space-y-3"
      >
        {flights.map((flight) => (
          <div 
            key={flight.id} 
            className={cn(
              "flex items-center justify-between p-4 rounded-lg border cursor-pointer",
              selectedFlight === flight.id ? "border-wanderlust-blue bg-blue-50" : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => onFlightSelect(flight.id)}
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value={flight.id} id={flight.id} />
              <div>
                <Label htmlFor={flight.id} className="text-base cursor-pointer">{flight.airline}</Label>
                <p className="text-sm text-gray-500">
                  {flight.departureTime} - {flight.arrivalTime}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">${flight.price} <span className="text-xs text-gray-500">/ adult</span></div>
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
                <span>${flights.find(f => f.id === selectedFlight)?.price || 0} × {adultPassengers}</span>
              </div>
            )}
            {childPassengers > 0 && (
              <div className="flex justify-between">
                <span>{childPassengers} × Child{childPassengers !== 1 ? "ren" : ""}</span>
                <span>${flights.find(f => f.id === selectedFlight)?.childPrice || 0} × {childPassengers}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSelection;
