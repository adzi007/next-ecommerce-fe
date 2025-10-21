"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LoginForm from "./components/login-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner"
import { ClientToaster } from "@/components/ui/client-toaster";

export default function Page() {

    const searchParams = useSearchParams()
    const router = useRouter()
    const [hasShownToast, setHasShownToast] = useState(false)


   

    useEffect(() => {
        const registered = searchParams.get("registered")

        // Only show toast once
        if (registered === "true" && !hasShownToast) {
            setHasShownToast(true)

            toast.success("Registration Successful", {
                description: "You can now log in to your account.",
                position: "top-center",
                closeButton: true,
            })

            // Remove query param from URL
            router.replace("/login")
        }
    }, [searchParams, hasShownToast, router])

     const error = searchParams.get("error");

    useEffect(() => {
        if (error === "OAuthAccountNotLinked") {
            toast.error("Account not linked", {
                description:
                "You've previously signed up with a password. Please use your email and password instead.",
                duration: 10000
            });
        }
    }, [error]);
    

    return (
        <>
            <Card className="w-full max-w-md mx-auto shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-center">
                        Login
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
            <ClientToaster />
        </>
        
    )
}
