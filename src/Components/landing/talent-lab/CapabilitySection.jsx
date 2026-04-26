import React from 'react';
import SectionCard from './shared/SectionCard';
import GradientStars from './shared/GradientStars';

const stats = [
  { value: '78%', label: 'of standard training has no measurable outcome' },
  { value: '6 weeks', label: 'Average time to visible behaviour change in our programs' },
  { value: '91%', label: 'of our participants report improved workplace performance' },
];

export default function CapabilitySection() {
  return (
    <SectionCard>
      <div className="text-center mb-10">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          We Build Capability Through L&D Programs and Training
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div>
          <h3 className="text-xl font-bold text-[#f98ac7] mb-3">The Problem</h3>
          <p className="text-slate-600 leading-relaxed">
            Most training programs focus on content delivery. India produces academically qualified graduates — industry demands performance-ready professionals.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#f98ac7] mb-3">Our Approach</h3>
          <p className="text-slate-600 leading-relaxed">
            At Meilleur Talent Lab, we design L&amp;D programs grounded in <strong>cognitive science, behavioural psychology, and real-world hiring frameworks.</strong> We build measurable capabilities — not motivational sessions.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex justify-center mb-3">
              <GradientStars count={5} />
            </div>
            <p className="text-3xl font-bold text-[#000066] mb-2">{stat.value}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
