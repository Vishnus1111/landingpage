import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Palette, Code, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Understand',
    description: 'Deep dive into your goals, audience, and requirements to craft the perfect strategy.',
    iconBg: '#FFFBEB',
    iconColor: '#F59E0B',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Create stunning visuals and intuitive interfaces that reflect your brand identity.',
    iconBg: '#F3E8FF',
    iconColor: '#8B5CF6',
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Build robust, scalable solutions using modern technologies and best practices.',
    iconBg: '#FDF2F8',
    iconColor: '#EC4899',
  },
  {
    icon: HeartHandshake,
    title: 'Support',
    description: 'Ongoing maintenance, updates, and support to ensure your success long-term.',
    iconBg: '#E6FFFA',
    iconColor: '#14B8A6',
  },
];

export default function ProcessSection() {
  return (
    <section id="our-process" className="py-20 px-6 lg:px-12 bg-[#eef4ff]">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-sm font-semibold text-[#1a8a6e] tracking-wider uppercase mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#000066] mb-3">How We Bring Ideas to Life</h2>
          <div className="w-12 h-1 bg-[#1a8a6e] rounded-full mx-auto mb-4" />
          <p className="text-base text-gray-500 max-w-2xl mx-auto">A proven methodology that delivers exceptional results, on time and on budget.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#eef1ff] via-[#000066]/20 to-[#eef1ff]" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                <div className="group flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: step.iconBg }}
                    >
                      <step.icon className="w-7 h-7" style={{ color: step.iconColor }} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-gray-100 shadow flex items-center justify-center">
                      <span className="text-xs font-bold text-[#000066]">{i + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#000066] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
