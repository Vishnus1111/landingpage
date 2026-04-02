import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, User, TrendingUp, BarChart3, Monitor, Users } from "lucide-react";

const advantages = [
  {
    icon: Sparkles,
    title: "Not Just Consulting",
    description: "We implement solutions, not deliver reports.",
  },
  {
    icon: User,
    title: "Single Point of Contact",
    description: "One team coordinates all three services.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Outcomes",
    description: "Track ROI across analytics, IT, and training.",
  },
];

const segments = [
  {
    icon: BarChart3,
    step: "Analyze",
    description: "Financial analytics reveal growth opportunities",
    gradientId: "grad-analyze",
    gradientColors: ["#0AAFA0", "#15C0A7"],
    startAngle: 210,
    endAngle: 330,
    labelPos: "left",
  },
  {
    icon: Monitor,
    step: "Build",
    description: "IT systems execute strategic initiatives",
    gradientId: "grad-build",
    gradientColors: ["#15C0A7", "#5DD6C9"],
    startAngle: 330,
    endAngle: 90,
    labelPos: "right-top",
  },
  {
    icon: Users,
    step: "Train",
    description: "Talent development ensures sustained execution",
    gradientId: "grad-train",
    gradientColors: ["#5DD6C9", "#8DE3D7"],
    startAngle: 90,
    endAngle: 210,
    labelPos: "right-bottom",
  },
];

function PremiumDonut() {
  const svgRef = useRef(null);
  const inView = useInView(svgRef, { once: true });

  return (
    <div className="relative flex-shrink-0" ref={svgRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(21,192,167,0.14) 0%, transparent 65%)",
          filter: "blur(24px)",
          transform: "scale(1.1)",
        }}
      />

      <motion.img
        src="/asset/round.png"
        alt="Integrated advantage visual"
        className="w-[336px] h-[336px] sm:w-[408px] sm:h-[408px] lg:w-[480px] lg:h-[480px] relative object-contain"
        style={{ filter: "drop-shadow(0 6px 24px rgba(21,192,167,0.15))" }}
        initial={{ opacity: 0, scale: 0.75 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <div className="lg:hidden mt-8 grid grid-cols-3 gap-4">
        {segments.map((seg) => (
          <div key={seg.step} className="flex flex-col items-center text-center">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
              style={{ background: `linear-gradient(135deg, ${seg.gradientColors[0]}, ${seg.gradientColors[1]})` }}
            >
              <seg.icon className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif font-black text-[#000066] text-sm uppercase">{seg.step}</span>
            <span className="text-[#000066]/50 text-xs leading-tight mt-1 font-light">{seg.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Hexagon generator for large floating accents
function HexagonAccent({ size = 400, top = '0', right = '0', bottom = 'auto', left = 'auto', color = '#15C0A7', opacity = 0.05 }) {
  return (
    <div
      className="absolute -z-10 pointer-events-none"
      style={{
        top,
        right,
        bottom,
        left,
        width: `${size}px`,
        height: `${size}px`,
        opacity,
        filter: 'blur(40px)',
      }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.05))' }}>
        <polygon
          points="50,0 100,25 100,75 50,100 0,75 0,25"
          fill={color}
          strokeWidth="0"
        />
      </svg>
    </div>
  );
}

export default function DifferentiatorsSection() {
  return (
    <section id="integrated-advantage" className="pt-[4.9rem] pb-28 lg:pt-[6.3rem] lg:pb-36 relative overflow-hidden bg-[#F9F9FB]">
      <HexagonAccent size={500} top="-120px" right="-150px" color="#15C0A7" opacity={0.06} />
      <HexagonAccent size={350} bottom="-100px" left="-120px" color="#000066" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#000066] leading-tight uppercase tracking-wide">
            Why We're Different:{" "}
            <br className="hidden sm:block" />
            <span style={{ background: "linear-gradient(90deg,#15C0A7,#8DE3D7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              The Integrated Advantage
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-0 mb-20"
        >
          <div className="hidden lg:flex flex-col items-end text-right w-64 pr-10 mt-12">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ml-auto"
              style={{ background: "linear-gradient(135deg, #000066, #003399)" }}
            >
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-serif font-black text-[#000066] text-xl uppercase tracking-wide mb-1">Analyze</h4>
            <p className="text-[#000066]/55 text-sm leading-relaxed font-light">Financial analytics reveal growth opportunities</p>
          </div>

          <PremiumDonut />

          <div className="hidden lg:flex flex-col gap-14 w-64 pl-10">
            <div className="flex flex-col items-start">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, #00B99E, #15C0A7)" }}
              >
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-serif font-black text-[#000066] text-xl uppercase tracking-wide mb-1">Build</h4>
              <p className="text-[#000066]/55 text-sm leading-relaxed font-light">IT systems execute strategic initiatives</p>
            </div>
            <div className="flex flex-col items-start">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, #9EE8DD, #8DE3D7)" }}
              >
                <Users className="w-6 h-6 text-[#000066]" />
              </div>
              <h4 className="font-serif font-black text-[#000066] text-xl uppercase tracking-wide mb-1">Train</h4>
              <p className="text-[#000066]/55 text-sm leading-relaxed font-light">Talent development ensures sustained execution</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative p-8 rounded-2xl bg-white border border-[#000066]/8 hover:border-[#00B99E]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#00B99E]/10 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: "linear-gradient(90deg, #15C0A7, #8DE3D7)" }} />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, rgba(21,192,167,0.12), rgba(141,227,215,0.18))" }}
              >
                <item.icon className="w-6 h-6" style={{ color: "#15C0A7" }} />
              </div>
              <h3 className="font-serif text-lg font-black text-[#000066] mb-3 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-[#000066]/60 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
