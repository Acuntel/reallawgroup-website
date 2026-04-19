import { Star, ExternalLink } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    text: "Vince and his team made our closing completely seamless. Professional, responsive, and always available when we had questions. Highly recommend!",
    author: "M.R.",
    context: "Home Buyer, Elmhurst",
  },
  {
    text: "Best real estate attorney in Chicagoland. They handled everything from contract to closing and explained every step clearly.",
    author: "J.P.",
    context: "Real Estate Client, Naperville",
  },
  {
    text: "Sarah and the team were incredible during our commercial closing. The attention to detail on the loan documents saved us from a costly mistake.",
    author: "R.T.",
    context: "Commercial Real Estate Client",
  },
  {
    text: "We used REAL Law Group for our estate planning. They took the time to understand our family situation and created a plan that gave us real peace of mind.",
    author: "A.M.",
    context: "Estate Planning Client, Hinsdale",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <AnimateOnScroll
              key={i}
              delay={i * 0.15}
              className="testimonial-offset"
            >
              <div className="card-hover-border bg-background rounded-xl p-8 border border-border relative h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div
                  aria-label="5 out of 5 stars"
                  role="img"
                  className="flex gap-1 mb-4"
                >
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="text-primary font-semibold text-sm">
                  &mdash; {testimonial.author}{" "}
                  {testimonial.context && (
                    <span className="font-normal text-text-muted">
                      — {testimonial.context}
                    </span>
                  )}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-text-muted text-sm font-medium mb-4">
            300+ Five Star Reviews on Google
          </p>
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJSTV-k-pODogRyKP49MSt_a8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary font-semibold text-sm transition-colors"
          >
            See All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
