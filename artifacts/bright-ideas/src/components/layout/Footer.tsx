import { Link } from "wouter";
import { companyData } from "@/data/content";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">B</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">Bright Ideas</span>
            </Link>
            <p className="text-sm leading-relaxed">
              {companyData.description}
            </p>
            <div className="flex gap-4">
              <a href={companyData.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href={companyData.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href={companyData.social.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={companyData.social.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Our Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Portfolio</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Contact Us</Link></li>
            </ul>
          </div>

         {/* Services */}
<div>
  <h4 className="text-white font-display font-semibold text-lg mb-6">
    Our Expertise
  </h4>

  <ul className="flex flex-col gap-3">
    <li>
      <Link href="/services" className="hover:text-accent transition-colors">
        Corporate Branding
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-accent transition-colors">
        LED & ACP Signage
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-accent transition-colors">
        Flex & Offset Printing
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-accent transition-colors">
        Vehicle Wraps
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-accent transition-colors">
        Premium Corporate Gifts
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-accent transition-colors">
        Office Environment Graphics
      </Link>
    </li>
  </ul>
</div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <span>{companyData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent shrink-0" />
                <span>{companyData.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent shrink-0" />
                <span>{companyData.contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Bright Ideas. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
