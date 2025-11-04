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
}

export async function fetchProducts(params: FetchProductsParams = {}): Promise<{
  products: Product[];
  total: number;
}> {

  

  const {
    search,
    category,
    orderBy,
    priceMin,
    priceMax,
    rating,
    page = 1,
    limit = 12,
  } = params;

  const skip = Math.max(0, (page - 1) * limit);

  // Determine base endpoint
  let endpoint = `${BASE_URL}/products`;

  if (search) {
    endpoint = `${BASE_URL}/products/search?q=${encodeURIComponent(search)}`;
  } else if (category) {
    endpoint = `${BASE_URL}/products/category/${encodeURIComponent(category)}`;
  }

  // Add pagination params
  const url = new URL(endpoint);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("skip", String(skip));

  const res = await fetch(url.toString(), { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  console.log("endpointsss >>> ", url.toString());
  console.log("dataFetch >>>> ", data);
  

  // 🔹 Local filtering (since DummyJSON doesn’t support query filtering)
  // let filteredProducts: Product[] = data.products;

  // if (priceMin !== undefined) {
  //   filteredProducts = filteredProducts.filter((p) => p.price >= priceMin);
  // }

  // if (priceMax !== undefined) {
  //   filteredProducts = filteredProducts.filter((p) => p.price <= priceMax);
  // }

  // if (rating && rating.length > 0) {
  //   filteredProducts = filteredProducts.filter((p) =>
  //     rating.includes(Math.floor(p.rating))
  //   );
  // }

  // // 🔹 Optional sorting
  // if (orderBy === "cheapest") {
  //   filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  // } else if (orderBy === "expensive") {
  //   filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  // } else if (orderBy === "rating") {
  //   filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  // }

  return {
    products: data.products,
    total: data.total,
  };
}
