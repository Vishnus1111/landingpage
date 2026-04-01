import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 35, suffix: "%", label: "Revenue Growth", description: "Average increase for clients after 12 months" },
  { value: 60, suffix: "%", label: "Cost Reduction", description: "Operational savings through automation" },
  { value: 85, suffix: "%", label: "Project Success", description: "On-time delivery rate across engagements" },
  { value: 18, suffix: "%", label: "Retention Boost", description: "Improved employee retention after training" },
];

function AnimatedCounter({ target, suffix, isInView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span
      className="tabular-nums"
      style={{ background: "linear-gradient(135deg, #15C0A7, #8DE3D7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="pt-[4.375rem] pb-28 lg:pt-[5.625rem] lg:pb-36 relative overflow-hidden bg-[#000066]">
      <div className="absolute inset-0 -z-10 opacity-[0.07]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="results-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#9EE8DD" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#results-grid)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00B99E]/8 translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-wide">
            Results That Speak{" "}
            <br className="hidden sm:block" />
            <span style={{ background: "linear-gradient(90deg,#15C0A7,#8DE3D7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              for Themselves
            </span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group"
            >
              <div
                className="text-center p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <div className="font-serif text-5xl lg:text-6xl font-black mb-3">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
                </div>
                <h4 className="font-black text-white text-base mb-2 uppercase tracking-wide font-serif">{stat.label}</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
