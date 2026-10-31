export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  price: number;
  priceDisplay: string;
  category: 'wash' | 'leather' | 'respray' | 'restoration';
  iconName: string;
  description: string;
  turnaround: string;
  includes: string[];
  popular?: boolean;
}

export interface CartItem {
  serviceId: string;
  quantity: number;
  notes?: string;
}

export type PageId = 'prices' | 'results' | 'hamper' | 'workshop' | 'founder' | 'location';

export interface BookingFormData {
  customerName: string;
  customerPhone: string;
  shoeTypeNotes: string;
  serviceType: 'dropoff' | 'walkin' | 'pickup_inquiry';
  preferredDate: string;
}
