"use client";

import Image from "next/image";
import { Product } from "../types";
import { useCartStore } from "@/store/cart.store";
import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/lib/api/cart";
import { TbShoppingCartPlus } from "react-icons/tb";
import { formatCurrency } from "@/lib/utils";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { NavLink } from "../../components/nav-link";

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

      <NavLink href={"/products/" + product.id}>
        <div className="relative w-full h-48 mb-3">
          <Image
            src={product.thumbnail}
            alt={product.title}
            unoptimized
            fill
            className="object-cover rounded-t-sm"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />
        </div>
      </NavLink>
      

      <div className="px-2 pb-2 pt-0 h-full flex flex-col justify-between">
        <NavLink href={"/products/" + product.id}>
          <div className="flex items-center">
              <FaStar className="size-3.5 text-yellow-400 -mt-0.5" />
              <p className="ms-1 text-xs text-gray-900 dark:text-white">{ product.rating }/5</p>
          </div>
          <h3 className="font-medium line-clamp-2">{product.title}</h3>
          <p className="text-sm text-gray-500 line-clamp-1">{ product.category }</p>
          
        </NavLink>
        

        <div className="flex items-center justify-between">

          <p className="mt-2">{ formatCurrency(product.price)}</p>
          
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
