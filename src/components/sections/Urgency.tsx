
const Urgency = () => {
    return (
        <section className="bg-amber-400 py-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#fbbf24] opacity-100"></div>
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-gray-900">

                    <div className="flex items-center gap-4">
                        <div className="bg-white p-3 rounded-full shadow-lg animate-pulse text-2xl">
                            ⚠️
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide">Limited Availability</h3>
                            <p className="font-semibold text-lg opacity-90">First come, first serve basis.</p>
                        </div>
                    </div>

                    <div
                        className="flex items-center gap-4 bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/30"
                    >
                        <div className="text-3xl">⏰</div>
                        <div className="text-left">
                            <span className="block text-4xl font-black">Only 3</span>
                            <span className="block text-sm font-bold uppercase tracking-wider">Shops Remaining</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Urgency;
