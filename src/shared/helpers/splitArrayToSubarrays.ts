export const splitArrayToSubarray = <T>(size: number, array: T[]) => {
  const newArray = array;
  const subarray = [];
  for (let i = 0; i < Math.ceil(newArray.length / size); i++) {
    subarray[i] = array.slice(i * size, i * size + size);
  }
  return subarray;
};
