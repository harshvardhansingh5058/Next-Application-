import Image from "next/image";
import Link from "next/link";

/**
 * One split section — left half: Tops, right half: Bottoms.
 * Props:
 *  - topsProducts:    object[]
 *  - bottomsProducts: object[]
 */
export default function MiniSections({ topsProducts, bottomsProducts }) {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
      <div className="flex flex-col overflow-hidden rounded-3xl lg:flex-row lg:h-[500px]">

        {/* ── LEFT: Tops ── */}
        <div className="group relative flex-1 overflow-hidden">
          <Image
            src="/women-tops.png"
            alt="Women's Tops"
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-400">
              Tops
            </p>
            <h2 className="text-2xl font-black tracking-tight text-white lg:text-3xl">
              Effortless Tops
            </h2>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
              From breezy tees to polished blouses — made for every moment.
            </p>
            {topsProducts?.length > 0 && (
              <p className="mt-1 text-xs text-white/50">
                {topsProducts.length} styles
              </p>
            )}
            <Link
              href="/products?category=T-Shirt&gender=women"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all duration-200 hover:bg-neutral-100"
            >
              Shop Tops →
            </Link>
          </div>
        </div>

        {/* Thin divider line between the two halves (desktop only) */}
        <div className="hidden w-px bg-white/10 lg:block" />

        {/* ── RIGHT: Bottoms ── */}
        <div className="group relative flex-1 overflow-hidden">
          <Image
            src="/women-bottoms.png"
            alt="Women's Bottoms"
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-400">
              Bottoms
            </p>
            <h2 className="text-2xl font-black tracking-tight text-white lg:text-3xl">
              Statement Bottoms
            </h2>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
              Jeans, joggers & trousers that move with you, season after season.
            </p>
            {bottomsProducts?.length > 0 && (
              <p className="mt-1 text-xs text-white/50">
                {bottomsProducts.length} styles
              </p>
            )}
            <Link
              href="/products?category=Jeans&gender=women"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all duration-200 hover:bg-neutral-100"
            >
              Shop Bottoms →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
