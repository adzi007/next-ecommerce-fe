"use client"
import { usePathname } from "next/navigation"
import { convertToSubcurrency } from "@/lib/utils";
import { CardCvcElement, CardExpiryElement, CardNumberElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type { StripeElementsOptions } from "@stripe/stripe-js"
import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useTabStepStore } from "../../store/tabs.store";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PaymentStep() {

    const amount = 49.99;

    /* 
      Stripe Configuration
    */

    const appearance: StripeElementsOptions["appearance"] = {
        theme: 'stripe', // or 'stripe', 'night', or 'none' for full control
        variables: {
            colorPrimary: '#4f46e5',
            colorBackground: '#ffffff',
            colorText: '#111827',
            borderRadius: '0',
        },
        rules: {
        '.AccordionItem': {
            border: '0',
            boxShadow: 'unset'
        },
        '.Input': {
            border: '1px solid #d1d5db',
            borderRadius: '0.5rem',
            padding: '0.5rem 0.75rem',
            fontSize: '1rem',
        },
        '.Input:focus': {
            borderColor: '#4f46e5',
            boxShadow: '0 0 0 1px #4f46e5',
        },
        '.Input--invalid': {
            borderColor: '#ef4444',
        },
        },
    }

    const options: StripeElementsOptions = {
        mode: "payment",
        amount: convertToSubcurrency(amount),
        currency: "usd",
        appearance,
    }

    const navigateToShippingStep = () => {
        useTabStepStore.getState().setActiveTab(1)
    }

    /* 
      Payment Handle Section
    */

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

    }, []);

//     useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" })
//   }, []) // runs when this tab mounts

    

    return (
        <div>
            <h1 className="text-xl font-semibold mb-2">Payment</h1>
            <p className="mb-4 text-gray-500">All transaction are secure and encryped</p>
            <Elements stripe={stripePromise} options={options} >
                {/* <CheckoutPage amount={amount} /> */}
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

            </Elements>

            <div className="flex lg:flex-row flex-col gap-3 w-full mt-6 justify-between">
                <Button 
                    type="button" 
                    variant={"ghost"}
                    onClick={navigateToShippingStep}
                    className="border h-11 hover:cursor-pointer rounded-sm lg:order-1 order-2">
                    <MdOutlineKeyboardBackspace className="size-6" /> Back To Shipping
                </Button>
                <Button 
                    type="button" 
                    variant={"default"}
                    // onClick={() => setActiveTabs(3)}
                    className="h-11 hover:cursor-pointer rounded-sm lg:order-2 order-1">
                        Confirm Payment $570.68
                </Button>
            </div>
        </div>
    )
}
