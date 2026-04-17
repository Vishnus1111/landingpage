import React from 'react';
import SectionCard from './shared/SectionCard';
import { CalendarDays, CalendarRange, GraduationCap, BookOpen, HeartHandshake } from 'lucide-react';

const models = [
  { icon: CalendarDays, title: '1–2 Day Workshops', desc: 'High-impact, focused interventions.' },
  { icon: CalendarRange, title: '4–12 Week Programs', desc: 'Sustained behaviour change cohorts.' },
  { icon: GraduationCap, title: 'Semester Modules', desc: 'Integrated into academic calendars.' },
  { icon: BookOpen, title: 'Faculty Cohorts', desc: 'Trainer and educator development.' },
  { icon: HeartHandshake, title: 'L&D Partnerships', desc: 'Ongoing corporate capability programs.' },
];

const GRADIENT = 'linear-gradient(90deg, #6eb9fc 0%, #6eb9fc 10%, #cd97df 50%, #fd957d 100%)';

export default function EngagementSection() {
  return (
    <SectionCard>
      <div className="flex gap-8">
        <div style={{ flex: '0 0 66%' }}>
          <div className="text-center mb-10">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Engagement Models
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Every engagement begins with a capability gap diagnosis. We offer structured formats for every institutional need.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute top-0 bottom-0 rounded-full"
              style={{ left: '50%', transform: 'translateX(-50%)', width: '3px', background: GRADIENT }}
            />

            <div className="flex flex-col gap-10">
              {models.map((model, index) => {
                const isLeft = index % 2 === 0;
                const Icon = model.icon;

                return (
                  <div key={index} className="relative flex items-center">
                    <div style={{ flex: 1, paddingRight: '40px', textAlign: 'right' }}>
                      {isLeft && (
                        <div className="inline-block p-4 rounded-xl bg-slate-50 text-left">
                          <h4 className="font-semibold text-slate-900 text-sm mb-1">{model.title}</h4>
                          <p className="text-xs text-slate-500">{model.desc}</p>
                        </div>
                      )}
                    </div>

                    <div
                      className="absolute z-10 flex items-center justify-center rounded-full shadow-md"
                      style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '36px',
                        height: '36px',
                        background: GRADIENT,
                        border: '3px solid white',
                      }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    <div style={{ flex: 1, paddingLeft: '40px' }}>
                      {!isLeft && (
                        <div className="inline-block p-4 rounded-xl bg-slate-50">
                          <h4 className="font-semibold text-slate-900 text-sm mb-1">{model.title}</h4>
                          <p className="text-xs text-slate-500">{model.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl flex-shrink-0 flex items-center justify-center self-stretch"
          style={{ flex: '0 0 34%', background: 'linear-gradient(135deg, #7c3aed40, #7c3aed80)', minHeight: '400px' }}
        >
          <span className="text-white/50 text-xs font-medium">Image Placeholder</span>
        </div>
      </div>
    </SectionCard>
  );
}