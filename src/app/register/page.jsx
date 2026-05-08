"use client";

import Link from "next/link";
import { Check } from "@gravity-ui/icons";
import { GrGoogle } from "react-icons/gr";
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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const RegisterPage = () => {

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            image,
            email,
            password,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Account Created Successfully");
        console.log(data);
        router.push("/");

    };

    const handleGoogleRegister = async () => {

        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">

            <Card className="w-full max-w-md p-6 sm:p-8 shadow-2xl rounded-3xl">

                <div className="text-center mb-6">

                    <h1 className="text-3xl font-bold">
                        Create Account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Join SunCart Summer Store
                    </p>

                </div>

                <Form
                    className="flex flex-col gap-5"
                    onSubmit={onSubmit}
                >
                    <TextField isRequired name="name" type="text">

                        <Label>Name</Label>

                        <Input placeholder="Enter your name" />

                        <FieldError />

                    </TextField>
                    <TextField isRequired name="image" type="text">

                        <Label>Photo URL</Label>

                        <Input placeholder="Enter photo URL" />

                        <FieldError />

                    </TextField>
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

                        <Input placeholder="sucart@example.com" />

                        <FieldError />

                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {

                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            if (!/[A-Z]/.test(value)) {
                                return "Need at least 1 uppercase letter";
                            }

                            if (!/[0-9]/.test(value)) {
                                return "Need at least 1 number";
                            }

                            return null;
                        }}
                    >

                        <Label>Password</Label>

                        <Input placeholder="Enter password" />

                        <Description>
                            Minimum 8 characters with 1 uppercase & 1 number
                        </Description>

                        <FieldError />

                    </TextField>

                    <div className="flex flex-col gap-3 mt-2">

                        <Button
                            type="submit"
                            className="w-full bg-black text-white"
                        >
                            <Check />
                            Register
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

                <div className="flex items-center gap-3 my-6">

                    <div className="h-[1px] w-full bg-gray-200"></div>

                    <p className="text-sm text-gray-500">
                        OR
                    </p>

                    <div className="h-[1px] w-full bg-gray-200"></div>

                </div>

                <button
                    onClick={handleGoogleRegister}
                    className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition font-medium"
                >

                    <GrGoogle className="text-lg" />

                    Continue with Google

                </button>

                <p className="text-center text-sm text-gray-500 mt-6">

                    Already have an account?

                    <Link
                        href="/login"
                        className="text-black font-semibold ml-1 hover:underline"
                    >
                        Login
                    </Link>

                </p>
            </Card>

        </div>
    );
};

export default RegisterPage;