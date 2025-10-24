"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  CardNumberElement, 
  CardExpiryElement, 
  CardCvcElement,
  AddressElement,
} from "@stripe/react-stripe-js";
import { convertToSubcurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CheckoutPage = ({ amount }: { amount: number }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string>();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);

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
            {/* {clientSecret && <PaymentElement />} */}
            
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

                
            </form>
            
            }

            {/* <Button variant={"default"}>Pay</Button> */}

            {/* {errorMessage && <div>{errorMessage}</div>}

            <button
                disabled={!stripe || loading}
                className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
            >
                {!loading ? `Pay $${amount}` : "Processing..."}
            </button> */}
        </div>
    );

}

export default CheckoutPage;