"use client";

import { motion } from "motion/react";
import { Check, Rocket, SearchCheck, Workflow } from "lucide-react";


import { Card, CardContent } from "@/components/ui/card";



export default function ProjectOutcomes() {
  return (
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

      );
}
