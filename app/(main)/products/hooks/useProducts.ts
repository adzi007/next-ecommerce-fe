import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/product.service";
// import { useProductFilterStore } from "../store/productFilter.store";

export function useProducts(filters: {
  category?: string;
  orderBy?: string;
  priceMin?: number;
  priceMax?: number;
  rating?: number[] | null;
  page?: number;
  search?: string;
}) {
//   const { category, orderBy, priceMin, priceMax, rating } = useProductFilterStore();

    // console.log("filters.page >>>> ", filters.page);
    
    const limit = 12;
    const skip = Math.max(0, ((filters.page ?? 1) - 1) * limit);   

    // const params = {
    //     limit,
    //     skip,
    //     ...(filters.category && { category: filters.category }),
    //     ...(filters.orderBy && { sortBy: filters.orderBy }),
    //     ...(filters.priceMin !== undefined && { priceMin: filters.priceMin }),
    //     ...(filters.priceMax !== undefined && { priceMax: filters.priceMax }),
    //     ...(filters.rating && filters.rating.length > 0 && {
    //     rating: filters.rating.join(","),
    //     ...(filters.search && { q: filters.search }),
    //     }),
    // };

    const params = {
        limit,
        skip,
        category: filters.category,
        orderBy: filters.orderBy,
        priceMin: filters.priceMin,
        priceMax: filters.priceMax,
        rating: filters.rating,
        search: filters.search,
    };

    return useQuery({
        queryKey: ["products", params],
        queryFn: () => fetchProducts(params),
        // keepPreviousData: true, // smooth UI when filter changes
        placeholderData: (prev) => prev,
        staleTime: 1000 * 60,   // 1 minute cache
    });
}
