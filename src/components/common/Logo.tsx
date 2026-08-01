import React from 'react';
import { companyData } from '../../data/company';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
  };

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* SPDS Architectural Emblem */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size]} aspect-square`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white group-hover:text-[#B89568] transition-colors duration-500">
          {/* Architectural structural framing lines */}
          <rect x="5" y="5" width="90" height="90" stroke="currentColor" strokeWidth="3" opacity="0.3" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          
          {/* Bold geometric SPDS S-P-D-S interlocking structure */}
          <path d="M25 25 H75 V45 H25 V75 H75" stroke="#B89568" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" />
          <line x1="25" y1="25" x2="25" y2="75" stroke="currentColor" strokeWidth="6" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif-luxury text-xl md:text-2xl font-bold tracking-[0.25em] text-white group-hover:text-[#B89568] transition-colors duration-300">
            {companyData.name}
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#A7A7A7] font-medium -mt-1">
            Architecture
          </span>
        </div>
      )}
    </div>
  );
};
