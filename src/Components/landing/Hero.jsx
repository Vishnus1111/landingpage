import React from 'react';
import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center pointer-events-none"
                style={{ backgroundImage: "url('/asset/homehero.jpeg?v=3')", backgroundSize: '100% 100%' }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-[#000066] leading-tight tracking-tight">
                                Welcome to<br />
                                <span className="bg-gradient-to-r from-[#000066] to-[#00B99E] bg-clip-text text-transparent">
                                    Meilleur Analytics Private Limited
                                </span>
                            </h1>
                            
                            <h2 className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                                Offshore Accounting & Analytics Firm - Your Transformation Partner
                            </h2>
                            
                            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                                Meilleur Analytics is powered by highly energetic, qualified professionals delivering tailored solutions across Financial Services, IT Services, and Training & Development. We combine domain expertise, technology, and a client-centric approach to help businesses and individuals unlock data-driven success.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button 
                                onClick={scrollToContact}
                                size="lg"
                                className="bg-[#00B99E] hover:bg-[#00a88e] text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#00B99E]/20"
                            >
                                Talk to an Expert
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button 
                                onClick={scrollToServices}
                                size="lg"
                                variant="outline"
                                className="border-2 border-[#000066] text-[#000066] hover:bg-[#000066] hover:text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300"
                            >
                                Explore Our Services
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
