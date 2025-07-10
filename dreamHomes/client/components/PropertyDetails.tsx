import { motion } from "framer-motion";
import {
  X,
  MapPin,
  Bed,
  Bath,
  Car,
  Square,
  Calendar,
  Heart,
  Share2,
  Phone,
  Mail,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Property {
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
}

interface PropertyDetailsProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyDetails({
  property,
  isOpen,
  onClose,
}: PropertyDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!property) return null;

  const images = property.images || [property.image];

  const formatPrice = (price: number) => {
    return price >= 1000000
      ? `$${(price / 1000000).toFixed(2)}M`
      : `$${price.toLocaleString()}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] flex p-0 overflow-hidden">
        <DialogTitle className="sr-only">
          Property Details - {property.title}
        </DialogTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="flex flex-col lg:flex-row h-full w-full"
        >
          {/* Image Gallery */}
          <div className="lg:w-2/3 relative">
            <div className="relative h-80 lg:h-full">
              <img
                src={images[currentImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Camera className="w-4 h-4" />
                {currentImageIndex + 1} / {images.length}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/90 hover:bg-white"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart
                    className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/90 hover:bg-white"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Property Type Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground">
                  {property.type}
                </Badge>
                {property.featured && (
                  <Badge variant="secondary" className="ml-2">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="lg:w-1/3 p-6 flex flex-col overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Price */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-primary mb-2">
                {formatPrice(property.price)}
              </h1>
              <div className="text-sm text-muted-foreground">
                ${Math.round(property.price / property.sqft)}/sqft
              </div>
            </div>

            {/* Title & Location */}
            <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
            <div className="flex items-center text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{property.location}</span>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Bed className="w-5 h-5 text-primary mr-1" />
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <span className="text-xs text-muted-foreground">Beds</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Bath className="w-5 h-5 text-primary mr-1" />
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
                <span className="text-xs text-muted-foreground">Baths</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Square className="w-5 h-5 text-primary mr-1" />
                  <span className="font-semibold">
                    {property.sqft.toLocaleString()}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">Sqft</span>
              </div>
              {property.garage && (
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Car className="w-5 h-5 text-primary mr-1" />
                    <span className="font-semibold">{property.garage}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Garage</span>
                </div>
              )}
            </div>

            {/* Property Info */}
            {(property.yearBuilt || property.lotSize) && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Property Information</h3>
                <div className="space-y-2 text-sm">
                  {property.yearBuilt && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Built:</span>
                      <span>{property.yearBuilt}</span>
                    </div>
                  )}
                  {property.lotSize && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lot Size:</span>
                      <span>{property.lotSize}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Description */}
            {property.description && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Description</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>
            )}

            {/* Features */}
            {property.features && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Features & Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <Separator className="my-6" />

            {/* Agent Info */}
            <div className="mb-6">
              <h3 className="font-semibold mb-4">Contact Agent</h3>
              <div className="flex items-start gap-4">
                <Avatar className="border-2 border-primary/20">
                  <AvatarImage
                    src={property.agent.avatar}
                    alt={property.agent.name}
                  />
                  <AvatarFallback>
                    {property.agent.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">{property.agent.name}</div>
                  <div className="text-sm text-muted-foreground mb-3">
                    Real Estate Agent
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
              <Button className="flex-1 bg-gradient-primary">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Tour
              </Button>
              <Button variant="outline" className="flex-1">
                <Phone className="w-4 h-4 mr-2" />
                Contact Agent
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
