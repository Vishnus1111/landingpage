import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";

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

  return <span className="tabular-nums">{count}{suffix}</span>;
}

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="results" className="pt-[4.375rem] pb-28 lg:pt-[5.625rem] lg:pb-36 relative overflow-hidden bg-[#000066]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00B99E]/8 translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight uppercase tracking-wide">
            Results That Speak for Themselves
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute left-[8%] right-[8%] top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#8DE3D7]/20 via-[#8DE3D7]/75 to-[#8DE3D7]/20" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-center">
            {stats.map((stat, i) => {
              const isNavyHex = i % 2 === 0;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="group relative flex justify-center"
                >
                  <div
                    className="w-[210px] h-[184px] p-5 flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                      background: isNavyHex ? "#000033" : "#008080",
                      border: isNavyHex ? "1px solid rgba(141,227,215,0.45)" : "1px solid rgba(255,255,255,0.25)",
                    }}
                  >
                    <div className="font-serif text-5xl lg:text-6xl font-black mb-2" style={{ color: isNavyHex ? "#8DE3D7" : "#FFFFFF" }}>
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
                    </div>
                    <h4 className="font-black text-sm mb-1 uppercase tracking-wide font-serif" style={{ color: isNavyHex ? "#8DE3D7" : "#FFFFFF" }}>
                      {stat.label}
                    </h4>
                    <p className="text-[11px] leading-relaxed font-light px-3" style={{ color: isNavyHex ? "rgba(141,227,215,0.78)" : "rgba(255,255,255,0.86)" }}>
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#000066] to-[#00BFA6] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#00BFA6]/25"
          >
            Book Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
