import { Badge } from "@/components/ui/badge";
import { addOns } from "@/lib/pricing";

export default function AddonsSection() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="rounded-full">Flexible Add-ons</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight">Add what you need.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">You don't need to pay for functionality you aren't ready for. Add individual capabilities to your project as required.</p>
        </div>
        <div className="mt-12 overflow-hidden rounded-3xl border bg-background">
          {addOns.map(([name, price], index) => (
            <div key={name} className={`flex items-center justify-between gap-6 px-6 py-5 ${index !== addOns.length - 1 ? "border-b" : ""}`}>
              <span className="text-sm font-medium">{name}</span>
              <span className="whitespace-nowrap text-sm font-semibold text-orange-500">{price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
