import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { processSteps } from "@/lib/pricing";

export default function ProcessSection() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="rounded-full">Simple Process</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight">No pricing surprises.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">We scope the work before development begins so you understand what you&apos;re paying for.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {processSteps.map(([number, title, description]) => (
            <Card key={number} className="rounded-3xl">
              <CardContent className="p-7">
                <span className="text-sm font-semibold text-orange-500">{number}</span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
