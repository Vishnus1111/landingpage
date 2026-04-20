import React from 'react';

export default function GradientButton({ children }) {
  return (
    <button className="px-8 py-3.5 rounded-full bg-[linear-gradient(90deg,#6eb9fc_0%,#6eb9fc_10%,#cd97df_50%,#fd957d_100%)] text-white font-semibold text-sm shadow-[0_14px_32px_rgba(205,151,223,0.28)] hover:shadow-[0_18px_38px_rgba(253,149,125,0.34)] transition-all duration-300 hover:scale-[1.02] border border-[#cd97df]/20">
      {children}
    </button>
  );
}