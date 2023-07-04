function getRandomIndex(max: number) {
  return Math.trunc(Math.random() * max);
}

type SuffleArrType<T> = (_arr: Array<T>, _times?: number) => Array<T>;

export const suffleArr: SuffleArrType<any> = (arr, times) => {
  const len = arr.length;
  const freq = times || len;
  for (let i = 0; i < freq; i++) {
    const firstIndex = getRandomIndex(len);
    const secondIndex = getRandomIndex(len);
    [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
  }

  return arr;
};
