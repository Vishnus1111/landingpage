import React from 'react';
import SectionCard from './shared/SectionCard';
import GradientButton from './shared/GradientButton';
import CircularProgress from './shared/CircularProgress';

const stats = [
  { displayValue: '100+', value: 100, maxValue: 100, label: 'Programs Delivered' },
  { displayValue: '98yrs', value: 94, maxValue: 100, label: 'Combined L&D Expertise' },
  { displayValue: '4.8/5★', value: 94, maxValue: 100, label: 'Average Program Rating' },
];

const audiences = ['School Leaders', 'University Deans', 'Placement Heads', 'HR Directors', 'L&D Leaders'];

export default function CTASection() {
  return (
    <SectionCard>
      <div className="text-center">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Build Capability That Performs Under Pressure
        </h2>
        <p className="text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed">
          Before proposing a program, we examine where performance breaks, what learners struggle to apply, and your institutional constraints.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-10">
          {stats.map((stat, index) => (
            <CircularProgress
              key={index}
              displayValue={stat.displayValue}
              value={stat.value}
              maxValue={stat.maxValue}
              label={stat.label}
              size={180}
              strokeWidth={14}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {audiences.map((audience, index) => (
            <span key={index} className="px-4 py-2 rounded-full bg-slate-50 text-sm font-medium text-slate-700 border border-slate-100">
              {audience}
            </span>
          ))}
        </div>

        <p className="text-slate-600 mb-8">
          Let&apos;s design a capability-building intervention aligned to your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton>Talk to an L&amp;D Expert</GradientButton>
          <button className="px-8 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-slate-300 transition-colors">
            Explore Our Tools
          </button>
        </div>
      </div>
    </SectionCard>
  );
}