
const Highlights = () => {
    const highlights = [
        {
            icon: "⤢",
            title: "3 Individual Shops",
            description: "Spacious 10x10 sq ft units perfect for various business needs."
        },
        {
            icon: "🏢",
            title: "Brand New Build",
            description: "Modern construction with premium finish and ready to occupy status."
        },
        {
            icon: "🛡️",
            title: "First Floor Units",
            description: "Prime first-floor location offering privacy and reduced street noise."
        },
        {
            icon: "🅿️",
            title: "Ample Parking",
            description: "Free two-wheeler parking and roadside car parking available."
        },
        {
            icon: "🧮",
            title: "Versatile Usage",
            description: "Ideal for Offices, Consultancy, Tuition Centers, or Small Retail."
        },
        {
            icon: "🚻",
            title: "Restroom Facility",
            description: "Common toilet arrangement available upon request for convenience."
        }
    ];

    return (
        <section id="highlights" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Property Highlights</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to set up your business in a prime location.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100"
                        >
                            <div className="mb-4 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-3xl">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
