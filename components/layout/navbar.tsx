"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart.store";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react"

import { dummyCart } from "@/data/cart";
import { useEffect } from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import Autocomplete from "../ui/autocomplete";

export function Navbar() {

  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);

  const { data: session } = useSession() 

  useEffect(() => {

    if(session){

      // console.log("user >>> ", session.user.name);
      // console.log("get cart data", dummyCart);

      dummyCart.data.map((row) => {
        useCartStore.getState().addItem({ 
          name: row.name, 
          image:row.image, 
          id:row.id, 
          qty: 
          row.qty, 
          priceSell:row.price, 
          slug:row.slug })
      })
    }
    
  }, [session])
  

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="w-3/5 mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">MyShop</Link>
        <nav className="flex items-center gap-6">
          {/* <form className="relative">
            <Input
              id="search-product"
              name="search"
              className="peer h-9 ps-8 pe-2"
              placeholder={"Search Product"}
              type="search"
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>
          </form> */}
          {/* <div className="w-[200px]"> */}
            <Autocomplete
            // value={field.value}
            // onChange={field.onChange}
          />
          {/* </div> */}
          
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/cart" className="relative">
            Cart
            {totalItems > 0 && (
              <span className="ml-1 px-2 py-0.5 text-xs bg-blue-600 text-white rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          { session && <Button variant="link" onClick={() => signOut({ callbackUrl: "/login" })} className="hover:cursor-pointer">Logout</Button> }
          { !session && <Link href="/login" className="relative">Login</Link> }
        </nav>
      </div>
    </header>
  );
}
