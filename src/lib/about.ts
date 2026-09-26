import type { ComponentType } from "react";
import {
  Bot,
  Cloud,
  Globe2,
  Layers3,
  Lightbulb,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export type StatItem = {
  icon: ComponentType<{ className?: string }>;
  value: string;
  description: string;
};

export const GER_NOVA_STATS: StatItem[] = [
  { icon: Globe2, value: "25+", description: "Digital Solutions" },
  { icon: Smartphone, value: "20+", description: "Projects Delivered" },
  { icon: Workflow, value: "15+", description: "Businesses Supported" },
  { icon: Sparkles, value: "30+", description: "Technologies & Tools" },
];

export const VALUES = [
  {
    number: "01",
    icon: Target,
    title: "Purposeful Technology",
    description:
      "We believe technology should solve real problems. Every digital solution starts with understanding the business objective behind it.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "We explore modern technologies and practical ideas to create digital experiences that remain useful as businesses evolve.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "Clear communication, realistic expectations and thoughtful implementation are central to how we work with our clients.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Built to Scale",
    description:
      "We design with the future in mind, creating digital foundations that can adapt as your business, customers and operations grow.",
  },
];

export const CAPABILITIES = [
  {
    icon: MonitorSmartphone,
    title: "Web & Digital Experiences",
    description:
      "Professional websites and digital experiences designed to communicate your brand clearly and create meaningful customer interactions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Modern mobile experiences that bring products, services and business processes closer to the people who use them.",
  },
  {
    icon: Network,
    title: "APIs & Integrations",
    description:
      "Connected systems and APIs that allow digital products, services and business processes to work together more efficiently.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Smarter workflows that reduce repetitive work, simplify operations and help teams focus on higher-value activities.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Flexible cloud-oriented technology solutions designed to support reliable digital products and evolving business needs.",
  },
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description:
      "Practical applications of artificial intelligence that can enhance digital experiences, processes and decision-making.",
  },
];

export const PROCESS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, your customers, your challenges and the outcomes you want technology to achieve.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn ideas and requirements into a clear digital direction, identifying the right features, technologies and priorities.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create intuitive interfaces and experiences that balance visual quality, usability and the needs of your audience.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We transform the approved direction into functional digital products using modern development practices and technologies.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We prepare the solution for deployment, testing the important details and making sure the experience is ready for real users.",
  },
  {
    number: "06",
    title: "Evolve",
    description:
      "Digital products should grow with the business. We help identify improvements, opportunities and new possibilities over time.",
  },
];

export const TECHNOLOGY_PRINCIPLES = [
  "User-centred digital experiences",
  "Practical automation",
  "Connected systems",
  "Scalable technology foundations",
  "Modern development practices",
];