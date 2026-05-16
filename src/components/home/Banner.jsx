import { Button, Separator } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa6";
import Link from "next/link";


const Banner = () => {
    return (
        <div className="bg-[url('/assets/banner.png')] bg-cover bg-center text-white flex flex-col items-center justify-between gap-6 min-h-[80vh] lg:min-h-screen px-4 pt-28 pb-6">

            {/* Content */}
            <div className="flex flex-1 flex-col items-center justify-center text-center">

                <h1 className={`font-merienda text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-wide`}>
                    Discover Your <br /> Next Adventure
                </h1>

                <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg lg:text-xl">
                    Explore breathtaking destinations and create unforgettable memories
                    with our curated travel experiences.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href={'/destinations'}>
                        <Button className="bg-cyan-500 px-6 py-6 uppercase cursor-pointer">
                            Explore Now <FaArrowRight className="ml-1" />
                        </Button>
                    </Link>


                    <Link href={'/bookings'}>
                        <Button className="bg-white/40 px-6 py-6 uppercase backdrop-blur-md cursor-pointer">
                            View Bookings <FaBookmark className="ml-1" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Search Box */}
            <div className="hidden w-full  items-center justify-between gap-4 rounded-xl border border-white/20 bg-white/20 px-5 py-1 backdrop-blur-md md:flex">

                <div className="p-2">
                    <h3 className="text-sm font-medium">Location</h3>
                    <p className="text-xs text-white/80">
                        Address, City or Zip
                    </p>
                </div>

                <Separator
                    variant="tertiary"
                    orientation="vertical"
                />

                <div className="p-2 ">
                    <h3 className="text-sm font-medium">
                        Date/Duration
                    </h3>
                    <p className="text-xs text-white/80">
                        Anytime/3 Days
                    </p>
                </div>

                <Separator
                    variant="tertiary"
                    orientation="vertical"
                />

                <div className="p-2">
                    <h3 className="text-sm font-medium">Budget</h3>
                    <p className="text-xs text-white/80">
                        $0-$3000
                    </p>
                </div>

                <Separator
                    variant="tertiary"
                    orientation="vertical"
                />

                <div className="p-2">
                    <h3 className="text-sm font-medium">People</h3>
                    <p className="text-xs text-white/80">5-10</p>
                </div>

                <Button className="bg-cyan-500 px-5 py-5">
                    <FiSearch />
                    Search
                </Button>
            </div>
        </div>
    );
};

export default Banner;