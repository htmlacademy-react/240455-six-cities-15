import { AppRoute } from '../const';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let title = '';

  if (pathname === AppRoute.Root) {
    rootClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
    title = ': authorization';
  } else if (pathname === AppRoute.Favorites) {
    title = ': favorites';
  } else if (pathname === AppRoute.Offer) {
    title = ': offer';
  } else {
    title = ': page not found';
  }

  return {rootClassName, linkClassName, title};
};

//получение случайного элемента массива
function getRandomArrayElement<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

//создание счетчика
const createIdGenerator = () => {
  let lastGenerateId = 0;

  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

//получение случайного числа из диапазона
function getRandomInteger (min: number, max: number): number {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//написание слова с прописной буквы
function ucFirst(str: string):string {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

export { getRandomArrayElement, createIdGenerator, getRandomInteger, ucFirst, getLayoutState };
