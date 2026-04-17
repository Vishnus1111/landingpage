import React from 'react';
import SectionCard from './shared/SectionCard';
import GradientProgressBar from './shared/GradientProgressBar';
import { Briefcase, UserCheck, ShieldCheck, Layers } from 'lucide-react';

const challenges = [
  { icon: Briefcase, title: 'Campus Placements', desc: 'Graduates unprepared for behavioural evaluation.' },
  { icon: UserCheck, title: 'Early-Career Retention', desc: 'New hires struggle to perform independently.' },
  { icon: ShieldCheck, title: 'Manager Readiness', desc: 'Promotion without leadership capability.' },
  { icon: Layers, title: 'Leadership Pipelines', desc: 'Thin bench of pressure-tested leaders.' },
];

const progressBars = [
  { value: 67, description: 'Graduates unprepared for industry roles' },
  { value: 58, description: 'New hires underperform in first 6 months' },
  { value: 72, description: 'Managers promoted without leadership training' },
  { value: 80, description: 'Organisations report critical skill gaps' },
];

export default function WhyCapabilitySection() {
  return (
    <SectionCard>
      <div className="text-center mb-10">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Why Capability Building Matters in India Today
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Schools prioritise syllabus completion. Organisations require reasoning, articulation, and decision-making under pressure.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {challenges.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="p-5 rounded-2xl bg-slate-50 text-center">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'linear-gradient(135deg, #6eb9fc20, #cd97df20, #fd957d20)' }}>
                <Icon className="w-6 h-6" style={{ stroke: '#cd97df' }} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="space-y-6 mb-8">
        {progressBars.map((bar, index) => (
          <GradientProgressBar key={index} value={bar.value} description={bar.description} />
        ))}
      </div>

      <p className="text-center font-semibold text-slate-700">
        Our programs close this gap systematically.
      </p>
    </SectionCard>
  );
}