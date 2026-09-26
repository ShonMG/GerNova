"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { PROCESS } from "@/lib/about";

export default function Approach() {
  return (
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
              <span className="text-muted-foreground">Automate. Grow.</span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              Our process keeps business objectives at the centre of every technology decision.
            </p>
          </div>

          <div className="grid gap-0 border-y border-border sm:grid-cols-2">
            {PROCESS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={cn(
                  "group border-border p-7 sm:p-8",
                  index % 2 === 0 && "sm:border-r",
                  index < 4 && "border-b"
                )}
              >
                <span className="text-xs font-medium text-muted-foreground">{step.number}</span>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
                <div className="mt-6 h-px w-8 bg-border transition-all duration-300 group-hover:w-14 group-hover:bg-foreground" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}