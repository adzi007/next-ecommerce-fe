"use client"
import { Separator } from "@/components/ui/separator";
import PaginationProduct from "./PaginationProduct";
import { ProductCard } from "./product-card";
import { dummyProducts } from "@/data/products";
import { useProductFilterStore } from "../store/productFilter.store";
import { useEffect, useMemo } from "react";
import { useProducts } from "../hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "../types";
import { useSearchParams } from "next/navigation";


export function ProductList() {

  // const products = dummyProducts.data;
  const searchParams = useSearchParams();

  const {
    filterProduct,
    setCategory,
    setPriceMin,
    setPriceMax,
    setRating,
    setOrderBy,
    setPage,
  } = useProductFilterStore();

  useEffect(() => {
    const category = searchParams.get("category") || "";
    const orderBy = searchParams.get("orderBy") || "popular";
    const priceMin = Number(searchParams.get("priceMin")) || 0;
    const priceMax = Number(searchParams.get("priceMax")) || 1000;
    const rating = searchParams.get("rating")
      ? searchParams
          .get("rating")!
          .split(",")
          .map((r) => Number(r))
      : null;

    const page = Number(searchParams.get("page")) || 1; // 🔹 page param

    setCategory(category);
    setOrderBy(orderBy);
    setPriceMin(priceMin);
    setPriceMax(priceMax);
    setPage(page);

    if (rating) rating.forEach((r) => setRating(r));

  }, [searchParams]);

  const filters = useMemo(
    () => ({
      category: filterProduct.category,
      orderBy: filterProduct.orderBy,
      priceMin: filterProduct.priceMin,
      priceMax: filterProduct.priceMax,
      rating: filterProduct.rating,
      page: filterProduct.page,
    }),
    [filterProduct]
  );

  const { data, isLoading, isError, error } = useProducts(filters);

  if (isLoading) {
    return (
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="w-full h-64 rounded-lg" />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p className="text-red-500">Error: {(error as Error).message}</p>;
  }

  const products: Product[] = data?.products ?? [];

  return (

    <div className="flex flex-col gap-10 mb-8 w-full">

      <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

      <Separator />
      <PaginationProduct />

    </div>
    
  );
}
