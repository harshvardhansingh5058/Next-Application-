import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";

/**
 * Women Best Sellers — receives pre-fetched data via props
 * Props:
 *  - products: Array of mapped product objects (different slice than NewArrivals, from page.js)
 */
export default function BestSellers({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">

        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between lg:mb-10">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">
              Most Loved
            </p>
            <h2 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-4xl">
              Best Sellers
            </h2>
          </div>

          <Link
            href="/products?collection=women"
            className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 transition-colors hover:text-neutral-950"
          >
            View All →
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
