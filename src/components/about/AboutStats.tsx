"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { CUSTOMER_REACTIONS } from "@/lib/about";

export default function AboutStats() {
  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-black/5 sm:grid-cols-2 lg:grid-cols-4">
          {CUSTOMER_REACTIONS.map((reaction, index) => {
            const Icon = reaction.icon;

            return (
              <motion.div
                key={reaction.reaction}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={cn(
                  "group flex min-h-[210px] flex-col justify-between p-7 transition-all duration-300 hover:bg-muted/50 sm:p-8",

                  // Tablet horizontal separators
                  index < 2 && "border-b border-border sm:border-b",

                  // Tablet vertical separators
                  index % 2 === 0 && "sm:border-r sm:border-border",

                  // Remove tablet bottom border from second row
                  index >= 2 && "sm:border-b-0",

                  // Desktop vertical separators
                  index < CUSTOMER_REACTIONS.length - 1 &&
                    "lg:border-b-0 lg:border-r lg:border-border",

                  // Remove final desktop separator
                  index === CUSTOMER_REACTIONS.length - 1 &&
                    "lg:border-r-0",
                )}
              >
                {/* Icon + Reaction */}
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-full border border-border bg-background">
                    <Icon className="size-5 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-foreground" />
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {reaction.reaction}
                  </span>
                </div>

                {/* Customer interaction */}
                <div className="mt-8">
                  <p className="text-lg font-semibold leading-snug tracking-tight text-foreground">
                    {reaction.title}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reaction.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}