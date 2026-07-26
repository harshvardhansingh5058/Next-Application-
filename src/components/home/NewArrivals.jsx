import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/common/ProductCard";

const newArrivals = [
  {
    id: 101,
    name: "Linen Overshirt",
    brand: "LINEA",
    price: 89,
    originalPrice: 110,
    badge: "New",
    rating: 4.7,
    reviewCount: 214,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    colors: ["#e8dfd0", "#2b2b2b", "#6b6146"],
  },
  {
    id: 102,
    name: "Satin Slip Dress",
    brand: "LINEA",
    price: 129,
    badge: "New",
    rating: 4.9,
    reviewCount: 142,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    colors: ["#1a1a1a", "#8a5a44", "#e8dfd0"],
  },
  {
    id: 103,
    name: "Knit Polo Shirt",
    brand: "LINEA",
    price: 79,
    rating: 4.4,
    reviewCount: 389,
    image:
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&q=80",
    colors: ["#1a1a1a", "#c9a876", "#e8dfd0"],
  },
  {
    id: 104,
    name: "Tailored Trousers",
    brand: "LINEA",
    price: 99,
    originalPrice: 129,
    badge: "Sale",
    rating: 4.7,
    reviewCount: 210,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
    colors: ["#c9a876", "#1a1a1a", "#e8dfd0"],
  },
  {
    id: 105,
    name: "Canvas Tote Bag",
    brand: "LINEA",
    price: 59,
    badge: "New",
    rating: 4.6,
    reviewCount: 178,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    colors: ["#e8dfd0", "#1a1a1a"],
  },
  {
    id: 106,
    name: "Relaxed Denim Jacket",
    brand: "LINEA",
    price: 149,
    originalPrice: 189,
    badge: "Sale",
    rating: 4.8,
    reviewCount: 305,
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80",
    colors: ["#4a6fa5", "#1a1a1a"],
  },
  {
    id: 107,
    name: "Structured Blazer",
    brand: "LINEA",
    price: 199,
    rating: 4.5,
    reviewCount: 97,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    colors: ["#1a1a1a", "#e8dfd0", "#6b6146"],
  },
  {
    id: 108,
    name: "Ribbed Tank Top",
    brand: "LINEA",
    price: 39,
    badge: "New",
    rating: 4.3,
    reviewCount: 461,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80",
    colors: ["#e8dfd0", "#1a1a1a", "#8a5a44"],
  },
];

export default function NewArrivals() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">

      {/* Section header */}
      <div className="mb-8 flex items-end justify-between lg:mb-10">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">
            Just Landed
          </p>
          <h2 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-4xl">
            New Arrivals
          </h2>
        </div>
        <Link
          href="/new-arrivals"
          className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 transition-colors hover:text-neutral-950"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
