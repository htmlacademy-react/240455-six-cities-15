import { AppRoute } from '../const';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';

  if (pathname === AppRoute.Root) {
    rootClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
  }

  return {rootClassName, linkClassName};
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
