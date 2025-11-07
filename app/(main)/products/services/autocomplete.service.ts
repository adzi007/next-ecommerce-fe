import { Product } from "../types";

const BASE_URL = "https://dummyjson.com";

export async function getAutocompleteSuggestions(query: string): Promise<string[]> {

  const res = await fetch(BASE_URL + `/products/search?q=${query}&select=title&limit=10`, { cache: "no-store" });

  if (!res.ok) {
        throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  const suggestions: string[] = []

  data.products.map( (item: any) => suggestions.push(item.title.toLowerCase()))

  return suggestions

}