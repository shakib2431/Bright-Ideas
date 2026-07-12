import heroBg from "@assets/generated_images/hero-bg.jpg";
import aboutOffice from "@assets/generated_images/about-office.jpg";
import serviceFlex from "@assets/generated_images/service-flex.jpg";
import serviceBranding from "@assets/generated_images/service-branding.jpg";
import serviceGifts from "@assets/generated_images/service-gifts.jpg";
import serviceSignage from "@assets/generated_images/service-signage.jpg";
import serviceVehicle from "@assets/generated_images/service-vehicle.jpg";
import project1 from "@assets/generated_images/project-1.jpg";
import project2 from "@assets/generated_images/project-2.jpg";

export const siteImages = {
  heroBg,
  aboutOffice,
  serviceFlex,
  serviceBranding,
  serviceGifts,
  serviceSignage,
  serviceVehicle,
  project1,
  project2,
};

export const companyData = {
  name: "Bright Ideas",
  tagline: "Transforming Ideas Into Powerful Brand Experiences.",
  founded: "2011",
  location: "Rourkela, Odisha, India",
  description: "A full-service visual communication partner offering premium branding, advertising, signage, and printing solutions since 2011.",
  contact: {
    address: "Udit Nagar, Rourkela, Odisha 769012, India",
    phone: "+91 98765 43210",
    email: "hello@brightideas.co.in",
    whatsapp: "919876543210",
    hours: "Monday - Saturday: 9:30 AM - 7:30 PM"
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: ""
  }
};

export const servicesData = [
  {
    id: "flex-printing",
    title: "Flex Printing",
    shortDesc: "High-resolution large format printing for maximum visibility.",
    icon: "Printer",
    description: "Our state-of-the-art flex printing services deliver vibrant, weather-resistant outdoor and indoor banners, hoardings, and backdrops. We use premium grade materials ensuring your message withstands the elements while maintaining perfect color fidelity.",
    features: ["High-resolution output", "Weather-resistant materials", "Custom sizing available", "Rapid turnaround time"],
    image: siteImages.serviceFlex
  },
  {
    id: "digital-printing",
    title: "Digital Printing",
    shortDesc: "Crisp, fast, and scalable printing for corporate collateral.",
    icon: "Copy",
    description: "From elegant brochures to comprehensive catalogues, our digital printing solutions provide unmatched clarity and color accuracy. Perfect for short runs and personalized marketing materials where precision is paramount.",
    features: ["Variable data printing", "Premium paper stocks", "Color accurate reproduction", "On-demand scalability"],
    image: siteImages.serviceBranding
  },
  {
    id: "offset-printing",
    title: "Offset Printing",
    shortDesc: "Cost-effective, high-volume commercial printing.",
    icon: "Layers",
    description: "For high-volume requirements, our offset printing delivers superior image quality and cost-efficiency. Ideal for mass-market catalogues, extensive brochure runs, and large-scale packaging needs.",
    features: ["Pantone matching", "Cost-effective at volume", "Exceptional image quality", "Specialty finishes available"],
    image: siteImages.serviceFlex
  },
  {
    id: "corporate-branding",
    title: "Corporate Branding",
    shortDesc: "Cohesive visual identities that command respect.",
    icon: "PenTool",
    description: "We craft compelling visual identities that resonate with your target audience. From logo design to comprehensive brand guidelines, we ensure your business presents a unified, premium image across all touchpoints.",
    features: ["Logo design", "Brand guidelines", "Stationery suites", "Visual positioning"],
    image: siteImages.serviceBranding
  },
  {
    id: "corporate-gifts",
    title: "Corporate Gifts",
    shortDesc: "Premium promotional products that leave a lasting impression.",
    icon: "Gift",
    description: "Curated collections of high-end corporate gifts and promotional merchandise. We customize each item meticulously to reflect your brand's prestige and appreciation for clients and employees.",
    features: ["Custom engraving", "Premium sourcing", "Elegant packaging", "Bulk customization"],
    image: siteImages.serviceGifts
  },
  {
    id: "led-signage",
    title: "LED & ACP Signage",
    shortDesc: "Illuminated architectural signage for modern businesses.",
    icon: "Lightbulb",
    description: "Command attention day and night with our premium LED and ACP signage. Engineered for durability and crafted for elegance, our 3D acrylic and backlit signs serve as powerful landmarks for your business.",
    features: ["Energy-efficient LEDs", "Weatherproof construction", "3D Acrylic letters", "Custom architectural design"],
    image: siteImages.serviceSignage
  },
  {
    id: "vehicle-branding",
    title: "Vehicle Branding",
    shortDesc: "Transform your fleet into moving billboards.",
    icon: "Car",
    description: "High-impact vehicle wraps that turn every commute into a marketing opportunity. We use premium cast vinyls that protect your vehicle's paint while delivering stunning, long-lasting visual impact.",
    features: ["Full & partial wraps", "Premium cast vinyl", "Paint protection", "Fleet consistency"],
    image: siteImages.serviceVehicle
  },
  {
    id: "office-branding",
    title: "Office Branding",
    shortDesc: "Inspiring workspace environmental graphics.",
    icon: "Building",
    description: "Transform plain walls and glass partitions into inspiring brand environments. Our office branding solutions include frosted vinyls, wall graphics, and custom art installations that boost morale and impress visitors.",
    features: ["Glass manifestation", "Wall graphics", "Wayfinding signage", "Acoustic solutions"],
    image: siteImages.aboutOffice
  }
];

export const portfolioData = [
  {
    id: "p1",
    title: "Nexus Tech IT Park",
    category: "Signage",
    image: siteImages.project1,
    description: "Complete exterior LED signage rollout for a premium IT park."
  },
  {
    id: "p2",
    title: "Apex Financial",
    category: "Branding",
    image: siteImages.serviceBranding,
    description: "Complete rebrand including stationery, ID cards, and brand guidelines."
  },
  {
    id: "p3",
    title: "Lumina Hotels",
    category: "Office",
    image: siteImages.project2,
    description: "Interior glass graphics and wayfinding signage for a luxury hotel."
  },
  {
    id: "p4",
    title: "Urban Logistics",
    category: "Vehicle",
    image: siteImages.serviceVehicle,
    description: "Fleet wrapping for 50+ delivery vehicles."
  },
  {
    id: "p5",
    title: "Zenith Corporate Gifting",
    category: "Gifts",
    image: siteImages.serviceGifts,
    description: "End-of-year premium gift boxes for top 500 clients."
  },
  {
    id: "p6",
    title: "Kalinga Retail Expo",
    category: "Printing",
    image: siteImages.serviceFlex,
    description: "Large format exhibition graphics and promotional collateral."
  }
];

export const statsData = [
  { label: "Years Experience", value: 13, suffix: "+" },
  { label: "Projects Delivered", value: 5000, suffix: "+" },
  { label: "Happy Clients", value: 1200, suffix: "+" },
  { label: "Team Members", value: 45, suffix: "" }
];

export const testimonials = [
  {
    quote: "Bright Ideas completely transformed our corporate identity. The meticulous attention to detail in our new signage and stationery has elevated how our clients perceive us.",
    author: "Rahul Sharma",
    role: "Director, Apex Financial"
  },
  {
    quote: "Working with them feels like having an in-house design and production team. They own the entire process from concept to final print, ensuring zero compromise on quality.",
    author: "Priya Mohanty",
    role: "CMO, Lumina Hotels"
  },
  {
    quote: "The vehicle wraps for our entire delivery fleet were completed ahead of schedule and the quality of the vinyl is phenomenal. Highly recommended for any serious business.",
    author: "Sanjay Dash",
    role: "Operations Head, Urban Logistics"
  }
];

export const faqs = [
  {
    question: "Do you handle both design and production?",
    answer: "Yes, we are a full-service agency. We handle everything from conceptual design to in-house printing and final installation. This ensures absolute quality control and consistency across your brand."
  },
  {
    question: "What is your typical turnaround time for corporate signage?",
    answer: "Depending on the complexity and size, standard LED and ACP signage takes between 7 to 14 working days from design approval to final installation."
  },
  {
    question: "Can you manage multi-location branding rollouts?",
    answer: "Absolutely. We have the capacity and logistical expertise to manufacture and install branded environments and signage across multiple branches or retail locations."
  },
  {
    question: "What materials do you use for outdoor flex printing?",
    answer: "We use premium quality, weather-resistant vinyl and UV-resistant inks that prevent fading, ensuring your outdoor advertisements look vibrant for extended periods."
  },
  {
    question: "Do you offer minimum order quantities (MOQ) for corporate gifts?",
    answer: "Yes, MOQs vary depending on the product type and level of customization. Please contact our sales team with your specific requirements for a detailed quote."
  }
];
