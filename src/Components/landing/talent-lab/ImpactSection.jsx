import React from 'react';
import SectionCard from './shared/SectionCard';
import { Quote } from 'lucide-react';
import CircularProgress from './shared/CircularProgress';

const stats = [
  { displayValue: '500+', value: 100, maxValue: 100, label: 'Participants Trained' },
  { displayValue: '15+', value: 15, maxValue: 100, label: 'Institutions Served' },
  { displayValue: '4', value: 4, maxValue: 100, label: 'Cities Across India' },
  { displayValue: '92%', value: 92, maxValue: 100, label: 'Learner Satisfaction Rate' },
];

const testimonials = [
  {
    quote: 'The trainers simplified complex topics into clear, actionable steps. Students were engaged, confident, and better prepared for real-world challenges.',
    author: 'CHRIST (Deemed to be University)',
  },
  {
    quote: 'Your commitment to tailoring content to the audience makes your programs stand out.',
    author: 'IIPMB Bengaluru',
  },
];

export default function ImpactSection() {
  return (
    <SectionCard>
      <div className="text-center mb-10">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">
          Proof of Impact
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 justify-items-center">
        {stats.map((stat, index) => (
          <CircularProgress
            key={index}
            displayValue={stat.displayValue}
            value={stat.value}
            maxValue={stat.maxValue}
            label={stat.label}
            size={160}
            strokeWidth={14}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 rounded-2xl bg-slate-50 flex flex-col">
            <div className="flex items-center justify-center mb-4">
              <Quote className="w-8 h-8" style={{ stroke: '#cd97df' }} />
            </div>
            <div
              className="w-full rounded-xl mb-5 flex items-center justify-center"
              style={{ height: '160px', background: 'linear-gradient(135deg, #7c3aed30, #7c3aed60)' }}
            >
              <span className="text-white/40 text-xs font-medium">Image Placeholder</span>
            </div>
            <p className="text-slate-600 italic leading-relaxed mb-4">&quot;{testimonial.quote}&quot;</p>
            <p className="text-sm font-semibold mt-auto" style={{ color: '#f98cc6' }}>— {testimonial.author}</p>
          </div>
        ))}
      </div>

      <div className="text-center p-6 rounded-2xl" style={{ background: 'rgba(251,182,220,0.15)', border: '1px solid rgb(251,182,220)' }}>
        <p className="text-sm leading-relaxed text-black">
          <span className="font-semibold">Pricing:</span> We do not sell standardised courses. Pricing depends on cohort size,
          objectives, duration, assessment depth, and customisation. Transparent structures aligned with measurable impact.
        </p>
      </div>
    </SectionCard>
  );
}