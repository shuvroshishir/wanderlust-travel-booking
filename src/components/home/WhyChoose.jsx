import { FaShieldAlt, FaMap, FaHeadphones } from "react-icons/fa";

const features = [
    {
        id: 1,
        title: "Safe & Secure",
        description:
            "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
        icon: <FaShieldAlt className="text-sky-500 text-2xl" />,
    },
    {
        id: 2,
        title: "Expert Guides",
        description:
            "Local experts who bring destinations to life with authentic cultural insights.",
        icon: <FaMap className="text-sky-500 text-2xl" />,
    },
    {
        id: 3,
        title: "24/7 Support",
        description:
            "Round-the-clock customer service to assist you wherever your journey takes you.",
        icon: <FaHeadphones className="text-sky-500 text-2xl" />,
    },
];

const WhyChoose = () => {
    return (
        <section className="bg-[#edf7f8] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className={`font-merienda text-4xl sm:text-5xl font-semibold text-gray-900`}>
                        Why Choose Wanderlust
                    </h2>
                    <p className="text-gray-500 mt-4">
                        Your trusted partner for exceptional travel experiences
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white p-8 shadow-md hover:shadow-lg rounded-2xl transition"
                        >
                            <div className="mb-5">{feature.icon}</div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;