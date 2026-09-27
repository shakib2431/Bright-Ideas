import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { companyData, siteImages } from "@/data/content";
import { CheckCircle2, Target, Eye, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="w-full bg-background pb-24">
      <PageHeader 
        title="About Bright Ideas" 
        subtitle="Crafting extraordinary brand experiences since 2011."
        image={siteImages.aboutOffice}
      />

      {/* STORY SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="right">
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Our Story</h2>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Founded on a commitment to uncompromising quality.</h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Established in {companyData.founded} in the heart of {companyData.location.split(',')[0]}, Bright Ideas began with a simple yet ambitious vision: to provide businesses with visual communication solutions that parallel global standards.
                  </p>
                  <p>
                    Over the past decade, we have evolved from a boutique design studio into a comprehensive, state-of-the-art manufacturing hub. We recognized early on that the only way to guarantee flawless execution was to own the entire process.
                  </p>
                  <p>
                    Today, we house the region's most advanced printing technology and architectural signage fabrication units. But our true strength lies in our team—a collective of passionate designers, meticulous engineers, and dedicated craftsmen who treat every project as a masterpiece.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="left">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={siteImages.serviceBranding} 
                    alt="Bright Ideas Story" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                    <p className="text-white text-xl font-display font-medium leading-relaxed italic">
                      "Design is not just what it looks like and feels like. Design is how it works. We ensure it works flawlessly."
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal direction="up">
              <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl h-full flex flex-col items-start">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with compelling visual identities and high-quality printed collateral that effectively communicates their value proposition, differentiates them from competitors, and drives meaningful engagement with their target audience.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl h-full flex flex-col items-start">
                <div className="w-16 h-16 bg-primary/10 text-primary dark:bg-primary/30 dark:text-primary-foreground rounded-2xl flex items-center justify-center mb-8">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative visual communication partner in Eastern India, setting new benchmarks for design excellence, technological integration, and sustainable printing practices in the corporate sector.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Our Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16">Core Values We Live By</h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Uncompromising Quality", desc: "We never cut corners. Every print, every sign, every design must meet our rigorous internal standards before it reaches the client." },
              { title: "Client-Centric Approach", desc: "Your success is our success. We listen deeply, advise honestly, and work tirelessly to exceed your expectations." },
              { title: "Continuous Innovation", desc: "We constantly invest in the latest printing technologies, design software, and materials to offer cutting-edge solutions." },
              { title: "Integrity & Transparency", desc: "Honest pricing, realistic timelines, and clear communication from project inception to delivery." },
              { title: "Sustainability", desc: "We are committed to reducing our environmental footprint through eco-friendly inks, responsible waste management, and sustainable materials." },
              { title: "Empowered Team", desc: "We cultivate a collaborative environment where creativity flourishes and every team member takes ownership of their craft." }
            ].map((value, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display mb-2">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
