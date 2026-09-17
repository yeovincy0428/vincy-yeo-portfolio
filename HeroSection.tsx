import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from './portfolioData';

interface HeroSectionProps {
  lang: 'zh' | 'en';
  onExploreProjects: () => void;
  onExplore3D: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
}) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-[#FAF8F5]">
      {/* 背景微妙纹理与光晕 */}
      <div className="absolute inset-0 bg-[radial-gradient(#383431_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C8523B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#E0BC75]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* 标签栏 */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C1C1C]/5 border border-[#1C1C1C]/10 text-xs font-mono text-[#1C1C1C]/80">
            <Sparkles className="w-3.5 h-3.5 text-[#C8523B]" />
            <span>{lang === 'zh' ? PERSONAL_INFO.locationZh : PERSONAL_INFO.locationEn}</span>
          </div>

          {/* 姓名主标题 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1C1C] font-serif leading-[1.1]">
            {lang === 'zh' ? PERSONAL_INFO.nameZh : PERSONAL_INFO.nameEn}
          </h1>

          {/* 核心定位 */}
          <p className="text-xl md:text-2xl font-medium text-[#C8523B] max-w-3xl leading-relaxed">
            {lang === 'zh' ? PERSONAL_INFO.heroTaglineZh : PERSONAL_INFO.heroTaglineEn}
          </p>

          {/* 个人简介 */}
          <p className="text-base md:text-lg text-[#1C1C1C]/70 max-w-2xl leading-relaxed font-sans">
            {lang === 'zh' ? PERSONAL_INFO.bioZh : PERSONAL_INFO.bioEn}
          </p>

          {/* 数据亮点列表 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#1C1C1C]/10 max-w-3xl">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-[#1C1C1C] font-mono">{stat.value}</p>
                <p className="text-xs text-[#1C1C1C]/60">{lang === 'zh' ? stat.labelZh : stat.labelEn}</p>
              </div>
            ))}
          </div>

          {/* 行动转化：单个核心 CTA 按钮 */}
          <div className="pt-6">
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1C1C1C] text-white rounded-full font-medium text-sm hover:bg-[#C8523B] transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'zh' ? '下载个人简历 (PDF)' : 'Download Resume (PDF)'}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
