import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { DoodleCamera, DoodleClapper, DoodleStar, WashiTape, StampSeal } from './HandDrawnSvg';
import { Film, Eye, Sparkles, Sliders } from 'lucide-react';

interface ParallaxBackgroundProps {
  lang?: 'zh' | 'en';
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ lang = 'zh' }) => {
  const { scrollYProgress, scrollY } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  // Floating background elements at varying parallax depths
  const yLayerSlow = useTransform(smoothProgress, [0, 1], [0, 240]);
  const yLayerMedium = useTransform(smoothProgress, [0, 1], [0, -380]);
  const yLayerFast = useTransform(smoothProgress, [0, 1], [0, -600]);
  const rotateSlow = useTransform(smoothProgress, [0, 1], [0, 45]);
  const rotateCounter = useTransform(smoothProgress, [0, 1], [0, -60]);

  // Current frame calculation (assuming 24 fps timeline)
  const [currentFrame, setCurrentFrame] = useState(1);
  const [timecode, setTimecode] = useState('00:00:01:00');
  const [activeSection, setActiveSection] = useState('INTRO');

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // 1440 frames for standard 60-second virtual reel
      const totalFrames = 1440;
      const frame = Math.max(1, Math.min(totalFrames, Math.round(latest * totalFrames)));
      setCurrentFrame(frame);

      // Convert frame to SMPTE timecode (HH:MM:SS:FF at 24fps)
      const totalSeconds = Math.floor(frame / 24);
      const ff = String(frame % 24).padStart(2, '0');
      const ss = String(totalSeconds % 60).padStart(2, '0');
      const mm = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
      setTimecode(`00:${mm}:${ss}:${ff}`);

      // Section detection based on scroll
      if (latest < 0.18) {
        setActiveSection(lang === 'zh' ? '序幕 · INTRO' : 'SCENE 01 · INTRO');
      } else if (latest < 0.48) {
        setActiveSection(lang === 'zh' ? '作品分镜 · REEL' : 'SCENE 02 · REEL');
      } else if (latest < 0.70) {
        setActiveSection(lang === 'zh' ? '3D预演 · PRE-VIS' : 'SCENE 03 · 3D PREVIS');
      } else if (latest < 0.88) {
        setActiveSection(lang === 'zh' ? '荣誉影展 · AWARDS' : 'SCENE 04 · HONORS');
      } else {
        setActiveSection(lang === 'zh' ? '经历与通告 · CONTACT' : 'SCENE 05 · CONTACT');
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, lang]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Global Subtle Grid & Film Grain Pattern */}
      <motion.div
        style={{ y: yLayerSlow }}
        className="absolute inset-x-0 -top-40 -bottom-40 opacity-20 bg-[radial-gradient(#383431_1.2px,transparent_1.2px)] [background-size:32px_32px]"
      />

      {/* 2. Filmstrip Sprocket Perforations on Far Right Desktop Margin */}
      <div className="hidden 2xl:flex fixed right-3 top-20 bottom-16 flex-col justify-between items-center opacity-30 select-none z-20">
        <div className="font-mono text-[9px] text-[#787063] -rotate-90 tracking-widest uppercase mb-4">
          35MM FILM REEL · 24 FPS
        </div>
        <div className="flex flex-col gap-5">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-4 rounded-[2px] border border-[#383431] bg-[#FAF6EE] shadow-2xs"
            />
          ))}
        </div>
        <div className="font-mono text-[9px] text-[#C8523B] -rotate-90 tracking-widest mt-4 font-bold">
          TONGJI MFA
        </div>
      </div>

      {/* 3. Floating Ambient Parallax Elements - Slow Layer (Far Background) */}
      <motion.div
        style={{ y: yLayerSlow, rotate: rotateSlow }}
        className="absolute top-[28%] left-[3%] opacity-15 hidden lg:block"
      >
        <div className="w-56 h-56 rounded-full border-2 border-dashed border-[#383431] flex items-center justify-center p-4">
          <div className="font-mono text-xs text-[#57534E] text-center tracking-widest">
            DIRECTOR VIEW<br />
            2.39:1 ANAMORPHIC<br />
            ISO 800 · 5600K
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yLayerSlow }}
        className="absolute top-[65%] right-[4%] opacity-20 hidden lg:block"
      >
        <div className="p-4 border-2 border-[#383431] rounded-2xl bg-white/40 font-mono text-xs text-[#57534E] rotate-6 space-y-1">
          <div className="text-[#C8523B] font-bold">TAKE 03 / ROLL 12</div>
          <div>SCENE 14 - EXT. NIGHT</div>
          <div>LENS: 50mm T1.5</div>
          <div>AUDIO: CH1 BOOM / CH2 LAV</div>
        </div>
      </motion.div>

      {/* 4. Floating Ambient Parallax Elements - Medium Layer */}
      <motion.div
        style={{ y: yLayerMedium }}
        className="absolute top-[45%] right-[7%] opacity-25 hidden md:block"
      >
        <DoodleClapper className="w-20 h-20 text-[#2B2724]" />
        <div className="text-[10px] font-mono text-[#8C8275] mt-1 rotate-3 font-semibold">
          CUT! PRINT IT.
        </div>
      </motion.div>

      <motion.div
        style={{ y: yLayerMedium, rotate: rotateCounter }}
        className="absolute top-[78%] left-[5%] opacity-25 hidden md:block"
      >
        <DoodleCamera className="w-16 h-16 text-[#383431]" />
        <div className="text-[10px] font-mono text-[#C8523B] -rotate-6 font-bold">
          ARRI ALEXA MINI
        </div>
      </motion.div>

      {/* 5. Floating Ambient Parallax Elements - Fast Layer (Foreground Depth) */}
      <motion.div
        style={{ y: yLayerFast }}
        className="absolute top-[52%] left-[2%] opacity-35 hidden xl:block"
      >
        <WashiTape className="w-24 h-6" color="#DFD2BD" angle="-12deg" />
      </motion.div>

      <motion.div
        style={{ y: yLayerFast }}
        className="absolute top-[88%] right-[3%] opacity-40 hidden xl:block"
      >
        <DoodleStar className="w-8 h-8 text-[#D49A3D]" />
      </motion.div>

      {/* 6. Bottom Sticky Floating Filmstrip HUD / Parallax Timecode Ribbon */}
      <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-30 pointer-events-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 px-3.5 py-2 rounded-2xl border-2 border-[#383431] bg-[#FAF6EE]/95 backdrop-blur-md shadow-lg text-xs font-mono text-[#1C1917]"
        >
          {/* Section Indicator */}
          <div className="flex items-center gap-1.5 pr-2.5 border-r border-[#383431]/20">
            <span className="w-2 h-2 rounded-full bg-[#C8523B] animate-pulse" />
            <span className="font-bold text-[#C8523B] text-[11px] truncate max-w-[130px] sm:max-w-none">
              {activeSection}
            </span>
          </div>

          {/* SMPTE Timecode */}
          <div className="flex items-center gap-1 font-mono font-bold tracking-wider text-[11px]">
            <span className="text-[#8C8275] hidden sm:inline">TC:</span>
            <span className="bg-[#1C1917] text-white px-2 py-0.5 rounded font-mono text-[11px]">
              {timecode}
            </span>
          </div>

          {/* Frame Number */}
          <div className="hidden md:flex items-center gap-1 text-[11px] text-[#57534E]">
            <span>FR:</span>
            <span className="font-bold text-[#1C1917]">{String(currentFrame).padStart(4, '0')}</span>
          </div>

          {/* Parallax Status Badge */}
          <div className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FAF0E1] border border-[#D9C8B1] text-[10px] text-[#6B5A47] font-semibold">
            <Sparkles className="w-3 h-3 text-[#D49A3D]" />
            <span>PARALLAX ON</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
