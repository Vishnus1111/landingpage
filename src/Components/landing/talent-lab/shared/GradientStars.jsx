import React from 'react';

export default function GradientStars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} className="text-[#f98ac7] text-base leading-none">★</span>
      ))}
    </div>
  );
}
