import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { BiCalendarX } from "react-icons/bi";
import { RiLoginCircleLine } from "react-icons/ri";

const BookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;

    const res = await fetch('http://localhost:5000/bookings/' + user?.id, {
        cache: 'no-store',
    });
    const myBookings = await res.json();



    return (
        <div className="min-h-screen px-5 py-25">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-secondary">
                        My Bookings
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Manage and view your upcoming travel plans
                    </p>
                </div>
                {
                    !user ? (
                        <p className="text-gray-800 text-3xl text-center mt-[100px] font-bold flex items-center justify-center gap-3">
                            <RiLoginCircleLine />
                            Please log in to view your bookings.
                        </p>
                    )
                        :


                        myBookings.length > 0 ? (
                            <div className="space-y-6">
                                {myBookings.map((booking) => (
                                    <BookingCard key={booking._id} booking={booking} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-800 text-3xl text-center mt-[100px] font-bold flex items-center justify-center gap-3">
                                <BiCalendarX />
                                You have no upcoming bookings.
                            </p>
                        )

                }
            </div>
        </div>
    );
};

export default BookingsPage;