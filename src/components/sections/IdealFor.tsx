
const IdealFor = () => {
    const businesses = [
        { icon: "🧮", title: "CA / Accountants", color: "bg-blue-600" },
        { icon: "📖", title: "Tuition Centre", color: "bg-green-600" },
        { icon: "💼", title: "Digital Marketing", color: "bg-purple-600" },
        { icon: "📱", title: "Mobile Service", color: "bg-orange-600" },
        { icon: "🛍️", title: "Small Retail Shop", color: "bg-pink-600" },
        { icon: "👥", title: "Consultancy For", color: "bg-indigo-600" },
    ];

    return (
        <section id="ideal-for" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect For Your Business</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Designed to suit a variety of professional and commercial needs.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {businesses.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group cursor-default"
                        >
                            <div className={`${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300 text-3xl text-white`}>
                                {item.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IdealFor;
