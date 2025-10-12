"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LoginForm from "./components/login-form";

export default function Page() {

    return (
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
    )
}
