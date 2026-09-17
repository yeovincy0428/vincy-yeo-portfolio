import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Menu, X, Globe, HardDrive } from 'lucide-react';
import { DoodleClapper, BrushUnderline } from './HandDrawnSvg';

interface NavbarProps {
  lang: 'zh' | 'en';
  onToggleLang: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('projects');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  const navLinks = [
    { id: 'projects', href: '#projects', num: '01', labelZh: '作品分镜', labelEn: 'STORYBOARD' },
    { id: 'three-d', href: '#three-d', num: '02', labelZh: '3D预演', labelEn: '3D PRE-VIS' },
    { id: 'awards', href: '#awards', num: '03', labelZh: '影展荣誉', labelEn: 'AWARDS' },
    { id: 'experience', href: '#experience', num: '04', labelZh: '经历与教育', labelEn: 'EXPERIENCE' },
  ];

  // Scrollspy: update active link based on scroll position
  useEffect(() => {
    const sectionIds = ['projects', 'three-d', 'awards', 'experience'];

    const handleScrollSpy = () => {
      // Check if at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveId('experience');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          if (window.scrollY >= top) {
            setActiveId(id);
            return;
          }
        }
      }

      // Default to projects when near top
      if (window.scrollY < 350) {
        setActiveId('projects');
      }
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    window.addEventListener('resize', handleScrollSpy, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      window.removeEventListener('resize', handleScrollSpy);
    };
  }, []);

  const handleScroll = (href: string, id: string) => {
    setMobileMenuOpen(false);
    setActiveId(id);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FAF6EE]/90 backdrop-blur-md border-b-2 border-[#383431]">
      {/* Parallax Filmstrip Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#E5D7B7]/40 overflow-hidden">
        <motion.div
          style={{ scaleX }}
          className="h-full bg-gradient-to-r from-[#D49A3D] via-[#C8523B] to-[#2E2B28] origin-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group select-none shrink-0"
          >
            <DoodleClapper className="w-6 h-6 text-[#2B2724] group-hover:rotate-6 transition-transform" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base md:text-lg text-[#1C1917] tracking-tight group-hover:text-[#C8523B] transition-colors">
                Vincy Yeo <span className="text-xs font-normal text-[#6E6659]">(杨玮馨)</span>
              </span>
              <span className="text-[10px] font-mono font-medium text-[#C8523B] tracking-widest uppercase -mt-0.5">
                3D Creator & Director
              </span>
            </div>
          </a>

          {/* Desktop Floating Pill Navigation Container */}
          <div className="hidden md:flex items-center bg-[#F7F1E5]/90 backdrop-blur-md px-1.5 py-1 rounded-full border-2 border-[#383431] shadow-[2px_2px_0px_#383431] relative">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              const isHovered = hoveredId === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.href, link.id)}
                  onMouseEnter={() => setHoveredId(link.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-colors duration-200 cursor-pointer select-none flex items-center gap-1 z-10 ${
                    isActive
                      ? 'text-[#FAF6EE]'
                      : 'text-[#4A453E] hover:text-[#1C1917]'
                  }`}
                >
                  {/* Sliding active pill indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#2B2724] rounded-full shadow-xs border border-[#48423C]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Sliding subtle hover background for inactive items */}
                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hover-pill"
                      className="absolute inset-0 bg-[#EAE0D1]/80 rounded-full"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}

                  {/* Index Number */}
                  <span
                    className={`relative z-10 text-[11px] font-mono font-bold tracking-tight transition-colors ${
                      isActive
                        ? 'text-[#E0BC75]'
                        : isHovered
                        ? 'text-[#C8523B]'
                        : 'text-[#8C827A]'
                    }`}
                  >
                    {link.num}.
                  </span>

                  {/* Label Text */}
                  <span className="relative z-10 tracking-tight whitespace-nowrap">
                    {lang === 'zh' ? link.labelZh : link.labelEn}
                  </span>

                  {/* Hand-drawn brush underline on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0.5 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0.7 }}
                        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                        className="absolute -bottom-1 left-2.5 right-2.5 h-2 pointer-events-none z-20 origin-center"
                      >
                        <BrushUnderline
                          className="w-full h-full"
                          color={isActive ? '#E0BC75' : '#C8523B'}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={onToggleLang}
              className="flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-1 rounded-lg border border-[#383431] bg-white hover:bg-[#FAF6EE] text-[#1C1917] transition-colors"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C8523B]" />
              <span>{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>

            {/* Netdisk Portfolio Link */}
            <a
              href={PERSONAL_INFO.contacts.baiduPan}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono px-2.5 py-1.5 rounded-lg border border-[#383431] bg-white hover:bg-[#FAF6EE] text-[#2B2724] transition-colors shadow-2xs"
              title="网盘作品集原片备份 (提取码: dr8n)"
            >
              <HardDrive className="w-3.5 h-3.5 text-[#2E3A59]" />
              <span className="hidden xl:inline">{lang === 'zh' ? '网盘原片' : 'Master Cloud'}</span>
              <span className="xl:hidden">{lang === 'zh' ? '网盘' : 'Cloud'}</span>
            </a>

            {/* Contact Button */}
            <button
              type="button"
              onClick={onOpenContact}
              className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-[#C8523B] text-white hover:bg-[#A93E28] transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '联系通告' : 'Contact'}</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onToggleLang}
              className="p-1.5 rounded-lg border border-[#383431] bg-white text-xs font-mono font-bold"
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#383431] bg-white text-[#1C1917]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#383431] bg-[#FAF6EE] px-4 py-5 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.href, link.id)}
                  className={`flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl text-sm font-mono font-bold transition-all ${
                    isActive
                      ? 'bg-[#2B2724] text-[#FAF6EE] shadow-xs'
                      : 'text-[#1C1917] hover:bg-[#E5DBCB] bg-white/70 border border-[#D8CEBE]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={isActive ? 'text-[#E0BC75]' : 'text-[#C8523B]'}>
                      {link.num}.
                    </span>
                    <span>{lang === 'zh' ? link.labelZh : link.labelEn}</span>
                  </div>
                  {isActive && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E0BC75]/20 text-[#E0BC75]">
                      CURRENT
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#383431]/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2 rounded-lg bg-[#C8523B] text-white text-center font-mono font-bold text-xs flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'zh' ? '联系与通告' : 'Get in Touch'}</span>
            </button>
            <a
              href={PERSONAL_INFO.contacts.baiduPan}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-lg bg-white border border-[#383431] text-[#1C1917] text-center font-mono font-bold text-xs flex items-center justify-center gap-2"
            >
              <HardDrive className="w-4 h-4 text-[#2E3A59]" />
              <span>{lang === 'zh' ? '网盘原片存档 (提取码: dr8n)' : 'Baidu Cloud Archive (pwd: dr8n)'}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
