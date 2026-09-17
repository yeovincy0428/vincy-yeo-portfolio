import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { AWARDS } from './portfolioData';
import { AwardItem } from './types';
import { Award, Trophy, Star, Sparkles, X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { WashiTape, StampSeal, SketchArrow } from './HandDrawnSvg';

export const AwardsSection: React.FC<{ lang?: 'zh' | 'en' }> = ({ lang = 'zh' }) => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const yBgStamp = useTransform(smoothProgress, [0, 1], [-40, 50]);
  const rotateStamp = useTransform(smoothProgress, [0, 1], [-6, 18]);
  const yEvenCards = useTransform(smoothProgress, [0, 1], [25, -25]);
  const yOddCards = useTransform(smoothProgress, [0, 1], [-20, 20]);

  return (
    <section
      ref={sectionRef}
      id="awards"
      className="relative py-16 md:py-24 border-b-2 border-[#383431] bg-[#F7F2E7] overflow-hidden"
    >
      {/* Background sketch lines & floating stamp seal with parallax */}
      <motion.div
        style={{ y: yBgStamp, rotate: rotateStamp }}
        className="absolute -top-10 -right-10 opacity-20 pointer-events-none hidden md:block"
      >
        <StampSeal
          textTop="OFFICIAL SELECTION"
          textBottom="CRITICS CHOICE"
          centerYear="2022"
          color="#383431"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#383431] bg-[#FAF6EE] text-xs font-mono font-bold uppercase tracking-wider text-[#C8523B] mb-2 shadow-xs">
              <Trophy className="w-3.5 h-3.5 text-[#D49A3D]" />
              <span>{lang === 'zh' ? '荣誉与影展奖项' : 'Honors & Festival Laurels'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1C1917] tracking-tight">
              {lang === 'zh' ? '国际电影节获奖与官方认证' : 'International Film Awards & Accolades'}
            </h2>
            <p className="mt-2 text-base text-[#57534E] max-w-2xl">
              {lang === 'zh'
                ? '以扎实的分镜剧作、光影调度与独特的跨文化视听语言，作品斩获多项国际影展最高单元大奖。'
                : 'Recognized by international film festivals and academic institutions for cinematic storytelling and visual craft.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <StampSeal
              textTop="INTERNATIONAL"
              textBottom="FILM FESTIVAL"
              centerYear="2022"
              color="#C8523B"
            />
          </div>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS.map((award, index) => {
            const cardY = index % 2 === 0 ? yEvenCards : yOddCards;
            return (
              <motion.div
                key={award.id}
                style={{ y: cardY }}
                onClick={() => setSelectedAward(award)}
                className="group cursor-pointer bg-white rounded-2xl border-2 border-[#383431] p-5 shadow-sm hover:shadow-xl transition-shadow duration-300 relative flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Top Tape decoration */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <WashiTape
                    className="w-20 h-5"
                    color={index % 2 === 0 ? '#E7DFCF' : '#DFD4BE'}
                    angle={index % 2 === 0 ? '-2deg' : '2.5deg'}
                  />
                </div>

                <div>
                  {/* Badge and Year */}
                  <div className="flex items-center justify-between mt-2 mb-4">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#C8523B] text-white tracking-widest uppercase">
                      {award.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8C8275]">
                      {award.year}
                    </span>
                  </div>

                  {/* Laurel wreath graphic */}
                  <div className="my-2 flex justify-center text-[#D49A3D]">
                    <div className="relative flex items-center justify-center">
                      <svg viewBox="0 0 100 50" className="w-24 h-12 fill-current">
                        <path d="M15 45 C 5 30, 10 15, 25 8 C 22 15, 25 25, 35 30 C 25 35, 20 40, 15 45 Z" />
                        <path d="M85 45 C 95 30, 90 15, 75 8 C 78 15, 75 25, 65 30 C 75 35, 80 40, 85 45 Z" />
                        <circle cx="50" cy="25" r="12" fill="#FAF6EE" stroke="#383431" strokeWidth="1.5" />
                        <text x="50" y="29" textAnchor="middle" fontSize="11" fill="#C8523B" fontWeight="bold">★</text>
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-base font-bold font-serif text-[#1C1917] group-hover:text-[#C8523B] transition-colors leading-snug">
                    {lang === 'zh' ? award.title : award.titleEn}
                  </h3>
                  <div className="text-xs font-mono font-medium text-[#C8523B] mt-1">
                    {award.category}
                  </div>

                  <p className="mt-2 text-xs text-[#57534E] leading-relaxed line-clamp-3">
                    {award.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EAE3D5] flex items-center justify-between text-xs font-mono font-bold text-[#383431]">
                  <span className="truncate max-w-[170px]">{award.festival}</span>
                  <span className="text-[#C8523B] group-hover:translate-x-1 transition-transform">
                    查看证书 →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1816]/75 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#FCFAF5] rounded-2xl border-4 border-[#383431] p-6 md:p-8 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Close button */}
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 right-4 p-2 rounded-lg border-2 border-[#383431] bg-white text-[#383431] hover:bg-[#E5DBCB] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Inner Frame */}
            <div className="border-2 border-dashed border-[#8C7A5B] p-6 rounded-xl bg-[#FFFDF9] text-center relative">
              {/* Corner seals */}
              <div className="absolute top-3 left-3 text-xs font-mono text-[#8C7A5B]">★ NITIIN OFFICIAL</div>
              <div className="absolute top-3 right-12 text-xs font-mono text-[#8C7A5B]">REF #2022-MY</div>

              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#FAF0D9] border-2 border-[#D49A3D] flex items-center justify-center shadow-inner">
                <Trophy className="w-8 h-8 text-[#C8523B]" />
              </div>

              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#8C7A5B] mb-1">
                Certificate of Official Recognition
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#1C1917] tracking-tight mb-2">
                {selectedAward.title}
              </h3>

              <div className="text-xs font-mono text-[#C8523B] font-semibold mb-4">
                {selectedAward.festival} ({selectedAward.festivalEn})
              </div>

              <div className="w-24 h-0.5 bg-[#C8523B] mx-auto mb-4" />

              <p className="text-sm font-serif text-[#383431] leading-relaxed max-w-lg mx-auto mb-6">
                This is proudly presented to <strong>Vincy Yeo Wey Xin (杨玮馨)</strong> in recognition of outstanding creative excellence and visionary direction for <em>"{selectedAward.category}"</em>.
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-b border-[#EAE3D5] py-4 text-xs font-mono max-w-md mx-auto">
                <div>
                  <span className="text-[#8C7A5B]">Category:</span>
                  <div className="font-bold text-[#1C1917] mt-0.5">{selectedAward.category}</div>
                </div>
                <div>
                  <span className="text-[#8C7A5B]">Status:</span>
                  <div className="font-bold text-[#C8523B] mt-0.5">{selectedAward.badge} AWARDED</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-[#57534E]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified in International Winner's Directory July 2022</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
