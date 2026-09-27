import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { servicesData, siteImages } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="w-full bg-background pb-24">
      {/* =========================================================
          PAGE HEADER
      ========================================================== */}
      <PageHeader
        title="Our Services"
        subtitle="End-to-end visual communication solutions tailored for ambitious brands."
        image={siteImages.serviceBranding}
      />

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  data-service={service.id}
                  className={`
                    scroll-mt-28
                    flex
                    flex-col
                    ${
                      isEven
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    }
                    gap-12
                    lg:gap-20
                    items-center
                  `}
                >
                  {/* =================================================
                      IMAGE
                  ================================================== */}
                  <div className="w-full lg:w-1/2">
                    <ScrollReveal
                      direction={isEven ? "right" : "left"}
                    >
                      <div
                        className="
                          relative
                          aspect-[4/3]
                          overflow-hidden
                          rounded-3xl
                          shadow-2xl
                          group
                        "
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-0
                            bg-primary/10
                            transition-colors
                            duration-500
                            group-hover:bg-transparent
                          "
                        />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}
                  <div className="w-full lg:w-1/2">
                    <ScrollReveal
                      direction={isEven ? "left" : "right"}
                    >
                      <div className="mb-6">
                        <h2
                          className="
                            mb-4
                            text-3xl
                            font-display
                            font-bold
                            text-foreground
                            md:text-5xl
                          "
                        >
                          {service.title}
                        </h2>

                        <div
                          className="
                            mb-6
                            h-1.5
                            w-20
                            rounded-full
                            bg-accent
                          "
                        />

                        <p
                          className="
                            mb-8
                            text-lg
                            leading-relaxed
                            text-muted-foreground
                          "
                        >
                          {service.description}
                        </p>
                      </div>

                      {/* Key Benefits */}
                      <h4 className="mb-4 text-lg font-bold font-display">
                        Key Benefits:
                      </h4>

                      <ul
                        className="
                          mb-10
                          grid
                          grid-cols-1
                          gap-4
                          sm:grid-cols-2
                        "
                      >
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle
                              className="
                                mt-0.5
                                shrink-0
                                text-accent
                              "
                              size={20}
                            />

                            <span className="font-medium text-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <Button
                          asChild
                          size="lg"
                          className="
                            rounded-full
                            bg-primary
                            text-white
                            hover:bg-primary/90
                          "
                        >
                          <Link
                            href={`/contact?service=${service.id}`}
                          >
                            Request a Quote
                          </Link>
                        </Button>

                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="rounded-full"
                        >
                          <Link href="/portfolio">
                            View Portfolio
                          </Link>
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

      {/* =========================================================
          BOTTOM CTA
      ========================================================== */}
      <section className="mt-10 bg-slate-50 py-20 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <ScrollReveal direction="up">
            <h3 className="mb-6 text-3xl font-display font-bold md:text-4xl">
              Not sure what you need?
            </h3>

            <p className="mb-8 text-lg text-muted-foreground">
              Our experts are ready to analyze your requirements and
              propose a tailored visual communication strategy that
              maximizes impact while optimizing costs.
            </p>

            <Button
              asChild
              size="lg"
              className="
                h-14
                rounded-full
                bg-accent
                px-10
                text-lg
                text-white
                hover:bg-accent/90
              "
            >
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}