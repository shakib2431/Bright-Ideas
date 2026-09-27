import { Link } from "wouter";
import type { MouseEvent } from "react";
import { companyData } from "@/data/content";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  /*
   * These IDs come directly from servicesData in content.ts.
   *
   * Corporate Branding          -> corporate-branding
   * LED & ACP Signage            -> led-signage
   * Flex & Offset Printing       -> flex-printing
   * Vehicle Wraps                -> vehicle-branding
   * Premium Corporate Gifts      -> corporate-gifts
   * Office Environment Graphics  -> office-branding
   */
  const expertiseLinks = [
    {
      name: "Corporate Branding",
      target: "corporate-branding",
    },
    {
      name: "LED & ACP Signage",
      target: "led-signage",
    },
    {
      name: "Flex & Offset Printing",
      target: "flex-printing",
    },
    {
      name: "Vehicle Wraps",
      target: "vehicle-branding",
    },
    {
      name: "Premium Corporate Gifts",
      target: "corporate-gifts",
    },
    {
      name: "Office Environment Graphics",
      target: "office-branding",
    },
  ];

  /*
   * Handles service navigation.
   *
   * If we're already on /services:
   *   -> find the exact service section
   *   -> smooth scroll to it
   *   -> update the URL hash
   *
   * If we're on another page:
   *   -> navigate to /services#service-id
   */
  const handleServiceClick = (
    event: MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    event.preventDefault();

    const servicesPath = "/services";
    const targetUrl = `${servicesPath}#${target}`;

    // Normalize pathname in case of trailing slash.
    const currentPath =
      window.location.pathname.replace(/\/$/, "") || "/";

    const normalizedServicesPath =
      servicesPath.replace(/\/$/, "");

    // Already on Services page.
    if (currentPath === normalizedServicesPath) {
      const element = document.getElementById(target);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Keep browser URL synchronized with the selected service.
        window.history.replaceState(
          null,
          "",
          targetUrl,
        );
      }

      return;
    }

    // Coming from another page.
    window.location.href = targetUrl;
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b0f14] text-slate-300 border-t border-slate-800">
      {/* =========================================================
          BACKGROUND GLOWS
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -top-40
          right-[-120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-120px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-accent/5
          blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-16
          sm:px-6
          lg:px-10
          lg:py-20
        "
      >
        {/* =========================================================
            MAIN FOOTER GRID
        ========================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-10
            xl:gap-16
          "
        >
          {/* =======================================================
              BRAND
          ======================================================== */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="group inline-flex w-fit items-center"
              aria-label="Bright Ideas home"
            >
              <img
                src="/logo for footer.png"
                alt="Bright Ideas"
                className="
                  h-12
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-[1.02]
                "
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              {companyData.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              <a
                href={companyData.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent/40
                  hover:bg-accent
                  hover:text-white
                "
              >
                <Facebook size={17} />
              </a>

              <a
                href={companyData.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent/40
                  hover:bg-accent
                  hover:text-white
                "
              >
                <Instagram size={17} />
              </a>

              <a
                href={companyData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent/40
                  hover:bg-accent
                  hover:text-white
                "
              >
                <Linkedin size={17} />
              </a>

              <a
                href={companyData.social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent/40
                  hover:bg-accent
                  hover:text-white
                "
              >
                <Twitter size={17} />
              </a>
            </div>
          </div>

          {/* =======================================================
              QUICK LINKS
          ======================================================== */}
          <div>
            <h4 className="mb-6 text-base font-bold tracking-wide text-white">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-3.5">
              <li>
                <Link
                  href="/about"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-accent
                  "
                >
                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-accent
                  "
                >
                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                  Our Services
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-accent
                  "
                >
                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-accent
                  "
                >
                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-accent
                  "
                >
                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-accent
                  "
                >
                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* =======================================================
              OUR EXPERTISE
          ======================================================== */}
          <div>
            <h4 className="mb-6 text-base font-bold tracking-wide text-white">
              Our Expertise
            </h4>

            <ul className="flex flex-col gap-3.5">
              {expertiseLinks.map((service) => (
                <li key={service.target}>
                  <a
                    href={`/services#${service.target}`}
                    onClick={(event) =>
                      handleServiceClick(
                        event,
                        service.target,
                      )
                    }
                    className="
                      text-sm
                      text-slate-400
                      transition-colors
                      hover:text-accent
                    "
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =======================================================
              CONTACT
          ======================================================== */}
          <div>
            <h4 className="mb-6 text-base font-bold tracking-wide text-white">
              Contact Info
            </h4>

            <ul className="flex flex-col gap-5">
              {/* Address */}
              <li className="flex items-start gap-3">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-accent/[0.10]
                    text-accent
                  "
                >
                  <MapPin size={17} />
                </span>

                <span className="pt-1 text-sm leading-6 text-slate-400">
                  {companyData.contact.address}
                </span>
              </li>

              {/* Phone */}
              <li>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-accent
                  "
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-accent/[0.10]
                      text-accent
                    "
                  >
                    <Phone size={16} />
                  </span>

                  <span>{companyData.contact.phone}</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-accent
                  "
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-accent/[0.10]
                      text-accent
                    "
                  >
                    <Mail size={16} />
                  </span>

                  <span className="break-all">
                    {companyData.contact.email}
                  </span>
                </a>
              </li>
            </ul>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-white
                transition-colors
                hover:text-accent
              "
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}
        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/[0.08]
            pt-7
            text-xs
            text-slate-500
            md:flex-row
          "
        >
          <p>
            &copy; {new Date().getFullYear()} Bright Ideas. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-accent"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}