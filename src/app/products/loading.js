// ── Skeleton sub-components ───────────────────────────────────────────────────

/** Single pulsing skeleton card that mirrors ApiProductCard layout */
function SkeletonCard() {
  return (
    <div className="w-full animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-[3/4] rounded-2xl bg-neutral-200" />

      {/* Text placeholders */}
      <div className="mt-3 space-y-2">
        {/* Brand line */}
        <div className="h-2.5 w-16 rounded-full bg-neutral-200" />
        {/* Title — two lines */}
        <div className="h-3.5 w-full rounded-full bg-neutral-200" />
        <div className="h-3.5 w-3/4 rounded-full bg-neutral-200" />
        {/* Rating */}
        <div className="h-2.5 w-10 rounded-full bg-neutral-200" />
        {/* Price */}
        <div className="h-3.5 w-1/4 rounded-full bg-neutral-200" />
      </div>
    </div>
  );
}

// ── Loading Component ─────────────────────────────────────────────────────────

export default function Loading() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 py-12 lg:px-10 lg:py-16">

      {/* ── Header skeleton ── */}
      <div className="mb-10 animate-pulse space-y-3">
        <div className="h-3 w-20 rounded-full bg-neutral-200" />
        <div className="h-9 w-72 rounded-full bg-neutral-200" />
        <div className="h-4 w-52 rounded-full bg-neutral-200" />
      </div>

      {/* ── Tab skeleton ── */}
      <div className="mb-8 flex flex-wrap gap-2">
        {["All", "Tops", "Men's Shirts", "Women's Dresses"].map((label) => (
          <div
            key={label}
            className="h-9 animate-pulse rounded-full bg-neutral-200"
            style={{ width: `${label.length * 9 + 24}px` }}
          />
        ))}
      </div>

      {/* ── Count line skeleton ── */}
      <div className="mb-6 h-4 w-32 animate-pulse rounded-full bg-neutral-200" />

      {/* ── Product grid skeleton — same layout as real grid ── */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {/* Show 8 placeholder cards */}
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
