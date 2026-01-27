import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Megaphone,
  Mail,
  Instagram,
  FileText,
  Video,
  Users,
  Check,
  ArrowRight,
} from "lucide-react";
import thingsToDoImage from "@/assets/things-to-do.jpg";
import cyclingImage from "@/assets/cycling-ireland.jpg";

const advertisingPackages = [
  {
    name: "Starter",
    description: "Perfect for brands testing the Irish market",
    price: "€500",
    period: "/month",
    features: [
      "Banner advertising on one platform",
      "1x sponsored social post per month",
      "Monthly performance report",
      "Basic audience targeting",
    ],
    popular: false,
  },
  {
    name: "Growth",
    description: "Our most popular option for growing brands",
    price: "€1,500",
    period: "/month",
    features: [
      "Premium banner placements on both platforms",
      "2x sponsored content articles",
      "Weekly social media features",
      "Newsletter inclusion",
      "Advanced audience targeting",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full partnership for maximum impact",
    price: "Custom",
    period: "",
    features: [
      "Exclusive category sponsorship",
      "Unlimited sponsored content",
      "Custom video production",
      "Event partnerships",
      "White-label content solutions",
      "Strategic brand integration",
      "Quarterly strategy reviews",
    ],
    popular: false,
  },
];

const adFormats = [
  {
    icon: Megaphone,
    title: "Display Advertising",
    description:
      "High-visibility banner placements strategically positioned across high-traffic pages. Multiple formats including leaderboards, skyscrapers, and native units.",
    specs: [
      "Leaderboard (728x90)",
      "Skyscraper (300x600)",
      "Medium Rectangle (300x250)",
      "Mobile Banner (320x50)",
    ],
  },
  {
    icon: FileText,
    title: "Sponsored Content",
    description:
      "Authentic, editorial-style articles created by our team that showcase your brand within valuable, engaging content that readers trust.",
    specs: [
      "Written by Irish travel writers",
      "SEO-optimised for long-term visibility",
      "Social media amplification included",
      "Professional photography",
    ],
  },
  {
    icon: Mail,
    title: "Newsletter Advertising",
    description:
      "Reach our highly engaged email subscribers with dedicated features or banner placements in our weekly newsletters.",
    specs: [
      "120K+ combined subscribers",
      "42% average open rate",
      "Dedicated send or banner option",
      "A/B testing available",
    ],
  },
  {
    icon: Instagram,
    title: "Social Media",
    description:
      "Leverage our established social presence with sponsored posts, stories, and collaborative content across multiple platforms.",
    specs: [
      "850K+ combined followers",
      "Instagram, Facebook, Twitter, TikTok",
      "Story takeovers available",
      "User-generated content campaigns",
    ],
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Cinematic video content showcasing Ireland and your brand, produced by our experienced team of videographers and editors.",
    specs: [
      "Full production services",
      "Drone footage available",
      "Distribution across all channels",
      "Perpetual usage rights option",
    ],
  },
  {
    icon: Users,
    title: "Brand Partnerships",
    description:
      "Strategic, long-term collaborations that integrate your brand deeply into our content and community.",
    specs: [
      "Category exclusivity available",
      "Co-branded content series",
      "Event sponsorship opportunities",
      "Custom activations",
    ],
  },
];

const Advertise = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-atlantic rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-gold-light text-sm font-body font-medium mb-6">
              Advertising Solutions
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Reach Ireland's Most{" "}
              <span className="text-gold-light">Engaged Audiences</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Connect your brand with millions of passionate travellers and
              cycling enthusiasts through Ireland's leading lifestyle media
              platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advertise Across Our Platforms
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Choose to advertise on one or both of our platforms for maximum
              reach and impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Things to do in Ireland */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-elevated"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={thingsToDoImage}
                  alt="Things to do in Ireland"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-display text-2xl font-bold text-cream">
                  Things to do in Ireland
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="font-display text-xl font-bold text-primary">
                      2.5M+
                    </div>
                    <div className="font-body text-xs text-muted-foreground">
                      Monthly Visitors
                    </div>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="font-display text-xl font-bold text-primary">
                      850K
                    </div>
                    <div className="font-body text-xs text-muted-foreground">
                      Social Followers
                    </div>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-sm">
                  Perfect for tourism businesses, hospitality brands, outdoor
                  retailers, and experience providers looking to reach Irish and
                  international travellers.
                </p>
              </div>
            </motion.div>

            {/* Cycling in Ireland */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-elevated"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cyclingImage}
                  alt="Cycling in Ireland"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-display text-2xl font-bold text-cream">
                  Cycling in Ireland
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="font-display text-xl font-bold text-primary">
                      500K+
                    </div>
                    <div className="font-body text-xs text-muted-foreground">
                      Monthly Visitors
                    </div>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="font-display text-xl font-bold text-primary">
                      45K
                    </div>
                    <div className="font-body text-xs text-muted-foreground">
                      Active Members
                    </div>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-sm">
                  Ideal for cycling brands, sports nutrition companies, outdoor
                  gear manufacturers, and fitness-related businesses targeting
                  active Irish cyclists.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Formats */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-body font-medium mb-4">
              Advertising Formats
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flexible Formats for Every Goal
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Choose from a range of advertising solutions designed to meet your
              specific marketing objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <format.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {format.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {format.description}
                </p>
                <ul className="space-y-2">
                  {format.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 font-body text-sm text-foreground"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-body font-medium mb-4">
              Pricing
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advertising Packages
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Flexible packages designed to suit businesses of all sizes, from
              startups to enterprise brands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advertisingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground shadow-dramatic scale-105"
                    : "bg-card shadow-elevated hover:shadow-dramatic"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold rounded-full text-foreground text-sm font-body font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3
                    className={`font-display text-2xl font-bold mb-2 ${
                      pkg.popular ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`font-body text-sm ${
                      pkg.popular
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {pkg.description}
                  </p>
                </div>
                <div className="text-center mb-6">
                  <span
                    className={`font-display text-4xl font-bold ${
                      pkg.popular ? "text-gold-light" : "text-primary"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={
                      pkg.popular
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }
                  >
                    {pkg.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.popular ? "text-gold-light" : "text-primary"
                        }`}
                      />
                      <span
                        className={`font-body text-sm ${
                          pkg.popular
                            ? "text-primary-foreground"
                            : "text-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "hero" : "gold"}
                  className="w-full"
                  asChild
                >
                  <a href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Advertising?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8">
              Get in touch with our team to discuss your advertising goals and
              create a custom solution for your brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:hello@failtemedia.ie">
                  Contact Us
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="/#contact">Request Media Kit</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Advertise;
