import CheckoutPanel from "./components/CheckoutPanel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SummeryCart from "./components/SummeryCart";

export default async function Page() {

  const session = await getServerSession(authOptions)  
  if (!session) redirect("/login")

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-8">Checkout Order</h1>
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
