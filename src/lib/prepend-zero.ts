export const prependZero = (value: number) =>
  value < 10 ? `0${value}` : `${value}`;
