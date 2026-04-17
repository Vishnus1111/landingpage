import React from 'react';
import SectionCard from './shared/SectionCard';
import { FlaskConical, UserCog, Hammer, BarChart3, Crosshair } from 'lucide-react';

const differentiators = [
  { icon: FlaskConical, text: 'Grounded in neuroscience and behavioural research' },
  { icon: UserCog, text: 'Designed by senior HR and L&D leaders' },
  { icon: Hammer, text: 'Practice-heavy, not slide-heavy' },
  { icon: BarChart3, text: 'Feedback-driven and outcome-focused' },
  { icon: Crosshair, text: 'Aligned with real hiring realities' },
];

export default function HowWeDifferSection() {
  return (
    <SectionCard>
      <div className="flex flex-col lg:flex-row gap-6">
        <div
          className="rounded-2xl flex-shrink-0 flex items-center justify-center"
          style={{ flex: '0 0 34%', background: 'linear-gradient(135deg, #7c3aed40, #7c3aed80)', minHeight: '360px' }}
        >
          <span className="text-white/50 text-xs font-medium">Image Placeholder</span>
        </div>

        <div style={{ flex: '0 0 66%' }}>
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              How We Differ
            </h2>
            <p className="text-slate-500">
              We don&apos;t deliver training. We engineer capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.slice(0, 4).map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-5 rounded-2xl bg-slate-50">
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'linear-gradient(90deg, #6eb9fc 0%, #6eb9fc 10%, #cd97df 50%, #fd957d 100%)' }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">{item.text}</p>
                </div>
              );
            })}

            {(() => {
              const item = differentiators[4];
              const Icon = item.icon;
              return (
                <div className="md:col-span-2 flex items-start gap-3 p-5 rounded-2xl bg-slate-50">
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'linear-gradient(90deg, #6eb9fc 0%, #6eb9fc 10%, #cd97df 50%, #fd957d 100%)' }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">{item.text}</p>
                </div>
              );
            })()}
          </div>

          <p className="text-center text-slate-600 max-w-2xl mx-auto leading-relaxed mt-8">
            We build capability that survives evaluation pressure — in interviews, classrooms, and the workplace.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}