import React, { useState } from 'react';
import { StoryboardViewerModal } from './StoryboardViewerModal';

interface ProjectsSectionProps {
  lang: 'zh' | 'en';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; pdfUrl: string; pageCount: number } | null>(null);

  const projects = [
    {
      id: 'p1',
      title: lang === 'zh' ? '《彼岸花开》手绘电影分镜脚本' : 'Red Spider Lily - Film Storyboard',
      category: lang === 'zh' ? '剧情短片 · 手绘分镜' : 'Drama Short • Hand-drawn',
      meta: '40 PAGES • 85 SCENES',
      desc: lang === 'zh' 
        ? '讲述了一个关于记忆与重生的叙事短片。通过高度精细的手绘镜头规划、严谨的轴线控制与光影层次，展现了极具戏剧张力的视听语言。'
        : 'A narrative short film exploring themes of memory and rebirth. Demonstrates dramatic visual storytelling through precise hand-drawn camera blocking, line-of-action control, and lighting design.',
      highlights: [
        lang === 'zh' ? '40+ 页高精度手绘画稿，包含完整的动向箭头与镜号标注' : '40+ pages of high-precision drawings with motion arrows and shot numbers',
        lang === 'zh' ? '严格遵循影视视听语言，包含复杂的长镜头与调度设计' : 'Strict adherence to cinematic language, including complex long takes and blocking',
      ],
      tags: ['Hand-drawn Storyboard', 'Cinematic Composition', 'Director Notes'],
      // 极其稳定且契合艺术手绘风格的高清图像
      previewImg: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
      bilibiliBV: 'BV1Z7Gy6QEvQ',
      pdfUrl: '/storyboards/red-spider-lily.pdf',
      pageCount: 16,
    },
    {
      id: 'p2',
      title: lang === 'zh' ? '《流浪猫之歌》公益短片分镜' : 'Song of Stray Cats - Storyboard',
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
      // 稳定高质量图片
      previewImg: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
      bilibiliBV: 'BV1Z7Gy6QEvQ',
      pdfUrl: '/storyboards/stray-cats.pdf',
      pageCount: 16,
    }
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* 板块标题 */}
      <div className="mb-14 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C8523B] bg-[#C8523B]/10 px-3 py-1 rounded-full">
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

      {/* 作品卡片列表 */}
      <div className="space-y-16">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-2xl border border-[#1C1C1C]/10 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* 左侧预览图与操作 */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#222222] border border-[#1C1C1C]/10 group flex items-center justify-center">
                <img 
                  src={project.previewImg} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // 如果网络异常导致图片加载不出来，自动转为优雅的暗黑电影风占位背景，不再变成破坏版面的破裂灰框
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#1C1C1C]/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full z-10">
                  📖 {project.pageCount} {lang === 'zh' ? '页手绘分镜' : 'Page Storyboard'} · {project.meta}
                </div>
              </div>

              {/* B站与分镜PDF按钮 */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="bg-[#1C1C1C]/5 px-3 py-1.5 rounded-lg border border-[#1C1C1C]/10 flex items-center gap-2">
                  <span className="text-xs font-mono text-[#1C1C1C]/60">Bilibili BV:</span>
                  <span className="text-xs font-mono font-bold text-[#1C1C1C]">{project.bilibiliBV}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://www.bilibili.com/video/${project.bilibiliBV}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#00AEEC] text-white rounded-lg text-xs font-medium hover:bg-[#0092c8] transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    ▶ {lang === 'zh' ? '在 B 站观看正片' : 'Watch on Bilibili'}
                  </a>
                  <button
                    onClick={() => setSelectedPdf({
                      title: project.title,
                      pdfUrl: project.pdfUrl,
                      pageCount: project.pageCount
                    })}
                    className="px-4 py-2 bg-[#1C1C1C] text-white rounded-lg text-xs font-medium hover:bg-[#C8523B] transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    📖 {lang === 'zh' ? `完整分镜拆解 (${project.pageCount}P)` : `Full Storyboard (${project.pageCount}P)`}
                  </button>
                </div>
              </div>
            </div>

            {/* 右侧详细文字说明 */}
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

      {/* PDF 预览弹窗 */}
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
