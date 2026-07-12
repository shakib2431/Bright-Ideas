import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData, siteImages } from "@/data/content";
import { Lightbox } from "@/components/ui/Lightbox";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const categories = ["All", "Signage", "Branding", "Office", "Vehicle", "Gifts", "Printing"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredData = filter === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  const lightboxImages = filteredData.map(item => ({
    src: item.image,
    alt: item.title,
    title: item.title
  }));

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full bg-background min-h-screen">
      <PageHeader 
        title="Our Portfolio" 
        subtitle="A curated selection of our finest work across industries."
        image={siteImages.project1}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filters */}
          <ScrollReveal direction="up" className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filter === cat 
                      ? "bg-primary text-white shadow-md transform scale-105" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredData.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl bg-white"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-3">
                      {project.category}
                    </span>
                    <h4 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-slate-200 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Hover Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <Search size={20} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-display font-bold text-slate-400">No projects found in this category.</h3>
            </div>
          )}
        </div>
      </section>

      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        images={lightboxImages} 
        currentIndex={photoIndex} 
      />
    </div>
  );
}
