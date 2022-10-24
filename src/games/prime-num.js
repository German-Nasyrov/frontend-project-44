import getRandom from '../helper.js';
import runLoop from '../index.js';

const minNum = 0;
const maxNum = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (number) => {
  if (number < 2) return false;
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) return false;
    divider += 1;
  }
  return true;
};

const getCircle = () => {
  const genRandomNum = getRandom(minNum, maxNum);
  const output = isPrimeNum(genRandomNum) ? 'yes' : 'no';
  const question = genRandomNum;
  return [question, output];
};

const prime = () => {
  runLoop(getCircle, description);
};

export default prime;
