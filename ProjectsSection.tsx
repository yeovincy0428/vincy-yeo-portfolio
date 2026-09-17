import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Play, Film, ExternalLink, BookOpen, Check } from 'lucide-react';
import { StoryboardPanelIllustration, WashiTape } from './HandDrawnSvg';
import { StoryboardViewerModal } from './StoryboardViewerModal';
import { ProjectItem } from '../types';

// 项目数据配置（针对方案一：直接对齐 public 根目录下的 PDF 文件）
const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'p1',
    title: '《Unforgettable 18》手绘电影分镜脚本',
    titleEn: 'Unforgettable 18 - Film & Storyboard',
    type: 'Narrative Film',
    typeZh: '剧情短片',
    year: '2022',
    roles: ['导演 / Director', '分镜师 / Storyboard Artist'],
    summary: '讲述青春叙事短片《Unforgettable 18》。通过高度精细的手绘镜头规划、严谨的轴线控制与光影层次，展现极具戏剧张力的视听语言。',
    highlights: [
      '40+ 页高精度手绘画稿，包含完整的动向箭头与镜号标注',
      '严格遵循影视视听语言，包含复杂的长镜头与场面调度设计'
    ],
    equipment: ['Broadcast Tripod', 'Wireless Lavalier', 'Color Monitor'],
    bilibiliBvid: '3azZYYO',
    bilibiliUrl: 'https://b23.tv/3azZYYO',
    hasStoryboard: true,
    storyboardPagesCount: 16,
    cameraSetupsCount: 32,
    pdfUrl: './unforgettable-18.pdf', // 直连 public/unforgettable-18.pdf
    awards: ['Winner - Best Malaysian Short Film (Nitiin 2022)', 'Winner - Best Poster'],
    panelDoodleType: 'condo'
  },
  {
    id: 'p2',
    title: '《I’m On My Way》3D/CGI 动画与特效预演',
    titleEn: "I'm On My Way - CGI Short & Pre-vis",
    type: 'Animation & VFX',
    typeZh: '动画与合成',
    year: '2024',
    roles: ['动画制作 / Animation', '特效合成 / Compositing'],
    summary: '围绕虚拟多维空间与红黄双色能量对决展开的 CGI 动画短片。融合 3D 镜头 Matchmove 跟踪与三维变身动作调度。',
    highlights: [
      '完整的 3D 镜头预演与 Matchmove 跟踪，精准掌控打斗视觉节奏',
      '手绘动作分镜配合 Maya/AE 特效合成管线，打造流畅战斗视听'
    ],
    equipment: ['3D Pre-vis Engine', 'Matchmove Rig', 'AE Compositing'],
    bilibiliBvid: '3azZYYO',
    bilibiliUrl: 'https://b23.tv/3azZYYO',
    hasStoryboard: true,
    storyboardPagesCount: 6,
    cameraSetupsCount: 24,
    pdfUrl: './im-on-my-way.pdf', // 直连 public/im-on-my-way.pdf
    panelDoodleType: 'im-on-my-way'
  },
  {
    id: 'p3',
    title: '《My Pets Haven》公益纪录短片',
    titleEn: 'My Pets Haven - Public Welfare Short Film',
    type: 'Documentary',
    typeZh: '公益纪录片',
    year: '2023',
    roles: ['联合导演', '独立摄影'],
    summary: '聚焦城市流浪动物生存现状。采用低视角关照镜头与温情旁白呼吁领养代替购买，兼具纪实感与艺术美感。',
    highlights: [
      '低角度追踪萌宠视角，融合温情旁白呼吁公众领养代替购买',
      '独立攻克与非营利组织的深度外联协议，保障多机位实地取景安全'
    ],
    equipment: ['Cinema Rig', 'Low-Angle Gimbal'],
    bilibiliBvid: 'MzxJiyO',
    bilibiliUrl: 'https://b23.tv/MzxJiyO',
    hasStoryboard: false,
    panelDoodleType: 'pets-haven'
  }
];

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
  const yArtwork = useTransform(smoothProgress, [0, 1], [25, -25]);
  const yDetails = useTransform(smoothProgress, [0, 1], [-15, 15]);
  const yTape = useTransform(smoothProgress, [0, 1], [-10, 20]);
  const cardScale = useTransform(smoothProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <motion.article
      ref={cardRef}
      style={{ scale: cardScale }}
      className="bg-white rounded-3xl border-2 border-[#383431] p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
    >
      <motion.div style={{ y: yTape }} className="absolute top-4 right-6 hidden sm:block z-10">
        <WashiTape
          className="w-24 h-6"
          color={idx % 2 === 0 ? '#E7DFCF' : '#E8D4BB'}
          angle={idx % 2 === 0 ? '-2.5deg' : '3deg'}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-1">
        {/* 左侧封面 */}
        <motion.div style={{ y: yArtwork }} className="lg:col-span-6 flex flex-col space-y-4">
          <div className="relative aspect-[16/10] w-full rounded-2xl border-2 border-[#383431] overflow-hidden bg-[#FAF8F3] shadow-sm group-hover:border-[#C8523B] transition-colors">
            <StoryboardPanelIllustration
              type={project.panelDoodleType}
              title={project.title}
            />

            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#2B2724]/90 text-white px-2.5 py-1 rounded-md text-xs font-mono font-semibold">
              <Film className="w-3.5 h-3.5 text-[#D49A3D]" />
              <span>{project.typeZh} · {project.year}</span>
            </div>

            {project.hasStoryboard && (
              <div className="absolute bottom-3 left-3 bg-[#FAF6EE]/95 border border-[#383431] text-[#2B2724] px-2.5 py-1 rounded-md text-xs font-mono font-bold flex items-center gap-1 shadow-xs">
                <BookOpen className="w-3.5 h-3.5 text-[#C8523B]" />
                <span>{project.storyboardPagesCount} 页手绘分镜 · {project.cameraSetupsCount} 机位规划</span>
              </div>
            )}

            {project.hasStoryboard && (
              <button
                type="button"
                onClick={() => onInspect(project)}
                className="absolute inset-0 bg-[#2B2724]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-[2px] cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-[#D49A3D]" />
                <span>点击展开高精度分镜剖析 (Inspect Storyboard)</span>
              </button>
            )}
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF6EE] border border-[#383431]/30">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#8C8275]">Bilibili BV:</span>
              <button
                type="button"
                onClick={(e) => onCopyBvid(project.bilibiliBvid, e)}
                className="text-xs font-mono font-bold text-[#1C1917] bg-white px-2 py-0.5 rounded border border-[#D4C9BA] hover:bg-[#F2ECE1] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{project.bilibiliBvid}</span>
                {copiedBvid === project.bilibiliBvid ? <Check className="w-3 h-3 text-emerald-600" /> : null}
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

        {/* 右侧信息 */}
        <motion.div style={{ y: yDetails }} className="lg:col-span-6 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.roles.map((role, rIdx) => (
                <span key={rIdx} className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF0E1] border border-[#D8C7B0] text-[#5A452B]">
                  {role}
                </span>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#1C1917] tracking-tight group-hover:text-[#C8523B] transition-colors">
              {project.title}
            </h3>
            <div className="text-sm font-serif italic text-[#787063] mt-0.5">{project.titleEn}</div>

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

            <p className="mt-4 text-sm md:text-base leading-relaxed text-[#44403C]">{project.summary}</p>

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

          <div className="pt-4 border-t border-[#EAE3D5] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1">
              {project.equipment.slice(0, 3).map((eq, eIdx) => (
                <span key={eIdx} className="text-[11px] font-mono text-[#787063] bg-[#FAF6EE] px-2 py-0.5 rounded border border-[#E0D7C6]">
                  {eq}
                </span>
              ))}
            </div>

            {project.hasStoryboard ? (
              <button
                type="button"
                onClick={() => onInspect(project)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono bg-[#2E2B28] text-white hover:bg-[#C8523B] transition-colors shadow-sm cursor-pointer active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-[#D49A3D]" />
                <span>{lang === 'zh' ? '完整分镜拆解' : 'Storyboard Breakdown'}</span>
                <span className="text-white/60">({project.storyboardPagesCount}P)</span>
              </button>
            ) : (
              <span className="text-xs font-mono text-[#8C8275] italic">
                {lang === 'zh' ? '（纪实作品，不设手绘故事板）' : '(Documentary - No Storyboard)'}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export const ProjectsSection: React.FC<{ lang?: 'zh' | 'en' }> = ({ lang = 'zh' }) => {
  const [filter, setFilter] = useState<'all' | 'Narrative Film' | 'Animation & VFX' | 'Documentary'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [copiedBvid, setCopiedBvid] = useState<string | null>(null);

  const filteredProjects = PROJECTS_DATA.filter(p => filter === 'all' || p.type === filter);

  const handleCopyBvid = (bvid: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(bvid);
    setCopiedBvid(bvid);
    setTimeout(() => setCopiedBvid(null), 2000);
  };

  return (
    <section id="projects" className="relative py-16 md:py-24 border-b-2 border-[#383431] bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#383431] bg-white text-xs font-mono font-bold uppercase tracking-wider text-[#C8523B] mb-3 shadow-xs">
              <Film className="w-3.5 h-3.5 text-[#C8523B]" />
              <span>{lang === 'zh' ? '实拍与分镜代表作' : 'Featured Film & Storyboard Works'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1C1917] tracking-tight">
              {lang === 'zh' ? '作品集与手绘分镜工程' : 'Portfolio & Storyboard Projects'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', labelZh: `全部类型 (${PROJECTS_DATA.length})` },
              { id: 'Narrative Film', labelZh: '剧情短片' },
              { id: 'Animation & VFX', labelZh: '动画与合成' },
              { id: 'Documentary', labelZh: '纪录片' }
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
                {tab.labelZh}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <ParallaxProjectCard
              key={project.id}
              project={project}
              idx={idx}
              lang={lang}
              onInspect={setActiveModalProject}
              onCopyBvid={handleCopyBvid}
              copiedBvid={copiedBvid}
            />
          ))}
        </div>
      </div>

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
