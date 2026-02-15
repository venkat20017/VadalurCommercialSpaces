
const CallToAction = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    Ready to Grow Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Don't miss out on this prime commercial space in Vadalur.
                    Schedule a visit today and see the potential yourself.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a
                        href="tel:+919500798623"
                        className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-gray-900 text-lg font-bold rounded-full hover:bg-yellow-400 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.5)] gap-2"
                    >
                        <span>📞</span>
                        Call: 95007 98623
                    </a>
                    <a
                        href="tel:+919652977966"
                        className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/10 transition-colors gap-2"
                    >
                        <span>📞</span>
                        Call: 96529 77966
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
