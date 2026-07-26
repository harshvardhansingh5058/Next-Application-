"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  increaseCartQuantity,
  decreaseCartQuantity,
  deleteCart,
} from "@/redux/features/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 49 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-4 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-neutral-100">
          <ShoppingBag className="h-7 w-7 text-neutral-400" />
        </div>
        <h1 className="mt-5 text-lg font-semibold text-neutral-900">
          Your cart is empty
        </h1>
        <p className="mt-1.5 text-sm text-neutral-500">
          Items you add will show up here.
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
          Your Cart
          <span className="ml-2 text-sm font-normal text-neutral-400">
            ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
          </span>
        </h1>
        <Link
          href="/"
          className="hidden items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 sm:flex"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Continue shopping
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-3 lg:gap-10">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex gap-4 py-5 sm:gap-5 sm:py-6"
              >
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100 sm:h-28 sm:w-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      {item.brand && (
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                          {item.brand}
                        </p>
                      )}
                      <p className="mt-0.5 truncate text-sm font-medium text-neutral-900 sm:text-base">
                        {item.name}
                      </p>
                      {item.color && (
                        <p className="mt-0.5 text-xs text-neutral-500">
                          Color: {item.color}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      aria-label="Remove item"
                      onClick={() => dispatch(deleteCart({ id: item.id }))}
                      className="shrink-0 text-neutral-400 transition-colors hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-3 flex items-end justify-between">
                    {/* Quantity stepper */}
                    <div className="flex items-center rounded-full border border-neutral-200">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                        onClick={() => dispatch(decreaseCartQuantity(item.id))}
                        className="grid h-8 w-8 place-items-center rounded-full text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm font-medium tabular-nums text-neutral-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        disabled={item.quantity >= 5}
                        onClick={() => dispatch(increaseCartQuantity(item.id))}
                        className="grid h-8 w-8 place-items-center rounded-full text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <p className="text-sm font-semibold text-neutral-900 sm:text-base">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 rounded-2xl border border-neutral-200 p-5 sm:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
              Order Summary
            </h2>

            <dl className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-neutral-500">Subtotal</dt>
                <dd className="font-medium text-neutral-900">
                  ${subtotal.toLocaleString()}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Shipping</dt>
                <dd className="font-medium text-neutral-900">
                  ${shipping.toLocaleString()}
                </dd>
              </div>
            </dl>

            <div className="mt-4 flex justify-between border-t border-neutral-200 pt-4">
              <span className="text-sm font-semibold text-neutral-900">
                Total
              </span>
              <span className="text-base font-semibold text-neutral-900">
                ${total.toLocaleString()}
              </span>
            </div>

            <Button className="mt-6 w-full rounded-full py-6 text-sm font-semibold">
              Checkout
            </Button>

            <Link
              href="/"
              className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 lg:hidden"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}