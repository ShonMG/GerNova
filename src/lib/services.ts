import type { ElementType } from "react";

import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Globe2,
  Layers3,
  PlugZap,
  SearchCheck,
  Smartphone,
  Settings2,
  ShieldCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export type Service = {
  number: string;
  icon: ElementType;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  accent: string;
  accentBg: string;
  deliverables: string[];
  idealFor: string[];
};



export const services: Service[] = [
  {
    number: "01",
    icon: Globe2,
    title: "Web Development",
    shortDescription:
      "Fast, responsive and scalable websites that turn your digital presence into a powerful business tool.",
    description:
      "We design and develop modern websites that combine strong visual design, intuitive user experiences and reliable technology. Whether you need a corporate website, business platform, landing page or custom web application, we build digital experiences around your business objectives.",
    image: "/images/services/web_development.png",
    accent: "text-orange-500",
    accentBg: "bg-orange-500/10",
    deliverables: [
      "Corporate & business websites",
      "Landing pages",
      "Custom web applications",
      "E-commerce experiences",
      "CMS-powered websites",
      "Responsive UI development",
      "Website redesigns",
      "Performance optimization",
    ],
    idealFor: [
      "Growing businesses",
      "Startups",
      "Professional firms",
      "Organizations",
      "E-commerce businesses",
    ],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile Applications",
    shortDescription:
      "Modern mobile applications designed to help businesses engage customers and deliver better digital experiences.",
    description:
      "We create mobile applications that make products, services and business processes accessible wherever your customers and teams are. From customer-facing applications to internal business tools, our approach focuses on usability, performance and scalability.",
    image: "/images/services/mobile-apps.png",
    accent: "text-purple-500",
    accentBg: "bg-purple-500/10",
    deliverables: [
      "Android applications",
      "iOS applications",
      "Cross-platform apps",
      "Customer portals",
      "Business management apps",
      "Mobile dashboards",
      "API-connected applications",
      "Application maintenance",
    ],
    idealFor: [
      "Startups",
      "Service businesses",
      "Financial organizations",
      "Education platforms",
      "Customer-facing businesses",
    ],
  },
  {
    number: "03",
    icon: PlugZap,
    title: "APIs & Integrations",
    shortDescription:
      "Connect your systems, platforms and third-party services with reliable APIs and seamless integrations.",
    description:
      "Modern businesses rely on multiple digital systems. We help those systems communicate with each other through APIs and integrations, reducing manual work, improving data flow and creating a more connected technology environment.",
    image: "/images/services/api-integrations.png",
    accent: "text-blue-500",
    accentBg: "bg-blue-500/10",
    deliverables: [
      "REST API development",
      "Third-party API integrations",
      "Payment integrations",
      "CRM integrations",
      "Database integrations",
      "Authentication systems",
      "Webhook integrations",
      "System-to-system connectivity",
    ],
    idealFor: [
      "Digital businesses",
      "SaaS companies",
      "Financial platforms",
      "Organizations with multiple systems",
      "Businesses replacing manual processes",
    ],
  },
  {
    number: "04",
    icon: SearchCheck,
    title: "SEO & Digital Growth",
    shortDescription:
      "Improve your visibility, attract qualified visitors and grow your business through data-driven SEO strategies.",
    description:
      "A great website needs to be discoverable. GerNova combines technical SEO, content structure, website performance and digital growth strategies to help businesses build a stronger presence across search engines and digital channels.",
    image: "/images/services/seo-digital-growth.png",
    accent: "text-teal-500",
    accentBg: "bg-teal-500/10",
    deliverables: [
      "Technical SEO",
      "On-page SEO",
      "Website performance optimization",
      "Keyword research",
      "SEO content structure",
      "Local SEO foundations",
      "Search visibility analysis",
      "Digital performance reporting",
    ],
    idealFor: [
      "Local businesses",
      "Professional services",
      "E-commerce brands",
      "Startups",
      "Businesses launching new websites",
    ],
  },
  {
    number: "05",
    icon: Workflow,
    title: "Business Automation",
    shortDescription:
      "Automate repetitive workflows and connect your business processes so your team can focus on what matters.",
    description:
      "We identify repetitive processes that consume time and turn them into streamlined digital workflows. From notifications and data processing to approvals, customer onboarding and internal operations, automation can help your team work more efficiently.",
    image: "/images/services/business-automation.png",
    accent: "text-red-500",
    accentBg: "bg-red-500/10",
    deliverables: [
      "Workflow automation",
      "Form & data automation",
      "Email automation",
      "Notification systems",
      "Approval workflows",
      "Customer onboarding flows",
      "Document processing",
      "Business process integrations",
    ],
    idealFor: [
      "Operations teams",
      "Growing businesses",
      "Service companies",
      "Organizations with repetitive workflows",
      "Businesses managing large amounts of data",
    ],
  },
  {
    number: "06",
    icon: Cloud,
    title: "Cloud Solutions",
    shortDescription:
      "Secure, scalable cloud infrastructure and applications built to support growing digital businesses.",
    description:
      "We help businesses move applications and workloads into reliable cloud environments. Our approach focuses on scalability, availability, performance and practical infrastructure that supports your technology without unnecessary complexity.",
    image: "/images/services/cloud-solutions.png",
    accent: "text-sky-500",
    accentBg: "bg-sky-500/10",
    deliverables: [
      "Cloud application deployment",
      "Cloud infrastructure setup",
      "Application hosting",
      "Database deployment",
      "Cloud migrations",
      "Environment configuration",
      "Deployment workflows",
      "Performance optimization",
    ],
    idealFor: [
      "Startups",
      "Web applications",
      "Growing digital businesses",
      "Organizations modernizing infrastructure",
      "Teams moving from traditional hosting",
    ],
  },
  {
    number: "07",
    icon: BrainCircuit,
    title: "AI Solutions",
    shortDescription:
      "Practical AI solutions that help businesses automate decisions, improve customer experiences and work smarter.",
    description:
      "We help businesses identify practical opportunities for artificial intelligence. Rather than adding AI for the sake of it, we focus on solutions that can improve productivity, customer interactions, information processing and business decision-making.",
    image: "/images/services/ai-solutions.png",
    accent: "text-violet-500",
    accentBg: "bg-violet-500/10",
    deliverables: [
      "AI-powered assistants",
      "Intelligent search",
      "Document analysis",
      "AI workflow automation",
      "Customer support solutions",
      "AI integrations",
      "Business intelligence workflows",
      "AI prototypes & MVPs",
    ],
    idealFor: [
      "Forward-looking businesses",
      "Customer service teams",
      "Knowledge-intensive organizations",
      "Digital platforms",
      "Businesses exploring AI adoption",
    ],
  },
];

export const capabilities = [
  {
    icon: Code2,
    title: "Product Engineering",
    description:
      "Turn ideas into reliable digital products through thoughtful design and modern development.",
  },
  {
    icon: Layers3,
    title: "Digital Platforms",
    description:
      "Build connected platforms that bring customers, teams, data and business processes together.",
  },
  {
    icon: Settings2,
    title: "Process Optimization",
    description:
      "Identify opportunities to simplify operations through integrations and automation.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Technology",
    description:
      "Introduce practical AI capabilities where they can create measurable business value.",
  },
];

export const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, challenges and objectives before recommending technology.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We translate your goals into a clear technical direction, scope and implementation roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create intuitive experiences and interfaces designed around how your customers and teams actually work.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the solution using modern technologies with attention to performance, security and scalability.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy, test and prepare your digital product for real-world users and business operations.",
  },
  {
    number: "06",
    title: "Evolve",
    description:
      "We continuously improve your technology as your business, customers and opportunities change.",
  },
];

export const benefits = [
  {
    icon: Zap,
    title: "Built for performance",
    description:
      "We prioritize responsive experiences, efficient architecture and technology that can support growth.",
  },
  {
    icon: ShieldCheck,
    title: "Designed with reliability in mind",
    description:
      "Our solutions are structured to provide dependable experiences for customers and internal teams.",
  },
  {
    icon: BarChart3,
    title: "Focused on business outcomes",
    description:
      "Technology decisions are connected to practical business objectives rather than technology for its own sake.",
  },
  {
    icon: Users,
    title: "Designed around people",
    description:
      "We create experiences that are understandable, accessible and useful to the people who actually use them.",
  },
];
