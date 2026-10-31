import React from 'react';
import { 
  Tag, 
  Sparkles, 
  ShoppingBag, 
  Cpu, 
  Crown, 
  MapPin,
  ChevronRight,
  Flame
} from 'lucide-react';
import { PageId } from '../types';

interface PageNavigationRibbonProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
  onReplayRun?: () => void;
}

export const PAGES_CONFIG: {
  id: PageId;
  title: string;
  shortTitle: string;
  icon: React.ReactNode;
  badge?: string;
  order: number;
}[] = [
  {
    id: 'prices',
    title: '1. Prices & Booking',
    shortTitle: 'Prices & Book',
    icon: <Tag className="w-3.5 h-3.5" />,
    badge: 'Immediate',
    order: 1,
  },
  {
    id: 'results',
    title: '2. Before & After',
    shortTitle: 'Results',
    icon: <Sparkles className="w-3.5 h-3.5" />,
    badge: 'Proof',
    order: 2,
  },
  {
    id: 'hamper',
    title: '3. Chemical Hamper',
    shortTitle: 'Hamper (R1,450)',
    icon: <ShoppingBag className="w-3.5 h-3.5" />,
    badge: 'Shop',
    order: 3,
  },
  {
    id: 'workshop',
    title: '4. Machine & Team',
    shortTitle: 'Machine & Team',
    icon: <Cpu className="w-3.5 h-3.5" />,
    badge: 'Tech',
    order: 4,
  },
  {
    id: 'founder',
    title: '5. Meet Mnyovu',
    shortTitle: 'The Founder',
    icon: <Crown className="w-3.5 h-3.5" />,
    badge: 'Story',
    order: 5,
  },
  {
    id: 'location',
    title: '6. Store & Hours',
    shortTitle: 'Store & FAQs',
    icon: <MapPin className="w-3.5 h-3.5" />,
    badge: 'Visit',
    order: 6,
  },
];

export const PageNavigationRibbon: React.FC<PageNavigationRibbonProps> = ({
  activePage,
  onPageChange,
  onReplayRun,
}) => {
  return (
    <div className="sticky top-[58px] sm:top-[68px] z-30 bg-[#071126]/95 backdrop-blur-md border-b border-red-600/30 py-2 px-3 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        
        {/* Horizontal scrollable tab buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 max-w-full">
          {PAGES_CONFIG.map(page => {
            const isActive = activePage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => onPageChange(page.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md shadow-red-900/40 ring-2 ring-red-400/40 scale-102'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-sky-400'}>
                  {page.icon}
                </span>
                <span>{page.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Replay Runner Silhouettes Button */}
        {onReplayRun && (
          <button
            onClick={onReplayRun}
            className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-sky-950 text-[11px] font-bold text-sky-300 hover:text-sky-200 border border-sky-500/30 transition shrink-0 cursor-pointer"
            title="Replay running silhouettes with glowing sneakers"
          >
            <Sparkles className="w-3 h-3 text-sky-400 animate-spin" />
            <span>Glowing Run</span>
          </button>
        )}

      </div>
    </div>
  );
};
