import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PropertyCard from "./PropertyCard";
import PropertyDetails from "./PropertyDetails";

const featuredProperties = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    price: 850000,
    location: "Downtown, San Francisco",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    garage: 1,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Loft",
    featured: true,
    description:
      "Stunning modern loft in the heart of downtown San Francisco. Features exposed brick walls, high ceilings, and floor-to-ceiling windows with breathtaking city views.",
    yearBuilt: 2018,
    lotSize: "N/A",
    features: [
      "City Views",
      "Exposed Brick",
      "High Ceilings",
      "Modern Kitchen",
      "In-unit Laundry",
      "Parking",
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "09060295114",
      email: "sarah@dreamhomes.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
  {
    id: 2,
    title: "Family Home with Garden",
    price: 1200000,
    location: "Sunset District, San Francisco",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    garage: 2,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "House",
    featured: true,
    description:
      "Perfect family home with a beautiful garden in the quiet Sunset District. Recently renovated with modern amenities while maintaining classic charm.",
    yearBuilt: 1955,
    lotSize: "5,000 sq ft",
    features: [
      "Large Garden",
      "Updated Kitchen",
      "Hardwood Floors",
      "Fireplace",
      "2-Car Garage",
      "Near Schools",
    ],
    agent: {
      name: "Michael Chen",
      phone: "09060295114",
      email: "michael@dreamhomes.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
  {
    id: 3,
    title: "Luxury Penthouse Suite",
    price: 2500000,
    location: "Pacific Heights, San Francisco",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1800,
    garage: 2,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Penthouse",
    featured: true,
    description:
      "Exclusive penthouse in prestigious Pacific Heights with panoramic bay views. Luxury finishes throughout with private rooftop terrace.",
    yearBuilt: 2020,
    lotSize: "N/A",
    features: [
      "Bay Views",
      "Rooftop Terrace",
      "Luxury Finishes",
      "Concierge",
      "Gym",
      "Wine Storage",
    ],
    agent: {
      name: "Emily Rodriguez",
      phone: "09060295114",
      email: "emily@dreamhomes.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
  {
    id: 4,
    title: "Cozy Studio Apartment",
    price: 550000,
    location: "Mission District, San Francisco",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Studio",
    description:
      "Charming studio in the vibrant Mission District. Perfect for young professionals with great restaurants and nightlife nearby.",
    yearBuilt: 1990,
    lotSize: "N/A",
    features: [
      "High Ceilings",
      "Hardwood Floors",
      "Updated Kitchen",
      "Near Transit",
      "Restaurants Nearby",
    ],
    agent: {
      name: "David Thompson",
      phone: "09060295114",
      email: "david@dreamhomes.com",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
  {
    id: 5,
    title: "Victorian Townhouse",
    price: 1800000,
    location: "Nob Hill, San Francisco",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    garage: 1,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Townhouse",
    description:
      "Historic Victorian townhouse in prestigious Nob Hill. Beautifully preserved original details with modern updates.",
    yearBuilt: 1890,
    lotSize: "2,500 sq ft",
    features: [
      "Historic Details",
      "Bay Windows",
      "Original Moldings",
      "Updated Systems",
      "Private Garden",
    ],
    agent: {
      name: "Lisa Park",
      phone: "09060295114",
      email: "lisa@dreamhomes.com",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
  {
    id: 6,
    title: "Contemporary Condo",
    price: 950000,
    location: "SOMA, San Francisco",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    garage: 1,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Condo",
    description:
      "Modern condo in trendy SOMA with building amenities. Walking distance to tech companies and great restaurants.",
    yearBuilt: 2015,
    lotSize: "N/A",
    features: [
      "Building Gym",
      "Roof Deck",
      "Concierge",
      "Modern Kitchen",
      "In-unit Laundry",
      "Tech Hub Location",
    ],
    agent: {
      name: "Alex Kumar",
      phone: "09060295114",
      email: "alex@dreamhomes.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
];

export default function FeaturedListings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isPropertyDetailsOpen, setIsPropertyDetailsOpen] = useState(false);

  const handleViewDetails = (property: any) => {
    setSelectedProperty(property);
    setIsPropertyDetailsOpen(true);
  };

  return (
    <section id="listings" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Featured Properties
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Your
            <span className="block text-gradient">Perfect Home</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our curated selection of premium properties in San
            Francisco's most desirable neighborhoods. Each home has been
            carefully selected for quality, location, and value.
          </p>
        </motion.div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 group text-lg px-8 py-6"
          >
            View All Properties
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Over 500+ properties available in the Bay Area
          </p>
        </motion.div>

        {/* Property Details Modal */}
        <PropertyDetails
          property={selectedProperty}
          isOpen={isPropertyDetailsOpen}
          onClose={() => setIsPropertyDetailsOpen(false)}
        />
      </div>
    </section>
  );
}
