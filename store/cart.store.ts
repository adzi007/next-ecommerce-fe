import { create } from "zustand";
import type { Product } from "@/app/products/types";
import { addToCartAPI } from "@/lib/api/cart";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  // addItem: (product) =>
  //   set((state) => {

  //     const existing = state.items.find((item) => item.id === product.id);
  //     if (existing) {
  //       return {
  //         items: state.items.map((item) =>
  //           item.id === product.id
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         ),
  //       };
  //     }
  //     return { items: [...state.items, { ...product, quantity: 1 }] };
      
  //   }),
  addItem: async (product: Product) => {
    // Optimistic update (optional)
    set((state) => ({
      items: [...state.items, { ...product, quantity: 1 }],
    }));

    try {
      await addToCartAPI(product); // sync to backend
    } catch (err) {
      console.error("Failed to add to cart:", err);
      // Rollback or show error message if needed
      set((state) => ({
        items: state.items.filter((item) => item.id !== product.id),
      }));
    }
  },
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clear: () => set({ items: [] }),
}));
