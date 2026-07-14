import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import categoryMen from "@/app/assets/images/category-men.jpg";
import categoryWomen from "@/app/assets/images/category-women.jpg";
import categoryNew from "@/app/assets/images/category-new.jpg";
import categorySale from "@/app/assets/images/category-sale.jpg";

const categories = [
  { label: "Men", href: "/men", image: categoryMen },
  { label: "Women", href: "/women", image: categoryWomen },
  { label: "Brands", href: "/brands", image: categoryNew },
  { label: "Sale", href: "/sale", image: categorySale },
];

export default function CategoryGrid() {
    return (
        <section className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {categories.map((cat) => (
                    <Link key={cat.label} href={cat.href} className="group">
                        <Card className="overflow-hidden rounded-lg border-none p-0 shadow-none">
                            <CardContent className="p-0">
                                <AspectRatio ratio={3 / 4} className="relative bg-neutral-200">
                                    <Image
                                        src={cat.image}
                                        alt={cat.label}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm font-semibold text-white">
                                        {cat.label}
                                        <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
                                    </span>
                                </AspectRatio>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}