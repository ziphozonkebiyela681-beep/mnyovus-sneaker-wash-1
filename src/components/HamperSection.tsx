import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  Check, 
  Phone, 
  MessageCircle, 
  ZoomIn, 
  X, 
  ShieldCheck, 
  Package, 
  Droplets,
  Truck,
  Flame,
  Award
} from 'lucide-react';
import { BUSINESS_INFO, HAMPER_PRODUCT, createWhatsAppBookingUrl, createDirectCallUrl } from '../data/services';

interface HamperSectionProps {
  onAddHamperToCalculator?: () => void;
}

export const HamperSection: React.FC<HamperSectionProps> = ({ onAddHamperToCalculator }) => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const directCallUrl = createDirectCallUrl();
  const whatsAppHamperUrl = createWhatsAppBookingUrl({
    serviceNames: [`Mnyovu's Shoe Care & Chemical Hamper (${HAMPER_PRODUCT.priceDisplay})`],
    totalPrice: HAMPER_PRODUCT.price,
    notes: "I want to purchase the R1,450.00 cleaning chemical hamper that gives shoes that extra clean look!"
  });

  return (
    <section id="hamper" className="py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-[#071530] to-slate-950 text-white relative overflow-hidden border-t-2 border-red-600/60">
      
      {/* Background decorative glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-black tracking-widest uppercase shadow-inner">
            <ShoppingBag className="w-3.5 h-3.5 text-red-400" />
            <span>Take The Secret Magic Home</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Mnyovu's Shoe Care & Chemical Hamper
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Want that unmistakable showroom-clean finish at home? Mnyovu now sells his complete signature chemical cleaning hampers loaded with the exact solutions and tools used in our Jeppestown workshop.
          </p>
        </div>

        {/* Product Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/90 rounded-3xl p-6 sm:p-10 border-2 border-red-600/40 shadow-2xl backdrop-blur-md">
          
          {/* Left Column: Hamper Image Showcase (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div 
              onClick={() => setIsPhotoOpen(true)}
              className="group relative rounded-3xl overflow-hidden border-2 border-slate-700 bg-slate-950 shadow-2xl cursor-pointer hover:border-red-500 transition duration-300"
            >
              <div className="aspect-4/3 sm:aspect-16/12 overflow-hidden flex items-center justify-center bg-slate-950">
                <img
                  src={HAMPER_PRODUCT.image}
                  alt="Mnyovu's Shoe Care and Chemical Hamper on the workshop counter"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition duration-500"
                />
              </div>

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Official Workshop Kit</span>
                </span>
              </div>

              <div className="absolute top-4 right-4 pointer-events-none">
                <div className="w-9 h-9 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-red-600 transition shadow">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom image overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-4 sm:p-5 pointer-events-none">
                <div className="flex items-center gap-1.5 text-xs font-bold text-sky-300">
                  <Droplets className="w-3.5 h-3.5 text-sky-400" />
                  <span>Formulated for that "Extra Clean" Mnyovu Look</span>
                </div>
                <div className="text-sm font-extrabold text-white mt-0.5">
                  Complete Chemical Kit & Accessories in Branded Carry Hamper
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
              <span>(Tap image to view the complete hamper full-size)</span>
            </p>
          </div>

          {/* Right Column: Pricing, Inclusions & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Price Header Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs uppercase font-extrabold text-sky-400 tracking-wider block">
                  Complete Set Price
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {HAMPER_PRODUCT.priceDisplay}
                </div>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-extrabold uppercase">
                  In Stock & Ready
                </span>
                <span className="block text-[11px] text-slate-400 mt-1">
                  Collect at 34 Macintyre St or arrange delivery
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {HAMPER_PRODUCT.description}
            </p>

            {/* Inclusions Checklist */}
            <div className="space-y-2 bg-slate-950/70 p-4 sm:p-5 rounded-2xl border border-slate-800">
              <div className="text-xs font-black uppercase tracking-wider text-sky-300 flex items-center gap-1.5 mb-2.5">
                <Package className="w-4 h-4 text-emerald-400" />
                <span>What's Included in Every Hamper:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {HAMPER_PRODUCT.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 font-bold" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <span className="font-extrabold text-white block">Safe on All Shoes</span>
                  <span className="text-slate-400 text-[11px]">Leather, suede, mesh & soles</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-red-400 shrink-0" />
                <div>
                  <span className="font-extrabold text-white block">Jeppestown Pickup</span>
                  <span className="text-slate-400 text-[11px]">Or WhatsApp for delivery</span>
                </div>
              </div>
            </div>

            {/* Order Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={whatsAppHamperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-[#25D366]" />
                <span>Order Hamper via WhatsApp (060 399 1998)</span>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={directCallUrl}
                  className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-md shadow-red-950/50"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 060 399 1998 to Order</span>
                </a>

                {onAddHamperToCalculator && (
                  <button
                    onClick={onAddHamperToCalculator}
                    className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-xs sm:text-sm transition border border-slate-700 cursor-pointer whitespace-nowrap"
                  >
                    Add to Estimate
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {isPhotoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsPhotoOpen(false)}
        >
          <div 
            className="relative max-w-3xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-red-600/50"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 bg-[#0b1a38] text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="font-extrabold text-sm">
                  Mnyovu's Shoe Care & Chemical Hamper — R1,450.00
                </span>
              </div>
              <button
                onClick={() => setIsPhotoOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 sm:p-4 flex items-center justify-center bg-slate-950 max-h-[75vh]">
              <img
                src={HAMPER_PRODUCT.image}
                alt="Mnyovu's Shoe Care and Chemical Hamper full-size"
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="p-3.5 bg-[#0b1a38] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 border-t border-slate-800">
              <span className="text-slate-300">
                Includes bulk cleaning solution, spray bottle, conditioning lotion, wooden brush, towels & carry bag.
              </span>
              <a
                href={whatsAppHamperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#25D366] text-slate-950 font-black flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                <span>Order via WhatsApp (R1,450.00)</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
