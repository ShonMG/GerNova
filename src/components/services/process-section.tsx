"use client";

import { motion } from "motion/react";




import { process } from "@/lib/services";


export default function ProcessSection() {
  return (
      <section className="border-y border-border bg-muted/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Our process
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                From idea to digital product.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                Every project is different, but our process gives us a clear
                framework for turning business goals into useful technology.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="border-t border-border pt-5"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
