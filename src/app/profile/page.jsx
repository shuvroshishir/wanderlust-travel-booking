"use client";

import { EditProfileModal } from "@/components/EditProfileModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import {
    FaCamera,
    FaMapMarkerAlt,
    FaPlane,
    FaGlobeAmericas,
    FaChartLine,
    FaDollarSign,
    FaPen,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        <div className="max-w-7xl mx-auto my-25">
            {/* Heading */}
            <div className="mb-10">
                <h1 className="font-secondary text-5xl font-semibold text-black">My Profile</h1>
                <p className="text-gray-500 mt-3">
                    Manage your account settings and travel preferences
                </p>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Profile Card */}
                <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl">
                    {/* Profile */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <Image
                                src={user?.image || "/default-profile.jpg"}
                                alt="profile"
                                width={110}
                                height={110}
                                className="rounded-full object-cover w-27.5 h-27.5"
                            />

                            <button className="absolute bottom-0 right-0 h-9 w-9 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-md">
                                <FaCamera size={14} />
                            </button>
                        </div>

                        <h2 className="text-3xl font-medium mt-5 text-black">
                            {user?.name || "User"}
                        </h2>

                        <div className="flex items-center gap-2 text-gray-500 mt-2">
                            <MdEmail size={14} />
                            <p>{user?.email}</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-8"></div>

                    {/* Info */}
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-500">Member since</p>
                            <p className="font-semibold text-black">
                                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                }) : "N/A"}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-gray-500">Nationality</p>
                            <p className="font-semibold text-black">Bangladeshi</p>
                        </div>
                    </div>

                    {user && <EditProfileModal user={user} />}
                </div>

                {/* Right Side */}
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-medium text-black mb-6">
                        Travel Statistics
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Card */}
                        <div className="bg-white border border-gray-200 p-6 flex items-center justify-between  rounded-2xl">
                            <div>
                                <p className="text-gray-500">Total Bookings</p>
                                <h3 className="text-4xl font-semibold mt-2">12</h3>
                            </div>

                            <div className="h-14 w-14 rounded-full bg-cyan-100 text-cyan-500 flex items-center justify-center">
                                <FaPlane size={22} />
                            </div>
                        </div>

                        {/* Card */}
                        <div className="bg-white border border-gray-200 p-6 flex items-center justify-between  rounded-2xl">
                            <div>
                                <p className="text-gray-500">Countries Visited</p>
                                <h3 className="text-4xl font-semibold mt-2">18</h3>
                            </div>

                            <div className="h-14 w-14 rounded-full bg-green-100 text-green-500 flex items-center justify-center">
                                <FaGlobeAmericas size={22} />
                            </div>
                        </div>

                        {/* Card */}
                        <div className="bg-white border border-gray-200 p-6 flex items-center justify-between  rounded-2xl">
                            <div>
                                <p className="text-gray-500">Upcoming Trips</p>
                                <h3 className="text-4xl font-semibold mt-2">2</h3>
                            </div>

                            <div className="h-14 w-14 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                                <FaChartLine size={22} />
                            </div>
                        </div>

                        {/* Card */}
                        <div className="bg-white border border-gray-200 p-6 flex items-center justify-between  rounded-2xl">
                            <div>
                                <p className="text-gray-500">Total Spent</p>
                                <h3 className="text-4xl font-semibold mt-2">$15,750</h3>
                            </div>

                            <div className="h-14 w-14 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center">
                                <FaDollarSign size={22} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;