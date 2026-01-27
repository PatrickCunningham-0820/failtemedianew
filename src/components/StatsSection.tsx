import { motion } from "framer-motion";
import { Users, Eye, TrendingUp, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "3M+",
    label: "Monthly Visitors",
    description: "Combined unique visitors across our platforms",
  },
  {
    icon: Eye,
    value: "15M+",
    label: "Page Views",
    description: "Monthly page impressions for advertisers",
  },
  {
    icon: TrendingUp,
    value: "8.5%",
    label: "Avg. Engagement",
    description: "Industry-leading engagement rates",
  },
  {
    icon: Globe,
    value: "45+",
    label: "Countries Reached",
    description: "Global audience with Irish focus",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-4">
                <stat.icon className="w-7 h-7 text-gold-light" />
              </div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-body text-sm font-semibold text-gold-light uppercase tracking-wide mb-1">
                {stat.label}
              </div>
              <p className="font-body text-xs text-primary-foreground/70 hidden lg:block">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
