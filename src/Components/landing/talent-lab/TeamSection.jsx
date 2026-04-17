import React from 'react';
import SectionCard from './shared/SectionCard';

const team = [
  {
    name: 'Mr. Irfan Parveez',
    role: 'Training Coordinator | HSE & Client Engagement. 16+ years in safety training. Polyglot fluent in 8 languages.',
    tags: ['CORPORATES'],
  },
  {
    name: 'Zahida Mariyam',
    role: 'L&D Specialist | Neuroscience of Learning. 12+ years across schools, universities, and corporates.',
    tags: ['SCHOOLS', 'UNIVERSITIES'],
  },
  {
    name: 'Mr. Vimal Velayutham',
    role: 'Senior Talent Acquisition Leader. 14+ years in global recruitment, data-driven hiring, and workforce planning.',
    tags: ['UNIVERSITIES', 'LEADERSHIP'],
  },
  {
    name: 'Mr. Lindon Stanley',
    role: 'Senior Talent Acquisition Leader. 14+ years in global recruitment, talent analytics, and inclusive hiring.',
    tags: ['UNIVERSITIES', 'EARLY-CAREER'],
  },
];

export default function TeamSection() {
  return (
    <SectionCard>
      <div className="text-center mb-10">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">
          Meet Our Team
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
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