import React, { createContext, useContext, useReducer, useEffect, type ReactNode } from "react";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

const calcTotals = (items: CartItem[]) => ({
  totalItems: items.reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newItems: CartItem[];

  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.cartItems.find((i) => i.id === action.payload.id);
      newItems = exists
        ? state.cartItems.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.cartItems, { ...action.payload, quantity: 1 }];
      break;
    }
    case "REMOVE_FROM_CART":
      newItems = state.cartItems.filter((i) => i.id !== action.payload);
      break;
    case "INCREASE_QUANTITY":
      newItems = state.cartItems.map((i) =>
        i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
      );
      break;
    case "DECREASE_QUANTITY":
      newItems = state.cartItems
        .map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0);
      break;
    case "CLEAR_CART":
      newItems = [];
      break;
    case "LOAD_CART":
      newItems = action.payload;
      break;
    default:
      return state;
  }

  return { cartItems: newItems, ...calcTotals(newItems) };
};

const initialState: CartState = { cartItems: [], totalItems: 0, totalPrice: 0 };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => undefined });

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("velora-cart");
      if (saved) {
        dispatch({ type: "LOAD_CART", payload: JSON.parse(saved) });
      }
    } catch {}
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("velora-cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
