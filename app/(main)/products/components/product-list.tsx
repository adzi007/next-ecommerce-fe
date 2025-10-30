"use client"
import { Separator } from "@/components/ui/separator";
import PaginationProduct from "./PaginationProduct";
import { ProductCard } from "./product-card";
import { dummyProducts } from "@/data/products";


export function ProductList() {

  const products = dummyProducts.data;

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
