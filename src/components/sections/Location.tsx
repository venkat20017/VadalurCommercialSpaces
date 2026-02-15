
const Location = () => {
    return (
        <section id="location" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Strategic Location</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Situated in Vadalur, a rapidly growing commercial hub in Cuddalore district.
                            Our building offers excellent connectivity and visibility for your business.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-900/10 p-3 rounded-lg text-blue-900 text-xl flex items-center justify-center w-12 h-12">
                                    <span>📍</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Vadulur</h4>
                                    <p className="text-gray-600">Central location with easy access to main roads.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-900/10 p-3 rounded-lg text-blue-900 text-xl flex items-center justify-center w-12 h-12">
                                    <span>🧭</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Kurinjipadi Nearby</h4>
                                    <p className="text-gray-600">Close proximity to key residential and commercial areas.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-900/10 p-3 rounded-lg text-blue-900 text-xl flex items-center justify-center w-12 h-12">
                                    <span>🏛️</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Cuddalore District</h4>
                                    <p className="text-gray-600">Well-connected to major district transport networks.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-900 font-bold hover:underline gap-2"
                            >
                                View on Google Maps <span>🧭</span>
                            </a>
                        </div>
                    </div>

                    <div
                        className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
                    >
                        {/* Placeholder for Google Map - To be replaced with actual embed code once verified */}
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15643.08536130453!2d79.5458!3d11.4225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54c30c997782b5%3A0x6b8a8b8b8b8b8b8b!2sVadalur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Property Location"
                                className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                            <div className="absolute inset-0 bg-transparent pointer-events-none group-hover:bg-transparent transition-colors"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Location;
