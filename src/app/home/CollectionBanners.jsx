import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import collectionMen from "@/app/assets/images/collection-men.jpg";
import collectionWomen from "@/app/assets/images/collection-women.jpg";

const collections = [
  {
    title: "Men's Collection",
    subtitle: "Elevated essentials for every occasion.",
    cta: "Explore",
    href: "/men",
    image: collectionMen,
  },
  {
    title: "Women's Collection",
    subtitle: "Modern silhouettes. Effortless elegance.",
    cta: "Explore",
    href: "/women",
    image: collectionWomen,
  },
];

export default function CollectionBanners() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-10 lg:px-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {collections.map((col) => (
          <Card
            key={col.title}
            className="group relative overflow-hidden rounded-lg border-none p-0 shadow-none"
          >
            <CardContent className="relative aspect-[16/10] p-0">
              <Image
                src={col.image}
                alt={col.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end gap-2 p-8">
                <h3 className="text-2xl font-bold text-white">{col.title}</h3>
                <p className="max-w-xs text-sm text-neutral-200">{col.subtitle}</p>
                <Link
                  href={col.href}
                  className="mt-2 flex w-fit items-center gap-1.5 text-sm font-semibold text-white underline underline-offset-4"
                >
                  {col.cta}
                  <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}