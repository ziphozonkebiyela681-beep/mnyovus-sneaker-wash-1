import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Phone, 
  MessageCircle, 
  RotateCcw, 
  ShieldCheck, 
  Eye, 
  ZoomIn, 
  Flame,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppBookingUrl, createDirectCallUrl } from '../data/services';

export const BeforeAfterShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'after' | 'before' | 'side-by-side'>('side-by-side');
  const [sliderPos, setSliderPos] = useState<number>(50);

  const directCallUrl = createDirectCallUrl();
  const whatsAppTransformUrl = createWhatsAppBookingUrl({
    notes: "Hi Mnyovu's! I saw the Antony Morato before/after wash on your website. I want my sneakers transformed like that!"
  });

  return (
    <section id="results" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-y-2 border-red-600/40">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-black tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Real Results • Real Craftsmanship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            See The Transformation: Before & After
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From mud-splattered daily beaters to showroom-fresh kicks. Witness what our <strong className="text-white">2-in-1 machine technology</strong> and dedicated hands achieve on an authentic Antony Morato designer sneaker.
          </p>
        </div>

        {/* View Mode Toggle Switch */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('side-by-side')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer ${
              activeTab === 'side-by-side'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Side-by-Side View
          </button>
          <button
            onClick={() => setActiveTab('before')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer ${
              activeTab === 'before'
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Before Clean (Muddy)
          </button>
          <button
            onClick={() => setActiveTab('after')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer ${
              activeTab === 'after'
                ? 'bg-[#25D366] text-slate-950 font-black shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            After Clean (Manje Clean!) ✨
          </button>
        </div>

        {/* Main Transformation Visual Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Side by side display */}
          {activeTab === 'side-by-side' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* BEFORE CARD */}
              <div className="bg-slate-950 rounded-3xl p-4 sm:p-5 border-2 border-amber-600/40 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-black uppercase tracking-wider">
                      BEFORE WASH
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      Antony Morato Leather
                    </span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-3/4 max-h-[380px] sm:max-h-[420px] flex items-center justify-center">
                    <img
                      src={BUSINESS_INFO.images.beforeShoe}
                      alt="Before Sneaker Wash - Muddy and stained shoe"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-amber-300 border border-amber-500/30">
                      ⚠️ Mud splatters & stained sole
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>Heavy mud caked onto white sole</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>Dust-covered leather and dull metal badge</span>
                  </div>
                </div>
              </div>

              {/* AFTER CARD */}
              <div className="bg-slate-950 rounded-3xl p-4 sm:p-5 border-2 border-emerald-500/60 shadow-2xl flex flex-col justify-between ring-2 ring-emerald-500/20">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow">
                      AFTER WASH • MANJE CLEAN !!
                    </span>
                    <span className="text-xs font-extrabold text-emerald-400">
                      R80 Basic Wash
                    </span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-3/4 max-h-[380px] sm:max-h-[420px] flex items-center justify-center">
                    <img
                      src={BUSINESS_INFO.images.afterShoe}
                      alt="After Sneaker Wash - Immaculate clean shoe"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>100% Snow-White Midsole</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs text-emerald-300/90 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pure white restored midsole with zero residue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Supple conditioned leather with gleaming logo plaque</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Single Before View */}
          {activeTab === 'before' && (
            <div className="bg-slate-950 rounded-3xl p-6 border-2 border-amber-600/40 shadow-xl max-w-lg mx-auto">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-black uppercase">
                  BEFORE CLEANING
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Muddy & Dull
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-800">
                <img
                  src={BUSINESS_INFO.images.beforeShoe}
                  alt="Before clean"
                  className="w-full h-[450px] object-cover object-center"
                />
              </div>
              <p className="text-center text-xs text-slate-400 mt-3">
                Notice the brown caked mud on the white base and faded leather.
              </p>
            </div>
          )}

          {/* Single After View */}
          {activeTab === 'after' && (
            <div className="bg-slate-950 rounded-3xl p-6 border-2 border-emerald-500 shadow-2xl max-w-lg mx-auto ring-2 ring-emerald-500/20">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-black uppercase shadow">
                  AFTER CLEANING • MANJE CLEAN !!
                </span>
                <span className="text-xs font-black text-emerald-400">
                  Ready To Wear
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-800">
                <img
                  src={BUSINESS_INFO.images.afterShoe}
                  alt="After clean"
                  className="w-full h-[450px] object-cover object-center"
                />
              </div>
              <p className="text-center text-xs text-emerald-400 mt-3 font-semibold">
                Sparkling clean white sole, rich deep black leather, restored luster.
              </p>
            </div>
          )}

          {/* What We Did on This Pair Breakdown */}
          <div className="mt-8 bg-[#0b1a38] rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg">
            <h4 className="font-black text-sm uppercase tracking-wider text-sky-300 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>How We Achieved This Finish:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="font-extrabold text-white mb-1">1. Sole Rotary Scrub</div>
                <p className="text-slate-400 leading-snug">
                  Our machine's precision sole brush stripped away hard mud and road grime without gouging the rubber.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="font-extrabold text-white mb-1">2. Gentle Foam & Leather Buff</div>
                <p className="text-slate-400 leading-snug">
                  pH-balanced foam wash conditioned the black leather upper and removed watermarks.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="font-extrabold text-white mb-1">3. Controlled Dry & Shine</div>
                <p className="text-slate-400 leading-snug">
                  Dehydrator spin cycle and climate cabinet dried the shoe safely in hours.
                </p>
              </div>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="mt-8 text-center space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsAppTransformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-[#25D366]" />
                <span>Get This Clean On WhatsApp (060 399 1998)</span>
              </a>

              <a
                href={directCallUrl}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call 060 399 1998</span>
              </a>
            </div>
            
            <p className="text-xs text-slate-400 font-medium">
              Drop off your dirty kicks at 34 Macintyre St, Jeppestown — Walk-ins always welcome!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
