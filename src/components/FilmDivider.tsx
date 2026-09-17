import React from 'react';

interface FilmDividerProps {
  label?: string;
}

export const FilmDivider: React.FC<FilmDividerProps> = ({ 
  label = "SCENE TRANSITION • 24.00 FPS" 
}) => {
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none">
      {/* 渐变羽化过渡背景，彻底消除分割线条 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1C1C1C]/[0.03] to-transparent" />
      
      {/* 极简电影场记时间轴标记 */}
      <div className="relative z-10 flex items-center gap-4 px-6 py-2 bg-[#FAF8F5] border border-[#1C1C1C]/10 rounded-full shadow-sm">
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8523B] animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C]/20" />
        </div>
        
        <span className="text-[10px] font-mono tracking-widest text-[#1C1C1C]/50 uppercase">
          {label}
        </span>
        
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C]/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8523B] animate-pulse" />
        </div>
      </div>
    </div>
  );
};
