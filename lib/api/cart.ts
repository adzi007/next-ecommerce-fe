import { Product } from "@/app/products/types";
import { externalApi } from "./index"; // use external backend API

export async function addToCartAPI(product: Product) {
  const res = await externalApi.post("/cart", { product });
  return res.data;
}

export async function getCartAPI() {
  const res = await externalApi.get("/cart");
  return res.data;
}