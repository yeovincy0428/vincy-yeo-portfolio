import React from 'react';

interface FilmDividerProps {
  label?: string;
}

export const FilmDivider: React.FC<FilmDividerProps> = ({ 
  label = "SCENE TRANSITION • 24.00 FPS" 
}) => {
  return (
    <div className="relative w-full py-10 flex items-center justify-center overflow-hidden pointer-events-none select-none bg-[#FAF8F5]">
      {/* 贯穿左右的渐变虚线/细线 */}
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#1C1C1C]/20 to-transparent" />
      
      {/* 胶片时间轴风格居中节点 */}
      <div className="relative z-10 flex items-center gap-3 px-5 py-1.5 bg-[#FAF8F5] border border-[#1C1C1C]/15 rounded-full shadow-sm">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8523B] animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C]/20" />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-[#1C1C1C]/60 uppercase">
          {label}
        </span>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C]/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8523B] animate-pulse" />
        </div>
      </div>
    </div>
  );
};
