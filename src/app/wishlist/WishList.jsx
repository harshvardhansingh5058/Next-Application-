"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Heart, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toggleWishlist, clearWishlist,} from "@/redux/features/wishlistSlice";
import { addToCart } from "@/redux/features/cartSlice";

export default function WishlistPage() {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

    if (wishlistItems.length === 0) {
        return (
            <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-4 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-neutral-100">
                    <Heart className="h-7 w-7 text-neutral-400" />
                </div>
                <h1 className="mt-5 text-lg font-semibold text-neutral-900">
                    Your wishlist is empty
                </h1>
                <p className="mt-1.5 text-sm text-neutral-500">
                    Items you save will show up here.
                </p>
                <Link href="/">
                    <Button className="mt-6 rounded-full px-6">Continue shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                    Wishlist
                    <span className="ml-2 text-sm font-normal text-neutral-400">
                        ({wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"})
                    </span>
                </h1>

                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => dispatch(clearWishlist())}
                        className="text-sm font-medium text-neutral-500 hover:text-red-500"
                    >
                        Clear all
                    </button>
                    <Link
                        href="/"
                        className="hidden items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 sm:flex"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Continue shopping
                    </Link>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:mt-10 lg:grid-cols-4">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="group">
                        <Link href={`/product-detail/${item.id}`}>
                            <div className="relative overflow-hidden rounded-xl bg-neutral-100">
                                <div className="relative aspect-[3/4]">
                                    <Image
                                        src={item.image}
                                        alt={item.name ?? item.title ?? "Product"}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Remove from wishlist */}
                                <button
                                    type="button"
                                    aria-label="Remove from wishlist"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        dispatch(toggleWishlist(item));
                                    }}
                                    className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-orange-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
                                >
                                    <Heart className="h-3.5 w-3.5 fill-current" />
                                </button>
                            </div>
                        </Link>

                        <div className="pt-3">
                            {item.brand && (
                                <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                                    {item.brand}
                                </p>
                            )}
                            <h3 className="mt-0.5 line-clamp-1 text-sm font-semibold text-neutral-900">
                                {item.name ?? item.title}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-neutral-900">
                                ₹{item.price?.toLocaleString("en-IN")}
                            </p>

                            <div className="mt-3 flex gap-2">
                                <Button
                                    size="sm"
                                    className="h-8 flex-1 rounded-full text-xs"
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    <ShoppingBag className="mr-1.5 h-3 w-3" />
                                    Add to Cart
                                </Button>
                                <button
                                    type="button"
                                    aria-label="Remove"
                                    onClick={() => dispatch(toggleWishlist(item))}
                                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:border-red-200 hover:text-red-500"
                                >
                                    <Trash2 className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}