'use client';

import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaArrowRight } from 'react-icons/fa';

const BookingForm = ({ destination }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleBookingForm = async (e) => {
        e.preventDefault();

        // const formData = new FormData(e.target);
        // const date = formData.get('date');

        const date = new Date(e.target.date.value);

        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            userEmail: user?.email,
            destinationId: destination._id,
            destinationName: destination.destinationName,
            destinationImage: destination.imageUrl,
            destinationPrice: destination.price,
            destinationCountry: destination.country,
            departureDate: date,
        };

        const res = await fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });

        const data = await res.json();
        if (data.insertedId) {
            toast.success('Booking successful!');
            redirect('/bookings');
        } else {
            toast.error('Booking failed. Please try again.');
        }
    }
    return (
        <form onSubmit={handleBookingForm}>
            <input
                required
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