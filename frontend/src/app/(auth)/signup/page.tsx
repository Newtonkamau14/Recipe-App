import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpUserAction } from "@/data/actions/auth-action";

export default function Signup() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Card className="w-full h-3/6 m-2 md:max-w-xl">
        <CardHeader className="flex flex-row justify-between">
          <div className="space-y-4">
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Enter your details below to create an account
            </CardDescription>
          </div>

          <Button variant="link">
            <Link href="/login">Login</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <form action={signUpUserAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="johndoe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
