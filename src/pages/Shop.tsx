import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import productBack from "@/assets/product-prelude-back.jpg";
import productFront from "@/assets/product-prelude-front.jpg";
import perfectShirt1 from "@/assets/perfect-shirt-1.jpg";
import perfectShirt2 from "@/assets/perfect-shirt-2.jpg";

// Product data with full descriptions
const allProducts = [
  {
    id: "1",
    name: "AW25 : The Prelude T-Shirt",
    price: 845,
    currency: "ZAR",
    images: [productBack, productFront],
    soldOut: false,
    sizes: ["XS", "S", "M", "L"],
    collection: "City Stories",
    description: "A foreword to the City Stories capsule — depicting the story of a blue rose that blooms amongst wilted roses. We pay homage to the journey of creators who defy conventional norms and blueprint their dreams.",
    details: [
      "100% Comb Cotton",
      "240 gsm",
      "High Crew Neck"
    ],
    care: [
      "Cold wash inside out (gentle cycle)",
      "Do not bleach or Use fabric softener",
      "Line dry in shade or Tumble dry low",
      "Iron on reverse side (low heat only)",
      "Avoid direct contact with print",
      "Store folded or On soft hangers"
    ]
  },
  {
    id: "2",
    name: "SS23 : The Perfect Shirt",
    price: 575,
    currency: "ZAR",
    images: [perfectShirt1, perfectShirt2],
    soldOut: false,
    sizes: ["XS", "S", "M", "L"],
    collection: "Collectors Edition",
    description: "A sequel to the Collective Economy — this t-shirt embodies a contemporary minimalistic approach. It is a collectors edition known as the Perfect Shirt — due to its signature cropped silhouette.",
    details: [
      "100% Cotton",
      "180 gsm",
      "Classic Crew Neck"
    ],
    care: [
      "Cold wash inside out (gentle cycle)",
      "Do not bleach or Use fabric softener",
      "Line dry in shade or Tumble dry low",
      "Iron on reverse side (low heat only)",
      "Avoid direct contact with print",
      "Store folded or On soft hangers"
    ]
  },
];

const Shop = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="brand-subtitle text-muted-foreground mb-4">Shop</p>
            <h1 className="brand-title text-4xl md:text-5xl mb-6">Catalogue</h1>
            <p className="text-muted-foreground">
              Welcome to our catalogue — a curated collection designed to inspire and connect you with what matters most — yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm tracking-wider uppercase hover:opacity-60 transition-opacity"
            >
              <SlidersHorizontal size={16} />
              Filter and Sort
            </button>
            <span className="text-sm text-muted-foreground">
              {allProducts.length} products
            </span>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-6 pb-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="brand-subtitle text-xs mb-2 block">Sort By</label>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none bg-secondary px-4 py-3 pr-10 text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="brand-subtitle text-xs mb-2 block">Collection</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-secondary px-4 py-3 pr-10 text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground">
                    <option value="">All Collections</option>
                    <option value="city-stories">City Stories</option>
                    <option value="collectors-edition">Collectors Edition</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="brand-subtitle text-xs mb-2 block">Size</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-secondary px-4 py-3 pr-10 text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-foreground">
                    <option value="">All Sizes</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {allProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products found.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Shop;
