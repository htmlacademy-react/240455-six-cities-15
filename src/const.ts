import { generateOffer, Offer } from './mock/offers';

export const Setting = {
  OffersCount: 312,
} as const;

const OFFERS_COUNT = 5 as const;

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const TITLES = [
  'Loft Studio in the Central Area',
  'The house among olive',
  'Penthouse, 4-5 rooms + 5 balconies',
  'House in countryside',
  'Waterfront with extraordinary view',
  'Tile House',
  'Amazing and Extremely Central Flat',
  'Perfectly located Castro',
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

export const offers: Array<Offer> = Array.from({ length: OFFERS_COUNT }, () => generateOffer());
