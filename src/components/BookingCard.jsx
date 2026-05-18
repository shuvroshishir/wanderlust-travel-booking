'use client';

import Image from "next/image";
import { Button, Chip } from "@heroui/react";

import {
    FiCalendar,
    FiEye,
    FiMapPin,
    FiTrash2,
} from "react-icons/fi";
import { DeleteBooking } from "./DeleteBooking";

const BookingCard = ({ booking }) => {
    const { _id, destinationImage, destinationName, destinationPrice, departureDate, destinationCountry } = booking;
    return (
        <div
            className="bg-white border border-gray-200 rounded-3xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300"
        >
            <div className="flex flex-col lg:flex-row gap-5 lg:items-center justify-between">
                {/* Left Side */}
                <div className="flex flex-col md:flex-row gap-5">
                    {/* Image */}
                    <div className="relative w-full md:w-[260px] h-[180px] rounded-2xl overflow-hidden">
                        <Image
                            src={destinationImage}
                            alt={destinationName}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">

                        <h2 className="text-3xl font-medium text-gray-900 mb-4">
                            {destinationName}
                        </h2>

                        <div className="space-y-2 text-gray-500">
                            <div className="flex items-center gap-2">
                                <FiCalendar className="text-lg" />

                                <p>
                                    Departure:{" "}
                                    <span className="font-medium text-gray-700">
                                        {new Date(departureDate).toLocaleDateString()}
                                    </span>
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <FiMapPin className="text-lg" />

                                <p>
                                    Country:{" "}
                                    <span className="font-medium text-gray-700">
                                        {destinationCountry}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <h3 className="text-4xl font-bold text-cyan-500 mt-5">
                            ${destinationPrice}
                        </h3>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 lg:self-end">
                    <DeleteBooking booking={booking} />

                    {/* <Button
                        color="primary"
                        className="font-medium"
                    >
                        <FiEye /> View
                    </Button> */}
                </div>
            </div>
        </div>
    );
};

export default BookingCard;