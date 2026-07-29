"use client";

/**
 * /app/products/error.js — Error Boundary
 * ═════════════════════════════════════════
 * Next.js App Router special file.
 *
 * MUST be a Client Component ("use client") — required by Next.js.
 * Shown when an UNHANDLED error is thrown inside the route segment
 * (e.g. a network failure that escapes page.js try/catch).
 *
 * The `reset` prop is a function to re-render the segment (retry the fetch).
 *
 * Note: page.js already handles API errors gracefully with try/catch,
 * so this file acts as a safety net for unexpected runtime errors.
 */

import { useEffect } from "react";
import Link from "next/link";

/**
 * Error boundary component.
 *
 * @param {{ error: Error, reset: () => void }} props
 */
export default function Error({ error, reset }) {
  // Log error to console so developers can debug in production
  useEffect(() => {
    console.error("[ProductsPage Error]", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10">
      <div className="flex flex-col items-center rounded-2xl bg-red-50 px-8 py-20 text-center">

        {/* Icon */}
        <span className="text-5xl" role="img" aria-label="Warning">
          ⚠️
        </span>

        {/* Heading */}
        <h2 className="mt-5 text-xl font-black text-red-700">
          Something went wrong
        </h2>

        {/* Error message */}
        <p className="mt-2 max-w-sm text-sm text-red-500">
          {error?.message ?? "An unexpected error occurred."}
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          {/* Retry — re-renders the page segment (re-runs the server fetch) */}
          <button
            onClick={reset}
            className="rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Try again
          </button>

          {/* Go home — safe fallback */}
          <Link
            href="/"
            className="rounded-full border border-neutral-300 px-7 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-950"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
