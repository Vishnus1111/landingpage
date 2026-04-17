import React from 'react';
import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";
import TalentLabSection2 from '@/components/landing/talent-lab/TalentLabSection2';

const sections = Array.from({ length: 10 }, (_, index) => ({
    id: index + 3,
    title: `Talent Lab Section ${index + 3}`,
    description: 'Placeholder content. Share the final copy for this section and it will be updated.',
}));

export default function TalentLab() {
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
                        <section
                            className="px-6 md:px-10 lg:px-14 py-12 lg:py-16 bg-white"
                        >
                            <div className="max-w-5xl mx-auto text-center">
                                <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-white bg-gradient-to-r from-[#000066] to-[#00BFA6] border border-[#000066]/20 shadow-[0_10px_30px_rgba(0,0,102,0.2)]">
                                    PREMIUM LEARNING & DEVELOPMENT
                                </div>

                                <h1 className="mt-7 font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-[#f98ac7] leading-tight tracking-tight">
                                    Talent Lab | Learning & Development Programs in
                                    <br className="hidden sm:block" />
                                    India
                                </h1>

                                <p className="mt-6 text-lg md:text-xl leading-relaxed text-[#4B5563] max-w-4xl mx-auto">
                                    Evidence-based capability building for Schools, Universities & Corporations.
                                </p>

                                <div className="mt-10 flex justify-center">
                                    <Button className="bg-gradient-to-r from-[#000066] to-[#00BFA6] hover:from-[#000055] hover:to-[#00a892] text-white px-7 py-3 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_34px_rgba(0,191,166,0.28)] border border-[#000066]/20">
                                        Talk to an L&D Expert
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="home-card">
                        <TalentLabSection2 />
                    </div>

                    {sections.map((section) => (
                        <div key={section.id} className="home-card">
                            <section className="px-6 md:px-10 lg:px-14 py-12 lg:py-16">
                                <div className="max-w-4xl mx-auto text-center">
                                    <p className="text-sm font-semibold tracking-[0.12em] text-[#000066]/60 uppercase">
                                        Section {section.id}
                                    </p>
                                    <h2 className="mt-3 font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-[#000066] leading-tight">
                                        {section.title}
                                    </h2>
                                    <p className="mt-5 text-base md:text-lg text-[#4B5563] leading-relaxed">
                                        {section.description}
                                    </p>
                                </div>
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
