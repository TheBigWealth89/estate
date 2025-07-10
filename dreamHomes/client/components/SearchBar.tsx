import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Bed, Bath, DollarSign, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface SearchFilters {
  location: string;
  priceRange: number[];
  bedrooms: string;
  bathrooms: string;
}

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
  onResultsFound?: (properties: any[]) => void;
}

export default function SearchBar({
  onSearch,
  onResultsFound,
}: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    priceRange: [0, 2000000],
    bedrooms: "",
    bathrooms: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Mock property search - In a real app, this would call an external API
  const searchProperties = async (searchFilters: SearchFilters) => {
    setIsSearching(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock property data that would come from external API
    const mockProperties = [
      {
        id: 101,
        title: `Modern Home in ${searchFilters.location || "San Francisco"}`,
        price: Math.floor(Math.random() * 1000000) + 500000,
        location: searchFilters.location || "Mission Bay, San Francisco",
        bedrooms:
          parseInt(searchFilters.bedrooms) || Math.floor(Math.random() * 4) + 1,
        bathrooms:
          parseInt(searchFilters.bathrooms) ||
          Math.floor(Math.random() * 3) + 1,
        sqft: Math.floor(Math.random() * 1500) + 800,
        garage: Math.floor(Math.random() * 2) + 1,
        image: `https://images.unsplash.com/photo-${1560000000000 + Math.floor(Math.random() * 100000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        type: ["House", "Condo", "Townhouse", "Loft"][
          Math.floor(Math.random() * 4)
        ],
        featured: Math.random() > 0.7,
        description: `Beautiful property in ${searchFilters.location || "San Francisco"} with modern amenities and great neighborhood access.`,
        yearBuilt: 2000 + Math.floor(Math.random() * 24),
        lotSize: `${Math.floor(Math.random() * 5000) + 2000} sq ft`,
        features: [
          "Modern Kitchen",
          "Hardwood Floors",
          "Parking",
          "Near Transit",
          "Updated Bathrooms",
        ],
        agent: {
          name: [
            "Sarah Johnson",
            "Michael Chen",
            "Emily Rodriguez",
            "David Thompson",
          ][Math.floor(Math.random() * 4)],
          phone: "09060295114",
          email: "agent@dreamhomes.com",
          avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`,
        },
      },
      // Add more mock properties...
      ...Array.from({ length: 8 }, (_, i) => ({
        id: 102 + i,
        title: `${["Luxury", "Cozy", "Spacious", "Modern", "Classic"][Math.floor(Math.random() * 5)]} ${["Home", "Condo", "Apartment"][Math.floor(Math.random() * 3)]} in ${searchFilters.location || "San Francisco"}`,
        price: Math.floor(Math.random() * 1500000) + 400000,
        location:
          searchFilters.location ||
          ["Downtown", "Mission", "SOMA", "Nob Hill", "Castro"][
            Math.floor(Math.random() * 5)
          ] + ", San Francisco",
        bedrooms:
          parseInt(searchFilters.bedrooms) || Math.floor(Math.random() * 4) + 1,
        bathrooms:
          parseInt(searchFilters.bathrooms) ||
          Math.floor(Math.random() * 3) + 1,
        sqft: Math.floor(Math.random() * 2000) + 600,
        garage:
          Math.random() > 0.3 ? Math.floor(Math.random() * 2) + 1 : undefined,
        image: `https://images.unsplash.com/photo-${1560000000000 + Math.floor(Math.random() * 100000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        type: ["House", "Condo", "Townhouse", "Loft", "Studio"][
          Math.floor(Math.random() * 5)
        ],
        featured: Math.random() > 0.8,
        description: `Wonderful property with great features and excellent location in ${searchFilters.location || "San Francisco"}.`,
        yearBuilt: 1990 + Math.floor(Math.random() * 34),
        lotSize:
          Math.random() > 0.5
            ? `${Math.floor(Math.random() * 4000) + 1500} sq ft`
            : "N/A",
        features: [
          "Updated Kitchen",
          "Hardwood Floors",
          "Parking",
          "Near Schools",
          "Garden",
        ].slice(0, Math.floor(Math.random() * 5) + 2),
        agent: {
          name: [
            "Sarah Johnson",
            "Michael Chen",
            "Emily Rodriguez",
            "David Thompson",
            "Lisa Park",
            "Alex Kumar",
          ][Math.floor(Math.random() * 6)],
          phone: "09060295114",
          email: "agent@dreamhomes.com",
          avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`,
        },
      })),
    ];

    setIsSearching(false);
    onResultsFound?.(mockProperties);
    return mockProperties;
  };

  const handleSearch = async () => {
    onSearch?.(filters);
    await searchProperties(filters);
  };

  // Mock location suggestions
  useEffect(() => {
    if (filters.location.length > 2) {
      const mockSuggestions = [
        "San Francisco, CA",
        "Oakland, CA",
        "Berkeley, CA",
        "Palo Alto, CA",
        "Mountain View, CA",
        "San Jose, CA",
        "Fremont, CA",
        "Sunnyvale, CA",
      ].filter((city) =>
        city.toLowerCase().includes(filters.location.toLowerCase()),
      );
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [filters.location]);

  const updateFilters = (key: keyof SearchFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const formatPrice = (price: number) => {
    return price >= 1000000
      ? `$${(price / 1000000).toFixed(1)}M`
      : price >= 1000
        ? `$${(price / 1000).toFixed(0)}K`
        : `$${price}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto -mt-8 relative z-10"
    >
      <Card className="backdrop-blur-glass shadow-2xl border-white/20">
        <div className="p-6">
          {/* Main Search Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
            {/* Location */}
            <div className="space-y-2 relative">
              <Label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </Label>
              <Input
                placeholder="Enter city, neighborhood..."
                value={filters.location}
                onChange={(e) => updateFilters("location", e.target.value)}
                className="border-border/50 focus:border-primary"
              />
              {/* Location Suggestions */}
              {suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 bg-white border border-border/50 rounded-md shadow-lg z-20 max-h-40 overflow-y-auto"
                >
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-3 py-2 hover:bg-muted/50 text-sm"
                      onClick={() => {
                        updateFilters("location", suggestion);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Bed className="w-4 h-4" />
                Bedrooms
              </Label>
              <Select
                value={filters.bedrooms}
                onValueChange={(value) => updateFilters("bedrooms", value)}
              >
                <SelectTrigger className="border-border/50 focus:border-primary">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bathrooms */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Bath className="w-4 h-4" />
                Bathrooms
              </Label>
              <Select
                value={filters.bathrooms}
                onValueChange={(value) => updateFilters("bathrooms", value)}
              >
                <SelectTrigger className="border-border/50 focus:border-primary">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Toggle */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Price Range
              </Label>
              <Button
                variant="outline"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full justify-start border-border/50 hover:border-primary"
              >
                {formatPrice(filters.priceRange[0])} -{" "}
                {formatPrice(filters.priceRange[1])}
              </Button>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              disabled={isSearching}
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 h-10"
            >
              {isSearching ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Search className="w-4 h-4 mr-2" />
              )}
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </div>

          {/* Expanded Price Range */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>Price Range</Label>
                  <span className="text-sm text-muted-foreground">
                    {formatPrice(filters.priceRange[0])} -{" "}
                    {formatPrice(filters.priceRange[1])}
                  </span>
                </div>
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => updateFilters("priceRange", value)}
                  max={2000000}
                  min={0}
                  step={50000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$0</span>
                  <span>$2M+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
