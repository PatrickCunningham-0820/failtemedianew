import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface BrandCardProps {
  title: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  delay?: number;
}

const BrandCard = ({ title, description, image, stats, delay = 0 }: BrandCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-elevated hover:shadow-dramatic transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-cream flex items-center gap-2">
            {title}
            <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-body text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-secondary rounded-lg">
              <div className="font-display text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BrandCard;
