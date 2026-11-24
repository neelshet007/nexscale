export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  challenge: string;
  approach: string;
  description: string;
  features: string[];
  techStack: string[];
  status: 'Completed' | 'Under Development' | 'In Production';
  isFeatured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  completionDate?: string;
  outcome?: string;
}

export const projectsData: Project[] = [
  {
    id: "momentum-swing-trading",
    name: "Momentum Swing Trading System",
    category: "Algorithmic Trading & Automation",
    tagline: "Rule-based algorithmic execution engine with automated risk controls",
    challenge: "Manual equity swing trading suffers from execution delays, emotional decision-making, and inconsistent adherence to risk controls in volatile markets.",
    approach: "Built a rule-based algorithmic trading system in Python and FastAPI running on a dedicated VPS, featuring automated stock selection, trailing stop-loss logic, and real-time portfolio monitoring.",
    description: "A rule-based algorithmic swing trading system designed for long-term portfolio growth. The system includes momentum-based stock selection, automated risk management, trailing stop-loss logic, capital protection mechanisms, portfolio monitoring, and backtesting capabilities.",
    features: [
      "Momentum-based stock selection logic",
      "Automated risk management framework",
      "Trailing stop-loss algorithms",
      "Capital protection safeguards",
      "Portfolio monitoring and telemetry",
      "Backtesting engine across historical data",
      "Headless VPS deployment with automated process monitoring"
    ],
    techStack: ["Python", "FastAPI", "MongoDB", "Docker", "VPS", "REST APIs"],
    status: "Completed",
    isFeatured: true,
    completionDate: "2025-11",
    imageUrl: "/projects/trading.jpg",
    outcome: "Eliminated emotional trading decisions with sub-second rule evaluation and automated execution logging."
  },
  {
    id: "medical-ecommerce",
    name: "Medical E-Commerce Platform",
    category: "Full-Stack Web Engineering",
    tagline: "Healthcare commerce platform with inventory management and distributor sync",
    challenge: "Handling pharmaceutical inventory requires accurate batch tracking, distributor catalog synchronization, secure ordering flows, and reliable data management.",
    approach: "Architecting a full-stack platform using Next.js, Node.js, and PostgreSQL with Docker containerization, integrating medicine ordering workflows and distributor inventory synchronization.",
    description: "A scalable medical e-commerce platform designed for medicine ordering, inventory management, distributor integration, and future healthcare ecosystem expansion.",
    features: [
      "Medicine ordering and customer checkout workflows",
      "Inventory & SKU management with stock tracking",
      "Distributor API catalog synchronization",
      "Modular medical records capability",
      "Role-based access for operations and inventory staff",
      "Containerized deployment with Docker"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"],
    status: "Under Development",
    imageUrl: "/projects/medical.jpg",
    outcome: "Under active development to streamline pharmaceutical inventory operations and multi-channel ordering."
  }
];
