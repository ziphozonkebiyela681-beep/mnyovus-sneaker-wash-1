import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Sparkles, FileText, Tag, ShoppingBag, Cpu, Crown } from 'lucide-react';
import { BUSINESS_INFO, createDirectCallUrl, createWhatsAppBookingUrl } from '../data/services';
import { PageId } from '../types';

interface NavbarProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
  onScrollToCalculator: () => void;
  onReplayRun?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activePage, 
  onPageChange, 
  onScrollToCalculator,
  onReplayRun 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultWhatsAppUrl = createWhatsAppBookingUrl({});
  const directCallUrl = createDirectCallUrl();

  const handleNavClick = (page: PageId) => {
    onPageChange(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0b1a38] text-white shadow-xl border-b-2 border-red-600/70">
      {/* Top micro-bar with address & status */}
      <div className="bg-[#071126] text-xs py-1.5 px-4 text-slate-300 border-b border-slate-800 hidden sm:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>34 Macintyre Street, Jeppestown, Johannesburg</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-medium">Walk-ins Welcome</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sky-300 font-medium tracking-wide">
              {BUSINESS_INFO.slogan}
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-white hover:text-red-400 font-bold transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-red-500" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="max-w-6xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <button 
          onClick={() => handleNavClick('prices')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-red-600 shadow-md bg-white p-0.5 shrink-0 group-hover:scale-105 transition-transform duration-200">
            <img
              src={BUSINESS_INFO.images.logo}
              alt="Mnyovu's Sneaker Wash Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-none text-white">
                MNYOVU'S
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-600 text-white">
                Est. {BUSINESS_INFO.established}
              </span>
            </div>
            <span className="text-xs text-sky-300 font-medium tracking-wide">
              Sneaker Wash & Shoe Care
            </span>
          </div>
        </button>

        {/* Desktop Multi-Page Links */}
        <div className="hidden lg:flex items-center gap-5 text-xs xl:text-sm font-bold text-slate-200">
          <button
            onClick={() => handleNavClick('prices')}
            className={`transition-colors cursor-pointer py-1 ${
              activePage === 'prices' ? 'text-red-400 border-b-2 border-red-500 font-black' : 'hover:text-sky-400'
            }`}
          >
            Prices & Booking
          </button>
          
          <button
            onClick={() => handleNavClick('results')}
            className={`transition-colors cursor-pointer py-1 ${
              activePage === 'results' ? 'text-red-400 border-b-2 border-red-500 font-black' : 'hover:text-sky-400'
            }`}
          >
            Before & After
          </button>

          <button
            onClick={() => handleNavClick('hamper')}
            className={`transition-colors cursor-pointer py-1 ${
              activePage === 'hamper' ? 'text-amber-400 border-b-2 border-amber-400 font-black' : 'hover:text-amber-300'
            }`}
          >
            Chemical Hamper (R1,450)
          </button>

          <button
            onClick={() => handleNavClick('workshop')}
            className={`transition-colors cursor-pointer py-1 ${
              activePage === 'workshop' ? 'text-red-400 border-b-2 border-red-500 font-black' : 'hover:text-sky-400'
            }`}
          >
            Machine & Team
          </button>

          <button
            onClick={() => handleNavClick('founder')}
            className={`transition-colors cursor-pointer py-1 ${
              activePage === 'founder' ? 'text-red-400 border-b-2 border-red-500 font-black' : 'hover:text-red-300'
            }`}
          >
            Meet Mnyovu
          </button>

          <button
            onClick={() => handleNavClick('location')}
            className={`transition-colors cursor-pointer py-1 ${
              activePage === 'location' ? 'text-red-400 border-b-2 border-red-500 font-black' : 'hover:text-sky-400'
            }`}
          >
            Store & Hours
          </button>
        </div>

        {/* Desktop Quick Booking Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {onReplayRun && (
            <button
              onClick={onReplayRun}
              className="p-2 rounded-lg bg-slate-800 hover:bg-sky-950 text-sky-300 hover:text-white border border-sky-500/40 transition cursor-pointer"
              title="Watch glowing sneakers runner silhouettes sprint"
            >
              <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
            </button>
          )}

          <a
            href={directCallUrl}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-red-400" />
            <span className="hidden xl:inline">{BUSINESS_INFO.phoneDisplay}</span>
            <span className="xl:hidden">Call</span>
          </a>

          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 text-xs font-black transition shadow-md shadow-emerald-950/20"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
            <span>WhatsApp Booking</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          {onReplayRun && (
            <button
              onClick={onReplayRun}
              className="p-2 rounded-lg bg-slate-800 text-sky-300 border border-sky-500/30"
              title="Glowing runners"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}
          <a
            href={directCallUrl}
            className="p-2 rounded-lg bg-red-600 text-white font-bold text-xs flex items-center gap-1"
            title="Call 0603991998"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071126] border-t border-slate-800 px-4 py-4 space-y-2.5">
          <div className="text-[11px] text-sky-300 font-extrabold uppercase tracking-wider mb-1">
            Mnyovu's Pages (Sorted by Immediacy)
          </div>
          
          <button
            onClick={() => handleNavClick('prices')}
            className={`w-full text-left font-bold py-2 px-3 rounded-xl text-sm flex items-center justify-between cursor-pointer ${
              activePage === 'prices' ? 'bg-red-600 text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span>1. Prices & Booking (From R80)</span>
            <Tag className="w-4 h-4 opacity-70" />
          </button>

          <button
            onClick={() => handleNavClick('results')}
            className={`w-full text-left font-bold py-2 px-3 rounded-xl text-sm flex items-center justify-between cursor-pointer ${
              activePage === 'results' ? 'bg-red-600 text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span>2. Before & After Transformation</span>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </button>

          <button
            onClick={() => handleNavClick('hamper')}
            className={`w-full text-left font-bold py-2 px-3 rounded-xl text-sm flex items-center justify-between cursor-pointer ${
              activePage === 'hamper' ? 'bg-red-600 text-white' : 'text-amber-300 hover:bg-slate-800'
            }`}
          >
            <span>3. Chemical Hamper (R1,450.00)</span>
            <ShoppingBag className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleNavClick('workshop')}
            className={`w-full text-left font-bold py-2 px-3 rounded-xl text-sm flex items-center justify-between cursor-pointer ${
              activePage === 'workshop' ? 'bg-red-600 text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span>4. 2-in-1 Machine & Team</span>
            <Cpu className="w-4 h-4 text-sky-400" />
          </button>

          <button
            onClick={() => handleNavClick('founder')}
            className={`w-full text-left font-bold py-2 px-3 rounded-xl text-sm flex items-center justify-between cursor-pointer ${
              activePage === 'founder' ? 'bg-red-600 text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span>5. Meet Mnyovu (Founder)</span>
            <Crown className="w-4 h-4 text-amber-400" />
          </button>

          <button
            onClick={() => handleNavClick('location')}
            className={`w-full text-left font-bold py-2 px-3 rounded-xl text-sm flex items-center justify-between cursor-pointer ${
              activePage === 'location' ? 'bg-red-600 text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span>6. 34 Macintyre St & Hours</span>
            <MapPin className="w-4 h-4 text-red-500" />
          </button>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={directCallUrl}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 0603991998</span>
            </a>
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#25D366] text-slate-950 font-bold text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
