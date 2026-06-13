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
    id: "design",
    title: "Design & Creative",
    iconName: "Palette",
    description: "Premium brand design, UI/UX, visual storytelling, and high‑impact graphics.",
    services: [
      "Logo Design",
      "Brand Guidliness",
      "Business card Design",
      "Brochure Design",
      "Presentation & Pitch Deck Design",
      "Posters & Banner Design"
      
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    iconName: "Code2",
    description: "Custom, high‑performance websites and web applications built with modern frameworks.",
    services: [
      "Business & Portfolio",
      "E-Commerce & Custom Web",
      "Landing Page",
      "Wordpress",
      "Shopify Stores",
      "Website Maintenance & Website Redesign",
      "Website Speed Optimization",
      "CMS integration"
    ]
  },
  {
    id: "smm",
    title: "Social Media Marketing (SMM)",
    iconName: "Share2",
    description: "Strategic social presence, content creation, and community growth for premium brands.",
    services: [
      "Social Media Management",
      "Content Planning & Creation",
      "Social Media Post Design",
      "Hashtag Statergy",
      "Intagram Growth Campigns"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    iconName: "Megaphone",
    description: "Growth‑focused marketing across channels to drive leads and conversions.",
    services: [
      "SEO & Audits",
      "On-page & Local SEO",
      "Email Marketing",
      "Keyword Research",
      "Link Building",
      "Google Business Profile",
      "Google Ads & Meta Ads"
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "12",
    slug: "veloura",
    name: "Veloura",
    industry: "Premium Brand",
    tech: ["Next.js", "React", "Tailwind CSS"],
    result: "Elevated Digital Experience",
    image: "url('/veloura_thumbnail.png') center/cover no-repeat",
    description: "A premium and highly interactive digital presence built for Veloura. Focuses on smooth animations, dynamic user experience, and modern luxury aesthetics.",
    challenges: [
      "Creating an immersive and luxurious user journey.",
      "Optimizing advanced animations for cross-device performance."
    ],
    solutions: [
      "Leveraged modern frontend frameworks for buttery-smooth page transitions.",
      "Engineered a highly responsive and custom UI with Tailwind CSS."
    ],
    liveUrl: "https://veloura-vert-theta.vercel.app/"
  },
  {
    id: "11",
    slug: "all-time-high",
    name: "All Time High Apparel",
    industry: "E-Commerce / Fashion",
    tech: ["Shopify", "Liquid", "Tailwind CSS"],
    result: "Elevated Brand Presence & Sales",
    image: "url('/ath_thumbnail.png') center/cover no-repeat",
    description: "A premium Shopify storefront tailored for an exclusive streetwear brand. Designed to handle high-traffic drop events with effortless style and seamless checkout performance.",
    challenges: [
      "Crafting an edgy, high-end urban aesthetic that resonates with sneakerheads.",
      "Optimizing load speeds for high-resolution lookbook galleries."
    ],
    solutions: [
      "Engineered a dynamic dark-mode theme utilizing custom Liquid components.",
      "Implemented advanced lazy loading and optimized image delivery networks."
    ],
    liveUrl: "https://all-time-high-3962.myshopify.com/"
  },
  {
    id: "10",
    slug: "slate-corporate",
    name: "Modern Corporate Solutions",
    industry: "Business / Corporate",
    tech: ["WordPress", "Elementor", "Tailwind CSS"],
    result: "Seamless Corporate Web Presence",
    image: "url('/slate_thumbnail.png') center/cover no-repeat",
    description: "A sleek, responsive corporate platform developed on WordPress. The site combines sophisticated visual aesthetics with practical lead generation mechanics for a modern business.",
    challenges: [
      "Creating a unified corporate identity across multiple business verticals.",
      "Integrating an intuitive content management workflow."
    ],
    solutions: [
      "Deployed a custom lightweight WordPress architecture.",
      "Utilized modern glassmorphism UI components for a premium feel."
    ],
    liveUrl: "https://slategrey-hummingbird-681132.hostingersite.com/"
  },
  {
    id: "9",
    slug: "nh-adventure",
    name: "NH Adventure Expeditions",
    industry: "Travel & Adventure",
    tech: ["WordPress", "Custom PHP", "Tailwind CSS"],
    result: "High-Performance Booking Portal",
    image: "url('/nhadventure_thumbnail.png') center/cover no-repeat",
    description: "A premium WordPress platform designed for an elite outdoor expedition brand. The site focuses on immersive, dramatic imagery and seamless booking integrations for luxury travelers.",
    challenges: [
      "Showcasing high-resolution expedition media without sacrificing load speed.",
      "Building a custom, frictionless tour booking engine."
    ],
    solutions: [
      "Engineered a customized WordPress theme integrated with Tailwind CSS.",
      "Implemented intelligent caching and dynamic media loading."
    ],
    liveUrl: "https://nhadventure.com/"
  },
  {
    id: "8",
    slug: "lakfa-foods",
    name: "Lakfa Foods",
    industry: "E-Commerce / Food & Beverage",
    tech: ["Shopify", "Liquid", "Tailwind CSS"],
    result: "High-Converting Premium Storefront",
    image: "url('/lakfa_thumbnail.png') center/cover no-repeat",
    description: "A premium Shopify storefront designed for an artisanal tuna pickle brand. The focus was on translating gourmet quality into a fast, highly optimized shopping experience.",
    challenges: [
      "Presenting a single-niche product as a premium luxury item.",
      "Optimizing the mobile checkout flow for higher conversions."
    ],
    solutions: [
      "Implemented a dark-mode luxury aesthetic with high-end food typography.",
      "Developed a custom slide-out cart drawer for frictionless purchasing."
    ],
    liveUrl: "https://lakfafoods.com/"
  },
  {
    id: "7",
    slug: "gym-dun-rho",
    name: "Elite Fitness Center",
    industry: "Health & Fitness",
    tech: ["Next.js", "React", "Tailwind CSS"],
    result: "High-Performance Digital Presence",
    image: "url('/gym_thumbnail.png') center/cover no-repeat",
    description: "A highly dynamic and visually striking fitness platform built for performance. Features a robust dark theme with aggressive energy to capture the elite gym demographic.",
    challenges: [
      "Crafting an aesthetic that matches high-intensity fitness.",
      "Ensuring rapid load times for media-heavy pages."
    ],
    solutions: [
      "Leveraged a modern dark UI with bold typography.",
      "Optimized assets and deployed on edge infrastructure."
    ],
    liveUrl: "https://gym-dun-rho.vercel.app/"
  },
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
    name: "Starter Digital Presence Package",
    price: "₹8,000",
    description: "For small businesses who want to start online",
    features: [
      "🎨 Design",
      "8 Social Media Posts/month",
      "4 Story Designs/month",
      "Basic Promotional Creatives",
      "Brand Template Setup",
      "📱 Social Media Management",
      "Instagram/Facebook Page Management",
      "Content Calendar",
      "Post Scheduling",
      "Basic Caption Writing",
      "Hashtag Research",
      "📈 Digital Marketing",
      "Google Business Profile Setup",
      "Basic Competitor Research",
      "Monthly Performance Summary",
      "🤝 Suitable For:",
      "Local shops, Small restaurants, Startups, Individual professionals"
    ],
    isPopular: false,
    ctaText: "Choose Starter"
  },
  {
    name: "Growth & Visibility Package",
    price: "₹15,000",
    description: "For businesses looking to increase engagement",
    features: [
      "🎨 Design",
      "15 Social Media Posts/month",
      "8 Story Designs/month",
      "Promotional Campaign Creatives",
      "Festival/Event Creatives",
      "📱 Social Media Management",
      "Complete Account Handling",
      "Content Strategy",
      "Caption Writing",
      "Audience Engagement",
      "Monthly Analytics Report",
      "📈 Digital Marketing",
      "Basic SEO Optimization",
      "Google Business Optimization",
      "Meta Ads Setup",
      "Marketing Strategy",
      "🤝 Suitable For:",
      "Growing businesses, Service providers, E-commerce brands"
    ],
    isPopular: true,
    ctaText: "Choose Growth"
  },
  {
    name: "Business Growth Package",
    price: "₹30,000",
    description: "For businesses focused on leads and growth",
    features: [
      "🎨 Design",
      "25 Social Media Posts/month",
      "Reel Covers",
      "Ad Creatives",
      "Branding Support",
      "📱 Social Media Management",
      "Full Social Media Management",
      "Advanced Content Planning",
      "Community Management",
      "Trend-Based Content Strategy",
      "📈 Digital Marketing",
      "Meta Ads Management",
      "Google Ads Setup & Monitoring",
      "SEO Improvement Plan",
      "Lead Generation Strategy",
      "Detailed Monthly Report",
      "🤝 Suitable For:",
      "Established local brands, Real estate, Restaurants, Service companies"
    ],
    isPopular: false,
    ctaText: "Choose Business Growth"
  },
  {
    name: "Custom Enterprise Plan",
    price: "Custom Quote",
    description: "Bespoke digital marketing and design solutions for specific needs",
    features: [
      "🎨 Design",
      "Unlimited Graphic Creatives",
      "Custom Video Editing & Reels",
      "Complete Brand Identity",
      "📱 Social Media Management",
      "Multi-platform Management",
      "Daily Content Publishing",
      "24/7 Community Management",
      "📈 Digital Marketing",
      "Enterprise SEO Strategy",
      "High-Budget Ad Campaigns",
      "Advanced Lead Generation",
      "🤝 Suitable For:",
      "Large corporations, Scaling agencies, Global e-commerce"
    ],
    isPopular: false,
    ctaText: "Contact for Quote"
  }
];

export const webDevPricingPlans: PricingPlan[] = [
  {
    name: "🚀 Basic Website Package",
    price: "₹10,000",
    description: "For small businesses and individuals who need a professional online presence",
    features: [
      "⚙️ Features:",
      "4–5 Website Pages",
      "Responsive Website Design",
      "Clean & Professional UI Design",
      "Business Information Sections",
      "Contact Form Integration",
      "WhatsApp Chat Integration",
      "Google Map Integration",
      "Social Media Links Integration",
      "Basic SEO-Friendly Setup",
      "Deployment Assistance",
      "⏱️ Delivery Time:",
      "4–5 Working Days",
      "🛠️ Support:",
      "15 Days Free Support",
      "🤝 Suitable For:",
      "Small businesses, Freelancers, Personal brands, Local service providers"
    ],
    isPopular: false,
    ctaText: "Choose Basic"
  },
  {
    name: "📈 Standard Website Package",
    price: "₹18,000",
    description: "For businesses looking for a complete professional website",
    features: [
      "⚙️ Features:",
      "7–8 Website Pages",
      "Custom UI Design",
      "Fully Responsive Development",
      "Service/Product Showcase",
      "Inquiry Form Integration",
      "WhatsApp Business Integration",
      "Google Map Integration",
      "Social Media Integration",
      "Basic On-Page SEO Setup",
      "Website Speed Optimization",
      "Google Analytics Integration",
      "Deployment Assistance",
      "⏱️ Delivery Time:",
      "7–10 Working Days",
      "🛠️ Support:",
      "30 Days Free Support",
      "🤝 Suitable For:",
      "Growing businesses, Startups, Service companies, Professional brands"
    ],
    isPopular: true,
    ctaText: "Choose Standard"
  },
  {
    name: "🔥 Premium Website Package",
    price: "₹25,000",
    description: "For businesses requiring a stronger digital presence",
    features: [
      "⚙️ Features:",
      "9–10 Website Pages",
      "Premium UI/UX Design",
      "Advanced Responsive Layout",
      "Modern Animations & Interactive Sections",
      "Blog Section Integration",
      "Advanced Contact Forms",
      "Lead Generation Setup",
      "Google Analytics & Search Console Setup",
      "SEO-Friendly Structure",
      "Performance Optimization",
      "Security Configuration",
      "Content Management Support",
      "Deployment Assistance",
      "⏱️ Delivery Time:",
      "10–15 Working Days",
      "🛠️ Support:",
      "3 Months Free Support",
      "🤝 Suitable For:",
      "Established businesses, Brands, Agencies, Companies focusing on growth"
    ],
    isPopular: false,
    ctaText: "Choose Premium"
  },
  {
    name: "🏢 Custom Website Package",
    price: "Custom Quote",
    description: "For businesses requiring advanced features and custom solutions",
    features: [
      "⚙️ Features:",
      "Custom UI/UX Design",
      "10+ Pages / Unlimited Pages",
      "Custom Functionalities",
      "Admin Dashboard",
      "User Login System",
      "Database Integration",
      "API Integration",
      "Payment Gateway Integration",
      "E-commerce Features",
      "CRM/ERP Integration",
      "Advanced Animations",
      "Custom Business Requirements",
      "⏱️ Delivery Time:",
      "Based on Project Scope",
      "🛠️ Support:",
      "Custom Support Plans",
      "🤝 Suitable For:",
      "Enterprises, Large Agencies, Complex SaaS platforms"
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
    image: "url('/blog_design.png') center/cover no-repeat"
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
    image: "url('/blog_nextjs.png') center/cover no-repeat"
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
    image: "url('/blog_shopify.png') center/cover no-repeat"
  }
];
