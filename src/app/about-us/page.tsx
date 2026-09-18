"use client";

import type { ComponentType } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Cloud,
  Code2,
  Globe2,
  Layers3,
  Lightbulb,
  MonitorSmartphone,
  Network,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Smartphone,
  Zap,
} from "lucide-react";

import { motion, type Variants } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";


/* =========================================================
   TYPES
========================================================= */

type StatItem = {
  icon: ComponentType<{ className?: string }>;
  value: string;
  description: string;
};

/* =========================================================
   STATS
========================================================= */

const GER_NOVA_STATS: StatItem[] = [
  {
    icon: Globe2,
    value: "25+",
    description: "Digital Solutions",
  },
  {
    icon: Smartphone,
    value: "20+",
    description: "Projects Delivered",
  },
  {
    icon: Workflow,
    value: "15+",
    description: "Businesses Supported",
  },
  {
    icon: Sparkles,
    value: "30+",
    description: "Technologies & Tools",
  },
];

/* =========================================================
   VALUES
========================================================= */

const VALUES = [
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

/* =========================================================
   CAPABILITIES
========================================================= */

const CAPABILITIES = [
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

/* =========================================================
   PROCESS
========================================================= */

const PROCESS = [
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

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const AboutUs = ({
  stats = GER_NOVA_STATS,
}: {
  stats?: StatItem[];
}) => {
  return (
    <main id="about" className="relative overflow-hidden bg-background">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative ">
        {/* Decorative background */}
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        /> */}

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
            {/* Hero copy */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeUp}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-foreground" />

                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
                  About GerNova
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Technology designed to move{" "}
                <span className="text-muted-foreground">
                  your business forward.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
              >
                GerNova Digital Technologies creates modern digital products
                and technology solutions that help businesses strengthen their
                digital presence, simplify operations, automate repetitive
                processes and create new opportunities for growth.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                    <a href="#our-story" className="flex items-center gap-4"> 
                        <span>Discover our story</span>
                        <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <ArrowUpRight size={16} /> 
                        </div>
                    </a> 
                </Button>

                <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                    <a href="#capabilities" className="flex items-center gap-4"> 
                    <span>What we do</span> 
                    <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                        <ArrowUpRight size={16} /> 
                    </div> 
                    </a> 
              </Button>
              </motion.div>
            </motion.div>

            {/* Hero visual */}

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted sm:aspect-square lg:aspect-[4/5]">
                <img
                  src="/images/gernova-about.png"
                  alt="GerNova Digital Technologies"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                  GerNova Digital Technologies
                </div>

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="rounded-xl border border-white/20 bg-black/35 p-5 text-white backdrop-blur-xl">
                    <p className="text-sm font-medium">
                      Ideas → Products → Impact
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/70">
                      Technology designed around your business goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}

              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-5 -z-10 size-28 rounded-full border border-border"
              />

              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 -z-10 size-20 rounded-full border border-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

    <section className="relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-black/5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    }}
                    className={cn(
                    "group flex min-h-[190px] flex-col justify-between p-7 transition-all duration-300 hover:bg-muted/50 sm:p-8",
                    // Desktop vertical separators
                    index < 3 && "lg:border-r lg:border-border",

                    // Mobile/tablet horizontal separators
                    index < 2 && "border-b border-border sm:border-b",
                    index === 2 && "sm:border-b-0",

                    // Tablet vertical separator
                    index % 2 === 0 && "sm:border-r sm:border-border",

                    // Remove unwanted separators on large screens
                    "lg:border-b-0",

                    // Correct desktop borders
                    index === 1 && "lg:border-r",
                    index === 2 && "lg:border-r",
                    index === 3 && "lg:border-r-0"
                    )}
                >
                    <Icon
                    className="size-6 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-foreground"
                    />

                    <div>
                    <p className="text-4xl font-semibold tracking-tight text-foreground">
                        {stat.value}
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                        {stat.description}
                    </p>
                    </div>
                </motion.div>
                );
            })}
            </div>
        </div>
    </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section
        id="our-story"
        className="relative  py-20 sm:py-28 lg:py-36"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="sticky top-24">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-foreground" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                    Our story
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  From ideas to digital{" "}
                  <span className="text-muted-foreground">possibilities.</span>
                </h2>
              </div>
            </div>

            <div className="space-y-7">
              <p className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                We believe technology becomes valuable when it connects an
                idea to a real-world outcome.
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                Businesses today operate in an environment where customers
                expect better digital experiences, teams need more efficient
                processes and organisations must continuously adapt to
                changing technology.
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                GerNova Digital Technologies exists to help businesses
                navigate that environment. We bring together digital design,
                software development, automation, cloud technologies and
                emerging technologies to create practical solutions around
                specific business needs.
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                Rather than treating technology as something separate from the
                business, we see it as part of the business itself — a tool for
                communicating with customers, improving operations, creating
                new services and opening new possibilities.
              </p>

              <div className="pt-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-muted/30 p-6">
                    <Code2 className="size-6 text-foreground" />

                    <h3 className="mt-5 font-semibold">
                      Technology with purpose
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      We focus on solutions that serve a clear business
                      objective.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-muted/30 p-6">
                    <Rocket className="size-6 text-foreground" />

                    <h3 className="mt-5 font-semibold">
                      Built for progress
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      We create digital foundations that can evolve with your
                      organisation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section className=" bg-muted/30 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-foreground" />

              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                What drives us
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              A clear direction.{" "}
              <span className="text-muted-foreground">
                Practical technology.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-border bg-background p-8 sm:p-10 lg:p-12"
            >
              <div className="flex size-12 items-center justify-center rounded-full border border-border">
                <Target className="size-5" />
              </div>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Our mission
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Make modern technology more useful to businesses.
              </h3>

              <p className="mt-5 leading-7 text-muted-foreground">
                We aim to create accessible, thoughtful and practical digital
                solutions that help businesses improve how they present
                themselves, operate, connect with customers and pursue growth.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-border bg-foreground p-8 text-background sm:p-10 lg:p-12"
            >
              <div className="flex size-12 items-center justify-center rounded-full border border-background/20">
                <Sparkles className="size-5" />
              </div>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-background/60">
                Our vision
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                A future where every business can use technology to create
                more possibilities.
              </h3>

              <p className="mt-5 leading-7 text-background/65">
                We envision a digital landscape where technology is not simply
                an expense or a technical requirement, but a strategic
                foundation for innovation, efficiency and sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className=" py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-foreground" />

                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                  Our values
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Principles behind{" "}
                <span className="text-muted-foreground">
                  the work we do.
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-muted-foreground">
                Good technology is more than code and interfaces. It requires
                curiosity, responsibility, clarity and a commitment to creating
                useful outcomes.
              </p>
            </div>

            <div className="divide-y divide-border border-y border-border">
              {VALUES.map((value) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.number}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="grid gap-5 py-7 sm:grid-cols-[60px_45px_1fr] sm:items-start"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {value.number}
                    </span>

                    <Icon className="size-5 text-foreground" />

                    <div>
                      <h3 className="font-semibold">{value.title}</h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section
        id="capabilities"
        className=" bg-muted/30 py-20 sm:py-28 lg:py-36"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-foreground" />

              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                What we do
              </span>

              <span className="h-px w-10 bg-foreground" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Digital capabilities for{" "}
              <span className="text-muted-foreground">
                modern businesses.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              From the first digital touchpoint to the systems behind the
              scenes, GerNova brings different technology capabilities
              together around your business objectives.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group bg-background p-7 transition-colors duration-300 hover:bg-muted sm:p-8"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl border border-border transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-7 font-semibold">{capability.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {capability.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Explore capability
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ===================================================== */}

      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-foreground" />

                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                  Our approach
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Build. Connect.{" "}
                <span className="text-muted-foreground">
                  Automate. Grow.
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-muted-foreground">
                Our process keeps business objectives at the centre of every
                technology decision.
              </p>
            </div>

            <div className="grid gap-0 border-y border-border sm:grid-cols-2">
              {PROCESS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className={cn(
                    "group border-border p-7 sm:p-8",
                    index % 2 === 0 && "sm:border-r",
                    index < 4 && "border-b"
                  )}
                >
                  <span className="text-xs font-medium text-muted-foreground">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>

                  <div className="mt-6 h-px w-8 bg-border transition-all duration-300 group-hover:w-14 group-hover:bg-foreground" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY PHILOSOPHY
      ===================================================== */}

      <section className=" bg-foreground py-20 text-background sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-background" />

                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-background/55 sm:text-xs">
                  Technology philosophy
                </span>
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
                The best technology is the technology that{" "}
                <span className="text-background/45">
                  makes things clearer.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-background/65 sm:text-lg">
                Digital transformation does not have to mean unnecessary
                complexity. We focus on selecting and combining technologies
                according to the problem they need to solve — creating
                experiences that are useful for customers and practical for
                businesses.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                "User-centred digital experiences",
                "Practical automation",
                "Connected systems",
                "Scalable technology foundations",
                "Modern development practices",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-background/15 bg-background/5 p-5"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-background/20">
                    <Check className="size-4" />
                  </div>

                  <span className="text-sm text-background/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-40"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-20"
        />
        <Faq />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-foreground" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
              Start a conversation
            </span>

            <span className="h-px w-10 bg-foreground" />
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Have an idea?
            <br />
            <span className="text-muted-foreground">
              Let&apos;s build what&apos;s next.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Whether you are starting something new, improving an existing
            digital experience or looking for better ways to use technology,
            GerNova can help turn the opportunity into a practical digital
            direction.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
                <a href="/contact" className="flex items-center gap-4"> 
                    <span>Get a Free Digital Audit</span>
                    <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                    <ArrowUpRight size={16} /> 
                    </div>
                </a> 
            </Button>

            <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer"> 
                <a href="/services" className="flex items-center gap-4"> 
                <span>Explore Our services</span> 
                <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out"> 
                    <ArrowUpRight size={16} /> 
                </div> 
                </a> 
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
    
  );
};

export default AboutUs;