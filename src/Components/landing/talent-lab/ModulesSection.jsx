import React from 'react';
import SectionCard from './shared/SectionCard';
import { Mic, Lightbulb, Shield, Users, BookMarked } from 'lucide-react';

const modules = [
  { icon: Mic, title: 'Communication & Professional Presence', desc: 'Business communication, presentations, public speaking.', result: 'Confident, structured communicators.' },
  { icon: Lightbulb, title: 'Critical Thinking & Decision-Making', desc: 'Problem-solving, argument evaluation, root cause analysis.', result: 'Reasoning over memorisation.' },
  { icon: Shield, title: 'Emotional Intelligence & Pressure', desc: 'Stress awareness, interview composure, feedback handling.', result: 'Stable high-stakes performance.' },
  { icon: Users, title: 'Leadership & Team Effectiveness', desc: 'Situational leadership, conflict management, accountability.', result: 'Self-aware, responsible leaders.' },
  { icon: BookMarked, title: 'Learning-to-Learn & Metacognition', desc: 'Diagnosing gaps, retention strategies, self-correction.', result: 'Independent, adaptive professionals.' },
];

const GRAD = 'linear-gradient(90deg, #6eb9fc 0%, #6eb9fc 10%, #cd97df 50%, #fd957d 100%)';

export default function ModulesSection() {
  return (
    <SectionCard>
      <div className="flex flex-col lg:flex-row gap-6">
        <div style={{ flex: '0 0 66%' }}>
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">
              Core Training Modules
            </h2>
          </div>
        </div>
        <div style={{ flex: '0 0 calc(34% - 24px)' }} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div style={{ flex: '0 0 66%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.slice(0, 4).map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="gradient-border-card">
                  <div className="gradient-border-card-inner">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: GRAD }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">{module.title}</h4>
                    <p className="text-sm text-slate-500 mb-3">{module.desc}</p>
                    <p className="text-xs font-semibold" style={{ color: '#f98cc6' }}>Result: {module.result}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {(() => {
            const module = modules[4];
            const Icon = module.icon;
            return (
              <div className="gradient-border-card">
                <div className="gradient-border-card-inner flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: GRAD }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm">{module.title}</h4>
                    <p className="text-sm text-slate-500 mb-2">{module.desc}</p>
                    <p className="text-xs font-semibold" style={{ color: '#f98cc6' }}>Result: {module.result}</p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        <div
          className="rounded-2xl flex-shrink-0 flex items-center justify-center self-stretch"
          style={{ flex: '0 0 calc(34% - 24px)', background: 'linear-gradient(135deg, #7c3aed40, #7c3aed80)', minHeight: '360px' }}
        >
          <span className="text-white/50 text-xs font-medium">Image Placeholder</span>
        </div>
      </div>
    </SectionCard>
  );
}