import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Paintbrush, 
  Palette, 
  Wrench, 
  Check, 
  Phone, 
  MessageCircle, 
  Plus, 
  Clock, 
  Tag, 
  ChevronRight,
  Info
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO, createWhatsAppBookingUrl, createDirectCallUrl } from '../data/services';
import { ServiceItem } from '../types';

interface PriceListProps {
  onSelectServiceForCalculator: (serviceId: string) => void;
}

export const PriceList: React.FC<PriceListProps> = ({ 
  onSelectServiceForCalculator 
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'wash' | 'leather' | 'respray' | 'restoration'>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('carvella-respray');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-sky-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Paintbrush':
        return <Paintbrush className="w-6 h-6 text-red-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-purple-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header matching poster style */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-black tracking-widest uppercase">
            Quality Clean • Fresh Look
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1a38] tracking-tight">
            PRICE LIST
          </h2>
          
          {/* Red banner pill from poster */}
          <div className="pt-1">
            <div className="inline-block bg-[#b91c1c] text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest px-6 py-1.5 rounded-full shadow-md">
              Professional Care For Your Sneakers
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto pt-2">
            Transparent pricing with no hidden charges. All bookings are confirmed directly via our booking line at <strong className="text-[#0b1a38] font-bold">060 399 1998</strong>.
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#0b1a38] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Services ({SERVICES.length})
          </button>
          <button
            onClick={() => setActiveCategory('wash')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'wash'
                ? 'bg-[#0b1a38] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Sneaker Wash (R80)
          </button>
          <button
            onClick={() => setActiveCategory('leather')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'leather'
                ? 'bg-[#0b1a38] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Shoe Polish (R80)
          </button>
          <button
            onClick={() => setActiveCategory('respray')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'respray'
                ? 'bg-[#0b1a38] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Arbiter & Carvella Respray
          </button>
          <button
            onClick={() => setActiveCategory('restoration')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'restoration'
                ? 'bg-[#0b1a38] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Dye & Restoration (R250)
          </button>
        </div>

        {/* Services Cards List (Styled mirroring the official poster) */}
        <div className="space-y-4">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            const singleWhatsAppUrl = createWhatsAppBookingUrl({
              serviceNames: [`${service.name} (${service.priceDisplay})`],
              totalPrice: service.price,
            });

            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl border-2 transition-all duration-200 overflow-hidden shadow-sm hover:shadow-lg ${
                  service.popular 
                    ? 'border-red-600/60 ring-2 ring-red-600/10' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Main Card Header / Bar */}
                <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  {/* Left: Icon & Titles */}
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Circle Icon Badge */}
                    <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-[#0b1a38] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-black text-[#0b1a38] tracking-tight">
                          {service.name}
                        </h3>
                        {service.popular && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                            Customer Favorite
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-slate-600">
                        {service.tagline}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-slate-500 pt-0.5">
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-sky-600" />
                          {service.turnaround}
                        </span>
                        <span>•</span>
                        <span className="text-emerald-600 font-bold">
                          Jeppestown Workshop
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Signature Poster Price Badge & Quick CTA */}
                  <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    
                    {/* Price Tag styled like the poster cut-out */}
                    <div className="relative flex items-center">
                      <div className="relative overflow-hidden flex items-center bg-[#0b1a38] text-white px-5 sm:px-6 py-2.5 rounded-xl shadow-md">
                        {/* Red angled accent strip mirroring poster */}
                        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#b91c1c]"></div>
                        <span className="text-2xl sm:text-3xl font-black tracking-tight pl-2">
                          {service.priceDisplay}
                        </span>
                      </div>
                    </div>

                    {/* Booking CTAs */}
                    <div className="flex items-center gap-2">
                      <a
                        href={singleWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-extrabold text-xs sm:text-sm flex items-center gap-1.5 shadow transition"
                        title="Book this on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                        <span className="hidden sm:inline">Book via</span> WhatsApp
                      </a>

                      <button
                        onClick={() => onSelectServiceForCalculator(service.id)}
                        className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                        title="Add to multi-pair price estimator"
                      >
                        <Plus className="w-4 h-4 text-slate-700" />
                        <span className="hidden sm:inline">Add</span>
                      </button>

                      <button
                        onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                        className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                        aria-label="Toggle details"
                      >
                        <ChevronRight className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                    </div>

                  </div>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/70">
                    <div className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                      {service.description}
                    </div>

                    <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 mb-3">
                      <div className="text-xs font-black uppercase tracking-wider text-[#0b1a38] mb-2 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>What's Included In This Service:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {service.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Direct Call / Booking Bar inside detail */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                      <span className="text-slate-500 font-medium">
                        Need drop-off today? Drop by <strong className="text-slate-700">34 Macintyre St</strong>
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${BUSINESS_INFO.phone}`}
                          className="font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call 060 399 1998</span>
                        </a>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Pillars from Poster */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-sm text-[#0b1a38] uppercase">
                AFFORDABLE PRICES
              </div>
              <div className="text-xs text-slate-500">
                Starting from only R80 with unmatched quality
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0b1a38] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-800" />
            </div>
            <div>
              <div className="font-black text-sm text-[#0b1a38] uppercase">
                PREMIUM QUALITY
              </div>
              <div className="text-xs text-slate-500">
                Hand-finished & conditioned by shoe artisans
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-sm text-[#0b1a38] uppercase">
                FAST & RELIABLE
              </div>
              <div className="text-xs text-slate-500">
                Prompt turnaround so your shoes are ready on time
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
