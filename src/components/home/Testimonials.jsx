import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    avatar: "PS",
    quote:
      "The quality is absolutely outstanding. My linen shirt arrived in perfect condition and the fabric is even better than expected. LINEA has become my go-to for premium basics.",
    product: "Linen Overshirt",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    location: "Bangalore, India",
    rating: 5,
    avatar: "AM",
    quote:
      "Fast shipping, beautiful packaging, and the fit is exactly as described. I've ordered three times now and every experience has been flawless. Highly recommend.",
    product: "Slim Chino Pants",
  },
  {
    id: 3,
    name: "Aisha Raza",
    location: "Delhi, India",
    rating: 5,
    avatar: "AR",
    quote:
      "Finally a fashion brand that nails minimalist design without compromising on quality. The satin dress is stunning — I get compliments every single time I wear it.",
    product: "Satin Slip Dress",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">

        {/* Section heading */}
        <div className="mb-10 text-center lg:mb-14">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">
            Reviews
          </p>
          <h2 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-neutral-500">
            Real stories from real people who love wearing LINEA every day.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-sm"
            >
              {/* Star rating */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-sm leading-relaxed text-neutral-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="border-t border-neutral-100 pt-5">
                <div className="flex items-center gap-3">
                  {/* Avatar initials */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-xs font-black text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-neutral-400">{t.location}</p>
                  </div>
                  <span className="ml-auto rounded-full bg-orange-50 px-3 py-1 text-[10px] font-semibold text-orange-600">
                    Verified
                  </span>
                </div>
                <p className="mt-3 text-[11px] text-neutral-400">
                  Purchased: <span className="font-medium text-neutral-600">{t.product}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
