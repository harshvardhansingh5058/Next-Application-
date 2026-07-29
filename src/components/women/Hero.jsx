import Image from "next/image";
import Link from "next/link";

/**
 * Women Hero section
 * Props:
 *  - No data props needed (static editorial content)
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[85svh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80"
          alt="Women's Collection — LINEA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 sm:px-14 lg:px-20 lg:pb-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-400">
            New Season
          </p>
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            The Women's Collection
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75 sm:text-base">
            Clean cuts, premium fabrics, effortless style — made for the modern woman.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products?collection=women"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-950 transition-all duration-200 hover:bg-neutral-100"
            >
              Shop Now
            </Link>
            <Link
              href="#new-arrivals"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-200 hover:border-white/80"
            >
              New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
