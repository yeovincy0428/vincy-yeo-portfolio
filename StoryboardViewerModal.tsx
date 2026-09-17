import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Layers, AlertCircle, FileText } from 'lucide-react';
import { ProjectItem } from '../types';

interface StoryboardViewerModalProps {
  project: ProjectItem;
  onClose: () => void;
  lang?: 'zh' | 'en';
}

export const StoryboardViewerModal: React.FC<StoryboardViewerModalProps> = ({
  project,
  onClose,
  lang = 'zh'
}) => {
  const [loadError, setLoadError] = useState(false);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* 背景遮罩 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1C1917]/80 backdrop-blur-md cursor-pointer"
        />

        {/* 弹窗主卡片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl h-[88vh] bg-[#FAF8F3] rounded-3xl border-2 border-[#383431] shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* 顶栏 Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#2E2B28] text-white border-b-2 border-[#383431]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#C8523B]">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold font-serif text-white tracking-wide">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#D8C7B0]">
                  {project.storyboardPagesCount} 页完整手绘分镜 · {project.cameraSetupsCount} 机位标注
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* 新窗口直接打开按钮 */}
              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#FAF6EE] text-[#1C1917] hover:bg-[#EAE3D5] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#C8523B]" />
                  <span>新窗口打开 PDF</span>
                </a>
              )}

              {/* 关闭按钮 */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* 内容展示区 iframe */}
          <div className="flex-1 bg-[#201D24] relative overflow-hidden flex items-center justify-center">
            {project.pdfUrl && !loadError ? (
              <iframe
                src={`${project.pdfUrl}#toolbar=1`}
                className="w-full h-full border-none"
                title={project.title}
                onError={() => setLoadError(true)}
              />
            ) : (
              <div className="text-center p-8 max-w-md bg-[#FAF6EE] rounded-2xl border-2 border-[#383431] shadow-lg">
                <AlertCircle className="w-12 h-12 text-[#C8523B] mx-auto mb-3" />
                <h4 className="text-lg font-bold text-[#1C1917] mb-2">未检测到本地嵌入文件</h4>
                <p className="text-xs text-[#57534E] mb-6 leading-relaxed">
                  请确保 PDF 文件已存放在项目的 <code className="bg-[#EAE3D5] px-1 py-0.5 rounded text-[#2E2B28] font-mono">public/</code> 根目录下：
                  <br />
                  <span className="font-mono font-bold text-[#C8523B] block mt-2">
                    {project.pdfUrl}
                  </span>
                </p>
                {project.pdfUrl && (
                  <a
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2E2B28] text-white text-xs font-mono font-bold hover:bg-[#C8523B] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>直接下载 / 浏览 PDF 文档</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* 底部 Footer */}
          <div className="px-6 py-3 bg-[#FAF6EE] border-t border-[#E0D7C6] flex items-center justify-between text-xs font-mono text-[#787063]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#C8523B]" />
              <span>设计规范：包含镜头推拉摇移标注与动画关键帧设计</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-[#C8523B] font-bold hover:underline cursor-pointer"
            >
              关闭预览
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
