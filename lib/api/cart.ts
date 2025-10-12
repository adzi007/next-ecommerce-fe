import { Product } from "@/app/(main)/products/types"; 
import { externalApi, internalApi } from "./index"; // use external backend API
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export async function addToCartAPI(product: Product) {
  
  const res = await fetch("/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to add to cart");
  }

  return res.json();
}

export function useAddToCart(options?: UseMutationOptions<any, Error, Product>) {
  return useMutation({
    mutationFn: async (product: Product) => {
      const { data } = await internalApi.post("/cart", { product });
      return data;
    },
    ...options,
  });
}

// lorem ipsum dolor asit amet

export async function getCartAPI() {
  const res = await externalApi.get("/cart");
  return res.data;
}