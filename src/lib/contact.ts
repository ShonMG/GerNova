export const services = [
  "Website Development",
  "Mobile Application",
  "E-commerce",
  "API & Integrations",
  "SEO & Digital Growth",
  "Business Automation",
  "Cloud Solutions",
  "AI Solutions",
  "Other / Not Sure",
] as const;

export const projectStages = [
  "Just an idea",
  "Planning / researching",
  "Ready to start",
  "Existing project that needs improvement",
] as const;

export const contactDetails = {
  email: "info@gernova.net",
  emailHref: "mailto:info@gernova.net",
  whatsapp: "+254 769 848 012",
  whatsappHref: "https://wa.me/254769848012",
  availability: "Kenya & international clients",
  responseTime: "Usually within 1 business day",
  location: "Kenya • Remote",
};

export const formspreeEndpoint = "https://formspree.io/f/xoevkagd";

export const enquirySteps = [
  ["01", "Tell us the idea", "What are you trying to build or improve?"],
  ["02", "Tell us the goal", "What should the technology help your business achieve?"],
  ["03", "We'll discuss the next step", "We'll review your enquiry and discuss the appropriate scope."],
] as const;

export const whyGerNova = [
  {
    title: "Business-first thinking",
    description:
      "We connect technology decisions to business goals, customer experience and operational needs.",
  },
  {
    title: "Built to evolve",
    description:
      "Your first version doesn't have to contain everything. We build foundations that can grow with you.",
  },
  {
    title: "One digital partner",
    description:
      "Web, mobile, APIs, automation, cloud, AI and digital growth can be brought together under one strategy.",
  },
] as const;