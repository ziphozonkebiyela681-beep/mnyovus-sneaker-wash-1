import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Clock, 
  Heart,
  ChevronUp
} from 'lucide-react';
import { BUSINESS_INFO, createDirectCallUrl, createWhatsAppBookingUrl } from '../data/services';

interface FooterProps {
  onScrollToCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToCalculator }) => {
  const directCallUrl = createDirectCallUrl();
  const defaultWhatsAppUrl = createWhatsAppBookingUrl({});

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071126] text-white pt-14 pb-20 md:pb-12 border-t-2 border-red-600/70">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 shadow bg-white p-0.5 shrink-0">
                <img
                  src={BUSINESS_INFO.images.logo}
                  alt="Mnyovu's Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight block">
                  MNYOVU'S
                </span>
                <span className="text-xs text-sky-300 font-semibold">
                  Sneaker Wash & Shoe Care • Est. {BUSINESS_INFO.established}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional shoe care, sneaker laundry, and leather restoration in Johannesburg. From Basic washes at R80 to luxury Carvella resprays and full dye overhauls.
            </p>

            <div className="inline-block px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-black tracking-wide uppercase">
              {BUSINESS_INFO.slogan}
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                Follow Us On Social Media
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs transition border border-slate-700"
                  aria-label="Shop Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>{BUSINESS_INFO.instagram}</span>
                </a>

                <a
                  href={BUSINESS_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs transition border border-slate-700"
                  aria-label="Shop TikTok"
                >
                  <span className="text-cyan-400 font-extrabold text-[11px]">TT</span>
                  <span>{BUSINESS_INFO.tiktok}</span>
                </a>
              </div>

              <div className="text-[10px] text-slate-500 pt-1">
                Founder: <a href={BUSINESS_INFO.founderSocials.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-400 font-semibold">{BUSINESS_INFO.founderSocials.instagram}</a> • <a href={BUSINESS_INFO.founderSocials.tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 font-semibold">{BUSINESS_INFO.founderSocials.tiktok}</a>
              </div>
            </div>
          </div>

          {/* Quick Links & Services (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
              Services & Pricing
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Basic Sneaker Wash — R80
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Basic Shoe Cleaning (Polish) — R80
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Arbiter Respray — R120
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Carvella Respray — R180
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Dye & Restoration — R250
                </a>
              </li>
              <li>
                <a href="#hamper" className="hover:text-amber-400 font-bold transition-colors">
                  Cleaning Chemical Hamper — R1,450
                </a>
              </li>
              <li>
                <a href="#technology-and-team" className="hover:text-sky-300 transition-colors">
                  2-in-1 Machine & Our Team
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-red-400 font-semibold transition-colors">
                  Meet Mnyovu (Founder & Visionary)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
              Bookings & Location
            </h4>
            
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-bold">Booking Line:</span>
                  <a href={directCallUrl} className="text-white hover:text-sky-300 font-extrabold text-sm">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <span className="block text-[11px] text-slate-500">Call or WhatsApp anytime</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-bold">Workshop Address:</span>
                  <span className="text-slate-300">{BUSINESS_INFO.address}</span>
                  <span className="block text-[11px] text-emerald-400">Walk-ins Welcome • Drop-off Available</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-bold">Trading Hours:</span>
                  <span>Mon - Fri: {BUSINESS_INFO.hours.weekdays}</span>
                  <span className="block">Sat: {BUSINESS_INFO.hours.saturdays}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom micro bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Mnyovu's Sneaker Wash & Shoe Care. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Jeppestown, Johannesburg</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white flex items-center gap-1 transition cursor-pointer"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
