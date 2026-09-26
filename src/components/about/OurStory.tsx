import { Code2, Rocket } from "lucide-react";

export default function OurStory() {
  return (
    <section id="our-story" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <div className="sticky top-24">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-foreground" />
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                  Our story
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                From ideas to digital{" "}
                <span className="text-muted-foreground">possibilities.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-7">
            <p className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              We believe technology becomes valuable when it connects an idea to a real-world outcome.
            </p>

            <p className="text-base leading-8 text-muted-foreground">
              Businesses today operate in an environment where customers expect better digital
              experiences, teams need more efficient processes and organisations must continuously
              adapt to changing technology.
            </p>

            <p className="text-base leading-8 text-muted-foreground">
              GerNova Digital Technologies exists to help businesses navigate that environment.
              We bring together digital design, software development, automation, cloud technologies
              and emerging technologies to create practical solutions around specific business needs.
            </p>

            <p className="text-base leading-8 text-muted-foreground">
              Rather than treating technology as something separate from the business, we see it as
              part of the business itself — a tool for communicating with customers, improving
              operations, creating new services and opening new possibilities.
            </p>

            <div className="grid gap-4 pt-5 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <Code2 className="size-6 text-foreground" />
                <h3 className="mt-5 font-semibold">Technology with purpose</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  We focus on solutions that serve a clear business objective.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <Rocket className="size-6 text-foreground" />
                <h3 className="mt-5 font-semibold">Built for progress</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  We create digital foundations that can evolve with your organisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}