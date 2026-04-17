import React from 'react';

export default function CircularProgress({ displayValue, label, size = 180, strokeWidth = 14, value = 0, maxValue = 100 }) {
  const normalizedValue = Math.max(0, Math.min(value, maxValue));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (normalizedValue / maxValue) * circumference;

  return (
    <div className="flex flex-col items-center text-center" style={{ width: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={label}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#talentlabGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <defs>
          <linearGradient id="talentlabGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000066" />
            <stop offset="100%" stopColor="#00BFA6" />
          </linearGradient>
        </defs>
        <text x="50%" y="48%" textAnchor="middle" className="fill-slate-900" fontSize="28" fontWeight="700">
          {displayValue}
        </text>
        <text x="50%" y="61%" textAnchor="middle" className="fill-slate-500" fontSize="12" fontWeight="500">
          of 100
        </text>
      </svg>
      <p className="mt-4 text-sm font-medium text-slate-600 max-w-[14rem]">{label}</p>
    </div>
  );
}