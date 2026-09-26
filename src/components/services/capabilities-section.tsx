"use client";

import { motion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";


import { capabilities } from "@/lib/services";


export default function CapabilitiesSection() {
  return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  What we do
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                One technology partner for the digital journey.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                Digital transformation is rarely about one website, one app
                or one technology. It is about creating connected systems
                that help your business serve customers, operate efficiently
                and create new opportunities.
              </p>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                GerNova brings product development, integrations, automation,
                cloud technology, SEO and AI together so businesses can build
                digital ecosystems rather than disconnected technology
                projects.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <Card className="h-full rounded-2xl border-border bg-card">
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
