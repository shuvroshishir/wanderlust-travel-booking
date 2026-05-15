"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const pathName = usePathname();
    const [open, setOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/destinations", label: "Destinations" },
        { href: "/bookings", label: "Bookings" },
        { href: "/admin", label: "Admin" },
    ];

    const authLinks = [
        { href: "/login", label: "Login" },
        { href: "/signup", label: "Sign Up" },
    ];


    const { data: session } = authClient.useSession();
    const user = session?.user;

    const router = useRouter();
    const handleSignout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/"); // redirect to home page
                },
            },
        });
    }

    return (
        <div className="absolute top-0 z-50 w-full p-3 md:p-4">
            <nav className="max-w-7xl mx-auto rounded-xl flex items-center justify-between bg-white p-3 px-6">

                {/* Left Menu Desktop */}
                <ul className="hidden items-center space-x-6 font-medium lg:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={
                                    pathName === link.href
                                        ? "text-cyan-500 underline underline-offset-4"
                                        : "text-gray-700"
                                }
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Logo */}
                <Link href={'/'}>
                    <h1 className={`font-merienda text-xl sm:text-3xl font-extrabold text-cyan-500`}>
                        Wanderlust
                    </h1>
                </Link>

                {/* Right Menu Desktop */}
                <ul className="hidden items-center space-x-4 font-medium lg:flex">

                    {!user && authLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={
                                    pathName === link.href
                                        ? "text-cyan-500 underline underline-offset-4"
                                        : "text-gray-700"
                                }
                            >
                                <Button
                                    onClick={handleSignout}
                                    variant="outline"
                                    className="hover:bg-cyan-500 hover:text-white transition-all">

                                    {link.label}
                                </Button>
                            </Link>
                        </li>
                    ))}


                    {user &&
                        <div className="flex items-center gap-4">

                            <Link href='/profile'>
                                <Avatar title={user?.name}>
                                    <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </Link>

                            <Button
                                onClick={handleSignout}
                                variant="outline"
                                className="hover:bg-cyan-500 hover:text-white transition-all">

                                SignOut
                            </Button>
                        </div>
                    }
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="text-3xl lg:hidden"
                >
                    {open ? <HiX /> : <HiOutlineMenu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="mt-2 rounded-xl bg-white p-5 shadow-lg lg:hidden">
                    <ul className="flex flex-col space-y-4 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={
                                        pathName === link.href
                                            ? "text-cyan-500"
                                            : "text-gray-700"
                                    }
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        {user && <>
                            <li>
                                <Link
                                    href="/profile"
                                    className={
                                        pathName === "/profile"
                                            ? "text-cyan-500"
                                            : "text-gray-700"
                                    }
                                >
                                    Profile
                                </Link>
                            </li>

                        </>}

                        {!user && authLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={
                                        pathName === link.href
                                            ? "text-cyan-500"
                                            : "text-gray-700"
                                    }
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;