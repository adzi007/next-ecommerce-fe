"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm, Controller } from "react-hook-form"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { toast } from "sonner"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLogin } from "@/lib/api/auth"
import { signIn } from "next-auth/react"

const formLoginSchema = z.object({
    email : z.email("Invalid email address"),
    password: z.string("Please masukan password").min(6, "Masukin password yg bener")
})

export default function LoginForm() {

    const form = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function onSubmit(data: z.infer<typeof formLoginSchema>) {
        // submitLogin(data)
        // await signIn("credentials", { data, redirect: true, callbackUrl: "/" })
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: "/",
        })
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

                {/* <div>
                    <Input placeholder="Email address" type="email" defaultValue="" {...register("email", { required:true })} />
                    { errors.email && <span className="text-red-500">Please type your registered email properly</span> }
                </div>
                <div>
                    <Input placeholder="Password" type="password"  defaultValue="" {...register("password", {required: true})} />
                    { errors.password && <span className="text-red-500">Harus masukin password</span> }
                </div> */}

                {/* <SubmitButton disabled={false} /> */}

                {/* <Button type="submit" className="w-full">
                    Login
                </Button> */}
            </form>

            <Button type="submit" form="form-rhf-demo" className="mt-3">
                {/* { isPendingLogin ? "Loading Login...":"Login" } */}
               
                Submit
            </Button>
        </>
        
        
    )
}
