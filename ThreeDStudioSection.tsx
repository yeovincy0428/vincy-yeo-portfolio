import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ThreeDStoryboardStage } from './ThreeDStoryboardStage';
import { SKILL_STACK } from './portfolioData';
import { Box, Camera, Layers, Wand2, Compass, Cpu, Film, Sparkles, CheckCircle2 } from 'lucide-react';
import { BrushUnderline, WashiTape } from './HandDrawnSvg';

export const ThreeDStudioSection: React.FC<{ lang?: 'zh' | 'en' }> = ({ lang = 'zh' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  const yBgGrid = useTransform(smoothProgress, [0, 1], [40, -40]);
  const yStage = useTransform(smoothProgress, [0, 1], [35, -35]);
  const ySidebar = useTransform(smoothProgress, [0, 1], [-25, 25]);
  const ySkills = useTransform(smoothProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      id="three-d"
      className="relative py-16 md:py-24 border-b-2 border-[#383431] bg-[#F4EFE6] overflow-hidden"
    >
      {/* Background 3D coordinates parallax grid */}
      <motion.div
        style={{ y: yBgGrid }}
        className="absolute inset-x-0 -top-20 -bottom-20 opacity-15 pointer-events-none bg-[radial-gradient(#383431_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#383431] bg-white text-xs font-mono font-bold uppercase tracking-wider text-[#C8523B] mb-3 shadow-xs">
            <Box className="w-3.5 h-3.5 text-[#C8523B]" />
            <span>3D Pre-vis & Virtual Production</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1C1917] tracking-tight">
            {lang === 'zh' ? '3D空间预演与视听合成工坊' : '3D Pre-visualization & Virtual Studio'}
          </h2>
          <p className="mt-3 text-base text-[#57534E]">
            {lang === 'zh'
              ? '将电影镜头语言从平面草图升维至 3D 虚拟空间。在真实开机前，精确测算焦段透视（24mm/50mm/85mm）、光影明暗与演员走位。'
              : 'Bridging 2D sketch storyboarding and 3D digital camera blocking to eliminate uncertainty before on-set production.'}
          </p>
        </div>

        {/* 3D Interactive Stage & Workflow Controls with Parallax Layers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Interactive 3D Canvas Viewport with Parallax Float */}
          <motion.div style={{ y: yStage }} className="lg:col-span-8">
            <ThreeDStoryboardStage />
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#787063] px-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Interactive 3D Engine: Three.js WebGL</span>
              </span>
              <span>Supported: Orbit, Focal Length FOV, Wireframe/Noir Styles</span>
            </div>
          </motion.div>

          {/* Workflow Step Cards with Parallax Float */}
          <motion.div style={{ y: ySidebar }} className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl border-2 border-[#383431] p-5 shadow-sm relative">
              <div className="absolute -top-3 right-4">
                <WashiTape className="w-16 h-5" color="#E8D7BF" angle="3deg" />
              </div>

              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#C8523B] flex items-center gap-1.5 mb-3">
                <Compass className="w-4 h-4" />
                {lang === 'zh' ? '五步视听工业化工作流' : '5-Step Audiovisual Pipeline'}
              </h4>

              <div className="space-y-3.5">
                {[
                  {
                    step: '01',
                    titleZh: '叙事剧作与节奏脉络',
                    titleEn: 'Narrative Script & Beats',
                    descZh: '剧本围读、情绪分镜场次拆解，确立情感转折点'
                  },
                  {
                    step: '02',
                    titleZh: '手绘分镜 (40+ Pages)',
                    titleEn: 'Hand-drawn Storyboard',
                    descZh: '手绘纸质草图，标注 CU/MCU/OTS 景别与动作剪辑点'
                  },
                  {
                    step: '03',
                    titleZh: '3D 镜头预演 (3D Pre-vis)',
                    titleEn: '3D Camera Pre-visualization',
                    descZh: '虚拟 3D 摄像机调配 24-85mm 镜头透视，模拟现场光源'
                  },
                  {
                    step: '04',
                    titleZh: '现场现场执行 (Shootboard)',
                    titleEn: 'On-set Shootboard Direction',
                    descZh: '场记调度、Arri 钨丝灯与 LED 光比实操，高效率实拍'
                  },
                  {
                    step: '05',
                    titleZh: '3D合成与 Rec.709 调色',
                    titleEn: 'Compositing & Final Master',
                    descZh: '绿幕反求抠像、粒子光效合成，达芬奇色彩科学定影'
                  }
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-3 text-xs">
                    <span className="font-mono font-bold text-[#C8523B] bg-[#FAF0E1] px-1.5 py-0.5 rounded border border-[#E2D2BC]">
                      {item.step}
                    </span>
                    <div>
                      <div className="font-bold text-[#1C1917]">
                        {lang === 'zh' ? item.titleZh : item.titleEn}
                      </div>
                      <div className="text-[#68635B] mt-0.5">{item.descZh}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & 3D innovation badge */}
            <div className="bg-[#FAF3E0] rounded-2xl border-2 border-dashed border-[#D49A3D] p-4 text-xs font-mono text-[#5C4825]">
              <div className="flex items-center gap-2 font-bold text-[#8C6014] mb-1">
                <Sparkles className="w-4 h-4 text-[#D49A3D]" />
                <span>AI + 3D 实验创新 (ECARX 实践)</span>
              </div>
              <p className="leading-relaxed">
                在亿咖通科技实习期间，首创将<strong>即梦 AI + After Effects 漫画与 3D 流程</strong>结合，批量交付短视频，将原本三周的制作周期压缩约 40%。
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skill Matrix Grid with Parallax Elevation */}
        <motion.div
          style={{ y: ySkills }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-2xl border-2 border-[#383431] p-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#C8523B] mb-3">
              <Film className="w-4 h-4" />
              <span>{lang === 'zh' ? '导演与分镜工程' : 'Directing & Storyboard'}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#44403C]">
              {SKILL_STACK.filmmaking.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#C8523B]">✔</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#383431] p-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#2E3A59] mb-3">
              <Box className="w-4 h-4" />
              <span>{lang === 'zh' ? '数字与剪辑工具' : 'Digital & Edit Tools'}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#44403C]">
              {SKILL_STACK.digitalTools.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#2E3A59]">✔</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#383431] p-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#D49A3D] mb-3">
              <Wand2 className="w-4 h-4" />
              <span>{lang === 'zh' ? 'AI工作流与3D特效' : 'AI Workflow & VFX'}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#44403C]">
              {SKILL_STACK.aiAnd3d.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#D49A3D]">✔</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#383431] p-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#4E6B56] mb-3">
              <Compass className="w-4 h-4" />
              <span>{lang === 'zh' ? '跨文化沟通语言' : 'Languages & Global'}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#44403C]">
              {SKILL_STACK.languages.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#4E6B56]">✔</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

