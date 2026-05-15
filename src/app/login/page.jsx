"use client";

import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from 'react-hot-toast';

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });

        if (data) {
            toast.success("Login Successful");
            redirect("/");
        }

        if (error) {
            toast.error("Error: " + error.message);
        }
    };


    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        })

    }



    return (
        <div className="max-w-7xl mx-auto my-25">
            <div className="text-center my-3">
                <h1 className="font-secondary text-4xl sm:text-5xl font-bold">Sign In</h1>
                <p className="text-sm text-gray-500 mt-3 mb-5">Welcome back to Wanderlust</p>
            </div>
            <Card className="border w-fit mx-auto p-8 shadow-lg">
                <Form
                    onSubmit={onSubmit}
                    className="flex sm:w-96 flex-col gap-4 ">

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
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
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2">
                        <Button className={" w-full bg-cyan-500"} type="submit">
                            Login
                        </Button>
                    </div>
                </Form>

                <div className="flex justify-center items-center gap-3">
                    <Separator />
                    <div className="whitespace-nowrap"> Or sign in with </div>
                    <Separator />
                </div>

                <div>
                    <Button onClick={handleGoogleSignin} variant="outline" className={'w-full '}><FcGoogle /> Sign in with Google</Button>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;