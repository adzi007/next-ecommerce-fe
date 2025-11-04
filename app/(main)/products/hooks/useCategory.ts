import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/category.service";

export function useCategory(){

    return useQuery({
        queryKey: ["categories"],
        queryFn: () => fetchCategories(),
        placeholderData: (prev) => prev,
        staleTime: 1000 * 60,   // 1 minute cache
    })
}