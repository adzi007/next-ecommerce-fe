"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FiEdit } from "react-icons/fi"
import { useShippingFormStore } from "../../store/checkout.store"
import { useTabStepStore } from "../../store/tabs.store" 
export default function AddressCard() {

    const shippingData = useShippingFormStore((state) => state.shippingData)

    const goToShippingForm = () => {
        useTabStepStore.getState().setActiveTab(1)
    }

    return (
        <Card className="w-full rounded-md mb-4 py-4">
            <CardContent>
                <h1 className="text-lg font-semibold mb-2">Shipping Address</h1>
                <div className="flex items-center justify-between">
                    <p className="text-gray-500">{ `${shippingData?.address} ${shippingData?.city}, ${shippingData?.country} ${shippingData?.zipCode}` }</p>
                    <Button type="button" variant={"link"} 
                    onClick={goToShippingForm}
                     className="text-blue-600 hover:cursor-pointer" ><FiEdit /> Edit Address</Button>
                </div>
            </CardContent>
        </Card>
    )
}
