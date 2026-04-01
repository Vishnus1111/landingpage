import React from 'react';
import Navbar from '@/Components/landing/Navbar';
import Hero from '@/Components/landing/Hero';
import TrustStrip from '@/Components/landing/TrustStrip';
import ServicesSection from '@/Components/landing/ServicesSection';
import ChallengesSection from '@/Components/landing/ChallengesSection';
import WhyChoose from '@/Components/landing/WhyChoose';
import DifferentiatorsSection from '@/Components/landing/DifferentiatorsSection';
import ResultsSection from '@/Components/landing/ResultsSection';
import Achievements from '@/Components/landing/Achievements';
import TestimonialsSection from '@/Components/landing/TestimonialsSection';
import WhoWeServe from '@/Components/landing/WhoWeServe';
import PartnershipCTA from '@/Components/landing/PartnershipCTA';
import Footer from '@/Components/landing/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-inter">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700;800&display=swap');
                
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                
                .font-poppins {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <Navbar />
            <Hero />
            <TrustStrip />
            <div id="common-business-challenges">
                <ChallengesSection />
            </div>
            <div id="services">
                <ServicesSection />
            </div>
            <div id="why-us">
                <WhyChoose />
            </div>

            <DifferentiatorsSection />

            <ResultsSection />

            <Achievements />

            <TestimonialsSection />

            <div id="who-we-serve">
                <WhoWeServe />
            </div>
            <div id="contact">
                <PartnershipCTA />
            </div>
            <Footer />
        </div>
    );
}
