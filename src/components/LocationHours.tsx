import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Car, 
  Footprints, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  Instagram,
  Navigation,
  ZoomIn,
  X,
  PackageCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO, createDirectCallUrl, createWhatsAppBookingUrl } from '../data/services';

export const LocationHours: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; title: string; subtitle: string } | null>(null);

  const directCallUrl = createDirectCallUrl();
  const whatsAppDirectionsUrl = createWhatsAppBookingUrl({
    notes: "Hi! I'm on my way or planning to drop off my shoes at 34 Macintyre Street. Can you send me location pins or confirm you're open?"
  });

  return (
    <section id="location" className="py-14 sm:py-20 bg-slate-100 relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-black tracking-widest uppercase shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>34 Macintyre Street, Jeppestown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1a38] tracking-tight">
            Our Workshop & Drop-Off Station
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Come visit us in Jeppestown, Johannesburg. Look for our illuminated round sign and welcoming glass storefront. Walk-ins are always welcome, or drop off on the spot!
          </p>
        </div>

        {/* Real Storefront & Drop-Off Photo Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
          
          {/* Photo 1: Storefront Exterior - Uncut Vertical Framing (7 cols) */}
          <div
            onClick={() => setSelectedPhoto({
              url: BUSINESS_INFO.images.shopFront,
              title: "34 Macintyre Street Storefront",
              subtitle: "Full exterior view of Mnyovu's Sneaker Wash & Shoe Care with illuminated logo sign, glass facade, and staff."
            })}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden border-2 border-slate-300 bg-slate-900 shadow-xl cursor-pointer hover:border-red-600 transition duration-300 flex flex-col justify-between min-h-[520px] sm:min-h-[640px]"
          >
            {/* Full uncropped vertical image container */}
            <div className="w-full h-full min-h-[520px] sm:min-h-[640px] relative overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={BUSINESS_INFO.images.shopFront}
                alt="Full vertical view of Mnyovu's Sneaker Wash & Shoe Care workshop at 34 Macintyre Street, Jeppestown"
                className="w-full h-full object-cover object-top group-hover:scale-102 transition duration-500"
              />
            </div>
            
            {/* Top Badge & Zoom Indicator */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
              <span className="px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>Storefront • 34 Macintyre St</span>
              </span>
              <div className="w-9 h-9 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-red-600 transition shadow">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Info Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5 sm:p-6 pointer-events-none">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Spot The Illuminated Round Sign & Open Glass Doors</span>
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
                Mnyovu's Sneaker Wash & Shoe Care Entrance
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-snug">
                Paved courtyard parking right outside, with our friendly uniformed team member ready to welcome you at the door.
              </p>
            </div>
          </div>

          {/* Photo 2: Drop-Off Staging Table - Customer Volume Proof (5 cols) */}
          <div
            onClick={() => setSelectedPhoto({
              url: BUSINESS_INFO.images.dropOffTable,
              title: "Active Drop-Off Staging Station",
              subtitle: "Dozens of customer pairs dropped off daily for wash, polish, and respray."
            })}
            className="lg:col-span-5 group relative rounded-3xl overflow-hidden border-2 border-slate-300 bg-slate-900 shadow-xl cursor-pointer hover:border-sky-500 transition duration-300 flex flex-col justify-between min-h-[520px] sm:min-h-[640px]"
          >
            <div className="w-full h-full min-h-[520px] sm:min-h-[640px] relative overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={BUSINESS_INFO.images.dropOffTable}
                alt="Drop-off staging station outside the workshop with dozens of customer shoes queued for washing"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition duration-500"
              />
            </div>

            {/* Top Badge */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
              <span className="px-3 py-1.5 rounded-full bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <PackageCheck className="w-3.5 h-3.5" />
                <span>High Volume Trusted Hub</span>
              </span>
              <div className="w-9 h-9 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:text-slate-950 transition shadow">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Info Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5 sm:p-6 pointer-events-none">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Active Customer Drop-Offs</span>
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
                Dozens of Pairs Dropped Off Daily
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-snug">
                From leather boots and Air Max sneakers to everyday platform kicks—staged safely and logged for 2-in-1 wash.
              </p>
            </div>
          </div>

        </div>

        {/* Location & Operating Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Address & Directions (7 cols) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-red-600 block">
                    Our Physical Address
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0b1a38] mt-0.5">
                    34 Macintyre Street
                  </h3>
                  <p className="text-slate-600 font-semibold text-sm">
                    Jeppestown, Johannesburg, 2094
                  </p>
                </div>
              </div>

              {/* Service Features Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                    <Footprints className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#0b1a38] block">
                      Walk-Ins Welcome
                    </span>
                    <span className="text-[11px] text-slate-500">
                      No advance booking mandatory
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0b1a38] flex items-center justify-center shrink-0 font-bold">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#0b1a38] block">
                      Paved Drop-Off Parking
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Easy street parking & collection
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed bg-amber-50/80 p-3.5 rounded-xl border border-amber-200">
                <strong className="text-amber-900 block font-bold mb-0.5">How Drop-Off Works:</strong>
                Pull up to 34 Macintyre Street. Hand your pairs to our friendly uniformed staff at the entrance. We log each shoe, verify your preferred service (Wash, Polish, Arbiter, Carvella respray), and message you on WhatsApp at <strong className="text-amber-950 font-bold">060 399 1998</strong> as soon as your shoes are ready for pick-up!
              </div>

            </div>

            {/* Direction Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] py-3 px-4 rounded-xl bg-[#0b1a38] hover:bg-[#122b5e] text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={whatsAppDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                <span>Request Pin on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Card 2: Operating Hours with Glowing Lightbox Sign as Translucent Background (5 cols) */}
          <div 
            className="md:col-span-5 relative rounded-3xl overflow-hidden border-2 border-red-600/50 shadow-2xl flex flex-col justify-between"
            style={{
              backgroundImage: `url('${BUSINESS_INFO.images.glowingSign}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Translucent Dark Overlay letting the glowing sign shine through */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/75 to-slate-950/85 backdrop-blur-[2px]"></div>

            {/* Content inside with translucent glass panels */}
            <div className="relative z-10 p-6 sm:p-7 space-y-5 text-white flex flex-col justify-between h-full">
              
              <div className="space-y-4">
                {/* Header panel with translucent backdrop */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/65 backdrop-blur-md border border-white/10 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      Trading Hours
                    </h3>
                    <p className="text-xs text-sky-300 font-medium">
                      Always reachable on 060 399 1998
                    </p>
                  </div>
                </div>

                {/* Hours Schedule container with translucent frosted glass */}
                <div className="p-4 rounded-2xl bg-slate-900/65 backdrop-blur-md border border-white/10 space-y-2.5 text-xs sm:text-sm shadow-lg">
                  <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                    <span className="text-slate-300 font-medium">Monday - Friday</span>
                    <span className="font-extrabold text-white">{BUSINESS_INFO.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                    <span className="text-slate-300 font-medium">Saturday</span>
                    <span className="font-extrabold text-white">{BUSINESS_INFO.hours.saturdays}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-300 font-medium">Sunday & Holidays</span>
                    <span className="font-extrabold text-sky-300">09:00 - 15:00</span>
                  </div>
                </div>

                {/* Direct Booking Reminder with translucent crimson highlight */}
                <div className="bg-slate-900/75 backdrop-blur-md rounded-2xl p-4 border border-red-500/40 space-y-1.5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-extrabold text-red-400 tracking-wider">
                      Official Booking Line
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      Open & Active
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {BUSINESS_INFO.phoneDisplay}
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Call or WhatsApp anytime to book, notify us of your drop-off, or ask about turnaround times.
                  </p>
                </div>
              </div>

              {/* Contact buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={directCallUrl}
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 active:scale-98 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-red-950/50"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 060 399 1998 Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Follow {BUSINESS_INFO.instagram}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Zoom Modal for Storefront & Drop-off station */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-2xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 bg-[#0b1a38] text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="font-extrabold text-sm">{selectedPhoto.title}</span>
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
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="p-3.5 bg-[#0b1a38] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 border-t border-slate-800">
              <span className="text-slate-400">{selectedPhoto.subtitle}</span>
              <a
                href={whatsAppDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#25D366] text-slate-950 font-black flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                <span>WhatsApp for Directions</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
