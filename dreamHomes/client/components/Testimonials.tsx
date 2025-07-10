import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "First-time Homebuyer",
    company: "San Francisco",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    content:
      "DreamHomes made buying my first home stress-free! Their team guided me through every step, found me the perfect condo in SOMA, and negotiated a great price. Couldn't be happier!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    company: "Palo Alto",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    content:
      "I've worked with many real estate agencies, but DreamHomes stands out. Their market knowledge is exceptional, and they helped me build a profitable investment portfolio across the Bay Area.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Family of Four",
    company: "Sunset District",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    content:
      "We needed a family home with great schools nearby. The team understood our needs perfectly and found us a beautiful Victorian house. Our kids love their new neighborhood!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Home Seller",
    company: "Mission District",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    content:
      "Sold my home in just 3 weeks for 15% above asking price! Their marketing strategy and staging advice were spot-on. Professional, responsive, and results-driven.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Luxury Home Buyer",
    company: "Pacific Heights",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    content:
      "The luxury home market is complex, but DreamHomes made it simple. They understood my vision and found me a stunning penthouse with incredible city views. Exceptional service!",
    rating: 5,
  },
  {
    id: 6,
    name: "Alex Kumar",
    role: "Relocating Professional",
    company: "Mountain View",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    content:
      "Moving from New York was daunting, but DreamHomes made the transition seamless. They helped me find a great home near my office and handled everything remotely. Highly recommend!",
    rating: 5,
  },
];

const companies = [
  {
    name: "Wells Fargo",
    logo: "https://via.placeholder.com/120x40/6366f1/white?text=Wells+Fargo",
  },
  {
    name: "Coldwell Banker",
    logo: "https://via.placeholder.com/120x40/8b5cf6/white?text=Coldwell",
  },
  {
    name: "Compass",
    logo: "https://via.placeholder.com/120x40/06b6d4/white?text=Compass",
  },
  {
    name: "Zillow",
    logo: "https://via.placeholder.com/120x40/10b981/white?text=Zillow",
  },
  {
    name: "Redfin",
    logo: "https://via.placeholder.com/120x40/f59e0b/white?text=Redfin",
  },
  {
    name: "Keller Williams",
    logo: "https://via.placeholder.com/120x40/ef4444/white?text=KW",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Client Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients
            <span className="block text-gradient">Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from real clients who found their dream homes with
            DreamHomes. See why we're the Bay Area's most trusted real estate
            team.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  <Quote className="w-8 h-8" />
                </div>
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="border-2 border-primary/20">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-8 text-muted-foreground">
            Trusted partners in real estate
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-8 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
