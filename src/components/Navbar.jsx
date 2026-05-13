"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();

    return (
        <div className='absolute p-4 top-0 z-50 w-full'>
            <nav className="flex items-center justify-between p-4 bg-white shadow-lg font-medium">
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            href="/"
                            className={pathName === '/' ? 'text-cyan-500' : ''}>Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/destinations"
                            className={pathName === '/destinations' ? 'text-cyan-500' : ''}>Destinations
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/bookings"
                            className={pathName === '/bookings' ? 'text-cyan-500' : ''}>My Bookings
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/admin"
                            className={pathName === '/admin' ? 'text-cyan-500' : ''}>Admin
                        </Link>
                    </li>
                </ul>

                <div>
                    <Image src="/assets/Wanderlast.png"
                        alt="Wanderlust Logo"
                        width={150}
                        height={150}
                    />
                </div>

                <ul className="flex space-x-4">
                    <li><Link href="/profile" className={pathName === '/profile' ? 'text-cyan-500' : ''}>Profile</Link></li>
                    <li><Link href="/login" className={pathName === '/login' ? 'text-cyan-500' : ''}>Login</Link></li>
                    <li><Link href="/signup" className={pathName === '/signup' ? 'text-cyan-500' : ''}>Sign Up</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;