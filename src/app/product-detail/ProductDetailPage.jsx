"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  BadgeCheck, ChevronRight, Minus, Plus,
  RefreshCw, ShieldCheck, Truck, ShoppingBag,
} from "lucide-react";
import { addToCart } from "@/redux/features/cartSlice";
import WishlistHeart from "@/components/common/WishlistHeart";

// ── Helpers ──────────────────────────────────────────────────────────────────

function stripHtml(html) {
  return html?.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim() ?? "";
}

// ── Loading skeleton ──────────────────────────────────────────────────────────

function Skeleton() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="aspect-square max-w-md rounded-2xl bg-neutral-200" />
        <div className="space-y-4 pt-4">
          <div className="h-5 w-24 rounded-full bg-neutral-200" />
          <div className="h-8 w-3/4 rounded-full bg-neutral-200" />
          <div className="h-4 w-1/3 rounded-full bg-neutral-200" />
          <div className="h-10 w-1/4 rounded-full bg-neutral-200" />
          <div className="h-32 w-full rounded-2xl bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ProductDetailPage({ productId }) {
  const dispatch = useDispatch();

  const [product, setProduct]       = useState(null);
  const [loading, setLoading]       = useState(true);
  const [activeImage, setActiveImage] = useState(null);
  const [selectedSize, setSelectedSize]   = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity]     = useState(1);

  // ── Fetch product by handle ────────────────────────────────────────────────
  useEffect(() => {
    if (!productId) return;
    setLoading(true);
    axios
      .get(`https://beinghumanclothing.com/products/${productId}.json`)
      .then(({ data }) => {
        const p = data.product;
        setProduct(p);
        setActiveImage(p.images?.[0]?.src ?? null);
        // default selections
        const sizeOpt  = p.options?.find((o) => o.name === "Size");
        const colorOpt = p.options?.find((o) => o.name === "Color");
        if (sizeOpt)  setSelectedSize(sizeOpt.values[0]);
        if (colorOpt) setSelectedColor(colorOpt.values[0]);
      })
      .catch((err) => console.warn("[ProductDetail] fetch failed:", err.message))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <Skeleton />;
  if (!product) return (
    <div className="flex min-h-[60vh] items-center justify-center text-neutral-500">
      Product not found.
    </div>
  );

  // ── Derived values ─────────────────────────────────────────────────────────
  const variant    = product.variants?.[0] ?? {};
  const price      = parseFloat(variant.price) || 0;
  const compareAt  = variant.compare_at_price ? parseFloat(variant.compare_at_price) : null;
  const hasDiscount = compareAt && compareAt > price;
  const discount   = hasDiscount ? Math.round(((compareAt - price) / compareAt) * 100) : null;

  const sizeOption  = product.options?.find((o) => o.name === "Size");
  const colorOption = product.options?.find((o) => o.name === "Color");

  const isSizeAvailable = (size) =>
    product.variants?.some((v) => v.option1 === size && v.available) ?? false;

  const description = stripHtml(product.body_html);

  // ── Add to cart ────────────────────────────────────────────────────────────
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price,
        image: activeImage,
        quantity,
        vendor: product.vendor,
        size: selectedSize,
        color: selectedColor,
      })
    );
  };

  return (
    <main className="flex-1 bg-white">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">

        {/* ── Breadcrumb ── */}
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-neutral-400">
          <Link href="/" className="hover:text-neutral-700">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/products" className="hover:text-neutral-700">Shop</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-neutral-900">{product.title}</span>
        </nav>

        {/* ── Main grid ── */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* ── Left: Images (Main + Thumbnails on Right) ── */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-[540px]">
            {/* Main image */}
            <div className="relative flex-1 overflow-hidden rounded-2xl bg-neutral-100">
              <div className="relative aspect-square">
                {activeImage && (
                  <Image
                    src={activeImage}
                    alt={product.title}
                    fill
                    priority
                    sizes="(max-width:1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                )}
                {/* Wishlist on main image */}
                <WishlistHeart
                  product={{ id: product.id, title: product.title, price, image: activeImage }}
                />
              </div>
            </div>

            {/* Thumbnails on Right Side */}
            {product.images?.length > 1 && (
              <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto shrink-0">
                {product.images.slice(0, 5).map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(img.src)}
                    className={`relative h-16 w-16 sm:h-20 sm:w-20 aspect-square overflow-hidden rounded-xl border-2 transition shrink-0 ${
                      activeImage === img.src
                        ? "border-neutral-900"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || product.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Details ── */}
          <div className="space-y-6">

            {/* Vendor + Title */}
            <div className="space-y-1.5">
              {product.vendor && (
                <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                  {product.vendor}
                </p>
              )}
              <h1 className="text-2xl font-black tracking-tight text-neutral-900 sm:text-3xl">
                {product.title}
              </h1>
              {product.product_type && (
                <p className="text-sm text-neutral-400">{product.product_type}</p>
              )}
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="text-3xl font-black text-neutral-900">
                ₹{price.toLocaleString("en-IN")}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-lg text-neutral-400 line-through">
                    ₹{compareAt.toLocaleString("en-IN")}
                  </span>
                  <span className="rounded-full bg-red-50 px-2 py-0.5 text-sm font-bold text-red-500">
                    {discount}% off
                  </span>
                </>
              )}
            </div>

            {/* Color selector */}
            {colorOption && (
              <div>
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Color — <span className="normal-case font-normal text-neutral-900">{selectedColor}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {colorOption.values.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-full border px-4 py-1.5 text-sm transition ${
                        selectedColor === color
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-200 text-neutral-700 hover:border-neutral-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            {sizeOption && (
              <div>
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Size — <span className="normal-case font-normal text-neutral-900">{selectedSize}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizeOption.values.map((size) => {
                    const available = isSizeAvailable(size);
                    return (
                      <button
                        key={size}
                        onClick={() => available && setSelectedSize(size)}
                        disabled={!available}
                        className={`min-w-[3rem] rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                          selectedSize === size
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : available
                            ? "border-neutral-200 text-neutral-700 hover:border-neutral-400"
                            : "cursor-not-allowed border-neutral-100 text-neutral-300 line-through"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity + CTA */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center rounded-full border border-neutral-200">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-neutral-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-neutral-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700 sm:flex-initial"
              >
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { icon: Truck,        title: "Fast Delivery",   sub: "2–4 business days" },
                { icon: ShieldCheck,  title: "Secure Checkout", sub: "Protected payments" },
                { icon: RefreshCw,    title: "Easy Returns",    sub: "30-day policy" },
              ].map(({ icon: Icon, title, sub }) => (
                <div key={title} className="rounded-2xl border border-neutral-100 bg-neutral-50 p-3 text-center">
                  <Icon className="mx-auto mb-1.5 h-4 w-4 text-orange-500" />
                  <p className="text-[11px] font-semibold text-neutral-800">{title}</p>
                  <p className="text-[10px] text-neutral-400">{sub}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            {description && (
              <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  About this product
                </p>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </div>
            )}

            {/* Highlights */}
            <div className="space-y-2">
              {["Premium quality fabric", "Easy care — machine washable", "Designed for everyday comfort"].map(
                (h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-neutral-600">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-orange-500" />
                    {h}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
