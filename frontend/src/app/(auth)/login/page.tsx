"use client";
import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ZodErrors } from "@/components/custom/zod-errors";
import { loginUserAction } from "@/data/actions/auth-action";
import { SubmitButton } from "@/components/custom/submit-button";
import { StrapiErrors } from "@/components/custom/strapi-errors";

const INITIAL_STATE = {
  data: null,
};

export default function Login() {
  const [formState, formAction] = useActionState(
    loginUserAction,
    INITIAL_STATE
  );

  return (
    <main className="min-h-screen flex justify-center items-center">
      <Card className="w-full h-3/6 m-2 md:max-w-xl">
        <CardHeader className="flex flex-row justify-between">
          <div className="space-y-4">
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </div>

          <Button variant="link">
            <Link href="/signup">Signup</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="identifier">Email/Username</Label>
                <Input
                  id="identifier"
                  type="text"
                  name="identifier"
                  placeholder="m@example.com | johndoe"
                  required
                />
                <ZodErrors error={formState?.zodErrors?.fieldErrors.email} />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" name="password" required />
                <ZodErrors error={formState?.zodErrors?.fieldErrors.password} />
              </div>
              <SubmitButton
                className="w-full"
                text="Login"
                loadingText="Loading"
              />
              <StrapiErrors error={formState?.strapiErrors} />
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
