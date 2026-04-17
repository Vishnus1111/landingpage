import React from 'react';
import SectionCard from './shared/SectionCard';
import GradientButton from './shared/GradientButton';

export default function HeroSection() {
  return (
    <SectionCard isFirst>
      <div className="text-center max-w-3xl mx-auto">
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-4 px-4 py-1.5 rounded-full border"
          style={{ borderColor: '#49042a', background: '#49042a' }}
        >
          PREMIUM LEARNING &amp; DEVELOPMENT
        </span>
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Talent Lab | Learning &amp; Development Programs in India
        </h1>
        <p className="text-lg text-slate-500 mb-8 leading-relaxed">
          Evidence-based capability building for Schools, Universities &amp; Corporations.
        </p>
        <GradientButton>Talk to an L&amp;D Expert</GradientButton>
      </div>
    </SectionCard>
  );
}