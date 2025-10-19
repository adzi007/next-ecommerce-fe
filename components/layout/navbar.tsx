"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart.store";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react"

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);

  const { data: session } = useSession()

  // console.log("session >>> ", session);
  // console.log("items >>> ", items);
  

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">MyShop</Link>
        <nav className="flex items-center gap-6">
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
        </nav>
      </div>
    </header>
  );
}
