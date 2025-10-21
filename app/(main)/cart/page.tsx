import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { MoveRight } from "lucide-react"
import CartProductItem from "./components/CartProductItem";
import { dummyCart } from "@/data/cart";
import { SummeryOrder } from "./components/SummeryOrder";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";


export default async function Page() {

  const session = await getServerSession(authOptions)
  
  if (!session) redirect("/login")

  const cartData = dummyCart

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-8">Cart</h1>

          <div className="flex w-full gap-4 lg:flex-nowrap flex-wrap">

            <div className="flex flex-col lg:w-4/6 w-full gap-4">

                {cartData.data.map((item) => 
                  <CartProductItem 
                    key={item.id}
                    name={item.name} 
                    image={item.image} 
                    id={item.id} 
                    qty={item.qty} 
                    priceSell={item.price} 
                    slug={item.slug}  /> 
                )}

            </div>

            <div className="flex lg:w-2/6 w-full">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Order Summery</CardTitle>
                </CardHeader>
                <CardContent>

                  <SummeryOrder />

                </CardContent>

                <CardFooter className="flex-col gap-2">
                  <Button type="button" className="w-full">
                    Process to Checkout
                  </Button>
                  <span className="font-normal text-gray-500 dark:text-gray-400"> or </span>
                 
                  <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                    Continue Shopping <MoveRight strokeWidth={1.5} />
                  </Link>
                </CardFooter>
              </Card>
            </div>

          </div>
    </div>
  )
}
