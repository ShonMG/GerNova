"use client";

import type { ComponentType } from "react";
import {
  ArrowUpRight,
  Lightbulb,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CustomerReaction = {
  icon: ComponentType<{ className?: string }>;
  reaction: string;
  title: string;
  description: string;
};

const CUSTOMER_REACTIONS: CustomerReaction[] = [
  {
    icon: Sparkles,
    reaction: "Impressed",
    title: "“This looks like our business.”",
    description:
      "A professional digital presence that reflects your brand and builds customer confidence.",
  },
  {
    icon: Target,
    reaction: "Confident",
    title: "“Now customers can find us.”",
    description:
      "Websites and digital experiences designed to make your business easier to discover and engage with.",
  },
  {
    icon: Workflow,
    reaction: "Relieved",
    title: "“This saves us time.”",
    description:
      "Smart automation that reduces repetitive work and makes everyday business processes easier.",
  },
  {
    icon: Lightbulb,
    reaction: "Excited",
    title: "“We can do more with technology.”",
    description:
      "Practical AI, integrations and digital systems built around real business opportunities.",
  },
];

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-8 sm:py-16 lg:py-24"
    >
      {/* =========================================================
          SUBTLE BACKGROUND GRID
      ========================================================= */}

      {/*
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      */}

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

          <div className="flex shrink-0 flex-col items-center justify-center gap-4 md:flex-row">
            <Button
              className="
                group
                h-12
                w-fit
                cursor-pointer
                rounded-full
                border
                border-white/50
                bg-gray-950
                p-1
                ps-5
                text-sm
                font-medium
                text-white
                hover:bg-gray-950/90
                hover:text-white
                dark:hover:text-white
              "
            >
              <a
                href="#about"
                className="flex items-center gap-4"
              >
                <span>Discover GerNova</span>

                <div
                  className="
                    rounded-full
                    bg-white
                    p-3
                    text-black
                    transition-transform
                    duration-300
                    ease-in-out
                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight size={16} />
                </div>
              </a>
            </Button>
          </div>
        </div>

        {/* =========================================================
            MAIN IMAGE + CUSTOMER REACTION STRIP
        ========================================================= */}

        <div className="relative mb-8 w-full sm:mb-16 lg:mb-24">
          {/* Main Image */}

          <div
            className="
              group
              relative
              aspect-video
              w-full
              overflow-hidden
              rounded-xl
              border
              border-border
              bg-background
              lg:h-[644px]
            "
          >
            <img
              src="/images/gernova-about.png"
              alt="GerNova Digital Technologies - Web development, AI, automation and digital solutions"
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-[1.02]
              "
            />

            {/* Image overlay */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-background/30
                via-transparent
                to-transparent
              "
            />

            {/* Top image label */}

            <div
              className="
                absolute
                left-5
                top-5
                flex
                items-center
                gap-2
                rounded-full
                border
                border-border
                bg-background
                px-3
                py-1.5
                text-xs
                font-medium
                text-foreground
                shadow-sm
                backdrop-blur-md
                sm:left-7
                sm:top-7
              "
            >
              <span className="size-1.5 rounded-full bg-foreground" />

              GerNova Digital Technologies
            </div>

            {/* Bottom image text */}

            <div
              className="
                absolute
                bottom-5
                left-5
                max-w-sm
                rounded-lg
                border
                border-border
                bg-background
                px-4
                py-3
                shadow-sm
                backdrop-blur-md
                sm:bottom-7
                sm:left-7
                lg:bottom-10
                lg:left-10
              "
            >
              <p className="text-sm font-medium text-foreground">
                Ideas → Products → Impact
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Technology designed around your business goals.
              </p>
            </div>
          </div>

          {/* =========================================================
              CUSTOMER REACTION STRIP
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              relative
              z-20
              mx-auto
              mt-8
              w-full
              lg:mt-10
              lg:w-[92%]
              xl:w-[85%]
            "
          >
            <div
              className="
                grid
                overflow-hidden
                rounded-xl
                border
                border-border
                bg-background
                shadow-sm
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {CUSTOMER_REACTIONS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.reaction}
                    className={cn(
                      `
                        group
                        relative
                        flex
                        min-h-[190px]
                        flex-col
                        justify-between
                        p-6
                        transition-colors
                        duration-300
                        hover:bg-muted/60
                      `,
                      index < CUSTOMER_REACTIONS.length - 1 &&
                        "border-b border-border lg:border-b-0 lg:border-r",
                      index === 1 &&
                        "sm:border-r-0 lg:border-r",
                    )}
                  >
                    {/* Reaction header */}

                    <div className="flex items-center justify-between">
                      <div
                        className="
                          flex
                          size-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          bg-background
                        "
                      >
                        <Icon
                          className="
                            size-4
                            text-foreground
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </div>

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-muted-foreground
                        "
                      >
                        {item.reaction}
                      </span>
                    </div>

                    {/* Reaction content */}

                    <div className="mt-6">
                      <h3
                        className="
                          text-base
                          font-semibold
                          leading-snug
                          text-foreground
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-relaxed
                          text-muted-foreground
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
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