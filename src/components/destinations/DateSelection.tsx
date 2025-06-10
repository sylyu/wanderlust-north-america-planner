
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

interface DateSelectionProps {
  departureDate: Date | undefined;
  returnDate: Date | undefined;
  onDepartureDateChange: (date: Date | undefined) => void;
  onReturnDateChange: (date: Date | undefined) => void;
}

const DateSelection = ({
  departureDate,
  returnDate,
  onDepartureDateChange,
  onReturnDateChange,
}: DateSelectionProps) => {
  const [departureDateOpen, setDepartureDateOpen] = useState(false);
  const [returnDateOpen, setReturnDateOpen] = useState(false);

  return (
    <>
      {/* Departure Date */}
      <div className="mb-4">
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
                onDepartureDateChange(date);
                setDepartureDateOpen(false);
              }}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      {/* Return Date */}
      <div className="mb-4">
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
                onReturnDateChange(date);
                setReturnDateOpen(false);
              }}
              initialFocus
              disabled={(date) => date < (departureDate || new Date())}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default DateSelection;
