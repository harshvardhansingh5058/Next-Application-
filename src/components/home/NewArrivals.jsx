import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShoppingBag } from "lucide-react";
import WishlistHeart from "@/components/common/WishlistHeart";

const API_URL = "https://beinghumanclothing.com/collections/new-arrivals/products.json";

async function fetchNewArrivals() {
  try {
    const { data } = await axios.get(API_URL, {
      // ISR: cache response, re-validate every 60 s
      // axios on the server honours Next.js fetch semantics via node
      timeout: 8000,
    });

    const raw = data?.products ?? [];

    // Map Shopify product → our display shape (first 8 only)
    return raw.slice(0, 8).map((p) => {
      const variant = p.variants?.[0] ?? {};
      const price = parseFloat(variant.price) || 0;
      const compareAt = variant.compare_at_price
        ? parseFloat(variant.compare_at_price)
        : null;

      return {
        id: p.id,
        handle: p.handle,
        title: p.title,
        vendor: p.vendor,
        type: p.product_type,
        price,
        originalPrice: compareAt && compareAt > price ? compareAt : null,
        image: p.images?.[0]?.src ?? null,
        available: p.variants?.some((v) => v.available) ?? false,
      };
    });
  } catch (err) {
    console.warn("[NewArrivals] API fetch failed:", err.message);
    return [];
  }
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ProductCard({ product }) {
  const { title, vendor, price, originalPrice, image, available, type, handle } =
    product;
  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <Link href={`/product-detail/${handle}`}>
    <article className="group relative flex w-full flex-col cursor-pointer">
      {/* ── Image Container ── */}
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
        <div className="relative aspect-[3/4]">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-neutral-100">
              <ShoppingBag className="h-10 w-10 text-neutral-300" />
            </div>
          )}
        </div>

        {/* ── Badges ── */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {hasDiscount && (
            <span className="rounded-full bg-orange-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
              Sale
            </span>
          )}
          {!available && (
            <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
              Sold Out
            </span>
          )}
        </div>

        {/* ── Wishlist heart — Redux connected ── */}
        <WishlistHeart product={{ id: product.id, title: product.title, price: product.price, image: product.image }} />
      </div>

      {/* ── Product Info ── */}
      <div className="mt-3 flex flex-1 flex-col gap-1">
        {/* Vendor / Brand */}
        {vendor && (
          <p className="text-[10px] font-semibold uppercase tracking-widest text-orange-500">
            {vendor}
          </p>
        )}

        {/* Title */}
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-neutral-600">
          {title}
        </h3>

        {/* Product Type */}
        {type && (
          <p className="text-[11px] text-neutral-400">{type}</p>
        )}

        {/* Price */}
        <div className="mt-auto flex items-center gap-2 pt-1.5">
          <p className="text-sm font-bold text-neutral-900">
            ₹{price.toLocaleString("en-IN")}
          </p>
          {hasDiscount && (
            <p className="text-xs text-neutral-400 line-through">
              ₹{originalPrice.toLocaleString("en-IN")}
            </p>
          )}
        </div>
      </div>
    </article>
    </Link>
  );
}

// ── Empty / Error State ───────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center py-16 text-center">
      <ShoppingBag className="h-12 w-12 text-neutral-200" />
      <p className="mt-4 text-sm text-neutral-400">
        New arrivals coming soon — check back shortly.
      </p>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default async function NewArrivals() {
  const products = await fetchNewArrivals();

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">

      {/* ── Section Header ── */}
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
          href="/products"
          className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 transition-colors hover:text-neutral-950"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* ── Product Grid ── */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
