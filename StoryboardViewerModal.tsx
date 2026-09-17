import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, FileText, Image as ImageIcon } from 'lucide-react';

interface StoryboardViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
  pageCount: number;
  lang?: 'zh' | 'en';
}

export const StoryboardViewerModal: React.FC<StoryboardViewerModalProps> = ({
  isOpen,
  onClose,
  title,
  pdfUrl,
  pageCount,
  lang = 'zh'
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'pdf' | 'gallery'>('pdf');

  if (!isOpen) return null;

  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
  const fullPdfPath = pdfUrl.startsWith('/') ? `${baseUrl}${pdfUrl}` : `${baseUrl}/${pdfUrl}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-5xl h-[85vh] bg-[#FAF8F3] rounded-3xl border-2 border-[#383431] shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#2B2724] text-white border-b-2 border-[#383431]">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#C8523B]" />
              <h3 className="font-serif font-bold text-base md:text-lg tracking-wide text-[#FAF6EE] truncate max-w-md">
                {title} — {lang === 'zh' ? '手绘分镜与场景剖析' : 'Storyboard Analysis'}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1 bg-[#3A3632] p-1 rounded-xl text-xs font-mono">
                <button
                  onClick={() => setViewMode('pdf')}
                  className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'pdf' ? 'bg-[#C8523B] text-white font-bold' : 'text-[#D4C9BA] hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF 模式</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-[#D4C9BA] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Viewer Body */}
          <div className="flex-1 bg-[#1C1917] relative flex items-center justify-center overflow-hidden p-2 sm:p-4">
            {viewMode === 'pdf' ? (
              <iframe
                src={`${fullPdfPath}#toolbar=0&navpanes=0`}
                className="w-full h-full rounded-xl border border-[#3A3632] bg-white shadow-inner"
                title={title}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-white space-y-4">
                <p className="text-sm font-mono text-[#D4C9BA]">正在预加载高分辨率画稿...</p>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="px-6 py-3 bg-[#FAF6EE] border-t-2 border-[#383431] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="text-[#57534E]">
              {lang === 'zh' ? '包含全片镜头走位与机位标注' : 'Complete shot blocking & camera specs'}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={fullPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-lg bg-[#2B2724] text-white hover:bg-[#C8523B] transition-colors font-bold shadow-xs inline-flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '在新标签页打开 PDF' : 'Open Full PDF'}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
