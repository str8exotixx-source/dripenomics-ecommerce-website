import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Minus, Plus, X, Copy, Check } from "lucide-react";
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

const bankDetails = {
  bank: "Capitec",
  accountHolder: "MR ORATILE LERUMO",
  accountType: "Savings Account",
  accountNumber: "2485109083",
  branchCode: "470010",
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState<"ZAR" | "USD">("ZAR");
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

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

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopiedField(null), 2000);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 md:pt-36 pb-8 md:pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="brand-title text-2xl md:text-4xl lg:text-5xl text-center">Your Cart</h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="max-w-md mx-auto text-center py-12 md:py-16">
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">Your cart is currently empty.</p>
              <Link to="/shop" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            /* Cart Items */
            <div className="max-w-4xl mx-auto">
              {/* Currency Toggle */}
              <div className="flex justify-end mb-4 md:mb-6">
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
                    className="flex gap-4 md:gap-6 py-4 md:py-6 border-b border-border"
                  >
                    {/* Image */}
                    <div className="w-20 h-28 md:w-24 md:h-32 bg-brand-cream flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-medium tracking-wide uppercase text-xs md:text-sm truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground mt-1">
                            Size: {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:opacity-60 transition-opacity flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="flex justify-between items-end mt-3 md:mt-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 md:p-2 hover:bg-secondary transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 md:px-4 text-xs md:text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 md:p-2 hover:bg-secondary transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-medium text-sm md:text-base">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground text-sm md:text-base">Subtotal</span>
                  <span className="font-medium text-sm md:text-base">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-8">
                  Shipping calculated at checkout.
                </p>

                <button 
                  onClick={() => setShowPaymentDetails(true)}
                  className="w-full btn-primary mb-4"
                >
                  Proceed to Checkout
                </button>
                <Link
                  to="/shop"
                  className="block text-center text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Payment Details Modal */}
      {showPaymentDetails && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background max-w-md w-full p-6 md:p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="brand-title text-lg md:text-xl">Payment Details</h2>
              <button 
                onClick={() => setShowPaymentDetails(false)}
                className="p-1 hover:opacity-60"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Please transfer the total amount to the following account:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Bank</p>
                  <p className="font-medium text-sm">{bankDetails.bank}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.bank, "bank")}
                  className="p-2 hover:bg-secondary rounded transition-colors"
                >
                  {copiedField === "bank" ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Account Holder</p>
                  <p className="font-medium text-sm">{bankDetails.accountHolder}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.accountHolder, "holder")}
                  className="p-2 hover:bg-secondary rounded transition-colors"
                >
                  {copiedField === "holder" ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Account Type</p>
                  <p className="font-medium text-sm">{bankDetails.accountType}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.accountType, "type")}
                  className="p-2 hover:bg-secondary rounded transition-colors"
                >
                  {copiedField === "type" ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Account Number</p>
                  <p className="font-medium text-sm">{bankDetails.accountNumber}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.accountNumber, "number")}
                  className="p-2 hover:bg-secondary rounded transition-colors"
                >
                  {copiedField === "number" ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Branch Code</p>
                  <p className="font-medium text-sm">{bankDetails.branchCode}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.branchCode, "branch")}
                  className="p-2 hover:bg-secondary rounded transition-colors"
                >
                  {copiedField === "branch" ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div className="bg-secondary p-4 mb-6">
              <p className="text-xs text-muted-foreground mb-1">Total Amount</p>
              <p className="font-medium text-lg">{formatPrice(subtotal)}</p>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Use your order number as the payment reference. Your order will be processed once payment is confirmed.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default Cart;