import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Notable Case Results — The Kryder Law Group",
  description:
    "View notable case results from The Kryder Law Group. Over $100 million recovered for injured clients in Chicago and across the Midwest. Call (312) 223-1700.",
  path: "/results",
});

const results = [
  { amount: "$7.5M", description: "Construction worker injury" },
  { amount: "$3M", description: "Wrongful death (garbage truck)" },
  { amount: "$2.2M", description: "Auto collision" },
  { amount: "$2M", description: "Pedestrian accident" },
  { amount: "$1.4M", description: "Slip and fall" },
  { amount: "$1M", description: "Wrongful death (settled in 90 days)" },
  { amount: "$500K", description: "Policy limit settlement" },
  { amount: "$300K", description: "Policy limit settlement" },
];

export default function ResultsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Results" },
            ]),
          ),
        }}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Notable Case Results
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A track record of fighting for maximum compensation for our clients.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Results" }]}
      />

      {/* Results Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {results.map((result, i) => (
              <div key={i} className="bg-light-gold rounded-xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">
                  {result.amount}
                </p>
                <p className="text-text-muted text-sm">{result.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-6 text-center">
            <p className="text-text-muted text-sm italic">
              Past results do not guarantee future outcomes. Every case is
              unique.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
