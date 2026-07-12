import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteImages } from "@/data/content";

export default function Clients() {
  // Using placeholder logos with initials since we don't have actual client logos
  const clients = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    name: `Corporate Client ${i+1}`,
    initials: `C${i+1}`
  }));

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      <PageHeader 
        title="Our Clients" 
        subtitle="Trusted by over 1,200 businesses across Odisha and beyond."
        image={siteImages.project2}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Partnering with Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">
              From emerging startups to established multinational corporations, Bright Ideas is the trusted partner for brands that demand excellence in their visual communication.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client, i) => (
              <ScrollReveal key={client.id} direction="up" delay={(i % 6) * 0.1}>
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl aspect-square flex flex-col items-center justify-center p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group grayscale hover:grayscale-0">
                  <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl font-display font-bold text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors mb-3">
                    {client.initials}
                  </div>
                  <span className="text-sm font-medium text-slate-500 group-hover:text-primary text-center">
                    {client.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
