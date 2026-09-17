import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import ThreeDStudioSection from './ThreeDStudioSection';
import AwardsSection from './AwardsSection';
import ExperienceTimeline from './ExperienceTimeline';
import ContactFooter from './ContactFooter';
import ViewfinderCursor from './ViewfinderCursor';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  // 引入平滑滚动脚本（提升 Parallax 质感）
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lenis@1.1.18/dist/lenis.min.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.Lenis) {
        // @ts-ignore
        const lenis = new window.Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    };
    document.head.appendChild(script);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1C1C1C] min-h-screen selection:bg-[#C8523B] selection:text-white font-sans relative overflow-x-hidden">
      <ViewfinderCursor />
      
      <Navbar lang={lang} onLangToggle={() => setLang(l => l === 'zh' ? 'en' : 'zh')} />
      
      <main>
        <HeroSection 
          lang={lang} 
          onExploreProjects={() => scrollToSection('projects')}
          onExplore3D={() => scrollToSection('three-d')}
        />
        
        <ProjectsSection lang={lang} />
        
        <ThreeDStudioSection lang={lang} />
        
        <AwardsSection lang={lang} />
        
        <ExperienceTimeline lang={lang} />
      </main>

      <ContactFooter lang={lang} />
    </div>
  );
}
