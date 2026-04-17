import React, { useState, useEffect, useRef } from 'react';
import SectionCard from './shared/SectionCard';

const trainers = [
  {
    name: 'Zahida Mariyam',
    role: 'L&D Specialist | Neuroscience of Learning',
    desc: '12+ years across schools, universities, and corporates. Specialist in brain-based learning strategies and capability building at scale.',
    tags: ['SCHOOLS', 'UNIVERSITIES', 'NEUROSCIENCE'],
  },
  {
    name: 'Mr. Vimal Velayutham',
    role: 'Senior Talent Acquisition Leader',
    desc: '14+ years in global recruitment, data-driven hiring, and workforce planning. Brings real hiring lens to every training session.',
    tags: ['UNIVERSITIES', 'LEADERSHIP', 'HIRING'],
  },
  {
    name: 'Mr. Irfan Parveez',
    role: 'Training Coordinator | HSE & Client Engagement',
    desc: '16+ years in safety training and client engagement. Polyglot fluent in 8 languages — brings unmatched reach and communication depth to every program.',
    tags: ['CORPORATES', 'HSE', 'MULTILINGUAL'],
  },
  {
    name: 'Mr. Lindon Stanley',
    role: 'Senior Talent Acquisition Leader',
    desc: '14+ years in global recruitment, talent analytics, and inclusive hiring. Brings a data-driven and people-first approach to workforce capability.',
    tags: ['UNIVERSITIES', 'EARLY-CAREER', 'ANALYTICS'],
  },
];

const INTERVAL = 5000;
const GRAD = 'linear-gradient(135deg, #6eb9fc 0%, #6eb9fc 10%, #cd97df 50%, #fd957d 100%)';

export default function TrainerCarouselSection() {
  const [active, setActive] = useState(0);
  const [detailsFading, setDetailsFading] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef(null);
  const count = trainers.length;

  const goTo = (next) => {
    if (next === active) return;
    setDetailsFading(true);
    setTimeout(() => {
      setActive(next);
      setDetailsFading(false);
    }, 300);
  };

  const goPrev = () => goTo((active - 1 + count) % count);
  const goNext = () => goTo((active + 1) % count);

  useEffect(() => {
    if (hovered) {
      clearInterval(timerRef.current);
      return undefined;
    }

    timerRef.current = setInterval(goNext, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [hovered, active]);

  const trainer = trainers[active];
  const leftIdx = (active - 1 + count) % count;
  const rightIdx = (active + 1) % count;

  return (
    <SectionCard>
      <div className="text-center mb-10">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900">
          Meet Our Trainers
        </h2>
        <p className="text-slate-500 mt-2">Senior L&amp;D professionals with decades of real-world experience.</p>
      </div>

      <div
        className="flex flex-col md:flex-row gap-8 items-stretch"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ flex: '0 0 60%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ position: 'relative', width: '100%', height: '480px', perspective: '1000px', overflow: 'hidden' }}>
            <div
              style={{
                position: 'absolute',
                height: '90%',
                top: '5%',
                aspectRatio: '9/16',
                left: '0',
                transform: 'translateX(-64%) scale(0.78)',
                transformOrigin: 'right center',
                transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
                opacity: 0.5,
                filter: 'blur(1px)',
                zIndex: 3,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              }}
            >
              <VideoPlaceholder trainer={trainers[leftIdx]} isActive={false} />
            </div>

            <div
              style={{
                position: 'absolute',
                height: '100%',
                top: '0',
                aspectRatio: '9/16',
                left: '50%',
                transform: 'translateX(-50%) scale(1)',
                transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
                opacity: 1,
                zIndex: 10,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(99,102,241,0.3), 0 8px 24px rgba(0,0,0,0.18)',
              }}
            >
              <VideoPlaceholder trainer={trainers[active]} isActive={true} />
            </div>

            <div
              style={{
                position: 'absolute',
                height: '90%',
                top: '5%',
                aspectRatio: '9/16',
                right: '0',
                transform: 'translateX(64%) scale(0.78)',
                transformOrigin: 'left center',
                transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
                opacity: 0.5,
                filter: 'blur(1px)',
                zIndex: 3,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              }}
            >
              <VideoPlaceholder trainer={trainers[rightIdx]} isActive={false} />
            </div>

            <button
              onClick={goPrev}
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Previous trainer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={goNext}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Next trainer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            {trainers.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                style={{
                  width: index === active ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  background: index === active ? GRAD : '#e5e7eb',
                  transition: 'all 0.35s ease',
                }}
                aria-label={`Go to trainer ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            flex: '0 0 40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 8px',
            opacity: detailsFading ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
        >
          <div
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '50%',
              background: GRAD,
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: '22px',
              boxShadow: '0 8px 28px rgba(99,102,241,0.28)',
              flexShrink: 0,
            }}
          >
            {trainer.name.split(' ').map((word) => word[0]).slice(0, 2).join('')}
          </div>

          <h3 className="font-playfair text-xl font-bold text-slate-900 mb-1">{trainer.name}</h3>
          <p className="text-sm font-medium mb-4" style={{ color: '#f98cc6' }}>{trainer.role}</p>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">{trainer.desc}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {trainer.tags.map((tag, index) => (
              <span key={index} className="team-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

function VideoPlaceholder({ trainer, isActive }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(160deg, #1e1b4b 0%, #312e81 55%, #4c1d95 100%)',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)',
            border: '2px solid rgba(255,255,255,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderLeft: '14px solid white',
              marginLeft: '3px',
            }}
          />
        </div>
      </div>

      {isActive && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '10px 14px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)',
          }}
        >
          <p style={{ color: 'white', fontSize: '12px', fontWeight: 600, margin: 0 }}>{trainer.name}</p>
        </div>
      )}
    </div>
  );
}