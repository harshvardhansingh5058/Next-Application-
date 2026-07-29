import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "COOL HOODIES",
    href: "/products?category=Hoody",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
  },
  {
    title: "CLASSIC POLOS",
    href: "/products?category=Polo%20Neck",
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&q=80",
  },
  {
    title: "CHIC SWEATSHIRTS",
    href: "/products?category=Sweatshirt",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-12 lg:px-10 lg:py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {categories.map((cat) => (
          <Link key={cat.title} href={cat.href} className="group relative block overflow-hidden rounded-2xl">
            <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/35" />

              {/* Centered Title */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-center text-lg font-bold tracking-widest text-white uppercase sm:text-xl drop-shadow-sm">
                  {cat.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
