"use client";

import type { ComponentType } from "react";

import {
  ArrowRightIcon,
  Globe2,
  Smartphone,
  Workflow,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type StatItem = {
  icon: ComponentType<{ className?: string }>;
  value: string;
  description: string;
};

type AboutUsProps = {
  stats?: StatItem[];
};

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

const AboutUs = ({ stats = GER_NOVA_STATS }: AboutUsProps) => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-8 sm:py-16 lg:py-24"
    >
      {/* =========================================================
          SUBTLE BACKGROUND GRID
          Uses the current theme color instead of introducing
          new brand colors.
      ========================================================= */}

      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      /> */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <div
          className="
            mx-auto
            mb-12
            max-w-4xl
            space-y-4
            text-center
            md:mb-16
            lg:mb-24
          "
        >
          {/* Small section label */}

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border sm:w-12" />

            <span
              className="
                rounded-full
                border
                border-border
                bg-background
                px-4
                py-1.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-muted-foreground
                sm:text-xs
              "
            >
              About GerNova
            </span>

            <span className="h-px w-8 bg-border sm:w-12" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-2xl
              font-semibold
              leading-tight
              tracking-tight
              text-foreground
              md:text-3xl
              lg:text-4xl
            "
          >
            Building technology that helps
            <br className="hidden sm:block" />
            businesses build, connect &amp; grow.
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              max-w-3xl
              text-xl
              leading-relaxed
              text-muted-foreground
            "
          >
            GerNova Digital Technologies creates modern digital products and
            technology solutions that help businesses strengthen their digital
            presence, simplify operations, automate repetitive processes, and
            create new opportunities for growth.
          </p>

          {/* CTA */}

          <div className="flex md:flex-row flex-col items-center gap-4 shrink-0 justify-center">
             <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12 cursor-pointer">
               <a href="#about" className="flex items-center gap-4"> 
                <span>Discover GerNova</span>
                 <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                   <ArrowUpRight size={16} /> 
                 </div>
               </a> 
              </Button>
          </div>
        </div>

        
        <div className="relative mb-8 w-full sm:mb-16 lg:mb-24">
        {/* Main Image */}
          <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-background lg:h-[644px]">
            <img
              src="/images/gernova-about.png"
              alt="GerNova Digital Technologies"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Image overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"
            />

            {/* Top image label */}
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-md sm:left-7 sm:top-7">
              <span className="size-1.5 rounded-full bg-foreground" />
              GerNova Digital Technologies
            </div>

            {/* Bottom image text */}
            <div className="absolute bottom-5 left-5 max-w-sm rounded-lg border border-border bg-background px-4 py-3 shadow-sm backdrop-blur-md sm:bottom-7 sm:left-7 lg:bottom-10 lg:left-10">
              <p className="text-sm font-medium text-foreground">
                Ideas → Products → Impact
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Technology designed around your business goals.
              </p>
            </div>
          </div>

          {/* Stats — completely outside the image */}
          <div className="relative z-20 mx-auto mt-8 grid w-full overflow-hidden rounded-md border border-border bg-background shadow-sm sm:grid-cols-2 lg:mt-10 lg:w-3/4 lg:grid-cols-4 xl:w-max">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className={cn(
                    "group flex min-w-[180px] flex-col items-center justify-center gap-2.5 px-6 py-8 text-center transition-colors duration-200 hover:bg-muted",
                    index < stats.length - 1 && "border-border sm:border-r",
                    index < 2 && "border-b lg:border-b-0",
                    index === 1 && "sm:border-r-0 lg:border-r",
                    index === 3 && "lg:border-r-0"
                  )}
                >
                  <div className="flex size-7 items-center justify-center [&>svg]:size-7">
                    <Icon className="text-foreground transition-transform duration-200 group-hover:scale-105" />
                  </div>

                  <span className="text-2xl font-semibold text-foreground">
                    {stat.value}
                  </span>

                  <p className="text-base text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>



        {/* =========================================================
            BOTTOM BRAND STATEMENT
        ========================================================= */}

        <div
          className="
            mx-auto
            max-w-3xl
            pt-4
            text-center
            lg:pt-8
          "
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-border" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-muted-foreground
                sm:text-xs
              "
            >
              Our approach
            </span>

            <span className="h-px w-10 bg-border" />
          </div>

          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.2em]
              text-foreground
              sm:text-base
            "
          >
            Build
            <span className="mx-2 text-muted-foreground">•</span>
            Connect
            <span className="mx-2 text-muted-foreground">•</span>
            Automate
            <span className="mx-2 text-muted-foreground">•</span>
            Grow
          </p>

          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Technology designed around your business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;