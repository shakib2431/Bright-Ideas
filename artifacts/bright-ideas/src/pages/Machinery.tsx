
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { machineryData, siteImages } from "@/data/content";

export default function Machinery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const lightboxImages = machineryData.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
  }));

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full bg-background min-h-screen">
      <PageHeader
        title="Our Machinery"
        subtitle="Explore the equipment behind our printing, production, and branding capabilities."
        image={siteImages.project1}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal direction="up" className="mb-12 text-center">
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
              A look at selected machinery and equipment used by Bright Ideas.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {machineryData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Machinery
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white">
                    {item.title}
                  </h2>
                </div>

                <div className="absolute right-5 top-5 flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <Search size={20} />
                </div>
              </motion.div>
            ))}
          </div>
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