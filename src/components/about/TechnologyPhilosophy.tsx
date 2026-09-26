import { Check } from "lucide-react";
import { TECHNOLOGY_PRINCIPLES } from "@/lib/about";

export default function TechnologyPhilosophy() {
  return (
    <section className="bg-foreground py-20 text-background sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-background" />
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-background/55 sm:text-xs">
                Technology philosophy
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
              The best technology is the technology that{" "}
              <span className="text-background/45">makes things clearer.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-background/65 sm:text-lg">
              Digital transformation does not have to mean unnecessary complexity. We focus on
              selecting and combining technologies according to the problem they need to solve —
              creating experiences that are useful for customers and practical for businesses.
            </p>
          </div>

          <div className="grid gap-3">
            {TECHNOLOGY_PRINCIPLES.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-background/15 bg-background/5 p-5"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-background/20">
                  <Check className="size-4" />
                </div>
                <span className="text-sm text-background/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}