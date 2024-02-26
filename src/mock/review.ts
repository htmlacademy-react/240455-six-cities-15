import { DESCRIPTION } from '../const.ts';
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

export type Review = {
  id: number;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export { generateReview };
