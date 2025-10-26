import { dummyCart } from "@/data/cart";

export async function getCartUser() {
  return new Promise((resolve) => setTimeout(() => resolve(dummyCart.data), 300));
}