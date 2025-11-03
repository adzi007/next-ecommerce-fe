import {create} from "zustand"

type ProductFilter = {
    category: string;
    priceDefaultMin: number;
    priceDefaultMax: number;
    priceMin: number;
    priceMax: number;
    rating: number[] | null;
    orderBy: string;
    page: number; // 🔹 new
} 

interface ProductFilterStore {
    filterProduct: ProductFilter;
    setCategory: (input: string) => void
    setPriceMin: (input: number) => void
    setPriceMax: (input: number) => void
    setRating:   (input: number) => void
    setOrderBy:  (input: string) => void
    setPage:     (input: number) => void;
    resetFilter: () => void;
}

const initialState: ProductFilter = {
  category: "",
  priceDefaultMin: 0,
  priceDefaultMax: 1000,
  priceMin: 0,
  priceMax: 1000,
  rating: null,
  orderBy: "",
  page: 1,
}

export const useProductFilterStore = create<ProductFilterStore>( (set) => ({
    filterProduct: initialState,
    setCategory: (input) =>
    set((state) => ({
      filterProduct: { ...state.filterProduct, category: input },
    })),

    setPriceMin: (input: number) => {
        // set({ filterProduct: { ...state priceMin:input } })

        set((state) => ({
            filterProduct: { ...state.filterProduct, priceMin: input }
        }))
    },
    setPriceMax: (input: number) => {
        set((state) => ({
            filterProduct: { ...state.filterProduct, priceMax: input }
        }))
    },
    setRating:  (input: number) => {
        set((state) => {

            const prevRatings = state.filterProduct.rating ?? []
            const updatedRatings = prevRatings.includes(input)
                ? prevRatings.filter((r) => r !== input) // toggle rating on/off
                : [...prevRatings, input]

            return {
                filterProduct: { ...state.filterProduct, rating: updatedRatings },
            }
        })
    },
    setOrderBy:  (input: string)   => {
        set((state) => ({
            filterProduct: { ...state.filterProduct, orderBy: input },
        }))
    },
    setPage: (input: number) =>
        set((state) => ({
        filterProduct: { ...state.filterProduct, page: input },
    })),

    resetFilter: () => set({ filterProduct: initialState }),
}))