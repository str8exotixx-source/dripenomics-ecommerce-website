import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Lookbooks", href: "/lookbooks" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const announcements = [
  "Live . Breathe . Dress For It .",
  "Free Shipping on Orders Over R1000",
  "New Collection — City Stories Prelude",
];

const Navbar = () => {
  const [cartCount] = useState(0);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      {/* Sliding Announcement Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden">
        <div className="relative h-4 flex items-center justify-center">
          {announcements.map((text, index) => (
            <span
              key={index}
              className={cn(
                "absolute text-xs tracking-widest uppercase transition-all duration-500",
                index === currentAnnouncement
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 -ml-2 text-foreground"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] bg-background">
              <div className="flex flex-col space-y-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "brand-subtitle text-lg transition-opacity hover:opacity-60",
                      location.pathname === link.href && "opacity-60"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Nav Links - Left */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "brand-subtitle transition-opacity hover:opacity-60 text-foreground",
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
            className="brand-title text-xl md:text-2xl text-foreground"
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
                  "brand-subtitle transition-opacity hover:opacity-60 text-foreground",
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
              className="p-2 transition-opacity hover:opacity-60 text-foreground"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              to="/cart"
              className="p-2 transition-opacity hover:opacity-60 relative text-foreground"
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
  );
};

export default Navbar;
