import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';
import { ThreeDStudioSection } from './ThreeDStudioSection';
import { AwardsSection } from './AwardsSection';
import { ExperienceTimeline } from './ExperienceTimeline';
import { ContactFooter } from './ContactFooter';
import { ViewfinderCursor } from './ViewfinderCursor';
import { FilmDivider } from './src/components/FilmDivider';

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
      {/* 电影取景框鼠标特效 */}
      <ViewfinderCursor />

      {/* 原版顶部导航栏 */}
      <Navbar 
        lang={lang} 
        onToggleLang={() => setLang(lang === 'zh' ? 'en' : 'zh')} 
        onNavigate={scrollToSection} 
      />

      {/* 主体内容 */}
      <main className="relative pt-16">
        <HeroSection 
          lang={lang} 
          onExploreProjects={() => scrollToSection('projects')}
          onExplore3D={() => scrollToSection('3d-lab')}
        />

        {/* 电影感过场 1 */}
        <FilmDivider label="01. STORYBOARD & WORKS" />

        <div id="projects">
          <ProjectsSection lang={lang} />
        </div>

        {/* 电影感过场 2 */}
        <FilmDivider label="02. 3D PRE-VISUALIZATION" />

        <div id="3d-lab">
          <ThreeDStudioSection lang={lang} />
        </div>

        {/* 电影感过场 3 */}
        <FilmDivider label="03. HONORS & RECOGNITION" />

        <div id="awards">
          <AwardsSection lang={lang} />
        </div>

        {/* 电影感过场 4 */}
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
