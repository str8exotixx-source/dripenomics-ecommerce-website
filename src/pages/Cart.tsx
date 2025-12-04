import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Minus, Plus, X } from "lucide-react";
import { toast } from "sonner";

interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  size: string;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState<"ZAR" | "USD">("ZAR");

  const formatPrice = (price: number) => {
    if (currency === "USD") {
      return `$${(price / 18).toFixed(2)}`;
    }
    return `R ${price.toFixed(2)}`;
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="brand-title text-4xl md:text-5xl text-center">Your Cart</h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="max-w-md mx-auto text-center py-16">
              <p className="text-muted-foreground mb-8">Your cart is currently empty.</p>
              <Link to="/shop" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            /* Cart Items */
            <div className="max-w-4xl mx-auto">
              {/* Currency Toggle */}
              <div className="flex justify-end mb-6">
                <div className="flex gap-2 text-sm">
                  <button
                    onClick={() => setCurrency("ZAR")}
                    className={currency === "ZAR" ? "underline" : "text-muted-foreground"}
                  >
                    ZAR
                  </button>
                  <span className="text-muted-foreground">/</span>
                  <button
                    onClick={() => setCurrency("USD")}
                    className={currency === "USD" ? "underline" : "text-muted-foreground"}
                  >
                    USD
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="border-t border-border">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-6 py-6 border-b border-border"
                  >
                    {/* Image */}
                    <div className="w-24 h-32 bg-brand-cream flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium tracking-wide uppercase text-sm">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Size: {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:opacity-60 transition-opacity"
                          aria-label="Remove item"
                        >
                          <X size={18} />
                        </button>
                      </div>

                      <div className="flex justify-between items-end mt-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-4 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8">
                  Shipping calculated at checkout.
                </p>

                <button className="w-full btn-primary mb-4">
                  Proceed to Checkout
                </button>
                <Link
                  to="/shop"
                  className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Cart;
