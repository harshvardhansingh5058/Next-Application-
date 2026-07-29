"use client";

import { useDispatch, useSelector } from "react-redux";
import { Heart } from "lucide-react";
import { toggleWishlist } from "@/redux/features/wishlistSlice";

/**
 * WishlistHeart — reusable client button
 * Connects to Redux wishlistSlice.toggleWishlist.
 *
 * @param {{ product: object }} props
 *   product must have at least: { id, title, price, image }
 */
export default function WishlistHeart({ product }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((s) => s.wishlist.wishlistItems);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  return (
    <button
      onClick={() => dispatch(toggleWishlist(product))}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      className="absolute right-2.5 top-2.5 rounded-full bg-white/80 p-1.5 backdrop-blur-sm transition hover:bg-white"
    >
      <Heart
        className={`h-4 w-4 transition-colors ${
          isWishlisted
            ? "fill-red-500 text-red-500"
            : "fill-none text-neutral-500"
        }`}
      />
    </button>
  );
}
