import { CategoryProduct } from "../types";

const BASE_URL = "https://dummyjson.com";

export async function fetchCategories(): Promise<{ category: CategoryProduct[] }> {

    const res = await fetch(BASE_URL + "/products/categories", { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return {
        category: data
    }
}

