import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Highlights', href: '/#highlights' },
        { name: 'Location', href: '/#location' },
        { name: 'Ideal For', href: '/#ideal-for' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
                            Vadalur<span className="text-blue-900">CommercialSpaces</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-blue-900 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-800 transition-colors shadow-lg flex items-center gap-2"
                        >
                            <span>📞</span>
                            Contact Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-900 focus:outline-none p-2 text-2xl"
                        >
                            {isOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 bg-blue-900 text-white px-5 py-3 rounded-lg font-bold shadow-md"
                        >
                            Contact Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
