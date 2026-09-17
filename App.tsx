import React, { useState } from 'react';
import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';
import { ThreeDStudioSection } from './ThreeDStudioSection';
import { AwardsSection } from './AwardsSection';
import { ExperienceTimeline } from './ExperienceTimeline';
import { ContactFooter } from './ContactFooter';
import { FilmDivider } from './FilmDivider';

export function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1C1C] font-sans selection:bg-[#C8523B] selection:text-white">
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#1C1C1C]/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-[#1C1C1C] text-white flex items-center justify-center font-serif font-bold text-base">
              VY
            </div>
            <div>
              <h1 className="font-bold text-sm text-[#1C1C1C] leading-none">Vincy Yeo <span className="text-xs font-normal text-[#1C1C1C]/60">(杨玮馨)</span></h1>
              <p className="text-[10px] text-[#C8523B] font-mono tracking-wider">3D CREATOR & DIRECTOR</p>
            </div>
          </div>

          {/* 中央胶囊导航 */}
          <nav className="hidden md:flex items-center bg-[#1C1C1C]/5 p-1 rounded-full border border-[#1C1C1C]/10 text-xs font-medium">
            <button onClick={() => scrollToSection('projects')} className="px-4 py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all">
              01. 作品分镜
            </button>
            <button onClick={() => scrollToSection('3d-lab')} className="px-4 py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all">
              02. 3D预演
            </button>
            <button onClick={() => scrollToSection('awards')} className="px-4 py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all">
              03. 影展荣誉
            </button>
            <button onClick={() => scrollToSection('experience')} className="px-4 py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all">
              04. 经历与教育
            </button>
          </nav>

          {/* 右侧控制区 */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="px-3 py-1.5 rounded-full border border-[#1C1C1C]/20 text-xs font-mono hover:bg-[#1C1C1C] hover:text-white transition-all"
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-1.5 bg-[#C8523B] text-white rounded-full text-xs font-medium hover:bg-[#1C1C1C] transition-all shadow-sm"
            >
              {lang === 'zh' ? '联系通道' : 'Contact'}
            </button>
          </div>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="relative">
        <HeroSection 
          lang={lang} 
          onExploreProjects={() => scrollToSection('projects')}
          onExplore3D={() => scrollToSection('3d-lab')}
        />

        {/* 电影感转场 1 */}
        <FilmDivider label="01. STORYBOARD & WORKS" />

        <div id="projects">
          <ProjectsSection lang={lang} />
        </div>

        {/* 电影感转场 2 */}
        <FilmDivider label="02. 3D PRE-VISUALIZATION" />

        <div id="3d-lab">
          <ThreeDStudioSection lang={lang} />
        </div>

        {/* 电影感转场 3 */}
        <FilmDivider label="03. HONORS & RECOGNITION" />

        <div id="awards">
          <AwardsSection lang={lang} />
        </div>

        {/* 电影感转场 4 */}
        <FilmDivider label="04. BACKGROUND & TIMELINE" />

        <div id="experience">
          <ExperienceTimeline lang={lang} />
        </div>
      </main>

      {/* 页脚与联系 */}
      <div id="contact">
        <ContactFooter lang={lang} />
      </div>
    </div>
  );
}

export default App;
