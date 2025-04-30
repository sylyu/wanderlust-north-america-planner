
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Map, Search, Compass, Plane } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-wanderlust-blue" />
          <span className="text-xl font-semibold text-wanderlust-charcoal">Wanderlust.AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/destinations" className="text-gray-600 hover:text-wanderlust-blue transition-colors">
            Destinations
          </Link>
          <Link to="/group-trips" className="text-gray-600 hover:text-wanderlust-blue transition-colors">
            Group Trips
          </Link>
          <Link to="/activities" className="text-gray-600 hover:text-wanderlust-blue transition-colors">
            Activities
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-wanderlust-blue transition-colors">
            About
          </Link>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm" className="hover:bg-wanderlust-blue hover:text-white hover:border-wanderlust-blue">
            Sign In
          </Button>
          <Button size="sm" className="bg-wanderlust-blue hover:bg-wanderlust-orange text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/destinations" className="text-gray-600 hover:text-wanderlust-blue py-2 transition-colors">
              Destinations
            </Link>
            <Link to="/group-trips" className="text-gray-600 hover:text-wanderlust-blue py-2 transition-colors">
              Group Trips
            </Link>
            <Link to="/activities" className="text-gray-600 hover:text-wanderlust-blue py-2 transition-colors">
              Activities
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-wanderlust-blue py-2 transition-colors">
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Button variant="outline" size="sm" className="justify-center hover:bg-wanderlust-blue hover:text-white hover:border-wanderlust-blue">
                Sign In
              </Button>
              <Button size="sm" className="bg-wanderlust-blue hover:bg-wanderlust-orange text-white justify-center">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
