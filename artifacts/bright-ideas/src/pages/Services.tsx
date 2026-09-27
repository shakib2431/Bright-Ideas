import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { servicesData, siteImages } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="w-full bg-background pb-24">
      <PageHeader 
        title="Our Services" 
        subtitle="End-to-end visual communication solutions tailored for ambitious brands."
        image={siteImages.serviceBranding}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} id={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Image Column */}
                  <div className="w-full lg:w-1/2">
                    <ScrollReveal direction={isEven ? "right" : "left"}>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                    </ScrollReveal>
                  </div>
                  
                  {/* Content Column */}
                  <div className="w-full lg:w-1/2">
                    <ScrollReveal direction={isEven ? "left" : "right"}>
                      <div className="mb-6">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">{service.title}</h2>
                        <div className="w-20 h-1.5 bg-accent rounded-full mb-6"></div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                          {service.description}
                        </p>
                      </div>

                      <h4 className="text-lg font-bold font-display mb-4">Key Benefits:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-accent shrink-0 mt-0.5" size={20} />
                            <span className="text-foreground font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white">
                          <Link href={`/contact?service=${service.id}`}>Request a Quote</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full">
                          <Link href="/portfolio">View Portfolio</Link>
                        </Button>
                      </div>
                    </ScrollReveal>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 mt-10 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollReveal direction="up">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Not sure what you need?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Our experts are ready to analyze your requirements and propose a tailored visual communication strategy that maximizes impact while optimizing costs.
            </p>
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white px-10 h-14 text-lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
