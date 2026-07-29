import Image from "next/image";
import Link from "next/link";

// Category image map — real Unsplash images per category type
const CATEGORY_IMAGES = {
  "T-Shirt": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
  "Tops": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
  "Dresses": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
  "Jeans": "https://images.unsplash.com/photo-1542272201-b1ca555f8505?w=800&q=80",
  "Sweatshirt": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
  "Hoody": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
  "Jacket": "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80",
  "Polo Neck": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&q=80",
  "default": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
};

/**
 * Women Categories grid — derives categories from real API data via props
 * Props:
 *  - categories: string[] — unique product_type values from API
 */
export default function Categories({ categories }) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
      {/* Section Header */}
      <div className="mb-10 text-center lg:mb-14">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">
          Browse
        </p>
        <h2 className="text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
          Shop by Category
        </h2>
      </div>

      {/* Category Grid — max 6 */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {categories.slice(0, 6).map((cat) => {
          const imgSrc = CATEGORY_IMAGES[cat] ?? CATEGORY_IMAGES["default"];
          return (
            <Link
              key={cat}
              href={`/products?category=${encodeURIComponent(cat)}`}
              className="group relative block overflow-hidden rounded-2xl bg-neutral-100"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={imgSrc}
                  alt={cat}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-sm font-black uppercase tracking-widest text-white sm:text-base">
                    {cat}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-white/60 transition-all duration-300 group-hover:text-orange-400">
                    Shop Now →
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
