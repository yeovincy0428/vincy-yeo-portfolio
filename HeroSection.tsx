import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Play, Film, Box, Award, Sparkles, Compass, Download, ExternalLink, ArrowDown } from 'lucide-react';
import { BrushUnderline, WashiTape, DoodleClapper, DoodleCamera, DoodleStar, SketchArrow, StampSeal } from './HandDrawnSvg';

interface HeroSectionProps {
  lang?: 'zh' | 'en';
  onExploreProjects: () => void;
  onExplore3D: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang = 'zh',
  onExploreProjects,
  onExplore3D
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Parallax transforms for Hero layers
  const bgY = useTransform(smoothProgress, [0, 1], [0, 100]);
  const cameraY = useTransform(smoothProgress, [0, 1], [0, -120]);
  const cameraRotate = useTransform(smoothProgress, [0, 1], [-6, 18]);
  const sealY = useTransform(smoothProgress, [0, 1], [0, -140]);
  const sealRotate = useTransform(smoothProgress, [0, 1], [-4, -22]);
  const titleY = useTransform(smoothProgress, [0, 1], [0, -40]);
  const actionsY = useTransform(smoothProgress, [0, 1], [0, -25]);
  const statsY = useTransform(smoothProgress, [0, 1], [0, -50]);
  const cornerMarkY = useTransform(smoothProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b-2 border-[#383431] bg-[#F8F5EE]"
    >
      {/* Background sketch grid lines & paper texture accent with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-x-0 -top-20 -bottom-20 opacity-15 pointer-events-none bg-[radial-gradient(#383431_1px,transparent_1px)] [background-size:20px_20px]"
      />

      {/* Viewfinder corner crop markings with parallax float */}
      <motion.div
        style={{ y: cornerMarkY }}
        className="absolute top-24 right-12 hidden lg:block pointer-events-none opacity-30 font-mono text-[11px] text-[#787063]"
      >
        <div className="w-12 h-12 border-t-2 border-r-2 border-[#383431]" />
        <div className="mt-1 text-right">CROP 2.39:1</div>
      </motion.div>

      <motion.div
        style={{ y: cornerMarkY }}
        className="absolute top-24 left-12 hidden lg:block pointer-events-none opacity-30 font-mono text-[11px] text-[#787063]"
      >
        <div className="w-12 h-12 border-t-2 border-l-2 border-[#383431]" />
        <div className="mt-1">SLATE #01</div>
      </motion.div>

      {/* Decorative floating doodles with differential parallax */}
      <motion.div
        style={{ y: cameraY, rotate: cameraRotate }}
        className="absolute top-28 left-6 md:left-14 hidden sm:block pointer-events-none opacity-80 z-10"
      >
        <DoodleCamera className="w-14 h-14 text-[#383431] drop-shadow-xs" />
        <div className="text-[10px] font-mono text-[#8C8275] mt-1 font-bold">24 FPS · LOG C</div>
      </motion.div>

      <motion.div
        style={{ y: sealY, rotate: sealRotate }}
        className="absolute top-36 right-6 md:right-16 hidden lg:block pointer-events-none opacity-85 z-10"
      >
        <StampSeal
          textTop="TONGJI MFA"
          textBottom="DIRECTOR"
          centerYear="2026"
          color="#C8523B"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tagline with sketch border */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#383431] bg-white text-xs font-mono font-bold uppercase tracking-wider text-[#C8523B] mb-5 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8523B] animate-ping" />
            <span>{lang === 'zh' ? PERSONAL_INFO.heroTaglineZh : PERSONAL_INFO.heroTaglineEn}</span>
          </motion.div>

          {/* Eyebrow Tagline & Main Title with parallax lift */}
          <motion.div style={{ y: titleY }} className="relative flex flex-col items-center mb-3">
            <span className="hero-tagline text-[0.85rem] sm:text-[0.95rem] tracking-[0.15em] uppercase font-semibold text-[#c85a32] mb-3 select-none font-mono">
              Visual Storyteller & Director
            </span>
            <h1 className="hero-title text-center font-serif font-bold text-[#1C1917] tracking-tight leading-[1.1] text-[clamp(2.5rem,5vw,4.2rem)]">
              <span>Vincy Yeo</span>{' '}
              <span className="text-[0.72em] font-normal text-[#57534E] opacity-85 ml-1">
                (杨玮馨)
              </span>
            </h1>
            <BrushUnderline className="w-full max-w-lg h-3 md:h-4 mt-2 text-[#C8523B]" color="#C8523B" />
          </motion.div>

          <motion.p
            style={{ y: titleY }}
            className="text-lg md:text-xl font-serif text-[#4A453E] max-w-3xl mt-5 mb-2 leading-relaxed"
          >
            {lang === 'zh' ? PERSONAL_INFO.bioZh : PERSONAL_INFO.bioEn}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            style={{ y: actionsY }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            <button
              type="button"
              onClick={onExploreProjects}
              className="px-6 py-3 rounded-xl text-sm font-bold font-mono bg-[#2E2B28] text-white hover:bg-[#C8523B] transition-all shadow-sm hover:shadow-md flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              <Film className="w-4 h-4 text-[#D49A3D]" />
              <span>{lang === 'zh' ? '浏览影视与分镜作品' : 'Browse Film & Storyboards'}</span>
            </button>

            <button
              type="button"
              onClick={onExplore3D}
              className="px-6 py-3 rounded-xl text-sm font-bold font-mono bg-white text-[#2E2B28] border-2 border-[#383431] hover:bg-[#FAF6EE] transition-all shadow-xs flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              <Box className="w-4 h-4 text-[#C8523B]" />
              <span>{lang === 'zh' ? '进入 3D 虚拟预演工坊' : 'Open 3D Pre-vis Studio'}</span>
            </button>

            <a
              href={PERSONAL_INFO.contacts.bilibili}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-sm font-bold font-mono bg-[#00A1D6] text-white hover:bg-[#008BB9] transition-all shadow-xs flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{lang === 'zh' ? 'B 站个人空间' : 'Bilibili Space'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Key metrics / Call-sheet stats with parallax elevation */}
          <motion.div
            style={{ y: statsY }}
            className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {PERSONAL_INFO.stats.map((st, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border-2 border-[#383431] p-4 text-center shadow-xs relative hover:-translate-y-1 transition-transform"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <WashiTape
                    className="w-16 h-4"
                    color={i % 2 === 0 ? '#E7DFCF' : '#E0D3BC'}
                    angle={i % 2 === 0 ? '-2deg' : '2deg'}
                  />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-mono text-[#C8523B] mt-1">
                  {st.value}
                </div>
                <div className="text-xs font-mono font-medium text-[#57534E] mt-1">
                  {lang === 'zh' ? st.labelZh : st.labelEn}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

