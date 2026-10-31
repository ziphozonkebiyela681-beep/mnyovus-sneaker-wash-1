import { ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: "Mnyovu's Sneaker Wash & Shoe Care",
  shortName: "Mnyovu's",
  slogan: "WE'VE GOT YOU COVERED, MANJE CLEAN !!",
  tagline: "Quality Clean. Fresh Look. Professional Care For Your Sneakers.",
  established: "2026",
  phone: "0603991998",
  phoneDisplay: "060 399 1998",
  whatsappInternational: "27603991998",
  address: "34 Macintyre Street, Jeppestown, Johannesburg",
  city: "Johannesburg",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=34+Macintyre+Street+Jeppestown+Johannesburg",
  instagram: "@mnyovus_sneakerwash",
  instagramUrl: "https://www.instagram.com/mnyovus_sneakerwash",
  tiktok: "@mnyovu.sneaker.was",
  tiktokUrl: "https://www.tiktok.com/@mnyovu.sneaker.was",
  founderSocials: {
    name: "Mnyovu Ngubane",
    instagram: "@mnyovu_ngubane",
    instagramUrl: "https://www.instagram.com/mnyovu_ngubane",
    tiktok: "@mnyovu_uyatinyela",
    tiktokUrl: "https://www.tiktok.com/@mnyovu_uyatinyela",
  },
  hours: {
    weekdays: "08:00 - 18:00",
    saturdays: "08:30 - 17:00",
    sundays: "09:00 - 15:00 (Drop-off & collections)",
  },
  images: {
    logo: "/assets/aistudio/logo_610336d1.jpeg",
    poster: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.52.06_AM_234d50ae.jpeg",
    machine: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.49.27_AM_f6819fe1.jpeg",
    team: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.49.27_AM__1__944169a7.jpeg",
    founderDesk: "/assets/aistudio/mnyovu_workplace_5d1cfc48.jpeg",
    founderCraft: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.49.27_AM__2__8eff82f2.jpeg",
    beforeShoe: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.49.28_AM_da457296.jpeg",
    afterShoe: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.49.28_AM__1__4b57ff25.jpeg",
    shopFront: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.49.27_AM__3__5660168a.jpeg",
    dropOffTable: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.49.28_AM__2__71e6d2c6.jpeg",
    glowingSign: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.49.28_AM__4__16a7cea6.jpeg",
    hamper: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.49.26_AM_46817ba6.jpeg",
  }
};

export const HAMPER_PRODUCT = {
  id: 'cleaning-hamper',
  name: "Mnyovu's Shoe Care & Chemical Hamper",
  price: 1450,
  priceDisplay: "R1,450.00",
  tagline: "The exact professional chemicals & tools that give Mnyovu's shoes that extra clean look",
  description: "Take the secret behind Mnyovu's pristine finishes home. Packed with our proprietary professional cleaning chemical formulation, foaming applicator, conditioning lotion, horsehair brush, plush microfiber towels, and sneaker deodorizer in a durable carry hamper.",
  image: "/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.49.26_AM_46817ba6.jpeg",
  includes: [
    "Mnyovu's Signature Blue Concentrated Cleaning Formulation (Bulk)",
    "Mnyovu's Precision Foaming Trigger Spray Bottle with Logo",
    "Mnyovu's Leather & Fabric Conditioning Dispenser Bottle",
    "Handcrafted Solid Wooden Horsehair Cleaning Brush",
    "2x Ultra-Plush Microfiber Detailing & Drying Towels (Blue & Grey)",
    "Contoured Foam Scrub Sponges for Soles and Grooves",
    "Shoe Deodorizing & Antibacterial Fresh Scent Canister",
    "Heavy-Duty Transparent Carry Hamper with Handles & Logo Seal"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'basic-sneaker-wash',
    name: 'BASIC SNEAKER WASH',
    tagline: 'Deep clean, laces & fresh finish',
    price: 80,
    priceDisplay: 'R80',
    category: 'wash',
    iconName: 'Sparkles',
    popular: true,
    turnaround: '24 - 48 Hours',
    description: 'Our signature thorough scrub removing dirt, grime, and mud from the uppers, soles, and insoles of your everyday and premium kicks.',
    includes: [
      'Deep exterior foam wash (uppers & mesh)',
      'Sole and midsole dirt scrubbing',
      'Laces removed, soaked & sanitized',
      'Inner lining freshening & deodorizing mist',
      'Protective fresh finish drying'
    ]
  },
  {
    id: 'basic-shoe-cleaning',
    name: 'BASIC SHOE CLEANING (POLISH)',
    tagline: 'Polish & shine for a fresh look',
    price: 80,
    priceDisplay: 'R80',
    category: 'leather',
    iconName: 'ShieldCheck',
    turnaround: '24 Hours / Same Day',
    description: 'Tailored for formal, leather, and casual dress shoes. We condition the leather, treat dry areas, and buff up an authentic high-gloss shine.',
    includes: [
      'Dust, mud & old wax strip-down',
      'Deep leather conditioning balm',
      'Premium matching cream / wax polish',
      'High-gloss buffing & edge dressing',
      'Moisture barrier protection'
    ]
  },
  {
    id: 'arbiter',
    name: 'ARBITER',
    tagline: 'Professional respray & refinishing',
    price: 120,
    priceDisplay: 'R120',
    category: 'respray',
    iconName: 'Paintbrush',
    turnaround: '24 - 48 Hours',
    description: 'Expert refinishing and color restoration specifically for Arbiter style footwear and panels, smoothing out scuffs and restoring rich tones.',
    includes: [
      'Pre-cleaning & deglazing preparation',
      'Surface scuff smoothing & prep',
      'Professional color-matched respray coating',
      'Uniform smooth matte/satin finish',
      'Anti-crack sealing layer'
    ]
  },
  {
    id: 'carvella-respray',
    name: 'CARVELLA (RESPRAY)',
    tagline: 'Premium respray & color refresh',
    price: 180,
    priceDisplay: 'R180',
    category: 'respray',
    iconName: 'Palette',
    popular: true,
    turnaround: '48 Hours',
    description: 'Specialized treatment for iconic Carvella moccasins and Italian luxury slip-ons. Restores rich deep color, removes fading, and conditions the leather.',
    includes: [
      'Delicate leather prep & degreasing',
      'Precision color-match pigment matching',
      'Multi-coat even respray application',
      'Leather nourishment to maintain soft touch',
      'Protective water & stain repellent shield'
    ]
  },
  {
    id: 'dye-restoration',
    name: 'DYE & RESTORATION',
    tagline: 'Full color change & restoration',
    price: 250,
    priceDisplay: 'R250',
    category: 'restoration',
    iconName: 'Wrench',
    turnaround: '2 - 3 Days',
    description: 'The ultimate rejuvenation package: whether you want a full color makeover, revive severely faded suede, or restore weathered heritage pairs.',
    includes: [
      'Deep chemical stripping & prep',
      'Complete color change or deep recoloring',
      'Suede nap resetting & fiber revival',
      'Midsole deoxidation & edge correction',
      'Factory-grade bonding & protective sealant'
    ]
  }
];

export function createWhatsAppBookingUrl(params: {
  serviceNames?: string[];
  totalPrice?: number;
  customerName?: string;
  notes?: string;
  serviceType?: string;
  date?: string;
}): string {
  const greeting = "Hi Mnyovu's Sneaker Wash & Shoe Care!";
  const parts: string[] = [greeting];

  if (params.customerName) {
    parts.push(`My name is *${params.customerName}*.`);
  }

  if (params.serviceNames && params.serviceNames.length > 0) {
    parts.push(`I would like to book the following service(s):`);
    params.serviceNames.forEach((s) => parts.push(`• ${s}`));
  } else {
    parts.push(`I'd like to inquire about booking sneaker/shoe care.`);
  }

  if (params.totalPrice && params.totalPrice > 0) {
    parts.push(`*Estimated Total: R${params.totalPrice}*`);
  }

  if (params.serviceType) {
    const typeLabel =
      params.serviceType === 'walkin'
        ? 'Walk-in visit'
        : params.serviceType === 'dropoff'
        ? 'Drop-off at 34 Macintyre St'
        : 'Drop-off / Pick-up inquiry';
    parts.push(`Booking preference: ${typeLabel}`);
  }

  if (params.date) {
    parts.push(`Preferred date: ${params.date}`);
  }

  if (params.notes) {
    parts.push(`Shoe details / Notes: "${params.notes}"`);
  }

  parts.push("Please confirm availability and drop-off time. Manje Clean! 👟✨");

  const fullText = parts.join('\n');
  return `https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=${encodeURIComponent(fullText)}`;
}

export function createDirectCallUrl(): string {
  return `tel:${BUSINESS_INFO.phone}`;
}
