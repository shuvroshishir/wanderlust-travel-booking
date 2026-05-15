import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
    return (
        <section
            className="relative py-28 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1532364158125-02d75a0f7fb9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
        >
            <div className="absolute inset-0 bg-black/45"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
                <h2 className={`font-merienda text-4xl sm:text-5xl font-semibold mb-4`}>
                    Ready To Start Your Journey?
                </h2>

                <p className="text-gray-200 mb-8">
                    Join thousands of travelers who have discovered the world with us
                </p>

                <button className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center gap-3 hover:bg-gray-200 transition font-medium">
                    BOOK YOUR TRIP TODAY
                    <FaArrowRight size={12} />
                </button>
            </div>
        </section>
    );
};

export default CTASection;