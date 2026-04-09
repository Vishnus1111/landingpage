import React from 'react';
import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const cards = [
        {
            title: "Financial Analytics",
            description: "Comprehensive accounting & analytics solutions for businesses across sizes and sectors.",
            clickable: false,
        },
        {
            title: "IT Services",
            description: "Build reliable websites and mobile apps that scale with you.",
            clickable: true,
        },
        {
            title: "Talent Lab",
            description: "Strengthen teams through learning, alignment, and growth.",
            clickable: false,
        },
    ];

    return (
        <section
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white"
        >
            <div className="relative w-full max-w-6xl px-6 py-10 lg:py-14">
                <div className="rounded-2xl shadow-xl p-8 lg:p-12">
                    <div className="text-center max-w-5xl mx-auto">
                        <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-[#000066] leading-tight tracking-tight">
                            Transform Your Business with Data, Technology & Talent
                        </h1>

                        <p className="mt-6 text-lg md:text-xl leading-relaxed text-[#4B5563] max-w-4xl mx-auto">
                            Financial analytics that drive decisions, IT systems that scale, and talent development that transforms—three integrated solutions for business growth.
                        </p>
                    </div>

                    <div className="mt-12 lg:mt-14 max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {cards.map((card) => (
                                <div
                                    key={card.title}
                                    className={`bg-white rounded-xl p-5 border border-[#000066]/8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ${
                                        card.clickable ? 'cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(0,0,102,0.14)]' : 'cursor-default hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.10)]'
                                    }`}
                                    onClick={card.clickable ? () => navigate('/it-services') : undefined}
                                    role={card.clickable ? 'button' : undefined}
                                    tabIndex={card.clickable ? 0 : undefined}
                                    onKeyDown={card.clickable ? (e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            navigate('/it-services');
                                        }
                                    } : undefined}
                                >
                                    <div className="h-28 rounded-lg bg-[#6C5CE7] mb-4" />
                                    <h3 className="text-xl font-semibold text-[#000066] mb-2">{card.title}</h3>
                                    <p className="text-[#4B5563] leading-relaxed text-sm md:text-base">{card.description}</p>
                                    {/* Enable navigation later */}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Button
                            onClick={scrollToContact}
                            className="bg-[#000066] hover:bg-[#000055] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#000066]/25"
                        >
                            Book Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
