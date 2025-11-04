import { Product } from "../types";

const BASE_URL = "https://dummyjson.com";

interface FetchProductsParams {
  search?: string;
  category?: string;
  orderBy?: string;
  priceMin?: number;
  priceMax?: number;
  rating?: number[] | null;
  page?: number;
  limit?: number;
  skip?: number;
}

export async function fetchProducts(params: FetchProductsParams = {}): Promise<{
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}> {


  const { search, category, skip, limit = 12 } = params;

  // const skip = Math.max(0, (page - 1) * limit);

  // Determine base endpoint
  let endpoint = `${BASE_URL}/products`;

  if (search) {
    endpoint = `${BASE_URL}/products/search?q=${encodeURIComponent(search)}`;
  } else if (category) {
    endpoint = `${BASE_URL}/products/category/${encodeURIComponent(category)}`;
  }



  // Add pagination params
  const url = new URL(endpoint);

  url.searchParams.set("select", "title,price,rating,category,thumbnail")

  url.searchParams.set("limit", String(limit));
  url.searchParams.set("skip", String(skip));
  

  const res = await fetch(url.toString(), { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();


  return {
    products: data.products,
    total: data.total,
    skip: data.skip,
    limit: data.limit
  };
}
