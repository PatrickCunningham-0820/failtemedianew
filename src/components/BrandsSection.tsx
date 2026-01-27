import { motion } from "framer-motion";
import BrandCard from "./BrandCard";
import thingsToDoImage from "@/assets/things-to-do.jpg";
import cyclingImage from "@/assets/cycling-ireland.jpg";

const brands = [
  {
    title: "Things to do in Ireland",
    description:
      "Ireland's most comprehensive guide to experiences, attractions, and hidden gems. From ancient castles to modern adventures, we inspire millions of visitors to explore the Emerald Isle.",
    image: thingsToDoImage,
    stats: [
      { label: "Monthly Visitors", value: "2.5M+" },
      { label: "Social Followers", value: "850K" },
      { label: "Email Subscribers", value: "120K" },
      { label: "Engagement Rate", value: "8.2%" },
    ],
  },
  {
    title: "Cycling in Ireland",
    description:
      "The definitive resource for cycling enthusiasts across Ireland. Route guides, gear reviews, event coverage, and a passionate community of riders exploring Ireland by bike.",
    image: cyclingImage,
    stats: [
      { label: "Monthly Visitors", value: "500K+" },
      { label: "Active Members", value: "45K" },
      { label: "Routes Featured", value: "1,200+" },
      { label: "Newsletter Open Rate", value: "42%" },
    ],
  },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="py-24 lg:py-32 bg-background">
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
            Our Media Brands
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Two Powerful Platforms,{" "}
            <span className="text-primary">One Passionate Audience</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Our brands reach engaged audiences across Ireland and beyond,
            offering unique advertising opportunities in the tourism and
            outdoor lifestyle sectors.
          </p>
        </motion.div>

        {/* Brand Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {brands.map((brand, index) => (
            <BrandCard key={brand.title} {...brand} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
