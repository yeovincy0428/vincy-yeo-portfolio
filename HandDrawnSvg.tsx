import React from 'react';

// Hand-drawn brush underline
export const BrushUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-3',
  color = '#C8523B'
}) => (
  <svg
    viewBox="0 0 240 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M3 11.5C32 7.5 75 4 122 6C169 8 206 10.5 237 9.5M8 13.5C45 9 102 7.5 158 9C192 10 220 12 235 11"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.85"
    />
  </svg>
);

// Washi masking tape sticker effect
export const WashiTape: React.FC<{ className?: string; color?: string; angle?: string }> = ({
  className = 'w-24 h-6',
  color = '#E7DFCF',
  angle = '-3deg'
}) => (
  <div
    style={{ transform: `rotate(${angle})` }}
    className={`inline-block shadow-sm ${className}`}
  >
    <svg viewBox="0 0 120 30" fill="none" className="w-full h-full">
      <path
        d="M2 5L7 2L13 6L18 3L115 5L118 12L114 20L119 28L112 27L10 28L3 24L7 16L2 5Z"
        fill={color}
        fillOpacity="0.88"
        stroke="#423E3A"
        strokeWidth="0.8"
        strokeDasharray="2 3"
      />
      <line x1="8" y1="15" x2="112" y2="15" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.6" />
    </svg>
  </div>
);

// Hand-drawn Sketch Arrow
export const SketchArrow: React.FC<{ className?: string; direction?: 'right' | 'down' | 'curved'; color?: string }> = ({
  className = 'w-12 h-8',
  direction = 'right',
  color = '#383431'
}) => {
  if (direction === 'curved') {
    return (
      <svg viewBox="0 0 80 50" fill="none" className={className}>
        <path
          d="M8 40 C 25 10, 48 8, 70 20"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M58 14 L 72 20 L 64 30"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'down') {
    return (
      <svg viewBox="0 0 30 60" fill="none" className={className}>
        <path
          d="M15 4 C 14 22, 16 38, 15 52"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M7 43 L 15 53 L 23 43"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 60 30" fill="none" className={className}>
      <path
        d="M4 15 C 18 13, 38 16, 52 14"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M42 7 L 54 14 L 43 23"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Hand-drawn Camera doodle
export const DoodleCamera: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#2E2B28'
}) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path
      d="M22 14 H38 L42 20 H54 C57 20 59 22 59 25 V48 C59 51 57 53 54 53 H10 C7 53 5 51 5 48 V25 C5 22 7 20 10 20 H20 L22 14 Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FDFBF7"
    />
    <circle
      cx="32"
      cy="36"
      r="10"
      stroke={color}
      strokeWidth="2.5"
      strokeDasharray="40"
      fill="#ECE5D8"
    />
    <circle cx="32" cy="36" r="4" fill={color} />
    <circle cx="48" cy="28" r="2.5" fill={color} />
  </svg>
);

// Hand-drawn Clapperboard doodle
export const DoodleClapper: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#2E2B28'
}) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    {/* Clapper base */}
    <rect
      x="8"
      y="24"
      width="48"
      height="32"
      rx="3"
      stroke={color}
      strokeWidth="2.5"
      fill="#FAF7F2"
    />
    {/* Clapper top tilted */}
    <g transform="rotate(-12 8 22)">
      <rect
        x="6"
        y="12"
        width="52"
        height="12"
        rx="2"
        stroke={color}
        strokeWidth="2.5"
        fill="#2E2B28"
      />
      <line x1="16" y1="12" x2="22" y2="24" stroke="#FFF" strokeWidth="2.5" />
      <line x1="28" y1="12" x2="34" y2="24" stroke="#FFF" strokeWidth="2.5" />
      <line x1="40" y1="12" x2="46" y2="24" stroke="#FFF" strokeWidth="2.5" />
    </g>
    {/* Scene text sketch lines */}
    <line x1="14" y1="34" x2="28" y2="34" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="14" y1="42" x2="24" y2="42" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="36" y1="34" x2="50" y2="34" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="36" y1="42" x2="46" y2="42" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// Hand-drawn Star / Sparkle
export const DoodleStar: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#D49A3D'
}) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path
      d="M20 2 C 20 12, 28 20, 38 20 C 28 20, 20 28, 20 38 C 20 28, 12 20, 2 20 C 12 20, 20 12, 20 2 Z"
      fill={color}
      stroke="#2E2B28"
      strokeWidth="1.2"
    />
  </svg>
);

// Organic Stamp Laurel Seal
export const StampSeal: React.FC<{ textTop: string; textBottom: string; centerYear: string; color?: string }> = ({
  textTop,
  textBottom,
  centerYear,
  color = '#C8523B'
}) => (
  <div className="relative inline-flex items-center justify-center p-1 select-none">
    <div
      style={{ borderColor: color, color }}
      className="w-24 h-24 rounded-full border-2 border-dashed flex flex-col items-center justify-center text-center rotate-[-4deg] p-1 bg-[#FAF6EE]/90 shadow-sm"
    >
      <div className="text-[9px] font-bold tracking-widest uppercase leading-none">{textTop}</div>
      <div className="my-1 text-sm font-extrabold tracking-tighter border-y border-current px-2 py-0.5">
        ★ {centerYear} ★
      </div>
      <div className="text-[8px] font-semibold tracking-wider uppercase leading-none">{textBottom}</div>
    </div>
  </div>
);

// Storyboard Thumbnail Illustration Generator
export const StoryboardPanelIllustration: React.FC<{ type?: string; title?: string }> = ({
  type = 'condo',
  title = 'SCENE'
}) => {
  switch (type) {
    case 'condo':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#FAF8F3]">
          {/* Grid lines */}
          <line x1="20" y1="140" x2="300" y2="140" stroke="#3A3632" strokeWidth="1.5" />
          {/* Condo building isometric */}
          <path d="M60 40 L180 20 L240 50 L240 140 L120 150 L60 125 Z" stroke="#2B2724" strokeWidth="2" fill="#F0ECE1" />
          <path d="M180 20 L180 135 L240 140" stroke="#2B2724" strokeWidth="1.5" />
          {/* Windows */}
          <line x1="75" y1="65" x2="165" y2="50" stroke="#3A3632" strokeWidth="1.2" strokeDasharray="4 6" />
          <line x1="75" y1="85" x2="165" y2="70" stroke="#3A3632" strokeWidth="1.2" strokeDasharray="4 6" />
          <line x1="75" y1="105" x2="165" y2="90" stroke="#3A3632" strokeWidth="1.2" strokeDasharray="4 6" />
          {/* Clouds */}
          <path d="M30 25 Q45 15 60 25 Q75 18 90 25" stroke="#78736B" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M220 30 Q235 22 250 30 Q265 24 280 30" stroke="#78736B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Camera notation label */}
          <rect x="15" y="15" width="85" height="22" rx="3" fill="#2B2724" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontFamily="'Caveat', cursive" fontWeight="bold">EXT. CONDO - LS</text>
        </svg>
      );

    case 'adoption-box':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#FAF8F3]">
          {/* Bedroom background */}
          <line x1="20" y1="150" x2="300" y2="150" stroke="#3A3632" strokeWidth="1.5" />
          {/* Open carton box */}
          <path d="M110 80 L210 70 L250 110 L150 120 Z" fill="#E2DAC9" stroke="#2B2724" strokeWidth="2" />
          <path d="M150 120 L150 160 L250 148 L250 110 Z" fill="#D3C9B5" stroke="#2B2724" strokeWidth="2" />
          <path d="M110 80 L110 125 L150 160" stroke="#2B2724" strokeWidth="2" />
          {/* Document sticking out */}
          <path d="M140 50 L200 45 L225 90 L165 95 Z" fill="#FFF" stroke="#2B2724" strokeWidth="1.8" />
          <text x="155" y="70" fill="#C8523B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">ADOPTION</text>
          <line x1="155" y1="78" x2="195" y2="75" stroke="#333" strokeWidth="1" strokeDasharray="2 3" />
          {/* Rachel reaction doodle */}
          <circle cx="65" cy="90" r="18" stroke="#2B2724" strokeWidth="2" fill="#FFF" />
          <circle cx="60" cy="88" r="3" fill="#2B2724" />
          <circle cx="70" cy="88" r="3" fill="#2B2724" />
          <path d="M62 100 Q65 97 68 100" stroke="#2B2724" strokeWidth="1.5" />
          <text x="60" y="60" fill="#C8523B" fontSize="16" fontFamily="'Caveat', cursive" fontWeight="bold">?!</text>
          <rect x="15" y="15" width="95" height="22" rx="3" fill="#2B2724" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontFamily="'Caveat', cursive" fontWeight="bold">SCENE 2 - REVEAL</text>
        </svg>
      );

    case 'lamp':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#201E1C]">
          {/* Lamp cone of light */}
          <path d="M110 60 L40 180 L200 180 Z" fill="#F4E8C1" fillOpacity="0.18" />
          {/* Desk Lamp */}
          <path d="M90 140 L105 100 L115 65 L100 55 L125 50 L120 70 Z" stroke="#E5DAC2" strokeWidth="2" fill="none" />
          <circle cx="115" cy="65" r="7" fill="#F4E8C1" />
          {/* Rachel sitting curled up */}
          <ellipse cx="230" cy="130" rx="18" ry="24" stroke="#E5DAC2" strokeWidth="2" fill="#2B2724" />
          <circle cx="230" cy="95" r="14" stroke="#E5DAC2" strokeWidth="2" fill="#3A3632" />
          {/* Thought dialogue bubble */}
          <path d="M165 40 Q210 25 250 40 Q260 55 240 65 L245 78 L225 68 Q170 75 165 40 Z" fill="#FAF7F2" stroke="#2B2724" strokeWidth="1.5" />
          <text x="175" y="52" fill="#1C1917" fontSize="10" fontFamily="'Caveat', cursive" fontWeight="bold">"My life has been a lie..."</text>
          <rect x="15" y="15" width="95" height="22" rx="3" fill="#C8523B" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontFamily="'Caveat', cursive" fontWeight="bold">SCENE 3 - NIGHT MCU</text>
        </svg>
      );

    case 'confrontation':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#FAF8F3]">
          {/* Table */}
          <line x1="20" y1="135" x2="300" y2="135" stroke="#3A3632" strokeWidth="2" />
          {/* Two hands tearing paper */}
          <path d="M110 50 L155 50 L150 120 L110 120 Z" fill="#FFF" stroke="#2B2724" strokeWidth="2" />
          <path d="M165 50 L210 50 L210 120 L170 120 Z" fill="#FFF" stroke="#2B2724" strokeWidth="2" />
          {/* Jagged rip */}
          <path d="M155 50 L158 65 L152 80 L160 95 L153 110 L158 120" stroke="#C8523B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Motion lines */}
          <line x1="85" y1="75" x2="100" y2="75" stroke="#C8523B" strokeWidth="2" strokeLinecap="round" />
          <line x1="220" y1="75" x2="235" y2="75" stroke="#C8523B" strokeWidth="2" strokeLinecap="round" />
          {/* Mother weeping figure on side */}
          <circle cx="265" cy="110" r="14" stroke="#78736B" strokeWidth="1.5" fill="#E8E2D5" />
          <rect x="15" y="15" width="115" height="22" rx="3" fill="#C8523B" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontFamily="'Caveat', cursive" fontWeight="bold">SCENE 8 - TORN PAPER</text>
        </svg>
      );

    case 'hug':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#FAF8F3]">
          <path d="M140 85 C140 60 160 60 160 85 C160 120 140 150 140 150" stroke="#2B2724" strokeWidth="2.2" fill="#EFE8DA" />
          <path d="M175 90 C175 65 155 65 155 90 C155 125 175 150 175 150" stroke="#2B2724" strokeWidth="2.2" fill="#DFD6C4" />
          <circle cx="145" cy="65" r="15" stroke="#2B2724" strokeWidth="2" fill="#FAF6EE" />
          <circle cx="170" cy="70" r="14" stroke="#2B2724" strokeWidth="2" fill="#FAF6EE" />
          <text x="142" y="42" fill="#C8523B" fontSize="14" fontFamily="'Caveat', cursive" fontWeight="bold">♡ hug</text>
          <rect x="15" y="15" width="125" height="22" rx="3" fill="#2B2724" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontFamily="'Caveat', cursive" fontWeight="bold">SCENE 10 - RECONCILE</text>
        </svg>
      );

    case 'polaroid':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#FAF8F3]">
          {/* Diagonal table tile pattern */}
          <line x1="40" y1="180" x2="220" y2="0" stroke="#E0D7C5" strokeWidth="1" />
          <line x1="120" y1="180" x2="300" y2="0" stroke="#E0D7C5" strokeWidth="1" />
          {/* Framed polaroids */}
          <g transform="rotate(-8 110 100)">
            <rect x="65" y="45" width="80" height="95" rx="3" fill="#FFF" stroke="#2B2724" strokeWidth="1.8" />
            <rect x="73" y="53" width="64" height="60" fill="#D8CFBD" />
            {/* sketch of two people smiling */}
            <circle cx="95" cy="80" r="8" fill="#FFF" stroke="#2B2724" strokeWidth="1.2" />
            <circle cx="115" cy="80" r="8" fill="#FFF" stroke="#2B2724" strokeWidth="1.2" />
            <line x1="85" y1="125" x2="125" y2="125" stroke="#78736B" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>
          {/* Second polaroid */}
          <g transform="rotate(12 210 105)">
            <rect x="175" y="50" width="75" height="90" rx="3" fill="#FFF" stroke="#2B2724" strokeWidth="1.8" />
            <rect x="182" y="58" width="61" height="56" fill="#C5BAA5" />
            <circle cx="212" cy="82" r="10" fill="#FFF" stroke="#2B2724" strokeWidth="1.2" />
          </g>
          <rect x="15" y="15" width="130" height="22" rx="3" fill="#2B2724" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontFamily="'Caveat', cursive" fontWeight="bold">SCENE 11 - CU POLAROIDS</text>
        </svg>
      );

    case 'anime-fight':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#1C2333]">
          {/* Lightning strikes */}
          <path d="M160 10 L145 70 L170 85 L150 170" stroke="#FFD166" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M160 10 L145 70 L170 85 L150 170" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
          {/* Fighter silhouette Mei */}
          <circle cx="90" cy="80" r="14" fill="#FFD166" />
          <path d="M80 94 L125 90 L110 140" stroke="#FFD166" strokeWidth="3" strokeLinecap="round" />
          {/* Energy blast effect */}
          <circle cx="220" cy="90" r="28" fill="#EF476F" fillOpacity="0.4" stroke="#EF476F" strokeWidth="2" />
          <circle cx="220" cy="90" r="14" fill="#EF476F" />
          <text x="20" y="160" fill="#FFD166" fontSize="13" fontFamily="'Caveat', cursive" fontWeight="bold">LIGHTNING PUNCH + VFX BLAST</text>
          <rect x="15" y="15" width="125" height="22" rx="3" fill="#EF476F" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontFamily="'Caveat', cursive" fontWeight="bold">I'M ON MY WAY - ACT II</text>
        </svg>
      );

    case 'vfx-portal':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#2B2338]">
          {/* Portal ellipse */}
          <ellipse cx="160" cy="95" rx="55" ry="70" stroke="#8338EC" strokeWidth="4" strokeDasharray="8 6" fill="#3A1D5C" />
          <ellipse cx="160" cy="95" rx="35" ry="45" stroke="#3A86FF" strokeWidth="2.5" />
          <circle cx="160" cy="95" r="15" fill="#FFF" />
          {/* Silhouette running toward portal */}
          <circle cx="75" cy="110" r="9" fill="#FFF" />
          <path d="M75 120 L82 145 M75 125 L65 145" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
          <text x="120" y="35" fill="#3A86FF" fontSize="12" fontFamily="'Caveat', cursive" fontWeight="bold">DIMENSIONAL PORTAL</text>
          <rect x="15" y="15" width="115" height="22" rx="3" fill="#8338EC" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontFamily="'Caveat', cursive" fontWeight="bold">ACT I - 3D TRACKING</text>
        </svg>
      );

    case 'character-sheet':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-full bg-[#FAF8F3]">
          {/* Grid sketch background */}
          <line x1="160" y1="10" x2="160" y2="170" stroke="#DDD" strokeWidth="1" strokeDasharray="3 3" />
          {/* Vincy Model Red */}
          <circle cx="85" cy="45" r="12" stroke="#2B2724" strokeWidth="1.8" fill="#FFF" />
          <path d="M73 60 L97 60 L92 95 L78 95 Z" fill="#2B2724" />
          <path d="M74 72 L96 72" stroke="#E63946" strokeWidth="3" />
          <text x="68" y="125" fill="#E63946" fontSize="11" fontFamily="'Caveat', cursive" fontWeight="bold">Vincy (Red Aura)</text>
          {/* Mei Model Yellow */}
          <circle cx="235" cy="45" r="12" stroke="#2B2724" strokeWidth="1.8" fill="#FFF" />
          <path d="M223 60 L247 60 L242 95 L228 95 Z" fill="#2B2724" />
          <path d="M224 72 L246 72" stroke="#FFB703" strokeWidth="3" />
          <text x="220" y="125" fill="#D49A3D" fontSize="11" fontFamily="'Caveat', cursive" fontWeight="bold">Mei (Yellow Aura)</text>
          <rect x="15" y="15" width="135" height="22" rx="3" fill="#2B2724" />
          <text x="22" y="30" fill="#FFF" fontSize="10" fontFamily="'Caveat', cursive" fontWeight="bold">CHARACTER MODEL SHEET</text>
        </svg>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#FAF8F3] text-[#333] font-mono text-sm border-2 border-dashed border-[#DDD]">
          {title}
        </div>
      );
  }
};
