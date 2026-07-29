"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WishlistHeart from "@/components/common/WishlistHeart";

const API_URL =
  "https://beinghumanclothing.com/collections/women/products.json";

export default function BestSellers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(({ data }) => {
        const raw = data?.products ?? [];
        const mapped = raw.slice(0, 12).map((p) => {
          const variant = p.variants?.[0] ?? {};
          const price = parseFloat(variant.price) || 0;
          const compareAt = variant.compare_at_price
            ? parseFloat(variant.compare_at_price)
            : null;
          const discount =
            compareAt && compareAt > price
              ? Math.round(((compareAt - price) / compareAt) * 100)
              : null;

          return {
            id: p.id,
            handle: p.handle,
            title: p.title,
            price,
            originalPrice: compareAt && compareAt > price ? compareAt : null,
            discount,
            image: p.images?.[0]?.src ?? null,
          };
        });
        setProducts(mapped);
      })
      .catch((err) =>
        console.warn("[TrendingDrips] fetch failed:", err.message)
      );
  }, []);

  return (
    <section className="py-14 lg:py-20">
      {/* Heading */}
      <h2 className="mb-8 text-center text-xl font-black uppercase tracking-widest text-neutral-900 lg:text-2xl">
        Trending Drips For Women
      </h2>

      {/* Navigation button styles */}
      <style>{`
  .trending-swiper .swiper-button-prev,
  .trending-swiper .swiper-button-next {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #ffffff;
    border: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    transition: box-shadow 0.25s ease, transform 0.25s ease, opacity 0.3s ease;
    opacity: 0;
  }

  .trending-swiper:hover .swiper-button-prev,
  .trending-swiper:hover .swiper-button-next {
    opacity: 1;
  }

  .trending-swiper .swiper-button-prev:hover,
  .trending-swiper .swiper-button-next:hover {
    box-shadow: 0 6px 16px rgba(0,0,0,0.16);
    transform: scale(1.06);
  }

  .trending-swiper .swiper-button-prev::after,
  .trending-swiper .swiper-button-next::after {
    font-size: 13px;
    font-weight: 700;
    color: #171717;
  }

  .trending-swiper .swiper-button-disabled {
    opacity: 0 !important;
    pointer-events: none;
  }
`}</style>

      {/* Swiper Carousel */}
      <div className="trending-swiper">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="px-4"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <Link href={`/product-detail/${p.handle}`}>
              <div className="group relative cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="256px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {/* Wishlist heart — Redux connected */}
                  <WishlistHeart product={p} />
                </div>

                {/* Info */}
                <div className="mt-2.5 space-y-0.5">
                  <p className="line-clamp-1 text-sm font-medium text-neutral-800">
                    {p.title}
                  </p>
                  <div className="flex items-center gap-2">
                    {p.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        ₹{p.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                    <span className="text-sm font-bold text-neutral-900">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    {p.discount && (
                      <span className="text-xs font-semibold text-red-500">
                        {p.discount}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
