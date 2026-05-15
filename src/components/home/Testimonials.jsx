import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Michael Chen",
        country: "Singapore",
        image:
            "https://images.unsplash.com/photo-1611608822650-925c227ef4d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        review:
            "The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable.",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        country: "New York, USA",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWFufGVufDB8fDB8fHww",
        review:
            "Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-[#f8f8f8]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-14">
                    <div>
                        <h2 className={`font-merienda text-4xl sm:text-5xl font-semibold text-gray-900`}>
                            What Travelers Say
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Real experiences from our happy travelers
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
                            <FaArrowLeft size={12} />
                        </button>

                        <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
                            <FaArrowRight size={12} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-6 flex flex-col md:flex-row gap-6 items-center shadow-md hover:shadow-lg rounded-2xl transition"
                        >
                            <div className="flex-1">
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    &quot;{item.review}&quot;
                                </p>

                                <div className="mt-6">
                                    <h4 className="text-sky-500 font-medium">{item.name}</h4>
                                    <p className="text-gray-400 text-sm">{item.country}</p>
                                </div>
                            </div>

                            <div className="relative w-44 h-44 shrink-0 rounded-lg overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;