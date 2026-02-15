
const Hero = () => {
    return (
        <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gray-50">
            <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#blue-900_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 font-semibold text-sm tracking-wide uppercase">
                        Ready to Occupy
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                        Commercial Space for Rent <br className="hidden md:block" />
                        <span className="text-blue-900">in Vadalur</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Brand New <span className="font-semibold text-gray-900">10x10 Shops</span> Available on First Floor. <br />
                        Prime Road Facing Location suitable for Offices & Retail.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                        <a
                            href="tel:+919500798623"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 gap-2"
                        >
                            <span>📞</span>
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/919500798623?text=Hi,%20I'm%20interested%20in%20the%20commercial%20space%20for%20rent%20in%20Vadulur."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 gap-2"
                        >
                            <span>💬</span>
                            WhatsApp Now
                        </a>
                        <a
                            href="#location"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-lg font-bold rounded-lg text-gray-700 bg-white hover:border-blue-900 hover:text-blue-900 transition-all shadow-sm hover:shadow-md gap-2"
                        >
                            <span>📍</span>
                            Get Location
                        </a>
                    </div>

                    <div className="mt-12 flex justify-center items-center gap-8 text-sm md:text-base text-gray-500">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            3 Shops Available
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            First Floor
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            Parking Available
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
