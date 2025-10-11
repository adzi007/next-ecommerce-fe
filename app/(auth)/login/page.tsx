"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm, SubmitHandler } from "react-hook-form";

type LoginInputs = {
    email: string
    password: string
}

export default function Page() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginInputs>()

    const onSubmit: SubmitHandler<LoginInputs> = (data) => {
        console.log("data >>> ", data);
    }

    return (
        <Card className="w-full max-w-md mx-auto shadow-md">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">
                    Login
                </CardTitle>
            </CardHeader>
            <CardContent>
                 <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Input placeholder="Email address" type="email" defaultValue="" {...register("email")} />
                    </div>
                    <div>
                        <Input placeholder="Password" type="password"  defaultValue="" {...register("password", {required: true})} />
                        { errors.password && <span className="text-red-500">Harus masukin password</span> }
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
