import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { siteImages } from "@/data/content";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHeader({ title, subtitle, image = siteImages.heroBg }: PageHeaderProps) {
  return (
    <div className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-30 mx-auto px-4 md:px-6 text-center">
        <ScrollReveal direction="up">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight"
          >
            {title}
          </motion.h1>
        </ScrollReveal>
        
        {subtitle && (
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              {subtitle}
            </p>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
