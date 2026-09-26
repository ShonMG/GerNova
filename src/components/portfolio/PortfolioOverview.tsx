"use client";

import { motion } from "motion/react";


import { Card, CardContent } from "@/components/ui/card";


import { projectTypes } from "@/lib/portfolio";

export default function PortfolioOverview() {
  return (
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

      );
}
