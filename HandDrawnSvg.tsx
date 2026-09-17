import React from 'react';

// 保持不变的 SVG 组件：BrushUnderline 与 WashiTape
export const BrushUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-3',
  color = '#C8523B'
}) => (
  <svg viewBox="0 0 240 16" fill="none" className={className} preserveAspectRatio="none">
    <path
      d="M3 11.5C32 7.5 75 4 122 6C169 8 206 10.5 237 9.5M8 13.5C45 9 102 7.5 158 9C192 10 220 12 235 11"
      stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"
    />
  </svg>
);

export const WashiTape: React.FC<{ className?: string; color?: string; angle?: string }> = ({
  className = 'w-24 h-6',
  color = '#E7DFCF',
  angle = '-3deg'
}) => (
  <div style={{ transform: `rotate(${angle})` }} className={`inline-block shadow-sm ${className}`}>
    <svg viewBox="0 0 120 30" fill="none" className="w-full h-full">
      <path
        d="M2 5L7 2L13 6L18 3L115 5L118 12L114 20L119 28L112 27L10 28L3 24L7 16L2 5Z"
        fill={color} fillOpacity="0.88" stroke="#423E3A" strokeWidth="0.8" strokeDasharray="2 3"
      />
      <line x1="8" y1="15" x2="112" y2="15" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.6" />
    </svg>
  </div>
);

// 手绘分镜封面生成器
export const StoryboardPanelIllustration: React.FC<{ type?: string; title?: string }> = ({
  type = 'condo',
  title = 'SCENE'
}) => {
  switch (type) {
    case 'condo':
      // Unforgettable 18 原版精美手绘封面
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#FAF8F3]">
          <line x1="20" y1="140" x2="300" y2="140" stroke="#3A3632" strokeWidth="1.5" />
          <path d="M60 40 L180 20 L240 50 L240 140 L120 150 L60 125 Z" stroke="#2B2724" strokeWidth="2" fill="#F0ECE1" />
          <path d="M180 20 L180 135 L240 140" stroke="#2B2724" strokeWidth="1.5" />
          <line x1="75" y1="65" x2="165" y2="50" stroke="#3A3632" strokeWidth="1.2" strokeDasharray="4 6" />
          <line x1="75" y1="85" x2="165" y2="70" stroke="#3A3632" strokeWidth="1.2" strokeDasharray="4 6" />
          <rect x="15" y="15" width="115" height="22" rx="3" fill="#2B2724" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontWeight="bold">UNFORGETTABLE 18</text>
        </svg>
      );

    case 'im-on-my-way':
      // I'm On My Way 专属生成的 3D VFX/雷电特效风格手绘封面
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#201D24]">
          <path d="M160 10 L145 70 L170 85 L150 170" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" />
          <circle cx="85" cy="80" r="16" stroke="#FAF6EE" strokeWidth="2" fill="#2B2724" />
          <path d="M85 64 C70 64 60 75 60 90" stroke="#C8523B" strokeWidth="2" />
          <circle cx="230" cy="85" r="24" stroke="#FFB703" strokeWidth="2" strokeDasharray="4 4" fill="#382C1E" />
          <rect x="15" y="15" width="110" height="22" rx="3" fill="#C8523B" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontWeight="bold">I'M ON MY WAY</text>
        </svg>
      );

    case 'pets-haven':
    default:
      // My Pets Haven 公益纪录片手绘写实封面
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#FAF8F3]">
          <line x1="20" y1="150" x2="300" y2="150" stroke="#3A3632" strokeWidth="1.5" />
          <circle cx="160" cy="110" r="25" stroke="#2B2724" strokeWidth="2" fill="#E8DFCF" />
          <path d="M145 100 Q160 85 175 100" stroke="#C8523B" strokeWidth="2" fill="none" />
          <rect x="15" y="15" width="110" height="22" rx="3" fill="#2B2724" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontWeight="bold">MY PETS HAVEN</text>
        </svg>
      );
  }
};
