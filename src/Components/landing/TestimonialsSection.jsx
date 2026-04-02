import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with the team completely transformed how we present our platform to customers. The new website and mobile app are faster, cleaner, and significantly more intuitive. User drop-off has reduced and engagement has gone up. The system architecture they built scales effortlessly with our transaction volumes. Truly a partner, not just a vendor.",
    client: "Fintech Startup",
    location: "Bangalore",
    tag: "IT Services",
    tagColor: "#15C0A7",
  },
  {
    quote:
      "Before engaging them, our QA process was reactive - we'd catch bugs only after customers reported them. Their structured QA support completely changed that. Fewer production issues, faster release cycles, and our engineering team now has real confidence before every deployment. The ROI was visible within the first quarter.",
    client: "Logistics Company",
    location: "Chennai",
    tag: "Quality Assurance",
    tagColor: "#000066",
  },
  {
    quote:
      "Managing accounts for a multi-location healthcare facility used to be a compliance nightmare. Their team stepped in, restructured our reporting, and introduced analytics dashboards that give us real-time visibility. Our board presentations are sharper, compliance audits are smoother, and decisions are now data-backed rather than intuition-driven.",
    client: "Healthcare Provider",
    location: "Delhi",
    tag: "Financial Analytics",
    tagColor: "#15C0A7",
  },
  {
    quote:
      "We had been running generic leadership workshops for years with little measurable impact. This team designed a custom program built around our retail context - from floor managers to regional heads. The sessions were engaging, practical, and tied directly to business KPIs. Team cohesion and performance have noticeably improved across all our locations.",
    client: "Retail Chain",
    location: "Pune",
    tag: "Talent Lab",
    tagColor: "#000066",
  },
];

function QuoteIcon() {
  return (
    <svg width="36" height="28" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.38667 1.68 8.48 0.106667 12.48 0L13.44 2.24C11.04 2.82667 9.12 4 7.68 5.76C6.29333 7.52 5.6 9.44 5.6 11.52H10.88V24H0ZM18.56 24V14.4C18.56 10.4 19.6267 7.06667 21.76 4.4C23.9467 1.68 27.04 0.106667 31.04 0L32 2.24C29.6 2.82667 27.68 4 26.24 5.76C24.8533 7.52 24.16 9.44 24.16 11.52H29.44V24H18.56Z"
        fill="url(#quote-grad)"
        fillOpacity="0.25"
      />
      <defs>
        <linearGradient id="quote-grad" x1="0" y1="0" x2="32" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#15C0A7" />
          <stop offset="1" stopColor="#8DE3D7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="pt-14 pb-28 lg:pt-18 lg:pb-36 relative overflow-hidden bg-[#F9F9FB]">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#9EE8DD]/20 -translate-x-1/3 -translate-y-1/3 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#000066]/4 translate-x-1/3 translate-y-1/3 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#000066] leading-tight uppercase tracking-wide">
            What Our Clients{" "}
            <br className="hidden sm:block" />
            <span style={{ background: "linear-gradient(90deg,#15C0A7,#8DE3D7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Say
            </span>
          </h2>
          <p className="mt-5 text-[#000066]/55 text-lg font-light max-w-xl mx-auto">
            Real outcomes. Real impact. Real partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative bg-white rounded-2xl p-8 border border-[#000066]/8 shadow-sm hover:shadow-xl hover:shadow-[#00B99E]/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: "linear-gradient(90deg, #15C0A7, #8DE3D7)" }}
              />

              <div className="mb-5">
                <QuoteIcon />
              </div>

              <p className="text-[#000066]/80 text-[15px] leading-relaxed font-light flex-1 mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-[#000066]/6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center text-white text-sm font-black font-serif shrink-0 relative"
                    style={{
                      background: `linear-gradient(135deg, ${t.tagColor}, ${t.tagColor === "#15C0A7" ? "#8DE3D7" : "#003399"})`,
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      boxShadow: `0 0 12px ${t.tagColor}40, inset 0 0 8px ${t.tagColor}30`,
                    }}
                  >
                    {t.client.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-[#000066] text-sm uppercase tracking-wide font-serif leading-none">{t.client}</p>
                    <p className="text-[#000066]/45 text-xs mt-0.5 font-light">{t.location}</p>
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{
                    color: t.tagColor,
                    borderColor: `${t.tagColor}35`,
                    background: `${t.tagColor}12`,
                  }}
                >
                  {t.tag}
                </span>
              </div>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(21,192,167,0.03) 0%, rgba(141,227,215,0.06) 100%)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
