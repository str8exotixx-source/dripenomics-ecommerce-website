import { Link } from "react-router-dom";
import ProductCard from "../shop/ProductCard";
import productBack from "@/assets/product-prelude-back.jpg";
import productFront from "@/assets/product-prelude-front.jpg";

// Sample products - replace with real data
const featuredProducts = [
  {
    id: "1",
    name: "AW25 : The Prelude T-Shirt",
    price: 845,
    currency: "ZAR",
    images: [productBack, productFront],
    soldOut: false,
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "City Stories Signature Tee",
    price: 575,
    currency: "ZAR",
    images: [productFront, productBack],
    soldOut: false,
    sizes: ["S", "M", "L"],
  },
];

const FeaturedCollection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="brand-subtitle text-muted-foreground mb-4">New In</p>
          <h2 className="brand-title text-3xl md:text-4xl mb-6">Featured Collection</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover our latest pieces from the City Stories capsule — where cultural heritage meets contemporary streetwear.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link to="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
