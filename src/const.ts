import { OfferType, ReviewType } from './types.ts';
import { generateOffer } from './mock/offer.ts';
import { generateReview } from './mock/review';

export const Setting = {
  OffersCount: 312,
} as const;

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer/:id',
  Root = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum OffersCounts {
  OffersCount = 5,
  OffersNearCount = 3,
}

export const REVIEWS_COUNT = 3 as const;

export const STARS_COUNT = 5 as const;

export const SORTING = [
  {
    name: 'Popular',
    isActive: true
  },
  {
    name: 'Price: low to high',
    isActive: false
  },
  {
    name: 'Price: high to low',
    isActive: false
  },
  {
    name: 'Top rated first',
    isActive: false
  },
];

export type Sorting = {
  name: string;
  isActive: boolean;
};

export const CITIES = [
  {
    name: 'Paris',
    isActive: false
  },
  {
    name: 'Cologne',
    isActive: false
  },
  {
    name: 'Brussels',
    isActive: false
  },
  {
    name: 'Amsterdam',
    isActive: true
  },
  {
    name: 'Hamburg',
    isActive: false
  },
  {
    name: 'Dusseldorf',
    isActive: false
  }
];

export type City = {
  name: string;
  isActive: boolean;
};

export const TITLES = [
  'Loft Studio in the Central Area',
  'The house among olive',
  'Penthouse, 4-5 rooms + 5 balconies',
  'House in countryside',
  'Waterfront with extraordinary view',
  'Tile House',
  'Amazing and Extremely Central Flat',
  'Perfectly located Castro',
  'Beautiful & luxurious apartment at great location',
] as const;

export const TYPES = [
  'apartment',
  'room',
  'hotel',
  'house',
] as const;

export const DESCRIPTION = [
  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'The building is green and from 18th century.',
  'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
] as const;

export const GOODS = [
  'Wi-Fi',
  'Heating',
  'Kitchen',
  'Fridge',
  'Washing machine',
  'Coffee machine',
  'Towels',
  'Baby seat',
  'Cabel TV',
] as const;

export const offers: Array<OfferType> = Array.from({ length: OffersCounts.OffersCount }, () => generateOffer());
export const offersNear: Array<OfferType> = Array.from({ length: OffersCounts.OffersNearCount }, () => generateOffer());
export const favorites: Array<OfferType> = offers.filter((offer) => offer.isFavorite);
export const favoriteCount: number = favorites.length;
export const reviews: Array<ReviewType> = Array.from({ length: REVIEWS_COUNT }, () => generateReview());
