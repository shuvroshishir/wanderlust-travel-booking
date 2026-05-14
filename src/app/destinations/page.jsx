import DestinationCard from '@/components/DestinationCard';
import React from 'react';
import { Merienda } from "next/font/google";
import { getAllDestinations } from '@/actions/destination';

const merienda = Merienda({ subsets: ["latin"] });

const DestinationPage = async () => {
    const destinations = await getAllDestinations();

    return (
        <section className="min-h-screen bg-[#f7f7f7] py-30">
            <div className="max-w-7xl mx-auto px-5">
                {/* heading */}
                <div className="mb-10">
                    <h1 className={`${merienda.className} text-5xl font-semibold text-gray-900 mb-3`}>
                        Explore All Destinations
                    </h1>

                    <p className="text-gray-500">
                        Find your perfect travel experience from our curated collection
                    </p>
                </div>

                {/* filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 bg-white border border-gray-300 mb-6 rounded-2xl">
                    <select className="h-14 px-4 bg-transparent outline-none border-b md:border-b-0 md:border-r border-gray-300 text-gray-500">
                        <option>CATEGORY</option>
                    </select>

                    <select className="h-14 px-4 bg-transparent outline-none border-b md:border-b-0 md:border-r border-gray-300 text-gray-500">
                        <option>PRICE RANGE</option>
                    </select>

                    <select className="h-14 px-4 bg-transparent outline-none text-gray-500">
                        <option>SORT BY</option>
                    </select>
                </div>

                <p className="text-gray-500 mb-8">
                    Showing {destinations.length} destinations
                </p>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination) => (
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

export default DestinationPage;