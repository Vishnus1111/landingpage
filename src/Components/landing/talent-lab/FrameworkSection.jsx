import React from 'react';
import SectionCard from './shared/SectionCard';
import { Brain, MessageSquare, Heart, Target } from 'lucide-react';

const pillars = [
  { icon: Brain, title: 'Thinking', desc: 'Reasoning, judgment, and decision frameworks.' },
  { icon: MessageSquare, title: 'Communication', desc: 'Verbal clarity, written precision, structured articulation.' },
  { icon: Heart, title: 'Emotional Regulation', desc: 'Stress management, attention control, confidence under evaluation.' },
  { icon: Target, title: 'Performance', desc: 'Application of capability in real, high-stakes scenarios.' },
];

const metrics = [
  { value: '3x', label: 'Improvement in structured communication' },
  { value: '85%', label: 'Participants pass behavioural interviews post-training' },
  { value: '40%', label: 'Reduction in early-career attrition' },
  { value: '2x', label: 'Faster manager readiness' },
];

export default function FrameworkSection() {
  return (
    <SectionCard>
      <div className="text-center mb-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-3" style={{ color: '#F472B6' }}>
          Our Capability Framework
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Every program is structured around four measurable pillars — ensuring behavioural outcomes, not attendance certificates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <div key={index} className="relative pt-0">
              <div
                className="rounded-t-xl"
                style={{
                  height: '4px',
                  background: 'linear-gradient(90deg, #6eb9fc 0%, #6eb9fc 10%, #cd97df 50%, #fd957d 100%)',
                }}
              />
              <div
                className="absolute w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, #6eb9fc 0%, #6eb9fc 10%, #cd97df 50%, #fd957d 100%)',
                }}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="rounded-b-xl border border-t-0 p-6 pt-10 text-center" style={{ borderColor: '#e5e7eb', background: '#ffffff' }}>
                <h4 className="text-slate-900 font-semibold text-lg mb-2">{pillar.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold mb-1" style={{ color: '#f98cc6' }}>
              {metric.value}
            </p>
            <p className="text-sm text-slate-500">{metric.label}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}