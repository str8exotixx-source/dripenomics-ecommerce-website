import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  images: string[];
  soldOut?: boolean;
  sizes?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number, currency: string) => {
    if (currency === "ZAR") {
      return `R ${price.toFixed(2)} ZAR`;
    }
    return `$${(price / 18).toFixed(2)} USD`;
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      {/* Image Container */}
      <div
        className="relative aspect-[3/4] bg-brand-cream overflow-hidden mb-4"
        onMouseEnter={() => product.images.length > 1 && setCurrentImageIndex(1)}
        onMouseLeave={() => setCurrentImageIndex(0)}
      >
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Sold Out Badge */}
        {product.soldOut && (
          <span className="absolute bottom-4 left-4 bg-background text-foreground px-4 py-2 text-xs tracking-widest uppercase">
            Sold Out
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="brand-subtitle text-muted-foreground text-xs">Dripenomics</p>
        <h3 className="font-medium tracking-wide uppercase text-sm">{product.name}</h3>
        <p className="text-sm text-muted-foreground">
          {formatPrice(product.price, product.currency)}
        </p>

        {/* Size Preview */}
        {product.sizes && (
          <div className="flex gap-2 pt-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                className={cn(
                  "text-xs text-muted-foreground",
                  product.soldOut && "line-through"
                )}
              >
                {size}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
