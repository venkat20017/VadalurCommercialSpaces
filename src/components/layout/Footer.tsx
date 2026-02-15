

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Vadalur Commercial Spaces</h3>
                        <p className="text-gray-400">
                            Premium commercial spaces designed for your business growth. Located in the heart of Vadalur.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/#highlights" className="text-gray-400 hover:text-white transition-colors">Highlights</a></li>
                            <li><a href="/#location" className="text-gray-400 hover:text-white transition-colors">Location</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p className="text-gray-400 mb-2">Vadalur, Cuddalore District</p>
                        <p className="text-gray-400 mb-2">Phone: +91 9500798623</p>
                        <p className="text-gray-400">Email: contact@example.com</p>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Vadalur Commercial Spaces. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-4">
                        <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
