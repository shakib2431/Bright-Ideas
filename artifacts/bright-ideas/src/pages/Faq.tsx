import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqs, siteImages } from "@/data/content";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about our services, processes, and policies."
        image={siteImages.serviceSignage}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div 
                  className={`border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'bg-white shadow-lg dark:bg-slate-900' : 'bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50'
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="font-display font-bold text-lg text-foreground pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`text-accent transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 text-center bg-primary text-white rounded-3xl p-10 shadow-xl">
            <h3 className="text-2xl font-display font-bold mb-4">Still have questions?</h3>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Our team is ready to provide specific answers regarding your unique project requirements.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
