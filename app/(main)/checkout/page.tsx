import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { MoveRight } from "lucide-react"
// import CartProductItem from "../cart/components/CartProductItem";
import { dummyCart } from "@/data/cart";
import { SummeryOrder } from "../cart/components/SummeryOrder";
import FormCheckout from "./components/FormCheckout";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SummeryCart from "./components/SummeryCart";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { useState } from "react";


export default async function Page() {

  // const [activeTabs, setactiveTabs] = useState("account")

  const session = await getServerSession(authOptions)
  
  if (!session) redirect("/login")

  const cartData = dummyCart

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-8">Checkout Order</h1>

          <div className="flex w-full gap-6 lg:flex-nowrap flex-wrap">

            <div className="flex flex-col lg:w-4/6 w-full">
              <FormCheckout />
            </div>

            <div className="flex lg:w-2/6 w-full">
              <SummeryCart />
            </div>

          </div>
    </div>
  )
}
