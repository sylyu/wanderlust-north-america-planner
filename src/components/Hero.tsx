
import { useState } from "react";
import { Search, Calendar, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);

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
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Where to? (City, Park, Region)"
                className="pl-10 py-6 text-black"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
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
