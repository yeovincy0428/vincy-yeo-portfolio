import React from 'react';
import { EXPERIENCES, EDUCATION } from './portfolioData';
import { Briefcase, GraduationCap, MapPin, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { WashiTape, StampSeal } from './HandDrawnSvg';

export const ExperienceTimeline: React.FC<{ lang?: 'zh' | 'en' }> = ({ lang = 'zh' }) => {
  return (
    <section id="experience" className="relative py-16 md:py-24 border-b-2 border-[#383431] bg-[#FAF6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#383431] bg-white text-xs font-mono font-bold uppercase tracking-wider text-[#C8523B] mb-3 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#C8523B]" />
            <span>{lang === 'zh' ? '履历与学术训练' : 'Experience & Academic Training'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1C1917] tracking-tight">
            {lang === 'zh' ? '实战经历与学术历程' : 'Career Track & Education'}
          </h2>
          <p className="mt-2 text-base text-[#57534E]">
            {lang === 'zh'
              ? '跨国汽车品牌 TVC 统筹、头部科技企业文化视频管线研发，以及扎实的同济大学艺术硕士背景。'
              : 'Combining commercial production leadership, AI workflow exploration, and top-tier academic honors.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold font-serif text-[#1C1917] flex items-center gap-2 border-b-2 border-[#383431] pb-2">
              <Briefcase className="w-5 h-5 text-[#C8523B]" />
              <span>{lang === 'zh' ? '影视制作与内容运营经验' : 'Production & Media Experience'}</span>
            </h3>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border-2 border-[#383431] p-6 shadow-sm relative group hover:border-[#C8523B] transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#C8523B] bg-[#FAF0E1] px-2.5 py-1 rounded border border-[#E2D2BC]">
                      {exp.period}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono text-[#8C8275]">
                      <MapPin className="w-3.5 h-3.5 text-[#8C8275]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold font-serif text-[#1C1917] mt-1">
                    {exp.company}
                    <span className="text-xs font-sans font-normal text-[#6E6659] ml-2">
                      ({exp.companyEn})
                    </span>
                  </h4>

                  <div className="text-xs font-mono font-semibold text-[#2E3A59] mb-4">
                    {exp.role}
                  </div>

                  <ul className="space-y-2 text-xs md:text-sm text-[#44403C]">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-[#C8523B] mt-1 font-bold">▪</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Rigor */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-bold font-serif text-[#1C1917] flex items-center gap-2 border-b-2 border-[#383431] pb-2">
              <GraduationCap className="w-5 h-5 text-[#2E3A59]" />
              <span>{lang === 'zh' ? '顶尖学术背景与荣誉' : 'Academic Rigor'}</span>
            </h3>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#FCFAF7] rounded-2xl border-2 border-[#383431] p-6 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-3 right-3">
                    <WashiTape className="w-16 h-5" color="#E7DFCF" angle="-2deg" />
                  </div>

                  <div className="text-xs font-mono font-bold text-[#2E3A59] mb-1">
                    {edu.period}
                  </div>

                  <h4 className="text-base font-bold font-serif text-[#1C1917]">
                    {edu.school}
                  </h4>
                  <div className="text-xs text-[#787063] font-sans mt-0.5">
                    {edu.schoolEn}
                  </div>

                  <div className="my-3 py-2 px-3 bg-white rounded-xl border border-[#D4C9BA] flex items-center justify-between text-xs font-mono">
                    <span className="font-semibold text-[#1C1917]">{edu.degree}</span>
                    <span className="font-bold text-[#C8523B] bg-[#FAF0E1] px-2 py-0.5 rounded">
                      GPA {edu.gpa}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#57534E]">
                    {edu.honors.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5">
                        <span className="text-[#D49A3D]">★</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Languages & Cross-cultural summary card */}
              <div className="bg-[#FAF3E0] rounded-2xl border-2 border-dashed border-[#D49A3D] p-5">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6014] mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D49A3D]" />
                  <span>{lang === 'zh' ? '跨文化沟通与四语工作能力' : 'Multilingual Fluency'}</span>
                </h5>
                <p className="text-xs leading-relaxed text-[#5C4825] mb-3">
                  马来西亚出生长大，接受英国双学士与中国顶尖 985 高度视听训练，可使用普通话、英语（IELTS 8.0水平/全英教学）、粤语及马来语无障碍进行跨国商业制片、艺人沟通与海外商务对接。
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Mandarin (母语)', 'English (精通/学术)', 'Cantonese (流利)', 'Malay (专业)'].map((l, i) => (
                    <span key={i} className="text-[11px] font-mono font-bold bg-white px-2 py-0.5 rounded border border-[#CDBEAA] text-[#3D3019]">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
