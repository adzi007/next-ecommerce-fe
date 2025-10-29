"use client";

import Image from "next/image";
import { Product } from "../types";
import { useCartStore } from "@/store/cart.store";
import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/lib/api/cart";
import { TbShoppingCartPlus } from "react-icons/tb";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {

   const { mutate: addToCart, isPending, isSuccess } = useAddToCart({
    onSuccess: (data) => {

      console.log("data onsuccess reactQuery", data);
      useCartStore.getState().addItem({ ...product, qty: 1 })
    },
  });

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation()
    addToCart(product)
  }

  return (
    
    <div className="rounded-sm border flex flex-col bg-white h-[320px]">

      <Link href={"/products/" + product.slug}>
        <div className="relative w-full h-48 mb-3">
          <Image
            src={product.image}
            alt={product.name}
            unoptimized
            fill
            className="object-cover rounded-t-sm"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />
        </div>
      </Link>
      

      <div className="px-2 pb-2 pt-0 h-full flex flex-col justify-between">
        <Link href={"/products/" + product.slug}>
          <h3 className="font-medium line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-1">Lorem Ipsum</p>
        </Link>
        

        <div className="flex items-center justify-between">

          <p className="mt-2">{ formatCurrency(product.priceSell)}</p>
          
          <Button
            variant="ghost"
            className="bg-gray-200 hover:cursor-pointer rounded-sm py-2! px-3!"
            onClick={handleAddToCart}
            >
            <TbShoppingCartPlus className="size-6" />
          </Button>

        </div>
      </div>
    </div>
    
  );
}
