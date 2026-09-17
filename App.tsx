import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ThreeDStudioSection } from './components/ThreeDStudioSection';
import { AwardsSection } from './components/AwardsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactFooter } from './components/ContactFooter';
import { ViewfinderCursor } from './components/ViewfinderCursor';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'zh' ? 'en' : 'zh'));
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTo3D = () => {
    document.getElementById('three-d')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#1E2022] selection:bg-[#E5D7B7] selection:text-[#1E2022] font-sans">
      {/* Top Fixed Sticky Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          lang={lang}
          onExploreProjects={scrollToProjects}
          onExplore3D={scrollTo3D}
        />

        {/* Featured Projects & Storyboard Showcase */}
        <ProjectsSection
          lang={lang}
        />

        {/* 3D Creator & Pre-vis Virtual Studio */}
        <ThreeDStudioSection lang={lang} />

        {/* Honors & Festival Laurels */}
        <AwardsSection lang={lang} />

        {/* Work Experience & Academic Training */}
        <ExperienceTimeline lang={lang} />
      </main>

      {/* Editorial Stationery Contact & Footer */}
      <ContactFooter
        lang={lang}
        isModal={false}
      />

      {/* Pop-up Contact Modal */}
      {contactModalOpen && (
        <ContactFooter
          lang={lang}
          isModal={true}
          onCloseModal={() => setContactModalOpen(false)}
        />
      )}

      {/* Cinematic Viewfinder Custom Cursor */}
      <ViewfinderCursor />
    </div>
  );
}
