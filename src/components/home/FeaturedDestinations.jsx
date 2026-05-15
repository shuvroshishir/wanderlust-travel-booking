

import { getAllDestinations } from "@/actions/destination";
import Link from "next/link";
import {
    FaArrowRight,
} from "react-icons/fa";
import DestinationCard from "../DestinationCard";


const FeaturedDestinations = async () => {
    const destinations = await getAllDestinations();
    destinations.sort((a, b) => b.price - a.price);
    const topDestinations = destinations.slice(0, 3);

    return (
        <section className="py-24 bg-[#f8f8f8] overflow-hidden">
            <div className="max-w-7xl mx-auto px-5">
                {/* heading */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
                    <div>
                        <h2 className="font-merienda text-5xl font-semibold text-gray-900 mb-2">
                            Featured Destinations
                        </h2>

                        <p className="text-gray-500">
                            Handpicked travel experiences for the adventure seekers
                        </p>
                    </div>

                    <Link
                        href="/destinations"
                        className="border border-sky-300 text-sky-500 px-6 py-3 flex items-center gap-3 w-fit hover:bg-sky-500 hover:text-white transition rounded-full"
                    >
                        ALL DESTINATIONS
                        <FaArrowRight className="text-sm" />
                    </Link>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topDestinations.map((destination) => (
                        <DestinationCard
                            key={destination._id}
                            destination={destination}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedDestinations;