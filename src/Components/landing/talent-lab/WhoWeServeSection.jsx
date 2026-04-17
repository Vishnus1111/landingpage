import React from 'react';
import SectionCard from './shared/SectionCard';

const segments = [
  {
    title: 'Schools',
    desc: 'Structured thinking, communication confidence, and emotional regulation from early years.',
  },
  {
    title: 'Universities & Colleges',
    desc: 'Placement readiness delivered by corporate HR and talent acquisition professionals.',
  },
  {
    title: 'Corporates',
    desc: 'Behavioural performance and leadership readiness for early-career to senior professionals.',
  },
  {
    title: 'Faculty & Educators',
    desc: 'Neuroscience-backed teaching strategies without increasing workload.',
  },
];

export default function WhoWeServeSection() {
  return (
    <SectionCard>
      <div className="text-center mb-10">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">
          Who We Serve
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((item, index) => (
          <div key={index} className="gradient-border-card">
            <div className="gradient-border-card-inner text-center">
              <div
                className="w-full h-32 rounded-xl mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #7c3aed40, #7c3aed80)' }}
              />
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}