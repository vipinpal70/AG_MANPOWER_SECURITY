import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';

const OfficeCleaning: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-8 min-h-screen">
                <h1 className="text-3xl font-bold mb-4">Office Cleaning & Housekeeping</h1>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
                    <p className="mb-4">We provide comprehensive office cleaning and housekeeping services tailored to maintain a clean, healthy, and productive work environment. Our trained staff uses quality materials and follows systematic procedures.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Daily Tasks</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Floor & Wall Cleaning & disinfecting.</li>
                        <li>Cleaning, sweeping, mopping of all floors (staircases, cabins, lobbies, passages, reception, training rooms, labs, conference rooms, meeting rooms, security offices, etc.).</li>
                        <li>Cleaning ashtrays, wastepaper baskets, and disposing of refuse at designated areas.</li>
                        <li>Spraying Room Fresheners / Air Fresheners at regular intervals.</li>
                        <li>Cleaning all Glasses (Doors, partitions, Walls, Tops) with proper Glass Cleaning Agents.</li>
                        <li>Putting plastic bags in all dustbins.</li>
                        <li>Cleaning outer areas (main entrances, Security centers, main gate, area within 4 walls).</li>
                        <li>Logging maintenance issues and updating the Admin.</li>
                        <li>Maintaining Log Book for shift handovers.</li>
                        <li>Disposing of all waste outside the office premises appropriately.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Weekly Tasks</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Cleaning, dusting & vacuuming of the office area including furniture, fixtures, tapestry, equipment, and accessories.</li>
                        <li>Cleaning of terrace & washing stains on the walls.</li>
                        <li>Washing of outside area within the premises.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Toilet Cleaning (Daily)</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Clean and disinfect all vitreous fixtures (toilet bowls, urinals, sinks).</li>
                        <li>Clean and disinfect all surfaces (toilet seats, containers, etc.). Brush thoroughly, including below water level and under rims.</li>
                        <li>Clean walls, doors, and toilet partitions thoroughly; ensure toilets are free of bad odor.</li>
                        <li>Check and refill all dispensers (C-Fold Towels, JRT rolls, liquid soap, Tissue boxes).</li>
                        <li>Wash and dry waste bins thoroughly twice a day.</li>
                        <li>Wash & clean mirrors with detergent solution.</li>
                        <li>Check and remove hairs, dust, dirt, etc.</li>
                    </ul>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default OfficeCleaning;