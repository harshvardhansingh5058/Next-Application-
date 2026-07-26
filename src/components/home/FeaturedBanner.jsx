import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Reusable full-width banner section.
 *
 * Props:
 *  eyebrow   – small uppercase label above the title
 *  title     – main heading text
 *  subtitle  – supporting body copy
 *  cta       – button label
 *  href      – CTA link destination
 *  imageSrc  – URL string for the background image
 *  imageAlt  – alt text for the image
 *  align     – "left" | "center" (default "center") text alignment
 *  ctaStyle  – "white" | "orange" button colour (default "white")
 */
export default function FeaturedBanner({
  eyebrow = "Featured Collection",
  title = "The Summer Edit",
  subtitle = "Lightweight fabrics. Clean silhouettes. Made for the season.",
  cta = "Shop Now",
  href = "/",
  imageSrc,
  imageAlt = "Featured collection banner",
  align = "center",
  ctaStyle = "white",
}) {
  const isLeft = align === "left";

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="relative h-[480px] w-full sm:h-[560px] lg:h-[640px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />

        {/* Content */}
        <div
          className={[
            "absolute inset-0 flex flex-col justify-end px-6 pb-10 sm:px-14 sm:pb-14 lg:px-20",
            isLeft ? "items-start" : "items-center text-center",
          ].join(" ")}
        >
          {/* Eyebrow */}
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-400 sm:text-[11px] sm:tracking-[0.35em]">
            {eyebrow}
          </p>

          {/* Title */}
          <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75 sm:mt-4 sm:max-w-md sm:text-base">
            {subtitle}
          </p>

          {/* CTA */}
          <Link
            href={href}
            className={[
              "mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:gap-3 sm:mt-8 sm:px-8 sm:py-4",
              ctaStyle === "orange"
                ? "bg-orange-600 text-white hover:bg-orange-500"
                : "bg-white text-neutral-950 hover:bg-neutral-100",
            ].join(" ")}
          >
            {cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
