import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Lookbooks", href: "/lookbooks" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

interface NavbarProps {
  variant?: "default" | "transparent";
}

const Navbar = ({ variant = "default" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const location = useLocation();

  const isTransparent = variant === "transparent";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTransparent ? "bg-transparent" : "bg-background border-b border-border"
        )}
      >
        {/* Announcement Bar */}
        <div className={cn(
          "py-2 text-center text-xs tracking-widest uppercase",
          isTransparent ? "bg-foreground/10 text-primary-foreground" : "bg-secondary text-secondary-foreground"
        )}>
          <span>Live . Breathe . Dress For It .</span>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "lg:hidden p-2 -ml-2",
                isTransparent ? "text-primary-foreground" : "text-foreground"
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Nav Links - Left */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "brand-subtitle transition-opacity hover:opacity-60",
                    isTransparent ? "text-primary-foreground" : "text-foreground",
                    location.pathname === link.href && "opacity-60"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Logo - Center */}
            <Link
              to="/"
              className={cn(
                "brand-title text-xl md:text-2xl",
                isTransparent ? "text-primary-foreground" : "text-foreground"
              )}
            >
              DRIPENOMICS
            </Link>

            {/* Desktop Nav Links - Right */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "brand-subtitle transition-opacity hover:opacity-60",
                    isTransparent ? "text-primary-foreground" : "text-foreground",
                    location.pathname === link.href && "opacity-60"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons - Right */}
            <div className="flex items-center space-x-4">
              <button
                className={cn(
                  "p-2 transition-opacity hover:opacity-60",
                  isTransparent ? "text-primary-foreground" : "text-foreground"
                )}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link
                to="/cart"
                className={cn(
                  "p-2 transition-opacity hover:opacity-60 relative",
                  isTransparent ? "text-primary-foreground" : "text-foreground"
                )}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-transform duration-300 lg:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "brand-title text-2xl transition-opacity hover:opacity-60",
                location.pathname === link.href && "opacity-60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
