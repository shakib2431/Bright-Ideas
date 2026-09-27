import { Link, useLocation } from "wouter";
import { companyData } from "@/data/content";
import { useScroll } from "@/hooks/use-scroll";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const scrolled = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:flex bg-primary text-primary-foreground py-2 px-6 justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-6">
          <a href={`mailto:${companyData.contact.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={14} />
            {companyData.contact.email}
          </a>
          <a href={`tel:${companyData.contact.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={14} />
            {companyData.contact.phone}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="opacity-80">Rourkela's Premier Branding Partner</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-white py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="group">
 <img
  src="/logo.png"
  alt="Bright Ideas"
  className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
/>
</Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium text-sm transition-colors hover:text-accent ${
                  location === link.path ? "text-accent" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-xl font-display font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${
                    location === link.path ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="bg-primary text-white px-6 py-3.5 rounded-full font-semibold text-base text-center hover:bg-primary/90 transition-all">
                Get a Quote
              </Link>

              <div className="pt-6 border-t mt-4 flex flex-col gap-4 text-base font-sans font-normal">
                <a href={`tel:${companyData.contact.phone}`} className="flex items-center gap-3">
                  <Phone size={18} className="text-accent" />
                  {companyData.contact.phone}
                </a>
                <a href={`mailto:${companyData.contact.email}`} className="flex items-center gap-3">
                  <Mail size={18} className="text-accent" />
                  {companyData.contact.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
