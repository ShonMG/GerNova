"use client";

import { motion } from "motion/react";
import { VALUES } from "@/lib/about";

export default function Values() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
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
              <span className="text-muted-foreground">the work we do.</span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              Good technology is more than code and interfaces. It requires curiosity,
              responsibility, clarity and a commitment to creating useful outcomes.
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
                  <span className="text-xs font-medium text-muted-foreground">{value.number}</span>
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
  );
}