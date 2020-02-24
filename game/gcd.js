import { engine } from '../src/index.js';

const getNum = () => Math.floor(Math.random() * (100 - 2) + 2);

const getArrOfNums = () => {
  const arr = [];
  let count = 2;
  while (count > 0) {
    const temp = getNum();
    arr.push(temp);
    count -= 1;
  }
  return arr;
};

const getStrOfArr = () => {
  const [first, second] = getArrOfNums();
  const result = (second > first) ? [second, first] : [first, second];
  return result.join(' ');
};

const getDivider = (str) => {
  let [first, second] = str.split(' ');
  while (true) {
    const temp = first % second;
    if (temp === 0) {
      return String(second);
    }
    if (temp !== 0) {
      first = second % temp;
      if (first === 0) {
        return String(temp);
      } second = temp % first;
    }
  }
};
getDivider(getStrOfArr());

const rule = 'Find the greatest common divisor of given numbers.';

export default () => engine(rule, getStrOfArr, getDivider);
