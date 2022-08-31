export const skipTake = (
  arr: Array<any>,
  skip: number,
  take: number
): Array<any> => arr.slice(skip, skip + take)
