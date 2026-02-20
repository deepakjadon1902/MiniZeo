import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItemCard from "@/components/CartItemCard";

const Cart = () => {
  const { state, dispatch } = useCart();

  if (state.cartItems.length === 0) {
    return (
      <main className="container flex flex-col items-center justify-center py-20 text-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Your cart is empty
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Add some products to get started
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="container py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">
          Cart ({state.totalItems})
        </h1>
        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
          Clear All
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          {state.cartItems.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="h-fit rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Order Summary
          </h2>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Items ({state.totalItems})</span>
              <span>${state.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>
          <div className="mt-4 border-t border-border pt-4">
            <div className="flex justify-between text-base font-semibold text-foreground">
              <span>Total</span>
              <span>${state.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Checkout
          </button>
          <Link
            to="/"
            className="mt-3 flex items-center justify-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;
