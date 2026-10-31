import React, { useState } from 'react';
import { 
  Calculator, 
  Plus, 
  Minus, 
  Trash2, 
  MessageCircle, 
  Phone, 
  Copy, 
  Check, 
  Sparkles, 
  Calendar, 
  User, 
  FileText,
  MapPin
} from 'lucide-react';
import { SERVICES, HAMPER_PRODUCT, BUSINESS_INFO, createWhatsAppBookingUrl, createDirectCallUrl } from '../data/services';
import { CartItem, BookingFormData } from '../types';

interface PriceCalculatorProps {
  initialServiceId?: string | null;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ initialServiceId }) => {
  // Quantities for each service
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    SERVICES.forEach(s => {
      initial[s.id] = s.id === (initialServiceId || 'basic-sneaker-wash') ? 1 : 0;
    });
    return initial;
  });

  const [hamperQty, setHamperQty] = useState<number>(() => {
    return initialServiceId === 'cleaning-hamper' ? 1 : 0;
  });

  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    customerPhone: '',
    shoeTypeNotes: '',
    serviceType: 'dropoff',
    preferredDate: '',
  });

  const [copied, setCopied] = useState(false);

  // Update quantity
  const handleQuantityChange = (serviceId: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[serviceId] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [serviceId]: next };
    });
  };

  const handleReset = () => {
    const resetObj: Record<string, number> = {};
    SERVICES.forEach(s => {
      resetObj[s.id] = 0;
    });
    setQuantities(resetObj);
    setHamperQty(0);
  };

  // Selected items calculation
  const selectedItems = SERVICES.filter(s => (quantities[s.id] || 0) > 0);
  const totalPairs = Object.values(quantities).reduce((acc, qty) => acc + qty, 0);
  
  const totalPrice = SERVICES.reduce((acc, s) => {
    return acc + (quantities[s.id] || 0) * s.price;
  }, 0) + (hamperQty * HAMPER_PRODUCT.price);

  // Build service summary strings
  const serviceSummaryList = [
    ...selectedItems.map(s => `${quantities[s.id]}x ${s.name} (R${quantities[s.id] * s.price})`),
    ...(hamperQty > 0 ? [`${hamperQty}x ${HAMPER_PRODUCT.name} (R${hamperQty * HAMPER_PRODUCT.price})`] : [])
  ];

  const whatsAppUrl = createWhatsAppBookingUrl({
    serviceNames: serviceSummaryList.length > 0 ? serviceSummaryList : undefined,
    totalPrice: totalPrice > 0 ? totalPrice : undefined,
    customerName: formData.customerName.trim() || undefined,
    notes: formData.shoeTypeNotes.trim() || undefined,
    serviceType: formData.serviceType,
    date: formData.preferredDate || undefined,
  });

  const directCallUrl = createDirectCallUrl();

  const handleCopySummary = () => {
    const textLines = [
      `*Mnyovu's Shoe Care & Sneaker Wash Booking*`,
      formData.customerName ? `Name: ${formData.customerName}` : null,
      `Items (${totalPairs} pairs):`,
      ...serviceSummaryList.map(s => `• ${s}`),
      `Total: R${totalPrice}`,
      formData.shoeTypeNotes ? `Notes: ${formData.shoeTypeNotes}` : null,
      `Location: 34 Macintyre St, Jeppestown`,
      `Booking Line: 0603991998`
    ].filter(Boolean);

    navigator.clipboard.writeText(textLines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="calculator" className="py-14 sm:py-20 bg-white relative border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black tracking-widest uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Price Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a38] tracking-tight">
            Calculate Your Total & Book Instantly
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Select your shoes and services below. Then tap to send your custom booking directly to <strong className="text-[#0b1a38]">060 399 1998</strong> on WhatsApp or give us a quick call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Picker (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                1. Select Services & Pairs
              </span>
              {totalPairs > 0 && (
                <button
                  onClick={handleReset}
                  className="text-xs text-red-600 hover:text-red-700 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            <div className="space-y-3">
              {SERVICES.map(service => {
                const qty = quantities[service.id] || 0;
                return (
                  <div
                    key={service.id}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      qty > 0 
                        ? 'border-[#0b1a38] bg-sky-50/50 shadow-sm' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm sm:text-base text-[#0b1a38] truncate">
                          {service.name}
                        </span>
                        <span className="text-xs font-black text-red-600 shrink-0">
                          {service.priceDisplay}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Stepper Buttons */}
                    <div className="flex items-center gap-1.5 shrink-0 bg-slate-100 p-1 rounded-lg border border-slate-200">
                      <button
                        onClick={() => handleQuantityChange(service.id, -1)}
                        disabled={qty === 0}
                        className={`w-7 h-7 rounded-md flex items-center justify-center font-bold text-slate-700 transition ${
                          qty === 0 
                            ? 'opacity-40 cursor-not-allowed' 
                            : 'hover:bg-white hover:shadow-xs active:bg-slate-200 cursor-pointer'
                        }`}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="w-7 text-center font-extrabold text-sm text-[#0b1a38]">
                        {qty}
                      </span>

                      <button
                        onClick={() => handleQuantityChange(service.id, 1)}
                        className="w-7 h-7 rounded-md bg-white hover:bg-slate-50 text-[#0b1a38] flex items-center justify-center font-bold shadow-xs active:bg-slate-200 transition cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Official Signature Cleaning Hamper Row */}
              <div
                className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${
                  hamperQty > 0 
                    ? 'border-red-600 bg-red-50/40 shadow-sm' 
                    : 'border-slate-300 hover:border-slate-400 bg-slate-50/60'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-extrabold text-sm sm:text-base text-[#0b1a38] truncate">
                      {HAMPER_PRODUCT.name}
                    </span>
                    <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-red-600 text-white">
                      Workshop Formula
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 truncate mt-0.5">
                    Bulk cleaning chemical, foaming spray, lotion, wooden brush & towels
                  </p>
                  <span className="text-xs font-black text-red-600 mt-0.5 block">
                    {HAMPER_PRODUCT.priceDisplay}
                  </span>
                </div>

                {/* Stepper Buttons for Hamper */}
                <div className="flex items-center gap-1.5 shrink-0 bg-slate-200/80 p-1 rounded-lg border border-slate-300">
                  <button
                    onClick={() => setHamperQty(prev => Math.max(0, prev - 1))}
                    disabled={hamperQty === 0}
                    className={`w-7 h-7 rounded-md flex items-center justify-center font-bold text-slate-700 transition ${
                      hamperQty === 0 
                        ? 'opacity-40 cursor-not-allowed' 
                        : 'hover:bg-white hover:shadow-xs active:bg-slate-300 cursor-pointer'
                    }`}
                    aria-label="Decrease hamper quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>

                  <span className="w-7 text-center font-extrabold text-sm text-[#0b1a38]">
                    {hamperQty}
                  </span>

                  <button
                    onClick={() => setHamperQty(prev => prev + 1)}
                    className="w-7 h-7 rounded-md bg-white hover:bg-slate-50 text-[#0b1a38] flex items-center justify-center font-bold shadow-xs active:bg-slate-300 transition cursor-pointer"
                    aria-label="Increase hamper quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Optional Customer Details for the message */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                2. Optional Details (Pre-fills WhatsApp)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Sipho / Thabo"
                      value={formData.customerName}
                      onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b1a38]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Drop-off / Visit Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={e => setFormData({ ...formData, serviceType: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b1a38] bg-white"
                  >
                    <option value="dropoff">Drop-off at 34 Macintyre St</option>
                    <option value="walkin">Walk-in visit</option>
                    <option value="pickup_inquiry">Inquire about pick-up</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Sneaker Brand / Color / Notes
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="e.g. White Nike Air Force 1s, Black Carvella loafers"
                    value={formData.shoeTypeNotes}
                    onChange={e => setFormData({ ...formData, shoeTypeNotes: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b1a38]"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary & Instant Booking (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-[#0b1a38] text-white rounded-3xl p-6 shadow-2xl border-2 border-red-600/40 space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div>
                  <h3 className="font-black text-lg tracking-tight">Booking Summary</h3>
                  <p className="text-xs text-sky-300">
                    Mnyovu's Shoe Care • Jeppestown
                  </p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-600/80 text-white">
                  {totalPairs} {totalPairs === 1 ? 'Pair' : 'Pairs'}
                </span>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-2.5 min-h-[100px] max-h-60 overflow-y-auto pr-1">
                {selectedItems.length === 0 && hamperQty === 0 ? (
                  <div className="py-6 text-center text-slate-400 text-xs sm:text-sm">
                    <Sparkles className="w-6 h-6 text-sky-400/50 mx-auto mb-2 animate-pulse" />
                    <p>No services or hampers selected yet.</p>
                    <p className="text-slate-500 text-xs mt-1">
                      Choose items from the list to calculate your estimate.
                    </p>
                  </div>
                ) : (
                  <>
                    {selectedItems.map(item => {
                      const count = quantities[item.id];
                      const subtotal = count * item.price;
                      return (
                        <div key={item.id} className="flex justify-between items-center text-xs sm:text-sm py-1 border-b border-slate-800">
                          <span className="text-slate-200">
                            {count}x {item.name}
                          </span>
                          <span className="font-extrabold text-white">
                            R{subtotal}
                          </span>
                        </div>
                      );
                    })}

                    {hamperQty > 0 && (
                      <div className="flex justify-between items-center text-xs sm:text-sm py-1 border-b border-slate-800 text-sky-300">
                        <span className="font-semibold">
                          {hamperQty}x Cleaning Chemical Hamper
                        </span>
                        <span className="font-extrabold text-white">
                          R{hamperQty * HAMPER_PRODUCT.price}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Total Calculation */}
              <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider block">
                    Estimated Total
                  </span>
                  <span className="text-[11px] text-emerald-400">
                    Pay on drop-off or collection
                  </span>
                </div>
                <div className="text-3xl font-black text-white">
                  R{totalPrice}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-2">
                {/* Send via WhatsApp */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition transform active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-[#25D366]" />
                  <span>Book via WhatsApp (060 399 1998)</span>
                </a>

                {/* Call directly */}
                <a
                  href={directCallUrl}
                  className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Book: {BUSINESS_INFO.phoneDisplay}</span>
                </a>

                {/* Copy summary */}
                {selectedItems.length > 0 && (
                  <button
                    onClick={handleCopySummary}
                    className="w-full py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-300 font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Summary Text</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Location micro card */}
              <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                <span>34 Macintyre Street, Jeppestown, Johannesburg</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
