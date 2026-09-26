"use client";

import { motion } from "motion/react";


import { ArrowUpRight, BrainCircuit, Globe2, Smartphone, Workflow } from "lucide-react";


import { Badge } from "@/components/ui/badge";


import { Card } from "@/components/ui/card";


import { cn } from "@/lib/utils";


import { projects } from "@/lib/portfolio";

const categoryIcons = {
  "Web Development": Globe2,
  "Mobile Application": Smartphone,
  Automation: Workflow,
  "Artificial Intelligence": BrainCircuit,
} as const;

export default function FeaturedProjects() {
  return (
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
                          {(() => {
                            const Icon = categoryIcons[project.category as keyof typeof categoryIcons];
                            return Icon ? <Icon size={21} /> : null;
                          })()}
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
                          {project.services.map((service, serviceIndex) => (
                            <span
                              key={service}
                              className="text-xs text-muted-foreground"
                            >
                              {service}
                              {serviceIndex < project.services.length - 1 && " • "}
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

      );
}

function ProjectDetail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
