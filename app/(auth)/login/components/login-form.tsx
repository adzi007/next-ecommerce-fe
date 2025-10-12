"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { memo } from "react"
import { SubmitHandler, useForm, Controller } from "react-hook-form"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"
import { toast } from "sonner"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// type LoginInputs = {
//     email: string
//     password: string
// }

const formLoginSchema = z.object({
    email : z.email("Invalid email address"),
    password: z.string("Please masukan password").min(6, "Masukin password yg bener")
})

export default function LoginForm() {

    // const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>()
    
    // const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    //     console.log("data >>> ", data);
    // }

    // const SubmitButton = memo(({ disabled }: { disabled: boolean }) => (
    //     <Button disabled={disabled} type="submit" className="w-full">
    //         Login
    //     </Button>
    // ));

    const form = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    function onSubmit(data: z.infer<typeof formLoginSchema>) {

        console.log("data >>>>", data);

        // toast("Event has been created", {
        //   description: "Sunday, December 03, 2023 at 9:00 AM",
        //   action: {
        //     label: "Undo",
        //     onClick: () => console.log("Undo"),
        //   },
        // })
        

        toast("You submitted the following values:", {
            description: (
                <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
                <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "top-center",
            classNames: {
                content: "flex flex-col gap-2 bg-gray-700 p-1 text-white",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
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
                Submit
            </Button>
        </>
        
        
    )
}
