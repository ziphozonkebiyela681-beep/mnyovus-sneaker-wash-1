import React, { useState } from 'react';
import { 
  Sparkles, 
  Crown, 
  Quote, 
  Phone, 
  MessageCircle, 
  Award, 
  CheckCircle2, 
  ZoomIn, 
  X, 
  HeartHandshake,
  Layers,
  MapPin
} from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppBookingUrl, createDirectCallUrl } from '../data/services';

export const FounderSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const directCallUrl = createDirectCallUrl();
  const whatsAppFounderUrl = createWhatsAppBookingUrl({
    notes: "Hi Mnyovu! I saw you and your shop on the website and want to bring my pairs to 34 Macintyre St."
  });

  return (
    <section id="founder" className="py-14 sm:py-20 bg-[#071126] text-white relative overflow-hidden border-t-2 border-red-600/50">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header Badge */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-black tracking-widest uppercase shadow-inner">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Meet The Man Behind The Magic</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Mnyovu — Dedicated Leader & Visionary
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The driving force behind Johannesburg's premier sneaker wash and shoe care destination. Driven by passion, perfectionism, and community pride.
          </p>
        </div>

        {/* Main Grid: Story & Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Photos Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Photo 1: Mnyovu at the shop counter with organized shelves */}
            <div
              onClick={() => setSelectedPhoto(BUSINESS_INFO.images.founderDesk)}
              className="group relative rounded-3xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-xl cursor-pointer hover:border-red-500 transition duration-300 h-80 sm:h-96"
            >
              <img
                src={BUSINESS_INFO.images.founderDesk}
                alt="Mnyovu at the counter with shelves of cleaned sneakers at 34 Macintyre Street"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-between p-4">
                <span className="self-start text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-600 text-white shadow">
                  Workshop Floor
                </span>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-300">
                      Command Center
                    </span>
                    <ZoomIn className="w-4 h-4 text-white opacity-80 group-hover:opacity-100" />
                  </div>
                  <p className="text-xs font-extrabold text-white mt-0.5">
                    Mnyovu welcoming clients with shelves of freshly boxed kicks
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 2: Mnyovu proudly holding restored pair in front of machine */}
            <div
              onClick={() => setSelectedPhoto(BUSINESS_INFO.images.founderCraft)}
              className="group relative rounded-3xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-xl cursor-pointer hover:border-sky-400 transition duration-300 h-80 sm:h-96"
            >
              <img
                src={BUSINESS_INFO.images.founderCraft}
                alt="Mnyovu holding restored boots by the 2-in-1 sneaker washing machine"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-between p-4">
                <span className="self-start text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-500 text-slate-950 shadow">
                  Master Restoration
                </span>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400">
                      Craft & Passion
                    </span>
                    <ZoomIn className="w-4 h-4 text-white opacity-80 group-hover:opacity-100" />
                  </div>
                  <p className="text-xs font-extrabold text-white mt-0.5">
                    Hands-on excellence with restored footwear & machinery
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-1">
              <span>(Tap either image to enlarge and inspect Mnyovu's shop)</span>
            </div>

          </div>

          {/* Right Column: Leadership Bio & Vision (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quote Card */}
            <div className="relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900/90 to-[#0b1a38] border border-slate-700/80 shadow-2xl">
              <Quote className="w-8 h-8 text-red-500/40 absolute top-4 right-4" />
              <p className="text-sm sm:text-base text-slate-200 italic font-medium leading-relaxed pr-6">
                "We don't just wash shoes; we restore confidence. When you step out in clean, fresh kicks, your entire day feels different. That is why we treat every client like family and every shoe with the utmost respect."
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-red-500 overflow-hidden shrink-0">
                  <img
                    src={BUSINESS_INFO.images.logo}
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-white">Mnyovu</div>
                  <div className="text-[11px] text-sky-300">Founder & Master Restorer</div>
                </div>
              </div>
            </div>

            {/* Leadership Traits */}
            <div className="space-y-3.5">
              
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white">
                    A Visionary for Local Streetwear Culture
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Mnyovu envisioned more than an ordinary car-wash style shoe cleaner. He invested in industrial 2-in-1 machinery and professional techniques to create a high-standard, dependable sneaker hub right here in Jeppestown.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white">
                    Hands-On Daily Quality Control
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    You will frequently find Mnyovu right at the workshop counter—inspecting stitchings, mixing pigments for Carvella resprays, and mentoring his team to maintain top-tier consistency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white">
                    Unmatched Client Treatment & Respect
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Whether you are bringing in your school shoes for an R80 polish or rare collectors' sneakers for an R250 dye restoration, Mnyovu ensures you receive transparent communication, friendly advice, and reliable turnaround.
                  </p>
                </div>
              </div>

            </div>

            {/* Mnyovu Personal Socials */}
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                Connect Directly with Mnyovu & Follow the Journey
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={BUSINESS_INFO.founderSocials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-pink-950/40 hover:bg-pink-900/60 border border-pink-700/50 text-pink-300 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <span className="text-pink-400 font-black">IG</span>
                  <span>{BUSINESS_INFO.founderSocials.instagram} (Personal)</span>
                </a>

                <a
                  href={BUSINESS_INFO.founderSocials.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <span className="text-cyan-400 font-black">TT</span>
                  <span>{BUSINESS_INFO.founderSocials.tiktok} (Personal)</span>
                </a>

                <a
                  href={BUSINESS_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-sky-950/40 hover:bg-sky-900/60 border border-sky-700/50 text-sky-300 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <span className="text-sky-400 font-black">TT</span>
                  <span>{BUSINESS_INFO.tiktok} (Shop)</span>
                </a>
              </div>
            </div>

            {/* Direct Booking with Mnyovu */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsAppFounderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition transform active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                <span>Message Mnyovu on WhatsApp</span>
              </a>

              <a
                href={directCallUrl}
                className="py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call 060 399 1998</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal for Founder Photos */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-red-600/50"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 bg-[#0b1a38] text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="font-extrabold text-sm">
                  Mnyovu at 34 Macintyre Street, Jeppestown
                </span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 sm:p-4 flex items-center justify-center bg-slate-950 max-h-[75vh]">
              <img
                src={selectedPhoto}
                alt="Mnyovu full-size photo"
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="p-3.5 bg-[#0b1a38] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>34 Macintyre Street • Walk-Ins Welcome</span>
              </span>
              <a
                href={whatsAppFounderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#25D366] text-slate-950 font-black flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                <span>WhatsApp Mnyovu</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
