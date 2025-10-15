import { create } from "zustand";
import type { Product } from "@/app/(main)/products/types";

interface CartItem extends Product {
  // id: number;
  // name: string;
  // slug: string;
  // priceSell: number;
  // image: string;
  qty: number;

}

interface CartStore {
  items: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (id: number) => void;
  clear: () => void;
  update: (id: number, updateQty: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: async (product: Product) => {
    set((state) => {

      const existedProduct = state.items.find((item) => item.id === product.id)
      // console.log("existedProduct >>> ", existedProduct);      

      if(existedProduct){

        const updatedCart = state.items.map((item) => {
          return item.id == product.id ? { ...item, qty: item.qty + 1 } : item
        })

        return { items: updatedCart }
      }
      return {
        items: [...state.items, { ...product, qty: 1 }]
      }
    })
  },
  removeItem: (id) => { 
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })) 
  },

  clear: () => set({ items: [] }),

  update: (id, updateQty) => {

    set((state) => {

      return {
        items: state.items.map((item) => {
          if(item.id == id) {
            return { ...item, qty:updateQty }
          }else{
            return item
          }
        })
      }

    })
    
  }

}));


