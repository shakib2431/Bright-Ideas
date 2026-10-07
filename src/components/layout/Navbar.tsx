import { Link, useLocation } from "wouter";
import { companyData } from "@/data/content";
import { useScroll } from "@/hooks/use-scroll";
import { Menu, X, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Gallery", path: "/gallery" },
  { name: "Machinery", path: "/machinery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const scrolled = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* =========================================================
          DESKTOP + MOBILE NAVBAR
      ========================================================== */}
      <header
        className={`
          sticky top-0 z-50 w-full
          border-b border-black/[0.06]
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
              : "bg-white"
          }
        `}
      >
       

        <div
          className={`
            mx-auto
            flex
            w-full
            max-w-[1440px]
            items-center
            justify-between
            px-5
            sm:px-6
            lg:px-10
            transition-all duration-300
            ${scrolled ? "h-[68px]" : "h-[74px]"}
          `}
        >
          {/* =====================================================
              LOGO
          ====================================================== */}
          <Link
            href="/"
            aria-label="Bright Ideas home"
            className="
              group
              flex
              shrink-0
              items-center
            "
          >
            <img
              src="/logo.png"
              alt="Bright Ideas"
              className="
                h-[39px]
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-[1.02]
                sm:h-[41px]
              "
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav
            className="
              hidden
              md:flex
              items-center
              gap-0.5
              lg:gap-1
            "
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = location === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    relative
                    flex
                    items-center
                    px-3
                    lg:px-3.5
                    py-2
                    text-[13px]
                    lg:text-[14px]
                    font-semibold
                    tracking-[-0.01em]
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? "text-primary"
                        : "text-slate-800 hover:text-primary"
                    }
                  `}
                >
                  {link.name}

                  {/* Active indicator */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-primary
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-5 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =====================================================
              GET A QUOTE
          ====================================================== */}
          <Link
            href="/contact"
            className="
              group
              hidden
              md:flex
              items-center
              gap-2
              rounded-full
              bg-primary
              px-5
              lg:px-[22px]
              py-[11px]
              text-[13px]
              lg:text-[14px]
              font-bold
              text-white
              shadow-[0_5px_18px_rgba(0,0,0,0.10)]
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:shadow-[0_8px_22px_rgba(0,0,0,0.15)]
            "
          >
            <span>Get a Quote</span>

            <ArrowUpRight
              size={16}
              strokeWidth={2.4}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen((previous) => !previous)
            }
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-black/[0.08]
              bg-white
              text-slate-900
              transition-all
              duration-200
              hover:border-primary/30
              hover:text-primary
              active:scale-95
              md:hidden
            "
          >
            {mobileMenuOpen ? (
              <X size={20} strokeWidth={2} />
            ) : (
              <Menu size={20} strokeWidth={2} />
            )}
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="
              fixed
              inset-x-0
              top-[71px]
              z-40
              max-h-[calc(100vh-71px)]
              overflow-y-auto
              border-b
              border-black/[0.07]
              bg-white
              shadow-[0_18px_45px_rgba(0,0,0,0.10)]
              md:hidden
            "
          >
            <div className="px-5 pb-7 pt-4 sm:px-6">

              {/* Navigation */}
              <nav
                className="flex flex-col"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link, index) => {
                  const isActive = location === link.path;

                  return (
                    <motion.div
                      key={link.path}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.035,
                        duration: 0.2,
                      }}
                    >
                      <Link
                        href={link.path}
                        aria-current={
                          isActive ? "page" : undefined
                        }
                        className={`
                          flex
                          items-center
                          justify-between
                          border-b
                          border-black/[0.06]
                          py-4
                          text-[17px]
                          font-semibold
                          transition-colors
                          ${
                            isActive
                              ? "text-primary"
                              : "text-slate-800 hover:text-primary"
                          }
                        `}
                      >
                        <span>{link.name}</span>

                        {isActive && (
                          <span
                            className="
                              h-2
                              w-2
                              rounded-full
                              bg-primary
                            "
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-5">
                  <Link
                    href="/contact"
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-primary
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_7px_22px_rgba(0,0,0,0.12)]
                      transition-all
                      duration-300
                      hover:bg-primary/90
                    "
                  >
                    <span>Get a Quote</span>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={2.3}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </Link>
                </div>
              </nav>

              {/* =================================================
                  CONTACT INFORMATION
              ================================================== */}
              <div
                className="
                  mt-6
                  border-t
                  border-black/[0.07]
                  pt-5
                "
              >
                <p
                  className="
                    mb-4
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-slate-400
                  "
                >
                  Start a conversation
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${companyData.contact.phone}`}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-medium
                      text-slate-700
                      transition-colors
                      hover:text-primary
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-primary/[0.08]
                        text-primary
                      "
                    >
                      <Phone size={15} />
                    </span>

                    <span>
                      {companyData.contact.phone}
                    </span>
                  </a>

                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-medium
                      text-slate-700
                      transition-colors
                      hover:text-primary
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-primary/[0.08]
                        text-primary
                      "
                    >
                      <Mail size={15} />
                    </span>

                    <span className="break-all">
                      {companyData.contact.email}
                    </span>
                  </a>
                </div>
              </div>

              {/* Mobile Brand */}
              <div className="mt-6">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-slate-400
                  "
                >
                  Bright Ideas
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-relaxed
                    text-slate-500
                  "
                >
                  Rourkela's Premier Branding Partner
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

