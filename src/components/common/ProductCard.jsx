"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular, faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function StarRating({ rating, reviewCount }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="mt-1 flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {stars.map((star) => {
          const filled = rating >= star;
          const half = !filled && rating >= star - 0.5;
          return (
            <FontAwesomeIcon
              key={star}
              icon={half ? faStarHalfStroke : filled ? faStar : faStarRegular}
              className="h-2.5 w-2.5 text-amber-400"
            />
          );
        })}
      </div>
      <span className="text-xs text-neutral-500">
        {rating.toFixed(1)}
        {reviewCount ? ` · ${reviewCount.toLocaleString()}` : ""}
      </span>
    </div>
  );
}

export default function ProductCard({ product, currency = "$", aspectRatio = 3 / 4 }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? null);

  const discountPercent =
    product.discountPercent ??
    (product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null);

  return (
    <div className="group w-full">
      <div className="relative overflow-hidden rounded-xl bg-neutral-100">
        <AspectRatio ratio={aspectRatio} className="relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-neutral-900 shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={() => setWishlisted((prev) => !prev)}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-neutral-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          <FontAwesomeIcon
            icon={wishlisted ? faHeartSolid : faHeartRegular}
            className={["h-3.5 w-3.5 transition-colors", wishlisted ? "text-orange-600" : ""].join(" ")}
          />
        </button>

        {/* Quick Add — hover only, desktop only */}
        <button
          type="button"
          className="absolute inset-x-0 bottom-0 hidden translate-y-full bg-neutral-950 py-3 text-xs font-bold uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:block"
        >
          Quick Add +
        </button>
      </div>

      <div className="pt-3">
        {product.brand && (
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
            {product.brand}
          </p>
        )}

        <Link
          href={`/product/${product.id}`}
          className="mt-0.5 line-clamp-1 block text-sm font-semibold text-neutral-900 transition-colors hover:text-neutral-600"
        >
          {product.name}
        </Link>

        {product.rating && <StarRating rating={product.rating} reviewCount={product.reviewCount} />}

        <div className="mt-1.5 flex items-center gap-2">
          <p className="text-sm font-semibold text-neutral-900">
            {currency}{product.price.toLocaleString()}
          </p>
          {product.originalPrice && (
            <p className="text-xs text-neutral-400 line-through">
              {currency}{product.originalPrice.toLocaleString()}
            </p>
          )}
          {discountPercent && (
            <span className="text-xs font-semibold text-emerald-600">{discountPercent}% off</span>
          )}
        </div>

        {product.colors && (
          <div className="mt-2.5 flex items-center gap-1.5">
            {product.colors.map((color) => (
              <button
                key={color}
                type="button"
                aria-label={`Select color ${color}`}
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
                className={[
                  "h-4 w-4 rounded-full border transition-all",
                  selectedColor === color
                    ? "border-neutral-950 ring-1 ring-neutral-950 ring-offset-1"
                    : "border-neutral-200",
                ].join(" ")}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}