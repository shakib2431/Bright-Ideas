import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { companyData, siteImages } from "@/data/content";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useLocation } from "wouter";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [location] = useLocation();

  // Extract service from query params if available (wouter doesn't have useSearchParams out of the box, simple parse)
  const queryParams = new URLSearchParams(window.location.search);
  const defaultService = queryParams.get("service") || "";

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: defaultService
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="w-full bg-background pb-24">
      <PageHeader 
        title="Get in Touch" 
        subtitle="We'd love to hear from you. Let's start a conversation."
        image={siteImages.aboutOffice}
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info Column */}
            <div className="w-full lg:w-1/3 space-y-10">
              <ScrollReveal direction="right">
                <div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-6">Contact Information</h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Have a project in mind? Reach out to us via email, phone, or drop by our office.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Our Location</h4>
                      <p className="text-muted-foreground">{companyData.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <a href={`tel:${companyData.contact.phone}`} className="text-muted-foreground hover:text-accent transition-colors block">{companyData.contact.phone}</a>
                      <a href={`https://wa.me/${companyData.contact.whatsapp}`} target="_blank" rel="noreferrer" className="text-accent font-medium mt-1 inline-block hover:underline">WhatsApp Us</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <a href={`mailto:${companyData.contact.email}`} className="text-muted-foreground hover:text-accent transition-colors">{companyData.contact.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">{companyData.contact.hours}</p>
                      <p className="text-muted-foreground text-sm mt-1">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Column */}
            <div className="w-full lg:w-2/3">
              <ScrollReveal direction="left">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-800">
                  <h3 className="text-3xl font-display font-bold text-foreground mb-8">Send us a message</h3>
                  
                  {isSuccess ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="text-green-600" size={32} />
                      </div>
                      <h4 className="text-2xl font-bold mb-2">Message Sent Successfully!</h4>
                      <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 text-green-700 font-medium underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">Your Name *</label>
                          <input 
                            {...register("name")}
                            className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="John Doe"
                          />
                          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">Email Address *</label>
                          <input 
                            {...register("email")}
                            className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="john@example.com"
                          />
                          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                          <input 
                            {...register("phone")}
                            className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="+91 98765 43210"
                          />
                          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">Service Required *</label>
                          <select 
                            {...register("service")}
                            className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                          >
                            <option value="">Select a service</option>
                            <option value="branding">Corporate Branding</option>
                            <option value="signage">LED & ACP Signage</option>
                            <option value="printing">Flex & Offset Printing</option>
                            <option value="vehicle">Vehicle Branding</option>
                            <option value="gifts">Corporate Gifts</option>
                            <option value="office">Office Environment Graphics</option>
                            <option value="other">Other Inquiry</option>
                          </select>
                          {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Your Message *</label>
                        <textarea 
                          {...register("message")}
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your project requirements..."
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-4 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>Send Message <Send size={20} /></>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118105.77607736696!2d84.77978550187803!3d22.238472534571932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201c71286987f1%3A0xc3c51322db78c93a!2sRourkela%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
          title="Bright Ideas Location"
        ></iframe>
      </section>
    </div>
  );
}
