import { Card, CardContent, CardHeader } from "@/components/ui/card";


export default function SideBarMenu() {
  return (
    <>
        <div className="space-y-1 mb-4">
            <h4 className="text-lg leading-none font-medium">Menu</h4>
        </div>
        <Card className="w-full rounded-md shadow-sm p-6 space-y-6 bg-white">
            <CardHeader className="px-0 pb-0 mb-0">
                <h2 className="text-lg font-semibold">Filter Products</h2>
            </CardHeader>
            <CardContent className="space-y-6 px-0">
               <ul>
                    <li>Profile</li>
                    <li>Orders</li>
                    <li>Setting</li>
                    <li>logout</li>
               </ul>
            </CardContent>
        </Card>
    </>
  )
}
