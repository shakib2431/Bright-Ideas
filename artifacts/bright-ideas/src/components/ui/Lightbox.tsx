import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface LightboxProps {
  images: { src: string; alt: string; title?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ images, currentIndex, isOpen, onClose }: LightboxProps) {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
        onClick={onClose}
      >
        <button
          className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2"
          onClick={onClose}
        >
          <X size={32} />
        </button>

        {images.length > 1 && (
          <>
            <button
              className="absolute left-4 md:left-10 text-white/50 hover:text-white z-50 p-2"
              onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev - 1 + images.length) % images.length); }}
            >
              <ChevronLeft size={48} />
            </button>
            <button
              className="absolute right-4 md:right-10 text-white/50 hover:text-white z-50 p-2"
              onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev + 1) % images.length); }}
            >
              <ChevronRight size={48} />
            </button>
          </>
        )}

        <div 
          className="relative max-w-6xl max-h-full w-full h-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={images[index].src}
            alt={images[index].alt}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
          />
          {images[index].title && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center">
              <h3 className="text-xl font-display font-bold text-white">{images[index].title}</h3>
            </div>
          )}
          <div className="absolute -bottom-10 left-0 right-0 text-center text-white/50 text-sm tracking-widest">
            {index + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
