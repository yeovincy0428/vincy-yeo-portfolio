import React, { useState, useRef, useCallback, useEffect } from 'react';
import { StoryboardShot, ProjectItem } from '../types';
import { StoryboardPanelIllustration } from './HandDrawnSvg';
import { Sparkles, Sliders, Film, Eye, Maximize2, MoveHorizontal } from 'lucide-react';

interface StoryboardComparisonSliderProps {
  shot: StoryboardShot;
  project: ProjectItem;
  lang?: 'zh' | 'en';
}

// Renders the stylized color-graded cinematic final frame matching the project and shot
export const CinematicFinalFrame: React.FC<{
  shot: StoryboardShot;
  project: ProjectItem;
}> = ({ shot, project }) => {
  const doodleType = shot.panelDoodleType || 'condo';

  return (
    <div className="w-full h-full relative overflow-hidden select-none bg-[#11100F]">
      {/* 16:9 or 2.39:1 Cinematic letterboxing / anamorphic flare styling */}
      {doodleType === 'condo' && (
        <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-tr from-[#1B1917] via-[#2A231F] to-[#5C4533]">
          {/* Subtle architectural silhouette & window warm glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(224,188,117,0.35),transparent_60%)]" />
          <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
          {/* Apartment block shapes with depth */}
          <div className="absolute bottom-4 left-10 w-44 h-32 bg-[#1A1816] rounded-t-md border border-[#3E3832] shadow-2xl flex flex-col justify-end p-2">
            <div className="grid grid-cols-4 gap-1.5 opacity-80">
              <div className="h-3 bg-[#E0BC75] rounded-xs shadow-[0_0_8px_#E0BC75]" />
              <div className="h-3 bg-[#2F2923] rounded-xs" />
              <div className="h-3 bg-[#E0BC75]/90 rounded-xs shadow-[0_0_8px_#E0BC75]" />
              <div className="h-3 bg-[#2F2923] rounded-xs" />
            </div>
          </div>
          {/* Ambient dust / anamorphic streak */}
          <div className="absolute top-1/3 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E0BC75]/50 to-transparent blur-[1px]" />
          <div className="absolute top-3 right-4 font-mono text-[10px] text-[#E0BC75] bg-black/60 px-2 py-0.5 rounded border border-[#E0BC75]/30">
            CINELUT · GOLDEN HOUR 3200K
          </div>
        </div>
      )}

      {doodleType === 'adoption-box' && (
        <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-b from-[#1C1A18] via-[#2D2421] to-[#121110]">
          {/* Moody bedroom soft lighting with Arri tungsten key */}
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#D49A3D]/20 blur-3xl" />
          {/* Carton box with realistic texture & warm document spotlight */}
          <div className="relative z-10 w-52 h-36 bg-gradient-to-br from-[#8C765C] to-[#544434] rounded-lg shadow-2xl border border-[#B3997A]/40 p-3 transform rotate-1 flex flex-col justify-between">
            <div className="bg-[#FAF7F0] text-[#1C1917] p-2 rounded shadow-md border-l-4 border-[#8C3827]">
              <div className="text-[10px] font-mono font-bold tracking-widest text-[#8C3827]">MALAYSIA LEGAL DEPT</div>
              <div className="text-xs font-serif font-black tracking-tight mt-0.5">CERTIFICATE OF ADOPTION</div>
              <div className="text-[9px] text-[#555] font-mono mt-0.5">Subject: Mary Wong · 2004</div>
            </div>
            <div className="text-[9px] font-mono text-[#E8DDCB]/70 tracking-wider">PROP #44 · SCENE 2</div>
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-[#E0BC75] bg-black/60 px-2 py-0.5 rounded border border-[#E0BC75]/30">
            ARRI 650W TUNGSTEN KEY · 1/50s f2.8
          </div>
        </div>
      )}

      {doodleType === 'lamp' && (
        <div className="w-full h-full relative flex items-center justify-center bg-[#0C0B0A]">
          {/* High-contrast chiaroscuro single lamp illumination */}
          <div className="absolute left-16 top-10 w-52 h-52 bg-[#F39C12]/25 blur-3xl rounded-full" />
          <div className="relative z-10 flex items-center gap-6">
            {/* Vintage desk lamp head */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#3D3830] to-[#8C6D3F] border border-[#D49A3D] shadow-[0_0_40px_#F39C12] flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#FFF3D1] shadow-[0_0_20px_#FFF]" />
            </div>
            {/* Cinematic silhouette of character head */}
            <div className="w-20 h-24 rounded-full bg-[#1A1816] border border-white/5 shadow-2xl relative">
              <div className="absolute inset-y-0 right-0 w-2 bg-[#F39C12]/70 rounded-r-full blur-[1px]" />
            </div>
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-[#E0BC75] bg-black/60 px-2 py-0.5 rounded border border-[#E0BC75]/30">
            CHIAROSCURO CONTRAST · ISO 800
          </div>
        </div>
      )}

      {doodleType === 'confrontation' && (
        <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-r from-[#201715] via-[#3B1E19] to-[#1F1514]">
          {/* Tension lighting with torn paper fragments */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,82,59,0.3),transparent_70%)]" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-24 h-32 bg-[#FAF6EE] text-[#1C1917] p-2 rounded shadow-2xl rotate-[-6deg] border border-[#DCD5C5] flex flex-col justify-center text-center">
              <span className="text-[10px] font-mono font-bold text-[#C8523B]">ADOPT...</span>
              <div className="h-[2px] bg-[#C8523B] my-1" />
              <span className="text-[8px] font-mono text-[#666]">PART I</span>
            </div>
            <div className="w-24 h-32 bg-[#FAF6EE] text-[#1C1917] p-2 rounded shadow-2xl rotate-[8deg] border border-[#DCD5C5] flex flex-col justify-center text-center">
              <span className="text-[10px] font-mono font-bold text-[#C8523B]">...TION</span>
              <div className="h-[2px] bg-[#C8523B] my-1" />
              <span className="text-[8px] font-mono text-[#666]">PART II</span>
            </div>
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-[#E0BC75] bg-black/60 px-2 py-0.5 rounded border border-[#E0BC75]/30">
            DRAMATIC SPLIT LIGHTING · 5600K KEY
          </div>
        </div>
      )}

      {doodleType === 'hug' && (
        <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-[#231A15] via-[#473024] to-[#1C1613]">
          {/* Warm embrace backlight rim */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(212,154,61,0.4),transparent_65%)]" />
          <div className="relative z-10 flex items-center -space-x-6">
            <div className="w-24 h-24 rounded-full bg-[#2A1F1B] border-2 border-[#D49A3D]/60 shadow-[0_0_30px_rgba(212,154,61,0.4)]" />
            <div className="w-22 h-22 rounded-full bg-[#1C1613] border-2 border-[#E0BC75]/50 shadow-[0_0_25px_rgba(224,188,117,0.3)]" />
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-[#E0BC75] bg-black/60 px-2 py-0.5 rounded border border-[#E0BC75]/30">
            WARM RIM RECONCILE · REC.709 FILM
          </div>
        </div>
      )}

      {doodleType === 'polaroid' && (
        <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-tr from-[#1E1C1A] via-[#2F2722] to-[#191715]">
          {/* Table surface with textured photo prints */}
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-28 h-36 bg-white p-2 pb-6 shadow-2xl rounded-xs rotate-[-8deg] border border-[#DDD] flex flex-col justify-between">
              <div className="w-full h-24 bg-gradient-to-br from-[#8C3827] via-[#D49A3D] to-[#2B2A27] rounded-xs flex items-center justify-center text-white text-xs font-serif font-bold">
                Mother & Daughter
              </div>
              <div className="text-[8px] font-mono text-[#888] text-center">INSTAX 2022</div>
            </div>
            <div className="w-28 h-36 bg-white p-2 pb-6 shadow-2xl rounded-xs rotate-[6deg] border border-[#DDD] flex flex-col justify-between">
              <div className="w-full h-24 bg-gradient-to-br from-[#2E3A59] via-[#4A6274] to-[#C89B50] rounded-xs flex items-center justify-center text-white text-xs font-serif font-bold">
                18th Birthday
              </div>
              <div className="text-[8px] font-mono text-[#888] text-center">FOREVER TOGETHER</div>
            </div>
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-[#E0BC75] bg-black/60 px-2 py-0.5 rounded border border-[#E0BC75]/30">
            MACRO STILL LENS · f1.4 BOKEH
          </div>
        </div>
      )}

      {doodleType === 'vfx-portal' && (
        <div className="w-full h-full relative flex items-center justify-center bg-[#0F0818] overflow-hidden">
          {/* Dimensional portal glow */}
          <div className="absolute w-44 h-56 rounded-[50%] bg-gradient-to-r from-[#8338EC] via-[#3A86FF] to-[#FF006E] blur-xl opacity-70 animate-pulse" />
          <div className="relative z-10 w-36 h-48 rounded-[50%] border-4 border-[#3A86FF] shadow-[0_0_50px_#8338EC] bg-gradient-to-b from-[#1C0A35] to-black flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white blur-md shadow-[0_0_30px_#FFF]" />
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-[#A8DADC] bg-black/60 px-2 py-0.5 rounded border border-[#A8DADC]/30">
            AE VFX PORTAL COMPOSITE · ACEScg
          </div>
        </div>
      )}

      {doodleType === 'anime-fight' && (
        <div className="w-full h-full relative flex items-center justify-center bg-[#10141E] overflow-hidden">
          {/* Lightning strikes & energy blast */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,209,102,0.4),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(239,71,111,0.4),transparent_60%)]" />
          <div className="relative z-10 flex items-center gap-12">
            <div className="w-16 h-16 rounded-full bg-[#FFD166] shadow-[0_0_40px_#FFD166] flex items-center justify-center font-mono font-black text-black text-xs">
              MEI
            </div>
            <div className="w-20 h-20 rounded-full bg-[#EF476F] shadow-[0_0_50px_#EF476F] flex items-center justify-center font-mono font-black text-white text-xs">
              VFX BLAST
            </div>
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-[#FFD166] bg-black/60 px-2 py-0.5 rounded border border-[#FFD166]/30">
            3D CAMERA MATCHMOVE · 60FPS
          </div>
        </div>
      )}

      {doodleType === 'character-sheet' && (
        <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-r from-[#2B1015] via-[#1F1924] to-[#2B200F] overflow-hidden">
          <div className="relative z-10 flex items-center gap-8">
            <div className="w-24 h-36 rounded-xl bg-gradient-to-b from-[#E63946] to-[#7B1822] border-2 border-[#E63946] shadow-[0_0_30px_rgba(230,57,70,0.5)] p-2 text-white flex flex-col justify-end">
              <span className="font-mono text-xs font-bold">VINCY</span>
              <span className="text-[9px] opacity-80">Red Core</span>
            </div>
            <div className="w-24 h-36 rounded-xl bg-gradient-to-b from-[#FFB703] to-[#8C6404] border-2 border-[#FFB703] shadow-[0_0_30px_rgba(255,183,3,0.5)] p-2 text-black flex flex-col justify-end">
              <span className="font-mono text-xs font-bold">MEI</span>
              <span className="text-[9px] opacity-80">Gold Aura</span>
            </div>
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-[#FFB703] bg-black/60 px-2 py-0.5 rounded border border-[#FFB703]/30">
            STYLIZED CELL SHADING · 3D MODEL
          </div>
        </div>
      )}

      {/* Camera watermark overlay */}
      <div className="absolute bottom-2 left-3 flex items-center gap-2 text-[10px] font-mono text-white/70 bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
        <Film className="w-3 h-3 text-[#D49A3D]" />
        <span>{project.title} · FINAL COLOR GRADE</span>
      </div>

      <div className="absolute bottom-2 right-3 text-[10px] font-mono text-[#D49A3D] bg-black/50 px-2 py-0.5 rounded">
        {shot.sceneNo} : {shot.shotNo}
      </div>
    </div>
  );
};

export const StoryboardComparisonSlider: React.FC<StoryboardComparisonSliderProps> = ({
  shot,
  project,
  lang = 'zh'
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const percent = (clamped / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    const onMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="w-full flex flex-col space-y-2">
      {/* Slider Controls Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-[#C8523B]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2B2724]">
            {lang === 'zh' ? '分镜速写 vs 电影成片实拍对比' : 'Storyboard Sketch vs Movie Frame'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-[#787063]">
          <span className="hidden sm:inline">
            {lang === 'zh' ? '拖拽滑动条即时对比' : 'Drag slider to compare'}
          </span>
          <span className="px-2 py-0.5 rounded bg-[#FAF6EE] border border-[#383431]/20 font-bold text-[#C8523B]">
            {Math.round(sliderPos)}%
          </span>
        </div>
      </div>

      {/* Main Comparison Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        className="relative aspect-[16/9] w-full rounded-2xl border-2 border-[#383431] overflow-hidden shadow-inner cursor-ew-resize select-none bg-[#FAF8F3]"
      >
        {/* RIGHT LAYER: Final Movie Color-Graded Frame (full container) */}
        <div className="absolute inset-0 w-full h-full">
          <CinematicFinalFrame shot={shot} project={project} />
        </div>

        {/* LEFT LAYER: Hand-drawn 2D Storyboard Sketch (clipped by slider percentage) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden bg-[#FAF8F3]"
          style={{ width: `${sliderPos}%` }}
        >
          {/* Inner container sized to match full parent width so image doesn't squash */}
          <div
            className="h-full relative"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw'
            }}
          >
            <StoryboardPanelIllustration
              type={shot.panelDoodleType}
              title={shot.sceneNo}
            />

            {/* Hand-drawn paper texture sketch watermark */}
            <div className="absolute top-3 left-3 bg-[#FAF6EE]/90 border border-[#383431]/40 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-[#383431] flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C8523B]" />
              <span>{lang === 'zh' ? '手绘分镜草案 (2D Sketch)' : '2D Storyboard Sketch'}</span>
            </div>
          </div>
        </div>

        {/* Right Label (Visible on final frame side) */}
        <div className="absolute top-3 right-3 bg-black/75 border border-white/20 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-[#E0BC75] flex items-center gap-1.5 shadow-md pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{lang === 'zh' ? '调色正片画幅 (Final Grade)' : 'Final Movie Frame'}</span>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div
          className="absolute inset-y-0 z-30 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Vertical dividing bar */}
          <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)]" />

          {/* Center Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-[#2E2B28] text-white border-2 border-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
            <MoveHorizontal className="w-4 h-4 text-[#D49A3D]" />
          </div>
        </div>
      </div>

      {/* Quick Quick-snap preset buttons */}
      <div className="flex items-center justify-between text-xs font-mono pt-1">
        <button
          type="button"
          onClick={() => setSliderPos(100)}
          className={`px-2.5 py-1 rounded-lg border transition-all ${
            sliderPos > 90
              ? 'bg-[#C8523B] text-white border-[#C8523B]'
              : 'bg-white text-[#383431] border-[#383431]/30 hover:bg-[#FAF6EE]'
          }`}
        >
          ← {lang === 'zh' ? '100% 手绘分镜' : '100% Storyboard'}
        </button>

        <button
          type="button"
          onClick={() => setSliderPos(50)}
          className={`px-3 py-1 rounded-lg border transition-all ${
            sliderPos >= 45 && sliderPos <= 55
              ? 'bg-[#2E2B28] text-white border-[#2E2B28]'
              : 'bg-white text-[#383431] border-[#383431]/30 hover:bg-[#FAF6EE]'
          }`}
        >
          {lang === 'zh' ? '50/50 对比' : '50/50 Split'}
        </button>

        <button
          type="button"
          onClick={() => setSliderPos(0)}
          className={`px-2.5 py-1 rounded-lg border transition-all ${
            sliderPos < 10
              ? 'bg-[#C8523B] text-white border-[#C8523B]'
              : 'bg-white text-[#383431] border-[#383431]/30 hover:bg-[#FAF6EE]'
          }`}
        >
          {lang === 'zh' ? '100% 调色成片' : '100% Final Frame'} →
        </button>
      </div>
    </div>
  );
};
