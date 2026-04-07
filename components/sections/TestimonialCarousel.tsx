import { Star, ExternalLink } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    text: "I've been working with Vince and the team at Real Law Group for over 10 years, and I honestly can't imagine navigating the legal side of my business without them. Vince is the kind of attorney who actually listens, breaks things down in plain language, and never makes you feel like you're just another file on his desk. Highly recommend without hesitation.",
    author: "Oleg G.",
    context: "Business Owner, 10+ Year Client",
  },
  {
    text: "Andrew and his team fought hard for us after a devastating car accident. They secured a settlement far beyond what the insurance company initially offered. We are forever grateful.",
    author: "D.K.",
    context: "Car Accident Client, Chicago",
  },
  {
    text: "After my construction site injury, I didn't know where to turn. The Kryder Law Group handled everything — medical bills, lost wages, the works. They made a terrible situation manageable.",
    author: "M.R.",
    context: "Construction Accident Client",
  },
  {
    text: "From our first phone call to the final settlement, every person at this firm was professional, compassionate, and responsive. They truly care about their clients.",
    author: "S.L.",
    context: "Truck Accident Client, Schaumburg",
  },
  {
    text: "They took my workers' comp case when other firms turned me away. Not only did they win, but they got me more than I ever expected. I can't recommend them enough.",
    author: "J.H.",
    context: "Workers' Compensation Client",
  },
  {
    text: "The team at Kryder Law was incredible during the most difficult time in our family's life. They handled our wrongful death case with both aggressiveness and compassion.",
    author: "P.W.",
    context: "Wrongful Death Client, Aurora",
  },
  {
    text: "I slipped and fell at a grocery store and didn't think I had a case. The Kryder Law Group proved otherwise and got me a settlement that covered all my medical expenses and then some.",
    author: "A.T.",
    context: "Slip and Fall Client, Orland Park",
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
            535+ Five Star Reviews on Google
          </p>
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJe4HqVi4tDogRkryderlaw"
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
