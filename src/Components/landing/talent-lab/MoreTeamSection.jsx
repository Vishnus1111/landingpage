import React from 'react';
import SectionCard from './shared/SectionCard';

const moreTeam = [
  {
    name: 'Mr. Asad Khaleel',
    role: 'HR & Training Professional. 11+ years in campus recruitment, employer branding, and early-career mentoring.',
    tags: ['ENGINEERING', 'SCHOOLS', 'EARLY-CAREER'],
  },
  {
    name: 'Syeda Qussiaya',
    role: 'Senior Trainer | Curriculum Design. 6+ years simplifying complex concepts and building learner confidence.',
    tags: ['SCHOOLS', 'ENTRY-LEVEL'],
  },
  {
    name: 'Tazeen Syeda',
    role: 'L&D Head | Competency Design. 25+ years across schools, universities, and corporates. Leadership coaching specialist.',
    tags: ['SENIOR LEADERSHIP', 'SCHOOLS'],
  },
];

export default function MoreTeamSection() {
  return (
    <SectionCard>
      <div className="text-center mb-10">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">
          More Team Members
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {moreTeam.map((member, index) => (
          <div key={index} className="gradient-border-card">
            <div className="gradient-border-card-inner text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #6eb9fc, #cd97df, #fd957d)' }}>
                {member.name.split(' ').map((name) => name[0]).slice(0, 2).join('')}
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 text-sm">{member.name}</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">{member.role}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {member.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="team-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}