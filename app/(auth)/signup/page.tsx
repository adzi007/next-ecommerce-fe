"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SignupFormData, signupSchema } from "@/lib/validation/signup-schema";
import { useRegister } from "@/lib/api/auth";
import { useRouter } from 'next/navigation'
import { Spinner } from "@/components/ui/spinner";

export default function Page() {

  // const [loading, setLoading] = useState(false);
   const router = useRouter()

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });


  const { mutate: signupAction, isPending, isSuccess } = useRegister({
    onSuccess: () => {
      // console.log("response register api", data);
      // alert("Register Success!")
      form.reset();
      router.push('/login?registered=true')

    }
  })


  async function onSubmit(data: SignupFormData) {

    // setLoading(true);

    try {
     
      signupAction(data)

    } catch (error) {

      console.error(error);

    } 
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">
          Create an Account
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-4">
          <div>
            <label htmlFor="input-name">Name</label>
            <Input placeholder="Full name" id="input-name" {...form.register("name")} disabled={isPending} />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="input-email">Email</label>
            <Input placeholder="Email address" id="input-email" type="email" {...form.register("email")} disabled={isPending} />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="input-password">Password</label>
            <Input placeholder="Password" id="input-password" type="password" {...form.register("password")} disabled={isPending} />
            {form.formState.errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="input-confirm-password">Confirm Password</label>
            <Input placeholder="Confirm Password" id="input-confirm-password" type="password" {...form.register("confirmPassword")} disabled={isPending} />
            {form.formState.errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending} >
            {/* Sign Up */}
            {isPending ? <><Spinner /> Submiting... </>  : "Sign Up"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
