

import { getSingleDestination } from '@/actions/destination';
import BookingForm from '@/components/BookingForm';
import { DeleteAlert } from '@/components/DeleteAlert';
import { EditModal } from '@/components/EditModal';
import { authClient } from '@/lib/auth-client';

import Image from "next/image";
import Link from "next/link";
import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaStar,
    FaRegCalendarAlt,
    FaCheck,
    FaArrowRight,
} from "react-icons/fa";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const destination = await getSingleDestination(id);

    return (
        <section className="min-h-screen bg-[#f8f8f8] py-25">
            <div className="max-w-7xl mx-auto px-5">
                {/* top buttons */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/destinations"
                        className="flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition "
                    >
                        <FaArrowLeft className="text-sm" />
                        Back to Destinations
                    </Link>

                    <div className="flex items-center gap-4">
                        <EditModal destination={destination} />

                        <DeleteAlert destination={destination} />
                    </div>
                </div>

                {/* banner image */}
                <div className="relative w-full h-137.5 overflow-hidden rounded-xl mb-14">
                    <Image
                        src={destination.imageUrl}
                        alt={destination.destinationName}
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                {/* content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* left side */}
                    <div className="lg:col-span-2">
                        {/* country */}
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                            <FaMapMarkerAlt className="text-xs" />
                            <p>{destination.country}</p>
                        </div>

                        {/* title */}
                        <h1 className="text-6xl font-semibold text-gray-900 mb-5 heading-font">
                            {destination.destinationName}
                        </h1>

                        {/* stats */}
                        <div className="flex flex-wrap items-center gap-6 mb-12">
                            <div className="flex items-center gap-2 text-gray-700">
                                <FaStar className="text-green-500" />
                                <span className="font-medium">
                                    4.9 (234 reviews)
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-700">
                                <FaRegCalendarAlt className="text-sm" />
                                <span>{destination.duration}</span>
                            </div>
                        </div>

                        {/* overview */}
                        <div className="mb-14">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-5 heading-font">
                                Overview
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                {destination.description}
                            </p>
                        </div>
                    </div>

                    {/* right side booking card */}
                    <div>
                        <div className="bg-white border border-gray-200 shadow-sm p-8 sticky top-10 rounded-xl">
                            <p className="text-gray-500 mb-2">
                                Starting from
                            </p>

                            <h3 className="text-5xl font-bold text-sky-500 mb-1">
                                ${destination.price}
                            </h3>

                            <p className="text-gray-400 mb-10">
                                per person
                            </p>

                            {/* Booking Form */}
                            <BookingForm destination={destination} />

                            {/* features */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaCheck className="text-green-500 text-sm" />
                                    <p>Free cancellation up to 7 days</p>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaCheck className="text-green-500 text-sm" />
                                    <p>Travel insurance included</p>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaCheck className="text-green-500 text-sm" />
                                    <p>24/7 customer support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationDetailsPage;