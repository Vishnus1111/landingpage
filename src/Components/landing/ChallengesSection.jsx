import React from "react";
import { motion } from "framer-motion";
import {
    Globe, Zap, Shield, GraduationCap,
    UserCheck, Heart, BookOpen, RefreshCw,
    Database, Cloud, Target
} from "lucide-react";

const challenges = [
    { icon: Globe, text: "Website performance and scalability problems" },
    { icon: Zap, text: "User experience and conversion optimization" },
    { icon: Shield, text: "Website security and maintenance" },
    { icon: GraduationCap, text: "HR training program effectiveness" },
    { icon: UserCheck, text: "Employee skill gaps and onboarding" },
    { icon: Heart, text: "Talent retention and development" },
    { icon: BookOpen, text: "Learning management and tracking" },
    { icon: RefreshCw, text: "Organizational change management" },
];

const responses = [
    { icon: Database, text: "Unified data platform with real-time insights" },
    { icon: Cloud, text: "Cloud-native architecture for infinite scaling" },
    { icon: Target, text: "Custom training aligned to business goals" },
];

export default function ChallengesSection() {
    return (
        <section
            id="challenges"
            style={{ backgroundColor: "#000066", position: "relative" }}
            className="pt-14 pb-28 lg:pt-18 lg:pb-36 overflow-hidden border-t border-slate-300/60"
        >
            {/* Decorative blobs - behind everything via absolute + no z conflict */}
            <div
                style={{
                    position: "absolute", top: 0, right: 0,
                    width: 600, height: 600,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,185,158,0.06) 0%, transparent 70%)",
                    transform: "translate(33%, -33%)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute", bottom: 0, left: 0,
                    width: 400, height: 400,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(158,232,221,0.05) 0%, transparent 70%)",
                    transform: "translate(-33%, 33%)",
                    pointerEvents: "none",
                }}
            />
            {/* Grid pattern */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="challenges-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#9EE8DD" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#challenges-grid)" />
                </svg>
            </div>

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
                        style={{ color: "#ffffff" }}
                    >
                        Common Business Challenges{" "}
                        <br className="hidden sm:block" />
                        <span style={{ color: "#00B99E" }}>We Solve</span>
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
                            style={{ color: "#ffffff" }}
                        >
                            Are You Facing These Issues?
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {challenges.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{
                                        boxShadow: "0 0 0 1px rgba(21, 192, 167, 0.45), 0 0 20px rgba(21, 192, 167, 0.45), 0 0 40px rgba(21, 192, 167, 0.22)",
                                        borderColor: "rgba(21, 192, 167, 0.65)",
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.05 * i }}
                                    className="flex items-start gap-3 p-4 rounded-xl"
                                    style={{
                                        background: "rgba(255,255,255,0.07)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                    }}
                                >
                                    <div
                                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                        style={{ background: "rgba(0,185,158,0.2)" }}
                                    >
                                        <item.icon className="w-4 h-4" style={{ color: "#9EE8DD" }} />
                                    </div>
                                    <span
                                        className="text-sm leading-relaxed font-light"
                                        style={{ color: "rgba(255,255,255,0.90)" }}
                                    >
                                        {item.text}
                                    </span>
                                </motion.div>
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
                            style={{ color: "#ffffff" }}
                        >
                            Our Integrated Response
                        </h3>
                        <p
                            className="text-base leading-relaxed mb-10 font-light"
                            style={{ color: "rgba(255,255,255,0.65)" }}
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
                                        background: "rgba(255,255,255,0.07)",
                                        border: "1px solid rgba(0,185,158,0.35)",
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
                                            style={{ color: "#ffffff" }}
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