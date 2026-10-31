import React from 'react';
import { Phone, MessageCircle, Sparkles, CheckCircle2, Eye, Calculator, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO, createDirectCallUrl, createWhatsAppBookingUrl } from '../data/services';

interface HeroProps {
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToCalculator }) => {
  const directCallUrl = createDirectCallUrl();
  const whatsAppUrl = createWhatsAppBookingUrl({
    notes: 'Hi, I saw your website and would like to book a sneaker wash / shoe care!'
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1a38] via-[#0d224d] to-[#0b1a38] text-white pt-8 pb-14 md:pt-14 md:pb-20 border-b border-red-600/30">
      {/* Decorative background glow / bubble elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Slogan Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/50 text-red-200 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-inner">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span>{BUSINESS_INFO.slogan}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm uppercase tracking-widest font-black text-sky-300">
                Quality Clean • Fresh Look • Professional Care
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Mnyovu's Shoe Care & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-red-400">Sneaker Wash</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Johannesburg's trusted sneaker laundry & leather restoration workshop. From daily white kicks to luxury <strong className="text-white font-bold">Carvella</strong> resprays, <strong className="text-white font-bold">Arbiter</strong> refinishing, and full color restorations.
            </p>

            {/* Key Value Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">2-in-1 Machine Wash & Dry</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">From only R80</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">Dedicated Artisan Care</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">Walk-Ins Welcome</span>
              </span>
            </div>

            {/* Direct Booking Call-To-Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              {/* WhatsApp CTA */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-emerald-900/40 hover:shadow-emerald-900/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-[#25D366]" />
                <span>Book via WhatsApp ({BUSINESS_INFO.phoneDisplay})</span>
              </a>

              {/* Direct Call CTA */}
              <a
                href={directCallUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-950/40 hover:shadow-red-950/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4" />
                <span>Call 060 399 1998</span>
              </a>
            </div>

            {/* Secondary actions */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300 pt-1">
              <button
                onClick={onScrollToCalculator}
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors cursor-pointer underline underline-offset-4 decoration-sky-400/50"
              >
                <Calculator className="w-3.5 h-3.5 text-sky-400" />
                <span>Estimate Your Multi-Pair Price</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Logo */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              
              {/* Outer decorative card */}
              <div className="relative bg-gradient-to-b from-slate-900/90 to-[#071126] border-2 border-slate-700/80 rounded-3xl p-5 shadow-2xl backdrop-blur-sm">
                
                {/* Red/Navy Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                      Jeppestown Flagship
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-sky-300 bg-sky-950/80 border border-sky-800/60 px-2 py-0.5 rounded-md">
                    Fast Turnaround
                  </span>
                </div>

                {/* Centered Logo Badge */}
                <div className="py-4 flex justify-center">
                  <div className="relative group">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-red-600 shadow-2xl bg-white p-1 hover:scale-105 transition-transform duration-300">
                      <img
                        src={BUSINESS_INFO.images.logo}
                        alt="Mnyovu's Sneaker Wash Logo Badge"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0b1a38] text-white text-[11px] font-black uppercase tracking-wide px-3 py-1 rounded-full border border-red-500 shadow-md whitespace-nowrap">
                      MANJE CLEAN !!
                    </div>
                  </div>
                </div>

                {/* Quick Price List highlights snapshot */}
                <div className="space-y-2 mt-2 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition">
                    <span className="font-semibold text-slate-200">Basic Sneaker Wash</span>
                    <span className="font-extrabold text-white bg-red-600 px-2 py-0.5 rounded text-[11px]">R80</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition">
                    <span className="font-semibold text-slate-200">Basic Shoe Cleaning (Polish)</span>
                    <span className="font-extrabold text-white bg-red-600 px-2 py-0.5 rounded text-[11px]">R80</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition">
                    <span className="font-semibold text-slate-200">Arbiter Respray</span>
                    <span className="font-extrabold text-white bg-blue-700 px-2 py-0.5 rounded text-[11px]">R120</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition">
                    <span className="font-semibold text-slate-200">Carvella Respray</span>
                    <span className="font-extrabold text-white bg-blue-700 px-2 py-0.5 rounded text-[11px]">R180</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition">
                    <span className="font-semibold text-slate-200">Dye & Restoration</span>
                    <span className="font-extrabold text-white bg-blue-800 px-2 py-0.5 rounded text-[11px]">R250</span>
                  </div>
                </div>

                {/* Quick calculate jump button */}
                <button
                  onClick={onScrollToCalculator}
                  className="w-full mt-3 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-xs font-black text-white flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Customize Your Order in Calculator</span>
                </button>
              </div>

              {/* Bottom location pin reminder */}
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>34 Macintyre Street, Jeppestown</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
