"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    // In production, wire this to your email service
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-500">
            Stay in the Loop
          </p>

          {/* Heading */}
          <h2 className="max-w-lg text-2xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get Early Access to New Drops
          </h2>

          {/* Subtext */}
          <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
            Subscribe to the LINEA newsletter and be the first to know about
            new collections, exclusive offers, and style tips.
          </p>

          {/* Form */}
          {submitted ? (
            <div className="mt-10 flex items-center gap-3 rounded-full bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm">
              <CheckCircle className="h-5 w-5 text-orange-500" />
              You&apos;re on the list — welcome to LINEA!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                id="newsletter-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="flex-1 rounded-full bg-white/10 px-6 py-4 text-sm text-white placeholder:text-neutral-500 outline-none ring-1 ring-white/10 transition-all focus:ring-orange-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-orange-500 hover:gap-3"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          {/* Fine print */}
          <p className="mt-5 text-[11px] text-neutral-600">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
