import { Product } from "../types";

const BASE_URL = "https://dummyjson.com";

export async function fetchProducts(params?: Record<string, any>): Promise<{
  products: Product[];
  total: number;
}> {
  const searchParams = new URLSearchParams(params as Record<string, string>);

  const res = await fetch(`${BASE_URL}/products?${searchParams.toString()}`, {
    cache: "no-store", // to ensure fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
