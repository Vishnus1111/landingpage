import React from 'react';
import HeroSection from '@/components/landing/talent-lab/HeroSection';
import CapabilitySection from '@/components/landing/talent-lab/CapabilitySection';
import WhyCapabilitySection from '@/components/landing/talent-lab/WhyCapabilitySection';
import WhoWeServeSection from '@/components/landing/talent-lab/WhoWeServeSection';
import FrameworkSection from '@/components/landing/talent-lab/FrameworkSection';
import ModulesSection from '@/components/landing/talent-lab/ModulesSection';
import HowWeDifferSection from '@/components/landing/talent-lab/HowWeDifferSection';
import EngagementSection from '@/components/landing/talent-lab/EngagementSection';
import ImpactSection from '@/components/landing/talent-lab/ImpactSection';
import TrainerCarouselSection from '@/components/landing/talent-lab/TrainerCarouselSection';
import TeamSection from '@/components/landing/talent-lab/TeamSection';
import MoreTeamSection from '@/components/landing/talent-lab/MoreTeamSection';
import CTASection from '@/components/landing/talent-lab/CTASection';

export default function TalentLab() {
    return (
        <div className="home-page-shell talent-lab-page min-h-screen font-inter">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700;800&family=Playfair+Display:wght@700;800&display=swap');

                .font-inter {
                    font-family: 'Inter', sans-serif;
                }

                .font-poppins {
                    font-family: 'Poppins', sans-serif;
                }

                .font-playfair {
                    font-family: 'Playfair Display', serif;
                }
            `}</style>

            <div className="home-fixed-bg" aria-hidden="true" />

            <div className="relative z-10">
                <div className="home-timeline-stack">
                    <div className="home-timeline-line" aria-hidden="true" />

                    <div className="home-card">
                        <HeroSection />
                    </div>

                    <div className="home-card">
                        <CapabilitySection />
                    </div>

                    <div className="home-card">
                        <WhyCapabilitySection />
                    </div>

                    <div className="home-card">
                        <WhoWeServeSection />
                    </div>

                    <div className="home-card">
                        <FrameworkSection />
                    </div>

                    <div className="home-card">
                        <ModulesSection />
                    </div>

                    <div className="home-card">
                        <HowWeDifferSection />
                    </div>

                    <div className="home-card">
                        <EngagementSection />
                    </div>

                    <div className="home-card">
                        <ImpactSection />
                    </div>

                    <div className="home-card">
                        <TrainerCarouselSection />
                    </div>

                    <div className="home-card">
                        <TeamSection />
                    </div>

                    <div className="home-card">
                        <MoreTeamSection />
                    </div>

                    <div className="home-card">
                        <CTASection />
                    </div>
                </div>
            </div>
        </div>
    );
}
