import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  companyData,
  servicesData,
  portfolioData,
  statsData,
  siteImages,
} from "@/data/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Palette,
  TrendingUp,
  Layers,
  Building2,
  CarFront,
  GraduationCap,
  Hotel,
  ShoppingBag,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const heroImages = [
  "/bright_ideas_hero.png",
  "/bright_ideas_hero2.png",
  "/bright_ideas_hero3.png",
];

export default function Home() {
  const [activeHero, setActiveHero] = useState(0);

  /*
   * HERO SLIDESHOW
   * Automatically changes every 5 seconds.
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="w-full">

 {/* =========================================================
          HERO SECTION — IMAGE ONLY SLIDESHOW
      ========================================================== */}
      <section className="relative aspect-[1672/941] w-full overflow-hidden bg-black md:aspect-auto md:h-[calc(100vh-80px)] md:min-h-[600px]">

        {/* HERO IMAGES */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`
                absolute
                inset-0
                transition-opacity
                duration-[1200ms]
                ease-in-out
                ${
                  activeHero === index
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            >
              <img
                src={image}
                alt={`Bright Ideas hero ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* SLIDE INDICATORS */}
        <div
          className="
            absolute
            bottom-8
            left-1/2
            z-20
            -translate-x-1/2
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-black/30
            px-4
            py-2
            backdrop-blur-md
          "
          role="tablist"
          aria-label="Hero slides"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-label={`Go to hero slide ${index + 1}`}
              aria-selected={activeHero === index}
              onClick={() => setActiveHero(index)}
              className={`
                h-2
                rounded-full
                transition-all
                duration-500
                ${
                  activeHero === index
                    ? "w-8 bg-accent"
                    : "w-2 bg-white/60 hover:bg-white"
                }
              `}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          STATS STRIP
      ========================================================== */}
      <section className="bg-primary py-12 relative z-30 -mt-8 mx-4 md:mx-10 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {statsData.map((stat, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                delay={i * 0.1}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>

                <div className="text-slate-300 font-medium text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          REAL BUSINESS PROOF
      ========================================================== */}
      <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 dark:divide-slate-800">
            {[
              { value: "2011", label: "Established" },
              { value: "15+", label: "Years in Business" },
              { value: "Rourkela", label: "Based in Odisha" },
              { value: "Print · Sign · Build", label: "Core Capability" },
            ].map((item, index) => (
              <ScrollReveal key={item.label} direction="up" delay={index * 0.08}>
                <div className="px-4 py-8 md:px-8 md:py-10 text-center">
                  <div className="text-xl md:text-2xl font-display font-bold text-foreground">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================== */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Image */}
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
                      <h3 className="text-4xl font-bold font-display">
                        14+
                      </h3>

                      <p className="text-sm opacity-80">
                        Years Experience
                      </p>
                    </div>

                    <div className="w-px bg-white/20" />

                    <div>
                      <h3 className="text-4xl font-bold font-display">
                        500+
                      </h3>

                      <p className="text-sm opacity-80">
                        Projects
                      </p>
                    </div>

                    <div className="w-px bg-white/20" />

                    <div>
                      <h3 className="text-4xl font-bold font-display">
                        100%
                      </h3>

                      <p className="text-sm opacity-80">
                        Quality Focus
                      </p>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="left">

                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
                  The Bright Ideas Difference
                </h2>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                  We don't just design. <br />
                  We manufacture impact.
                </h3>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Unlike conventional agencies that outsource production,
                  we own the entire pipeline. From the first creative sketch
                  to the final printed installation, our state-of-the-art
                  facility in Rourkela ensures total control over quality,
                  timeline, and cost.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {[
                    {
                      icon: Palette,
                      title: "Creative Excellence",
                      desc: "Award-winning design team focused on brand elevation.",
                    },
                    {
                      icon: Factory,
                      title: "In-house Production",
                      desc: "State-of-the-art printing and manufacturing facility.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Quality Assured",
                      desc: "Meticulous quality control at every stage.",
                    },
                    {
                      icon: Layers,
                      title: "Scalable Solutions",
                      desc: "From a single business card to nationwide signage.",
                    },
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4">

                      <div className="shrink-0 mt-1">
                        <feature.icon
                          className="text-accent"
                          size={24}
                        />
                      </div>

                      <div>
                        <h4 className="font-bold text-foreground mb-1">
                          {feature.title}
                        </h4>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>

                    </div>
                  ))}

                </div>

                <div className="mt-10">
                  <Button asChild className="group">
                    <Link
                      href="/about"
                      className="flex items-center gap-2"
                    >
                      Read Our Story

                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </Button>
                </div>

              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES OVERVIEW
      ========================================================== */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">

              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
                Our Expertise
              </h2>

              <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Comprehensive Brand Solutions
              </h3>

              <p className="text-lg text-muted-foreground">
                Everything your business needs to communicate its value
                visually, under one roof.
              </p>

            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {servicesData.slice(0, 8).map((service, i) => (
              <ScrollReveal
                key={service.id}
                direction="up"
                delay={i * 0.1}
              >
                <Link
                  href="/services"
                  className="group block h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >

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
                      <ArrowRight size={20} />
                    </div>

                    <h4 className="text-xl font-display font-bold text-foreground mb-2 mt-2">
                      {service.title}
                    </h4>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {service.shortDesc}
                    </p>

                  </div>
                </Link>
              </ScrollReveal>
            ))}

          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>

        </div>
      </section>

      {/* =========================================================
          PORTFOLIO HIGHLIGHTS
      ========================================================== */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">

          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">

            <div className="max-w-2xl">
              <ScrollReveal direction="up">

                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
                  Featured Work
                </h2>

                <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                  Projects that speak for themselves.
                </h3>

              </ScrollReveal>
            </div>

            <ScrollReveal direction="left">

              <Button
                asChild
                variant="link"
                className="text-primary font-bold group"
              >
                <Link
                  href="/portfolio"
                  className="flex items-center gap-2"
                >
                  See full portfolio

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Button>

            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {portfolioData.slice(0, 3).map((project, i) => (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={i * 0.1}
              >

                <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">

                    <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>

                    <h4 className="text-2xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h4>

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

      {/* =========================================================
          HOW WE WORK
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#050816] py-24 md:py-32 text-white">
        {/* ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full border border-orange-500/20" />
          <div className="absolute right-[-70px] top-[-70px] h-[260px] w-[260px] rounded-full border border-orange-500/10" />
          <div className="absolute right-[55px] top-[55px] h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_30px_8px_rgba(249,115,22,0.45)]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <ScrollReveal direction="up">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-orange-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                    From brief to built
                  </span>
                </div>
                <h2 className="max-w-xl text-4xl font-display font-bold leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
                  One team.
                  <span className="block text-orange-500">Four moves.</span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="max-w-2xl lg:ml-auto">
                <p className="text-base leading-7 text-slate-300 md:text-lg">
                  Bright Ideas works across the physical branding journey — from understanding the requirement and shaping the visual direction to production, finishing and installation.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Brief', 'Design', 'Make', 'Install'].map((item, i) => (
                    <div key={item} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-slate-300">
                      <span className="text-orange-500">0{i + 1}</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] shadow-2xl shadow-black/20">
            {/* process rail */}
            <div className="hidden h-px bg-white/10 lg:block" />

            <div className="grid lg:grid-cols-4">
              {[
                {
                  no: '01',
                  title: 'Brief',
                  text: 'Understand the space, brand, audience and practical requirement.',
                  icon: Palette,
                  tag: 'Understand',
                },
                {
                  no: '02',
                  title: 'Design',
                  text: 'Turn the requirement into a clear visual direction and production-ready artwork.',
                  icon: Layers,
                  tag: 'Shape',
                },
                {
                  no: '03',
                  title: 'Make',
                  text: 'Print, fabricate, finish and prepare the work for the real environment.',
                  icon: Factory,
                  tag: 'Produce',
                },
                {
                  no: '04',
                  title: 'Install',
                  text: 'Mount, position and finish the work on site so the idea becomes physical.',
                  icon: CheckCircle2,
                  tag: 'Deliver',
                },
              ].map((step, index) => (
                <ScrollReveal key={step.no} direction="up" delay={index * 0.08}>
                  <div className="group relative h-full border-b border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.045] lg:border-b-0 lg:border-r lg:p-8 lg:last:border-r-0">
                    {/* connector */}
                    {index < 3 && (
                      <div className="absolute right-[-7px] top-1/2 z-20 hidden h-3.5 w-3.5 -translate-y-1/2 rotate-45 border-r border-t border-orange-500/70 bg-[#080b18] lg:block" />
                    )}

                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/40 bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white">
                        <step.icon size={22} strokeWidth={1.8} />
                      </div>
                      <span className="text-4xl font-bold tracking-tighter text-white/10 transition-colors group-hover:text-orange-500/20">
                        {step.no}
                      </span>
                    </div>

                    <div className="mt-8">
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500">
                        {step.tag}
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                        {step.text}
                      </p>
                    </div>

                    <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-0 rounded-full bg-orange-500 transition-all duration-700 group-hover:w-full" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 bg-black/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  One connected workflow
                </span>
              </div>
              <p className="text-sm text-slate-500">
                From the first conversation to the final installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SELECTED FIELD WORK
      ========================================================== */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <ScrollReveal direction="up">
              <div>
                <span className="text-sm font-bold text-accent uppercase tracking-widest">
                  Selected field work
                </span>
                <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-foreground">
                  Work made for the real world.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <Button asChild variant="outline" className="rounded-full group">
                <Link href="/portfolio" className="flex items-center gap-2">
                  Explore the full portfolio
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.slice(0, 6).map((project, index) => (
              <ScrollReveal key={project.id} direction="up" delay={Math.min(index * 0.07, 0.35)}>
                <Link href="/portfolio" className="group block rounded-3xl overflow-hidden bg-slate-950">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute left-6 right-6 bottom-6">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                        {project.category}
                      </span>
                      <h3 className="mt-2 text-xl md:text-2xl font-display font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                        View project
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES WE SERVE
      ========================================================== */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal direction="up" className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-widest">
              Built for different environments
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-foreground">
              From storefronts to workplaces.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-7">
              The same production discipline can be adapted to the visual needs
              of retail, corporate, institutional and public-facing spaces.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Retail", icon: ShoppingBag },
              { title: "Corporate", icon: BriefcaseBusiness },
              { title: "Education", icon: GraduationCap },
              { title: "Hospitality", icon: Hotel },
              { title: "Automotive", icon: CarFront },
              { title: "Institutions", icon: Building2 },
            ].map((industry, index) => (
              <ScrollReveal key={industry.title} direction="up" delay={index * 0.06}>
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <industry.icon className="mx-auto text-accent mb-4" size={28} />
                  <h3 className="font-semibold text-foreground">{industry.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          REVIEWS / PUBLIC REPUTATION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#070a14] py-24 md:py-32">
        <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full border border-orange-500/10" />
        <div className="pointer-events-none absolute -right-24 top-28 h-[280px] w-[280px] rounded-full border border-orange-500/10" />
        <div className="pointer-events-none absolute left-[-180px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-orange-500/[0.04] blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Public reputation
              </span>

              <h2 className="mt-4 text-4xl font-display font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                The work speaks.
                <span className="block text-orange-500">
                  The reviews reinforce it.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                Bright Ideas has been serving businesses in Rourkela since 2011.
                Here is a snapshot of the business's publicly visible reputation,
                without using invented testimonials or customer names.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12}>
            <div className="mx-auto mt-14 max-w-5xl">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
                <div className="absolute left-0 top-0 h-full w-1 bg-orange-500" />

                <div className="grid lg:grid-cols-[1fr_0.8fr]">
                  <div className="p-8 md:p-12 lg:p-14">
                    <div className="flex items-center gap-2" aria-label="Five star visual">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-2xl text-orange-500" aria-hidden="true">
                          ★
                        </span>
                      ))}
                    </div>

                    <blockquote className="mt-7 max-w-2xl text-2xl font-medium leading-relaxed text-white md:text-3xl">
                      A long-standing local business with a strong public presence in Rourkela.
                    </blockquote>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                        BI
                      </div>

                      <div>
                        <div className="font-semibold text-white">Bright Ideas</div>
                        <div className="text-sm text-slate-500">
                          Rourkela, Odisha · Established 2011
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Public listing snapshot
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-center border-t border-white/10 bg-orange-500 p-8 md:p-12 lg:border-l lg:border-t-0">
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                      Justdial snapshot
                    </div>

                    <div className="mt-3 text-7xl font-display font-bold tracking-tight text-white md:text-8xl">
                      4.6
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xl tracking-wider text-white" aria-hidden="true">
                        ★★★★★
                      </span>
                      <span className="text-sm text-white/80">/ 5</span>
                    </div>

                    <p className="mt-5 max-w-xs text-sm leading-6 text-white/80">
                      Public rating shown on Bright Ideas' Rourkela listing at the time of verification.
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                      <div className="h-px flex-1 bg-white/20" />
                      <span className="text-xs uppercase tracking-widest text-white/60">
                        2011 — Present
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] md:grid-cols-4">
              <div className="border-b border-white/10 p-6 text-center md:border-b-0 md:border-r">
                <div className="text-2xl font-display font-bold text-white md:text-3xl">2011</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">Established</div>
              </div>

              <div className="border-b border-white/10 p-6 text-center md:border-b-0 md:border-r">
                <div className="text-2xl font-display font-bold text-white md:text-3xl">15+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">Years in business</div>
              </div>

              <div className="border-b border-white/10 p-6 text-center md:border-b-0 md:border-r">
                <div className="text-2xl font-display font-bold text-orange-500 md:text-3xl">4.6/5</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">Public rating</div>
              </div>

              <div className="p-6 text-center">
                <div className="text-2xl font-display font-bold text-white md:text-3xl">RKL</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">Rourkela based</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          CTA SECTION
      ========================================================== */}
      <section className="py-24 relative overflow-hidden">

        <div className="absolute inset-0 z-0">

          <img
            src={siteImages.heroBg}
            alt="Background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-primary/95" />

        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">

          <ScrollReveal direction="up">

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Ready to elevate your brand?
            </h2>

            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how Bright Ideas can help you create visual
              experiences that captivate your audience and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 text-lg h-14"
              >
                <Link href="/contact">
                  Get in Touch Today
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-lg h-14 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
              >
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>

            </div>

          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}