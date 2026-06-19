import { Project } from "../data/projects";

// Helper to resolve Google Drive sharing links to direct image links
export const getDirectImageUrl = (url: string): string => {
  if (!url) return "";
  // Check if it's a google drive file link
  const driveRegex = /\/file\/d\/([a-zA-Z0-9_-]+)\/(?:view|edit)?/;
  const match = url.match(driveRegex);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return url;
};

export const siteConfig = {
  companyName: "NexScale",
  tagline: "Helping Businesses Scale Through Technology",
  logo: {
    prefix: "Nex",
    suffix: "Scale",
  },
  technicalExpertise: [
    { name: "Custom Web Applications", desc: "Web Engineering" },
    { name: "Business Automation", desc: "Process Scaling" },
    { name: "Python Solutions", desc: "Backend Engines" },
    { name: "API Development", desc: "REST Architectures" },
    { name: "Cloud Deployment", desc: "Hosting & Scaling" },
    { name: "Database Design", desc: "Storage Models" },
    { name: "Containerized Applications", desc: "Docker Deployments" },
    { name: "Algorithm Engineering", desc: "Complex Logic" },
    { name: "Infrastructure Setup", desc: "DevOps Operations" },
    { name: "Scalable Software Architecture", desc: "Enterprise Layouts" }
  ],
  contact: {
    email: "nexscale7@gmail.com",
    phone: "+91 7709215976",
    whatsappNumber: "917709215976", // Country code prefix + number (no +, spaces, or dashes)
    address: "Dadar, Mumbai",
    googleMapsLink: "https://maps.google.com/?q=Dadar,+Mumbai",
  },
  socialLinks: {
    linkedin: "https://linkedin.com/company/nexscale",
    instagram: "https://www.instagram.com/nexscale77",
    facebook: "https://www.facebook.com/share/1jfjBviydp/",
    youtube: "https://youtube.com/@nexscale77",
    whatsapp: "https://wa.me/917709215976",
    github: "https://github.com/nexscale", // future config
  },
  ctas: {
    primary: {
      text: "Book a Consultation",
      href: "#contact",
    },
    secondary: {
      text: "View Services",
      href: "#services",
    },
  },
  team: [
    {
      id: "neel-sheth",
      name: "Neel Sheth",
      title: "Technology Solutions Specialist",
      photoUrl: "https://drive.google.com/file/d/1Wz5iSYK0cB_TFLt0rtU4lm9cVv5U18-M/view?usp=sharing",
      description: "Specializing in building scalable technology solutions for modern businesses through custom software, automation, AI integration, and modern web technologies.",
      expertise: [
        "Website Development",
        "Business Automation",
        "AI Solutions",
        "Custom Software Development"
      ],
      skillBadges: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "Automation",
        "REST APIs",
        "Docker",
        "TypeScript"
      ],
      socials: {
        linkedin: "https://www.linkedin.com/neelsheth2007",
        email: "mailto:nexscale7@gmail.com",
        resume: "", // Future resume link
        portfolio: "", // Future portfolio link
      }
    },
    {
      id: "harsh-sheth",
      name: "Harsh Sheth",
      title: "Business Development Associate",
      photoUrl: "https://drive.google.com/file/d/13Fa9XNVVJnC-Uq_mVs5s2c9A7uvMXHaM/view?usp=sharing",
      description: "Focused on understanding business requirements, building long-term client relationships, identifying growth opportunities, and connecting businesses with the right technology solutions.",
      expertise: [
        "Client Acquisition",
        "Business Consulting",
        "Partnership Development",
        "Requirement Analysis"
      ],
      skillBadges: [
        "Business Strategy",
        "Client Relations",
        "Communication",
        "Lead Generation",
        "Market Research",
        "Partnerships"
      ],
      socials: {
        linkedin: "https://www.linkedin.com/in/harsh-shet",
        email: "mailto:nexscale7@gmail.com",
        resume: "", // Future resume link
        portfolio: "", // Future portfolio link
      }
    }
  ],
  whyWorkWithUs: {
    title: "Why Work With NexScale?",
    cards: [
      {
        id: "business-first",
        title: "Business First",
        description: "We focus on solving real business challenges instead of simply delivering software."
      },
      {
        id: "modern-tech",
        title: "Modern Technology",
        description: "We build scalable, maintainable, and future-ready digital solutions."
      },
      {
        id: "long-term",
        title: "Long-Term Partnership",
        description: "We believe in building long-term relationships by supporting businesses as they continue to grow."
      }
    ]
  },
  projects: [
    {
      id: "momentum-swing-trading",
      name: "Momentum Swing Trading System",
      category: "Algorithmic Trading",
      description: "A rule-based algorithmic swing trading system designed for long-term portfolio growth. The system includes momentum-based stock selection, automated risk management, trailing stop-loss logic, capital protection mechanisms, portfolio monitoring, and backtesting capabilities.",
      features: [
        "Momentum-based stock screening",
        "Automated trade execution architecture",
        "Risk management framework",
        "Portfolio analytics dashboard",
        "Backtesting engine",
        "Performance tracking",
        "Cloud-ready deployment architecture"
      ],
      techStack: ["Python", "FastAPI", "MongoDB", "Docker", "VPS Deployment", "REST APIs"],
      status: "Completed",
      isFeatured: true,
      completionDate: "2025-11",
      imageUrl: "/projects/trading.jpg"
    },
    {
      id: "medical-ecommerce",
      name: "Medical E-Commerce Platform",
      category: "Healthcare Technology",
      description: "A scalable medical e-commerce platform designed for medicine ordering, inventory management, distributor integration, and future healthcare ecosystem expansion.",
      features: [
        "Inventory & SKU management",
        "Distributor APIs synchronization",
        "Encrypted medicine ordering workflows",
        "Modular medical records capability"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"],
      status: "Under Development",
      imageUrl: "/projects/medical.jpg"
    }
  ] as Project[],
  contactFormSettings: {
    serviceOptions: [
      "Website Development",
      "Business Automation",
      "Customer Retention Systems",
      "WhatsApp Automation",
      "AI Solutions",
      "Trading Technology Solutions",
      "Custom Software Development",
      "Other"
    ],
    successMessage: "Redirecting to WhatsApp...",
    redirectDescription: "Opening chat session. If the window did not open, please use the direct link button."
  }
};
