"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FiEdit } from "react-icons/fi"
import { useShippingFormStore } from "../../store/checkout.store"
import { useTabStepStore } from "../../store/tabs.store" 
import { useEffect } from "react"
export default function AddressCard() {

    const shippingData = useShippingFormStore((state) => state.shippingData)

    const goToShippingForm = () => {
        useTabStepStore.getState().setActiveTab(1)
    }

    useEffect(() => {
      
        console.log("shippingData >>> ", shippingData);
        

    }, [shippingData])
    

    return (
        <Card className="w-full rounded-md mb-4 py-4">
            <CardContent>
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold mb-2">Shipping Address</h1>
                    <Button 
                        type="button" 
                        variant={"link"} 
                        onClick={goToShippingForm}
                        className="text-blue-600 hover:cursor-pointer" >
                            <FiEdit /> Edit
                    </Button>
                </div>
                
                <div className="flex items-center justify-between">
                    <p className="text-gray-500">{ `${shippingData?.address} ${shippingData?.city}, ${shippingData?.country} ${shippingData?.zipCode}` }</p>
                </div>
                <h2 className="font-semibold mt-3 mb-1">Delivery Methods</h2>
                 <div className="flex items-start">
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-gray-500">$15 - DHL Fast Delivery</p>
                        <p className="text-sm text-gray-500">Estimated delivery: 3 days</p>
                    </div>
                </div>
                
            </CardContent>
        </Card>
    )
}
