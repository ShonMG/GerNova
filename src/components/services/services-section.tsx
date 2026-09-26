"use client";

import { motion } from "motion/react";
import {
 
  ArrowUpRight,
 
  Check,
  
} from "lucide-react";


import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { services } from "@/lib/services";


export default function ServicesSection() {
  return (
      <section
        id="services"
        className="border-y border-border bg-muted/20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-border" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Our expertise
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Digital solutions designed to solve real business problems.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Explore the technology capabilities GerNova can bring together
              to create a complete digital solution for your business.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reversed = index % 2 !== 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.65 }}
                >
                  <Card className="group overflow-hidden rounded-[2rem] border-border bg-background">
                    <div
                      className={cn(
                        "grid lg:grid-cols-2",
                        reversed && "lg:[&>*:first-child]:order-2"
                      )}
                    >
                      {/* Image */}
                      <div className="relative min-h-[330px] overflow-hidden lg:min-h-[500px]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg">
                          <Icon
                            size={22}
                            className={service.accent}
                            strokeWidth={1.8}
                          />
                        </div>

                        <div className="absolute bottom-6 left-6">
                          <span className="text-sm font-medium text-white/70">
                            SERVICE {service.number}
                          </span>
                        </div>

                        <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                        <div>
                          <div
                            className={cn(
                              "flex h-11 w-11 items-center justify-center rounded-xl",
                              service.accentBg,
                              service.accent
                            )}
                          >
                            <Icon size={21} />
                          </div>

                          <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                            {service.title}
                          </h3>

                          <p
                            className={cn(
                              "mt-3 text-base font-medium",
                              service.accent
                            )}
                          >
                            {service.shortDescription}
                          </p>

                          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                            {service.description}
                          </p>
                        </div>

                        <div className="mt-10 grid gap-8 sm:grid-cols-2">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              What we deliver
                            </p>

                            <ul className="mt-4 space-y-2.5">
                              {service.deliverables.slice(0, 5).map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <Check
                                    size={16}
                                    className={cn(
                                      "mt-0.5 shrink-0",
                                      service.accent
                                    )}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              Ideal for
                            </p>

                            <ul className="mt-4 space-y-2.5">
                              {service.idealFor.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span
                                    className={cn(
                                      "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                                      service.accentBg
                                    )}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-10 flex items-center gap-2 border-t border-border pt-6 text-sm font-medium">
                          <span>Discuss this service</span>

                          <ArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
  );
}
