import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our community.");
      setEmail("");
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="brand-title text-lg mb-4">
              Become Part of Our Brand Community .
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Subscribe for exclusive drops, early access, and stories from the city.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="brand-title text-xl">
              DRIPENOMICS
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Live . Breathe . Dress For It .
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="brand-subtitle mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/shop" className="hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?collection=new" className="hover:text-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/lookbooks" className="hover:text-foreground transition-colors">
                  Lookbooks
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="brand-subtitle mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/collabs" className="hover:text-foreground transition-colors">
                  Collaborations
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="brand-subtitle mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/dripenomics"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:bg-foreground hover:text-background transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:hello@dripenomics.com"
                className="p-2 border border-border hover:bg-foreground hover:text-background transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dripenomics . All Rights Reserved .
          </p>
          <div className="flex space-x-6 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="hover:text-foreground transition-colors">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
