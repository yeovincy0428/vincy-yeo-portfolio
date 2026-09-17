import React, { useState } from 'react';
import { StoryboardViewerModal } from './StoryboardViewerModal';

interface ProjectsSectionProps {
  lang: 'zh' | 'en';
}

// 互动组件：左右滑动对比手绘分镜与成品画面
const InteractiveStoryboardCard: React.FC<{
  draftImg: string;
  finalImg: string;
  title: string;
  pageCount: number;
  meta: string;
  lang: 'zh' | 'en';
}> = ({ draftImg, finalImg, title, pageCount, meta, lang }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <div 
      className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#1C1C1C] border border-[#1C1C1C]/15 group cursor-ew-resize select-none shadow-md"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSliderPos(50);
      }}
    >
      {/* 底层：最终渲染/正片画面 */}
      <img 
        src={finalImg} 
        alt={`${title} Final`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* 上层：手绘分镜草稿 (受滑块控制显示宽度) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={draftImg} 
          alt={`${title} Draft`}
          className="absolute inset-0 w-full h-full object-cover max-w-none transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 brightness-95"
          style={{ width: '100%', height: '100%' }}
        />
        <span className="absolute bottom-3 left-3 bg-[#1C1C1C]/80 backdrop-blur-md text-[#FAF8F5] text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-widest border border-white/10">
          STORYBOARD DRAFT
        </span>
      </div>

      {/* 拖拽对比线 */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-[#C8523B] shadow-[0_0_10px_rgba(200,82,59,0.8)] z-20 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-[#FAF8F5] border-2 border-[#C8523B] rounded-full flex items-center justify-center shadow-lg text-[10px] font-bold text-[#1C1C1C]">
          ↔
        </div>
      </div>

      {/* 顶部标签 */}
      <div className="absolute top-3 left-3 bg-[#1C1C1C]/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full z-10 border border-white/10 flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C8523B] animate-pulse" />
        <span>📖 {pageCount} {lang === 'zh' ? '页分镜' : 'P Storyboard'} · {meta}</span>
      </div>

      {/* 交互提示 */}
      <div className={`absolute bottom-3 right-3 bg-[#1C1C1C]/90 backdrop-blur-md text-white/90 text-[10px] font-mono px-3 py-1 rounded-full z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
        {lang === 'zh' ? '👈 左右滑动对比手绘/镜头 👉' : '👈 Hover to compare Draft vs Final 👉'}
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; pdfUrl: string; pageCount: number } | null>(null);

  const projects = [
    {
      id: 'p1',
      title: lang === 'zh' ? '《Unforgettable 18》手绘电影分镜脚本' : 'Unforgettable 18 - Film Storyboard',
      category: lang === 'zh' ? '剧情短片 · 手绘分镜' : 'Drama Short • Hand-drawn',
      meta: '40 PAGES • 85 SCENES',
      desc: lang === 'zh' 
        ? '讲述青春叙事短片《Unforgettable 18》。通过高度精细的手绘镜头规划、严谨的轴线控制与光影层次，展现极具戏剧张力的视听语言。'
        : 'A narrative short film capturing youth and memory. Demonstrates dramatic visual storytelling through precise hand-drawn camera blocking, line-of-action control, and lighting design.',
      highlights: [
        lang === 'zh' ? '40+ 页高精度手绘画稿，包含完整的动向箭头与镜号标注' : '40+ pages of high-precision drawings with motion arrows and shot numbers',
        lang === 'zh' ? '严格遵循影视视听语言，包含复杂的长镜头与场面调度设计' : 'Strict adherence to cinematic language, including complex long takes and blocking',
      ],
      tags: ['Hand-drawn Storyboard', 'Cinematic Composition', 'Director Notes'],
      draftImg: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
      finalImg: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      bilibiliUrl: 'https://b23.tv/3azZYYO',
      bilibiliDisplay: 'b23.tv/3azZYYO',
      pdfUrl: '/storyboards/unforgettable-18.pdf',
      pageCount: 16,
    },
    {
      id: 'p2',
      title: lang === 'zh' ? '《Eyes On Me》视听语言与镜头调度' : 'Eyes On Me - Storyboard & Blocking',
      category: lang === 'zh' ? '视觉短片 · 轴线调度' : 'Visual Short • Camera Blocking',
      meta: '24 PAGES • 48 SCENES',
      desc: lang === 'zh'
        ? '围绕视线引导与空间张力展开的短片分镜。精细计算镜头焦段与人物走位，打造强烈的视觉沉浸感。'
        : 'Focuses on gaze direction and spatial tension. Meticulously planned lens focal lengths and actor positioning to create strong visual immersion.',
      highlights: [
        lang === 'zh' ? '精准的视线轴线切分与镜头匹配，引导观众情绪起伏' : 'Precise line-of-action cuts and match shots guiding emotional rhythm',
        lang === 'zh' ? '多机位组合预演，将叙事节奏精确控制在秒级' : 'Multi-camera pre-visualization controlling narrative pacing precisely',
      ],
      tags: ['Sightline Control', 'Camera Movement', 'Pre-vis'],
      draftImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      finalImg: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
      bilibiliUrl: 'https://b23.tv/jyGfsJR',
      bilibiliDisplay: 'b23.tv/jyGfsJR',
      pdfUrl: '/storyboards/eyes-on-me.pdf',
      pageCount: 12,
    },
    {
      id: 'p3',
      title: lang === 'zh' ? '《My Pets Haven》公益纪录短片分镜' : 'My Pets Haven - Public Welfare Storyboard',
      category: lang === 'zh' ? '公益纪录短片 · 视听语言' : 'Public Welfare • Shot Design',
      meta: '16 PAGES • 32 SCENES',
      desc: lang === 'zh'
        ? '聚焦城市流浪动物生存现状。采用低视角关照镜头与温情旁白呼吁领养代替购买，兼具纪实感与艺术美感。'
        : 'Focuses on urban stray animals. Utilizes low-angle perspective and warm narration to advocate adoption, blending documentary realism with artistic expressiveness.',
      highlights: [
        lang === 'zh' ? '低角度追踪萌宠视角，融合温情旁白呼吁公众领养代替购买' : 'Low-angle tracking shot design emphasizing emotional connection and animal perspective',
        lang === 'zh' ? '独立攻克与非营利组织的深度外联协议，保障多机位实地取景安全' : 'Secured depth collaboration with welfare organizations for safe multi-cam field shooting',
      ],
      tags: ['Broadcast Tripod', 'Wireless Lavalier Kit', 'Color Calibrated Monitors'],
      draftImg: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
      finalImg: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=1200&q=80',
      bilibiliUrl: 'https://b23.tv/MzxJiyO',
      bilibiliDisplay: 'b23.tv/MzxJiyO',
      pdfUrl: '/storyboards/stray-cats.pdf',
      pageCount: 16,
    }
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* 板块标题 */}
      <div className="mb-14 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C8523B] bg-[#C8523B]/10 px-3 py-1 rounded-full border border-[#C8523B]/20">
          {lang === 'zh' ? '核心作品展示' : 'FEATURED WORKS'}
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1C1C] mt-4 mb-3">
          {lang === 'zh' ? '故事板与分镜设计' : 'Storyboards & Shot Design'}
        </h2>
        <p className="text-sm text-[#1C1C1C]/70 max-w-2xl mx-auto">
          {lang === 'zh'
            ? '从纸上手绘到镜头调度，精准呈现视觉节奏与导演意图。'
            : 'From hand-drawn sketches to camera blocking, accurately translating director vision into visual rhythm.'}
        </p>
      </div>

      {/* 3个项目 */}
      <div className="space-y-16">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-2xl border border-[#1C1C1C]/10 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* 左侧可交互对比卡片 */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <InteractiveStoryboardCard 
                draftImg={project.draftImg}
                finalImg={project.finalImg}
                title={project.title}
                pageCount={project.pageCount}
                meta={project.meta}
                lang={lang}
              />

              {/* B站与 PDF 按钮 */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="bg-[#1C1C1C]/5 px-3 py-1.5 rounded-lg border border-[#1C1C1C]/10 flex items-center gap-2">
                  <span className="text-xs font-mono text-[#1C1C1C]/60">Bilibili:</span>
                  <span className="text-xs font-mono font-bold text-[#1C1C1C]">{project.bilibiliDisplay}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.bilibiliUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#00AEEC] text-white rounded-lg text-xs font-medium hover:bg-[#0092c8] transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                  >
                    ▶ {lang === 'zh' ? '在 B 站观看正片' : 'Watch on Bilibili'}
                  </a>
                  <button
                    onClick={() => setSelectedPdf({
                      title: project.title,
                      pdfUrl: project.pdfUrl,
                      pageCount: project.pageCount
                    })}
                    className="px-4 py-2 bg-[#1C1C1C] text-white rounded-lg text-xs font-medium hover:bg-[#C8523B] transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                  >
                    📖 {lang === 'zh' ? `完整分镜拆解 (${project.pageCount}P)` : `Full Storyboard (${project.pageCount}P)`}
                  </button>
                </div>
              </div>
            </div>

            {/* 右侧文本描述 */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono text-[#C8523B] uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-serif font-bold text-[#1C1C1C] mt-1 mb-3">{project.title}</h3>
                <p className="text-xs md:text-sm text-[#1C1C1C]/80 leading-relaxed mb-4">{project.desc}</p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold text-[#1C1C1C] uppercase tracking-wider">{lang === 'zh' ? '核心视听与镜头亮点：' : 'Key Highlights:'}</h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#1C1C1C]/70 flex items-start gap-2">
                        <span className="text-[#C8523B] font-bold">▪</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 标签 */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1C1C1C]/10">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 bg-[#1C1C1C]/5 rounded-md text-[11px] font-mono text-[#1C1C1C]/70 border border-[#1C1C1C]/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PDF 弹窗 */}
      {selectedPdf && (
        <StoryboardViewerModal
          isOpen={!!selectedPdf}
          onClose={() => setSelectedPdf(null)}
          title={selectedPdf.title}
          pdfUrl={selectedPdf.pdfUrl}
          pageCount={selectedPdf.pageCount}
          lang={lang}
        />
      )}
    </section>
  );
};
