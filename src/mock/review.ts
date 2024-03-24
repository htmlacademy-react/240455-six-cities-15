import { DESCRIPTION } from './offer.ts';
import { TypeReview } from '../types.ts';
import { getRandomArrayElement, createIdGenerator, getRandomInteger } from '../utils/common.ts';

const generateReviewId = createIdGenerator();

function generateReview() {

  return {
    id: generateReviewId(),
    date: 'April 2019',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: getRandomArrayElement<string>(DESCRIPTION),
    rating: getRandomInteger(1, 5),
  };
}

export const reviews: Array<TypeReview> = Array.from({ length: 3 }, () => generateReview());
