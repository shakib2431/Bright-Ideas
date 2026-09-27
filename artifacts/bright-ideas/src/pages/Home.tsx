import { Link } from "wouter";
import { companyData, servicesData, portfolioData, statsData, testimonials, siteImages } from "@/data/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Factory, Palette, TrendingUp, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0f172a]/80 mix-blend-multiply z-10" />
          <img
            src={siteImages.heroBg}
            alt="Bright Ideas Print and Branding"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Odisha's Premier Visual Communication Agency
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Transforming Ideas Into <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                  Powerful Brand Experiences.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                From striking corporate signage to meticulous offset printing, we are the end-to-end partner for businesses that refuse to compromise on quality.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 text-lg h-14">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Decorative scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-primary py-12 relative z-30 -mt-8 mx-4 md:mx-10 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {statsData.map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-slate-300 font-medium text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-orange-50 rounded-3xl transform -rotate-3 -z-10 dark:hidden" />
                  <img 
                    src={siteImages.aboutOffice} 
                    alt="Bright Ideas Workspace" 
                    className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                  />
  <div className="absolute left-8 bottom-8 hidden lg:flex gap-8 bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 text-white">

  <div>
    <h3 className="text-4xl font-bold font-display">14+</h3>
    <p className="text-sm opacity-80">Years Experience</p>
  </div>

  <div className="w-px bg-white/20"></div>

  <div>
    <h3 className="text-4xl font-bold font-display">500+</h3>
    <p className="text-sm opacity-80">Projects</p>
  </div>

  <div className="w-px bg-white/20"></div>

  <div>
    <h3 className="text-4xl font-bold font-display">100%</h3>
    <p className="text-sm opacity-80">Quality Focus</p>
  </div>

</div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="left">
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">The Bright Ideas Difference</h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                  We don't just design. <br/> We manufacture impact.
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Unlike conventional agencies that outsource production, we own the entire pipeline. From the first creative sketch to the final printed installation, our state-of-the-art facility in Rourkela ensures total control over quality, timeline, and cost.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Palette, title: "Creative Excellence", desc: "Award-winning design team focused on brand elevation." },
                    { icon: Factory, title: "In-house Production", desc: "State-of-the-art printing and manufacturing facility." },
                    { icon: CheckCircle2, title: "Quality Assured", desc: "Meticulous quality control at every stage." },
                    { icon: Layers, title: "Scalable Solutions", desc: "From a single business card to nationwide signage." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 mt-1">
                        <feature.icon className="text-accent" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button asChild className="group">
                    <Link href="/about" className="flex items-center gap-2">
                      Read Our Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Our Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Comprehensive Brand Solutions</h3>
              <p className="text-lg text-muted-foreground">Everything your business needs to communicate its value visually, under one roof.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.slice(0, 8).map((service, i) => (
              <ScrollReveal key={service.id} direction="up" delay={i * 0.1}>
                <Link href="/services" className="group block h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 relative">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white absolute -top-6 right-6 shadow-lg transform group-hover:rotate-12 transition-transform">
                      {/* Using an icon placeholder since we can't easily dynamically map Lucide components without a mapping object, we'll just use ArrowRight for all as a stylized link indicator */}
                      <ArrowRight size={20} />
                    </div>
                    <h4 className="text-xl font-display font-bold text-foreground mb-2 mt-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{service.shortDesc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO HIGHLIGHTS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <ScrollReveal direction="up">
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Featured Work</h2>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground">Projects that speak for themselves.</h3>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left">
              <Button asChild variant="link" className="text-primary font-bold group">
                <Link href="/portfolio" className="flex items-center gap-2">
                  See full portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.slice(0, 3).map((project, i) => (
              <ScrollReveal key={project.id} direction="up" delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h4 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={siteImages.heroBg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/95" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Ready to elevate your brand?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how Bright Ideas can help you create visual experiences that captivate your audience and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 text-lg h-14">
                <Link href="/contact">Get in Touch Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                <a href={`https://wa.me/${companyData.contact.whatsapp}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
