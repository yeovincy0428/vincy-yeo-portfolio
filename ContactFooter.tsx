import React, { useState } from 'react';
import { PERSONAL_INFO } from './portfolioData';
import { Mail, Phone, MessageSquare, HardDrive, Play, Copy, Check, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { WashiTape, DoodleClapper, StampSeal, BrushUnderline } from './HandDrawnSvg';

export const ContactFooter: React.FC<{ lang?: 'zh' | 'en'; isModal?: boolean; onCloseModal?: () => void }> = ({
  lang = 'zh',
  isModal = false,
  onCloseModal
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactList = [
    {
      key: 'email1',
      label: 'Email (QQ)',
      val: PERSONAL_INFO.contacts.email1,
      icon: <Mail className="w-4 h-4 text-[#C8523B]" />
    },
    {
      key: 'email2',
      label: 'Academic Email (Tongji)',
      val: PERSONAL_INFO.contacts.email2,
      icon: <Mail className="w-4 h-4 text-[#2E3A59]" />
    },
    {
      key: 'phone',
      label: 'Phone / WeChat Tel',
      val: PERSONAL_INFO.contacts.phone,
      icon: <Phone className="w-4 h-4 text-[#4E6B56]" />
    },
    {
      key: 'wechat',
      label: 'WeChat ID (微信)',
      val: PERSONAL_INFO.contacts.wechat,
      icon: <MessageSquare className="w-4 h-4 text-emerald-600" />
    }
  ];

  const content = (
    <div className="relative">
      {/* Tape decor */}
      <div className="absolute -top-[17px] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <WashiTape className="w-24 h-6 opacity-90" color="#E7DFCF" angle="-1.5deg" />
      </div>

      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#383431] bg-white text-xs font-mono font-bold uppercase tracking-wider text-[#C8523B] mb-2 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D49A3D]" />
          <span>{lang === 'zh' ? '开启视听合作与剧作共创' : 'Creative Collaboration'}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#1C1917]">
          {lang === 'zh' ? '保持联系 · 期待新的叙事冒险' : 'Let\'s Craft Meaningful Cinema Together'}
        </h3>
        <p className="mt-2 text-xs md:text-sm text-[#57534E]">
          {lang === 'zh'
            ? '欢迎影视公司、制片厂、广告代理商及内容创作者沟通导演项目、手绘分镜绘制或 3D 镜头预演合作。'
            : 'Open to narrative short films, commercial TVC directing, storyboard artist contracts, and 3D virtual pre-vis projects.'}
        </p>
      </div>

      {/* Direct copy cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto mb-8">
        {contactList.map(item => (
          <div
            key={item.key}
            onClick={() => handleCopy(item.val, item.key)}
            className="group cursor-pointer bg-white rounded-xl border-2 border-[#383431] p-3.5 flex items-center justify-between hover:border-[#C8523B] transition-all hover:bg-[#FAF6EE] shadow-2xs"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2 rounded-lg bg-[#FAF0E1] border border-[#E0D1BB] shrink-0">
                {item.icon}
              </div>
              <div className="truncate text-left">
                <div className="text-[10px] font-mono uppercase text-[#8C8275]">{item.label}</div>
                <div className="text-xs md:text-sm font-mono font-bold text-[#1C1917] truncate">{item.val}</div>
              </div>
            </div>

            <div className="p-1.5 rounded text-xs font-mono font-bold text-[#C8523B] shrink-0 flex items-center gap-1">
              {copiedKey === item.key ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600 text-[11px]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#8C8275] group-hover:text-[#C8523B]" />
                  <span className="text-[11px] hidden sm:inline">Copy</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Cloud & Bilibili Quick Access */}
      <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[#E5DACB]">
        <a
          href={PERSONAL_INFO.contacts.baiduPan}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#383431] bg-white hover:bg-[#FAF6EE] text-xs font-mono font-bold text-[#2B2724] transition-colors"
        >
          <HardDrive className="w-4 h-4 text-[#2E3A59]" />
          <span>{lang === 'zh' ? '百度网盘高清原片 (密码: dr8n)' : 'Baidu Netdisk Archive (pwd: dr8n)'}</span>
          <ExternalLink className="w-3 h-3 text-[#8C8275]" />
        </a>

        <a
          href={PERSONAL_INFO.contacts.bilibili}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00A1D6] text-white hover:bg-[#008BB9] text-xs font-mono font-bold transition-colors"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{lang === 'zh' ? 'Bilibili 个人主页' : 'Bilibili Channel'}</span>
          <ExternalLink className="w-3 h-3 text-white/80" />
        </a>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1816]/75 backdrop-blur-sm">
        <div className="relative w-full max-w-2xl bg-[#FCFAF5] rounded-3xl border-4 border-[#383431] p-6 md:p-8 shadow-2xl overflow-hidden">
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 px-2 py-1 rounded-lg border border-[#383431] bg-white text-xs font-mono font-bold hover:bg-[#E5DBCB]"
          >
            ESC / Close
          </button>
          <div className="pt-2">
            {content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <footer id="contact" className="relative py-16 md:py-20 bg-[#F4EFE6] border-t-2 border-[#383431]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}

        {/* Bottom Credits */}
        <div className="mt-14 pt-8 border-t-2 border-[#383431]/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#787063] gap-4">
          <div className="flex items-center gap-2">
            <DoodleClapper className="w-5 h-5 text-[#2B2724]" />
            <span>© {new Date().getFullYear()} Vincy Yeo Wey Xin (杨玮馨). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Hand-drawn Storyboards & 3D WebGL Portfolio</span>
            <span className="text-[#C8523B]">●</span>
            <span>Tongji MFA 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
