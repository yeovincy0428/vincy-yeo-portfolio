import React from 'react';

// 电影场记板手绘图标
export const DoodleClapper: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 11v8a2 2 0 0 0 2 2 h12a2 2 0 0 0 2 -2v-8Z" />
    <path d="M4 11h16" />
    <path d="M4 11l4 -6h4l-4 6" />
    <path d="M12 11l4 -6h4l-4 6" />
  </svg>
);

// 笔刷下划线
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

// 和风胶带
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

// 手绘分镜/封面插画生成器
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
      // I'm On My Way 特效手绘封面
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
      // My Pets Haven 猫狗与收留所小屋手绘封面
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#FAF6EE]">
          <path d="M210 70 L260 35 L310 70 L310 150 L210 150 Z" fill="#E8DFCF" stroke="#383431" strokeWidth="2" />
          <path d="M245 100 Q260 85 275 100 V150 H245 Z" fill="#FAF6EE" stroke="#383431" strokeWidth="1.5" />
          <path d="M230 110 H290" stroke="#C8523B" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="235" y="102" fill="#C8523B" fontSize="9" fontWeight="bold">SHELTER</text>

          <ellipse cx="90" cy="120" rx="22" ry="16" fill="#D4C4A8" stroke="#383431" strokeWidth="2" />
          <circle cx="70" cy="100" r="14" fill="#D4C4A8" stroke="#383431" strokeWidth="2" />
          <path d="M60 92 Q52 105 62 112" stroke="#383431" strokeWidth="2" fill="#8C7D6B" />
          <circle cx="66" cy="98" r="2" fill="#383431" />
          <circle cx="74" cy="98" r="2" fill="#383431" />
          <ellipse cx="70" cy="103" rx="3" ry="2" fill="#C8523B" />

          <ellipse cx="150" cy="125" rx="18" ry="14" fill="#FAF8F3" stroke="#383431" strokeWidth="2" />
          <circle cx="150" cy="102" r="12" fill="#FAF8F3" stroke="#383431" strokeWidth="2" />
          <polygon points="140,94 144,82 150,92" fill="#FAF8F3" stroke="#383431" strokeWidth="1.8" />
          <polygon points="150,92 156,82 160,94" fill="#FAF8F3" stroke="#383431" strokeWidth="1.8" />
          <line x1="142" y1="104" x2="132" y2="102" stroke="#383431" strokeWidth="1.2" />
          <line x1="142" y1="106" x2="133" y2="108" stroke="#383431" strokeWidth="1.2" />
          <line x1="158" y1="104" x2="168" y2="102" stroke="#383431" strokeWidth="1.2" />
          <line x1="158" y1="106" x2="167" y2="108" stroke="#383431" strokeWidth="1.2" />

          <path d="M112 80 Q116 72 120 80 Q124 72 128 80 Q120 92 120 92 Z" fill="#C8523B" />
          <circle cx="110" cy="98" r="3" fill="#D4C4A8" />
          <circle cx="118" cy="95" r="3" fill="#D4C4A8" />
          <circle cx="126" cy="98" r="3" fill="#D4C4A8" />

          <line x1="10" y1="145" x2="310" y2="145" stroke="#383431" strokeWidth="2" />

          <rect x="15" y="15" width="115" height="22" rx="3" fill="#2B2724" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontWeight="bold">MY PETS HAVEN</text>
        </svg>
      );
  }
};
