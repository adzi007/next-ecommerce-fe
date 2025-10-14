import { create } from "zustand";
import type { Product } from "@/app/(main)/products/types";
// import { addToCartAPI } from "@/lib/api/cart";

interface CartItem extends Product {
  qty: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: async (product: Product) => {

    // Optimistic update (optional)
    // Call internal API route
      // const newItem = await addToCartAPI(product);

      // Update local store
      set((state) => ({
        items: [...state.items, { ...product, qty: 1 }],
      }));

    
  },
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clear: () => set({ items: [] }),
}));


