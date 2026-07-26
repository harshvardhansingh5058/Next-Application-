import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/common/ProductCard";

const bestSellers = [
  {
    id: 201,
    name: "Classic White Shirt",
    brand: "LINEA",
    price: 95,
    originalPrice: 120,
    badge: "Sale",
    rating: 4.9,
    reviewCount: 812,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    colors: ["#ffffff", "#e8dfd0", "#1a1a1a"],
  },
  {
    id: 202,
    name: "Wool Crew Sweater",
    brand: "LINEA",
    price: 139,
    rating: 4.8,
    reviewCount: 634,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    colors: ["#1a1a1a", "#8a5a44", "#6b6146"],
  },
  {
    id: 203,
    name: "Pleated Midi Skirt",
    brand: "LINEA",
    price: 119,
    badge: "New",
    rating: 4.7,
    reviewCount: 287,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80",
    colors: ["#1a1a1a", "#e8dfd0", "#c9a876"],
  },
  {
    id: 204,
    name: "Leather Crossbody",
    brand: "LINEA",
    price: 179,
    rating: 4.9,
    reviewCount: 523,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    colors: ["#1a1a1a", "#8a5a44", "#e8dfd0"],
  },
  {
    id: 205,
    name: "Wide-Leg Trousers",
    brand: "LINEA",
    price: 109,
    originalPrice: 139,
    badge: "Sale",
    rating: 4.6,
    reviewCount: 198,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    colors: ["#1a1a1a", "#c9a876"],
  },
  {
    id: 206,
    name: "Oversized Hoodie",
    brand: "LINEA",
    price: 89,
    rating: 4.7,
    reviewCount: 742,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    colors: ["#6b6146", "#1a1a1a", "#e8dfd0"],
  },
  {
    id: 207,
    name: "Silk Camisole",
    brand: "LINEA",
    price: 75,
    badge: "New",
    rating: 4.5,
    reviewCount: 163,
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80",
    colors: ["#e8dfd0", "#8a5a44", "#1a1a1a"],
  },
  {
    id: 208,
    name: "Slim Chino Pants",
    brand: "LINEA",
    price: 85,
    originalPrice: 105,
    rating: 4.8,
    reviewCount: 445,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    colors: ["#c9a876", "#1a1a1a", "#6b6146"],
  },
];

export default function BestSellers() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">

      {/* Section header */}
      <div className="mb-8 flex items-end justify-between lg:mb-10">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">
            Customer Favourites
          </p>
          <h2 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-4xl">
            Best Sellers
          </h2>
        </div>
        <Link
          href="/bestsellers"
          className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 transition-colors hover:text-neutral-950"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
