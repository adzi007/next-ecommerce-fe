"use client";

import Image from "next/image";
import { Product } from "../types";
import { useCartStore } from "@/store/cart.store";
import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/lib/api/cart";

export function ProductCard({ product }: { product: Product }) {

   const { mutate: addToCart, isPending, isSuccess } = useAddToCart({
    onSuccess: (data) => {

      console.log("data onsuccess reactQuery", data);
      useCartStore.getState().addItem({ ...product, qty: 1 })
    },
  });

  return (
    <div className="rounded-sm border p-2 flex flex-col">
      <div className="relative w-full h-48 mb-3">
        <Image
          src={product.image}
          alt={product.name}
          unoptimized
          fill
          className="object-cover rounded-sm"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
        />
      </div>
      <h3 className="font-semibold line-clamp-1">{product.name}</h3>
      {/* <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p> */}
      <p className="mt-2 font-bold">${product.priceSell}</p>
      <Button
        variant="default"
        className="mt-2 hover:cursor-pointer rounded-sm"
        // onClick={() => addItem(product)}
        onClick={() => addToCart(product)}
      >
        {/* Add to Cart */}
        {isPending ? "Adding..." : isSuccess ? "Added!" : "Add to Cart"}
      </Button>
    </div>
  );
}
