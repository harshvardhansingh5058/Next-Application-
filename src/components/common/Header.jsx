"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass, faUser, faBars, faXmark, faBagShopping, faChevronDown, faAngleRight, faTruckFast, faHeadset, faLocationDot,} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  Sheet, SheetContent, SheetClose,} from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { useSelector } from "react-redux";

const megaMenuData = {
  men: {
    categories: ["Running", "Sneakers", "Casual", "Basketball", "Training", "Boots", "Sandals"],
    collections: ["New Arrivals", "Best Sellers"],
    banner: {
      title: "Men's Running Elite",
      subtitle: "Engineered for your fastest mile.",
      cta: "Shop Men",
      href: "/men",
    },
  },
  women: {
    categories: ["Running", "Sneakers", "Casual", "Basketball", "Training", "Boots", "Sandals"],
    collections: ["New Arrivals", "Best Sellers"],
    banner: {
      title: "Women's Training Edit",
      subtitle: "Built to move with you.",
      cta: "Shop Women",
      href: "/women",
    },
  },
};

const navLinks = [
  { label: "Home", href: "/" },
  // { label: "Men", href: "/men", mega: "men" },
  // { label: "Women", href: "/women", mega: "women" },
  // { label: "Kids", href: "/kids" },
  // { label: "Brands", href: "/brands" },
  { label: "Sale", href: "/sale", highlight: true },
];

function slugify(value) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

function IconBadge({ count }) {
  return (
    <span className="absolute -right-1 -top-1 flex h-4 w-4">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
      <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[9px] font-bold leading-none text-white">
        {count}
      </span>
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getCartItems = useSelector((state) => state.cart.cartItems)
  const getWishlistItems = useSelector((state) => state.wishlist.wishlistItems)

  return (
    <header className="sticky top-0 z-50 w-full scroll-smooth">
      <div className="hidden bg-neutral-950 text-neutral-300 sm:block">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-2 text-[11px] tracking-wide lg:px-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faTruckFast} className="h-3 w-3 text-orange-500" />
              Free shipping on orders above ₹999
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <span className="font-semibold text-orange-500">Summer Sale</span>
              50% OFF sitewide
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/help" className="flex items-center gap-1.5 text-neutral-400 transition-colors hover:text-white">
              <FontAwesomeIcon icon={faHeadset} className="h-3 w-3" />
              Help
            </Link>
            <Link href="/contact" className="hidden text-neutral-400 transition-colors hover:text-white md:inline">
              Contact
            </Link>
            <Link href="/track-order" className="flex items-center gap-1.5 text-neutral-400 transition-colors hover:text-white">
              <FontAwesomeIcon icon={faLocationDot} className="h-3 w-3" />
              Track Order
            </Link>
          </div>
        </div>
      </div>

      <div
        className={[
          "relative w-full border-b transition-all duration-300",
          scrolled
            ? "border-neutral-200 bg-white/80 shadow-sm backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-950/80"
            : "border-transparent bg-white dark:bg-neutral-950",
        ].join(" ")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white">
              LINEA <span className="text-orange-600">.</span>
            </span>
          </Link>

          <nav className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:flex lg:-translate-x-1/2 lg:-translate-y-1/2">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.mega && setActiveMenu(link.mega)}
                >
                  <Link
                    href={link.href}
                    className={[
                      "group relative flex items-center gap-1 py-2 text-[13px] font-semibold uppercase tracking-wider transition-colors",
                      link.highlight
                        ? "text-orange-600 hover:text-orange-700"
                        : "text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white",
                    ].join(" ")}
                  >
                    {link.label}
                    {link.mega && (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={[
                          "h-2.5 w-2.5 transition-transform duration-300",
                          activeMenu === link.mega ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    )}
                    <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-orange-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4 sm:gap-5">
            <div className="hidden items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 transition-colors focus-within:border-neutral-400 lg:flex dark:border-neutral-700">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="h-3.5 w-3.5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search products"
                className="w-36 bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none dark:text-neutral-200"
              />
            </div>

            <button
              type="button"
              aria-label="Search"
              className="grid h-9 w-9 place-items-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 lg:hidden dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4 w-4" />
            </button>

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative hidden h-9 w-9 place-items-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 sm:grid dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <FontAwesomeIcon icon={faHeart} className="h-4 w-4" />
              <IconBadge count={getWishlistItems?.length || 0} />
            </Link>

            <Link
              href="/cart"
              aria-label="Cart"
              className="relative grid h-9 w-9 place-items-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <FontAwesomeIcon icon={faBagShopping} className="h-4 w-4" />
              <IconBadge count={getCartItems?.length || 0}  />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger 
                type="button"
                aria-label="Account"
                className="hidden h-9 w-9 place-items-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 sm:grid dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                <FontAwesomeIcon icon={faUser} className="h-4 w-4" />

              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/logout" className="text-red-600 focus:text-red-600">
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 lg:hidden dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <FontAwesomeIcon icon={faBars} className="h-4 w-4" />
            </button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetContent side="left" className="flex w-[85vw] max-w-sm flex-col gap-0 overflow-y-auto p-0 sm:max-w-sm">
                <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
                  <span className="text-xl font-black tracking-tight text-neutral-950 dark:text-white">
                    SOLEX<span className="text-orange-600">.</span>
                  </span>
                  <SheetClose 
                    type="button"
                    aria-label="Close menu"
                    className="grid h-8 w-8 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
                  </SheetClose>
                </div>

                <div className="border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
                  <div className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2.5 dark:border-neutral-700">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="h-3.5 w-3.5 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Search products"
                      className="w-full bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none dark:text-neutral-200"
                    />
                  </div>
                </div>

                <nav className="flex-1 overflow-y-auto px-5 py-4">
                  <ul className="space-y-1">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className={[
                              "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-wide transition-colors",
                              link.highlight
                                ? "text-orange-600"
                                : "text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800",
                            ].join(" ")}
                          >
                            {link.label}
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-3 text-neutral-300" />
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                    <h3 className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                      Shop by category
                    </h3>
                    <ul className="grid grid-cols-2 gap-1">
                      {[...megaMenuData.men.categories, ...megaMenuData.men.collections].map((cat) => (
                        <li key={cat}>
                          <SheetClose asChild>
                            <Link
                              href={`/category/${slugify(cat)}`}
                              className="block rounded-lg px-3 py-2 text-xs text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                            >
                              {cat}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>

                <div className="flex items-center gap-3 border-t border-neutral-200 px-5 py-4 dark:border-neutral-800">
                  <SheetClose >
                    <Link
                      href="/wishlist"
                      aria-label="Wishlist"
                      className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-neutral-200 text-neutral-700 dark:border-neutral-700 dark:text-neutral-200"
                    >
                      <FontAwesomeIcon icon={faHeart} className="h-4 w-4" />
                      <IconBadge count={getWishlistItems?.length || 0} />
                    </Link>
                  </SheetClose>
                  <SheetClose >
                    <Link
                      href="/cart"
                      aria-label="Cart"
                      className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-neutral-200 text-neutral-700 dark:border-neutral-700 dark:text-neutral-200"
                    >
                      <FontAwesomeIcon icon={faBagShopping} className="h-4 w-4" />
                      <IconBadge count={getCartItems?.length || 0} />
                    </Link>
                  </SheetClose>
                  <SheetClose >
                    <Link
                      href="/login"
                      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] dark:bg-white dark:text-neutral-950"
                    >
                      <FontAwesomeIcon icon={faUser} className="h-3.5 w-3.5" />
                      Login
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div
          className={[
            "absolute inset-x-0 top-full hidden border-b border-neutral-200 bg-white shadow-xl transition-all duration-300 ease-out lg:block dark:border-neutral-800 dark:bg-neutral-950",
            activeMenu ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
          ].join(" ")}
        >
          {activeMenu && (
            <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-10 px-10 py-10">
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {megaMenuData[activeMenu].categories.map((cat) => (
                    <li key={cat}>
                      <Link
                        href={`/${activeMenu}/${slugify(cat)}`}
                        className="text-sm text-neutral-700 transition-colors hover:text-orange-600 dark:text-neutral-300"
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Collections
                </h3>
                <ul className="space-y-3">
                  {megaMenuData[activeMenu].collections.map((col) => (
                    <li key={col}>
                      <Link
                        href={`/${activeMenu}/${slugify(col)}`}
                        className="text-sm text-neutral-700 transition-colors hover:text-orange-600 dark:text-neutral-300"
                      >
                        {col}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 overflow-hidden rounded-2xl bg-neutral-950">
                <div className="relative flex h-full flex-col justify-end gap-3 bg-gradient-to-br from-orange-600/90 via-neutral-950 to-neutral-950 p-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-orange-300">
                    Featured
                  </span>
                  <h4 className="text-2xl font-bold text-white">
                    {megaMenuData[activeMenu].banner.title}
                  </h4>
                  <p className="text-sm text-neutral-300">{megaMenuData[activeMenu].banner.subtitle}</p>
                  <Link
                    href={megaMenuData[activeMenu].banner.href}
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-950 transition-transform hover:scale-105"
                  >
                    {megaMenuData[activeMenu].banner.cta}
                    <FontAwesomeIcon icon={faAngleRight} className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}