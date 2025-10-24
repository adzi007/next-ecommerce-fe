import { z } from "zod"

export const checkoutSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email("Invalid email address"),
    phone: z.string().min(6, "Phone number is required"),
    address: z.string().min(1, "Address is required"),
    country: z.string().min(1, "Select a country"),
    city: z.string().min(1, "City is required"),
    zipCode: z.string().min(1, "Zip code is required"),
    deliveryMethod: z.enum(["dhl", "fedex", "express"], 
        // {
        //     required_error: "Select a delivery method",
        // }
    ),
})

export type CheckoutSchema = z.infer<typeof checkoutSchema>