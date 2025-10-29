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
import { PiShoppingCart } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FiSearch } from "react-icons/fi";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import ModalSearch from "@/app/(main)/products/components/ModalSearch";

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
      <div className="lg:w-3/5 w-full lg:mx-auto lg:px-4 px-2 h-16 flex items-center justify-between">
        <nav className="flex items-center lg:gap-6 gap-3">
          <div className="lg:hidden block">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button variant="ghost" className="p-0! m-0"><HiOutlineMenuAlt1 className="size-7 mt-0.5" /></Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="h-full w-full">
                  <DrawerHeader>
                    <DrawerTitle>Left Drawer</DrawerTitle>
                    <DrawerDescription>This drawer slides in from the left.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Great for navigation menus or sidebars.
                    </p>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button>Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <Link href="/" className="font-bold lg:text-2xl text-lg me-5">MyShop</Link>
          <div className="lg:flex hidden items-center gap-6">
            <Link href="/products" className="hover:text-blue-600 font-medium">Products</Link>
            <Link href="/cart" className="relative font-medium">Best Seller</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium flex items-center gap-1">Category <FaAngleDown size={12} className="mb-1" /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/cart" className="relative font-medium">About</Link>
            <Link href="/cart" className="relative font-medium">FAQs</Link>
          </div>
          

        </nav>
        
        <nav className="flex items-center lg:gap-6 gap-4">
          
          <div className="lg:block hidden">
          <Autocomplete   />
          </div>

          {/* <Button variant="ghost" className="lg:hidden block p-0! m-0"><FiSearch className="size-6" /></Button> */}
          <ModalSearch />
          
         
          <Link href="/cart" className="relative flex">
            <PiShoppingCart className="lg:size-7 size-6" />
            {totalItems > 0 && (
              <span className="absolute size-5 flex justify-center items-center text-xs -top-1 -right-3 bg-blue-600 text-white rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* { session && <Button variant="link" onClick={() => signOut({ callbackUrl: "/login" })} className="hover:cursor-pointer">Logout</Button> } */}

          { !session && <Link href="/login" className="relative">Login</Link> }

          { session &&
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium flex items-center gap-1 hover:cursor-pointer">
                <Avatar className="lg:w-8 w-7 lg:h-8 h-7">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/login" })} >Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
        </nav>
      </div>
    </header>
  );
}
