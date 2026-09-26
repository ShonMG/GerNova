"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GER_NOVA_STATS } from "@/lib/about";

export default function AboutStats() {
  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-black/5 sm:grid-cols-2 lg:grid-cols-4">
            {GER_NOVA_STATS.map((stat, index) => {
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
  );
}