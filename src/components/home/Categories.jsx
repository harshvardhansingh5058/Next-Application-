import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import categoryMen from "@/app/assets/images/category-men.jpg";
import categoryWomen from "@/app/assets/images/category-women.jpg";
import categoryAccessories from "@/app/assets/images/category-new.jpg";
import categorySale from "@/app/assets/images/category-sale.jpg";

const categories = [
  {
    label: "Men",
    href: "/men",
    image: categoryMen,
    tag: "New Season",
  },
  {
    label: "Women",
    href: "/women",
    image: categoryWomen,
    tag: "Trending Now",
  },
  {
    label: "Accessories",
    href: "/brands",
    image: categoryAccessories,
    tag: "Must Haves",
  },
  {
    label: "Sale",
    href: "/sale",
    image: categorySale,
    tag: "Up to 50% Off",
    highlight: true,
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10">

      {/* Section heading */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">
            Collections
          </p>
          <h2 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-4xl">
            Shop by Category
          </h2>
        </div>
        <p className="hidden text-sm text-neutral-500 sm:block">
          Find exactly what you&apos;re looking for
        </p>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
        {categories.map((cat) => (
          <Link key={cat.label} href={cat.href} className="group">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
              {/* Image */}
              <div className="relative aspect-[3/4]">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Tag pill */}
                <span
                  className={[
                    "absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider",
                    cat.highlight
                      ? "bg-orange-600 text-white"
                      : "bg-white/90 text-neutral-900",
                  ].join(" ")}
                >
                  {cat.tag}
                </span>

                {/* Bottom label */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-white sm:text-xl">
                      {cat.label}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-200 group-hover:bg-white/40">
                      <ArrowRight className="h-3.5 w-3.5 text-white" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
