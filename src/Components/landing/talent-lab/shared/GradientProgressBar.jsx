import React from 'react';

export default function GradientProgressBar({ value = 0, description }) {
  const safeValue = Math.max(0, Math.min(value, 100));

  return (
    <div>
      <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${safeValue}%`,
            background: 'linear-gradient(90deg, #6eb9fc 0%, #6eb9fc 10%, #cd97df 50%, #fd957d 100%)',
          }}
        />
      </div>
      <div className="mt-2 flex items-center justify-between gap-4 text-sm">
        <p className="text-slate-600">{description}</p>
        <span className="font-semibold text-slate-800">{safeValue}%</span>
      </div>
    </div>
  );
}