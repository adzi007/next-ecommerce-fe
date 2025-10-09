import { Product } from "@/app/products/types";
import { externalApi } from "./index"; // use external backend API

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

export async function getCartAPI() {
  const res = await externalApi.get("/cart");
  return res.data;
}