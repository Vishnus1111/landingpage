import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { ArrowRight, CalendarCheck2, FileText, Rocket } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function PartnershipCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const consultationSteps = [
        {
            icon: CalendarCheck2,
            title: "Schedule a Call",
            text: "30-minute consultation with our senior team",
        },
        {
            icon: FileText,
            title: "Get a Proposal",
            text: "Custom solution with timeline and investment",
        },
        {
            icon: Rocket,
            title: "Start Growing",
            text: "Initiate your projects in IT, Finance, or Training within 2 weeks",
        },
    ];

    return (
        <>
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <section
                className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/asset/homecta.png?v=1')" }}
            >
                <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-[#000066] mb-6">
                            Ready to Transform Your Business?
                        </h2>

                        <p className="text-[#000066]/75 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
                            Book a free strategy call with our team. We'll analyze your challenges, propose solutions, and show ROI projections. No obligation. Just clarity on your path forward.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
                            {consultationSteps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: index * 0.1 }}
                                    className="bg-white rounded-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#000066]/5 text-left transition-all duration-300 hover:-translate-y-[5px]"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#000066] to-[#00BFA6] flex items-center justify-center mb-4 shadow-sm">
                                        <step.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#000066] mb-2">{step.title}</h3>
                                    <p className="text-[#000066]/70 text-sm leading-relaxed">{step.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                size="lg"
                                className="bg-gradient-to-r from-[#000066] to-[#00BFA6] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#00BFA6]/30 hover:-translate-y-0.5"
                            >
                                Book Strategy Call
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <a
                                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@meilleuranalytics.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#000066] text-[#000066] font-medium transition-all duration-300 hover:bg-[#000066]/5"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
