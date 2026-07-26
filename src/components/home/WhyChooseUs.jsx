import { Truck, RotateCcw, ShieldCheck, Gem } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Complimentary shipping on all orders above ₹999. Fast & reliable delivery to your door.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "Not happy? Return anything within 30 days — no questions asked. Hassle-free process.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description:
      "All transactions are protected with bank-grade encryption. Shop with full confidence.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description:
      "Every piece is crafted from carefully sourced fabrics built to last season after season.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">

        {/* Section heading */}
        <div className="mb-10 text-center lg:mb-14">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">
            Our Promise
          </p>
          <h2 className="text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
            Why Choose LINEA
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-start rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              {/* Icon container */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 transition-colors duration-200 group-hover:bg-orange-100">
                <Icon className="h-5 w-5 text-orange-600" strokeWidth={1.75} />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-bold text-neutral-950">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
