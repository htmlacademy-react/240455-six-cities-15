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


export { getRandomArrayElement, createIdGenerator, getRandomInteger };
