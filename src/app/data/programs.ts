export interface Program {
  id: string;
  category: string;
  badge: string;
  duration: string;
  title: string;
  description: string;
  tags: string[];
  highlights?: string[];
  certification: string;
  role?: string;
}

export const programsData: Program[] = [
  {
    id: "ai-foundations",
    category: "AI & GenAI",
    badge: "POPULAR",
    duration: "4–6 weeks",
    title: "AI Foundations & Productivity",
    description: "Master AI literacy, prompt engineering, generative tools, and automated workflow design to multiply your career productivity.",
    tags: ["AI Literacy", "Prompting", "Workflow Design", "Responsible AI"],
    certification: "Certified Techlearns AI Practitioner"
  },
  {
    id: "genai-agentic",
    category: "AI & GenAI",
    badge: "HIGH DEMAND",
    duration: "5–6 months",
    title: "Generative AI & Agentic AI Engineering",
    description: "Deep dive into Python, LLM APIs, RAG architecture, Autonomous Agents, and LLMOps for production systems.",
    tags: ["Python", "LangChain", "RAG Architecture", "Agentic AI"],
    certification: "Certified GenAI Solutions Architect"
  },
  {
    id: "fullstack-ai",
    category: "Software Eng",
    badge: "FLAGSHIP PPO",
    duration: "6–9 months",
    title: "Full-Stack Software Engineering with AI",
    description: "Comprehensive software development covering Frontend, Backend microservices, System Design, and AI integration.",
    tags: ["React", "Node.js", "Python/Java", "PostgreSQL"],
    certification: "Certified Full-Stack Software Engineer"
  },
  {
    id: "cloud-devops",
    category: "Cloud & DevOps",
    badge: "INDUSTRY ESSENTIALS",
    duration: "5–6 months",
    title: "Cloud, DevOps & System Engineering",
    description: "Hands-on cloud infrastructure, CI/CD, Docker containers, Kubernetes orchestration, and cloud security defense.",
    tags: ["AWS", "Docker", "Terraform", "Kubernetes"],
    certification: "Certified Cloud & DevOps Architect"
  },
  {
    id: "cybersecurity-sec",
    category: "Cybersecurity",
    badge: "CRITICAL",
    duration: "4–6 months",
    title: "Cybersecurity & Ethical Hacking",
    description: "Penetration testing, network security, SIEM analysis, threat modeling, and zero-trust security frameworks.",
    tags: ["Penetration Testing", "Cloud Security", "SIEM & SOC", "Zero-Trust"],
    certification: "Certified Cybersecurity Architect"
  },
  {
    id: "data-analytics",
    category: "Data & Analytics",
    badge: "HIGH GROWTH",
    duration: "5–6 months",
    title: "Data Science & Applied Analytics",
    description: "Data pipelines, predictive modeling, machine learning, PowerBI dashboards, and big data processing.",
    tags: ["Python & Pandas", "SQL & Big Data", "Machine Learning", "PowerBI"],
    certification: "Certified Data Analytics Lead"
  }
];
