"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SignupFormData, signupSchema } from "@/lib/validation/signup-schema";


export default function Page() {

  const [loading, setLoading] = useState(false);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  async function onSubmit(data: SignupFormData) {
    setLoading(true);
    try {
      // Example request (adjust to your API)
      await new Promise((res) => setTimeout(res, 1000));
      
      alert("Account created successfully!");

      console.log("data >>> ", data);
      
      form.reset();
      // form.formState.isDirty

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
            <Input placeholder="Full name" id="input-name" {...form.register("name")} disabled={loading} />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="input-email">Email</label>
            <Input placeholder="Email address" id="input-email" type="email" {...form.register("email")} disabled={loading} />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="input-password">Password</label>
            <Input placeholder="Password" id="input-password" type="password" {...form.register("password")} disabled={loading} />
            {form.formState.errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="input-confirm-password">Confirm Password</label>
            <Input placeholder="Confirm Password" id="input-confirm-password" type="password" {...form.register("confirmPassword")} disabled={loading} />
            {form.formState.errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={loading} >
            {/* Sign Up */}
            {loading ? "Creating..." : "Sign Up"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
