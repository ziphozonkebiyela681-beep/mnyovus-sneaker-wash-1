import React, { useState } from 'react';
import { 
  Cpu, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Wind, 
  Droplets, 
  RotateCw, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ZoomIn, 
  X,
  Flame,
  Award
} from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppBookingUrl, createDirectCallUrl } from '../data/services';

export const MachineryAndTeam: React.FC = () => {
  const [activePhotoModal, setActivePhotoModal] = useState<'machine' | 'team' | null>(null);

  const directCallUrl = createDirectCallUrl();
  const whatsAppBookingUrl = createWhatsAppBookingUrl({
    notes: "Hi Mnyovu's! I saw your machine wash setup and team on the website. I want to book my pairs!"
  });

  return (
    <section id="technology-and-team" className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      
      {/* Decorative background blurs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1a38] text-sky-300 text-xs font-black tracking-widest uppercase shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>Industrial Tech & Heartfelt Craftsmanship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1a38] tracking-tight">
            Advanced Machinery. Dedicated Hands.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At Mnyovu's, we combine <strong className="text-[#0b1a38]">industrial 2-in-1 sneaker washing & drying technology</strong> with our passionate, respectful team who treat every client and every pair like royalty.
          </p>
        </div>

        {/* Feature 1: Modern Machinery Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          
          {/* Image Showcase (Left - 6 cols) */}
          <div className="lg:col-span-6">
            <div 
              onClick={() => setActivePhotoModal('machine')}
              className="group relative rounded-3xl overflow-hidden border-2 border-slate-300 bg-slate-900 shadow-xl cursor-pointer hover:shadow-2xl transition duration-300"
            >
              <img
                src={BUSINESS_INFO.images.machine}
                alt="2 in 1 All-in-One Industrial Sneaker Washing Machine and Dryer at Mnyovu's"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-102 transition duration-500"
              />
              
              {/* Overlay gradient & badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-between p-5">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow">
                    Dustria Service 2-in-1 Tech
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    All-In-One Sneaker Cleaning Machine
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                    Industrial Power Meets Sneaker Safety
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                    Features dedicated Sole, Upper, and Groove brushes plus an illuminated climate-controlled drying bay.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
              <span>(Tap image to view machine station full-size)</span>
            </p>
          </div>

          {/* Machine Details & Benefits (Right - 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-100 text-sky-800 text-xs font-extrabold mb-2">
                <Droplets className="w-3.5 h-3.5 text-sky-600" />
                <span>Modern Shoe Laundry Machinery</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0b1a38] leading-tight">
                Why Our Machine Washing Changes The Game
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2">
                Instead of harsh hand-scrubbing with stiff household brushes that wear out delicate stitchwork, Mnyovu's uses a specialized <strong className="text-slate-900">2-in-1 Industrial Sneaker Washing & Drying Machine</strong> designed specifically for footwear.
              </p>
            </div>

            {/* Tech Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <RotateCw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0b1a38] uppercase">
                    3-Zone Precision Brushes
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Separate brushes for outsoles, uppers, and grooves to eliminate stubborn mud without scratching surfaces.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0b1a38] uppercase">
                    Shoe Dehydrator & Spinner
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Rapid gentle moisture extraction that keeps foam buoyant and stops fabric water stains before drying.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0b1a38] uppercase">
                    Glue-Safe Drying Cabinet
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Illuminated internal racks naturally circulate air, preventing sole detachment and heat yellowing.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0b1a38] uppercase">
                    Water Efficient & Gentle
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    High pressure micro-foam uses minimal water, ensuring suede and mesh dry crisp and clean.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500">
                Safe for all brands:
              </span>
              <span className="text-xs font-extrabold text-[#0b1a38] bg-slate-200/80 px-2.5 py-1 rounded-md">
                Nike • Jordan • Carvella • Arbiter • Adidas • Asics
              </span>
            </div>
          </div>

        </div>

        {/* Feature 2: Dedicated Team & Royalty Treatment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-slate-200">
          
          {/* Team Messaging (Left on large - 6 cols) */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-100 text-red-800 text-xs font-extrabold mb-2">
                <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                <span>Client First & Royalty Care</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0b1a38] leading-tight">
                Our Dedicated Team Treats Every Customer & Every Shoe Like Gold
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2">
                High-tech machinery is only half the secret — the heart of Mnyovu's is our passionate, dedicated team. From the moment you walk through our doors at 34 Macintyre Street or drop us a WhatsApp, you are greeted with respect, friendliness, and total attention to detail.
              </p>
            </div>

            {/* Workers Values */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0b1a38]">
                    Personal Inspection & Consultation
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Our team inspects every seam, suede nap, and scuff before touching a shoe. We consult with you on the right treatment — whether a gentle foam scrub, Arbiter respray, or deep Carvella recolor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0b1a38]">
                    Proud, Professional & Uniformed Artisans
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Our staff wear protective nitrile gloves and clean uniforms to maintain laboratory-level hygiene. We take immense pride in seeing our clients smile when they collect their transformed kicks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0b1a38] flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0b1a38]">
                    Fast Communication & Updates
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We keep you updated on WhatsApp at 060 399 1998, answering questions immediately and notifying you the second your pairs are dried, polished, and ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick booking CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsAppBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                <span>Chat with the Team on WhatsApp</span>
              </a>

              <a
                href={directCallUrl}
                className="py-3 px-4 rounded-xl bg-[#0b1a38] hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call 060 399 1998</span>
              </a>
            </div>

          </div>

          {/* Team Photo (Right on large - 6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div 
              onClick={() => setActivePhotoModal('team')}
              className="group relative rounded-3xl overflow-hidden border-2 border-slate-300 bg-slate-900 shadow-xl cursor-pointer hover:shadow-2xl transition duration-300"
            >
              <img
                src={BUSINESS_INFO.images.team}
                alt="Dedicated Workers at Mnyovu's Sneaker Wash & Shoe Care"
                className="w-full h-[380px] sm:h-[440px] object-cover object-top group-hover:scale-102 transition duration-500"
              />

              {/* Overlay gradient & badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-between p-5">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow">
                    Passionate Craftspeople
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Friendly • Skilled • Dedicated
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                    The Friendly Faces Behind "Manje Clean"
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                    Ready to welcome you at 34 Macintyre Street with top-tier service and honest shoe care advice.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
              <span>(Tap image to view our workshop team full-size)</span>
            </p>
          </div>

        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {activePhotoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActivePhotoModal(null)}
        >
          <div 
            className="relative max-w-3xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 bg-[#0b1a38] text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="font-extrabold text-sm">
                  {activePhotoModal === 'machine' 
                    ? "Mnyovu's 2-in-1 Sneaker Washing Machine & Dryer" 
                    : "Mnyovu's Dedicated Workshop Artisans"}
                </span>
              </div>
              <button
                onClick={() => setActivePhotoModal(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image */}
            <div className="p-2 sm:p-4 flex items-center justify-center bg-slate-950 max-h-[75vh] overflow-hidden">
              <img
                src={activePhotoModal === 'machine' ? BUSINESS_INFO.images.machine : BUSINESS_INFO.images.team}
                alt="Enlarged view"
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Bottom bar */}
            <div className="p-3.5 bg-[#0b1a38] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 border-t border-slate-800">
              <span>34 Macintyre Street, Jeppestown • 060 399 1998</span>
              <div className="flex items-center gap-2">
                <a
                  href={whatsAppBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#25D366] text-slate-950 font-black flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
