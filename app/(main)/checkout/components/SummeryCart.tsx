"use client"

import { useEffect, useState } from "react"
import { getCartUser } from "../data/cart";
import { formatCurrency } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

// 1. Interface for the nested 'category' object
interface Category {
    name: string;
    slug: string;
}

// 2. Interface for the main object
interface CartItem {
    id: number;
    product_id: number;
    name: string;
    slug: string;
    image: string;
    price: number;
    qty: number;
    category: Category; // Use the nested interface here
}

// --- Skeleton Component for a Single Cart Item ---
const CartItemSkeleton: React.FC = () => (
  <li className="flex py-4">
    <Skeleton className="size-24 rounded-md" />
    <div className="ml-4 flex flex-1 flex-col justify-between">
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/3" />
      </div>
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-1/5" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  </li>
);

export default function SummeryCart() {

  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    (async() => {

      try {

        const [cartDummy] = await Promise.all([getCartUser()])
        setCart(cartDummy as CartItem[])
        
      } catch (error) {
        console.error("Failed to fetch cart data:", error);
      }finally{

        setIsLoading(false);
      }

    })();

    console.log("cart >>> ", cart);
    
  }, [cart])
  

  return (
    <div className="flex h-fit flex-col overflow-y-auto px-4">
    
      <div className="flex-1 overflow-y-auto py-0 h-fit">
        <div className="flex items-center justify-between h-[50px]">
          <h2 id="drawer-title" className="text-lg font-medium text-gray-900">Your Cart</h2>
        </div>

        <div className="-mt-2">
          <ul role="list" className="">

            { isLoading ? 
              <CartItemSkeleton />
              :
              <>
                { cart.map((item, i) => {
                  return (
                    <li className="flex py-4" key={i}>
                      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={item.image} alt={item.name} className="size-full object-cover" />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="text-sm">
                                  <a href="#">{ item.name }</a>
                              </h3>
                              <p className="ml-2 text-sm w-[100px] text-end">
                                { formatCurrency(item.price) }
                              </p>
                            </div>

                            <p className="mt-1 text-sm text-gray-500">{ item.category.name }</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Qty { item.qty }</p>
                        </div>
                      </div>
                    </li>
                  )
              })}
              </>              
            }

          </ul>
        </div>

      </div>

      <div className="border-t border-gray-200 py-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p className="text-lg">Total</p>
          <p>{ formatCurrency(262000) } </p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout</p>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            Or
            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 ms-2">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
