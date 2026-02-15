
import { useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Hero from '../sections/Hero';
import Highlights from '../sections/Highlights';
import Location from '../sections/Location';
import IdealFor from '../sections/IdealFor';
import Urgency from '../sections/Urgency';
import CallToAction from '../sections/CallToAction';
import Gallery from '../sections/Gallery';
import Footer from '../layout/Footer';

const Home = () => {
    useEffect(() => {
        document.title = "Vadalur Commercial Spaces - Rent Shops & Offices";
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 scroll-smooth">
            <Navbar />
            <main>
                <Hero />
                <Highlights />
                <Urgency />
                <Location />
                <IdealFor />
                <Gallery />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
