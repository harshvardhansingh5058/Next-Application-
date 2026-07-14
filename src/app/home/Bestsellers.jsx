import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "@/components/common/ProductCard";

const products = [
  {
    id: "linen-overshirt",
    name: "Linen Overshirt",
    brand: "LINEA",
    price: 89,
    originalPrice: 110,
    badge: "Sale",
    rating: 4.6,
    reviewCount: 328,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    colors: ["#e8dfd0", "#2b2b2b", "#6b6146"],
  },
  {
    id: "satin-slip-dress",
    name: "Satin Slip Dress",
    brand: "LINEA",
    price: 129,
    badge: "New",
    rating: 4.9,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    colors: ["#1a1a1a", "#8a5a44", "#e8dfd0"],
  },
  {
    id: "knitted-polo",
    name: "Knitted Polo",
    brand: "LINEA",
    price: 79,
    rating: 4.4,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&q=80",
    colors: ["#1a1a1a", "#c9a876", "#e8dfd0"],
  },
  {
    id: "tailored-trousers",
    name: "Tailored Trousers",
    brand: "LINEA",
    price: 99,
    originalPrice: 129,
    badge: "Sale",
    rating: 4.7,
    reviewCount: 210,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
    colors: ["#c9a876", "#1a1a1a", "#e8dfd0"],
  },
];
export default function Bestsellers() {
    return (
        <section className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-neutral-950">Bestsellers</h2>
                <Link
                    href="/bestsellers"
                    className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-950"
                >
                    View all
                    <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}