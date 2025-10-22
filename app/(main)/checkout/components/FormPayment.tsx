"use client"
import { convertToSubcurrency } from "@/lib/utils";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type { StripeElementsOptions } from "@stripe/stripe-js"
import CheckoutPage from "./CheckoutPage";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function FormPayment() {

    const amount = 49.99;

    const appearance: StripeElementsOptions["appearance"] = {
        theme: 'stripe', // or 'stripe', 'night', or 'none' for full control
        variables: {
            colorPrimary: '#4f46e5', // indigo-600
            colorBackground: '#ffffff',
            colorText: '#111827', // gray-900
            borderRadius: '0',
        },
        rules: {
        '.AccordionItem': {
            border: '0',
            boxShadow: 'unset'
        },
        '.Input': {
            border: '1px solid #d1d5db', // gray-300
            borderRadius: '0.5rem',
            padding: '0.5rem 0.75rem',
            fontSize: '1rem',
        },
        '.Input:focus': {
            borderColor: '#4f46e5',
            boxShadow: '0 0 0 1px #4f46e5',
        },
        '.Input--invalid': {
            borderColor: '#ef4444', // red-500
        },
        },
    }

    const options: StripeElementsOptions = {
        mode: "payment",
        amount: convertToSubcurrency(amount),
        currency: "usd",
        appearance, // 👈 add your custom styles here
    }

    return (
        <div>
            <Elements
                stripe={stripePromise}
                options={options}
            >
                <CheckoutPage amount={amount} />
            </Elements>
        </div>
    )
}
