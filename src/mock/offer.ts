import { CITIES } from '../const.ts';
import { getRandomArrayElement, createIdGenerator, getRandomInteger } from '../utils/common.ts';
import { TypeOffer } from '../types.ts';

const generateOfferId = createIdGenerator();

const TITLES = [
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

const TYPES = [
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

const GOODS = [
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

enum OffersCounts {
  OffersCount = 4,
}

function generateOffer() {
  return {
    id: generateOfferId().toString(),
    title: getRandomArrayElement<string>(TITLES),
    type: getRandomArrayElement<string>(TYPES),
    price: getRandomInteger(20, 500),
    previewImage: `https://15.design.htmlacademy.pro/static/hotel/${getRandomInteger(1, 20)}.jpg`,
    city: {
      name: getRandomArrayElement<string>(CITIES.map((city) => (city.name))),
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isPremium: Boolean(getRandomInteger(0, 1)),
    rating: 4.7,
    description: getRandomArrayElement<string>(DESCRIPTION),
    bedrooms: getRandomInteger(1, 3),
    goods: GOODS.slice(getRandomInteger (1, GOODS.length - 1)),
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/studio-photos.jpg',
    ],
    maxAdults: getRandomInteger(1, 4),
  };
}

export const offers: Array<TypeOffer> = Array.from({ length: OffersCounts.OffersCount }, () => generateOffer());
