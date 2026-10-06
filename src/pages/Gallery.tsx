import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { siteImages, projectImages } from "@/data/content";
import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryCategories = [
  "All",
  "Printing",
  "Branding",
  "Signage",
  "Corporate Gifts",
  "Office Graphics",
  "Vehicle Branding"
];

const galleryImages = [
  // ============================================================
  // EXISTING GALLERY IMAGES
  // ============================================================

  {
    id: 1,
    src: siteImages.serviceFlex,
    category: "Printing",
    title: "Large Format Flex Printing"
  },
  {
    id: 2,
    src: siteImages.serviceBranding,
    category: "Branding",
    title: "Corporate Identity Kit"
  },
  {
    id: 3,
    src: siteImages.serviceSignage,
    category: "Signage",
    title: "3D LED Corporate Signage"
  },
  {
    id: 4,
    src: siteImages.serviceGifts,
    category: "Corporate Gifts",
    title: "Premium Gift Set"
  },
  {
    id: 5,
    src: siteImages.aboutOffice,
    category: "Office Graphics",
    title: "Interior Wall Graphics"
  },
  {
    id: 6,
    src: siteImages.serviceVehicle,
    category: "Vehicle Branding",
    title: "Fleet Wrap"
  },
  {
    id: 7,
    src: siteImages.project1,
    category: "Signage",
    title: "Exterior Architectural Signage"
  },
  {
    id: 8,
    src: siteImages.project2,
    category: "Office Graphics",
    title: "Frosted Glass Manifestation"
  },

  // ============================================================
  // NEW BRIGHT IDEAS GALLERY IMAGES
  // ============================================================

  {
    id: 301,
    src: "/projects/gallery/gallery-01-lightbox-signage.jpeg",
    category: "Signage",
    title: "Lightbox Signage"
  },
  {
    id: 302,
    src: "/projects/gallery/gallery-01.jpg",
    category: "Signage",
    title: "Bright Ideas Signage"
  },
  {
    id: 303,
    src: "/projects/gallery/gallery-02-bright-ideas-logo.jpeg",
    category: "Signage",
    title: "Bright Ideas 3D Logo"
  },
  {
    id: 304,
    src: "/projects/gallery/gallery-02.jpg",
    category: "Branding",
    title: "Brand Identity"
  },
  {
    id: 305,
    src: "/projects/gallery/gallery-03-hp-fuel-station.jpg",
    category: "Signage",
    title: "HP Fuel Station Signage"
  },
  {
    id: 306,
    src: "/projects/gallery/gallery-03.jpg",
    category: "Signage",
    title: "Commercial Signage"
  },
  {
    id: 307,
    src: "/projects/gallery/gallery-04-3d-letter-a.jpeg",
    category: "Signage",
    title: "3D Letter Signage"
  },
  {
    id: 308,
    src: "/projects/gallery/gallery-04.jpg",
    category: "Branding",
    title: "Branding Project"
  },
  {
    id: 309,
    src: "/projects/gallery/gallery-05-sunny-cell-point.jpg",
    category: "Signage",
    title: "Sunny Cell Point"
  },
  {
    id: 310,
    src: "/projects/gallery/gallery-05.jpg",
    category: "Signage",
    title: "Signage Installation"
  },
  {
    id: 311,
    src: "/projects/gallery/gallery-06-menu-wall-graphics.jpeg",
    category: "Office Graphics",
    title: "Menu Wall Graphics"
  },
  {
    id: 312,
    src: "/projects/gallery/gallery-07-residential-exterior.jpg",
    category: "Signage",
    title: "Residential Exterior Branding"
  },
  {
    id: 313,
    src: "/projects/gallery/gallery-08-3d-letter-installation.jpeg",
    category: "Signage",
    title: "3D Letter Installation"
  },
  {
    id: 314,
    src: "/projects/gallery/gallery-09-restaurant-menu-displays.jpeg",
    category: "Office Graphics",
    title: "Restaurant Menu Displays"
  },
  {
    id: 315,
    src: "/projects/gallery/gallery-10-corporate-wall-signage.jpg",
    category: "Office Graphics",
    title: "Corporate Wall Signage"
  },
  {
    id: 316,
    src: "/projects/gallery/gallery-11-balaji-dry-fruits.jpg",
    category: "Signage",
    title: "Balaji Dry Fruits"
  },
  {
    id: 317,
    src: "/projects/gallery/gallery-12-apollo-digital-display.jpeg",
    category: "Signage",
    title: "Apollo Digital Display"
  },
  {
    id: 318,
    src: "/projects/gallery/gallery-13-axperia-storefront.jpg",
    category: "Signage",
    title: "Axperia Storefront"
  },
  {
    id: 319,
    src: "/projects/gallery/gallery-14-orissa-vastra-bhandar.jpg",
    category: "Signage",
    title: "Orissa Vastra Bhandar"
  },
  {
    id: 320,
    src: "/projects/gallery/gallery-15-ampersand-3d-sign.jpeg",
    category: "Signage",
    title: "Ampersand 3D Sign"
  },
  {
    id: 321,
    src: "/projects/gallery/gallery-16-office-sale-graphics.jpeg",
    category: "Office Graphics",
    title: "Office Sale Graphics"
  },
  {
    id: 322,
    src: "/projects/gallery/gallery-17-pink-store-signage.jpg",
    category: "Signage",
    title: "Pink Store Signage"
  },
  {
    id: 323,
    src: "/projects/gallery/gallery-18-magnolia-storefront.jpg",
    category: "Signage",
    title: "Magnolia Storefront"
  },
  {
    id: 324,
    src: "/projects/gallery/gallery-19-reception-logo.jpg",
    category: "Office Graphics",
    title: "Reception Logo"
  },
  {
    id: 325,
    src: "/projects/gallery/gallery-20-directional-signage.jpg",
    category: "Signage",
    title: "Directional Signage"
  },
  {
    id: 326,
    src: "/projects/gallery/gallery-21-mobile-planet-store.jpg",
    category: "Signage",
    title: "Mobile Planet Store"
  },
  {
    id: 327,
    src: "/projects/gallery/gallery-22-3d-letter-fabrication.jpg",
    category: "Signage",
    title: "3D Letter Fabrication"
  },
  {
    id: 328,
    src: "/projects/gallery/gallery-23-acrylic-letter-work.jpeg",
    category: "Signage",
    title: "Acrylic Letter Work"
  },
  {
    id: 329,
    src: "/projects/gallery/gallery-24-car-care-signage.jpg",
    category: "Vehicle Branding",
    title: "Car Care Signage"
  },
  {
    id: 330,
    src: "/projects/gallery/gallery-25-omc-exhibition.jpg",
    category: "Branding",
    title: "OMC Exhibition Branding"
  },
  {
    id: 331,
    src: "/projects/gallery/gallery-26-mcl-storefront.jpg",
    category: "Signage",
    title: "MCL Storefront"
  },
  {
    id: 332,
    src: "/projects/gallery/gallery-27-prasanna-jewellers.jpg",
    category: "Signage",
    title: "Prasanna Jewellers"
  },
  {
    id: 333,
    src: "/projects/gallery/gallery-28-fusion-restaurant.jpg",
    category: "Signage",
    title: "Fusion Restaurant"
  },

  // ============================================================
  // EXISTING PROJECT IMAGES
  // ============================================================

  ...projectImages.acpBoard.slice(0, 20).map((src, index) => ({
    id: 100 + index,
    src,
    category: "Signage",
    title: `ACP Board Project ${index + 1}`
  })),

  ...projectImages.indoorStadium.map((src, index) => ({
    id: 200 + index,
    src,
    category: "Office Graphics",
    title: `Indoor Stadium Work ${index + 1}`
  }))
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      <PageHeader
        title="Photo Gallery"
        subtitle="A visual journey through our facilities, process, and finished installations."
        image={siteImages.heroBg}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">

          {/* Filters */}
          <ScrollReveal direction="up" className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? "bg-accent text-white shadow-md"
                      : "bg-transparent border border-slate-200 text-slate-600 hover:border-accent hover:text-accent dark:border-slate-800 dark:text-slate-400 dark:hover:border-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  key={img.id}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-slate-100 dark:bg-slate-900"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <Search
                      className="text-white mb-2"
                      size={24}
                    />

                    <span className="text-white font-bold font-display text-lg leading-tight">
                      {img.title}
                    </span>

                    <span className="text-accent text-xs font-semibold uppercase tracking-wider mt-2">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">
                No images currently available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredImages.map((img) => ({
          src: img.src,
          alt: img.title,
          title: img.title
        }))}
        currentIndex={photoIndex}
      />
    </div>
  );
}