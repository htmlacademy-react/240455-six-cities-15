type TypeLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type TypeCity = {
  name: string;
  location: TypeLocation;
}

type TypeUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TypeOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TypeCity;
  location: TypeLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: TypeUser;
  images: string[];
  maxAdults: number;
}

export type TypeOfferCard = Omit<TypeOffer, 'maxAdults' | 'images' | 'host' | 'goods' | 'bedrooms' | 'description'> & {
  previewImage: string;
};

export type TypeReview = {
  id: number;
  date: string;
  user: TypeUser;
  comment: string;
  rating: number;
}
