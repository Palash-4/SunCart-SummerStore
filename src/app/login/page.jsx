"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check } from "@gravity-ui/icons";
import { toast } from "sonner";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";

const LoginPage = () => {

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log(data, error);

    // Error Toast
    if (error) {
      toast.error(error.message);
      return;
    }

    // Success Toast
    toast.success("Login Successful");

    // Redirect Homepage
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">

      <Card className="w-full max-w-md p-6 sm:p-8 shadow-2xl rounded-3xl">

        {/* Heading */}
        <div className="text-center mb-6">

          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your SunCart account
          </p>

        </div>

        {/* Form */}
        <Form
          className="flex flex-col gap-5"
          onSubmit={onSubmit}
        >

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {

              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email";
              }

              return null;
            }}
          >

            <Label>Email</Label>

            <Input placeholder="suncart@example.com" />

            <FieldError />

          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
          >

            <Label>Password</Label>

            <Input placeholder="Enter password" />

            <Description>
              Enter your account password
            </Description>

            <FieldError />

          </TextField>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-2">

            <Button
              type="submit"
              className="w-full bg-black text-white"
            >
              <Check />
              Login
            </Button>

            <Button
              type="reset"
              variant="bordered"
              className="w-full"
            >
              Reset
            </Button>

          </div>

        </Form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-6">

          Don&apos;t have an account?

          <Link
            href="/register"
            className="text-black font-semibold ml-1 hover:underline"
          >
            Register
          </Link>

        </p>

      </Card>

    </div>
  );
};

export default LoginPage;