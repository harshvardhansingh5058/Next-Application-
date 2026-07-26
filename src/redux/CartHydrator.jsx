"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setCartFromCookie } from "@/redux/features/cartSlice";
import { setWishlistFromCookie } from "@/redux/features/wishlistSlice";

export default function CartHydrator() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Cart load karo
        const rawCart = Cookies.get("cartItems");
        if (rawCart) {
            try {
                dispatch(setCartFromCookie(JSON.parse(rawCart)));
            } catch {
                dispatch(setCartFromCookie([]));
            }
        }

        // Wishlist load karo
        const rawWishlist = Cookies.get("wishlistItems");
        if (rawWishlist) {
            try {
                dispatch(setWishlistFromCookie(JSON.parse(rawWishlist)));
            } catch {
                dispatch(setWishlistFromCookie([]));
            }
        }
    }, [dispatch]);

    return null;
}