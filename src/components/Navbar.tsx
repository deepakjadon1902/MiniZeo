import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { state } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
          Velora Cart
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <ShoppingCart className="h-5 w-5" />
          {state.totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cart-badge text-[11px] font-semibold text-cart-badge-foreground">
              {state.totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
