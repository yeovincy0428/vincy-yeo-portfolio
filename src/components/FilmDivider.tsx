import React from 'react';

interface FilmDividerProps {
  label?: string;
}

export const FilmDivider: React.FC<FilmDividerProps> = ({ 
  label = "SCENE TRANSITION • 24.00 FPS" 
}) => {
  return (
    <div className="relative w-full py-8 my-6 flex flex-col items-center justify-center pointer-events-none select-none bg-[#FAF8F5]/50 border-y border-[#1C1C1C]/10">
      {/* 上下电影胶片齿孔效果 */}
      <div className="w-full flex justify-between px-4 opacity-25 py-1">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-2 h-1.5 bg-[#1C1C1C] rounded-[1px]" />
        ))}
      </div>

      {/* 居中刻度与字样 */}
      <div className="flex items-center gap-4 py-2">
        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#1C1C1C]/40" />
        <div className="flex items-center gap-2 px-3 py-1 bg-[#1C1C1C] text-[#FAF8F5] rounded-full text-[10px] font-mono tracking-widest shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8523B] animate-pulse" />
          <span>{label}</span>
        </div>
        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#1C1C1C]/40" />
      </div>

      {/* 底部齿孔 */}
      <div className="w-full flex justify-between px-4 opacity-25 py-1">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-2 h-1.5 bg-[#1C1C1C] rounded-[1px]" />
        ))}
      </div>
    </div>
  );
};
