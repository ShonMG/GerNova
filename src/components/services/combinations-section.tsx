"use client";

import { Badge } from "@/components/ui/badge";



export default function CombinationsSection() {
  return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="rounded-[2rem] border border-border bg-card p-7 sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <Badge
                  variant="outline"
                  className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em]"
                >
                  Connected solutions
                </Badge>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Your project may need more than one service.
                </h2>

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  The strongest digital solutions often combine several
                  capabilities. GerNova can bring them together under one
                  technology strategy.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Website + SEO", "Build your website and improve its search visibility."],
                  ["App + API", "Connect your mobile application to business systems."],
                  ["Automation + AI", "Combine intelligent technology with automated workflows."],
                  ["Cloud + Development", "Deploy scalable applications on modern infrastructure."],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-border bg-background p-5"
                  >
                    <h3 className="font-medium">{title}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
