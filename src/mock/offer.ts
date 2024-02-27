import { CITIES, TITLES, TYPES, DESCRIPTION, GOODS } from '../const.ts';
import { getRandomArrayElement, createIdGenerator, getRandomInteger } from '../utils/common.ts';

const generateOfferId = createIdGenerator();

function generateOffer() {

  return {
    id: generateOfferId(),
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

export { generateOffer };
