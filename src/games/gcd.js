import { getNum } from './math.js';

const recognizeDivider = (num1, num2) => {
  const getDivider = (a, b) => {
    if (a === b) return a;
    if (a < b) {
      return getDivider(a, b - a);
    }
    return getDivider(a - b, b);
  };
  return [[`${num1} ${num2}`], getDivider(num1, num2)];
};

export const rule = 'Find the greatest common divisor of given numbers.';
export const game = () => recognizeDivider(getNum(), getNum());
