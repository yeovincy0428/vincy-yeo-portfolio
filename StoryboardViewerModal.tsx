import React, { useState } from 'react';
import { ProjectItem, StoryboardShot } from '../types';
import { X, ExternalLink, Play, Film, Camera, Sparkles, Award, Clock, MapPin, Users, Lightbulb, ChevronRight, Check, Sliders, Eye } from 'lucide-react';
import { StoryboardPanelIllustration, WashiTape, BrushUnderline, DoodleClapper } from './HandDrawnSvg';
import { StoryboardComparisonSlider } from './StoryboardComparisonSlider';

interface StoryboardViewerModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang?: 'zh' | 'en';
}

export const StoryboardViewerModal: React.FC<StoryboardViewerModalProps> = ({
  project,
  onClose,
  lang = 'zh'
}) => {
  if (!project) return null;

  const [activeShotIndex, setActiveShotIndex] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slider' | 'blueprint'>('slider');

  const activeShot: StoryboardShot | undefined = project.storyboardPreview[activeShotIndex] || project.storyboardPreview[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.bilibiliUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#1A1816]/75 backdrop-blur-sm overflow-y-auto">
      {/* Modal Container with Sketchbook Paper aesthetic */}
      <div className="relative w-full max-w-5xl bg-[#FAF6EE] text-[#1E2022] rounded-2xl border-2 border-[#383431] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Header bar with washi tape and sketch clapper */}
        <div className="flex items-center justify-between border-b-2 border-[#383431] bg-[#F1E9DB] px-5 py-3 relative">
          <div className="flex items-center gap-3">
            <DoodleClapper className="w-7 h-7 text-[#2B2724]" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#C8523B] text-white px-2 py-0.5 rounded">
                  {project.typeZh}
                </span>
                <span className="text-xs font-mono text-[#6E6659]">
                  {project.year} · {project.storyboardPagesCount} Pages Storyboard
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-serif text-[#1C1917] mt-0.5">
                {project.title} <span className="text-sm font-sans font-normal text-[#5A544C]">({project.titleEn})</span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="hidden sm:flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-lg border border-[#383431] bg-white hover:bg-[#FAF6EE] transition-colors"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Film className="w-3.5 h-3.5 text-[#C8523B]" />}
              <span>{copiedLink ? 'Link Copied!' : 'Bilibili Link'}</span>
            </button>
            <a
              href={project.bilibiliUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#C8523B] text-white hover:bg-[#A93E28] transition-colors shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{lang === 'zh' ? '在 B 站观看完整正片' : 'Watch on Bilibili'}</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-[#383431] bg-white text-[#383431] hover:bg-[#E5DBCB] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {/* Awards Banner if present */}
          {project.awards && project.awards.length > 0 && (
            <div className="bg-[#FAF0D9] border-2 border-dashed border-[#D49A3D] rounded-xl p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 relative">
              <div className="flex items-center gap-2.5">
                <Award className="w-6 h-6 text-[#C8523B] shrink-0" />
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#A06915]">
                    Official Festival Honors & Laurels
                  </div>
                  <div className="text-sm font-bold text-[#2B2724] space-y-0.5 mt-0.5">
                    {project.awards.map((award, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="text-[#C8523B]">★</span>
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <WashiTape className="w-20 h-5" color="#E5D6B6" angle="2deg" />
            </div>
          )}

          {/* Interactive Storyboard Strip Carousel */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#2B2724]">
                  {lang === 'zh' ? '现场分镜精选 (Shootboard Panels)' : 'Featured Shootboard Panels'}
                </h4>
                <span className="text-xs bg-[#E5DBCB] text-[#423E3A] px-2 py-0.5 rounded font-mono">
                  {activeShotIndex + 1} / {project.storyboardPreview.length}
                </span>
              </div>
              <p className="text-xs text-[#787063] hidden sm:block">
                {lang === 'zh' ? '点击分镜框查看对应镜头参数与机位设计' : 'Click panel to inspect camera setup'}
              </p>
            </div>

            {/* Panel Selector Thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 pb-1">
              {project.storyboardPreview.map((shot, idx) => (
                <button
                  key={shot.id}
                  onClick={() => setActiveShotIndex(idx)}
                  className={`group text-left p-2 rounded-xl border-2 transition-all relative flex flex-col ${
                    activeShotIndex === idx
                      ? 'border-[#C8523B] bg-white shadow-md -translate-y-0.5'
                      : 'border-[#383431]/40 bg-[#FAF6EE] hover:border-[#383431] hover:bg-white'
                  }`}
                >
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#383431]/30 mb-2 bg-[#F0ECE1]">
                    <StoryboardPanelIllustration type={shot.panelDoodleType} title={shot.sceneNo} />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                    <span className="text-[#C8523B]">{shot.sceneNo}</span>
                    <span className="text-[#6E6659]">{shot.camera.split(' ')[0]}</span>
                  </div>
                  <div className="text-xs font-semibold text-[#1C1917] truncate mt-0.5">
                    {shot.shotNo}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Storyboard Inspection Card */}
          {activeShot && (
            <div className="bg-white rounded-2xl border-2 border-[#383431] p-4 md:p-6 shadow-sm relative overflow-hidden">
              {/* Paper corner tape decoration */}
              <div className="absolute top-2 right-4">
                <WashiTape className="w-20 h-5" color="#E7DFCF" angle="-2deg" />
              </div>

              {/* View Switcher Bar: Before/After Slider vs Static Blueprint */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#EBE3D3]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#FAF6EE] p-1 rounded-xl border border-[#383431]/30">
                    <button
                      type="button"
                      onClick={() => setViewMode('slider')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                        viewMode === 'slider'
                          ? 'bg-[#C8523B] text-white shadow-xs'
                          : 'text-[#57534E] hover:text-[#1C1917]'
                      }`}
                    >
                      <Sliders className="w-3.5 h-3.5" />
                      <span>{lang === 'zh' ? '分镜/成片滑动对比 (Before/After)' : 'Before/After Slider'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('blueprint')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                        viewMode === 'blueprint'
                          ? 'bg-[#2E2B28] text-white shadow-xs'
                          : 'text-[#57534E] hover:text-[#1C1917]'
                      }`}
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{lang === 'zh' ? '单帧图纸设计 (Blueprint View)' : 'Blueprint View'}</span>
                    </button>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#8C8275] hidden md:flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#D49A3D]" />
                  <span>{lang === 'zh' ? '左侧：手绘二维分镜 · 右侧：电影级调色正片' : 'Left: 2D Sketch · Right: Color Grade'}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Large Illustration or Comparison Slider */}
                <div className="lg:col-span-6 flex flex-col">
                  {viewMode === 'slider' ? (
                    <StoryboardComparisonSlider
                      shot={activeShot}
                      project={project}
                      lang={lang}
                    />
                  ) : (
                    <>
                      <div className="relative aspect-[16/10] w-full rounded-xl border-2 border-[#383431] overflow-hidden shadow-inner bg-[#FAF8F3]">
                        <StoryboardPanelIllustration type={activeShot.panelDoodleType} title={activeShot.sceneNo} />

                        {/* Camera overlay HUD */}
                        <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-[#2B2724]/85 text-white px-2 py-0.5 rounded text-[11px] font-mono">
                          <Camera className="w-3 h-3 text-[#D49A3D]" />
                          <span>{activeShot.camera}</span>
                        </div>

                        <div className="absolute bottom-2 right-2 bg-[#2B2724]/85 text-white px-2 py-0.5 rounded text-[11px] font-mono">
                          {activeShot.act} · {activeShot.sceneNo}
                        </div>
                      </div>

                      <div className="mt-2 text-xs font-mono text-[#787063] flex items-center justify-between px-1">
                        <span>ASPECT RATIO: 16:9 / REC.709</span>
                        <span>{activeShot.time ? `TIMECODE: ${activeShot.time}` : 'CINEMA RIG'}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Right: Technical Storyboard Specifications */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-bold uppercase bg-[#E5DBCB] text-[#383431] px-2 py-0.5 rounded">
                        {activeShot.act}
                      </span>
                      <span className="text-sm font-bold text-[#C8523B]">
                        {activeShot.sceneNo} : {activeShot.shotNo}
                      </span>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed text-[#2C2926] font-serif border-l-4 border-[#C8523B] pl-3 py-0.5 bg-[#FAF6EE]/70 rounded-r-lg">
                      {activeShot.description}
                    </p>

                    {activeShot.sketchNote && (
                      <div className="mt-3 bg-[#FAF3E0] p-2.5 rounded-lg border border-[#D4C4A8] text-xs font-mono text-[#5C4D35] flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-[#D49A3D] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#8C6418]">DIRECTOR & PRE-VIS NOTE:</strong> {activeShot.sketchNote}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Matrix table of shootboard metadata */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-[#FAF6EE] p-3 rounded-xl border border-[#383431]/30">
                    <div className="flex items-center gap-1.5 text-[#5A544C]">
                      <MapPin className="w-3.5 h-3.5 text-[#C8523B] shrink-0" />
                      <span className="truncate"><strong>Location:</strong> {activeShot.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#5A544C]">
                      <Camera className="w-3.5 h-3.5 text-[#2E3A59] shrink-0" />
                      <span className="truncate"><strong>Lens/Angle:</strong> {activeShot.camera}</span>
                    </div>
                    {activeShot.talents && (
                      <div className="flex items-center gap-1.5 text-[#5A544C]">
                        <Users className="w-3.5 h-3.5 text-[#D49A3D] shrink-0" />
                        <span className="truncate"><strong>Talents:</strong> {activeShot.talents}</span>
                      </div>
                    )}
                    {activeShot.props && (
                      <div className="flex items-center gap-1.5 text-[#5A544C]">
                        <Film className="w-3.5 h-3.5 text-[#4E6B56] shrink-0" />
                        <span className="truncate"><strong>Props:</strong> {activeShot.props}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Director Statement & Production Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F8F3EA] rounded-xl border border-[#383431]/30 p-4">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C8523B] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D49A3D]" />
                {lang === 'zh' ? '导演视听阐述 (Director\'s Statement)' : 'Director\'s Statement'}
              </h5>
              <blockquote className="text-sm font-serif italic text-[#383431] leading-relaxed">
                {project.directorStatement}
              </blockquote>
            </div>

            <div className="bg-[#F8F3EA] rounded-xl border border-[#383431]/30 p-4">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2B2724] mb-2 flex items-center gap-1.5">
                <Film className="w-4 h-4 text-[#C8523B]" />
                {lang === 'zh' ? '拍摄装备与调色基调' : 'Equipment & Color Palette'}
              </h5>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.equipment.map((eq, i) => (
                  <span key={i} className="text-xs font-mono bg-white px-2 py-0.5 rounded border border-[#D4C9BA] text-[#423E3A]">
                    {eq}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#787063]">Mood Palette:</span>
                <div className="flex items-center gap-1.5">
                  {project.palette.map((color, i) => (
                    <div
                      key={i}
                      style={{ backgroundColor: color }}
                      className="w-5 h-5 rounded-full border border-[#383431]/40 shadow-xs"
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t-2 border-[#383431] bg-[#F1E9DB] px-5 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#5A544C]">
            <span>BILIBILI BV:</span>
            <code className="bg-white px-2 py-0.5 rounded border border-[#383431] font-bold text-[#1C1917]">
              {project.bilibiliBvid}
            </code>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-bold rounded-lg border border-[#383431] bg-white text-[#383431] hover:bg-[#E5DBCB] transition-colors"
            >
              {lang === 'zh' ? '返回主页' : 'Close View'}
            </button>
            <a
              href={project.bilibiliUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-xs font-bold rounded-lg bg-[#C8523B] text-white hover:bg-[#A93E28] transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{lang === 'zh' ? '直达 B 站播放' : 'Watch on Bilibili'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
