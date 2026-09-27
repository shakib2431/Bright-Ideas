import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { siteImages } from "@/data/content";
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

// Reusing portfolio images but mapping to gallery categories for demonstration
const galleryImages = [
  { id: 1, src: siteImages.serviceFlex, category: "Printing", title: "Large Format Flex Printing" },
  { id: 2, src: siteImages.serviceBranding, category: "Branding", title: "Corporate Identity Kit" },
  { id: 3, src: siteImages.serviceSignage, category: "Signage", title: "3D LED Corporate Signage" },
  { id: 4, src: siteImages.serviceGifts, category: "Corporate Gifts", title: "Premium Gift Set" },
  { id: 5, src: siteImages.aboutOffice, category: "Office Graphics", title: "Interior Wall Graphics" },
  { id: 6, src: siteImages.serviceVehicle, category: "Vehicle Branding", title: "Fleet Wrap" },
  { id: 7, src: siteImages.project1, category: "Signage", title: "Exterior Architectural Signage" },
  { id: 8, src: siteImages.project2, category: "Office Graphics", title: "Frosted Glass Manifestation" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

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
              {galleryCategories.map(cat => (
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

          {/* Grid */}
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
                    <Search className="text-white mb-2" size={24} />
                    <span className="text-white font-bold font-display text-lg leading-tight">{img.title}</span>
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider mt-2">{img.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No images currently available in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        images={filteredImages.map(img => ({ src: img.src, alt: img.title, title: img.title }))} 
        currentIndex={photoIndex} 
      />
    </div>
  );
}
