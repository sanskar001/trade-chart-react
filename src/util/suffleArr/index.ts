function getRandomIndex(max: number) {
  return Math.trunc(Math.random() * max);
}

type SuffleArrType<T> = (_arr: Array<T>) => Array<T>;

export const suffleArr: SuffleArrType<any> = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const firstIndex = getRandomIndex(len);
    const secondIndex = getRandomIndex(len);
    [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
  }

  return arr;
};
