import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, Calendar, ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cta" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Find Your
            <span className="block text-gradient">Dream Home?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't wait any longer. Start your real estate journey today with our
            expert team. Whether you're buying, selling, or just exploring,
            we're here to help.
          </p>
        </motion.div>

        {/* Main CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Get Started Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background hover:border-primary/40 transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Start Your Search</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Browse our extensive collection of properties and find the
                  perfect home that matches your lifestyle and budget.
                </p>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#listings")}
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 group w-full"
                >
                  Explore Properties
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Schedule Consultation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background hover:border-primary/40 transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Get personalized advice from our expert agents. Schedule a
                  free consultation to discuss your real estate goals.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("#contact")}
                  className="border-2 border-primary/30 hover:bg-primary/10 transition-all duration-300 group w-full"
                >
                  Schedule Meeting
                  <Calendar className="ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {/* Phone */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Speak directly with our agents
              </p>
              <p className="font-medium">09060295114</p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Send us your questions
              </p>
              <p className="font-medium">info@dreamhomes.com</p>
            </CardContent>
          </Card>

          {/* Office */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold mb-2">Visit Office</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Come see us in person
              </p>
              <p className="font-medium">123 Market St, SF</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Urgency Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Card className="inline-block border-2 border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-yellow-500/5">
            <CardContent className="p-6 flex items-center gap-4">
              <Clock className="w-8 h-8 text-orange-500 animate-pulse" />
              <div className="text-left">
                <p className="font-semibold text-orange-600 dark:text-orange-400">
                  Limited Time Offer
                </p>
                <p className="text-sm text-muted-foreground">
                  Schedule a consultation this month and get a free market
                  analysis worth $500
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
