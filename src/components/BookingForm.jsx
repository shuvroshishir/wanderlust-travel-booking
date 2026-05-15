'use client';

import { authClient } from '@/lib/auth-client';
import { FaArrowRight } from 'react-icons/fa';

const BookingForm = ({ destination }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log("User from booking form", user);

    console.log("destination from booking form", destination);
    const handleBookingForm = async (e) => {
        e.preventDefault();

        // const formData = new FormData(e.target);
        // const date = formData.get('date');

        const date = new Date(e.target.date.value);
        console.log(date);
    }
    return (
        <form onSubmit={handleBookingForm}>
            <input
                name='date'
                type="date"
                className="w-full border border-gray-200 py-3 px-4 outline-none mb-6 rounded-full"
            />

            {/* button */}
            <button className="w-full py-3 bg-sky-500 hover:bg-sky-600 transition text-white font-medium flex items-center justify-center gap-3 mb-8 rounded-full">
                Book Now
                <FaArrowRight />
            </button>
        </form>
    );
};

export default BookingForm;