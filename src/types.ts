type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: string;
  location: Location;
}

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Offer = {
  id: number;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}

export type Review = {
  id: number;
  date: string;
  user: User;
  comment: string;
  rating: number;
}
