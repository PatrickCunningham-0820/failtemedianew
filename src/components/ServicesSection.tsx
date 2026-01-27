import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Megaphone,
  Mail,
  Instagram,
  FileText,
  Video,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Display Advertising",
    description:
      "Premium banner placements across high-traffic pages with targeted positioning.",
  },
  {
    icon: FileText,
    title: "Sponsored Content",
    description:
      "Native articles and guides that seamlessly integrate your brand story.",
  },
  {
    icon: Mail,
    title: "Newsletter Features",
    description:
      "Reach our engaged subscribers with dedicated email placements.",
  },
  {
    icon: Instagram,
    title: "Social Media",
    description:
      "Amplify your message through our established social channels.",
  },
  {
    icon: Video,
    title: "Video Content",
    description:
      "Cinematic video production showcasing Ireland and your brand.",
  },
  {
    icon: Users,
    title: "Brand Partnerships",
    description:
      "Long-term strategic collaborations tailored to your goals.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-body font-medium mb-4">
            Advertising Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Advertising Solutions That{" "}
            <span className="text-primary">Deliver Results</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From digital display to immersive content partnerships, we offer
            flexible advertising options to connect your brand with Ireland's
            most passionate audiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 lg:p-8 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="gold" size="xl" asChild>
            <Link to="/advertise">
              View All Services
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
