"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  ExternalLink,
  Globe2,
  Layers3,
  PlugZap,
  Rocket,
  SearchCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

type Project = {
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

const projects: Project[] = [
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

const projectTypes = [
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

const process = [
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

const principles = [
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

const PortfolioPage = () => {
  return (
    <main className="bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[15%] top-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute right-[15%] top-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8 xl:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-border" />

                <Badge
                  variant="outline"
                  className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-xs"
                >
                  Our Portfolio
                </Badge>
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Digital products built to{" "}
                <span className="text-muted-foreground">
                  make an impact.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Explore the kinds of digital experiences GerNova creates for
                businesses — from websites and mobile applications to
                automation systems, connected platforms and AI-powered
                solutions.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                    <a href="#projects" className="flex items-center gap-4"> 
                        <span>Explore projects</span>
                        <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <ArrowUpRight size={16} /> 
                        </div>
                    </a> 
                </Button>

                <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                    <a href="/contact" className="flex items-center gap-4"> 
                    <span>Start a project</span> 
                    <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                        <ArrowUpRight size={16} /> 
                    </div> 
                    </a> 
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
                <img
                  src="/images/gernova-hero-bg.png"
                  alt="GerNova digital product"
                  className="h-[400px] w-full object-cover sm:h-[480px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/70 p-5 text-white backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                    GerNova Digital Technologies
                  </p>

                  <p className="mt-2 text-xl font-medium">
                    Ideas → Products → Impact
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-background p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                    <Rocket size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Digital products
                    </p>
                    <p className="font-medium">Built to evolve</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Our work
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                We build technology around the way businesses actually work.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                Every project starts with a business problem, an opportunity
                or an idea. Our role is to turn that starting point into a
                digital experience that people can use and businesses can
                build upon.
              </p>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                From a focused website to a connected digital platform, we
                combine strategy, design and engineering to create technology
                that is practical, scalable and aligned with your goals.
              </p>
            </div>
          </div>

          {/* Project type cards */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                >
                  <Card className="h-full rounded-2xl border-border">
                    <CardContent className="p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-6 text-lg font-medium">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED PROJECTS
      ========================================================= */}
      <section
        id="projects"
        className="border-y border-border bg-muted/20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Featured work
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                From ideas to working digital experiences.
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                A selection of the digital products and solution types
                represented across the GerNova portfolio.
              </p>
            </div>

            <Badge
              variant="outline"
              className="w-fit rounded-full px-4 py-2 text-xs"
            >
              Selected projects
            </Badge>
          </div>

          <div className="mt-16 space-y-14">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65 }}
              >
                <Card className="group overflow-hidden rounded-[2rem] border-border bg-background">
                  <div
                    className={cn(
                      "grid lg:grid-cols-2",
                      index % 2 !== 0 &&
                        "lg:[&>*:first-child]:order-2"
                    )}
                  >
                    {/* Project image */}
                    <div className="relative min-h-[350px] overflow-hidden lg:min-h-[560px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      <div className="absolute left-6 top-6 flex h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 px-3 text-sm font-medium text-white backdrop-blur-md">
                        {project.number}
                      </div>

                      <div className="absolute bottom-6 left-6">
                        <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-black backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={19} />
                      </div>
                    </div>

                    {/* Project details */}
                    <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                      <div>
                        <div
                          className={cn(
                            "flex h-11 w-11 items-center justify-center rounded-xl",
                            project.accentBg,
                            project.accent
                          )}
                        >
                          {project.category === "Web Development" && (
                            <Globe2 size={21} />
                          )}

                          {project.category === "Mobile Application" && (
                            <Smartphone size={21} />
                          )}

                          {project.category === "Automation" && (
                            <Workflow size={21} />
                          )}

                          {project.category === "Artificial Intelligence" && (
                            <BrainCircuit size={21} />
                          )}
                        </div>

                        <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                          {project.title}
                        </h3>

                        <p
                          className={cn(
                            "mt-4 text-base font-medium",
                            project.accent
                          )}
                        >
                          {project.description}
                        </p>

                        <div className="mt-8 space-y-7">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              The challenge
                            </p>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {project.challenge}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              The solution
                            </p>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {project.solution}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              The result
                            </p>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {project.outcome}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-10 border-t border-border pt-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="h-7 px-3 text-xs font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.services.map((service) => (
                            <span
                              key={service}
                              className="text-xs text-muted-foreground"
                            >
                              {service}
                              {service !==
                                project.services[
                                  project.services.length - 1
                                ] && " • "}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT OUTCOMES
      ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-border" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                What matters
              </span>

              <span className="h-px w-8 bg-border" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              We measure our work by what it enables.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              A successful digital product should do more than look good. It
              should make something easier, clearer, faster or more possible.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                icon: Check,
                title: "Better customer experiences",
                description:
                  "Clear interfaces and useful digital journeys help customers find information, access services and interact with businesses more easily.",
              },
              {
                icon: Workflow,
                title: "More efficient operations",
                description:
                  "Connected systems and automated workflows can reduce unnecessary manual processes and improve consistency.",
              },
              {
                icon: SearchCheck,
                title: "Stronger digital visibility",
                description:
                  "Well-structured, performant digital experiences provide a stronger foundation for search visibility and digital growth.",
              },
              {
                icon: Rocket,
                title: "Room for future growth",
                description:
                  "Scalable technology gives businesses a foundation that can evolve as requirements, users and opportunities change.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                >
                  <Card className="h-full rounded-2xl border-border">
                    <CardContent className="flex gap-5 p-7">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 className="text-lg font-medium">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="border-y border-border bg-muted/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  How we work
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                A process designed to keep ideas moving.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                We keep the process collaborative and practical, moving from
                business understanding to a working digital product and
                continuous improvement.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="border-t border-border pt-5"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-border" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Our philosophy
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Build technology that creates momentum.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              The best digital products are not simply collections of
              features. They are tools that help businesses do something
              better.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                >
                  <Card className="h-full rounded-2xl border-border">
                    <CardContent className="p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-6 text-lg font-medium">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                  Your idea could be next
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Have something you want to build?
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  Whether you are starting from an idea, improving an
                  existing product or looking for a better way to automate
                  your business, GerNova can help turn the opportunity into a
                  practical digital solution.
                </p>
              </div>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                    <a href="#contact-form" className="flex items-center gap-4"> 
                        <span>Start a Project</span>
                        <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <ArrowUpRight size={16} /> 
                        </div>
                    </a> 
                </Button>

                <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                    <a href="/services" className="flex items-center gap-4"> 
                    <span>Explore Our Services</span> 
                    <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                        <ArrowUpRight size={16} /> 
                    </div> 
                    </a> 
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PortfolioPage;