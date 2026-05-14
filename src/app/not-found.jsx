"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaCompass, FaHome, FaArrowRight } from "react-icons/fa";

export default function NotFound() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#06142B] text-white py-10">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Blur Effects */}
            <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Main Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
                {/* Icon */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-white/10 backdrop-blur-md">
                    <FaCompass className="text-5xl text-cyan-400" />
                </div>

                {/* 404 */}
                <h1 className="text-7xl font-extrabold tracking-widest text-cyan-400 md:text-9xl">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                    Lost In Your Journey?
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                    The destination you are looking for does not exist or may have been
                    moved. Let Wanderlust guide you back to your next adventure.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link href="/">
                        <Button
                            radius="full"
                            className="bg-cyan-500 px-8 py-6 text-base font-semibold text-white hover:bg-cyan-400"
                        >
                            Back To Home
                            <FaHome />
                        </Button>
                    </Link>

                    <Link href="/destinations">
                        <Button
                            variant="outline"
                            radius="full"
                            className="border-white/20 px-8 py-6 text-base font-semibold text-white hover:bg-white/10"
                        >
                            Explore Destinations
                            <FaArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}