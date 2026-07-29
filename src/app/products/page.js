import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";

export const metadata = {
  title: "Shop Collection — LINEA",
  description: "Browse our full collection — hoodies, jackets, sweatshirts, shirts, jeans & more.",
};

async function fetchProducts() {
  try {
    const res = await fetch(
      "https://www.beinghumanclothing.com/collections/shop-all/products.json?limit=250",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    return (data?.products ?? []).map((p) => {
      const v = p.variants?.[0] ?? {};
      const price = parseFloat(v.price) || 0;
      const compareAt = v.compare_at_price ? parseFloat(v.compare_at_price) : null;
      // Normalize tags to array
      const tags = Array.isArray(p.tags) ? p.tags : (p.tags ?? "").split(", ").filter(Boolean);
      return {
        id: p.id,
        handle: p.handle,
        title: p.title,
        vendor: p.vendor,
        type: p.product_type,
        price,
        originalPrice: compareAt && compareAt > price ? compareAt : null,
        image: p.images?.[0]?.src ?? null,
        tags,
      };
    });
  } catch (error) {
    console.warn("[fetchProducts] error:", error.message);
    return [];
  }
}

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const activeCategory = params?.category ?? "all";
  // Gender filter: if coming from women section, filter women-only
  const genderFilter = params?.gender ?? null; // e.g. "women" or "men"

  const allProducts = await fetchProducts();

  // Step 1: derive ALL unique product_type values for tabs (from full catalog)
  const allTypes = [
    ...new Set(allProducts.map((p) => p.type).filter(Boolean)),
  ].sort();

  // Step 2: apply gender filter first (if present)
  const genderFiltered = genderFilter
    ? allProducts.filter((p) =>
        p.tags.some((t) => t.toLowerCase() === genderFilter.toLowerCase())
      )
    : allProducts;

  // Step 3: apply category filter
  const filtered =
    activeCategory === "all"
      ? genderFiltered
      : genderFiltered.filter(
          (p) => p.type?.toLowerCase() === activeCategory.toLowerCase()
        );

  // Build tab hrefs — preserve gender param if present
  function tabHref(typeId) {
    const base = typeId === "all" ? "/products" : `/products?category=${typeId}`;
    return genderFilter ? `${base}${typeId === "all" ? "?" : "&"}gender=${genderFilter}` : base;
  }

  return (
    <main className="mx-auto max-w-[1600px] px-6 py-12 lg:px-10 lg:py-16">
      <header className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">
            {genderFilter ? `${genderFilter.charAt(0).toUpperCase() + genderFilter.slice(1)} · Catalog` : "Catalog"}
          </p>
          <h1 className="text-3xl font-black text-neutral-950 sm:text-4xl">
            Shop Our Collection
          </h1>
        </div>

        {/* Total count — right side of heading */}
        <div className="flex shrink-0 flex-col items-end">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Total
          </span>
          <span className="text-3xl font-black tabular-nums text-neutral-950 sm:text-4xl">
            {filtered.length}
            <span className="ml-1.5 text-base font-medium text-neutral-400">
              {filtered.length === 1 ? "item" : "items"}
            </span>
          </span>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="mb-8">
        <nav className="flex flex-wrap gap-2">
          {/* All tab */}
          <Link
            href={tabHref("all")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-neutral-950 text-white shadow-sm"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            All
          </Link>

          {/* Dynamic tabs from API product_type field */}
          {allTypes.map((type) => {
            const isActive = activeCategory.toLowerCase() === type.toLowerCase();
            return (
              <Link
                key={type}
                href={tabHref(type)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {type}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-neutral-400">No products found.</div>
      )}
    </main>
  );
}
