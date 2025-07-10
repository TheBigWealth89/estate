import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Award,
  Clock,
  Users,
  TrendingUp,
  MapPin,
  Heart,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Shield,
    title: "Verified Agents",
    description:
      "All our agents are licensed, background-checked professionals with proven track records in real estate.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description:
      "Deep local market knowledge and data-driven insights to help you make informed decisions.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance from our dedicated customer service team whenever you need help.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Users,
    title: "Trusted Network",
    description:
      "Access to a vast network of mortgage brokers, inspectors, and legal professionals.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description:
      "Exclusive access to properties in the most sought-after neighborhoods and developments.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Zap,
    title: "Fast Process",
    description:
      "Streamlined buying and selling process with digital tools that save you time and hassle.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Award,
    title: "Award Winning",
    description:
      "Recognized as the top real estate agency in the Bay Area for three consecutive years.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We go above and beyond to exceed your expectations.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
];

const stats = [
  {
    number: "2,500+",
    label: "Happy Clients",
    description: "Families helped find their dream homes",
  },
  {
    number: "15+",
    label: "Years Experience",
    description: "In the Bay Area real estate market",
  },
  {
    number: "98%",
    label: "Success Rate",
    description: "Of listings sold within 30 days",
  },
  {
    number: "$2B+",
    label: "Sales Volume",
    description: "Total property value transacted",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-choose-us" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted
            <span className="block text-gradient">Real Estate Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With years of experience and thousands of satisfied clients, we're
            committed to making your real estate journey smooth, successful, and
            stress-free.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-500 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.bgColor} flex items-center justify-center`}
                    >
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
