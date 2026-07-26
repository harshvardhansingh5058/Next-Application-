import { BadgeCheck, ChevronRight, Heart, Minus, Plus, RefreshCw, ShieldCheck, Star, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProductDetailPage() {
  return (
    <main className="flex-1 bg-background">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>Home</span>
          <ChevronRight className="size-4" />
          <span>Men</span>
          <ChevronRight className="size-4" />
          <span className="text-foreground">Signature Utility Shirt</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-muted/40 p-3 shadow-sm">
              <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1000"><rect width="100%" height="100%" fill="#f3f4f6"/><rect x="130" y="120" width="640" height="760" rx="42" fill="#111827"/><rect x="200" y="210" width="500" height="200" rx="24" fill="#f9fafb"/><rect x="220" y="460" width="220" height="240" rx="24" fill="#1f2937"/><rect x="460" y="460" width="220" height="240" rx="24" fill="#374151"/></svg>')}`}
                alt="Signature Utility Shirt"
                className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[520px] lg:h-[640px]"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="220"><rect width="100%" height="100%" fill="#f3f4f6"/><rect x="30" y="30" width="240" height="160" rx="20" fill="#111827"/></svg>')}`}
                    alt={`Product thumbnail ${item}`}
                    className="h-24 w-full object-cover sm:h-28"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <BadgeCheck className="size-4" />
                New arrival
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Signature Utility Shirt
              </h1>
              <p className="text-base leading-7 text-muted-foreground">
                A refined everyday staple built for long days, sharp layering, and effortless movement.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-foreground">
                <Star className="size-4 fill-amber-400 text-amber-400" />
                4.9 · 248 reviews
              </div>
              <span className="text-sm text-muted-foreground">Free express shipping</span>
            </div>

            <div className="space-y-2">
              <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Price</div>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-semibold text-foreground">$128</span>
                <span className="text-lg text-muted-foreground line-through">$160</span>
              </div>
            </div>

            <Card className="border-border/70 bg-card/90">
              <CardContent className="space-y-5 p-5 sm:p-6">
                <div>
                  <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Color</div>
                  <div className="flex flex-wrap gap-3">
                    <button type="button" className="flex items-center gap-2 rounded-full border border-primary bg-primary/5 px-3 py-2 text-sm">
                      <span className="size-4 rounded-full bg-slate-900" />
                      Midnight
                    </button>
                    <button type="button" className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm">
                      <span className="size-4 rounded-full bg-amber-100" />
                      Sand
                    </button>
                    <button type="button" className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm">
                      <span className="size-4 rounded-full bg-emerald-800" />
                      Olive
                    </button>
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Size</div>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" className="min-w-12 rounded-full border border-primary bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                      M
                    </button>
                    <button type="button" className="min-w-12 rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground">
                      XS
                    </button>
                    <button type="button" className="min-w-12 rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground">
                      S
                    </button>
                    <button type="button" className="min-w-12 rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground">
                      L
                    </button>
                    <button type="button" className="min-w-12 rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground">
                      XL
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center rounded-full border border-border bg-background p-1">
                    <button type="button" className="rounded-full p-2 transition hover:bg-muted">
                      <Minus className="size-4" />
                    </button>
                    <span className="min-w-10 text-center text-sm font-semibold">1</span>
                    <button type="button" className="rounded-full p-2 transition hover:bg-muted">
                      <Plus className="size-4" />
                    </button>
                  </div>
                  <Button size="lg" className="flex-1 sm:flex-initial">Add to bag</Button>
                  <Button variant="outline" size="icon" aria-label="Save item">
                    <Heart className="size-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background p-4">
                <Truck className="mb-2 size-5 text-primary" />
                <div className="text-sm font-semibold">Fast delivery</div>
                <div className="text-sm text-muted-foreground">Arrives in 2–4 days</div>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <ShieldCheck className="mb-2 size-5 text-primary" />
                <div className="text-sm font-semibold">Secure checkout</div>
                <div className="text-sm text-muted-foreground">Protected payments</div>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <RefreshCw className="mb-2 size-5 text-primary" />
                <div className="text-sm font-semibold">Easy returns</div>
                <div className="text-sm text-muted-foreground">30-day exchange policy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>Why you’ll love it</CardTitle>
              <CardDescription>Designed to feel polished from morning errands to evening plans.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                'Premium lightweight fabric with breathable comfort',
                'Tailored fit for everyday wear and travel',
                'Thoughtful pockets and durable stitching',
              ].map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 rounded-2xl bg-muted/50 p-3 text-sm text-foreground">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{highlight}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>Product details</CardTitle>
              <CardDescription>Selected for comfort, versatility, and everyday durability.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: 'Material', value: 'Recycled cotton blend' },
                { label: 'Care', value: 'Machine wash cold' },
                { label: 'Origin', value: 'Designed in London' },
              ].map((spec) => (
                <div key={spec.label} className="flex items-center justify-between rounded-2xl border border-border px-4 py-3 text-sm">
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-foreground">{spec.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">You may also like</h2>
              <p className="text-sm text-muted-foreground">Complete your look with these favorites.</p>
            </div>
            <Button variant="link" className="px-0 text-sm">
              View all
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: 'Everyday Overshirt', price: '$89', accent: 'from-slate-900 to-slate-600' },
              { name: 'Travel Tote', price: '$74', accent: 'from-amber-500 to-orange-600' },
              { name: 'Layered Knit Set', price: '$112', accent: 'from-emerald-700 to-lime-600' },
            ].map((product) => (
              <Card key={product.name} className="border-border/70 overflow-hidden">
                <div className={`h-40 bg-gradient-to-br ${product.accent}`} />
                <CardContent className="flex items-end justify-between gap-3 p-4">
                  <div>
                    <div className="font-semibold text-foreground">{product.name}</div>
                    <div className="text-sm text-muted-foreground">Crafted essentials</div>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{product.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
