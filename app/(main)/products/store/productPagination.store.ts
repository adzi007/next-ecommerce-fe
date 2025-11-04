import { create } from "zustand";

type PaginationProduct = {
  total: number;
  skip: number;
  limit: number;
} | null;

interface PaginationProductStore {
  pagination: PaginationProduct;
  setPagination: (
    data: PaginationProduct | ((prev: PaginationProduct) => PaginationProduct)
  ) => void;
}

export const usePaginationProductStore = create<PaginationProductStore>((set) => ({
  pagination: null,
  setPagination: (data) =>
    set((state) => ({
      pagination:
        typeof data === "function" ? data(state.pagination) : data,
    })),
}));