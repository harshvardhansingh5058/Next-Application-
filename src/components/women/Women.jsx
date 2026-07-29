import axios from "axios";
import Hero from "@/components/women/Hero";
import MiniSections from "@/components/women/MiniSections";
import Products from "@/components/women/Products";

// ── Tops & Bottoms type lists ─────────────────────────────────────────────────
const TOPS_TYPES = ["T-Shirt", "Tops", "Shirt", "Polo Neck", "Sweatshirt", "Hoody"];
const BOTTOMS_TYPES = ["Jeans", "Joggers", "Trousers", "Shorts", "Pants", "Bottoms"];

// ── Map raw Shopify product → display shape ───────────────────────────────────
function mapProduct(p) {
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
    tags: Array.isArray(p.tags) ? p.tags : (p.tags ?? "").split(", "),
  };
}

// ── Women is an async Server Component — fetches its own data ─────────────────
export default async function Women() {
  let allProducts = [];

  try {
    const { data } = await axios.get(
      "https://www.beinghumanclothing.com/collections/shop-all/products.json?limit=250"
    );
    allProducts = data?.products ?? [];
  } catch (err) {
    console.error("[Women] fetch failed:", err.message);
  }

  // Filter women-tagged products only
  const womenRaw = allProducts.filter((p) => {
    const tags = Array.isArray(p.tags) ? p.tags : (p.tags ?? "").split(", ");
    return tags.some((t) => t.toLowerCase() === "women");
  });

  // Map to display shape
  const products = womenRaw.map(mapProduct);

  // Sub-filter Tops
  const topsProducts = products.filter((p) =>
    TOPS_TYPES.some((t) => t.toLowerCase() === (p.type ?? "").toLowerCase())
  );

  // Sub-filter Bottoms
  const bottomsProducts = products.filter((p) =>
    BOTTOMS_TYPES.some((t) => t.toLowerCase() === (p.type ?? "").toLowerCase())
  );

  // Pick 12 random products — Fisher-Yates shuffle then slice
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  const featured = shuffled.slice(0, 12);

  return (
    <main>
      {/* 1. Hero banner */}
      <Hero />

      {/* 2. Mini sections — Tops (left) + Bottoms (right) */}
      <MiniSections
        topsProducts={topsProducts}
        bottomsProducts={bottomsProducts}
      />

      {/* 3. 12 randomly selected women products */}
      <Products products={featured} />
    </main>
  );
}
