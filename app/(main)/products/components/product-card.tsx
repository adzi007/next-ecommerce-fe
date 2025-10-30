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
    
    <div className="rounded-sm border flex flex-col bg-white h-[340px]">

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
          <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 -mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-1 text-sm text-gray-900 dark:text-white">4.95</p>
          </div>
          <h3 className="font-medium line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-1">Lorem Ipsum</p>
          
        </Link>
        

        <div className="flex items-center justify-between">

          <p className="mt-2">{ formatCurrency(product.priceSell)}</p>
          
          <Button
            variant="ghost"
            className="bg-gray-100 hover:cursor-pointer rounded-sm py-0! px-3!"
            onClick={handleAddToCart}
            >
            <TbShoppingCartPlus className="size-4" />
          </Button>

        </div>
      </div>
    </div>
    
  );
}
