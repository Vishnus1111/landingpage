import React from 'react';

export default function SectionCard({ children, isFirst = false }) {
  return (
    <section className={`px-6 md:px-10 lg:px-14 ${isFirst ? 'pt-8 pb-12 lg:pt-10 lg:pb-16' : 'py-12 lg:py-16'}`}>
      <div className="max-w-6xl mx-auto rounded-3xl bg-white/95 border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.08)] p-6 md:p-10 lg:p-12">
        {children}
      </div>
    </section>
  );
}
