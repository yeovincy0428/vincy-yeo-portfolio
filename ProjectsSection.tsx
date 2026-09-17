import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { PROJECTS } from './portfolioData';
import { ProjectItem } from './types';
import { Play, Film, ExternalLink, Award, Sparkles, Layers, BookOpen, Camera, Check, Filter } from 'lucide-react';
import { StoryboardPanelIllustration, WashiTape, BrushUnderline, DoodleCamera } from './HandDrawnSvg';
import { StoryboardViewerModal } from './StoryboardViewerModal';

// Parallax Project Card Component
const ParallaxProjectCard: React.FC<{
  project: ProjectItem;
  idx: number;
  lang: 'zh' | 'en';
  onInspect: (p: ProjectItem) => void;
  onCopyBvid: (bvid: string, e: React.MouseEvent) => void;
  copiedBvid: string | null;
}> = ({ project, idx, lang, onInspect, onCopyBvid, copiedBvid }) => {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  // Subtle differential parallax for storyboard artwork vs editorial text
  const yArtwork = useTransform(smoothProgress, [0, 1], [35, -35]);
  const yDetails = useTransform(smoothProgress, [0, 1], [-20, 20]);
  const yTape = useTransform(smoothProgress, [0, 1], [-10, 25]);
  const cardScale = useTransform(smoothProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <motion.article
      ref={cardRef}
      style={{ scale: cardScale }}
      className="bg-white rounded-3xl border-2 border-[#383431] p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
    >
      {/* Corner Washi Tape decoration with parallax float */}
      <motion.div
        style={{ y: yTape }}
        className="absolute top-4 right-6 hidden sm:block z-10"
      >
        <WashiTape
          className="w-24 h-6"
          color={idx % 2 === 0 ? '#E7DFCF' : '#E8D4BB'}
          angle={idx % 2 === 0 ? '-2.5deg' : '3deg'}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-1">
        {/* Left: Interactive Storyboard Visual Stage & Bilibili Entry with Parallax Drift */}
        <motion.div
          style={{ y: yArtwork }}
          className="lg:col-span-6 flex flex-col space-y-4"
        >
          {/* Storyboard Artwork Card */}
          <div className="relative aspect-[16/10] w-full rounded-2xl border-2 border-[#383431] overflow-hidden bg-[#FAF8F3] shadow-sm group-hover:border-[#C8523B] transition-colors">
            {/* First preview panel graphic */}
            <StoryboardPanelIllustration
              type={project.storyboardPreview[0]?.panelDoodleType || 'condo'}
              title={project.title}
            />

            {/* Badge top-left */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#2B2724]/90 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-xs font-mono font-semibold">
              <Film className="w-3.5 h-3.5 text-[#D49A3D]" />
              <span>{project.typeZh} · {project.year}</span>
            </div>

            {/* Storyboard page counter badge */}
            <div className="absolute bottom-3 left-3 bg-[#FAF6EE]/95 border border-[#383431] text-[#2B2724] px-2.5 py-1 rounded-md text-xs font-mono font-bold flex items-center gap-1 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#C8523B]" />
              <span>{project.storyboardPagesCount} 页手绘分镜 · {project.cameraSetupsCount} 机位规划</span>
            </div>

            {/* Quick inspect button hover overlay */}
            <button
              onClick={() => onInspect(project)}
              className="absolute inset-0 bg-[#2B2724]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-[2px] cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-[#D49A3D]" />
              <span>点击展开高精度分镜剖析 (Inspect Storyboard)</span>
            </button>
          </div>

          {/* Multi-Panel mini strip thumbnails */}
          {project.storyboardPreview.length > 1 && (
            <div className="grid grid-cols-3 gap-2">
              {project.storyboardPreview.slice(0, 3).map((panel, pIdx) => (
                <div
                  key={pIdx}
                  onClick={() => onInspect(project)}
                  className="aspect-[16/10] rounded-xl border border-[#383431]/40 overflow-hidden cursor-pointer hover:border-[#C8523B] transition-all hover:-translate-y-0.5"
                  title="点击查看此镜头"
                >
                  <StoryboardPanelIllustration type={panel.panelDoodleType} title={panel.sceneNo} />
                </div>
              ))}
            </div>
          )}

          {/* Direct Bilibili Link Bar */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF6EE] border border-[#383431]/30">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#8C8275]">Bilibili BV:</span>
              <button
                onClick={(e) => onCopyBvid(project.bilibiliBvid, e)}
                className="text-xs font-mono font-bold text-[#1C1917] bg-white px-2 py-0.5 rounded border border-[#D4C9BA] hover:bg-[#F2ECE1] transition-colors flex items-center gap-1 cursor-pointer"
                title="点击复制 BV 号"
              >
                <span>{project.bilibiliBvid}</span>
                {copiedBvid === project.bilibiliBvid ? (
                  <Check className="w-3 h-3 text-emerald-600" />
                ) : null}
              </button>
            </div>

            <a
              href={project.bilibiliUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold font-mono px-3 py-1.5 rounded-lg bg-[#00A1D6] text-white hover:bg-[#008BB9] transition-colors shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{lang === 'zh' ? '在 B 站观看正片' : 'Watch on Bilibili'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Right: Narrative Story, Roles, Awards & Highlights with Parallax Drift */}
        <motion.div
          style={{ y: yDetails }}
          className="lg:col-span-6 flex flex-col justify-between space-y-5"
        >
          <div>
            {/* Role Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.roles.map((role, rIdx) => (
                <span
                  key={rIdx}
                  className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF0E1] border border-[#D8C7B0] text-[#5A452B]"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#1C1917] tracking-tight group-hover:text-[#C8523B] transition-colors">
              {project.title}
            </h3>
            <div className="text-sm font-serif italic text-[#787063] mt-0.5">
              {project.titleEn}
            </div>

            {/* Awards if any */}
            {project.awards && project.awards.length > 0 && (
              <div className="mt-3 bg-[#FAF3E0] border-l-4 border-[#D49A3D] p-3 rounded-r-xl space-y-1">
                {project.awards.map((award, aIdx) => (
                  <div key={aIdx} className="text-xs font-mono font-bold text-[#8C6418] flex items-center gap-1.5">
                    <span className="text-[#C8523B]">★</span>
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Summary */}
            <p className="mt-4 text-sm md:text-base leading-relaxed text-[#44403C]">
              {project.summary}
            </p>

            {/* Technical Highlights list */}
            <div className="mt-4 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C8275]">
                {lang === 'zh' ? '核心视听与镜头工程亮点:' : 'Key Visual & Production Highlights:'}
              </div>
              <ul className="space-y-1.5 text-xs md:text-sm text-[#44403C]">
                {project.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-[#C8523B] font-bold mt-0.5">▪</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actions & Storyboard inspection trigger */}
          <div className="pt-4 border-t border-[#EAE3D5] flex flex-wrap items-center justify-between gap-3">
            {/* Equipment tags */}
            <div className="flex flex-wrap gap-1">
              {project.equipment.slice(0, 3).map((eq, eIdx) => (
                <span key={eIdx} className="text-[11px] font-mono text-[#787063] bg-[#FAF6EE] px-2 py-0.5 rounded border border-[#E0D7C6]">
                  {eq}
                </span>
              ))}
            </div>

            {/* Inspect Storyboard button */}
            <button
              type="button"
              onClick={() => onInspect(project)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono bg-[#2E2B28] text-white hover:bg-[#C8523B] transition-colors shadow-sm cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#D49A3D]" />
              <span>{lang === 'zh' ? '完整分镜拆解' : 'Storyboard Breakdown'}</span>
              <span className="text-white/60">({project.storyboardPagesCount}P)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

interface ProjectsSectionProps {
  lang?: 'zh' | 'en';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  lang = 'zh'
}) => {
  const [filter, setFilter] = useState<'all' | 'Narrative Film' | 'Animation & VFX' | 'Documentary'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [copiedBvid, setCopiedBvid] = useState<string | null>(null);

  // Filter projects by category filter
  const filteredProjects = PROJECTS.filter(project => {
    return filter === 'all' || project.type === filter;
  });

  const handleCopyBvid = (bvid: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(bvid);
    setCopiedBvid(bvid);
    setTimeout(() => setCopiedBvid(null), 2000);
  };

  return (
    <section id="projects" className="relative py-16 md:py-24 border-b-2 border-[#383431] bg-[#F9F6F0]">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#383431] bg-white text-xs font-mono font-bold uppercase tracking-wider text-[#C8523B] mb-3 shadow-xs">
              <Film className="w-3.5 h-3.5 text-[#C8523B]" />
              <span>{lang === 'zh' ? '实拍与分镜代表作' : 'Featured Film & Storyboard Works'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1C1917] tracking-tight">
              {lang === 'zh' ? '作品集与手绘分镜工程' : 'Portfolio & Storyboard Projects'}
            </h2>
            <p className="mt-2 text-base text-[#57534E] max-w-2xl">
              {lang === 'zh'
                ? '每一个镜头都经历 40+ 页现场分镜、3D 镜头预演与光影蓝图推敲。点击作品可直接跳转 B 站观看或展开深度分镜拆解。'
                : 'Each project is backed by comprehensive storyboard pages, 3D camera pre-visualization, and lighting schematics.'}
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', labelZh: `全部类型 (${PROJECTS.length})`, labelEn: `All Types (${PROJECTS.length})` },
              { id: 'Narrative Film', labelZh: '剧情短片', labelEn: 'Narrative Film' },
              { id: 'Animation & VFX', labelZh: '动画与合成', labelEn: 'Animation & VFX' },
              { id: 'Documentary', labelZh: '纪录片', labelEn: 'Documentary' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#2E2B28] text-white border-[#2E2B28] shadow-sm'
                    : 'bg-white text-[#57534E] border-[#D4C9BA] hover:bg-[#F2ECE1] hover:text-[#1C1917]'
                }`}
              >
                {lang === 'zh' ? tab.labelZh : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards List with Parallax */}
        <div className="space-y-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <ParallaxProjectCard
                key={project.id}
                project={project}
                idx={idx}
                lang={lang}
                onInspect={setActiveModalProject}
                onCopyBvid={handleCopyBvid}
                copiedBvid={copiedBvid}
              />
            ))
          ) : (
            <div className="bg-white rounded-2xl border-2 border-[#383431] p-12 text-center my-8">
              <div className="w-12 h-12 rounded-full bg-[#FAF6EE] text-[#C8523B] mx-auto flex items-center justify-center mb-3">
                <Filter className="w-6 h-6" />
              </div>
              <p className="text-base font-serif text-[#1C1917]">
                {lang === 'zh' ? '当前筛选条件下暂无作品，尝试切换其他分类' : 'No projects match the current filter.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setFilter('all');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#2E2B28] text-white text-xs font-mono font-bold cursor-pointer"
              >
                {lang === 'zh' ? '重置筛选查看全部' : 'Reset & Show All'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Storyboard Inspection Modal */}
      {activeModalProject && (
        <StoryboardViewerModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          lang={lang}
        />
      )}
    </section>
  );
};

