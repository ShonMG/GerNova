"use client";

import { motion } from "motion/react";



import { Card, CardContent } from "@/components/ui/card";


import { benefits } from "@/lib/services";


export default function OutcomesSection() {
  return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-border" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Why GerNova
              </span>

              <span className="h-px w-8 bg-border" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology should create progress, not complexity.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              We focus on creating digital systems that are useful today and
              flexible enough to evolve tomorrow.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <Card className="h-full rounded-2xl border-border">
                    <CardContent className="flex gap-5 p-7">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 className="text-lg font-medium">
                          {benefit.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {benefit.description}
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
