import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  Bed,
  Bath,
  Car,
  Square,
  Phone,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    garage?: number;
    image: string;
    images?: string[];
    type: string;
    featured?: boolean;
    description?: string;
    yearBuilt?: number;
    lotSize?: string;
    features?: string[];
    agent: {
      name: string;
      phone: string;
      email: string;
      avatar?: string;
    };
  };
  index: number;
  onViewDetails?: (property: any) => void;
}

export default function PropertyCard({
  property,
  index,
  onViewDetails,
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price: number) => {
    return price >= 1000000
      ? `$${(price / 1000000).toFixed(2)}M`
      : `$${price.toLocaleString()}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-500">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <motion.img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-primary text-primary-foreground">
              {property.type}
            </Badge>
            {property.featured && <Badge variant="secondary">Featured</Badge>}
          </div>

          {/* Heart Icon */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-4 right-4 bg-white/90 hover:bg-white transition-all duration-300 ${
              isLiked ? "text-red-500" : "text-muted-foreground"
            }`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
          </Button>

          {/* Quick Actions */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
            <Button
              size="sm"
              className="flex-1 bg-white/90 text-black hover:bg-white"
              onClick={() => onViewDetails?.(property)}
            >
              View Details
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-white/90 border-white/50 hover:bg-white"
              onClick={() => {
                window.open(`tel:09060295114`, "_self");
              }}
            >
              Schedule Tour
            </Button>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-primary">
              {formatPrice(property.price)}
            </h3>
            <div className="text-sm text-muted-foreground">
              ${Math.round(property.price / property.sqft)}/sqft
            </div>
          </div>

          {/* Title */}
          <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
            {property.title}
          </h4>

          {/* Location */}
          <div className="flex items-center text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.location}</span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center justify-center text-center">
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Bed className="w-4 h-4 text-primary mr-1" />
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <span className="text-xs text-muted-foreground">Beds</span>
              </div>
            </div>

            <div className="flex items-center justify-center text-center">
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Bath className="w-4 h-4 text-primary mr-1" />
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
                <span className="text-xs text-muted-foreground">Baths</span>
              </div>
            </div>

            <div className="flex items-center justify-center text-center">
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Square className="w-4 h-4 text-primary mr-1" />
                  <span className="font-semibold">
                    {property.sqft.toLocaleString()}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">Sqft</span>
              </div>
            </div>
          </div>

          {property.garage && (
            <div className="flex items-center text-muted-foreground mb-4">
              <Car className="w-4 h-4 mr-2" />
              <span className="text-sm">{property.garage} Car Garage</span>
            </div>
          )}

          {/* Agent Info */}
          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{property.agent.name}</p>
                <p className="text-xs text-muted-foreground">
                  Real Estate Agent
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="p-2"
                  onClick={() => window.open(`tel:09060295114`, "_self")}
                >
                  <Phone className="w-3 h-3" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="p-2"
                  onClick={() =>
                    window.open(`mailto:${property.agent.email}`, "_self")
                  }
                >
                  <Mail className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
