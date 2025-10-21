"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm, Controller } from "react-hook-form"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
// import { toast } from "sonner"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// import { useLogin } from "@/lib/api/auth"
import { signIn } from "next-auth/react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Spinner } from "@/components/ui/spinner";
import { FcGoogle } from "react-icons/fc";

const formLoginSchema = z.object({
    email : z.email("Invalid email address"),
    password: z.string("Please masukan password").min(6, "Masukin password yg bener")
})

export default function LoginForm() {

    const [isPendingLogin, setIsPendingLogin] = useState(false)

    const router = useRouter()

    const form = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function onSubmit(data: z.infer<typeof formLoginSchema>) {

        setIsPendingLogin(true)

        // console.log("clicking login....");
        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
            callbackUrl: "/",
        })

        if (result?.error) {

            setIsPendingLogin(false)
            console.error("Login failed:", result.error);

            toast.error("Login failed", {
                description: result.error,
                position: "top-center",
            });

        } else {
            setIsPendingLogin(false)
            console.log("Login successful!");
            router.push(result?.url || "/");
        }
    }

    function googleLogin() {
        signIn("google", { callbackUrl: "/" })
    }

    return (
        <>
            <form 
                className="" 
                // onSubmit={handleSubmit(onSubmit)}
                id="form-rhf-demo" 
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FieldGroup className="gap-3">
                    <Controller name="email" control={form.control} render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="form-input-email">Email</FieldLabel>
                            <Input 
                                {...field} 
                                id="form-input-email" 
                                aria-invalid={fieldState.invalid} 
                                placeholder="Type your registered email" 
                                autoComplete="on" 
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )} />

                    <Controller name="password" control={form.control} render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="form-input-password">Password</FieldLabel>
                            <Input 
                                {...field} 
                                id="form-input-password" 
                                aria-invalid={fieldState.invalid} 
                                placeholder="Type your password" 
                                autoComplete="off"
                                type="password"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )} />

                </FieldGroup>

            </form>

            <Button type="submit" form="form-rhf-demo" className="mt-6! hover:cursor-pointer w-full" disabled={isPendingLogin}>
                { isPendingLogin ? <> <Spinner /> Login</>:"Login" }
            </Button>

            <span className="my-1 block text-center">Or</span>

            <Button type="button" variant={"outline"} className="w-full hover:cursor-pointer" onClick={googleLogin}><FcGoogle className="size-5" /> Login with Google</Button>
        </>
        
        
    )
}
