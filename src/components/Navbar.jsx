"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
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

    return (
        <div className="absolute top-0 z-50 w-full p-3 md:p-4">
            <nav className="max-w-7xl mx-auto rounded-xl flex items-center justify-between bg-white p-4 px-6">

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
                    <Image
                        src="/assets/Wanderlast.png"
                        alt="Wanderlust Logo"
                        width={130}
                        height={20}
                        className="w-27.5 md:w-32.5"
                    />
                </Link>

                {/* Right Menu Desktop */}
                <ul className="hidden items-center space-x-6 font-medium lg:flex">
                    <li>
                        <Link
                            href="/profile"
                            className={`flex items-center gap-1 ${pathName === "/profile"
                                ? "text-cyan-500 underline underline-offset-4"
                                : "text-gray-700"
                                }`}
                        >
                            <GoPerson />
                            Profile
                        </Link>
                    </li>

                    {authLinks.map((link) => (
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

                        <li>
                            <Link
                                href="/profile"
                                className={`${pathName === "/profile"
                                    ? "text-cyan-500"
                                    : "text-gray-700"
                                    }`}
                            >
                                Profile
                            </Link>
                        </li>

                        {authLinks.map((link) => (
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