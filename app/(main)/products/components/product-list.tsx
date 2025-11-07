"use client"
import { Separator } from "@/components/ui/separator";
import PaginationProduct from "./PaginationProduct";
import { ProductCard } from "./product-card";
// import { dummyProducts } from "@/data/products";
import { useProductFilterStore } from "../store/productFilter.store";
import { useEffect, useMemo } from "react";
import { useProducts } from "../hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "../types";
import { useSearchParams } from "next/navigation";
import { usePaginationProductStore } from "../store/productPagination.store";


export function ProductList() {

  const searchParams = useSearchParams();
  const { setCategory, setPriceMin, setPriceMax, setRating, setOrderBy, setPage, setSearchKeywords } = useProductFilterStore();
  const { setPagination } = usePaginationProductStore()

  useEffect(() => {
    // Get params only once from URL
    const category = searchParams.get("category");
    const orderBy = searchParams.get("orderBy");
    const priceMin = searchParams.get("priceMin");
    const priceMax = searchParams.get("priceMax");
    const rating = searchParams.get("rating");
    const page = searchParams.get("page");
    const search = searchParams.get("search");

    // Only update Zustand if the param actually exists
    if (category) setCategory(category);
    if (orderBy) setOrderBy(orderBy);
    if (priceMin) setPriceMin(Number(priceMin));
    if (priceMax) setPriceMax(Number(priceMax));
    if (page) setPage(Number(page));
    if (rating) {
      const ratingArr = rating.split(",").map((r) => Number(r));
      ratingArr.forEach((r) => setRating(r));
    }
    if(search) setSearchKeywords(search)
  }, []); // 🔹 Run only once on mount

  // Filters come purely from the URL-based state
  const filters = useMemo(
    () => ({
      category: searchParams.get("category") || "",
      orderBy: searchParams.get("orderBy") || "popular",
      priceMin: Number(searchParams.get("priceMin")) || 0,
      priceMax: Number(searchParams.get("priceMax")) || 1000,
      rating: searchParams.get("rating")
        ? searchParams
            .get("rating")!
            .split(",")
            .map((r) => Number(r))
        : null,
      page: Number(searchParams.get("page")) || 1,
      search: searchParams.get("search") || "",
    }),
    [searchParams]
  );  

  const { data, isLoading, isError, error, isSuccess } = useProducts(filters);

  useEffect(() => {
    if (!isSuccess || !data) return;

    setPagination((prev) => {
      if (
        prev &&
        prev.limit === 12 &&
        prev.skip === data.skip &&
        prev.total === data.total
      ) {
        return prev; // no change, skip update
      }

      return {
        limit: 12,
        skip: data.skip ?? 0,
        total: data.total ?? 0,
      };
    });
  }, [isSuccess, data, setPagination]);
  

  // const { data, isLoading, isError, error } = useProducts(filters);

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


  // useEffect(() => {
  //   if (!isSuccess || !data) return;

  //   setPagination((prev) => {
  //     if (
  //       prev &&
  //       prev.limit === data.limit &&
  //       prev.skip === data.skip &&
  //       prev.total === data.total
  //     ) {
  //       return prev; // no change, skip update
  //     }

  //     return {
  //       limit: data.limit ?? 0,
  //       skip: data.skip ?? 0,
  //       total: data.total ?? 0,
  //     };
  //   });
  // }, [isSuccess, data, setPagination]);


  // useEffect(() => {
  //   if (!isSuccess || !data) return;

  //   // Avoid unnecessary updates
  //   setPagination((prev) => {
  //     if (
  //       prev &&
  //       prev.limit === data.limit &&
  //       prev.skip === data.skip &&
  //       prev.total === data.total
  //     ) {
  //       return prev;
  //     }
  //     return {
  //       limit: data.limit ?? 0,
  //       skip: data.skip ?? 0,
  //       total: data.total ?? 0,
  //     };
  //   });
  // }, [isSuccess, data, setPagination]);

  

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
