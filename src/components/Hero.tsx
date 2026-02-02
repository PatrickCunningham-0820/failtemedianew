import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-ireland.jpg";

// Celtic Shamrock SVG Component
const Shamrock = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Three leaves */}
    <path d="M50 35c-8-15-25-20-30-10s5 25 20 25c-15 0-25 15-20 25s22-5 30-20c8 15 25 20 30 10s-5-25-20-25c15 0 25-15 20-25s-22 5-30 20z" />
    {/* Stem */}
    <path d="M48 55c0 0-3 20-8 35h20c-5-15-8-35-8-35h-4z" />
  </svg>
);

// Celtic Knot SVG Component  
const CelticKnot = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="35" strokeOpacity="0.3" />
    <path
      d="M50 15c0 0 25 15 25 35s-25 35-25 35s-25-15-25-35s25-35 25-35z"
      strokeOpacity="0.4"
    />
    <path
      d="M15 50c0 0 15-25 35-25s35 25 35 25s-15 25-35 25s-35-25-35-25z"
      strokeOpacity="0.4"
    />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Dramatic Irish landscape - Cliffs of Moher"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Decorative Celtic Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 left-8 lg:left-16 z-[1]"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shamrock className="w-16 h-16 lg:w-24 lg:h-24 text-gold/20" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute top-32 right-8 lg:right-20 z-[1]"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <CelticKnot className="w-20 h-20 lg:w-32 lg:h-32 text-cream/10" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
        className="absolute bottom-32 left-12 lg:left-24 z-[1]"
      >
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <CelticKnot className="w-14 h-14 lg:w-20 lg:h-20 text-gold/15" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.1 }}
        className="absolute bottom-40 right-10 lg:right-16 z-[1]"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shamrock className="w-12 h-12 lg:w-16 lg:h-16 text-emerald-light/15" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full text-cream text-sm font-body font-medium mb-6">
              <Shamrock className="w-4 h-4" />
              Ireland's Premier Media Network
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
          >
            Connect Your Brand to{" "}
            <span className="text-gold-light">Ireland's</span> Most Engaged
            Audiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10"
          >
            Fáilte Media operates Ireland's leading tourism and cycling
            platforms, reaching millions of passionate enthusiasts ready to
            discover your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/advertise">
                Advertise With Us
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#brands">
                <Play className="mr-2" size={18} />
                Explore Our Brands
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-cream/50 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-cream/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
