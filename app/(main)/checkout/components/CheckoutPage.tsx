"use client";
import React, { useEffect, useState } from "react";
import {
  CardNumberElement, 
  CardExpiryElement, 
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { convertToSubcurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const CheckoutPage = ({ amount }: { amount: number }) => {
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [amount]);

    return (
        <div className="payment-element-container">
            
            {clientSecret && 
            
                <form className="space-y-4">
                    <div>
                        <label>Card number</label>
                        <CardNumberElement className="w-full border p-3 rounded-md" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label>Expiration date</label>
                            <CardExpiryElement className="w-full border p-3 rounded-md" />
                        </div>
                        <div>
                        <label>CVC</label>
                            <CardCvcElement className="w-full border p-3 rounded-md" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="name_on_card" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name on card</label>
                        <Input type="text" placeholder="" className="py-5 px-3" />
                    </div>

                    <div className="flex items-center gap-3 my-7">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">By Clicking "Confirm Payment" I agree to the companies term of services</Label>
                    </div>
                </form>
            }
        </div>
    );
}

export default CheckoutPage;