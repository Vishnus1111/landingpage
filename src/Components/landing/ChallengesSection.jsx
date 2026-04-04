import React from "react";
import { motion } from "framer-motion";
import {
    Globe, Zap, Shield, GraduationCap,
    UserCheck, Heart, BookOpen, RefreshCw,
    Database, Cloud, Target
} from "lucide-react";

const challenges = [
    { icon: Globe, text: "Website Performance" },
    { icon: Shield, text: "Website Security" },
    { icon: UserCheck, text: "Employee Skill Gaps" },
    { icon: BookOpen, text: "Learning Management" },
    { icon: Zap, text: "User Experience" },
    { icon: GraduationCap, text: "HR Training" },
    { icon: Heart, text: "Talent Retention" },
    { icon: RefreshCw, text: "Organizational Change" },
];

const responses = [
    { icon: Database, text: "Unified data platform with real-time insights" },
    { icon: Cloud, text: "Cloud-native architecture for infinite scaling" },
    { icon: Target, text: "Custom training aligned to business goals" },
];

export default function ChallengesSection() {
    const honeycombRows = [
        challenges.slice(0, 3),
        challenges.slice(3, 5),
        challenges.slice(5, 8),
    ];

    return (
        <section
            id="challenges"
            className="relative py-20 lg:py-24 overflow-hidden border-t border-[#000066]/8 bg-white"
        >
            {/* Subtle geometric background accents */}
            <motion.svg
                className="absolute -top-20 -left-24 w-[340px] h-[340px] opacity-[0.1] pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
                <polygon points="100,10 180,55 180,145 100,190 20,145 20,55" stroke="#000066" strokeWidth="2" />
                <polygon points="100,35 158,68 158,132 100,165 42,132 42,68" stroke="#00C6A9" strokeWidth="2" />
            </motion.svg>

            <motion.svg
                className="absolute -bottom-16 -right-16 w-[360px] h-[360px] opacity-[0.08] pointer-events-none"
                viewBox="0 0 220 220"
                fill="none"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
                <path d="M18 170L88 70L172 98L110 200L18 170Z" stroke="#000066" strokeWidth="2" />
                <path d="M70 25L198 58L160 150L32 118L70 25Z" stroke="#00C6A9" strokeWidth="2" />
            </motion.svg>

            {/* All content - explicit relative + high z-index to sit above decorations */}
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 10 }}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <h2
                        className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black leading-tight uppercase tracking-wide"
                        style={{ color: "#000066" }}
                    >
                        Common Business Challenges{" "}
                        <br className="hidden sm:block" />
                        <span style={{ color: "#00C6A9" }}>We Solve</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Challenges */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h3
                            className="text-xl font-serif font-black mb-8 uppercase tracking-wider"
                            style={{ color: "#1F2937" }}
                        >
                            Are You Facing These Issues?
                        </h3>
                        <div className="flex flex-col items-center sm:items-start">
                            {honeycombRows.map((row, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className={`flex gap-3 sm:gap-4 ${rowIndex > 0 ? "-mt-6 sm:-mt-8" : ""} ${rowIndex === 1 ? "sm:ml-16" : ""}`}
                                >
                                    {row.map((item, itemIndex) => {
                                        const i = rowIndex * 3 + itemIndex;
                                        return (
                                            <motion.div
                                                key={`${item.text}-${i}`}
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.05 * i }}
                                                className={`group w-[145px] h-[126px] sm:w-[160px] sm:h-[138px] p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                                                    item.text === "Learning Management" || item.text === "User Experience" ? "translate-x-[5px]" : ""
                                                }`}
                                                style={{
                                                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                                                    background: "linear-gradient(135deg, #000066, #00C6A9)",
                                                    border: "1px solid rgba(255,255,255,0.4)",
                                                    boxShadow: "0 10px 24px rgba(0, 0, 102, 0.12)",
                                                }}
                                                whileHover={{
                                                    y: -4,
                                                }}
                                            >
                                                <item.icon className="w-5 h-5 mb-2 text-white" />
                                                <span className="text-xs sm:text-sm leading-tight font-medium text-white">
                                                    {item.text}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Response */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <h3
                            className="text-xl font-serif font-black mb-4 uppercase tracking-wider"
                            style={{ color: "#000066" }}
                        >
                            Our Integrated Response
                        </h3>
                        <p
                            className="text-base leading-[1.6] mb-10 font-light"
                            style={{ color: "#4B5563" }}
                        >
                            We analyze, build, and train-creating solutions that work together.
                        </p>

                        <div className="space-y-5">
                            {responses.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.15 * i }}
                                    className="relative p-6 rounded-2xl transition-transform duration-0"
                                    style={{
                                        background: "rgba(255,255,255,0.7)",
                                        border: "1px solid rgba(0, 0, 102, 0.08)",
                                        backdropFilter: "blur(10px)",
                                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: "linear-gradient(135deg, #15C0A7, #8DE3D7)" }}
                                        >
                                            <item.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <span
                                            className="text-base font-semibold"
                                            style={{ color: "#4B5563" }}
                                        >
                                            {item.text}
                                        </span>
                                    </div>
                                    <div
                                        className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
                                        style={{ background: "linear-gradient(to bottom, #15C0A7, #8DE3D7)" }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}