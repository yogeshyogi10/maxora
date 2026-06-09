import { 
  Code2, 
  ShoppingBag, 
  Palette, 
  Megaphone, 
  Share2, 
  Layers, 
  Smartphone, 
  Search, 
  Zap, 
  Clock, 
  Headphones, 
  TrendingUp, 
  Award,
  Globe
} from "lucide-react";

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  services: string[];
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  industry: string;
  tech: string[];
  result: string;
  image: string; // Gradient color or visual style
  description: string;
  challenges: string[];
  solutions: string[];
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  avatar: string; // Will use inline initials SVG
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export const servicesData: ServiceCategory[] = [
  {
    id: "custom-dev",
    title: "Custom Development",
    iconName: "Code2",
    description: "High-performance bespoke web applications engineered with cutting-edge javascript frameworks for unmatched scalability.",
    services: [
      "Next.js & React Applications",
      "Angular Enterprise Interfaces",
      "Full Stack Node/Python Platforms",
      "Interactive Admin Dashboards",
      "API Integrations & Custom Webhooks"
    ]
  },
  {
    id: "wordpress-dev",
    title: "WordPress Development",
    iconName: "Globe",
    description: "Highly customized, secure, and lightning-fast WordPress architectures tailored to support corporate identity and user experience.",
    services: [
      "Bespoke Theme Engineering",
      "Corporate & Business Portals",
      "High-Converting Landing Pages",
      "WooCommerce E-Commerce Engines"
    ]
  },
  {
    id: "shopify-dev",
    title: "Shopify Development",
    iconName: "ShoppingBag",
    description: "High-end, performance-optimized e-commerce storefronts built to boost conversions, retention, and brand fidelity.",
    services: [
      "Custom Shopify Store Setup",
      "Theme Customization & Liquid Coding",
      "App Integrations & API Sync",
      "Conversion Rate Optimization (CRO)"
    ]
  },
  {
    id: "branding-creative",
    title: "Branding & Creative Design",
    iconName: "Palette",
    description: "Artistic brand strategy, logos, guidelines, and corporate marketing materials that resonate and command premium value.",
    services: [
      "Full Visual Brand Guidelines",
      "High-End Corporate Brochures",
      "Pitch Decks & Company Profiles",
      "Bespoke Iconography & Logo Suites"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    iconName: "Megaphone",
    description: "Result-driven marketing campaigns focusing on customer acquisition, Search Engine Optimization, and ROI growth.",
    services: [
      "Advanced Search Engine Optimization (SEO)",
      "Local SEO & Schema Optimization",
      "Google Ads (PPC) Management",
      "Meta Ads (Facebook & Instagram) Campaigns",
      "Lead Generation & Nurture Funnels"
    ]
  },
  {
    id: "social-media",
    title: "Social Media Management",
    iconName: "Share2",
    description: "Comprehensive social strategy, content curation, and community growth for modern premium brands.",
    services: [
      "Instagram Aesthetic & Reels Planning",
      "Facebook Group & Page Management",
      "LinkedIn Thought Leadership Articles",
      "Content Strategy & Copywriting Calendar",
      "Social Analytics & Weekly Tracking"
    ]
  },
  {
    id: "poster-design",
    title: "Poster & Creative Design",
    iconName: "Layers",
    description: "High-impact visual campaigns and graphics engineered to grab attention instantly across digital and physical mediums.",
    services: [
      "High-Converting Promotional Posters",
      "Event & Conference Keynotes Visuals",
      "Premium Product Creatives",
      "Social Media Campaign Graphics",
      "Brand Storytelling Visuals"
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "1",
    slug: "savory-elite",
    name: "Savory & Co. Fine Dining",
    industry: "Fine Dining Restaurant",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "ThreeJS"],
    result: "+140% Table Bookings & 99.8% Core Web Vitals",
    image: "linear-gradient(135deg, #2b001d 0%, #660f56 100%)",
    description: "A luxury digital presence for a Michelin-starred restaurant. The design translates the premium culinary experience onto the web using cinematic animations, immersive layouts, and lightning-fast reservations integration.",
    challenges: [
      "Translating sensory dining experience to digital space.",
      "Ensuring page loads under 1 second despite large media files.",
      "Optimizing table reservation flow."
    ],
    solutions: [
      "Used SVG particle-based food dust and subtle parallaxes.",
      "Implemented next/image lazy loading with avif formats.",
      "Engineered an interactive 3D table selection system."
    ]
  },
  {
    id: "2",
    slug: "aether-apparel",
    name: "Aether Couture Store",
    industry: "E-Commerce / Luxury Fashion",
    tech: ["Shopify Plus", "React", "Liquid", "Tailwind CSS"],
    result: "+38% Average Order Value & 4.2% Conversion Rate",
    image: "linear-gradient(135deg, #0f002b 0%, #b03dff 100%)",
    description: "A premium luxury streetwear and couture brand storefront, engineered on Shopify Plus. Featuring custom filtering, a high-converting cart drawer, and interactive 3D product rotators.",
    challenges: [
      "High friction in mobile checkout.",
      "Standard Shopify templates failed to reflect luxury brand aesthetics.",
      "Need for seamless product filtration."
    ],
    solutions: [
      "Built a custom headless-style storefront shell.",
      "Integrated slide-in visual drawers for rapid sizing and addition.",
      "Designed complex custom collection page grids."
    ]
  },
  {
    id: "3",
    slug: "cura-health",
    name: "Cura Advanced Therapeutics",
    industry: "Healthcare / BioTech",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    result: "+215% Patient Consultation Leads",
    image: "linear-gradient(135deg, #001220 0%, #004e7c 100%)",
    description: "An elite digital experience for a cutting-edge clinical therapeutics clinic, showcasing advanced therapies. Includes secure appointment booking portals and HIPAA-compliant interactive intake structures.",
    challenges: [
      "Displaying highly complex medical data in a readable manner.",
      "Building user trust and authority.",
      "Securing client intake forms."
    ],
    solutions: [
      "Designed stylized medical diagrams utilizing interactive SVG maps.",
      "Implemented trust signals, Doctor reviews, and certified credentials badges.",
      "Created encrypted submission fields linked directly to clinic CRM."
    ]
  },
  {
    id: "4",
    slug: "apex-holdings",
    name: "Apex Global Capital",
    industry: "Corporate / Private Equity",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    result: "$1.2B Managed AUM Leads Captured",
    image: "linear-gradient(135deg, #111 0%, #333 100%)",
    description: "A highly sophisticated corporate landing page and portal for an elite private equity firm, showcasing portfolio assets, investment sectors, and corporate governance with high-end typography and smooth page transitions.",
    challenges: [
      "Firm requirements for ultimate performance and speed.",
      "Reflecting institutional status while maintaining modern innovation.",
      "Strict data privacy regulations."
    ],
    solutions: [
      "Achieved 100% scores in Lighthouse metrics through static site pre-generation.",
      "Designed a sleek monochrome theme with subtle neon accents.",
      "Hosted on decentralized CDNs for maximum security and global speed."
    ]
  },
  {
    id: "5",
    slug: "luxe-living",
    name: "Luxe Living Estates",
    industry: "Real Estate Development",
    tech: ["WordPress", "Custom PHP", "Tailwind CSS", "GSAP"],
    result: "85% Units Sold Pre-Construction",
    image: "linear-gradient(135deg, #2b1f00 0%, #9c6c00 100%)",
    description: "A bespoke project-specific marketing website for premium luxury villas in Spain. Includes 3D floor plan viewers, virtual tour embeds, and detailed neighborhood maps.",
    challenges: [
      "High asset size (videos, brochures, layouts).",
      "Capturing high-net-worth real estate leads.",
      "Displaying interactive apartment floor plans."
    ],
    solutions: [
      "Implemented smart asset lazy loading with placeholder gradients.",
      "Designed a premium white-glove VIP callback request widget.",
      "Coded an interactive SVG building selector."
    ]
  },
  {
    id: "6",
    slug: "nexus-academy",
    name: "Nexus EduTech Portal",
    industry: "Education / E-Learning",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    result: "10k+ Registered Active Students in 3 Months",
    image: "linear-gradient(135deg, #002220 0%, #008f7a 100%)",
    description: "An immersive e-learning academy for modern technology skills, including student dashboard, video player, coding challenges, and certificate generators.",
    challenges: [
      "Providing real-time progress indicators.",
      "Dynamic interactive dashboard for courses.",
      "Fast content rendering for remote students."
    ],
    solutions: [
      "Built a state-driven course navigator.",
      "Integrated lightweight course player framework.",
      "Cached media indexes globally via CDN layer."
    ]
  }
];

export const whyChooseData: WhyChooseItem[] = [
  {
    title: "Modern Technologies",
    description: "We code using Next.js 14+, React 19, TypeScript, and Framer Motion for supercharged performance and futuristic interactivity.",
    iconName: "Code2"
  },
  {
    title: "SEO Optimized",
    description: "Built-in semantic HTML, schema tags, sitemaps, and speed audits ensure your site ranks at the top of Google search pages.",
    iconName: "Search"
  },
  {
    title: "Mobile Responsive",
    description: "Pixel-perfect grid systems adapt dynamically to all screen sizes, from high-resolution studio monitors to mobile screens.",
    iconName: "Smartphone"
  },
  {
    title: "Fast Delivery",
    description: "Agile sprints and clean code architectures allow us to deliver high-end enterprise systems within optimized timelines.",
    iconName: "Clock"
  },
  {
    title: "Dedicated Support",
    description: "Receive ongoing maintenance, backups, security audits, and continuous optimization support even after your site goes live.",
    iconName: "Headphones"
  },
  {
    title: "Scalable Solutions",
    description: "Our codebases are structured to grow with your business, allowing you to add plugins, pages, or databases effortlessly.",
    iconName: "Zap"
  },
  {
    title: "Performance Focused",
    description: "We target a perfect 100 on Lighthouse metrics, keeping file bundles lightweight, lazy-loading resources, and optimizing servers.",
    iconName: "TrendingUp"
  },
  {
    title: "Conversion Driven",
    description: "Every visual accent, layout spacing, CTA, and form placement is designed with user psychology to drive maximum inquiries.",
    iconName: "Award"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Website",
    price: "₹7,000",
    description: "Perfect for startups and local businesses looking to establish a professional, high-end landing page presence.",
    features: [
      "Custom 1-Page Layout",
      "Full Mobile Responsiveness",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Year Basic Support",
      "Delivery in 5-7 Days"
    ],
    isPopular: false,
    ctaText: "Choose Starter"
  },
  {
    name: "Business Website",
    price: "₹20,000",
    description: "Best for growing brands and corporate firms requiring a detailed multi-page showcase with rich animations.",
    features: [
      "Up to 6 Custom Pages",
      "Premium Framer Motion Animations",
      "Advanced SEO & Schema Tags",
      "Blog / Content Management",
      "Lead Capture Integrations",
      "Delivery in 10-15 Days",
      "6 Months Premium Support"
    ],
    isPopular: true,
    ctaText: "Choose Business"
  },
  {
    name: "Shopify Store",
    price: "₹15,000",
    description: "Engineered for retail brands aiming to launch a highly optimized, conversion-focused e-commerce storefront.",
    features: [
      "Custom Theme Setup & Liquid Edits",
      "Up to 50 Products Configured",
      "Cart Drawer & Checkout Optimize",
      "Payment Gateway Integration",
      "Standard E-Commerce SEO",
      "Delivery in 10-14 Days",
      "3 Months Complete Support"
    ],
    isPopular: false,
    ctaText: "Choose Shopify"
  },
  {
    name: "Custom Application",
    price: "Custom Quote",
    description: "Enterprise-grade bespoke software solutions tailored exactly to your unique business operational workflows.",
    features: [
      "Bespoke System Architecture",
      "Next.js / React Web Application",
      "Admin Panel & Analytics Dashboard",
      "Database & Custom API Integrations",
      "Enterprise Level Security",
      "Continuous Dedicated Dev Sprints",
      "12 Months VIP Support"
    ],
    isPopular: false,
    ctaText: "Contact for Quote"
  }
];

export const faqData: FAQItem[] = [
  {
    question: "How long does a website take to build?",
    answer: "A basic Starter landing page takes 5-7 days. Comprehensive multi-page Corporate websites or Shopify e-commerce portals average 10-20 days, depending on content availability and design feedback."
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer: "Yes, we set up and configure your domains, emails, and cloud servers. We typically deploy Next.js apps to Vercel/AWS and WordPress/Shopify to their native high-speed hosts."
  },
  {
    question: "Do you offer post-launch website maintenance?",
    answer: "Yes, we provide ongoing support contracts that include monthly backups, software updates, security scans, text revisions, and minor design tweaks to keep your site fresh and secure."
  },
  {
    question: "Which technologies do you use for development?",
    answer: "Our core development is centered on React, Next.js, TypeScript, and Tailwind CSS. For CMS platforms, we use highly customized, performant layouts in WordPress and Liquid coding in Shopify."
  },
  {
    question: "Do you offer SEO (Search Engine Optimization) services?",
    answer: "Absolutely. All our websites are coded with search engines in mind (clean semantic tags, meta details, fast load times, alt attributes). We also offer monthly SEO contracts covering keyword audits, content strategy, and backlink campaigns."
  },
  {
    question: "Can you manage our social media pages?",
    answer: "Yes! We have an expert social media management team that designs post aesthetics, schedules reels and carousels, drafts copy, runs paid Google & Meta ad campaigns, and reports growth metrics."
  }
];

export const blogData: BlogItem[] = [
  {
    id: "b1",
    slug: "future-of-web-design-2026",
    title: "The Future of Luxury Web Design in 2026",
    excerpt: "Discover how dark premium aesthetics, micro-interactions, and WebGL elements are defining elite digital brand portals this year.",
    content: "Web design has evolved from static landing pages to immersive brand experiences. In 2026, luxury brands are focusing on sensory digital design: custom cursor paths, deep ambient radial glows, and typography masking. We explore how utilizing tools like Next.js App Router and Framer Motion allows developers to build fluid, high-performing visual interfaces that capture user attention instantly and maintain high conversion rates without sacrificing loading speeds.",
    date: "Jun 02, 2026",
    readTime: "5 min read",
    category: "Design Trends",
    image: "linear-gradient(135deg, #1f0117 0%, #4c0840 100%)"
  },
  {
    id: "b2",
    slug: "nextjs-15-performance-secrets",
    title: "Secret Optimizations for Next.js 15 App Router",
    excerpt: "Learn the core techniques to secure perfect 100 Lighthouse performance metrics for complex enterprise applications.",
    content: "Speed is a status symbol. A single second delay in page rendering can cost enterprise brands millions in yearly revenue. In this article, we deep-dive into advanced caching strategies, dynamic server components, critical CSS delivery, next/image optimizations, and loading states configuration. These optimizations guarantee that your Next.js applications run at bullet-proof speeds globally.",
    date: "May 28, 2026",
    readTime: "7 min read",
    category: "Development",
    image: "linear-gradient(135deg, #020b1c 0%, #15418b 100%)"
  },
  {
    id: "b3",
    slug: "shopify-cro-hacks",
    title: "Shopify Conversion Rate Optimization (CRO) Hacks",
    excerpt: "Simple modifications to your product pages and cart workflows that can increase customer retention and sales immediately.",
    content: "Getting traffic to your Shopify store is only half the battle; converting that traffic is where the real value lies. We outline three crucial areas to focus on: designing an overlay cart drawer, configuring smart product size selectors with instant feedback, and utilizing server-side analytics trackers to map out exact checkout friction zones.",
    date: "May 15, 2026",
    readTime: "6 min read",
    category: "E-Commerce",
    image: "linear-gradient(135deg, #091a0c 0%, #1c5225 100%)"
  }
];
