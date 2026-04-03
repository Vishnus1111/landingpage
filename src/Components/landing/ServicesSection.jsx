import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, GraduationCap } from "lucide-react";
import { Link } from 'react-router-dom';

const services = [
    {
        icon: TrendingUp,
        title: "Financial Services",
        description: "Comprehensive accounting & analytics solutions for businesses across sizes and sectors.",
        highlights: [
            "Bookkeeping & financial reporting",
            "Compliance support & analytics",
            "Data-driven insights for informed decisions",
            "Industry-tailored finance solutions"
        ],
        gradient: "from-[#000066] to-[#000066]/80",
        cta: "View Financial Services →"
    },
    {
        icon: BarChart3,
        title: "IT Services & Analytics",
        description: "Analytics-driven IT services that convert raw data into insights.",
        highlights: [
            "Data analytics & reporting",
            "BI dashboards & decision support",
            "IT-enabled finance automation",
            "Analytics for operational efficiency"
        ],
        gradient: "from-[#00B99E] to-[#00B99E]/80",
        cta: "Explore IT & Analytics →",
        link: "/it-services"
    },
    {
        icon: GraduationCap,
        title: "Training & Development",
        description: "Practical, industry-aligned training programs for individuals and teams.",
        highlights: [
            "Accounting & finance skills",
            "Data handling & analytics training",
            "Industry-ready learning frameworks",
            "Academic-to-professional bridge"
        ],
        gradient: "from-[#9EE8DD] to-[#00B99E]",
        cta: "Browse Training Programs →"
    }
];

export default function ServicesSection() {
    const getCardClipPath = (index) => {
        if (index === 0) {
            return 'polygon(22px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 22px)';
        }
        if (index === 1) {
            return 'polygon(0% 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%)';
        }
        return 'polygon(22px 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%, 0% 22px)';
    };

    return (
        <section
            className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/asset/homeservice.png?v=1')" }}
        >
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-poppins text-4xl md:text-5xl font-bold text-[#000066] mb-4">
                        What We Do
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#00B99E] to-[#9EE8DD] mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`group ${index === 1 ? 'lg:translate-y-5' : ''} ${index === 2 ? 'lg:-translate-y-5' : ''}`}
                        >
                            <div
                                className="relative h-full bg-white p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-2xl hover:shadow-[#00B99E]/10 transition-all duration-500 overflow-hidden"
                                style={{ clipPath: getCardClipPath(index) }}
                            >
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute -top-px -left-px w-[78px] h-[78px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
                                        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id={`corner-dots-top-${index}`} width="8" height="8" patternUnits="userSpaceOnUse">
                                                    <circle cx="1.5" cy="1.5" r="1" fill="#FFFFFF" fillOpacity="0.05" />
                                                </pattern>
                                            </defs>
                                            <polygon points="2,2 74,2 2,74" fill="none" stroke="#00B99E" strokeOpacity="0.45" strokeWidth="1.3" />
                                            <polygon points="0,0 72,0 0,72" fill="#000066" />
                                            <polygon points="0,0 72,0 0,72" fill={`url(#corner-dots-top-${index})`} />
                                            <line
                                                x1="6"
                                                y1="71"
                                                x2="71"
                                                y2="6"
                                                stroke="#008080"
                                                strokeWidth="1"
                                                className="transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:[filter:drop-shadow(0_0_5px_#00d6d6)]"
                                            />
                                        </svg>
                                    </div>

                                    <div className="absolute -bottom-px -right-px w-[78px] h-[78px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
                                        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id={`corner-dots-bottom-${index}`} width="8" height="8" patternUnits="userSpaceOnUse">
                                                    <circle cx="1.5" cy="1.5" r="1" fill="#FFFFFF" fillOpacity="0.05" />
                                                </pattern>
                                            </defs>
                                            <polygon points="76,76 4,76 76,4" fill="none" stroke="#00B99E" strokeOpacity="0.45" strokeWidth="1.3" />
                                            <polygon points="76,76 4,76 76,4" fill="#000066" />
                                            <polygon points="76,76 4,76 76,4" fill={`url(#corner-dots-bottom-${index})`} />
                                            <line
                                                x1="7"
                                                y1="72"
                                                x2="72"
                                                y2="7"
                                                stroke="#008080"
                                                strokeWidth="1"
                                                className="transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:[filter:drop-shadow(0_0_5px_#00d6d6)]"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                
                                <div
                                  className={`w-14 h-14 bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                                >
                                  <service.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-[#000066] mb-3">
                                    {service.title}
                                </h3>
                                
                                <p className="text-gray-500 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-6">
                                    {service.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div
                                                className="w-2 h-2 bg-[#00B99E] mt-1.5 flex-shrink-0 rotate-45"
                                                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                                            />
                                            <span className="text-gray-600 text-sm">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                {service.link ? (
                                    <Link 
                                        to={service.link}
                                        className="group/cta inline-flex items-center gap-2 text-[#00B99E] font-medium text-sm hover:gap-3 transition-all duration-300"
                                    >
                                        {service.cta}
                                    </Link>
                                ) : (
                                    <button className="group/cta inline-flex items-center gap-2 text-[#00B99E] font-medium text-sm hover:gap-3 transition-all duration-300">
                                        {service.cta}
                                    </button>
                                )}

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
