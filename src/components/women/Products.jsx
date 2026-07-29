import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";

/**
 * Women Products grid — all women products.
 * Props:
 *  - products: object[]  — full list of mapped women products
 */
export default function Products({ products }) {
  if (!products || products.length === 0) {
    return (
      <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
        <p className="text-center text-neutral-400">No products found.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
      {/* Section Header */}
      <div className="mb-8 flex items-end justify-between lg:mb-10">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">
            Women
          </p>
          <h2 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-4xl">
            All Products
          </h2>
        </div>
        <span className="text-sm text-neutral-400">{products.length} items</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View more CTA */}
      <div className="mt-14 flex justify-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-all duration-200 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
        >
          Browse All Collections →
        </Link>
      </div>
    </section>
  );
}
