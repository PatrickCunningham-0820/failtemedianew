import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, MapPin, Heart, Mountain, Linkedin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-dramatic max-w-sm mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                    alt="Patrick Cunningham - Founder & CEO of Fáilte Media"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
                
                {/* Quote Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-8 -right-4 lg:right-auto lg:-left-12 bg-card p-6 rounded-xl shadow-elevated max-w-xs"
                >
                  <Quote className="w-8 h-8 text-gold mb-3" />
                  <p className="font-body text-sm text-muted-foreground italic">
                    "Every story we tell is a bridge between Ireland's soul and the world's curiosity."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-body font-medium mb-6">
                Meet the Founder
              </span>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Patrick{" "}
                <span className="text-gradient-hero">Cunningham</span>
              </h1>
              
              <p className="font-body text-xl text-accent font-medium mb-6">
                Founder & CEO, Fáilte Media
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="font-body text-sm">Dublin, Ireland</span>
                </div>
                <a
                  href="https://linkedin.com/in/patrickcunningham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-body text-sm font-medium">LinkedIn</span>
                </a>
              </div>
              
              <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
                <p>
                  Growing up along Ireland's rugged Atlantic coast, I discovered early that our island holds stories that demand to be shared—tales woven into ancient stone walls, whispered through misty valleys, and celebrated on winding country roads.
                </p>
                <p>
                  That childhood wonder became my life's work. I founded Fáilte Media with a simple belief: <span className="text-foreground font-medium">Ireland's magic deserves to reach every curious heart in the world.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 lg:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Journey
              </h2>
              <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full" />
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    A Passion Born from Heritage
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    My grandfather was a storyteller—the kind who could make a rainy afternoon feel like an adventure. He taught me that Ireland isn't just a place; it's a feeling. That feeling stayed with me through years of working in media and marketing, always knowing I wanted to share it with others.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Building Something Meaningful
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    In 2018, I launched "Things to do in Ireland" from my kitchen table with nothing but a laptop and a dream. What started as a passion project grew into Ireland's most trusted tourism platform. When "Cycling in Ireland" followed, I realised we weren't just building websites—we were building communities of people who share our love for this remarkable island.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-background p-8 rounded-2xl border border-border"
              >
                <p className="font-body text-lg text-foreground leading-relaxed text-center italic">
                  "Today, Fáilte Media reaches millions of people who dream of Ireland—and we help brands become part of those dreams. It's more than business; it's a privilege to connect people with the places and experiences that make Ireland unforgettable."
                </p>
                <p className="font-body text-sm text-muted-foreground text-center mt-4">
                  — Patrick Cunningham
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Drives Me
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Authenticity",
                description: "Every piece of content we create reflects the true spirit of Ireland—no shortcuts, no gimmicks, just genuine storytelling.",
              },
              {
                title: "Community",
                description: "Our readers and partners aren't customers—they're fellow Ireland enthusiasts. We grow together, learn together, and celebrate together.",
              },
              {
                title: "Impact",
                description: "We measure success not just in numbers, but in the memories we help create and the local businesses we help thrive.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-elevated transition-all duration-300"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
              Let's Tell Your Story Together
            </h2>
            <p className="font-body text-lg text-cream/80 max-w-2xl mx-auto mb-10">
              I'd love to hear about your brand and explore how we can connect you with Ireland's most passionate audiences.
            </p>
            <a
              href="/advertise"
              className="inline-flex items-center justify-center gap-2 bg-cream text-primary font-body font-semibold px-8 py-4 rounded-lg shadow-elevated hover:shadow-dramatic hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
