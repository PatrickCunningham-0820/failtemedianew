import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast.success("Thank you for your enquiry! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@failtemedia.ie",
      href: "mailto:hello@failtemedia.ie",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+353 85 123 4567",
      href: "tel:+353851234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Dublin, Ireland",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-body font-medium mb-4">
            <Send className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Reach{" "}
            <span className="text-gradient-hero">Ireland's Audience?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how Fáilte Media can help your brand connect with
            engaged audiences across Ireland.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-body font-semibold text-foreground text-sm mb-0.5">
                        {item.title}
                      </h4>
                      <p className="font-body text-muted-foreground group-hover:text-primary transition-colors">
                        {item.content}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border/50">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm mb-0.5">
                        {item.title}
                      </h4>
                      <p className="font-body text-muted-foreground">
                        {item.content}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-5 bg-primary/5 rounded-xl border border-primary/10 mt-6"
            >
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Response Time:</span>{" "}
                We typically respond within 24 hours on business days.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 lg:p-8 bg-card rounded-2xl shadow-elevated border border-border/50"
            >
              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="block font-body text-sm font-medium text-foreground">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="John Murphy"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background border-border/70 focus:border-primary h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-body text-sm font-medium text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.ie"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background border-border/70 focus:border-primary h-11"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <label className="block font-body text-sm font-medium text-foreground">
                  Company
                </label>
                <Input
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-background border-border/70 focus:border-primary h-11"
                />
              </div>

              <div className="space-y-2 mb-6">
                <label className="block font-body text-sm font-medium text-foreground">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  placeholder="Tell us about your advertising goals..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-background border-border/70 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                size="xl" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Enquiry
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>

              <p className="font-body text-xs text-muted-foreground text-center mt-4">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
