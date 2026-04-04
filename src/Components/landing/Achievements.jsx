import React from 'react';
import { motion } from "framer-motion";
import { Globe, BarChart, BookOpen, Puzzle } from "lucide-react";

const achievements = [
    {
        icon: Globe,
        title: "Trusted offshore accounting & analytics partner across industries",
        color: "from-[#000066] to-[#000066]/70"
    },
    {
        icon: BarChart,
        title: "Consistent delivery of accounting, analytics & reporting excellence",
        color: "from-[#00B99E] to-[#9EE8DD]"
    },
    {
        icon: BookOpen,
        title: "Skill-development programs bridging academics & industry",
        color: "from-[#9EE8DD] to-[#00B99E]"
    },
    {
        icon: Puzzle,
        title: "One-brand solution reducing vendor complexity for clients",
        color: "from-[#000066]/80 to-[#00B99E]"
    }
];

export default function Achievements() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="animate-float-loop" style={{ animationDelay: "0s", willChange: "transform, opacity" }}>
                        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-[#000066] mb-4">
                            Our Achievements & Impact
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#00B99E] to-[#9EE8DD] mx-auto rounded-full" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-[1.05rem]">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full md:w-[60%] -ml-[20px]"
                        >
                            <div className="flex items-start gap-5 px-8 py-2">
                                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}>
                                    <achievement.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="pt-2">
                                    <p className="text-lg font-medium text-[#000066] leading-relaxed">
                                        {achievement.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none overflow-hidden">

  {/* BACK IMAGE (larger, subtle) */}
  <img
    src="/asset/homechoose2.png"
    alt=""
        className="absolute right-[-3%] bottom-[-3%] w-[65%] max-w-none object-contain opacity-80 z-0 animate-float-loop"
    style={{
                        animationDelay: "0.6s",
            willChange: "transform, opacity",
      maskImage: "linear-gradient(to top, transparent 0%, black 30%)"
    }}
  />

  {/* FRONT IMAGE (main focus) */}
  <img
    src="/asset/homechoose1.png"
    alt=""
        className="absolute right-[-1%] bottom-[-1%] w-[60%] max-w-none object-contain z-10 animate-float-loop"
    style={{
            animationDelay: "0s",
            willChange: "transform, opacity",
      maskImage: "linear-gradient(to top, transparent 0%, black 30%)"
    }}
  />

</div>
            </div>
        </section>
    );
}
