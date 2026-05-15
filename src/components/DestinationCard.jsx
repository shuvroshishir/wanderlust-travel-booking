import Image from "next/image";
import Link from "next/link";
import {
    FaStar,
    FaArrowRight,
    FaRegCalendarAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

const DestinationCard = ({ destination }) => {
    const { _id, imageUrl, country, destinationName, duration, price } = destination;

    return (
        <div className="group border border-gray-300 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg p-5 pb-7 transition flex flex-col">

            {/* image */}
            <div className="relative overflow-hidden rounded-lg">
                <Image
                    src={imageUrl}
                    alt={destinationName}
                    width={500}
                    height={350}
                    className="w-full h-57.5 object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            {/* content */}
            <div className="pt-4 flex flex-col flex-1">

                {/* country */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <FaMapMarkerAlt className="text-xs" />
                    <p>{country}</p>
                </div>

                {/* title + price */}
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-medium text-gray-900">
                        {destinationName}
                    </h2>

                    <div>
                        <span className="text-2xl font-semibold text-gray-900">
                            ${price}
                        </span>

                        <span className="text-gray-400 text-sm">/Person</span>
                    </div>
                </div>

                {/* duration */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                    <FaRegCalendarAlt className="text-xs" />
                    <p>{duration}</p>
                </div>

                {/* button */}
                <div className="mt-auto ">
                    <Link href={`/destinations/${_id}`}>
                        <button className="text-sky-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all ">
                            BOOK NOW
                            <FaArrowRight className="text-sm" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;