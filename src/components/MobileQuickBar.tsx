import React from 'react';
import { Phone, MessageCircle, Calculator, Tag } from 'lucide-react';
import { BUSINESS_INFO, createDirectCallUrl, createWhatsAppBookingUrl } from '../data/services';

interface MobileQuickBarProps {
  onScrollToCalculator: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onScrollToCalculator }) => {
  const directCallUrl = createDirectCallUrl();
  const defaultWhatsAppUrl = createWhatsAppBookingUrl({
    notes: 'Hi Mnyovu, I want to book a sneaker wash / shoe care service!'
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#071126]/95 backdrop-blur-lg border-t border-red-600/60 p-2.5 px-3 shadow-2xl safe-area-pb">
      <div className="flex items-center gap-2">
        {/* Quick Call Button */}
        <a
          href={directCallUrl}
          className="flex-1 py-3 px-2 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md transition"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span className="truncate">Call 0603991998</span>
        </a>

        {/* Quick WhatsApp Button */}
        <a
          href={defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 transition"
        >
          <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366] shrink-0" />
          <span className="truncate">WhatsApp Book</span>
        </a>

        {/* Calc anchor */}
        <button
          onClick={onScrollToCalculator}
          className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-700 cursor-pointer"
          aria-label="Calculator"
          title="Price Estimator"
        >
          <Calculator className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
