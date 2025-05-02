
import { useState } from "react";
import { Search, Calendar, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// Sample airports with codes
const airports = [
  { city: "New York", code: "JFK", name: "John F. Kennedy International Airport" },
  { city: "New York", code: "LGA", name: "LaGuardia Airport" },
  { city: "Los Angeles", code: "LAX", name: "Los Angeles International Airport" },
  { city: "Chicago", code: "ORD", name: "O'Hare International Airport" },
  { city: "London", code: "LHR", name: "London Heathrow Airport" },
  { city: "Paris", code: "CDG", name: "Charles de Gaulle Airport" },
  { city: "Tokyo", code: "HND", name: "Tokyo Haneda Airport" },
  { city: "Tokyo", code: "NRT", name: "Narita International Airport" },
  { city: "Sydney", code: "SYD", name: "Sydney Airport" },
  { city: "Dubai", code: "DXB", name: "Dubai International Airport" },
  { city: "Singapore", code: "SIN", name: "Singapore Changi Airport" },
  { city: "Hong Kong", code: "HKG", name: "Hong Kong International Airport" },
  { city: "Amsterdam", code: "AMS", name: "Amsterdam Airport Schiphol" },
  { city: "Frankfurt", code: "FRA", name: "Frankfurt Airport" },
  { city: "Seoul", code: "ICN", name: "Incheon International Airport" },
  { city: "Bangkok", code: "BKK", name: "Suvarnabhumi Airport" },
  { city: "San Francisco", code: "SFO", name: "San Francisco International Airport" },
  { city: "Munich", code: "MUC", name: "Munich Airport" },
  { city: "Barcelona", code: "BCN", name: "Barcelona–El Prat Airport" },
  { city: "Rome", code: "FCO", name: "Leonardo da Vinci–Fiumicino Airport" },
  { city: "Miami", code: "MIA", name: "Miami International Airport" },
  { city: "Toronto", code: "YYZ", name: "Toronto Pearson International Airport" },
  { city: "Bali", code: "DPS", name: "Ngurah Rai International Airport" },
  { city: "Madrid", code: "MAD", name: "Adolfo Suárez Madrid–Barajas Airport" },
  { city: "Cancún", code: "CUN", name: "Cancún International Airport" },
];

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);

  // Filter airports based on input
  const filteredAirports = airports.filter(
    (airport) => {
      if (!searchInput) return false;
      
      const searchLower = searchInput.toLowerCase();
      return (
        airport.city.toLowerCase().includes(searchLower) ||
        airport.code.toLowerCase().includes(searchLower) ||
        airport.name.toLowerCase().includes(searchLower)
      );
    }
  );

  const handleAirportSelect = (airport: typeof airports[0]) => {
    setSearchInput(`${airport.city} (${airport.code})`);
    setOpen(false);
  };

  return (
    <section className="hero-section w-full h-[600px] flex flex-col justify-center items-center text-white px-4">
      <div className="max-w-5xl w-full text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Plan Group Trips <span className="text-wanderlust-orange">Together</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Coordinate flights, hotels, cars, and activities for multiple people coming from different locations
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-grow">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Where to? City or airport code"
                      className="pl-10 py-6 text-black"
                      value={searchInput}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                        if (e.target.value && !open) {
                          setOpen(true);
                        }
                      }}
                      onFocus={() => {
                        if (searchInput) {
                          setOpen(true);
                        }
                      }}
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0" align="start">
                  <Command>
                    <CommandList className="max-h-[300px] overflow-y-auto">
                      <CommandEmpty>No airports found</CommandEmpty>
                      {filteredAirports.length > 0 && (
                        <CommandGroup heading="Airports">
                          {filteredAirports.map((airport) => (
                            <CommandItem
                              key={airport.code}
                              onSelect={() => handleAirportSelect(airport)}
                              className="flex flex-col items-start py-2"
                            >
                              <div className="font-medium">{airport.city} ({airport.code})</div>
                              <div className="text-xs text-gray-500 truncate max-w-full">{airport.name}</div>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      )}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="h-12 border px-4 text-gray-600 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{date ? format(date, "MMM dd, yyyy") : "Select dates"}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={2024}
                  toYear={2030}
                />
              </PopoverContent>
            </Popover>
            
            <Button className="h-12 bg-wanderlust-blue hover:bg-wanderlust-blue-dark text-white">
              Search Destinations
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-black/30 text-white border-white hover:bg-wanderlust-blue hover:bg-opacity-70">
            <Map className="mr-2 h-4 w-4" /> Create Group Trip
          </Button>
          <Button variant="outline" className="bg-black/30 text-white border-white hover:bg-wanderlust-blue hover:bg-opacity-70">
            See Popular Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
