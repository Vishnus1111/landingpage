import React from 'react';

export default function TalentLabSection2() {
    return (
        <section className="w-full py-20 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="bg-[#1E293B] rounded-xl p-6 md:p-8">
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#F472B6] mb-8">
                        We Build Capability. Not Just Content.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#7FB3C6] rounded-xl p-6">
                            <h3 className="text-[#0F172A] text-xl font-semibold mb-3">The Problem</h3>
                            <p className="text-[#0F172A] leading-relaxed">
                                Most training programs focus on content delivery. India produces academically qualified graduates — industry demands performance-ready professionals.
                            </p>
                        </div>

                        <div className="bg-[#F1F5F9] rounded-xl p-6">
                            <h3 className="text-[#0F172A] text-xl font-semibold mb-3">Our Approach</h3>
                            <p className="text-[#0F172A] leading-relaxed whitespace-pre-line">
                                At Meilleur Talent Lab, we design L&D programs grounded in cognitive science, behavioural psychology, and real-world hiring frameworks.

                                We build measurable capabilities — not motivational sessions.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        <div>
                            <p className="text-[#F472B6]">
                                ★★★★★ <span className="text-white font-semibold">78%</span>
                            </p>
                            <p className="text-gray-300">of standard training has no measurable outcome</p>
                        </div>

                        <div>
                            <p className="text-[#F472B6]">
                                ★★★★★ <span className="text-white font-semibold">6 weeks</span>
                            </p>
                            <p className="text-gray-300">Average time to visible behaviour change in our programs</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#E5E7EB] h-[400px] rounded-xl shadow-lg" aria-label="Talent Lab Section 2 image placeholder" />
            </div>
        </section>
    );
}
