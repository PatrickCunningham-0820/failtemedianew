import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Brands", href: "#brands" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Display Advertising", href: "/advertise" },
      { name: "Sponsored Content", href: "/advertise" },
      { name: "Social Media", href: "/advertise" },
      { name: "Partnerships", href: "/advertise" },
    ],
    brands: [
      { name: "Things to do in Ireland", href: "#" },
      { name: "Cycling in Ireland", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold text-cream">
                Fáilte
              </span>
              <span className="font-display text-2xl font-light text-cream/70">
                {" "}
                Media
              </span>
            </Link>
            <p className="font-body text-sm text-cream/60 mb-6">
              Ireland's premier media network connecting brands with passionate
              audiences across tourism and outdoor lifestyle.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-cream" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-body font-semibold text-cream mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-body font-semibold text-cream mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands Links */}
          <div>
            <h4 className="font-body font-semibold text-cream mb-4">
              Our Brands
            </h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-cream/50">
            © {currentYear} Fáilte Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-sm text-cream/50 hover:text-cream transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-sm text-cream/50 hover:text-cream transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
