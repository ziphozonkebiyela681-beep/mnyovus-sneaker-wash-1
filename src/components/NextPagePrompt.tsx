import React from 'react';
import { ArrowRight, Sparkles, Tag, ArrowLeft } from 'lucide-react';
import { PageId } from '../types';
import { PAGES_CONFIG } from './PageNavigationRibbon';

interface NextPagePromptProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
}

export const NextPagePrompt: React.FC<NextPagePromptProps> = ({
  currentPage,
  onPageChange,
}) => {
  const currentIndex = PAGES_CONFIG.findIndex(p => p.id === currentPage);
  const nextConfig = PAGES_CONFIG[(currentIndex + 1) % PAGES_CONFIG.length];
  const isLast = currentIndex === PAGES_CONFIG.length - 1;

  return (
    <div className="py-10 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-center sm:text-left space-y-1">
          <div className="text-xs uppercase font-extrabold tracking-wider text-sky-400">
            {isLast ? "You've Explored All Sections" : "Next Page to Explore"}
          </div>
          <h4 className="text-lg font-black text-white">
            {isLast ? "Ready to book your sneaker wash?" : nextConfig.title}
          </h4>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {currentPage !== 'prices' && (
            <button
              onClick={() => {
                onPageChange('prices');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Back to Prices</span>
            </button>
          )}

          <button
            onClick={() => {
              onPageChange(isLast ? 'prices' : nextConfig.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition cursor-pointer"
          >
            <span>{isLast ? 'Back to Prices & Booking' : `Go to ${nextConfig.shortTitle}`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
