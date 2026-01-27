import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your enquiry! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-body font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Reach{" "}
              <span className="text-primary">Ireland's Audience?</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Let's discuss how Fáilte Media can help your brand connect with
              engaged audiences across Ireland. Our team is ready to create a
              custom advertising solution for you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@failtemedia.ie"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@failtemedia.ie
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground">
                    Call Us
                  </h4>
                  <a
                    href="tel:+353851234567"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    +353 85 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground">
                    Visit Us
                  </h4>
                  <p className="font-body text-muted-foreground">
                    Dublin, Ireland
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-card rounded-2xl shadow-elevated"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Murphy"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.ie"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your advertising goals..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full">
                  Send Enquiry
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
