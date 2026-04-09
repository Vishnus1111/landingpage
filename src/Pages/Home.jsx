import React from 'react';
import Hero from '@/Components/landing/Hero';
import ChallengesSection from '@/Components/landing/ChallengesSection';
import DifferentiatorsSection from '@/Components/landing/DifferentiatorsSection';
import ResultsSection from '@/Components/landing/ResultsSection';
import Achievements from '@/Components/landing/Achievements';
import TestimonialsSection from '@/Components/landing/TestimonialsSection';
import PartnershipCTA from '@/Components/landing/PartnershipCTA';

export default function Home() {
    return (
        <div className="home-page-shell min-h-screen font-inter">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700;800&display=swap');
                
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                
                .font-poppins {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <div className="home-fixed-bg" aria-hidden="true" />

            <div className="relative z-10">
                <div className="home-timeline-stack">
                    <div className="home-timeline-line" aria-hidden="true" />

                    <div className="home-card">
                        <Hero />
                    </div>

                    <div id="common-business-challenges" className="home-card">
                        <ChallengesSection />
                    </div>

                    <div className="home-card">
                        <DifferentiatorsSection />
                    </div>

                    <div className="home-card">
                        <ResultsSection />
                    </div>

                    <div className="home-card">
                        <Achievements />
                    </div>

                    <div className="home-card">
                        <TestimonialsSection />
                    </div>

                    <div id="contact" className="home-card home-card-cta">
                        <PartnershipCTA />
                    </div>
                </div>
            </div>
        </div>
    );
}
