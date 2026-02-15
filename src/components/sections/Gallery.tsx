

const Gallery = () => {
    const images = [
        {
            url: "/images/Front-side.jpeg",
            caption: "Brand New Building Elevation"
        },
        {
            url: "/images/shop3_top.jpeg",
            caption: "Spacious Interior Ready for Setup"
        },
        {
            url: "/images/pathway_first-floor.jpeg",
            caption: "Wide Corridor & Access"
        },
        {
            url: "/images/wide-angle.jpeg",
            caption: "Wide Angle Property View"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Site Gallery</h2>
                    <p className="text-lg text-gray-600">Take a sneak peek at the property.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {images.map((img, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video cursor-pointer">
                            <img
                                src={img.url}
                                alt={img.caption}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <p className="text-white font-semibold text-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {img.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
