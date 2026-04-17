import React from 'react';

export default function GradientButton({ children }) {
  return (
    <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#000066] to-[#00BFA6] text-white font-semibold text-sm shadow-[0_14px_32px_rgba(0,191,166,0.22)] hover:shadow-[0_18px_38px_rgba(0,191,166,0.28)] transition-all duration-300 hover:scale-[1.02] border border-[#000066]/10">
      {children}
    </button>
  );
}