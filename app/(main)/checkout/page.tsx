import CheckoutPanel from "./components/CheckoutPanel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SummeryCart from "./components/SummeryCart";

export default async function Page() {

  const session = await getServerSession(authOptions)  
  if (!session) redirect("/login")

  return (
    <div className="lg:w-3/5 w-full mx-auto lg:px-4 px-2 py-10">
          <h1 className="lg:text-3xl text-lg font-bold lg:mb-8 mb-2">Checkout Order</h1>
          <div className="flex w-full gap-6 lg:flex-nowrap flex-wrap">
            <div className="flex flex-col lg:w-4/6 w-full">
              <CheckoutPanel />
            </div>
            <div className="flex lg:w-2/6 w-full">
              <SummeryCart />
            </div>
          </div>
    </div>
  )
}
