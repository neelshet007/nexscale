import { projectsData } from "../data/projects";

// Helper to resolve Google Drive sharing links to direct image links
export const getDirectImageUrl = (url: string): string => {
  if (!url) return "";
  const driveRegex = /\/file\/d\/([a-zA-Z0-9_-]+)\/(?:view|edit)?/;
  const match = url.match(driveRegex);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return url;
};

export interface ServiceSubsystem {
  letter: string;
  title: string;
  shortTitle: string;
  description: string;
  points: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  subsystems?: ServiceSubsystem[];
}

export const siteConfig = {
  companyName: "NexScale",
  tagline: "Helping Businesses Scale Through Technology",
  secondaryTagline: "Built on Trust. Driven by Technology.",
  hero: {
    headline: "Technology That Moves Your Business Forward.",
    subheadline:
      "We build custom software, connect business operations, automate workflows, and engineer reliable infrastructure to help businesses operate smarter and scale.",
    primaryCTA: {
      text: "Book a Consultation",
      href: "#contact",
    },
    secondaryCTA: {
      text: "Explore Our Services",
      href: "#services",
    },
  },
  logo: {
    prefix: "Nex",
    suffix: "Scale",
  },
  contact: {
    heading: "Let's Build the Right Solution for Your Business.",
    subheading:
      "Tell us about your business, your operational challenges, or your technology requirements. Let's explore how NexScale can help.",
    email: "neelshet@teamnexscale.com",
    phone: "+91 9356626189",
    whatsappNumber: "919356626189", // Country code prefix + number (no +, spaces, or dashes)
    location: "Dadar, Mumbai, India",
    address: "Dadar, Mumbai, Maharashtra 400014, India",
    googleMapsLink: "https://maps.google.com/?q=Dadar,+Mumbai",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/nexscale7",
    instagram: "https://www.instagram.com/nexscale77",
    facebook: "https://www.facebook.com/share/1jfjBviydp/",
    youtube: "https://youtube.com/@nexscale77",
    whatsapp: "https://wa.me/919356626189",
    github: "https://github.com/nexscale",
  },
  ctas: {
    primary: {
      text: "Book a Consultation",
      href: "#contact",
    },
    secondary: {
      text: "Explore Our Services",
      href: "#services",
    },
  },
  services: [
    {
      id: "custom-web-applications",
      number: "01",
      title: "Custom Web Applications",
      subtitle: "Full-Stack Web Engineering",
      description:
        "High-performance, scalable web systems engineered from the ground up for speed, reliability, and seamless user experiences.",
      capabilities: [
        "Custom business websites",
        "Web application development",
        "Full-stack engineering",
        "Internal business applications",
        "Frontend and backend development",
        "Database-driven platforms"
      ]
    },
    {
      id: "business-systems-automation",
      number: "02",
      title: "Business Systems & Automation",
      subtitle: "Workflow & Process Scaling",
      description:
        "Connect your sales, customers, operations, inventory, and workforce through intelligent, bespoke business systems designed for institutional reliability.",
      capabilities: [
        "End-to-end operational pipeline engineering",
        "Bespoke CRM, ERP & HRM architectures",
        "Cross-departmental data synchronization",
        "Automated notifications and triggers",
        "Audit trails and managerial reporting",
        "Legacy software modernization"
      ],
      subsystems: [
        {
          letter: "A",
          title: "Lead & Sales Management",
          shortTitle: "Sales & Leads",
          description: "Capture, qualify, and track business prospects automatically through custom sales pipelines.",
          points: [
            "Lead capture and organization across channels",
            "Automated follow-ups and communication flows",
            "Sales pipeline management and stage tracking",
            "Deal tracking and sales workflow automation",
            "Connecting successful deals with project and inventory workflows"
          ]
        },
        {
          letter: "B",
          title: "CRM — Customer Relationship Management",
          shortTitle: "CRM System",
          description: "Centralized client history, ticket handling, and collaborative account intelligence.",
          points: [
            "Centralized customer information and profiles",
            "Complete customer interaction history",
            "Support ticket management and resolution tracking",
            "Automated customer communication and notifications",
            "Customer engagement workflows",
            "Sales and client relationship visibility for teams"
          ]
        },
        {
          letter: "C",
          title: "ERP — Enterprise Resource Planning",
          shortTitle: "ERP & Operations",
          description: "Real-time operational control connecting procurement, inventory, billing, and orders.",
          points: [
            "Inventory management and SKU tracking",
            "Billing and invoicing automation",
            "Procurement and vendor order management",
            "Resource planning and allocation",
            "Operational reporting and audit logs",
            "Real-time business visibility across departments"
          ]
        },
        {
          letter: "D",
          title: "HRM — Human Resource Management",
          shortTitle: "HRM & Workforce",
          description: "Streamlined workforce management linking daily operations directly to business data.",
          points: [
            "Employee profile and records management",
            "Attendance tracking and check-in workflows",
            "Leave management and approval hierarchies",
            "Payroll automation and disbursement tracking",
            "Performance management and review tracking",
            "Employee productivity and commission tracking"
          ]
        }
      ]
    },
    {
      id: "api-development",
      number: "03",
      title: "API Development",
      subtitle: "REST & Scalable Architectures",
      description:
        "Robust, type-safe application programming interfaces and backend architectures built for high throughput, security, and integration.",
      capabilities: [
        "REST API development",
        "Backend engineering and microservices",
        "Third-party integrations and webhooks",
        "Database architecture and modeling",
        "Authentication and authorization (RBAC)",
        "System-to-system integrations",
        "Scalable backend services"
      ]
    },
    {
      id: "cloud-deployment",
      number: "04",
      title: "Cloud Deployment",
      subtitle: "Managed Hosting & Auto-Scaling",
      description:
        "Production-grade application deployment and hosting configurations built for continuous uptime, low latency, and auto-scaling.",
      capabilities: [
        "Application deployment across modern cloud providers",
        "Managed hosting setup and operations",
        "VPS deployment and environment hardening",
        "Cloud infrastructure architecture",
        "Auto-scaling configuration and cost governance",
        "Database deployment and automated backups",
        "System monitoring and health checks",
        "Production environment management"
      ]
    },
    {
      id: "devops-cybersecurity",
      number: "05",
      title: "DevOps, Cloud & Cybersecurity",
      subtitle: "Infrastructure Engineering & Security",
      description:
        "Automated continuous delivery pipelines combined with defense-in-depth infrastructure security engineered directly into your stack.",
      capabilities: [
        "CI/CD pipeline engineering for build and release",
        "Docker and containerization workflows",
        "Infrastructure as Code (IaC) architectures",
        "DevOps implementation and workflow modernization",
        "Cloud infrastructure management",
        "System monitoring and observability",
        "Infrastructure security and firewall configuration",
        "Application security and credential management",
        "Vulnerability assessment and remediation"
      ]
    }
  ] as ServiceItem[],
  whyNexScale: {
    heading: "Engineering Technology Around Your Business.",
    subheading:
      "We look beyond writing code and deploying servers. We understand business processes, identify operational bottlenecks, and engineer technology solutions designed around real commercial requirements.",
    differentiators: [
      {
        id: "business-first",
        number: "01",
        title: "Business-First Approach",
        description:
          "We start by understanding your commercial goals and operational bottlenecks. Every software architecture we develop is built to solve real business challenges."
      },
      {
        id: "scalable-engineering",
        number: "02",
        title: "Scalable Engineering",
        description:
          "We engineer clean, maintainable systems that scale smoothly as your business grows, ensuring long-term software stability without costly rewrites."
      },
      {
        id: "connected-systems",
        number: "03",
        title: "Connected Business Systems",
        description:
          "We connect disparate operations—linking sales leads, CRM, ERP inventory, and workforce management into a coherent, automated operational flow."
      },
      {
        id: "long-term-partnership",
        number: "04",
        title: "Long-Term Partnership",
        description:
          "We focus on dependable delivery and ongoing technical support, serving as a dedicated technology partner invested in your long-term success."
      }
    ]
  },
  projects: projectsData,
  process: {
    heading: "From Business Requirements to Working Technology.",
    subheading:
      "A structured, engineering-first approach from initial requirements discovery through to production deployment and ongoing support.",
    steps: [
      {
        step: "01",
        title: "Discovery & Requirements",
        description:
          "Understand the business, its operational workflows, challenges, commercial objectives, and technical requirements."
      },
      {
        step: "02",
        title: "Planning & Architecture",
        description:
          "Define the technical approach, system architecture, database design, integration touchpoints, and delivery roadmap."
      },
      {
        step: "03",
        title: "Development & Testing",
        description:
          "Engineer, integrate, test, and refine the solution with strict attention to performance, security, and code quality."
      },
      {
        step: "04",
        title: "Deployment & Support",
        description:
          "Launch the solution into production, configure monitoring, verify performance, and provide ongoing technical support."
      }
    ]
  },
  team: [
    {
      id: "neel-sheth",
      name: "Neel Sheth",
      title: "Technology Solutions Specialist",
      photoUrl: "https://drive.google.com/file/d/1Wz5iSYK0cB_TFLt0rtU4lm9cVv5U18-M/view?usp=sharing",
      description:
        "Specializing in building scalable technology solutions for modern businesses through custom software, automation, AI integration, and modern web technologies.",
      focusAreas: [
        "Custom software development",
        "Web engineering",
        "Business automation",
        "AI integrations",
        "Backend systems",
        "Cloud and DevOps technologies"
      ],
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "Docker",
        "TypeScript",
        "Automation"
      ],
      socials: {
        linkedin: "https://www.linkedin.com/neelsheth2007",
        email: "mailto:neelshet@teamnexscale.com"
      }
    },
    {
      id: "harsh-sheth",
      name: "Harsh Sheth",
      title: "Business Development Associate",
      photoUrl: "https://drive.google.com/file/d/13Fa9XNVVJnC-Uq_mVs5s2c9A7uvMXHaM/view?usp=sharing",
      description:
        "Focused on understanding business requirements, building long-term client relationships, identifying growth opportunities, and connecting businesses with the right technology solutions.",
      focusAreas: [
        "Client acquisition",
        "Business consulting",
        "Partnership development",
        "Requirement analysis",
        "Market research",
        "Client relationships"
      ],
      technologies: [
        "Business Strategy",
        "Client Relations",
        "Communication",
        "Requirement Analysis",
        "Market Research",
        "Partnerships"
      ],
      socials: {
        linkedin: "https://www.linkedin.com/in/harsh-shet-7844a2205/",
        email: "mailto:harshshet@teamnexscale.com"
      }
    }
  ],
  contactFormSettings: {
    serviceOptions: [
      "Custom Web Applications",
      "Business Systems & Automation",
      "API Development",
      "Cloud Deployment",
      "DevOps, Cloud & Cybersecurity",
      "Other"
    ]
  }
};
