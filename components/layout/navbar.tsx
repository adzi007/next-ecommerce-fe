"use client";

// import NavLink from "next/Navlink";
import { useCartStore } from "@/store/cart.store";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react"

import { dummyCart } from "@/data/cart";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { ChevronDown, ChevronUp, SearchIcon } from "lucide-react";
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
// import NavLink from "@/app/(main)/components/nav-link";
import { NavLink } from "@/app/(main)/components/nav-link";
import ProductSearchAutocomplete from "@/app/(main)/products/components/ProductSearchAutocomplete";

export function Navbar() {

  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  
  const { data: session } = useSession() 


  const hasInitialized = useRef(false);

  useEffect(() => {

    if(session  && !hasInitialized.current){
      hasInitialized.current = true;
      // console.log("user >>> ", session.user.name);
      // console.log("get cart data", dummyCart);

      dummyCart.data.map((row) => {
        useCartStore.getState().addItem({ 
          title: row.name, 
          thumbnail:row.image, 
          id:row.id, 
          qty: row.qty, 
          price:row.price, 
          slug: row.name,
        })
      })
    }
    
  }, [session])

  const [openCategory, setOpenCategory] = useState<string | null>(null)

  // 🧭 Menu structure: some with sub-items, some without
  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Best Seller",
      href: "/products",
    },
    {
      title: "Category",
      subItems: [
        { title: "Phones", href: "/products/phones" },
        { title: "Laptops", href: "/products/laptops" },
        { title: "Headphones", href: "/products/headphones" },
      ],
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "FAQs",
      href: "/contact",
    },
  ]
  

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
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerDescription>This drawer slides in from the left.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4" id="drawer-menu">

                    {menuItems.map((item, i) => {
                      // 📁 Item with sub-items (Collapsible)
                      if (item.subItems && item.subItems.length > 0) {
                        return (
                          <Collapsible
                            key={i}
                            open={openCategory === item.title}
                            onOpenChange={() =>
                              setOpenCategory(
                                openCategory === item.title ? null : item.title
                              )
                            }
                            className="border-b py-2"
                          >
                            <CollapsibleTrigger className="flex w-full items-center justify-between text-left text-base font-medium py-2">
                              {item.title}
                              {openCategory === item.title ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                              <ul className="pl-4 mt-1 space-y-1">
                                {item.subItems.map((sub, j) => (
                                  <li key={j}>
                                    <DrawerClose asChild>
                                      <NavLink
                                      href={sub.href}
                                      className="block text-gray-900 py-1 transition"
                                    >
                                      {sub.title}
                                    </NavLink>
                                    </DrawerClose>
                                    
                                  </li>
                                ))}
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        )
                      }

                      // 🔗 Single-level item (direct Navlink)
                      return (
                        <div key={i} className="border-b py-2">
                          <DrawerClose asChild>
                            <NavLink
                            href={item.href!}
                            className="block w-full text-base font-medium py-2 hover:text-primary transition"
                          >
                            {item.title}
                          </NavLink>
                          </DrawerClose>
                          
                        </div>
                      )
                    })}
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

          <NavLink href="/" className="font-bold lg:text-2xl text-lg me-5">MyShop</NavLink>
          <div className="lg:flex hidden items-center gap-6">
            <NavLink href="/products" className="hover:text-blue-600 font-medium">Products</NavLink>
            <NavLink href="/cart" className="relative font-medium">Best Seller</NavLink>
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
            <NavLink href="/cart" className="relative font-medium">About</NavLink>
            <NavLink href="/cart" className="relative font-medium">FAQs</NavLink>
          </div>
          

        </nav>
        
        <nav className="flex items-center lg:gap-6 gap-4">
          
          <div className="lg:block hidden">
            {/* <Autocomplete   /> */}
            <ProductSearchAutocomplete />
          </div>

          {/* <Button variant="ghost" className="lg:hidden block p-0! m-0"><FiSearch className="size-6" /></Button> */}
          <ModalSearch />
          
         
          <NavLink href="/cart" className="relative flex">
            <PiShoppingCart className="lg:size-7 size-6" />
            {totalItems > 0 && (
              <span className="absolute size-5 flex justify-center items-center text-xs -top-1 -right-3 bg-blue-600 text-white rounded-full">
                {totalItems}
              </span>
            )}
          </NavLink>

          {/* { session && <Button variant="Navlink" onClick={() => signOut({ callbackUrl: "/login" })} className="hover:cursor-pointer">Logout</Button> } */}

          { !session && <NavLink href="/login" className="relative">Login</NavLink> }

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
                <DropdownMenuItem asChild>
                  <NavLink href="/orders" className="hover:cursor-pointer">Orders</NavLink>
                </DropdownMenuItem>
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
