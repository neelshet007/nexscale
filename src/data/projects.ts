export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  status: 'Completed' | 'Under Development' | 'Coming Soon';
  isFeatured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  completionDate?: string;
}

export const projectsData: Project[] = [
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
];
