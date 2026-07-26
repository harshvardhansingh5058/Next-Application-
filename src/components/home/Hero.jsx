import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* ─── MOBILE: single full-screen panel with bg image ─── */}
      <div className="relative flex min-h-[90svh] flex-col justify-end md:hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&q=85"
          alt="Fashion model wearing LINEA collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Gradient overlay — dark at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/10" />

        {/* Content over image */}
        <div className="relative z-10 px-6 pb-14 pt-6">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-500">
            New Season · SS 2025
          </p>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white">
            Dress the{" "}
            <span className="text-orange-500">Way</span>{" "}
            You Feel
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Curated pieces for the modern wardrobe. Clean cuts, premium fabrics.
          </p>
          <div className="mt-8">
            <Link
              href="/men"
              className="inline-flex items-center gap-2.5 rounded-full bg-orange-600 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-orange-500"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-8 flex items-center gap-6 border-t border-neutral-800 pt-6">
            {[
              { value: "2K+", label: "Products" },
              { value: "50K+", label: "Customers" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-black text-white">{stat.value}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-widest text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── DESKTOP: side-by-side split panel ─── */}
      <div className="hidden min-h-[92vh] md:flex">

        {/* Left — Copy */}
        <div className="relative flex flex-1 flex-col justify-center bg-neutral-950 px-14 py-20 lg:px-20 xl:px-28">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-500">
            New Season · SS 2025
          </p>
          <h1 className="text-6xl font-black leading-[1.05] tracking-tight text-white lg:text-7xl xl:text-8xl">
            Dress the
            <br />
            <span className="text-orange-500">Way</span>
            <br />
            You Feel
          </h1>
          <p className="mt-7 max-w-sm text-base leading-relaxed text-neutral-400">
            Curated pieces for the modern wardrobe. Clean cuts, premium fabrics,
            effortless everyday style.
          </p>
          <div className="mt-10">
            <Link
              href="/men"
              className="inline-flex items-center gap-2.5 rounded-full bg-orange-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-orange-500 hover:gap-4"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Stats row */}
          <div className="mt-16 flex items-center gap-10 border-t border-neutral-800 pt-8">
            {[
              { value: "2K+", label: "Products" },
              { value: "50K+", label: "Happy Customers" },
              { value: "4.9★", label: "Avg. Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-black text-white">{stat.value}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-widest text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-14 flex items-center gap-2 text-neutral-600 lg:left-20 xl:left-28">
            <ChevronDown className="h-4 w-4 animate-bounce" />
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative flex-1">
          <Image
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&q=85"
            alt="Fashion model wearing LINEA collection"
            fill
            priority
            sizes="50vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/40 via-transparent to-transparent" />
          {/* Floating badge */}
          <div className="absolute right-6 top-6 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white">
              Limited Edition
            </p>
            <p className="text-xs text-white/70">Summer Drop 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
