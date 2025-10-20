import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


export default async function Page() {

  const session = await getServerSession(authOptions)

  if (!session) redirect("/login")

  return (
    <div className="w-3xl flex justify-center mx-auto h-screen items-center">
        <h1 className="text-3xl font-bold">Ini Checkout Page</h1>
    </div>
  )
}
