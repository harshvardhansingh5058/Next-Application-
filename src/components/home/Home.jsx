import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedBanner from "@/components/home/FeaturedBanner";
import NewArrivals from "@/components/home/NewArrivals";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BestSellers from "@/components/home/BestSellers";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main>
      {/* 1. Hero — split-panel with CTA */}
      <Hero />



      {/* 2. Shop by Category — 4 cards */}
      <Categories />

      {/* 3. Featured Collection Banner */}
      <FeaturedBanner
        eyebrow="Featured Collection"
        title="The Summer Edit"
        subtitle="Lightweight fabrics. Clean silhouettes. Made for the season ahead."
        cta="Explore Collection"
        href="/women"
        imageSrc="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=80"
        imageAlt="Featured summer collection editorial"
        align="left"
        ctaStyle="white"
      />

      {/* 4. New Arrivals — 8 product grid */}
      <NewArrivals />

      {/* 5. Why Choose Us — 4 trust pillars */}
      <WhyChooseUs />

      {/* 6. Promotional Featured Banner */}
      <FeaturedBanner
        eyebrow="Exclusive Offer"
        title="Up to 50% Off Sale Items"
        subtitle="Limited time. Shop our handpicked sale selection before it's gone."
        cta="Shop Sale"
        href="/sale"
        imageSrc="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80"
        imageAlt="Season sale promotional banner"
        align="center"
        ctaStyle="orange"
      />

      {/* 7. Best Sellers — 8 product grid */}
      <BestSellers />

      {/* 8. Customer Testimonials — 3 cards */}
      <Testimonials />

      {/* 9. Newsletter signup */}
      <Newsletter />
    </main>
  );
}
