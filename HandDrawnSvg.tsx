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

// 手绘印章效果
export const StampSeal: React.FC<{ className?: string; text?: string }> = ({
  className = 'w-16 h-16',
  text = 'SEAL'
}) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full text-[#C8523B]">
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="6 3" fill="none" opacity="0.85" />
      <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
      <text x="50" y="54" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="monospace" opacity="0.9">
        {text}
      </text>
    </svg>
  </div>
);

// 手绘手写指示箭头
export const SketchArrow: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-12 h-6',
  color = '#C8523B'
}) => (
  <svg viewBox="0 0 60 30" fill="none" className={className}>
    <path d="M5 15 C 20 10, 35 25, 50 15" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M42 8 L52 15 L44 22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
      // Unforgettable 18 原版精美手绘高楼与室内部署
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
      // I'm On My Way 动作特效风格手绘封面
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
      // My Pets Haven 极简纯净版（仅保留猫咪与收留所小屋）
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#FAF6EE]">
          {/* 收留所小屋 */}
          <path d="M170 60 L230 25 L290 60 V145 H170 Z" stroke="#383431" strokeWidth="1.8" fill="#ECE4D5" />
          <path d="M210 95 Q230 80 250 95 V145 H210 Z" stroke="#383431" strokeWidth="1.5" fill="#FAF6EE" />
          <path d="M150 120 H300" stroke="#383431" strokeWidth="1" strokeDasharray="2 3" />

          {/* 右上角木质挂牌 */}
          <rect x="200" y="45" width="60" height="18" rx="2" fill="#D8C7B0" stroke="#383431" strokeWidth="1.2" />
          <text x="207" y="58" fill="#5A452B" fontSize="8" fontWeight="bold" fontFamily="monospace">SHELTER</text>

          {/* 纯净手绘猫咪 (Cat) */}
          <g transform="translate(100, 78)">
            {/* 猫身体与卷曲尾巴 */}
            <path d="M20 50 C15 35, 30 25, 38 35 C45 25, 55 35, 50 50 Z" stroke="#383431" strokeWidth="1.8" fill="#FAF8F3" />
            <path d="M48 48 C58 48, 62 38, 56 32" stroke="#383431" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* 猫头部与立耳 */}
            <circle cx="28" cy="24" r="11" stroke="#383431" strokeWidth="1.8" fill="#FAF8F3" />
            <polygon points="20,16 23,6 28,14" stroke="#383431" strokeWidth="1.5" fill="#FAF8F3" />
            <polygon points="28,14 33,6 36,16" stroke="#383431" strokeWidth="1.5" fill="#FAF8F3" />
            {/* 胡须与表情 */}
            <line x1="16" y1="25" x2="8" y2="23" stroke="#383431" strokeWidth="1" />
            <line x1="16" y1="27" x2="9" y2="28" stroke="#383431" strokeWidth="1" />
            <line x1="38" y1="25" x2="46" y2="23" stroke="#383431" strokeWidth="1" />
            <line x1="38" y1="27" x2="45" y2="28" stroke="#383431" strokeWidth="1" />
            <circle cx="24" cy="23" r="1.5" fill="#383431" />
            <circle cx="32" cy="23" r="1.5" fill="#383431" />
          </g>

          {/* 底部平地线 */}
          <line x1="20" y1="145" x2="300" y2="145" stroke="#383431" strokeWidth="1.8" />

          {/* 标题标签 */}
          <rect x="15" y="15" width="115" height="22" rx="3" fill="#2B2724" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontWeight="bold">MY PETS HAVEN</text>
        </svg>
      );
  }
};
