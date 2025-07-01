// src/types/index.ts

export interface User {
  id: string;
  email: string;
  name: string;
  preferences: UserPreferences;
  location?: Location;
}

export interface UserPreferences {
  interests: string[];
  eventTypes: EventType[];
  timePreferences: TimePreference[];
  maxDistance: number;
  priceRange: PriceRange;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventType;
  startTime: Date;
  endTime: Date;
  location: Location;
  price: number;
  imageUrl?: string;
  organizer: string;
  attendeeCount: number;
  tags: string[];
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export type EventType = 
  | 'music'
  | 'food'
  | 'art'
  | 'sports'
  | 'tech'
  | 'networking'
  | 'outdoor'
  | 'workshop'
  | 'community';

export type TimePreference = 
  | 'morning'
  | 'afternoon'
  | 'evening'
  | 'weekend'
  | 'weekday';

export interface PriceRange {
  min: number;
  max: number;
}

export interface Recommendation {
  event: Event;
  score: number;
  reasons: string[];
}