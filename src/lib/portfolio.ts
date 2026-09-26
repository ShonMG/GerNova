import {
  BarChart3, BrainCircuit, Check, Cloud, Code2, Globe2, Layers3,
  PlugZap, Rocket, SearchCheck, Smartphone, Workflow,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  accent: string;
  accentBg: string;
  challenge: string;
  solution: string;
  outcome: string;
  services: string[];
};


export type PortfolioItem = { icon: LucideIcon; title: string; description: string };

export const projects: Project[] = [
  {
    number: "01",
    title: "Business Website Solutions",
    category: "Web Development",
    description:
      "A modern, responsive business website designed to establish a strong digital presence, communicate the brand clearly and convert visitors into customers.",
    image: "/images/portfolio/websites.png",
    tags: ["React", "Responsive Design", "SEO"],
    accent: "text-orange-500",
    accentBg: "bg-orange-500/10",
    challenge:
      "Create a professional digital presence that communicates the business clearly across desktop, tablet and mobile devices.",
    solution:
      "A responsive website architecture with clear content hierarchy, modern interface design, optimized layouts and SEO-friendly foundations.",
    outcome:
      "A stronger digital presence with a clearer customer journey and a scalable foundation for future digital growth.",
    services: ["Web Development", "UX/UI Design", "SEO"],
  },
  {
    number: "02",
    title: "Mobile Business Platform",
    category: "Mobile Application",
    description:
      "A scalable mobile experience designed to simplify customer interactions and bring essential business services directly to users.",
    image: "/images/portfolio/mobile-system.png",
    tags: ["Mobile App", "UX/UI", "API"],
    accent: "text-purple-500",
    accentBg: "bg-purple-500/10",
    challenge:
      "Make important business services easier to access while creating a consistent experience for mobile users.",
    solution:
      "A mobile-first product experience connected to business APIs and structured around simple, intuitive user flows.",
    outcome:
      "A convenient digital channel for customers and a foundation that can evolve as new business capabilities are introduced.",
    services: ["Mobile Development", "UX/UI Design", "API Integration"],
  },
  {
    number: "03",
    title: "Business Automation System",
    category: "Automation",
    description:
      "A custom workflow solution that connects business processes, reduces repetitive tasks and improves operational efficiency.",
    image: "/images/portfolio/business-automation.png",
    tags: ["Automation", "APIs", "Workflows"],
    accent: "text-red-500",
    accentBg: "bg-red-500/10",
    challenge:
      "Reduce repetitive manual activities and create more consistent workflows between different parts of the business.",
    solution:
      "Connected digital workflows that move information between systems, trigger actions and automate repetitive operational processes.",
    outcome:
      "Less manual intervention, more connected processes and a more structured way of managing recurring business operations.",
    services: ["Automation", "APIs & Integrations", "Workflow Design"],
  },
  {
    number: "04",
    title: "AI-Powered Business Solution",
    category: "Artificial Intelligence",
    description:
      "An intelligent digital solution using AI to help businesses process information, improve customer experiences and work smarter.",
    image: "/images/portfolio/ai-powered.png",
    tags: ["AI", "Automation", "Cloud"],
    accent: "text-violet-500",
    accentBg: "bg-violet-500/10",
    challenge:
      "Identify practical opportunities where artificial intelligence can improve information handling, productivity and customer interactions.",
    solution:
      "An AI-enabled digital workflow combining intelligent processing, automation and cloud-based technology.",
    outcome:
      "A practical foundation for integrating AI into everyday business processes and digital experiences.",
    services: ["AI Solutions", "Automation", "Cloud Solutions"],
  },
];

export const projectTypes = [
  {
    icon: Globe2,
    title: "Web Experiences",
    description:
      "Corporate websites, landing pages, platforms and custom web applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Products",
    description:
      "Customer applications, internal tools and mobile-first digital experiences.",
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    description:
      "Digital workflows that reduce repetitive work and connect business processes.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Practical AI applications designed around real business use cases.",
  },
  {
    icon: PlugZap,
    title: "Connected Systems",
    description:
      "APIs and integrations that allow different platforms and systems to work together.",
  },
  {
    icon: Cloud,
    title: "Cloud Products",
    description:
      "Scalable applications and infrastructure designed for modern digital businesses.",
  },
];

export const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your business, users, challenges and objectives.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the scope, technology direction, user experience and delivery roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the plan into a working digital product through iterative development.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, refine and deploy the product so it is ready for real users.",
  },
  {
    number: "05",
    title: "Measure",
    description:
      "We use feedback, analytics and business objectives to identify opportunities for improvement.",
  },
  {
    number: "06",
    title: "Evolve",
    description:
      "We continue improving the product as your business and customers change.",
  },
];

export const principles = [
  {
    icon: Code2,
    title: "Technology with purpose",
    description:
      "We choose technology based on the problem it needs to solve, not simply because it is new.",
  },
  {
    icon: Layers3,
    title: "Scalable foundations",
    description:
      "We build solutions with room to evolve as your users, data and business requirements grow.",
  },
  {
    icon: BarChart3,
    title: "Business-focused design",
    description:
      "Every digital experience should contribute to a meaningful business objective.",
  },
  {
    icon: Rocket,
    title: "Built for momentum",
    description:
      "Our goal is to create products that give businesses a strong foundation for their next stage.",
  },
];

export const outcomes: PortfolioItem[] = [
  { icon: Check, title: "Better customer experiences", description: "Clear interfaces and useful digital journeys help customers find information, access services and interact with businesses more easily." },
  { icon: Workflow, title: "More efficient operations", description: "Connected systems and automated workflows can reduce unnecessary manual processes and improve consistency." },
  { icon: SearchCheck, title: "Stronger digital visibility", description: "Well-structured, performant digital experiences provide a stronger foundation for search visibility and digital growth." },
  { icon: Rocket, title: "Room for future growth", description: "Scalable technology gives businesses a foundation that can evolve as requirements, users and opportunities change." },
];