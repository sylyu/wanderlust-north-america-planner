
import { Button } from "@/components/ui/button";
import { UserRound, UserRoundMinus } from "lucide-react";

interface PassengerSelectionProps {
  adultPassengers: number;
  childPassengers: number;
  onAdultPassengersChange: (count: number) => void;
  onChildPassengersChange: (count: number) => void;
}

const PassengerSelection = ({
  adultPassengers,
  childPassengers,
  onAdultPassengersChange,
  onChildPassengersChange,
}: PassengerSelectionProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
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
            onClick={() => adultPassengers > 0 && onAdultPassengersChange(adultPassengers - 1)}
            disabled={adultPassengers === 0}
            className="h-8 w-8"
          >
            <UserRoundMinus className="h-4 w-4" />
          </Button>
          <span className="mx-3 min-w-8 text-center">{adultPassengers}</span>
          <Button 
            size="icon" 
            variant="outline" 
            onClick={() => onAdultPassengersChange(adultPassengers + 1)}
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
            onClick={() => childPassengers > 0 && onChildPassengersChange(childPassengers - 1)}
            disabled={childPassengers === 0}
            className="h-8 w-8"
          >
            <UserRoundMinus className="h-4 w-4" />
          </Button>
          <span className="mx-3 min-w-8 text-center">{childPassengers}</span>
          <Button 
            size="icon" 
            variant="outline" 
            onClick={() => onChildPassengersChange(childPassengers + 1)}
            className="h-8 w-8"
          >
            <UserRound className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PassengerSelection;
