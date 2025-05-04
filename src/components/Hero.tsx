import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

interface HeroProps {
  onSeePopulationsClick?: () => void;
}

const Hero = ({ onSeePopulationsClick }: HeroProps) => {
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Simulate fetching location suggestions (replace with actual API call)
    const locations = [
      "New York, USA",
      "London, UK",
      "Paris, France",
      "Tokyo, Japan",
      "Sydney, Australia",
    ];

    if (location) {
      const filteredSuggestions = locations.filter((loc) =>
        loc.toLowerCase().startsWith(location.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setLocation(suggestion);
    setSuggestions([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${location}`);
    searchInputRef.current?.blur();
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next Group Adventure
          </h1>
          <p className="text-lg mb-8">
            Plan your perfect trip with friends and family. Find destinations,
            compare prices, and book everything in one place.
          </p>

          <div className="flex justify-center mt-8">
            <Button 
              onClick={onSeePopulationsClick} 
              className="bg-wanderlust-orange hover:bg-wanderlust-orange/90 text-white"
            >
              See Populations
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter a destination"
                value={location}
                onChange={handleInputChange}
                ref={searchInputRef}
                className="w-full px-4 py-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-wanderlust-orange"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-wanderlust-orange hover:bg-wanderlust-orange/90 text-white px-4 py-2 rounded-md focus:outline-none"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
            {suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white text-black rounded-md shadow-md mt-2">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <MapPin className="inline-block h-4 w-4 mr-2" />
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
