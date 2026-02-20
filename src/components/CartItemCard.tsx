import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart, type CartItem as CartItemType } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItemCard = ({ item }: CartItemProps) => {
  const { dispatch } = useCart();

  return (
    <div className="flex gap-4 rounded-lg border border-border bg-card p-4">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="h-20 w-20 flex-shrink-0 rounded-md object-cover"
      />
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              ${item.price.toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
            className="text-muted-foreground transition-colors hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
            className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="w-8 text-center text-sm font-medium text-foreground">
            {item.quantity}
          </span>
          <button
            onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
            className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
