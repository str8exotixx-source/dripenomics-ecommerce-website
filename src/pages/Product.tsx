import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import productBack from "@/assets/product-prelude-back.jpg";
import productFront from "@/assets/product-prelude-front.jpg";

// Sample product data - replace with real data
const sampleProduct = {
  id: "1",
  name: "AW25 : The Prelude T-Shirt",
  price: 845,
  currency: "ZAR",
  images: [productBack, productFront],
  soldOut: false,
  sizes: ["XS", "S", "M", "L", "XL"],
  description: "In a foreword to the city, itself, this collection bridges seemingly disparate elements into one cohesive tapestry, illustrating the duality of our existence. Commemorating the 207th anniversary of our late great grandmother's blue rose that blossomed in a garden filled with concrete.",
  details: [
    "100% Premium Cotton",
    "Heavyweight 240gsm",
    "Oversized fit",
    "Screen printed graphics",
    "Made in South Africa"
  ],
  care: [
    "Machine wash cold",
    "Do not bleach",
    "Tumble dry low",
    "Iron on low heat",
    "Do not dry clean"
  ]
};

const Product = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currency, setCurrency] = useState<"ZAR" | "USD">("ZAR");

  const product = sampleProduct; // Replace with actual product fetch

  const formatPrice = (price: number) => {
    if (currency === "USD") {
      return `$${(price / 18).toFixed(2)} USD`;
    }
    return `R ${price.toFixed(2)} ZAR`;
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    toast.success(`Added ${product.name} (${selectedSize}) to cart`);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-28 pb-4">
        <div className="container mx-auto px-6">
          <nav className="text-sm text-muted-foreground">
            <Link to="/shop" className="hover:text-foreground transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Content */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-[3/4] bg-brand-cream overflow-hidden">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Image Dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-colors",
                          index === currentImageIndex ? "bg-foreground" : "bg-border"
                        )}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Image Counter */}
              <div className="text-center mt-2 text-sm text-muted-foreground">
                {currentImageIndex + 1}/{product.images.length}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:pt-8">
              <p className="brand-subtitle text-muted-foreground mb-2">Dripenomics</p>
              <h1 className="brand-title text-2xl md:text-3xl mb-6">{product.name}</h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-2">
                <span className="text-xl">{formatPrice(product.price)}</span>
                {product.soldOut && (
                  <span className="px-3 py-1 bg-secondary text-xs tracking-widest uppercase">
                    Sold Out
                  </span>
                )}
              </div>

              {/* Currency Toggle */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setCurrency("ZAR")}
                  className={cn(
                    "text-xs tracking-wider transition-opacity",
                    currency === "ZAR" ? "opacity-100 underline" : "opacity-50"
                  )}
                >
                  ZAR
                </button>
                <span className="text-muted-foreground">/</span>
                <button
                  onClick={() => setCurrency("USD")}
                  className={cn(
                    "text-xs tracking-wider transition-opacity",
                    currency === "USD" ? "opacity-100 underline" : "opacity-50"
                  )}
                >
                  USD
                </button>
              </div>

              <p className="text-sm text-muted-foreground mb-2">
                Shipping calculated at checkout.
              </p>

              {/* Size Selector */}
              <div className="mb-8">
                <label className="brand-subtitle text-xs mb-3 block">Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={product.soldOut}
                      className={cn(
                        "min-w-[50px] px-4 py-3 border text-sm tracking-wider transition-all",
                        selectedSize === size
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground",
                        product.soldOut && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="brand-subtitle text-xs mb-3 block">Quantity</label>
                <div className="flex items-center border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                    disabled={product.soldOut}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                    disabled={product.soldOut}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={product.soldOut}
                className={cn(
                  "w-full btn-primary mb-8",
                  product.soldOut && "opacity-50 cursor-not-allowed"
                )}
              >
                {product.soldOut ? "Sold Out" : "Add to Cart"}
              </button>

              {/* Description */}
              <div className="border-t border-border pt-8">
                <p className="text-muted-foreground text-justified mb-8">
                  {product.description}
                </p>

                {/* Details */}
                <div className="mb-6">
                  <h3 className="brand-subtitle text-xs mb-3">Details</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {product.details.map((detail, index) => (
                      <li key={index}>— {detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Care Instructions */}
                <div>
                  <h3 className="brand-subtitle text-xs mb-3">Care</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {product.care.map((instruction, index) => (
                      <li key={index}>— {instruction}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Product;
